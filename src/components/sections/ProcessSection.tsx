import { PROCESS_STEPS } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  return (
    <section className="py-24 sm:py-32 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Process" title="How an engagement works." description="Clear steps, written agreements and no surprises." />
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-base-300">
          {PROCESS_STEPS.map((s, i) => (
            <Reveal key={s.step} delay={(i % 3) * 0.08} className="border-r border-b border-base-300">
              <li className="h-full p-7">
                <span className="font-mono text-sm text-primary">{String(s.step).padStart(2, "0")}</span>
                <h3 className="text-lg font-semibold mt-3 mb-2">{s.title}</h3>
                <p className="text-sm text-base-content/65 leading-relaxed">{s.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
