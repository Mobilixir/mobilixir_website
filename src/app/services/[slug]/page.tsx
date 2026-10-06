import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PROJECTS, SERVICES, SITE, getService } from "@/data/site";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { CtaBand } from "@/components/ui/CtaBand";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const related = PROJECTS.filter((p) => p.services.includes(service.slug));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.summary,
      provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
      url: `${SITE.url}/services/${service.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader eyebrow="Service" title={service.title} description={service.description}>
        <div className="flex flex-wrap gap-3 mt-8">
          <Link href={`/contact?service=${service.slug}`} className="btn btn-primary rounded-full px-8">
            Discuss this service
          </Link>
          <Link href="/services" className="btn btn-ghost rounded-full">All services</Link>
        </div>
      </PageHeader>

      <section className="py-16 bg-base-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-5">What is included</h2>
            <ul className="space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3 text-base-content/75">
                  <Check size={18} className="text-primary mt-1 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-5">Questions</h2>
            <div className="space-y-3">
              {service.faqs.map((f) => (
                <details key={f.q} className="collapse collapse-arrow border border-base-300 rounded-xl">
                  <summary className="collapse-title font-medium">{f.q}</summary>
                  <div className="collapse-content text-sm text-base-content/70 leading-relaxed">{f.a}</div>
                </details>
              ))}
            </div>
          </div>

          <aside className="space-y-8">
            <div>
              <h2 className="font-semibold mb-3">Who it is for</h2>
              <p className="text-sm text-base-content/70 leading-relaxed">{service.audience}</p>
            </div>
            <div>
              <h2 className="font-semibold mb-3">Tools</h2>
              <ul className="flex flex-wrap gap-2">
                {service.stack.map((t) => <li key={t} className="badge badge-outline">{t}</li>)}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-base-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-2">Related work</h2>
            <p className="text-base-content/60 mb-8">Open-source projects that show this work in practice.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title={`Need help with ${service.title.toLowerCase()}?`}
        href={`/contact?service=${service.slug}`}
      />
    </>
  );
}
