import { ABOUT } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function AboutSection() {
  return (
    <section className="py-24 sm:py-32 bg-base-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6 max-w-3xl">{ABOUT.headline}</h2>
          <div className="space-y-4 text-base-content/70 leading-relaxed max-w-3xl">
            {ABOUT.body.map((p) => <p key={p}>{p}</p>)}
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">
          {ABOUT.values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 2) * 0.06}>
              <div className="h-full p-6 rounded-2xl border border-base-300">
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-base-content/60 leading-relaxed">{v.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
