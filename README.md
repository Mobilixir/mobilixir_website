# Mobilixir Technologies — Website

Production-grade Next.js 15 website for Mobilixir Technologies, built with TypeScript, Tailwind CSS v4, DaisyUI v5, and Framer Motion.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 + DaisyUI v5 |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod |
| Fonts | DM Sans + DM Serif Display |
| Analytics | Google Analytics 4 (optional) |
| Deployment | Vercel |

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your GA4 ID etc.

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID (e.g. `G-XXXXXXXXXX`) |
| `RESEND_API_KEY` | Resend API key for sending contact form emails |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL |

## Enabling Analytics (Vercel)

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Copy the Measurement ID (starts with `G-`)
3. Add `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` in Vercel → Project Settings → Environment Variables
4. Redeploy

## Contact Form Email Setup

The `/api/contact` route currently logs submissions. To send real emails:

1. Sign up at [resend.com](https://resend.com) (free tier available)
2. Add your domain and get an API key
3. Install: `npm install resend`
4. Uncomment the Resend block in `src/app/api/contact/route.ts`
5. Add `RESEND_API_KEY` to your environment

## Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts   # Contact form API
│   ├── layout.tsx             # Root layout + SEO metadata
│   ├── page.tsx               # Home page
│   ├── sitemap.ts             # Automatic sitemap
│   ├── robots.ts              # Crawl rules
│   └── globals.css            # Tailwind + DaisyUI themes
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── TechStackSection.tsx
│   │   ├── CaseStudiesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       └── WhatsAppFab.tsx
├── data/
│   └── site.ts                # Single source of truth for all content
├── hooks/
│   ├── useTheme.ts
│   └── useInView.ts
└── lib/
    └── utils.ts               # cn(), animation variants
```

## Deployment

```bash
npm run build   # Verify build passes locally
```

Push to GitHub and connect to Vercel. Vercel auto-detects Next.js.

## Updating Content

All site content lives in `src/data/site.ts`. Edit that file to update:
- Navigation links
- Hero text and stats
- About section
- Services
- Process steps
- Tech stack
- Case studies
- Testimonials
- Social links

## Adding Real Client Testimonials

Replace the placeholder entries in `TESTIMONIALS` inside `src/data/site.ts` and remove the disclaimer note from `TestimonialsSection.tsx`.
