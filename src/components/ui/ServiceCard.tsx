import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/site";
import { ServiceIcon } from "./ServiceIcon";

export function ServiceCard({ service, index }: { service: Service; index?: number }) {
  return (
    <article className="card-elevated group relative flex h-full flex-col p-7 rounded-2xl bg-base-100 border border-base-300">
      <div className="flex items-start justify-between mb-8">
        <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <ServiceIcon name={service.icon} />
        </span>
        {index !== undefined && (
          <span className="font-mono text-xs text-base-content/35">{String(index + 1).padStart(2, "0")}</span>
        )}
      </div>
      <h3 className="text-xl font-semibold tracking-tight mb-2">
        <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0 after:rounded-2xl">
          {service.title}
        </Link>
      </h3>
      <p className="text-sm text-base-content/65 leading-relaxed flex-1">{service.summary}</p>
      <ul className="flex flex-wrap gap-1.5 mt-6">
        {service.stack.slice(0, 3).map((t) => (
          <li key={t} className="font-mono text-[11px] px-2 py-1 rounded bg-base-200 text-base-content/60">{t}</li>
        ))}
      </ul>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
        Explore <ArrowUpRight size={15} className="transition-transform duration-200 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </article>
  );
}
