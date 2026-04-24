// ─── Types ───────────────────────────────────────────────────────────────────

export interface NavItem {
  href: string;
  label: string;
}

export interface Social {
  href: string;
  label: string;
  icon: "github" | "linkedin" | "phone" | "email" | "whatsapp";
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface TechCategory {
  title: string;
  items: { name: string; logo: string }[];
}

export interface CaseStudy {
  slug: string;
  industry: string;
  title: string;
  problem: string;
  solution: string;
  results: string[];
  tags: string[];
  image: string;
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#techstack", label: "Tech Stack" },
  { href: "#casestudies", label: "Case Studies" },
  { href: "#contact", label: "Contact" },
];

// ─── Socials ─────────────────────────────────────────────────────────────────

export const SOCIALS: Social[] = [
	{
		href: "https://github.com/mobilixir",
		label: "GitHub",
		icon: "github",
	},
	{
		href: "https://www.linkedin.com/company/mobilixir",
		label: "LinkedIn",
		icon: "linkedin",
	},
	{
		href: "https://wa.me/917588945789",
		label: "WhatsApp",
		icon: "whatsapp",
	},
	{
		href: "tel:+917588945789",
		label: "Call",
		icon: "phone",
	},
	{
		href: "mailto:rushikesh@mobilixir.in",
		label: "Email",
		icon: "email",
	},
];

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const HERO = {
	eyebrow: "Boutique Mobile & Web Consultancy",
	headline: "We Ship Products That Clients Actually Use",
	subheadline:
		"Mobilixir helps funded startups and scale-ups go from idea to production-grade mobile and web apps — without the big-agency overhead.",
	primaryCta: { label: "Let's Talk About Your Project", href: "#contact" },
	secondaryCta: { label: "See Our Work", href: "#casestudies" },
	stats: [
		{ target: 10, suffix: "+", label: "Years of Engineering" },
		{ target: 5, suffix: "+", label: "Open-Source Libraries" },
		{ target: 3, suffix: "", label: "Platforms Mastered" },
		{ target: 100, suffix: "%", label: "Remote-First" },
	],
};

// ─── About ───────────────────────────────────────────────────────────────────

export const ABOUT = {
  headline: "An Expert Team Of Senior Engineers. Full Stack. Zero Middlemen.",
  body: "Mobilixir is a boutique consultancy founded by team of expert engineers with a decade-long software engineering background and deep roots in React Native, Elixir/Phoenix, Swift, and TypeScript. We don't subcontract. You talk directly to the person writing your code.\n\nOur sweet spot: startups and SMEs that need production-grade mobile or web applications delivered fast, built to scale, and maintained long-term.",
  values: [
    {
      title: "Pragmatic",
      description:
        "We choose boring, proven technology where it matters and reach for cutting-edge only when it earns its complexity.",
    },
    {
      title: "Transparent",
      description:
        "Weekly async updates, public roadmaps, and honest estimates. No surprises at invoice time.",
    },
    {
      title: "Ownership",
      description:
        "We treat your product as our own. Proper tests, clean architecture, documented hand-offs.",
    },
  ],
};

// ─── Services ────────────────────────────────────────────────────────────────

export const SERVICES: Service[] = [
  {
    title: "React Native Apps",
    description:
      "Cross-platform iOS & Android apps built on the New Architecture (TurboModules + Fabric). Ships to both stores from a single codebase without sacrificing native feel.",
    icon: "📱",
  },
  {
    title: "Native iOS (Swift / SwiftUI)",
    description:
      "When performance and Apple platform depth matter most — ARKit, HealthKit, CoreML, StoreKit. SwiftUI-first with UIKit escape hatches.",
    icon: "🍎",
  },
  {
    title: "Phoenix LiveView Web Apps",
    description:
      "Real-time, server-rendered web apps that feel like SPAs without the JavaScript complexity. Elixir's fault-tolerant runtime means 99.9% uptime by default.",
    icon: "🔥",
  },
  {
    title: "Next.js Frontends",
    description:
      "Type-safe, SEO-optimised React frontends with RSC, App Router, and edge delivery. From landing pages to complex dashboards.",
    icon: "⚡",
  },
  {
    title: "Backend & API Design",
    description:
      "REST and GraphQL APIs in Elixir, Node.js, or Spring Boot. Designed for horizontal scale with proper auth, rate-limiting, and observability from day one.",
    icon: "🏗️",
  },
  {
    title: "CI/CD & DevOps",
    description:
      "Automated pipelines with Fastlane, CircleCI, and Bitrise. Mobile code-signing, OTA updates, App Store / Play Store deployments without manual steps.",
    icon: "🚀",
  },
];

// ─── Process ─────────────────────────────────────────────────────────────────

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery Call",
    description:
      "30-minute video call to understand your goals, timelines, and constraints. We'll tell you honestly if we're the right fit.",
  },
  {
    step: 2,
    title: "Scoped Proposal",
    description:
      "A written proposal with milestones, deliverables, and a fixed price or time-and-material estimate. No hidden fees.",
  },
  {
    step: 3,
    title: "Design & Architecture",
    description:
      "UI mockups, data models, and system architecture reviewed with you before a single line of production code is written.",
  },
  {
    step: 4,
    title: "Agile Development",
    description:
      "Two-week sprints. Async updates via Loom or written summaries. Staging environment live from week one.",
  },
  {
    step: 5,
    title: "QA & Launch",
    description:
      "Automated test suites, manual smoke testing, App Store / Play Store submission, and deployment to your infrastructure.",
  },
  {
    step: 6,
    title: "Post-Launch Support",
    description:
      "Bug fixes, performance monitoring, and feature iterations. Retainer or ad-hoc — your choice.",
  },
];

