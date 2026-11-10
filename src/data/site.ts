// Single source of truth for site content. To add a service or project,
// append an entry here — pages, sitemap and listings pick it up automatically.
// Rule: no metric, client or testimonial goes in here unless it is real.
// Effort estimates are the one exception, and are always shown with EFFORT_NOTE.

import type { EffortItem } from "../lib/effort";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface NavItem {
  href: string;
  label: string;
}

export interface Social {
  href: string;
  label: string;
  icon: "github" | "linkedin" | "devto" | "email";
}

export type ServiceIcon =
  | "smartphone"
  | "shield"
  | "globe"
  | "server"
  | "rocket"
  | "compass";

export interface Service {
  slug: string;
  title: string;
  icon: ServiceIcon;
  /** One sentence for cards and meta descriptions. */
  summary: string;
  keywords: string[];
  /** Longer intro for the service page. */
  description: string;
  audience: string;
  includes: string[];
  stack: string[];
  faqs: { q: string; a: string }[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface TechCategory {
  title: string;
  items: string[];
}

export type ProjectCategory =
  | "Mobile Security"
  | "Developer Tooling"
  | "App Store Compliance"
  | "Starter Kits"
  | "Mobile";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Benefit {
  title: string;
  text: string;
}

/** A side-by-side comparison against one alternative. Only claims we can back up. */
export interface Comparison {
  /** The alternative, e.g. "Writing the checks yourself". */
  against: string;
  rows: { aspect: string; them: string; us: string }[];
}

export interface Project {
  slug: string;
  name: string;
  kind: "npm package" | "CLI tool" | "VS Code extension" | "Web tool" | "Starter kit";
  category: ProjectCategory;
  summary: string;
  keywords: string[];
  description: string;
  highlights: string[];
  tags: string[];
  /** Install command or usage hint, shown as a code block. */
  install?: string;
  links: ProjectLink[];
  /** Service slugs this project is evidence for. */
  services: string[];
  /** Why teams pick it, shown as cards on the project page. */
  benefits?: Benefit[];
  comparisons?: Comparison[];
  /** Estimated work it saves versus building from scratch (see EFFORT_NOTE). */
  effort?: EffortItem[];
}

/** Shown wherever effort estimates appear, so they are never mistaken for measurements. */
export const EFFORT_NOTE =
  "These are our planning estimates for an experienced engineer building the same thing from scratch, not measured results. Your numbers will depend on scope and how well you know the stack.";

// ─── Company ─────────────────────────────────────────────────────────────────

export const SITE = {
  name: "Mobilixir Technologies",
  shortName: "Mobilixir",
  url: "https://www.mobilixir.in",
  email: "hey@mobilixir.in",
  tagline: "Mobile & web engineering studio",
  description:
    "Mobilixir Technologies is an independent software studio building React Native, iOS, Next.js and Elixir products, with a focus on mobile security and App Store readiness.",
  location: "India",
  devtoUsername: "rushikeshpandit",
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

// ─── Socials ─────────────────────────────────────────────────────────────────

export const SOCIALS: Social[] = [
	{ href: "https://github.com/Mobilixir", label: "GitHub", icon: "github" },
	{
		href: "https://www.linkedin.com/company/mobilixir/",
		label: "LinkedIn",
		icon: "linkedin",
	},
	{ href: "https://dev.to/rushikeshpandit", label: "dev.to", icon: "devto" },
	{ href: `mailto:${SITE.email}`, label: "Email", icon: "email" },
];

// ─── Hero ────────────────────────────────────────────────────────────────────

export const HERO = {
  eyebrow: "Taking on a limited number of projects",
  headline: "Mobile and web products, engineered to last.",
  subheadline:
    "Mobilixir is an independent studio building React Native, iOS, Next.js and Elixir products — with a particular focus on mobile security and App Store readiness.",
  primaryCta: { label: "Start a project", href: "/contact" },
  secondaryCta: { label: "See our work", href: "/work" },
  pillars: [
    { title: "Mobile", text: "React Native & native iOS (Swift, SwiftUI)" },
    { title: "Web", text: "Next.js & Phoenix LiveView" },
    { title: "Backend", text: "Elixir & Node.js APIs" },
    { title: "Security", text: "Mobile hardening & App Store privacy compliance" },
    { title: "Delivery", text: "Fastlane, CircleCI, Bitrise" },
  ],
};

// ─── About ───────────────────────────────────────────────────────────────────

export const ABOUT = {
  headline: "An independent studio with a senior-engineer bar.",
  body: [
    "Mobilixir Technologies is an independent software studio. Work is done by experienced engineers who have shipped mobile and web products for years, and you talk directly to the person building your product.",
    "The studio's sweet spot is startups and small businesses that need a production-grade mobile or web app — built to be secure, maintainable and ready for the App Store.",
    "Alongside client work, Mobilixir publishes open-source libraries and developer tools, which you can browse under Work.",
  ],
  values: [
    {
      title: "Pragmatic",
      description:
        "Proven technology where it matters, newer tools only when they earn their complexity.",
    },
    {
      title: "Transparent",
      description:
        "Written scopes, regular async updates and honest estimates. No surprises at invoice time.",
    },
    {
      title: "Security-minded",
      description:
        "Threat-model first. Secure storage, tamper detection and privacy compliance are designed in, not bolted on.",
    },
    {
      title: "Maintainable",
      description:
        "Typed code, tests where they pay off, CI from day one and documented hand-offs.",
    },
  ],
};

// ─── Services ────────────────────────────────────────────────────────────────

export const SERVICES: Service[] = [
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    icon: "smartphone",
    summary:
      "Cross-platform React Native apps and native iOS (Swift / SwiftUI) apps, shipped to the App Store and Google Play.",
    keywords: ["React Native app development", "iOS app development", "Swift SwiftUI developer", "cross-platform mobile app development", "hire React Native developer India", "mobile app development company India", "App Store submission", "Redux Toolkit Saga"],
    description:
      "From first prototype to store release. React Native when one codebase for iOS and Android is the right trade-off; native Swift and SwiftUI when you need Apple platform depth such as HealthKit, StoreKit or Core ML.",
    audience: "Startups and businesses launching or rebuilding a mobile product.",
    includes: [
      "Architecture and state management (Redux Toolkit, Saga, MVVM)",
      "UI implementation with accessibility in mind",
      "API integration, offline support and caching",
      "Unit and integration testing",
      "App Store and Google Play submission",
    ],
    stack: ["React Native", "TypeScript", "Swift", "SwiftUI", "Redux Toolkit"],
    faqs: [
      {
        q: "React Native or native iOS?",
        a: "React Native suits most products that target both platforms. Native iOS is better when you depend on deep Apple frameworks or need the last bit of performance. We recommend one after a short discovery call.",
      },
      {
        q: "Can you take over an existing app?",
        a: "Yes. A short code review comes first, so you get an honest view of the codebase before committing to a plan.",
      },
    ],
  },
  {
    slug: "mobile-security-hardening",
    title: "Mobile Security & Privacy Hardening",
    icon: "shield",
    summary:
      "Root and jailbreak detection, screen-capture and clipboard protection, and privacy-manifest compliance for mobile apps.",
    keywords: ["mobile app security", "React Native security", "root detection", "jailbreak detection", "Frida detection", "prevent screenshots React Native", "screen recording protection", "PrivacyInfo.xcprivacy", "OWASP MASVS mobile", "fintech app security"],
    description:
      "Practical, layered hardening for React Native and iOS apps that handle sensitive data. This is the area the studio's open-source libraries come from, so the techniques are battle-tested in public.",
    audience:
      "Teams in fintech, health and enterprise whose apps handle sensitive data, or who need to pass a security review.",
    includes: [
      "Threat-model workshop for your app",
      "Rooted / jailbroken device, debugger and instrumentation detection",
      "Screenshot, screen-recording, app-switcher and clipboard protection",
      "Secure storage and key-handling review",
      "PrivacyInfo.xcprivacy manifest and App Store privacy compliance",
    ],
    stack: ["React Native", "Swift", "TypeScript", "Kotlin / Android basics"],
    faqs: [
      {
        q: "Is client-side detection unbeatable?",
        a: "No, and anyone who says so is selling something. Client-side checks raise the cost of an attack and give you signals to act on; they work best combined with server-side verification.",
      },
    ],
  },
  {
    slug: "web-app-development",
    title: "Web App Development",
    icon: "globe",
    summary:
      "Fast, SEO-friendly Next.js frontends and real-time Phoenix LiveView applications.",
    keywords: ["Next.js development", "Next.js developer India", "Phoenix LiveView development", "React web app development", "SEO friendly web app", "Tailwind CSS development", "startup web development"],
    description:
      "Type-safe React frontends with the Next.js App Router, from marketing sites to dashboards, and real-time server-rendered apps with Elixir and Phoenix LiveView.",
    audience: "Founders and small teams who need a web product or dashboard.",
    includes: [
      "Next.js App Router, Server Components and static generation",
      "Design-system based UI with Tailwind CSS",
      "Phoenix LiveView for real-time interfaces",
      "SEO, performance and accessibility work",
      "Deployment and monitoring setup",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Elixir", "Phoenix"],
    faqs: [
      {
        q: "When would you choose LiveView over Next.js?",
        a: "LiveView shines for real-time, stateful interfaces such as dashboards and collaborative tools. Next.js is the better default for content-heavy and SEO-driven sites.",
      },
    ],
  },
  {
    slug: "backend-and-api",
    title: "Backend & API Development",
    icon: "server",
    summary:
      "REST and real-time APIs in Elixir and Node.js, designed with auth, validation and observability from day one.",
    keywords: ["Elixir development", "Phoenix framework developer", "Node.js API development", "REST API development", "PostgreSQL backend", "real-time backend WebSocket", "backend development India"],
    description:
      "APIs and services that your mobile and web clients can rely on: clear contracts, sensible auth, and the operational basics (logging, health checks, rate limits) in place from the start.",
    audience: "Products that need a reliable API or a backend for a new app.",
    includes: [
      "API design and documentation",
      "Authentication and authorisation",
      "PostgreSQL schema design and migrations",
      "Background jobs and real-time channels",
      "Logging, metrics and error tracking",
    ],
    stack: ["Elixir", "Phoenix", "Node.js", "TypeScript", "PostgreSQL"],
    faqs: [
      {
        q: "Why Elixir?",
        a: "Its runtime is excellent at concurrency and fault tolerance, which suits chat, notifications and live data. Node.js is the pragmatic pick when your team already lives in TypeScript.",
      },
    ],
  },
  {
    slug: "ci-cd-and-release-automation",
    title: "CI/CD & Release Automation",
    icon: "rocket",
    summary:
      "Automated build, test and release pipelines for mobile and web, with code signing and store deployment handled.",
    keywords: ["Fastlane automation", "mobile CI/CD", "CircleCI mobile pipeline", "Bitrise setup", "iOS code signing automation", "TestFlight automation", "GitHub Actions mobile"],
    description:
      "Stop shipping from a laptop. Pipelines that build, test, sign and publish your app so a release becomes a button press, not an afternoon.",
    audience: "Teams releasing mobile apps by hand, or with a fragile pipeline.",
    includes: [
      "Fastlane lanes for build, sign and deploy",
      "CircleCI and Bitrise pipelines",
      "Code-signing and certificate management",
      "TestFlight and Play internal-track distribution",
      "Over-the-air update strategy",
    ],
    stack: ["Fastlane", "CircleCI", "Bitrise", "GitHub Actions"],
    faqs: [
      {
        q: "Can you migrate our existing pipeline?",
        a: "Yes. We document what exists first, then migrate step by step so releases stay possible throughout.",
      },
    ],
  },
  {
    slug: "technical-consulting",
    title: "Technical Consulting & Code Review",
    icon: "compass",
    summary:
      "Architecture reviews, code audits and MVP scoping — a low-commitment way to get senior input.",
    keywords: ["React Native code review", "architecture review", "MVP scoping", "app launch readiness", "technical consultant India", "mobile app audit"],
    description:
      "A fixed-scope engagement for when you need an independent opinion: is this architecture sound, is the app ready to launch, what should the MVP include?",
    audience: "Founders and teams who want a second opinion before committing budget.",
    includes: [
      "Architecture and code review with a written report",
      "Mobile app launch-readiness check (security, privacy, store policies)",
      "MVP scoping and technology selection",
      "Hands-on pairing sessions for your team",
    ],
    stack: ["React Native", "Swift", "Next.js", "Elixir"],
    faqs: [
      {
        q: "How long does a review take?",
        a: "Typically a few days to a week for a focused review, depending on the size of the codebase.",
      },
    ],
  },
];

// ─── Process ─────────────────────────────────────────────────────────────────

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery call",
    description:
      "A short call to understand your goals, timeline and constraints. If we are not the right fit, we will say so.",
  },
  {
    step: 2,
    title: "Scoped proposal",
    description:
      "A written proposal with milestones and deliverables, priced fixed or time-and-materials.",
  },
  {
    step: 3,
    title: "Design & architecture",
    description:
      "Mockups, data model and architecture reviewed with you before production code is written.",
  },
  {
    step: 4,
    title: "Iterative build",
    description:
      "Short iterations with regular async updates and a working build to try early.",
  },
  {
    step: 5,
    title: "QA & launch",
    description:
      "Automated tests, manual checks, store submission and deployment to your infrastructure.",
  },
  {
    step: 6,
    title: "Support",
    description: "Bug fixes, monitoring and iteration — on retainer or ad hoc.",
  },
];

// ─── Tech Stack ──────────────────────────────────────────────────────────────

export const TECH_STACK: TechCategory[] = [
  { title: "Mobile", items: ["React Native", "Swift", "SwiftUI"] },
  { title: "Web", items: ["Next.js", "React", "Tailwind CSS", "Phoenix LiveView"] },
  { title: "Backend", items: ["Elixir", "Phoenix", "Node.js"] },
  { title: "Languages", items: ["TypeScript", "JavaScript", "Swift", "Elixir"] },
  { title: "Delivery", items: ["Fastlane", "CircleCI", "Bitrise"] },
];

// ─── Projects (portfolio) ────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    slug: "react-native-root-jail-detect",
    name: "react-native-root-jail-detect",
    kind: "npm package",
    category: "Mobile Security",
    summary:
      "A lightweight React Native security module that detects rooted and jailbroken devices, runtime instrumentation (Frida), debuggers and emulators.",
    keywords: ["react-native-root-jail-detect", "React Native root detection", "React Native jailbreak detection", "Frida detection React Native", "detect emulator React Native"],
    description:
      "Apps that handle money or personal data often need to know when they are running in a hostile environment. This library gives React Native apps a single, small API to check for rooted (Android) and jailbroken (iOS) devices, as well as instrumentation tools such as Frida, attached debuggers and emulators, so the app can decide how to respond.",
    highlights: [
      "Root detection on Android and jailbreak detection on iOS",
      "Detects runtime instrumentation (Frida), debuggers and emulators",
      "Lightweight, with a simple JavaScript / TypeScript API",
      "Best used as one layer alongside server-side checks",
    ],
    tags: ["React Native", "Security", "Android", "iOS", "TypeScript"],
    install: "npm install react-native-root-jail-detect",
    links: [
      {
        label: "View on npm",
        href: "https://www.npmjs.com/package/react-native-root-jail-detect",
      },
    ],
    services: ["mobile-security-hardening", "mobile-app-development"],
    benefits: [
      { title: "One API, both platforms", text: "Android root and iOS jailbreak checks sit behind one JavaScript call, so there is no native code to write or maintain." },
      { title: "More than root checks", text: "It also flags Frida, attached debuggers and emulators, the tools most often used to inspect or tamper with an app." },
      { title: "You decide the response", text: "It returns signals rather than crashing the app, so you choose whether to warn, limit features or report to your server." },
    ],
    comparisons: [
      {
        against: "Writing the checks yourself",
        rows: [
          { aspect: "Platforms", them: "Separate Kotlin and Swift code to write, test and maintain", us: "One JavaScript / TypeScript API for both" },
          { aspect: "Signals", them: "Root, jailbreak, Frida, debugger and emulator checks each researched and built separately", us: "All five in one package" },
          { aspect: "Upkeep", them: "Yours to keep current as detection techniques change", us: "A versioned npm package you update like any other" },
          { aspect: "Getting started", them: "Native modules, bridging and a test matrix of devices", us: "npm install and one call" },
        ],
      },
    ],
  },
  {
    slug: "react-native-privacy-guard-kit",
    name: "react-native-privacy-guard-kit",
    kind: "npm package",
    category: "Mobile Security",
    summary:
      "A zero-dependency React Native library that protects sensitive screens from screenshots, screen recordings, app-switcher previews and clipboard leaks.",
    keywords: ["react-native-privacy-guard-kit", "React Native prevent screenshot", "React Native screen recording block", "hide app in app switcher", "React Native clipboard protection"],
    description:
      "Sensitive content leaks in quiet ways: a screenshot, a screen recording, the thumbnail in the app switcher, or a copied value left on the clipboard. Privacy Guard Kit closes those gaps with a hook, a provider and a strictly typed TypeScript API, and no third-party dependencies.",
    highlights: [
      "Blocks screenshots and screen recording on protected screens",
      "Hides content in the app-switcher preview",
      "Guards against clipboard leaks",
      "Hook and provider API with strict TypeScript types",
      "Zero runtime dependencies",
    ],
    tags: ["React Native", "Privacy", "Security", "TypeScript"],
    install: "npm install react-native-privacy-guard-kit",
    links: [
      {
        label: "View on npm",
        href: "https://www.npmjs.com/package/react-native-privacy-guard-kit",
      },
    ],
    services: ["mobile-security-hardening", "mobile-app-development"],
    benefits: [
      { title: "Closes the quiet leaks", text: "Screenshots, screen recordings, app-switcher thumbnails and the clipboard are covered together, not one at a time." },
      { title: "Drop-in API", text: "A hook and a provider protect a screen in a few lines, with strict TypeScript types." },
      { title: "No dependency risk", text: "Zero runtime dependencies means nothing extra to audit and a smaller supply-chain surface." },
    ],
    comparisons: [
      {
        against: "Writing platform code per screen",
        rows: [
          { aspect: "Screenshots and recording", them: "Android FLAG_SECURE in native code, and a separate workaround on iOS", us: "One API for both platforms" },
          { aspect: "App-switcher preview", them: "Native lifecycle handling on each platform", us: "Built in" },
          { aspect: "Clipboard", them: "Easy to forget until a security review finds it", us: "Built-in guard" },
          { aspect: "Dependencies", them: "Whatever you add along the way", us: "None at runtime" },
        ],
      },
    ],
  },
  {
    slug: "react-native-qr-camera-pro",
    name: "react-native-qr-camera-pro",
    kind: "npm package",
    category: "Mobile",
    summary:
      "A lightweight, high-performance QR and barcode scanner for React Native, built natively in Swift and Kotlin for the New Architecture.",
    keywords: ["react-native-qr-camera-pro", "React Native QR scanner", "React Native barcode scanner", "React Native New Architecture camera", "TurboModule Fabric camera", "CameraX ML Kit React Native"],
    description:
      "Many React Native scanner libraries are unmaintained or push frame processing through the JavaScript bridge. This one runs all frame analysis in native code: Swift on iOS, and Kotlin with CameraX and ML Kit on Android. It uses TurboModules and Fabric, so it works with the New Architecture, and exposes a small, strictly typed API with hooks.",
    highlights: [
      "Native-first: Swift on iOS, Kotlin + CameraX + ML Kit on Android, no JS frame processing",
      "Ready for the New Architecture (TurboModules + Fabric)",
      "Reads QR plus many barcode formats (EAN, Code-128, PDF-417, Aztec, Data Matrix and more)",
      "Torch control, configurable scan throttling and a customisable overlay",
      "Lifecycle-aware and fully typed in TypeScript, MIT licensed",
    ],
    tags: ["React Native", "Swift", "Kotlin", "New Architecture", "Camera"],
    install: "npm install react-native-qr-camera-pro",
    links: [
      {
        label: "View on npm",
        href: "https://www.npmjs.com/package/react-native-qr-camera-pro",
      },
    ],
    services: ["mobile-app-development"],
    benefits: [
      { title: "Smooth scanning", text: "Frame analysis never touches the JavaScript thread, so your UI stays responsive while the camera runs." },
      { title: "New Architecture ready", text: "Built on TurboModules and Fabric, so it does not hold back your React Native upgrades." },
      { title: "Many formats, one component", text: "QR plus EAN, Code-128, PDF-417, Aztec, Data Matrix and more, with torch control and a customisable overlay." },
    ],
    comparisons: [
      {
        against: "Scanners that process frames in JavaScript",
        rows: [
          { aspect: "Where frames are analysed", them: "In JavaScript, across the bridge", us: "Natively: Swift on iOS, Kotlin with CameraX and ML Kit on Android" },
          { aspect: "New Architecture", them: "Support varies, and some libraries are no longer maintained", us: "TurboModules and Fabric" },
          { aspect: "API", them: "Varies by library", us: "Small, strictly typed API with hooks" },
          { aspect: "Licence", them: "Varies by library", us: "MIT" },
        ],
      },
    ],
  },
  {
    slug: "react-native-i18n-kit",
    name: "react-native-i18n-kit",
    kind: "npm package",
    category: "Mobile",
    summary:
      "A fully native, zero-dependency localization toolkit for React Native: device-locale detection, translations, plurals, RTL and locale-aware formatting.",
    keywords: ["react-native-i18n-kit", "React Native localization", "React Native i18n", "React Native translation library", "React Native RTL", "React Native New Architecture i18n", "16 KB page size React Native"],
    description:
      "Localization in React Native usually means stitching together a JavaScript translation library, a native module for the device locale and your own formatting helpers. react-native-i18n-kit does all of it in one package with no third-party dependencies. Locale, calendar, time zone, number format and 12/24-hour settings are read natively (android.icu on Android, Foundation.Locale on iOS), and a hooks-first API handles translations, CLDR plural rules, interpolation, RTL and formatting. It is a TurboModule built for the New Architecture and ships no prebuilt native binaries, so it is 16 KB page-size compliant on Android 15+.",
    highlights: [
      "Zero third-party dependencies: Kotlin, Swift and TypeScript only",
      "Native device-locale detection, including calendar, time zone, number format, clock and measurement system",
      "useTranslation() and useDeviceLocale() hooks; switching language re-renders the tree instantly",
      "CLDR plural buckets and {{token}} interpolation per language",
      "RTL-aware, with optional automatic I18nManager handling",
      "Locale-aware number, currency, percent, date and relative-time formatting",
      "Remembers the chosen language natively and restores it on next launch",
      "TurboModule for the New Architecture, 16 KB page-size compliant",
    ],
    tags: ["React Native", "i18n", "Kotlin", "Swift", "TypeScript", "New Architecture"],
    install: "npm install react-native-i18n-kit",
    links: [
      { label: "View on npm", href: "https://www.npmjs.com/package/react-native-i18n-kit" },
      { label: "View on GitHub", href: "https://github.com/rushikeshpandit/react-native-i18n-kit" },
    ],
    services: ["mobile-app-development"],
    benefits: [
      { title: "One package instead of several", text: "Translations, device locale, plurals, RTL and formatting come from one library with no third-party dependencies." },
      { title: "Native accuracy", text: "Calendar, time zone, number format, clock and measurement settings are read from the OS, not guessed in JavaScript." },
      { title: "Ready for what is next", text: "A New Architecture TurboModule with no prebuilt binaries, so Android 15's 16 KB page-size rule is already met." },
    ],
    comparisons: [
      {
        against: "A typical JavaScript i18n setup",
        rows: [
          { aspect: "Packages", them: "A translation library plus a native module for the device locale, often more", us: "One package, zero third-party dependencies" },
          { aspect: "Device settings", them: "Whatever the extra native module exposes", us: "Language, region, calendar, time zone, number format, 12/24-hour clock and measurement system" },
          { aspect: "Remembering the language", them: "Usually your own storage code", us: "Saved natively and restored on next launch" },
          { aspect: "16 KB page size (Android 15+)", them: "Check every native dependency", us: "Compliant: no prebuilt native binaries" },
        ],
      },
    ],
  },
  {
    slug: "rn-upgrade-doctor",
    name: "RN Upgrade Doctor",
    kind: "CLI tool",
    category: "Developer Tooling",
    summary:
      "A CLI that scans your React Native or Expo project against a target version and tells you what will break before you upgrade, with the evidence for every finding.",
    keywords: ["RN Upgrade Doctor", "React Native upgrade", "React Native upgrade checker", "upgrade React Native version", "Expo SDK upgrade", "React Native Gradle Kotlin upgrade", "React Native Upgrade Helper alternative"],
    description:
      "Most React Native upgrades go the same way: bump the version, build, and discover one error at a time that Gradle, the Android Gradle Plugin, Kotlin, the NDK, Xcode or CocoaPods needs to change too. RN Upgrade Doctor reads your project first and reports what the target release requires against what you have. Findings are deterministic and cite their source, and where the data does not cover something it says so instead of guessing. It runs locally and sends nothing anywhere. The RN Upgrade Doctor web app adds compatibility checks for 150 tracked libraries.",
    highlights: [
      "Covers React Native 0.60 to 0.87 and Expo SDK 45 to 57",
      "Checks Node.js and React, Gradle, AGP, Kotlin, NDK, compileSdk and targetSdk, Xcode, iOS deployment target and CocoaPods",
      "Every finding cites its evidence and the date it was verified",
      "Runs fully locally; nothing about your project is uploaded",
      "CI-ready: --json output, --ci mode and stable exit codes (0, 1, 2)",
      "Config file to ignore rules or change severities; never executes project code",
      "Web app adds compatibility checks for 150 tracked libraries",
    ],
    tags: ["React Native", "Expo", "CLI", "TypeScript", "Android", "iOS"],
    install: "npx @mobilixir/rn-upgrade-doctor analyze --target 0.87 --path ./my-app",
    links: [
      { label: "View on npm", href: "https://www.npmjs.com/package/@mobilixir/rn-upgrade-doctor" },
      { label: "Open the web app", href: "https://rnupgradedoctor.dev" },
    ],
    services: ["mobile-app-development", "technical-consulting"],
    benefits: [
      { title: "Plan before you start", text: "See every toolchain change the target release needs before you touch package.json, so you can estimate the upgrade honestly." },
      { title: "Evidence, not guesses", text: "Each finding cites its source and verification date. Where the data does not cover something, the report says so." },
      { title: "Safe for CI and private code", text: "Runs locally, never executes project code, and gives JSON output and stable exit codes for pipelines." },
    ],
    comparisons: [
      {
        against: "React Native Upgrade Helper",
        rows: [
          { aspect: "What it shows", them: "The diff between two React Native template versions", us: "What your project has against what the target release requires" },
          { aspect: "Your toolchain", them: "Not checked against your project", us: "Node, React, Gradle, AGP, Kotlin, NDK, SDK levels, Xcode, deployment target and CocoaPods" },
          { aspect: "Automation", them: "A website you read", us: "A CLI with --json output and exit codes" },
          { aspect: "Best for", them: "Applying the template changes", us: "Knowing what to change before you begin; use both together" },
        ],
      },
      {
        against: "Bump the version and build",
        rows: [
          { aspect: "How problems appear", them: "One build error at a time", us: "The full list up front" },
          { aspect: "Fix guidance", them: "Search each error yourself", us: "Remediation and the nearest confirmed version in every finding" },
          { aspect: "Expo", them: "Trial and error per SDK", us: "SDK 45 to 57, from Expo's own bundled module data" },
        ],
      },
    ],
  },
  {
    slug: "ios-app-privacy-generator",
    name: "iOS App Privacy Generator",
    kind: "Web tool",
    category: "App Store Compliance",
    summary:
      "A free web tool that generates the PrivacyInfo.xcprivacy file Apple now requires for App Store submissions.",
    keywords: ["PrivacyInfo.xcprivacy generator", "iOS privacy manifest", "Apple privacy manifest required reason API", "App Store privacy rejection fix"],
    description:
      "Apple rejects apps whose privacy manifest is missing or incomplete. The iOS App Privacy Generator lets you describe your app's data collection and required-reason API usage and produces a ready-to-use PrivacyInfo.xcprivacy file, saving the manual XML editing.",
    highlights: [
      "Generates a valid PrivacyInfo.xcprivacy file",
      "Helps avoid App Store rejections for missing privacy manifests",
      "Free to use, runs in the browser",
    ],
    tags: ["iOS", "App Store", "Privacy", "Web"],
    links: [
      { label: "Open the tool", href: "https://ios-app-privacy.vercel.app" },
    ],
    services: ["mobile-security-hardening", "technical-consulting"],
    benefits: [
      { title: "Fewer rejections", text: "A complete PrivacyInfo.xcprivacy is one of the things Apple checks; generating it removes a common reason for a rejected build." },
      { title: "Minutes, not an afternoon", text: "Answer questions about your app instead of hand-editing property-list XML." },
      { title: "Free and in the browser", text: "Nothing to install and no account needed." },
    ],
    comparisons: [
      {
        against: "Writing the manifest by hand in Xcode",
        rows: [
          { aspect: "Format", them: "Hand-written property-list keys and nested arrays", us: "A form that produces the file" },
          { aspect: "Required-reason APIs", them: "Look up each category and reason code in Apple's documentation", us: "Describe your usage and the tool writes the entries" },
          { aspect: "Mistakes", them: "Found when App Store review rejects the build", us: "Caught while you fill in the form" },
          { aspect: "Cost", them: "Your time", us: "Free" },
        ],
      },
    ],
  },
  {
    slug: "phoenixir",
    name: "Phoenixir",
    kind: "Starter kit",
    category: "Starter Kits",
    summary:
      "A modular Phoenix LiveView SaaS starter kit: accounts, organizations, billing, API, jobs, AI and a marketing site, ready on day one.",
    keywords: ["Phoenixir", "Phoenix SaaS starter kit", "Phoenix LiveView boilerplate", "Elixir SaaS boilerplate", "phx.gen.auth alternative", "Phoenix multi-tenant SaaS", "Elixir starter kit"],
    description:
      "Every SaaS needs the same foundation before its first real feature: accounts, teams, billing, email, background jobs and a public site. Phoenixir is that foundation for Phoenix 1.8 and LiveView 1.2, built and tested so you can start on what makes your product different. It starts from the official phx.gen.auth generator and extends it, so the code feels familiar. A setup task generates a new app with only the modules you choose, and every module is documented, including how to remove it.",
    highlights: [
      "Generate your app with only the modules you need: mix phoenixir.setup",
      "Accounts: magic links, passwords (Argon2), TOTP two-factor with recovery codes, GitHub and Google sign-in",
      "Organizations with owner, admin and member roles, invitations, live presence and an audit log",
      "Billing through Stripe, Polar or Lemon Squeezy, with seat-based plans",
      "JSON API with personal access tokens, OpenAPI docs, cursor pagination and idempotency keys",
      "AI with OpenAI, Anthropic and Google models, fallback, streaming and per-organization quotas",
      "Oban background jobs, feature flags, waitlist mode, file uploads and an admin area",
      "Marketing site, blog and SEO, English and Spanish, with Lighthouse budgets in CI",
      "Test suite with a 95% coverage floor, plus Credo, Sobelow and Dialyzer in CI",
    ],
    tags: ["Elixir", "Phoenix", "LiveView", "PostgreSQL", "Oban", "Tailwind CSS"],
    links: [{ label: "Ask about a license", href: "/contact" }],
    services: ["web-app-development", "backend-and-api"],
    benefits: [
      { title: "Months of foundation, done", text: "Accounts, teams, billing, email, jobs and a public site are built and tested, so your first sprint goes on your product." },
      { title: "Decisions written down", text: "Architecture choices are documented with the reasons, and every module has a guide, including how to remove it." },
      { title: "Take only what you need", text: "The setup task generates an app with just the modules you pick." },
      { title: "Current and checked", text: "Phoenix 1.8, LiveView 1.2, Elixir 1.20, Tailwind CSS v4 and daisyUI 5, with a 95% coverage floor in CI." },
    ],
    comparisons: [
      {
        against: "phx.gen.auth (Phoenix 1.8)",
        rows: [
          { aspect: "Registration, confirmation, magic links", them: "Yes", us: "Yes" },
          { aspect: "Two-factor authentication", them: "No", us: "TOTP, recovery codes, replay protection" },
          { aspect: "GitHub and Google sign-in", them: "No", us: "Yes, with PKCE and verified-email linking" },
          { aspect: "Sessions per device", them: "No", us: "Listed with IP and browser; revoke one or all" },
          { aspect: "Rate limits", them: "No", us: "Per IP and per account" },
          { aspect: "Security audit log", them: "No", us: "Yes, visible to the user" },
          { aspect: "Organizations and roles", them: "No", us: "Owner, admin and member, with invitations" },
        ],
      },
      {
        against: "Building the foundation from scratch",
        rows: [
          { aspect: "Billing", them: "Provider integration, webhook verification, idempotency, seats, dunning", us: "Stripe, Polar and Lemon Squeezy behind one behaviour" },
          { aspect: "Background jobs", them: "Queue design, retries, cron and monitoring", us: "Oban with Oban Web" },
          { aspect: "Marketing and SEO", them: "Landing pages, blog, sitemaps and structured data", us: "Two landing designs, blog, sitemaps and JSON-LD" },
          { aspect: "Tests", them: "Written as you go, if there is time", us: "A suite with a 95% coverage floor, Credo, Sobelow and Dialyzer" },
          { aspect: "Ownership", them: "Every line is yours", us: "Every line is yours too: full source, change anything" },
        ],
      },
    ],
    effort: [
      { task: "Auth on top of phx.gen.auth: 2FA, OAuth, device sessions, rate limits, audit log", hours: { min: 50, max: 90 } },
      { task: "Organizations, roles, invitations and tenant isolation", hours: { min: 40, max: 80 } },
      { task: "Billing with three providers, webhooks and seats", hours: { min: 60, max: 120 } },
      { task: "JSON API with tokens and OpenAPI docs", hours: { min: 25, max: 50 } },
      { task: "Background jobs, admin area, feature flags and waitlist", hours: { min: 30, max: 60 } },
      { task: "File uploads with image processing", hours: { min: 15, max: 30 } },
      { task: "AI with provider fallback and usage quotas", hours: { min: 20, max: 40 } },
      { task: "Email templates, previews and a second language", hours: { min: 20, max: 40 } },
      { task: "Marketing site, blog and SEO", hours: { min: 30, max: 60 } },
      { task: "CI quality gates", hours: { min: 10, max: 20 } },
    ],
  },
  {
    slug: "typixir",
    name: "Typixir",
    kind: "Starter kit",
    category: "Starter Kits",
    summary:
      "A modular TypeScript SaaS starter kit: a Turborepo monorepo with a Next.js web app, a NestJS API and a NestJS worker.",
    keywords: ["Typixir", "Next.js SaaS starter kit", "NestJS boilerplate", "Next.js NestJS monorepo", "TypeScript SaaS boilerplate", "Turborepo starter kit", "Next.js multi-tenant SaaS"],
    description:
      "Typixir is the TypeScript sibling of Phoenixir: the usual SaaS foundations, already built, in a Turborepo monorepo with a Next.js 16 web app, a NestJS 12 API on Fastify and a separate NestJS worker. Because the API is its own service with an OpenAPI document, mobile apps and third parties can call it too. A setup CLI generates your app with the modules, providers, locales and deploy target you pick, and an upgrade command brings in later kit releases.",
    highlights: [
      "Generate your app with only the modules you need: pnpm create-typixir",
      "Next.js 16 web app, NestJS 12 API and worker, managed with pnpm and Turborepo",
      "Accounts with Better Auth: email and password, magic links, TOTP two-factor, GitHub and Google",
      "Organizations with roles, invitations and an audit log, isolated with PostgreSQL row-level security",
      "Billing through Stripe, Polar or Lemon Squeezy: seats, trials, dunning emails and refunds",
      "BullMQ jobs in a separate worker, Socket.IO real time with presence",
      "AI SDK streaming with model fallback, tool calling and per-organization spend limits",
      "Blog, docs, sitemap, hreflang and JSON-LD for SEO",
      "Quality gates: Biome, tsc, Vitest with Testcontainers, Playwright with axe, Knip and turbo boundaries",
    ],
    tags: ["TypeScript", "Next.js", "NestJS", "PostgreSQL", "Turborepo", "Drizzle"],
    links: [{ label: "Ask about a license", href: "/contact" }],
    services: ["web-app-development", "backend-and-api"],
    benefits: [
      { title: "Months of foundation, done", text: "Accounts, organizations, billing, jobs and real time are built and tested, so your first sprint goes on your product." },
      { title: "An API mobile apps can use", text: "The NestJS API is its own service with an OpenAPI document, so your React Native app can share it with the web." },
      { title: "Take only what you need", text: "The setup CLI generates an app with the modules, providers, locales and deploy target you pick, and can upgrade it later." },
      { title: "Guard rails included", text: "Biome, tsc, Vitest, Playwright with axe, Knip and turbo boundaries run on every change." },
    ],
    comparisons: [
      {
        against: "Building the foundation from scratch",
        rows: [
          { aspect: "Accounts", them: "Choosing a library, wiring sessions and cookies across two apps, recovery codes", us: "Better Auth with magic links, TOTP and OAuth, already wired" },
          { aspect: "Organizations", them: "Designing tenancy and proving no query leaks across tenants", us: "Roles, invitations and an audit log, isolated with row-level security" },
          { aspect: "Billing", them: "Webhook verification, idempotency, plan changes, each provider's events", us: "Stripe, Polar or Lemon Squeezy behind one interface" },
          { aspect: "Jobs", them: "A queue, retry policy, schedules and a process that can fail safely", us: "BullMQ in a separate worker" },
          { aspect: "Quality gates", them: "Setting up and maintaining the same checks", us: "Already running" },
          { aspect: "Ownership", them: "Every line is yours", us: "Every line is yours too: full source, change anything" },
        ],
      },
    ],
    effort: [
      { task: "Monorepo, tooling and CI quality gates", hours: { min: 20, max: 40 } },
      { task: "Accounts: passwords, magic links, 2FA and OAuth", hours: { min: 50, max: 90 } },
      { task: "Organizations, roles, invitations and row-level security", hours: { min: 40, max: 80 } },
      { task: "Billing with three providers: seats, trials and dunning", hours: { min: 60, max: 120 } },
      { task: "Worker with jobs and schedules", hours: { min: 20, max: 40 } },
      { task: "Real time with presence", hours: { min: 15, max: 30 } },
      { task: "AI streaming with model fallback and spend limits", hours: { min: 20, max: 40 } },
      { task: "Email templates and translations", hours: { min: 20, max: 40 } },
      { task: "Blog, docs and SEO", hours: { min: 30, max: 60 } },
    ],
  },
  {
    slug: "redux-toolkit-saga-typescript-boilerplate",
    name: "Redux Toolkit Saga TypeScript Boilerplate",
    kind: "VS Code extension",
    category: "Developer Tooling",
    summary:
      "A VS Code extension that scaffolds React Native projects with Redux Toolkit and Saga, in TypeScript.",
    keywords: ["Redux Toolkit Saga TypeScript", "React Native Redux boilerplate", "VS Code extension Redux Toolkit", "Redux Saga setup generator"],
    description:
      "Wiring up Redux Toolkit and Redux-Saga is the same boilerplate on every project. This VS Code extension generates the store, slices and saga setup in TypeScript, so a new React Native project starts from a consistent, typed foundation instead of copy-pasted code.",
    highlights: [
      "Generates a Redux Toolkit + Saga setup in TypeScript",
      "Removes repetitive manual configuration",
      "Installable from the VS Code Marketplace",
    ],
    tags: ["VS Code", "React Native", "Redux Toolkit", "Saga", "TypeScript"],
    links: [
      {
        label: "View on Marketplace",
        href: "https://marketplace.visualstudio.com/items?itemName=RushikeshPandit.redux-toolkit-saga-typescript-boilerplate",
      },
    ],
    services: ["mobile-app-development"],
    benefits: [
      { title: "Same foundation on every project", text: "Every app starts with the same store, saga and folder layout, so moving between projects costs nothing." },
      { title: "Typed from the first line", text: "State, hooks and sagas are typed in TypeScript, so mistakes show up in the editor, not at runtime." },
      { title: "Start on features", text: "The setup hour goes to the first screen instead of copying configuration from an old repo." },
    ],
    comparisons: [
      {
        against: "Setting it up by hand",
        rows: [
          { aspect: "Time", them: "Hours of configuration, every project", us: "A command in VS Code" },
          { aspect: "Consistency", them: "Drifts between projects and developers", us: "The same structure every time" },
          { aspect: "Types", them: "Easy to leave loose under deadline pressure", us: "Typed from the start" },
          { aspect: "Mistakes", them: "Missed middleware or root-saga wiring found at runtime", us: "Generated and wired together" },
        ],
      },
    ],
    effort: [
      { task: "Store configuration with Redux Toolkit", hours: { min: 1, max: 2 } },
      { task: "Saga middleware and root saga", hours: { min: 1, max: 2 } },
      { task: "First slice and saga wired together", hours: { min: 1, max: 2 } },
      { task: "Typed hooks and RootState types", hours: { min: 1, max: 2 } },
      { task: "Folder structure and conventions", hours: { min: 1, max: 2 } },
    ],
  },
  {
    slug: "redux-toolkit-saga-boilerplate",
    name: "Redux Toolkit Saga Boilerplate",
    kind: "VS Code extension",
    category: "Developer Tooling",
    summary:
      "A VS Code extension that scaffolds React Native projects with Redux Toolkit and Saga, in JavaScript.",
    keywords: ["Redux Toolkit Saga boilerplate", "React Native Redux Saga setup", "VS Code extension React Native", "Redux Toolkit generator"],
    description:
      "The original version of the scaffolder: it generates the Redux Toolkit and Saga setup for React Native projects in JavaScript, so you can start building features instead of configuring state management.",
    highlights: [
      "Generates a Redux Toolkit + Saga setup in JavaScript",
      "Removes repetitive manual configuration",
      "Installable from the VS Code Marketplace",
    ],
    tags: ["VS Code", "React Native", "Redux Toolkit", "Saga"],
    links: [
      {
        label: "View on Marketplace",
        href: "https://marketplace.visualstudio.com/items?itemName=RushikeshPandit.redux-toolkit-saga-boilerplate",
      },
    ],
    services: ["mobile-app-development"],
    benefits: [
      { title: "Same foundation on every project", text: "Every app starts with the same store, saga and folder layout, so moving between projects costs nothing." },
      { title: "For JavaScript codebases", text: "The same setup as the TypeScript edition, for teams that have not moved to TypeScript." },
      { title: "Start on features", text: "The setup hour goes to the first screen instead of copying configuration from an old repo." },
    ],
    comparisons: [
      {
        against: "Setting it up by hand",
        rows: [
          { aspect: "Time", them: "Hours of configuration, every project", us: "A command in VS Code" },
          { aspect: "Consistency", them: "Drifts between projects and developers", us: "The same structure every time" },
          { aspect: "Mistakes", them: "Missed middleware or root-saga wiring found at runtime", us: "Generated and wired together" },
        ],
      },
    ],
    effort: [
      { task: "Store configuration with Redux Toolkit", hours: { min: 1, max: 2 } },
      { task: "Saga middleware and root saga", hours: { min: 1, max: 2 } },
      { task: "First slice and saga wired together", hours: { min: 1, max: 2 } },
      { task: "Folder structure and conventions", hours: { min: 1, max: 2 } },
    ],
  },
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "Mobile Security",
  "App Store Compliance",
  "Starter Kits",
  "Developer Tooling",
  "Mobile",
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
