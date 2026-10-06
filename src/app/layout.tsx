import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/layout/Providers";
import { SITE } from "@/data/site";
import "./globals.css";

// ─── Fonts ────────────────────────────────────────────────────────────────────

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Mobile & Web App Development`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "mobile app development company India",
    "React Native development",
    "hire React Native developer",
    "iOS app development",
    "Swift SwiftUI developer",
    "cross-platform app development",
    "mobile app security",
    "root detection jailbreak detection",
    "App Store privacy manifest",
    "Next.js development",
    "Phoenix LiveView development",
    "Elixir development",
    "Node.js API development",
    "Fastlane CI/CD",
    "mobile app consulting",
    "startup software development",
    "freelance mobile developer India",
    "software studio India",
    SITE.name,
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Mobile & Web App Development`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Mobile & Web App Development`,
    description: SITE.description,
  },
  alternates: { canonical: "/", types: { "application/rss+xml": "/rss.xml" } },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1424" },
  ],
  width: "device-width",
  initialScale: 1,
};

// ─── Structured data (JSON-LD) ────────────────────────────────────────────────
// Organisation only: no personal name or phone number.

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/mobilixir_logo.svg`,
  description: SITE.description,
  email: SITE.email,
  areaServed: "Worldwide",
  knowsAbout: ["React Native", "iOS development", "Next.js", "Elixir", "Mobile app security"],
};

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Reveals start hidden; without JS they must still be readable */}
        <noscript>
          <style>{`[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {/* Theme initialisation — runs before first paint to prevent a flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||((window.matchMedia('(prefers-color-scheme:dark)').matches)?'mobilixir-dark':'mobilixir-light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased bg-base-100 text-base-content`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:btn focus:btn-primary">
          Skip to content
        </a>
        <Providers>
          <div className="scroll-progress" aria-hidden="true" />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
