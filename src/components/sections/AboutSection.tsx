import { ABOUT } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function AboutSection() {
  return (
    <section className="py-24 sm:py-32 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="grid lg:grid-cols-12 gap-10">
          <h2 className="lg:col-span-5 text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1] text-balance">{ABOUT.headline}</h2>
          <div className="lg:col-span-7 space-y-5 text-lg text-base-content/70 leading-relaxed">
            {ABOUT.body.map((p) => <p key={p}>{p}</p>)}
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-base-300 mt-16">
          {ABOUT.values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 2) * 0.08} className="border-r border-b border-base-300">
              <div className="h-full p-7">
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-base-content/65 leading-relaxed">{v.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