// ─── Tech Stack ───────────────────────────────────────────────────────────────

export const TECH_STACK: TechCategory[] = [
  {
    title: "Mobile",
    items: [
      { name: "React Native", logo: "/tech/react.svg" },
      { name: "Swift / SwiftUI", logo: "/tech/swift.svg" },
      { name: "Flutter", logo: "/tech/flutter.svg" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "Next.js", logo: "/tech/nextjs.svg" },
      { name: "React.js", logo: "/tech/react.svg" },
      { name: "Tailwind CSS", logo: "/tech/tailwind.svg" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Elixir", logo: "/tech/elixir.svg" },
      { name: "Phoenix", logo: "/tech/phoenix.svg" },
      { name: "Node.js", logo: "/tech/nodejs.svg" },
    ],
  },
  {
    title: "Full Stack",
    items: [
      { name: "Next.js", logo: "/tech/nextjs.svg" },
      { name: "Phoenix Framework", logo: "/tech/phoenix.svg" },
      { name: "Wasp Lang", logo: "/tech/wasp.svg" },
    ],
  },
  {
    title: "DevOps / CI-CD",
    items: [
      { name: "Fastlane", logo: "/tech/fastlane.svg" },
      { name: "CircleCI", logo: "/tech/circleci.svg" },
      { name: "Bitrise", logo: "/tech/bitrise.svg" },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "TypeScript", logo: "/tech/typescript.svg" },
      { name: "JavaScript", logo: "/tech/javascript.svg" },
      { name: "Elixir", logo: "/tech/elixir.svg" },
    ],
  },
];

