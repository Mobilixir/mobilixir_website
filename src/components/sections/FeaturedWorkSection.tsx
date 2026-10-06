import Link from "next/link";
import { PROJECTS } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkRow } from "@/components/ui/WorkRow";

export function FeaturedWorkSection() {
  return (
    <section className="py-24 sm:py-32 bg-base-200/60 border-y border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Work"
          title="Libraries and tools we have published."
          description="Open-source software across mobile security, App Store compliance and developer tooling."
        />
        <Reveal>
          <ul className="border-t border-base-300">
            {PROJECTS.slice(0, 4).map((p, i) => <WorkRow key={p.slug} project={p} index={i} />)}
          </ul>
        </Reveal>
        <p className="mt-10">
          <Link href="/work" className="link link-primary font-medium">See all work →</Link>
        </p>
      </div>
    </section>
  );
}
