import { TECH_STACK } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TechStackSection() {
  return (
    <section className="py-24 sm:py-32 bg-base-200/60 border-y border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Tech stack" title="Tools we use every day." />
        <dl className="border-t border-base-300">
          {TECH_STACK.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.05}>
              <div className="grid sm:grid-cols-[12rem_1fr] gap-2 sm:gap-8 py-6 border-b border-base-300">
                <dt className="font-mono text-sm text-base-content/50">{cat.title}</dt>
                <dd className="flex flex-wrap gap-x-6 gap-y-2 text-lg font-medium">
                  {cat.items.map((item) => <span key={item}>{item}</span>)}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
