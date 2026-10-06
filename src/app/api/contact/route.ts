import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/contact-schema";

const MIN_FILL_MS = 3000;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

// Best-effort limiter: state lives in one server instance's memory, so it
// slows casual abuse but is not a hard guarantee on serverless platforms.
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }
  const data = parsed.data;

  // Bots get a success response so they do not learn what tripped the trap.
  if (data.website || !data.startedAt || Date.now() - data.startedAt < MIN_FILL_MS) {
    return NextResponse.json({ success: true });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_TO, EMAIL_CC } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !EMAIL_TO) {
    console.error("[contact] SMTP environment variables are not configured");
    return NextResponse.json({ error: "Message could not be sent." }, { status: 500 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 465,
      secure: true,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const rows: [string, string][] = [
      ["Name", data.name],
      ["Email", data.email],
      ["Service", data.service || "—"],
      ["Budget", data.budget || "—"],
    ];

    await transporter.sendMail({
      from: `"Mobilixir Website" <${SMTP_USER}>`,
      to: EMAIL_TO,
      cc: EMAIL_CC || undefined,
      replyTo: { name: data.name.replace(/[\r\n]/g, " "), address: data.email },
      subject: `New enquiry: ${data.service || "General"}`,
      text: [...rows.map(([k, v]) => `${k}: ${v}`), "", data.message].join("\n"),
      html: `<table>${rows
        .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`)
        .join("")}</table><p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] send failed", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "Message could not be sent." }, { status: 500 });
  }
}
