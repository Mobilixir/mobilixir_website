import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/data/site";
import "./globals.css";

// ─── Fonts ────────────────────────────────────────────────────────────────────

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Mobile & Web App Development`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "React Native development",
    "mobile app development India",
    "iOS app development",
    "mobile app security",
    "Next.js development",
    "Elixir Phoenix development",
    "App Store privacy manifest",
    "Fastlane CI/CD",
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
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {/* Theme initialisation — runs before first paint to prevent a flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||((window.matchMedia('(prefers-color-scheme:dark)').matches)?'mobilixir-dark':'mobilixir-light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${dmSans.variable} ${dmSerif.variable} font-sans antialiased bg-base-100 text-base-content`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:btn focus:btn-primary">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
