import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import {
  BOILERPLATE_FAQS,
  BOILERPLATE_VS_SCRATCH,
  EFFORT_NOTE,
  SCRATCH_IS_BETTER_WHEN,
  SITE,
  getBoilerplates,
} from "@/data/site";
import { formatHours, totalEffort } from "@/lib/effort";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BoilerplateCard } from "@/components/ui/BoilerplateCard";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "Boilerplates & Starter Kits",
  description:
    "Ready-made, tested foundations for web and mobile apps: Next.js + NestJS and Phoenix LiveView SaaS starter kits, and Redux Toolkit Saga boilerplates for React Native.",
  keywords: [
    "SaaS boilerplate",
    "SaaS starter kit",
    "Next.js NestJS starter kit",
    "Phoenix LiveView starter kit",
    "React Native boilerplate",
    "Redux Toolkit Saga boilerplate",
    "boilerplate vs building from scratch",
  ],
  alternates: { canonical: "/boilerplates" },
};

export default function BoilerplatesPage() {
  const items = getBoilerplates();
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: BOILERPLATE_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHeader
        eyebrow="Boilerplates"
        title="Ready-made foundations for web and mobile apps."
        description={`Every product needs the same groundwork before its first real feature. ${SITE.shortName} has already built it, tested it and written it down, so your budget goes on what makes your product different.`}
      >
        <div className="flex flex-wrap gap-3 mt-8">
          <Link href="/contact" className="btn btn-primary rounded-lg px-6">Start on a foundation</Link>
          <a href="#compare" className="btn btn-ghost rounded-lg">Boilerplate vs from scratch</a>
        </div>
      </PageHeader>

      <section className="py-16 sm:py-24 bg-base-100" aria-labelledby="kits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="kits" className="sr-only">Our boilerplates</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {items.map(({ project, platform }) => (
              <li key={project.slug}>
                <BoilerplateCard project={project} platform={platform} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-base-200/60 border-y border-base-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Time saved"
            title="Hours you do not have to spend."
            description="What each foundation replaces, estimated for an experienced engineer. Open a project for the line-by-line breakdown."
          />
          <div className="overflow-x-auto rounded-xl border border-base-300 bg-base-100">
            <table className="w-full min-w-[32rem] text-sm text-left">
              <caption className="sr-only">Estimated hours each boilerplate saves</caption>
              <thead className="bg-base-200/70">
                <tr>
                  <th scope="col" className="p-4 font-semibold">Boilerplate</th>
                  <th scope="col" className="p-4 font-semibold">Platform</th>
                  <th scope="col" className="p-4 font-semibold text-right">Estimated hours saved</th>
                </tr>
              </thead>
              <tbody>
                {items.map(({ project, platform }) => (
                  <tr key={project.slug} className="border-t border-base-300">
                    <th scope="row" className="p-4 font-medium">
                      <Link href={`/work/${project.slug}`} className="link link-hover">{project.name}</Link>
                    </th>
                    <td className="p-4 text-base-content/65">{platform}</td>
                    <td className="p-4 text-right font-mono whitespace-nowrap">
                      {project.effort ? formatHours(totalEffort(project.effort)) : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-base-content/55 leading-relaxed max-w-3xl">
            {EFFORT_NOTE} The Redux Toolkit Saga figures are per project, so they add up every time you start a new app.
          </p>
        </div>
      </section>

      <section id="compare" className="py-16 sm:py-24 bg-base-100 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Compare"
            title="Boilerplate vs starting from scratch."
            description="Both are reasonable. This is what changes when you start from a tested foundation."
          />
          <ComparisonTable comparison={BOILERPLATE_VS_SCRATCH} ours="Starting from a boilerplate" />

          <h3 className="text-xl font-semibold mt-14 mb-5">When starting from scratch is the better call</h3>
          <ul className="space-y-3">
            {SCRATCH_IS_BETTER_WHEN.map((t) => (
              <li key={t} className="flex gap-3 text-base-content/75">
                <Check size={18} className="text-primary mt-1 shrink-0" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-base-200/60 border-t border-base-300" aria-labelledby="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq" className="text-3xl font-semibold tracking-tight mb-8">Questions</h2>
          <div className="space-y-3">
            {BOILERPLATE_FAQS.map((f) => (
              <details key={f.q} className="collapse collapse-arrow border border-base-300 rounded-xl bg-base-100">
                <summary className="collapse-title font-medium">{f.q}</summary>
                <div className="collapse-content text-sm text-base-content/70 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Want your product built on one of these?"
        text="Tell us what you are building. We will tell you which foundation fits, or whether starting from scratch is the better call."
        label="Talk to us"
      />
    </>
  );
}
