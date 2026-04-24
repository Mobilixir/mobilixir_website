import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
/**
 * POST /api/contact
 *
 * Accepts multipart/form-data with fields:
 *   name, email, company?, budget?, message, attachment? (File)
 *
 * In production, replace the console.log with an email sender such as:
 *   - Resend  (https://resend.com)
 *   - Nodemailer + SMTP
 *   - Formspree (just point the form action at your Formspree endpoint instead)
 */
export async function POST(request: NextRequest) {
	try {
		const formData = await request.formData();

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const company = formData.get("company") as string | null;
		const budget = formData.get("budget") as string | null;
		const message = formData.get("message") as string;
		const file = formData.get("attachment") as File | null;
		const attachments = [];

		if (file) {
			const buffer = Buffer.from(await file.arrayBuffer());

			attachments.push({
				filename: file.name,
				content: buffer,
			});
		}
		// Basic validation
		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: "name, email and message are required" },
				{ status: 400 },
			);
		}

		// ── Log submission (replace with real email sending) ──────────────────────
		console.log("[Contact Form Submission]", {
			name,
			email,
			company,
			budget,
			message,
			attachmentName: attachments ?? null,
			attachmentSize: attachments.length ?? null,
		});

		console.log({
			host: process.env.SMTP_HOST,
			port: process.env.SMTP_PORT,
			user: process.env.SMTP_USER,
		});

		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT),
			secure: true,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		});

		await transporter.sendMail({
			from: `"Mobilixir Website" <${process.env.SMTP_USER}>`,
			to: process.env.EMAIL_TO,
			cc: process.env.EMAIL_CC,
			attachments,
			replyTo: email, // user email
			subject: `New Contact Form Submission from ${name}`,
			text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
        company: ${company},
        budget: ${budget},
        message: ${message}
      `,
			html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Budget:</b> ${budget}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>

      `,
		});

		return NextResponse.json({ success: true }, { status: 200 });
	} catch (error) {
		console.error("[Contact API Error]", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}
