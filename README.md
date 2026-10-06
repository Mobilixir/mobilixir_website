# Mobilixir Technologies — Website

Marketing site for Mobilixir Technologies, built with Next.js (App Router), TypeScript, Tailwind CSS v4, DaisyUI and Framer Motion.

## Routes

| Route | Purpose |
|---|---|
| `/` | Home: hero, services, featured work, process, stack, latest posts |
| `/services`, `/services/[slug]` | Service overview and detail pages |
| `/work`, `/work/[slug]` | Published libraries, tools and extensions |
| `/blog`, `/blog/[slug]` | Posts pulled from dev.to (hourly revalidation) |
| `/about`, `/contact`, `/privacy` | Company info, enquiry form, privacy policy |
| `/sitemap.xml`, `/robots.txt`, `/rss.xml` | SEO and feeds |

## Getting started

```bash
npm install
cp .env.example .env     # fill in SMTP details for the contact form
npm run dev
```

Other scripts: `npm run build`, `npm run lint`, `npx tsc --noEmit`.

## Updating content

All content lives in [src/data/site.ts](src/data/site.ts). Add an entry to `SERVICES` or `PROJECTS` and the page, listings, sitemap and related links update automatically. Blog posts come from the dev.to account in `SITE.devtoUsername`; publish there and the site picks them up within an hour.

Content rule: no metric, client or testimonial goes in unless it is real.

## Environment variables

| Name | Purpose |
|---|---|
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | SMTP (TLS) credentials for the contact form |
| `EMAIL_TO`, `EMAIL_CC` | Where enquiries are delivered |

## Notes

- Contact form protections: shared Zod validation, honeypot, minimum fill time and a best-effort in-memory rate limit (per server instance).
- `eslint` is pinned to 9 and `typescript` to 6 until typescript-eslint and eslint-plugin-react support ESLint 10 / TypeScript 7.
- `docs/private/` is git-ignored and holds private source material.
- The plan and remaining backlog are in [PLAN.md](PLAN.md).
