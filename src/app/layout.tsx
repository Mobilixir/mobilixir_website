import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

// ─── Fonts ────────────────────────────────────────────────────────────────────

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mobilixir.in"),
  title: {
    default: "Mobilixir Technologies — Mobile & Web App Development Consultancy",
    template: "%s | Mobilixir Technologies",
  },
  description:
    "Boutique software consultancy specialising in React Native, Swift, Elixir/Phoenix, and Next.js. We build production-grade mobile and web applications for startups and scale-ups.",
  keywords: [
    "React Native development",
    "mobile app development India",
    "iOS app development",
    "Elixir Phoenix development",
    "Next.js development",
    "software consultancy",
    "freelance mobile developer",
    "TypeScript developer",
    "Swift SwiftUI developer",
    "cross-platform app development",
    "B2B SaaS development",
    "startup software development",
    "CI/CD automation Fastlane",
    "web app development Pune",
    "Mobilixir Technologies",
    "fintech app development",
    "real-time chat app",
    "Phoenix LiveView",
    "full stack developer India",
  ],
  authors: [{ name: "Rushikesh Pandit", url: "https://www.mobilixir.in" }],
  creator: "Mobilixir Technologies",
  publisher: "Mobilixir Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.mobilixir.in",
    siteName: "Mobilixir Technologies",
    title: "Mobilixir Technologies — Mobile & Web App Development",
    description:
      "Boutique software consultancy. React Native · Swift · Elixir/Phoenix · Next.js. We ship production-grade apps without the big-agency overhead.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mobilixir Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobilixir Technologies — Mobile & Web App Development",
    description:
      "Boutique software consultancy specialising in React Native, Swift, Elixir and Next.js.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.mobilixir.in",
  },
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

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	name: "Mobilixir Technologies",
	url: "https://www.mobilixir.in",
	logo: "https://www.mobilixir.in/mobilixir_logo.svg",
	description:
		"Boutique mobile and web software consultancy specialising in React Native, Swift, Elixir/Phoenix, and Next.js.",
	founder: {
		"@type": "Person",
		name: "Rushikesh Pandit",
	},
	areaServed: ["GB", "EU", "IN", "US"],
	serviceType: [
		"Mobile App Development",
		"Web App Development",
		"Backend Development",
		"CI/CD Automation",
	],
	contactPoint: {
		"@type": "ContactPoint",
		telephone: "+91-75889-45789",
		contactType: "customer service",
		email: "rushikesh.d.pandit@gmail.com",
		availableLanguage: "English",
	},
	sameAs: [
		"https://github.com/mobilixir",
		"https://www.linkedin.com/company/mobilixir",
	],
};

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Theme initialisation — runs before first paint to prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||((window.matchMedia('(prefers-color-scheme:dark)').matches)?'mobilixir-dark':'mobilixir-light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})()`,
          }}
        />

        {/* Google Analytics — enable your Measurement ID in Vercel env vars */}
        {/* Replace G-XXXXXXXXXX with your real GA4 Measurement ID */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}',{page_path:window.location.pathname});`,
              }}
            />
          </>
        )}
      </head>
      <body className={`${dmSans.variable} ${dmSerif.variable} font-sans antialiased bg-base-100 text-base-content`}>
        {children}
      </body>
    </html>
  );
}
