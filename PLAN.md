# Mobilixir.in — Revamp Plan

Source: `tasks.txt`. Every point in it is mapped to a phase below (see the **Traceability Matrix** at the end).

---

## 0. Guiding Constraints (read first)

These two constraints from `tasks.txt` override everything else; every phase is checked against them.

1. **Stealth mode.** Solo developer who is still employed. The site must be low profile, with no personal name, photo, personal phone number or personal email shown prominently. It must still look like a credible small company. It must be easy to scale and easy to update without heavy technical work.
2. **No clients, projects or testimonials yet.** The portfolio has to prove capability honestly through personal projects, open-source work and engineering write-ups. **Nothing fabricated.**

### Decisions Log (confirmed by you)

| Topic | Decision | Consequence in this plan |
|---|---|---|
| Public contact | `rushikesh@mobilixir.in` + contact form. Personal phone and WhatsApp are **removed** | Phase 2 removes the phone, the WhatsApp FAB and `rushikesh.d.pandit@gmail.com`. See stealth risk R1 below. |
| Legal name | **Mobilixir Technologies**, **not registered**; registration only once there is income | Footer and privacy page must not claim a registered entity: use "Mobilixir Technologies" with **no** "Pvt Ltd/LLP", no GST/CIN, and wording such as "operated by an independent developer in India". Add a registration trigger to Phase 11. |
| Blog | **Option C** (dev.to now → own MDX with canonical later). Profile: `dev.to/rushikeshpandit` | Phase 6. |
| DaisyUI | Keep **only if** it suits; otherwise drop | Phase 4 evaluates it. Default leaning: **drop** for a distinctive brand, and use Tailwind v4 tokens + Radix/Base UI primitives. |
| Portfolio items | 6 real items (below) | Phase 5.3 is now concrete. |
| Resume | Added at `docs/private/Resume_Rushikesh_Pandit.pdf` | **Now git-ignored** (`docs/private/` added to `.gitignore`; it was *not* ignored before and would have been committed). Content mined in 1.1. |
| Tech versions | Use the **latest** of everything | New task: Phase 1.6 (dependency upgrades). |

**Portfolio set (from your list):**
1. `react-native-root-jail-detect` (npm): root/jailbreak/Frida/debugger/emulator detection.
2. `react-native-privacy-guard-kit` (npm): screenshot/recording/app-switcher/clipboard protection.
3. `react-native-qr-camera-pro` (npm): QR/camera module. *(Not on the resume. Add a one-line description from its README.)*
4. iOS App Privacy generator (`ios-app-privacy.vercel.app`): generates `PrivacyInfo.xcprivacy`.
5. VS Code extension: Redux Toolkit Saga **TypeScript** Boilerplate.
6. VS Code extension: Redux Toolkit Saga Boilerplate.

Themes that emerge: **mobile security/privacy tooling**, **developer tooling**, **App Store compliance**. That is a coherent niche, so position the portfolio as "mobile app security & compliance tooling" rather than a generic list.

### Stealth risks raised by these decisions (please read)

- **R1 — `rushikesh@mobilixir.in` contains your first name.** It is your choice, and the plan follows it. Be aware that it identifies you to anyone who gets the email. A neutral alias (`hello@`, `contact@`) forwarding to the same inbox gives you the same convenience with no name. Recommended: display `hello@mobilixir.in` on the site, and keep `rushikesh@` as a working address.
- **R2 — Every portfolio item is published under your personal name** (npm maintainer, VS Code publisher `RushikeshPandit`, GitHub `rushikeshpandit`, dev.to `rushikeshpandit`). A visitor who clicks through learns who you are. Options: (a) accept it, since it is real credibility and the strongest proof you have; (b) show the work on the site but without outbound links to personal profiles, which still leaves the package names searchable; (c) later, republish under a `mobilixir` GitHub org/npm scope. Recommended: **(a) now, (c) over time**, and be conscious that the "stealth" is toward your employer's casual notice, not toward determined search. The existing GitHub org `github.com/mobilixir` is already in `SOCIALS`: use it for links where a repo can live there.
- **R3 — Resume contains public identifiers** (phone, personal Gmail, personal site `rushikeshpandit.in`, LinkedIn). Do not link to `rushikeshpandit.in` from the new site.
- **R4 — Resume mentions `Mindstix`, which is one of your five inspiration sites.** Fine for research, but do not copy its copy, layout or assets.
- **R5 — Resume claims that must NOT go on the site as-is:** the "500K+ downloads" messaging app, "App Store 3.8 → 4.6", "40% performance improvement", "banking apps for a leading European bank", team mentoring numbers. These come from **employer work** (confidentiality/IP, and they describe results you do not own). Only the six personal items above, plus generic skills, are public-safe. The "600 developers" and "240 active users" for the extensions and the "14,000 readers" for dev.to are about **your own** work and are fine **if still true**. Re-verify them against the current Marketplace/dev.to counts before publishing, and prefer live-fetched numbers.
- **R6 — You are currently employed at a company whose domain overlaps** (mobile banking, React Native, iOS). That raises the moonlighting/IP/non-compete question (Phase 1.4), especially for the **security** libraries. Confirm those were built on your own time and equipment.

### Findings from the audit of the current repo

