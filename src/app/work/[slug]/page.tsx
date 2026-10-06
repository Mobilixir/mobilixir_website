import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { PROJECTS, SERVICES, SITE, getProject } from "@/data/site";
import { PageHeader } from "@/components/ui/PageHeader";
import { CtaBand } from "@/components/ui/CtaBand";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    keywords: project.keywords,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const services = SERVICES.filter((s) => project.services.includes(s.slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": project.kind === "Web tool" ? "WebApplication" : "SoftwareSourceCode",
    name: project.name,
    description: project.summary,
    url: `${SITE.url}/work/${project.slug}`,
    publisher: { "@type": "Organization", name: SITE.name },
    ...(project.kind === "Web tool" && { applicationCategory: "DeveloperApplication" }),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader eyebrow={`${project.category} · ${project.kind}`} title={project.name} description={project.summary}>
        <div className="flex flex-wrap gap-3 mt-8">
          {project.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-full px-6 gap-1">
              {l.label} <ArrowUpRight size={16} />
            </a>
          ))}
          <Link href="/work" className="btn btn-ghost rounded-full">All work</Link>
        </div>
      </PageHeader>

      <section className="py-16 bg-base-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-base-content/75 leading-relaxed">{project.description}</p>

            <h2 className="text-2xl font-bold mt-10 mb-5">Highlights</h2>
            <ul className="space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-base-content/75">
                  <Check size={18} className="text-primary mt-1 shrink-0" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>

            {project.install && (
              <>
                <h2 className="text-2xl font-bold mt-10 mb-4">Install</h2>
                <pre className="rounded-xl bg-neutral text-neutral-content p-4 overflow-x-auto text-sm">
                  <code>{project.install}</code>
                </pre>
              </>
            )}
          </div>

          <aside className="space-y-8">
            <div>
              <h2 className="font-semibold mb-3">Built with</h2>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((t) => <li key={t} className="badge badge-outline">{t}</li>)}
              </ul>
            </div>
            {services.length > 0 && (
              <div>
                <h2 className="font-semibold mb-3">Related services</h2>
                <ul className="space-y-2 text-sm">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="link link-primary">{s.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      <CtaBand title="Need something like this in your app?" />
    </>
  );
}
