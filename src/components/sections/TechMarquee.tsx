import { TECH_STACK } from "@/data/site";

const items = Array.from(new Set(TECH_STACK.flatMap((c) => c.items)));

/** Drifting tech strip. Static and wrapped under reduced motion (see globals.css). */
export function TechMarquee() {
  const row = (hidden: boolean) => (
    <ul className={hidden ? "marquee-dup flex gap-12" : "flex gap-12"} aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t} className="font-mono text-sm text-base-content/50 whitespace-nowrap">{t}</li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Technologies" className="marquee overflow-hidden py-8 border-b border-base-300 bg-base-200/50">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
