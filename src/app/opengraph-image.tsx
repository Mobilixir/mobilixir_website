import { ImageResponse } from "next/og";
import { SITE } from "@/data/site";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#16181b",
          color: "#f4f4f5",
        }}
      >
        <div style={{ fontSize: 40, color: "#34d399", fontWeight: 700, display: "flex" }}>mobilixir.</div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1, marginTop: 24, display: "flex" }}>
          Mobile and web products, engineered to last.
        </div>
        <div style={{ fontSize: 30, color: "#a1a1aa", marginTop: 32, display: "flex" }}>
          React Native · iOS · Next.js · Elixir · Mobile security
        </div>
      </div>
    ),
    size,
  );
}
