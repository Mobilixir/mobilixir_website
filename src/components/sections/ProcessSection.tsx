import { PROCESS_STEPS } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  return (
    <section className="py-24 sm:py-32 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Process" title="How an engagement works" description="Clear steps, written agreements and no surprises." />
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((s, i) => (
            <Reveal key={s.step} delay={(i % 3) * 0.06}>
              <li className="h-full p-6 rounded-2xl border border-base-300 bg-base-100">
                <span className="text-sm font-semibold text-primary">Step {s.step}</span>
                <h3 className="text-lg font-semibold mt-1 mb-2">{s.title}</h3>
                <p className="text-sm text-base-content/60 leading-relaxed">{s.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
