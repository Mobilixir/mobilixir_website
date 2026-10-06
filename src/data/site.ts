// Single source of truth for site content. To add a service or project,
// append an entry here — pages, sitemap and listings pick it up automatically.
// Rule: no metric, client or testimonial goes in here unless it is real.

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
  | "Mobile";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  kind: "npm package" | "VS Code extension" | "Web tool";
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
}

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
  { href: "https://github.com/rushikeshpandit", label: "GitHub", icon: "github" },
  { href: "https://www.linkedin.com/company/mobilixir/", label: "LinkedIn", icon: "linkedin" },
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
  },
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "Mobile Security",
  "App Store Compliance",
  "Developer Tooling",
  "Mobile",
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
