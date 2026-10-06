import Link from "next/link";
import { PROJECTS } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function FeaturedWorkSection() {
  return (
    <section className="py-24 sm:py-32 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Work"
          title="Open-source libraries and tools"
          description="Software we have built and published ourselves — mobile security, App Store compliance and developer tooling."
        />
        <div className="cards-perspective grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
        <p className="text-center mt-10">
          <Link href="/work" className="link link-primary font-medium">See all work</Link>
        </p>
      </div>
    </section>
  );
}
