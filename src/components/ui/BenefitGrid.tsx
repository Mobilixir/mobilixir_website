import type { Benefit } from "@/data/site";

export function BenefitGrid({ benefits }: { benefits: Benefit[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {benefits.map((b) => (
        <li key={b.title} className="rounded-xl border border-base-300 bg-base-100 p-5">
          <h3 className="font-semibold mb-2">{b.title}</h3>
          <p className="text-sm text-base-content/65 leading-relaxed">{b.text}</p>
        </li>
      ))}
    </ul>
  );
}