| # | Finding | Why it matters | Resolved in |
|---|---|---|---|
| F1 | `src/data/site.ts` contains six detailed **case studies with invented metrics** (4.8★ rating, 85% retention, "Featured by Apple", etc.) | Fabricated results are a legal and reputational risk, and one client reference check exposes them. It also contradicts "no clients yet". | Phase 2 |
| F2 | `TESTIMONIALS` contains **fake named testimonials** (and one names "Rushikesh") | Same risk. It also breaks anonymity. | Phase 2 |
| F3 | Real **phone / WhatsApp number** (`+91 75889…`) and `rushikesh@` email are in `SOCIALS`; a WhatsApp FAB is on every page | Direct conflict with stealth/privacy. | Phase 2 |
| F4 | Hero stats claim "10+ years" and "5+ open-source libraries" | Identifies one person, and the claims must be verifiable. | Phase 2 |
| F5 | About copy says "team of expert engineers… we don't subcontract" | Misrepresents a solo studio. Use honest wording such as "independent studio". | Phase 2 |
| F6 | `Zenvoi` logo in `/public` and `Mobilixir Technologies` as the legal-sounding name | Check this does not tie the site to an employer. Confirm the company name and registration status. | Phase 1 |
| F7 | **No blog** exists in the repo although `tasks.txt` says the old site pulled posts from dev.to | The blog has to be rebuilt. | Phase 6 |
| F8 | Single-page site. Sitemap has one URL. No service, project or blog pages | Weak SEO and no deep-linking. | Phases 4, 5, 6, 8 |
| F9 | README says Next.js 15; `package.json` has Next 16.3.3 | Docs drift. | Phase 10 |
| F10 | `/api/contact` has validation only for presence. It has **no rate limiting, no honeypot or captcha, no file-type or size limits, and no email-format check**. The `zod` and `react-hook-form` dependencies are already installed. | Spam and abuse risk, and an arbitrary-file attachment path. | Phase 7 |
| F11 | `.env` is untracked. It must stay untracked, and `.env.example` is missing although the README refers to it | Secret hygiene. | Phase 1 |
| F12 | Author metadata, `layout.tsx` and the JSON-LD may carry personal details (recent commits touched the author and email) | Privacy. | Phase 2 |
| F13 | Emoji icons for services (📱🍎🔥) | Looks amateur. Replace with a consistent icon set (`lucide-react` is already installed). | Phase 4 |
| F14 | No `og-image.png` in `/public` although metadata references it | Broken social previews. | Phase 8 |
| F15 | Tech-stack logos are referenced at `/tech/*.svg`, but `/public/tech` does not exist | Broken images. | Phase 4 |

> **Not available to me:** your resume (referenced in `tasks.txt` as attached, but no file was found in the repo) and live access to the current production site and the five inspiration sites. Phase 1 therefore includes the steps to supply or capture them. Any statement below about the inspiration sites is a hypothesis to verify in Phase 1, not a finding.

---

## Phase 1 — Discovery, Audit & Foundations
**Goal:** know exactly what exists, what the inspirations do well, and lock the decisions that everything else depends on.
**Covers:** Task 1, Task 2, resume input, stealth decisions.

### 1.1 Inputs to collect
- [ ] Add the resume (PDF) to a **git-ignored** folder such as `docs/private/`. Add it to `.gitignore` first. It is used as source material only and never published.
- [ ] Extract from the resume: skills, years per skill, domains, notable work, open-source projects, certifications. Mark each item **public-safe / anonymise / never publish**.
- [ ] Decide the brand facts: legal or trading name, registration status (sole proprietorship, LLP, Pvt Ltd or none yet), whether the name is available in India, and the contact channel.

- [x] Resume added (`docs/private/`, git-ignored). Skills confirmed from it: React Native, Swift, SwiftUI, TypeScript, JavaScript, Next.js, Node.js, Elixir, Phoenix, Tailwind CSS, Fastlane, CircleCI, Bitrise.
- [ ] **Skill/offer alignment:** the current `site.ts` lists **Flutter, Spring Boot and Wasp** (see `TECH_STACK`/`SERVICES`) but they are **not on the resume**. Remove them or only list them if you can genuinely deliver. Conversely, your strongest, provable strengths (React Native, iOS/Swift, mobile security, Redux Toolkit/Saga, App Store compliance) should lead.
- [ ] Mark the resume items public-safe vs. not per risks R5/R6.

### 1.2 Task 1 — Audit of the current mobilixir.in (live site)
Capture each item with screenshots (desktop and mobile) and numbers.
- [ ] **Design:** visual hierarchy, colour consistency, typography, emoji icons (F13), image quality, dark/light theme behaviour, spacing rhythm.
- [ ] **UX:** the 7-link single-page nav, scroll depth, CTA clarity (is there one primary action per screen?), mobile menu behaviour, form friction (fields, attachment), the WhatsApp FAB.
- [ ] **Functionality:** contact form end to end (success, error, spam), blog fetch, anchors, 404 page, theme toggle.
- [ ] **Performance:** Lighthouse mobile and desktop (Performance, Accessibility, Best Practices, SEO), Core Web Vitals (LCP, INP, CLS), page weight, font loading, animation cost (`framer-motion` bundle).
- [ ] **SEO:** title and description uniqueness, heading structure, canonical, sitemap (F8), `robots`, structured data, OG image (F14), indexed pages via `site:mobilixir.in`.
- [ ] **Accessibility:** axe DevTools or WAVE run, keyboard-only pass, focus order and visibility, colour contrast, `prefers-reduced-motion`, screen-reader pass (VoiceOver is available on this Mac).
- [ ] **Security and privacy:** the F3, F10, F11 and F12 items, response headers (CSP, HSTS), exposed emails and phone numbers, cookie and analytics consent.
- [ ] **Content:** every claim checked for truthfulness (F1 to F5).
- [ ] Output: `docs/audit/current-site-audit.md` with a prioritised issue list (P0, P1, P2).

### 1.3 Task 2 — Inspiration-site analysis
Sites: thynqit.com, mindstix.com, preymaker.com, reelmotion.fit, marcuslorenzet.com.
For **each** site, fill the same template so they are comparable:

| Dimension | What to record |
|---|---|
| Positioning | One-line promise, target client, tone of voice |
| Information architecture | Nav items, page count, footer structure, depth of service pages |
| Hero | Layout, headline formula, CTA wording and placement, motion |
| Visual system | Palette (hex values), type pairing, grid, imagery or illustration style, iconography |
| Motion and interaction | Scroll effects, hover states, page transitions, cursor effects, what is purely decorative |
| Trust signals | Logos, case studies, metrics, certifications, team, reviews |
| Conversion | Number and kind of CTAs, contact form length, booking links |
| Performance and a11y | Lighthouse scores, reduced-motion support, contrast |
| What to borrow / what to avoid | Concrete and specific, mapped to the Phase 3 decisions |