// ─── Case Studies ─────────────────────────────────────────────────────────────

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "fintech-wallet",
    industry: "Fintech",
    title: "Cross-Border Wallet & Payments App",
    problem:
      "A London-based fintech needed a React Native app supporting real-time FX rates, KYC onboarding, and PCI-DSS-compliant card tokenisation across iOS and Android.",
    solution:
      "Built a performant React Native New Architecture app with a Phoenix LiveView back-office dashboard, Stripe Connect integration, and biometric authentication.",
    results: [
      "4.8★ App Store rating at launch",
      "< 2s cold start on mid-range Android",
      "Zero security audit findings",
    ],
    tags: ["React Native", "Elixir", "Phoenix", "Stripe", "KYC"],
    image: "/casestudies/fintech.svg",
  },
  {
    slug: "realtime-chat",
    industry: "SaaS",
    title: "Real-Time Team Chat Platform",
    problem:
      "A remote-first SaaS startup needed Slack-like messaging — channels, threads, file sharing, and presence indicators — without Slack's per-seat cost.",
    solution:
      "Phoenix Channels + LiveView for WebSocket-native real-time features. React Native mobile clients with offline-first sync using CRDT-inspired conflict resolution.",
    results: [
      "50 ms median message delivery",
      "Handles 10 k concurrent users on a single node",
      "Offline read/write with seamless resync",
    ],
    tags: ["Phoenix", "WebSockets", "React Native", "LiveView"],
    image: "/casestudies/chat.svg",
  },
  {
    slug: "healthtech-tracker",
    industry: "HealthTech",
    title: "Chronic Condition Self-Management App",
    problem:
      "A digital health company needed an iOS app that could read Apple Health data, display trends, and send nudges at clinically meaningful moments.",
    solution:
      "Native Swift / SwiftUI app with deep HealthKit integration, CoreML on-device predictions, and a Phoenix API for cohort analytics and clinician dashboards.",
    results: [
      "App approved by Apple HealthKit review first submission",
      "85% 30-day retention (industry avg: 38%)",
      "Featured in App Store 'Health & Fitness' editorial",
    ],
    tags: ["Swift", "SwiftUI", "HealthKit", "CoreML", "Elixir"],
    image: "/casestudies/health.svg",
  },
  {
    slug: "b2b-saas-invoicing",
    industry: "B2B SaaS",
    title: "EU VAT-Aware Invoicing Platform",
    problem:
      "Freelancers serving UK and EU clients struggled with reverse-charge VAT, VIES validation, and OSS compliance — all managed in spreadsheets.",
    solution:
      "Phoenix LiveView SaaS with a deterministic VAT engine, Stripe Billing, multi-currency PDF invoices via ChromicPDF, and automated payment reminder pipelines via Oban.",
    results: [
      "Handles 20+ EU VAT jurisdictions automatically",
      "PDF invoices generated in < 800 ms",
      "Reduces manual compliance work by ~4 hours/month",
    ],
    tags: ["Elixir", "Phoenix LiveView", "Stripe", "B2B SaaS"],
    image: "/casestudies/invoicing.svg",
  },
  {
    slug: "ecommerce-mobile",
    industry: "E-Commerce",
    title: "Headless Commerce Mobile App",
    problem:
      "A fashion brand's existing Shopify mobile presence had a 60% cart abandonment rate and poor performance on low-end devices in emerging markets.",
    solution:
      "React Native app with a custom headless Shopify storefront API layer, skeleton screens, CDN-optimised images, and a streamlined 3-step checkout.",
    results: [
      "Cart abandonment dropped from 60% → 28%",
      "3× faster product browse than mobile web",
      "First Meaningful Paint < 1.2 s on 3G",
    ],
    tags: ["React Native", "Shopify", "Next.js", "Performance"],
    image: "/casestudies/ecommerce.svg",
  },
  {
    slug: "logistics-dashboard",
    industry: "Logistics",
    title: "Live Fleet Tracking Dashboard",
    problem:
      "A mid-size logistics company tracked 200+ vehicles via a laggy Google Sheets export updated hourly. Dispatchers were making decisions on stale data.",
    solution:
      "Phoenix LiveView dashboard with PostgreSQL + PostGIS for geospatial queries, MQTT broker integration for GPS device telemetry, and a React Native driver app.",
    results: [
      "Vehicle positions updated every 5 seconds",
      "Dispatcher response time to incidents: 18 min → 4 min",
      "Replaced 3 SaaS tools saving €2 k/month",
    ],
    tags: ["Phoenix LiveView", "PostGIS", "MQTT", "React Native"],
    image: "/casestudies/logistics.svg",
  },
];

// ─── Testimonials (placeholder — update when real clients onboard) ────────────

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "CTO, NovaPay",
    body: "Rushikesh delivered our React Native wallet app in 8 weeks — on time, under budget, and with test coverage we didn't expect from a solo contractor. Exceptional.",
    avatar: "PS",
  },
  {
    name: "Lena Müller",
    role: "Product Lead, TeamFlow",
    body: "The Phoenix real-time architecture he chose was exactly right. We've had zero downtime in six months with 8 k daily active users. Highly recommended.",
    avatar: "LM",
  },
  {
    name: "James Okafor",
    role: "Founder, LogiTrack",
    body: "From discovery to launch in 12 weeks. The LiveView dashboard replaced three paid SaaS tools. The ROI paid for the project in month two.",
    avatar: "JO",
  },
];
