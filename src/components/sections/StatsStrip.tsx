import { PROJECTS, SERVICES } from "@/data/site";

/** Facts derived from the content itself, so they can never drift from reality. */
export function StatsStrip() {
  const stats = [
    { value: SERVICES.length, label: "Services" },
    { value: PROJECTS.filter((p) => p.kind === "npm package").length, label: "npm libraries" },
    { value: PROJECTS.filter((p) => p.kind === "VS Code extension").length, label: "VS Code extensions" },
    { value: PROJECTS.length, label: "Published projects" },
  ];

  return (
    <section aria-label="At a glance" className="border-y border-base-300 bg-base-100">
      <dl className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-base-300">
        {stats.map((s) => (
          <div key={s.label} className="py-8 px-4 first:pl-0">
            <dd className="text-4xl sm:text-5xl font-semibold tracking-tight">{s.value}</dd>
            <dt className="mt-1 text-sm text-base-content/60">{s.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