Hypotheses to test (verify, don't assume): agency-style sites (thynqit, mindstix) lean on service pages and case studies and so would overshoot a stealth solo studio; the portfolio-style sites (marcuslorenzet, preymaker, reelmotion) lean on motion and typography, which is the part that transfers well.
- [ ] Output: `docs/research/inspiration-report.md` with a cross-site comparison table and a ranked "steal this" list.

### 1.4 Foundations decisions (record in `docs/decisions.md`)
- [ ] Brand name usage and the neutral contact identity: a role address such as `hello@mobilixir.in`, a contact form, and optionally a Cal.com or Calendly link with no personal name. Retire the personal phone and WhatsApp (F3) from the public site.
- [ ] Employment check: read the employment contract for moonlighting and IP clauses and for the rules on side businesses. Keep the work separate from employer devices and accounts. (This is a risk item, not legal advice. Consider asking a lawyer if the contract is unclear.)
- [ ] Hosting and domain: Vercel (current), DNS, `www` vs apex redirect, **WHOIS privacy on** for the domain.
- [ ] Stack: stay on Next.js App Router + TypeScript + Tailwind v4. Decide **keep or drop DaisyUI** (Phase 4) and **keep or reduce framer-motion** (Phase 9).
- [ ] Content-management approach (Phase 5): typed data files vs MDX vs headless CMS.

### 1.6 Upgrade to the latest versions (as of `npm outdated`, 2026-10-06)
Dependencies are not installed locally yet, so run `npm install` first. Do this on its own branch **before** the build phases so that new code targets the final APIs.

| Package | package.json | Latest | Note |
|---|---|---|---|
| next | 16.3.3 | 16.3.8 | patch |
| react / react-dom | 19.2.5 | 19.3.0 | minor. Also move `@types/react(-dom)` and remove the `overrides` pin if it is no longer needed |
| zod | ^3.24 | **4.6.5** | **major**: API changes (error formatting, `z.string().email()` → `z.email()`, etc.). Needed by Phase 7's schemas |
| @hookform/resolvers | ^3.9 | **5.9.1** | **major**: required for Zod 4. Upgrade together with zod |
| nodemailer | 9.1.1 | **10.0.15** | **major**: check the changelog. Phase 7 may replace it with Resend |
| framer-motion | ^12 | **14.0.0** | **major**: the package is now `motion` (`motion/react`). Check migration notes. Phase 9 reviews bundle size anyway |
| lucide-react | 0.511 | **1.52.0** | **major**: icon renames possible |
| daisyui | ^5 | 5.7.47 | only if kept (Phase 4) |
| tailwindcss, @tailwindcss/postcss | ^4.1 | latest 4.x | verify |
| typescript, eslint, eslint-config-next, @types/node | ^5 / ^9 / 16.2.4 / ^20 | latest | `eslint-config-next` is behind `next` (16.2.4 vs 16.3.x): align. `@types/node` 20 should match the Node LTS actually used |
| Node | local v26.7.0 | | Pin the engine in `package.json` (`engines`) and `.nvmrc`, and match Vercel's Node setting |

- [ ] `npm install`, then `npm outdated` / `npm-check-updates` to confirm the numbers above (they may move).
- [ ] Upgrade in order: Next/React (minor) → TypeScript/ESLint → zod + resolvers (together) → motion → lucide → nodemailer. Run `lint`, `tsc` and `build` after each step and commit separately.
- [ ] Read each major's migration guide **before** bumping. Do not bump blindly.
- [ ] Re-check versions again at the start of Phase 4 and before launch. "Latest" keeps moving. Dependabot stays on.
- [ ] Also use the latest platform features deliberately: Next.js App Router with Server Components, `next/og`, Tailwind v4 `@theme`, React 19 `useActionState`/server actions for the contact form (an alternative to the route handler).

### 1.5 Repo hygiene
- [x] `docs/private/` is now in `.gitignore` (the resume contains a phone number, a personal email and a photo, and would otherwise have been committed).
- [ ] `.env` is **not** ignored per `git status` (it shows as untracked `??`). Verify with `git check-ignore -v .env`. If it is not ignored, add it to `.gitignore` **before** any `git add .`. Add `.env.example` with variable names only (F11).
- [ ] Branching: feature branches per phase and PRs into `main`. Keep Dependabot.
- [ ] Add scripts: `typecheck`, `lint`, `format`. Set up Prettier. Add a `husky`/`lint-staged` pre-commit hook (optional).

**Exit criteria:** audit and inspiration reports written, decisions file signed off, resume parsed, no open question about the name or contact identity.

---

## Phase 2 — Stealth, Truthfulness & Content Cleanup (do early, ship fast)
**Goal:** remove every risk item from the current site now. This is quick, high value and independent of the redesign.
**Covers:** Main point 1 (privacy), Main point 2 (no fabricated work).

- [ ] **Remove the fabricated testimonials** (F2) and the section that renders them. Do not ship placeholders that look real.
- [ ] **Remove or relabel the six case studies** (F1). Either delete them, or turn each into a clearly labelled **"Concept / Reference Architecture"** or **"Sample Build"** (see Phase 5). No metrics without a source.
- [ ] **Remove the personal phone, WhatsApp FAB and personal email** (F3). Use the form and a role mailbox.
- [ ] **Rewrite the hero stats** (F4) so they are true, verifiable and not personally identifying. Examples: "Mobile, Web & Backend", "React Native · Swift · Elixir · Next.js", "Remote-first". Drop "10+ years" unless you are happy to be identified by it.
- [ ] **Rewrite the About copy** (F5) as an honest "independent studio". The voice is plural "we" only if you are comfortable with it, otherwise a neutral "Mobilixir builds…". No team claims.
- [ ] **Metadata scrub** (F12): `authors`, `creator`, `publisher`, JSON-LD `Person`/`Organization`, `humans.txt`, image EXIF metadata, `package.json` author, README. Use the company name only.
- [ ] Review the git history for personal data in committed files. Commit messages show the git user name, so consider using a neutral git identity for this repo.
- [ ] Add an honest **"Currently taking on a limited number of projects"** line, as a calm availability indicator.
- [ ] Check the `zenvoi_logo.png` asset (F6): remove it if it ties to any employer or unrelated brand.

**Exit criteria:** a grep for the personal phone, name and the testimonial names returns nothing in `src/` and `public/`; the deployed site passes a manual "who is behind this?" test.

---

## Phase 3 — Brand, Design System & Information Architecture
**Goal:** a modern, clean, professional identity that can grow.
**Covers:** Task 3 (layout, colour, typography, navigation, content structure), design section of `tasks.txt`.

### 3.1 Brand
- [ ] Positioning statement: who it is for (early-stage founders and SMEs needing mobile and web products), what makes it different (senior-level engineering, direct access, boring-tech reliability), and the tone (calm, precise, plain English).
- [ ] Logo: refine `mobilixir_logo.svg`, with a monochrome version, a favicon set and an app-icon set.
- [ ] Voice guide: one page, with do and don't examples.

### 3.2 Visual system (informed by 1.3)
- [ ] **Colour:** one primary, one accent, a neutral ramp, and semantic colours. Define as CSS variables / Tailwind v4 `@theme` tokens. Verify **WCAG AA contrast** (4.5:1 for body text, 3:1 for large text and UI) in both light and dark themes.
- [ ] **Typography:** one display face and one text face (currently DM Serif Display + DM Sans, which is a valid choice, so either keep it or change it deliberately). Define a type scale (fluid `clamp()`), line heights and the measure (60–75 characters).
- [ ] **Layout:** a 12-column grid, a spacing scale (4/8 px), container widths, and section rhythm.
- [ ] **Components (documented):** Button (primary, secondary, ghost), Card, Badge or Tag, Section heading, Nav, Footer, Form fields, Callout, Timeline item, Project card, Service card, Post card.
- [ ] **Imagery:** a consistent illustration or abstract-gradient style that needs no stock photos of people. This suits the anonymity goal. Optimise as SVG or AVIF/WebP.
- [ ] **Icons:** one set (lucide) replacing emoji (F13).

### 3.3 Information architecture / proposed sitemap
```
/                         Home (hero, services overview, featured projects, process, latest posts, CTA)
/services                 Services overview (grid)
/services/[slug]          One page per service
   mobile-app-development        (React Native, native iOS/Swift)
   web-app-development           (Next.js, Phoenix LiveView)
   backend-and-api               (Elixir, Node.js, Spring Boot)
   devops-and-ci-cd              (Fastlane, CircleCI, Bitrise)
   technical-consulting          (code review, architecture, MVP scoping) [new, low-effort offer]
/work                     Portfolio index (filterable by tag)
/work/[slug]              Project detail
/blog                     Post index
/blog/[slug]              Post (dev.to-synced or local MDX)
/about                    Studio, approach, values, tech stack (no personal name)
/process                  How engagements work (or a section on /about)
/contact                  Form + booking link + response-time expectation
/privacy                  Privacy policy
/terms                    (optional) Terms of engagement
/sitemap.xml  /robots.txt  /rss.xml  /404  /500
```
- [ ] **Navigation:** top bar with Services, Work, Blog, About, plus a single **"Start a project"** CTA button. Keep it to five items or fewer. The mobile menu is a full-screen sheet with focus trapping. The footer carries the full sitemap, the legal links and the socials (company accounts only).
- [ ] **Content model per page:** write a one-paragraph purpose and a primary CTA per page.

### 3.4 Wireframes / mockups (Task 4 deliverable)
- [ ] Low-fi wireframes (Figma, Excalidraw or hand-drawn and photographed): Home, Services index, Service detail, Work index, Project detail, Blog index, Post, About, Contact. **Mobile first**, then desktop.
- [ ] Hi-fi mockups for Home and one inner page of each type, in light and dark.
- [ ] Clickable prototype is optional.
- [ ] Review against the inspiration report ("steal this" list).

**Exit criteria:** design tokens file, a component inventory, signed-off wireframes, a signed-off sitemap.

---

## Phase 4 — Core Build: Layout, Components & Home
**Goal:** the new shell and the home page, implemented against the design system.
**Covers:** Services section visuals, responsive design, navigation, design aspect.

- [ ] Restructure `src/` for growth:
  ```
  src/app/(marketing)/…        routes
  src/components/ui/           primitives
  src/components/sections/     page sections
  src/content/                 services, projects, posts (Phase 5)
  src/lib/                     utils, seo, mail, rate-limit
  ```
- [ ] Implement tokens in `globals.css` (`@theme`). Decide on DaisyUI: keep it only if it is used consistently, otherwise replace it with own components for a distinctive look and a smaller CSS bundle.
- [ ] Build primitives from 3.2 with keyboard and ARIA support. Use a headless library (Radix UI or Base UI) for menus and dialogs instead of hand-rolling them.
- [ ] **Navbar** (sticky, hides on scroll-down and shows on scroll-up, with an active-route indicator), **mobile menu**, **Footer**, **ThemeToggle** (system default, stored preference, no flash on load).
- [ ] **Home page** sections: Hero → trust strip (tech used) → Services grid → Featured work → Process → Latest posts → Final CTA.
- [ ] **Services grid:** cards with icon, a one-sentence outcome-focused description, a tech tag row and a **per-card CTA** ("Discuss mobile apps →" linking to `/services/[slug]?` and `/contact?service=slug`).
- [ ] Fix F15: add the tech logos in `/public/tech` (or use `simple-icons`) and delete references to missing files.
- [ ] Replace emoji (F13).
- [ ] Responsive pass at 320, 375, 768, 1024, 1280 and 1536 px. No horizontal scroll, touch targets of at least 44 px.
- [ ] Custom `not-found.tsx` and `error.tsx`.

**Exit criteria:** the Home page matches the mockup at all breakpoints; Lighthouse Accessibility 95 or better on Home.

---

## Phase 5 — Content System, Services Pages & Portfolio (no-client-friendly)
**Goal:** a maintainable content model, and a portfolio that is honest and still persuasive.
**Covers:** Services (dedicated pages), portfolio, Main point 1 (easy updates), Main point 2.

### 5.1 Content management (easy updates without heavy technical work)
Recommendation: **MDX files in the repo + typed frontmatter** (validated with Zod), with no database at first.
- [ ] `src/content/services/*.mdx`, `src/content/projects/*.mdx`, `src/content/posts/*.mdx`.
- [ ] A frontmatter schema per type (title, slug, summary, tags, date, status, cover, links…) validated at build time so a typo fails the build, not production.
- [ ] Updating the site means "add a file and push". Vercel redeploys.
- [ ] Optional upgrade path: Sanity, Keystatic or Decap CMS for a browser editing UI if file editing gets tiresome. The schemas above carry over.
- [ ] A short `docs/how-to-update.md`: add a project, a service, a post, a FAQ item.

### 5.2 Service pages (`/services/[slug]`)
Each page uses the same template:
- [ ] Headline and outcome, who it is for, what is included, deliverables, the tech used and why, a process specific to the service, a **pricing model** (fixed scope, time and materials, retainer; ranges are optional), FAQs, a related project or post, and a CTA that pre-fills the contact form.
- [ ] Content source: resume and `SERVICES` in the current `site.ts` (React Native, native iOS, Phoenix LiveView, Next.js, backend/API, CI/CD). Add "Technical consulting & code review" as an easy-to-deliver first offer.
- [ ] `Service` JSON-LD per page (Phase 8).

### 5.3a Concrete portfolio (confirmed list)
Each gets a `/work/[slug]` page: problem, what it does, API/usage snippet, architecture or screenshot, install link, repo link, and **live** stats (npm weekly downloads, Marketplace installs) fetched at build time with ISR. If a number is low, show nothing rather than a weak number.

| Slug | Item | Category | Page angle |
|---|---|---|---|
| `react-native-root-jail-detect` | npm library | Mobile security | Threat model: root/jailbreak, Frida, debugger, emulator. What it detects and its limits (honest about bypass) |
| `react-native-privacy-guard-kit` | npm library | Mobile security/privacy | Screenshot/recording/app-switcher/clipboard protection, hook + provider API, zero dependencies |
| `react-native-qr-camera-pro` | npm library | Mobile / camera | QR scanning performance and API (**need a description from you**) |
| `ios-app-privacy-generator` | Web tool (Vercel) | App Store compliance | Generates `PrivacyInfo.xcprivacy`. A good lead-magnet and SEO page ("PrivacyInfo.xcprivacy generator") |
| `redux-toolkit-saga-typescript-boilerplate` | VS Code extension | Developer tooling | Scaffold RN + Redux Toolkit + Saga in TypeScript |
| `redux-toolkit-saga-boilerplate` | VS Code extension | Developer tooling | The JS variant. **Consider merging items 5 and 6 into one page** with a variant switch. Two near-identical cards look thin |

- [ ] A **category row** on `/work`: Mobile Security · Developer Tooling · App Store Compliance. This shows a niche instead of "random side projects".
- [ ] Turn the strongest into **services**: *Mobile app security hardening* (rooted-device policy, screenshot/clipboard protection, privacy manifest and App Store compliance audit) maps to your real libraries. This is a more credible and more differentiated offer than a generic "we build apps".
- [ ] Highest-value extra proof (cheap): **one case-note blog post per library** (the threat model, design decisions). It feeds the blog (Phase 6) and SEO.
- [ ] Verify each package's README and license, and the maintainer name shown, before linking (risk R2).

### 5.3 Portfolio with no clients — honest content types (reference)
| Type | What it is | Labelling |
|---|---|---|
| **Personal projects** | Real apps or tools you built and can demo or open-source | "Personal project" |
| **Open-source** | Contributions and your own libraries, linked to GitHub/npm/hex.pm with real stars and downloads pulled from the API | "Open source" |
| **Sample builds / starter kits** | Small, polished things you build **to demonstrate** a service: an RN app template, a Phoenix LiveView demo, a Fastlane pipeline example | "Sample build" |
| **Engineering write-ups / teardowns** | Deep technical posts on a real problem you solved (anonymised work experience; **check employer confidentiality**) | "Case note" |
| **Reference architectures** | Diagrams and reasoning for common product types (the six former "case studies" can be rewritten here honestly) | "Reference architecture" |

- [ ] Replace the six invented case studies with 3 to 6 real items from this table. Quality over quantity: **three strong items beat six thin ones.**
- [ ] A project page template: problem, approach, architecture diagram, stack, what I learned, repo and demo links, screenshots or a short screen recording.
- [ ] A filter on `/work` by tag (Mobile / Web / Backend / DevOps / OSS).
- [ ] An "In progress" status badge so the section can show momentum and look alive.
- [ ] **Rule:** no metric appears unless it is measured and sourced. Do not imply client work.
- [ ] **Employer-IP rule:** do not publish anything built on employer time, with employer code or with employer data.
- [ ] Placeholder strategy for **testimonials**: show none until real. The slot is built in the template but hidden. When the first client finishes, ask for a quote with permission to publish (Phase 11).

### 5.4 Trust without clients
- [ ] A "How we work" page, an explicit engagement model, a response-time promise, a security and code-quality stance (tests, reviews, CI), and a short FAQ.
- [ ] A "Tech we use" strip showing real, resume-backed skills only.
- [ ] Free resource as a lead magnet (e.g. an "App launch checklist" PDF or a post), optional.

**Exit criteria:** adding a project, service and post each takes under five minutes through a file only; no unverifiable claim is left in the content.

---

## Phase 6 — Blog / Resources
**Goal:** a blog that is part of the design, supports SEO and drives traffic.
**Covers:** the blog point in `tasks.txt`.

Decision (take it in Phase 1.4): where do posts live?
| Option | Pros | Cons |
|---|---|---|
| **A. Fetch from dev.to at build time + ISR** (current approach per `tasks.txt`) | Zero duplicate authoring, existing audience | Canonical URL lives on dev.to unless set, dependent on the external API |
| **B. Local MDX, cross-post to dev.to with `canonical_url` pointing to mobilixir.in** | Best for SEO, full control, offline | Two places to publish (can be automated through the dev.to API) |
| **C. Hybrid:** A now, B later | Fastest start | Migration work later |

Recommended: **C → start with A, move to B**, so the site's SEO value accrues to mobilixir.in.
- [ ] `lib/devto.ts`: fetch `https://dev.to/api/articles?username=…` with `next: { revalidate: 3600 }`. Type and validate the response with Zod. Handle failure (fall back to cached data or an empty state).
- [ ] `/blog` index (cards, tag filter, pagination) and `/blog/[slug]` (reading time, table of contents, code highlighting via `shiki`, share links, related posts, author byline as **the company**, not a person).
- [ ] Set the **canonical** to the preferred URL. Add `Article` JSON-LD, OG images per post and `rss.xml`.
- [ ] Add posts to `sitemap.ts`.
- [ ] Home page "Latest posts" section (3 cards).
- [ ] Content calendar: 1 post every 2 weeks for the first 3 months. Topic seeds come from the services (RN New Architecture migration, LiveView patterns, Fastlane code-signing, App Store review pitfalls).
- [ ] Employer-confidentiality check on every post.

**Exit criteria:** blog is styled like the rest of the site, indexable, in the sitemap, with an RSS feed.

---

## Phase 7 — Contact, Security & Privacy
**Goal:** collect inquiries safely, without exposing personal data.
**Covers:** the security/data-protection point, Main point 1.

### 7.1 Contact flow
- [ ] `/contact` page: short form (name, email, project type select, budget range, message), **optional** attachment, and an optional booking link (Cal.com, using a company profile).
- [ ] Pre-fill `project type` from `?service=`.
- [ ] Use `react-hook-form` + `zod` (already installed) with the **same Zod schema on client and server**.
- [ ] Accessible errors (`aria-describedby`, `aria-live`), a success state, and a toast through `react-hot-toast` or inline.

### 7.2 Hardening `/api/contact` (F10)
- [ ] Server-side Zod validation (email format, length caps).
- [ ] **Spam protection:** a honeypot field, a minimum-time-to-submit check, and Cloudflare Turnstile or hCaptcha (privacy-friendlier than reCAPTCHA).
- [ ] **Rate limiting** by IP (Upstash Redis or Vercel's WAF/Edge Config).
- [ ] **Attachment rules:** allowlist of types (pdf, png, jpg, docx), a max size (e.g. 5 MB), and a filename sanitiser. Reconsider whether attachments are needed at all, since a link field is safer.
- [ ] Escape user input in the email body. Set `replyTo`, and avoid header injection by validating `name`.
- [ ] Don't log PII. Secrets live only in environment variables (`SMTP_*`, `EMAIL_TO`, `EMAIL_CC`).
- [ ] Add an auto-reply to the sender ("we got it, expect a reply within 2 business days").
- [ ] Consider switching SMTP to Resend for deliverability. Set SPF, DKIM and DMARC for mobilixir.in.

### 7.3 Site security
- [ ] Security headers in `next.config.ts`: CSP (with nonces if needed), HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `frame-ancestors`.
- [ ] `npm audit` plus Dependabot (already active). Pin versions.
- [ ] `security.txt` (`/.well-known/security.txt`) with the role mailbox.

### 7.4 Privacy & compliance
- [ ] `/privacy` page: what is collected (form data, analytics), why, retention, and the contact for deletion requests. Cover India's DPDP Act and GDPR basics for EU visitors.
- [ ] A cookie banner **only if** non-essential cookies are used. Choosing a cookieless analytics tool (Phase 9) avoids the banner.
- [ ] WHOIS privacy, a role mailbox and no personal data in the HTML (re-run the Phase 2 grep after every phase).

**Exit criteria:** a spam test and an abuse test fail safely; a security-headers scan (securityheaders.com or Mozilla Observatory) reaches A or better.

---

## Phase 8 — SEO
**Goal:** be findable for the right queries without a personal brand.
**Covers:** the SEO points in `tasks.txt`.

- [ ] **Keyword research** (free: Google Search Console, Ubersuggest, AlsoAsked). Target pattern: `[service] + [location or niche]`, e.g. "React Native app development India", "Elixir Phoenix development agency", "Next.js development for startups". Map **one primary keyword per page**.
- [ ] Per-page `generateMetadata`: a unique title (under 60 characters), a description (under 155), a canonical URL and Open Graph/Twitter data.
- [ ] Generate **OG images** per page and post with `next/og` (fixes F14).
- [ ] Heading hierarchy: one `h1` per page and a logical order.
- [ ] **Structured data (JSON-LD):** `Organization` (company only), `WebSite`, `Service`, `BreadcrumbList`, `Article`, `FAQPage`.
- [ ] `sitemap.ts` covering all routes and dynamic slugs (F8). `robots.ts` verified.
- [ ] Internal linking: services ↔ projects ↔ posts.
- [ ] Image SEO: descriptive `alt`, `next/image`, and width and height set.
- [ ] Register with **Google Search Console** and **Bing Webmaster Tools**. Submit the sitemap.
- [ ] **Google Business Profile** only if a public business address is acceptable. Otherwise skip it. **A stealth site should not list a home address.**
- [ ] Local signals: "India" and the service region in copy, with no street address.

**Exit criteria:** Lighthouse SEO is 100 on all templates; Search Console reports no coverage errors.

---

## Phase 9 — Motion, Interactivity, Performance & Accessibility
**Goal:** a memorable site that is fast and usable by everyone.
**Covers:** the animation/interactive, performance and accessibility points, and Task 5.

### 9.1 Motion (restrained)
- [ ] Define a motion language: durations (150–300 ms for UI, up to 600 ms for reveals), one easing family, and no motion without a purpose.
- [ ] Scroll reveals through `IntersectionObserver`/`useInView`. They only run once, and content is **never hidden if JS fails**.
- [ ] Micro-interactions: button press, card hover lift, nav indicator, and a theme toggle transition.
- [ ] Optional signature element: a subtle animated hero (gradient mesh, a code-to-device morph, or an animated architecture diagram), as lightweight SVG or CSS.
- [ ] Use only `transform` and `opacity`. No layout-thrashing animations.
- [ ] Review `framer-motion`: tree-shake with `LazyMotion` and `m` components, or move simple effects to CSS to cut JS.
- [ ] **`prefers-reduced-motion`:** every animation has a reduced variant (fade only or none), and no autoplaying loops without a pause control.

### 9.2 Performance budget
| Metric | Target |
|---|---|
| LCP | ≤ 2.5 s (aim ≤ 1.8 s) on mobile 4G |
| INP | ≤ 200 ms |
| CLS | ≤ 0.1 |
| JS per route | ≤ 150 KB gzipped |
| Lighthouse mobile | ≥ 95 Performance |
- [ ] `next/image` for every image, AVIF/WebP, correct `sizes` and `priority` on the LCP image.
- [ ] `next/font` with a subset and `display: swap`. Limit font weights.
- [ ] Static generation or ISR for all marketing pages. Server Components by default and `"use client"` only where needed.
- [ ] Lazy-load below-the-fold sections. Do not load third-party scripts before interaction.
- [ ] Add `@next/bundle-analyzer` and fix the heaviest imports.
- [ ] Run Lighthouse CI in GitHub Actions and fail the PR if a budget is missed.

### 9.3 Accessibility (WCAG 2.2 AA)
- [ ] Semantic landmarks (`header`, `nav`, `main`, `footer`) and a **skip link**.
- [ ] Visible `:focus-visible` styles. Full keyboard operation including the mobile menu (focus trap, `Esc` closes), the theme toggle and the form.
- [ ] Colour contrast checked in both themes. Information is never conveyed by colour alone.
- [ ] `alt` text. Decorative images use `alt=""`. Icon-only buttons have `aria-label`.
- [ ] Form labels, error association, and `autocomplete` attributes.
- [ ] Text resizes to 200 percent with no loss, and the layout reflows at 320 px.
- [ ] Test with axe, Lighthouse, keyboard-only and VoiceOver. Add `eslint-plugin-jsx-a11y` (already part of `eslint-config-next`) and make its rules errors.
- [ ] Write an accessibility statement page (short).

**Exit criteria:** performance budget met on Home, a Service page, a Project page and a Post page; no axe violations; manual keyboard and screen-reader pass done.

---

## Phase 10 — Analytics, QA, Documentation & Launch
**Goal:** measure, verify and ship safely.
**Covers:** the analytics point, Task 4 (timeline), and release.

### 10.1 Analytics
- [ ] Choose **privacy-friendly analytics** (Plausible, Umami self-hosted, or Vercel Web Analytics), which needs no cookie banner. Keep GA4 optional, because the README mentions it, and if it is used it needs consent.
- [ ] Define events: CTA click (by location), service-card click, contact-form start, submit, success and failure, blog read (scroll depth 75 percent), outbound click to GitHub, project demo click.
- [ ] Goal funnel: visit → service page → contact page → submit.
- [ ] Search Console connected (Phase 8). A monthly review ritual.

### 10.2 QA matrix
- [ ] Browsers: Chrome, Safari (macOS and iOS), Firefox, Edge. Devices: iPhone SE size, a recent iPhone, a mid-range Android, an iPad and desktop.
- [ ] Functional: every link, form success and failure, 404, theme toggle, the blog with the dev.to API down.
- [ ] Regression grep for personal data, "TODO" and "lorem".
- [ ] `npm run lint`, `typecheck` and `build` are all clean.
- [ ] Add a few Playwright smoke tests (home loads, nav works, the form validates) and run them in CI.

### 10.3 Documentation
- [ ] Fix the README (F9): correct the framework version, the stack, the env variables and the scripts.
- [ ] `.env.example` (F11). `docs/how-to-update.md` (Phase 5). `docs/architecture.md`.

### 10.4 Launch
- [ ] Deploy on a Vercel preview for a stakeholder review. Staging uses `noindex`.
- [ ] Production env variables set. DNS and redirects verified (apex ↔ www). SSL and HSTS verified.
- [ ] 301 redirects from any old URL that was indexed.
- [ ] Submit the new sitemap. Check the OG previews (LinkedIn, X, WhatsApp). Final Lighthouse run.
- [ ] Rollback plan: keep the previous production deployment, which Vercel allows to be re-promoted in one click.

**Exit criteria:** the production site meets every exit criterion above, and a rollback has been rehearsed.

---

## Phase 11 — Growth & Future Features (post-launch backlog)
**Goal:** Task 5 and scaling as the company grows. Ordered by value for effort.

| Priority | Feature | Notes |
|---|---|---|
| High | **Booking link** (Cal.com) on `/contact` | Reduces friction, no personal number needed |
| High | **Newsletter** (Buttondown or Resend Audiences) with double opt-in | Pairs with the blog |
| High | **First real testimonial / case study flow** | Template ready (Phase 5), ask each client for permission to publish |
| Medium | **GitHub stats widgets** (stars, repos) fetched at build time | Real, auto-updating proof for open source |
| Medium | **Interactive architecture diagrams / live demos** (embedded Snack for RN, LiveView demo) | A strong differentiator for a portfolio without clients |
| Medium | **Project estimator** (a short questionnaire that returns a rough range and routes to the form) | Qualifies leads |
| Medium | **Social integration:** company LinkedIn and GitHub links, auto-share new posts, OG cards | Company accounts only |
| Medium | **Search** (Pagefind) across posts and projects | Static, no server |
| Low | **i18n** if a non-English market is targeted | Only if needed |
| Low | **Client portal / project status page** | When clients exist |
| Low | **Case-study PDFs / capability deck** | For outbound |
| Low | **Command palette (⌘K)** navigation | A nice touch for a developer audience |
| Low | **Dark/light brand moments**, easter eggs | Delight, but only after the basics |

### Scaling the company (Main point 1)
- [ ] The content model (Phase 5) and the component library (Phase 4) allow new services and pages without redesign.
- [ ] When ready to go public: add a team page, case studies with real clients, pricing, a careers page and a company address. Each is a new route, not a rewrite.
- [ ] Revisit the stealth stance every quarter. Remember that moving to a full-time venture changes the privacy calculus.

---

## Timeline (indicative, part-time ~8–10 h/week alongside a job)

| Phase | Effort | Calendar (cumulative) |
|---|---|---|
| 1 Discovery & foundations | 10–14 h | Week 1–2 |
| 2 Stealth & truthfulness cleanup | 4–6 h | Week 2 (**ship as a hotfix**) |
| 3 Brand, design system, IA, wireframes | 20–28 h | Week 3–5 |
| 4 Core build & home | 24–32 h | Week 5–8 |
| 5 Content system, services, portfolio | 24–30 h | Week 8–11 |
| 6 Blog | 10–14 h | Week 11–12 |
| 7 Contact, security & privacy | 10–14 h | Week 12–13 |
| 8 SEO | 8–12 h | Week 13–14 |
| 9 Motion, performance & accessibility | 14–20 h | Week 14–16 |
| 10 Analytics, QA, docs & launch | 10–14 h | Week 16–17 |
| 11 Growth backlog | ongoing | After launch |

Total: about 135–185 hours, i.e. **about 4 months part-time**. Phases 7 and 8 can overlap with 5 and 6. If you want an earlier launch, the **minimum launchable set is Phases 1, 2, 3 (lite), 4, 5 (2 services and 3 projects), 7 and 10**, which comes to about 8 to 10 weeks.

### Milestones
1. **M0 (end of Week 2):** the current site is safe, with no fabricated content or personal data.
2. **M1 (Week 5):** the design system and wireframes are signed off.
3. **M2 (Week 11):** all content pages are built on the preview.
4. **M3 (Week 14):** the site is functionally complete with blog, contact, SEO and security.
5. **M4 (Week 17):** launch.

---

## Risks & Open Questions

| Risk / question | Mitigation |
|---|---|
| Employer moonlighting / IP clause | Phase 1.4 contract check, with no employer work in the portfolio |
| Anonymity vs credibility (clients usually want a face) | A strong "how we work", real artefacts, and a booking call. Reveal the name privately in the proposal stage |
| Resume not yet supplied | Needed for the Phase 1.1 and Phase 5 content |
| Scope creep from motion and extras | The motion budget in Phase 9, and the backlog in Phase 11 is explicitly post-launch |
| dev.to dependency | Phase 6 option C, with a fallback state |
| Name/trademark conflict for "Mobilixir" | Phase 1.1 check |

### Decisions status
Resolved (see the Decisions Log at the top): contact email, legal name and registration status, blog option C, DaisyUI (evaluate, lean drop), the 6 portfolio items, the resume, the latest versions.

Still open:
1. **R1:** show `hello@mobilixir.in` (alias) instead of `rushikesh@mobilixir.in` on the site?
2. **R2:** links from the portfolio to your personal npm/GitHub/Marketplace/dev.to pages: accept now, or move to a `mobilixir` org/scope over time?
3. Description and purpose of `react-native-qr-camera-pro`.
4. Merge the two Redux Saga extensions into one portfolio page?
5. Employment-contract check for moonlighting/IP (especially the security libraries).
6. Is the "Phase 2 hotfix" to be done first? (Recommended: yes.)

---

## Traceability Matrix (tasks.txt → plan)

| `tasks.txt` point | Where handled |
|---|---|
| Resume for profile | 1.1, 5.2, 5.3 |
| Start company or freelancing / gain portfolio experience | 5.3, 11 |
| Revamp from scratch, professional, appealing | Phases 3–4 |
| Ideas: modern design, navigation, portfolio, responsive | 3.2, 3.3, 4, 5.3 |
| Inspirations (5 sites) | 1.3 |
| Services section: clear, icons, CTA per service, grid/cards, resume as reference | 4 (grid, CTAs), 5.2 |
| Dedicated page per service with detail and case studies | 3.3, 5.2, 5.3 |
| Design aspect: colour, brand, quality imagery | 3.1, 3.2 |
| **Task 1** audit of current site | 1.2 |
| **Task 2** inspiration report | 1.3 |
| **Task 3** specific improvements (layout, colour, type, nav, content) | 3.2, 3.3, 4 |
| **Task 4** plan: wireframes, sitemap, timeline | 3.3, 3.4, Timeline |
| **Task 5** extra features (interactive, animation, social) | 9.1, Phase 11 |
| Responsive & accessible | 4, 9.3 |
| Clean, professional design | 3, 4 |
| Clear, engaging content | 3.1 voice, 5 |
| Intuitive navigation | 3.3 |
| Portfolio section | 5.3 |
| SEO best practices | Phase 8 |
| Fast loading / performance | 9.2 |
| Testimonials for credibility | 5.3 (hidden until real), 11 |
| Interactive elements / animations | 9.1 |
| Security & data protection | Phase 7 |
| Analytics | 10.1 |
| Blog / resources, dev.to, integrated into design, SEO | Phase 6 |
| Keywords, meta tags, descriptions | 8 |
| Accessibility for users with disabilities | 9.3 |
| **Main point 1:** stealth, simple, scalable, no personal info, easy to update | 0, Phase 2, 5.1, 7.4, 11 |
| **Main point 2:** no projects or testimonials yet, honest portfolio | 0, Phase 2, 5.3, 5.4 |
