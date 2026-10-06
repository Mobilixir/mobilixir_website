import { TECH_STACK } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TechStackSection() {
  return (
    <section className="py-24 sm:py-32 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Tech stack" title="Tools we work with every day" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK.map((cat, i) => (
            <Reveal key={cat.title} delay={(i % 3) * 0.06}>
              <div className="h-full p-6 rounded-2xl bg-base-100 border border-base-300">
                <h3 className="font-semibold mb-3">{cat.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li key={item} className="badge badge-outline">{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
