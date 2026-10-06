import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/site";
import { ServiceIcon } from "./ServiceIcon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card-elevated flex flex-col p-6 rounded-2xl bg-base-100 border border-base-300">
      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
        <ServiceIcon name={service.icon} />
      </span>
      <h3 className="text-lg font-semibold mb-2">
        <Link href={`/services/${service.slug}`} className="hover:text-primary transition-colors">
          {service.title}
        </Link>
      </h3>
      <p className="text-sm text-base-content/60 leading-relaxed flex-1">{service.summary}</p>
      <div className="flex flex-wrap gap-1.5 mt-4">
        {service.stack.slice(0, 3).map((t) => (
          <span key={t} className="badge badge-ghost badge-sm">{t}</span>
        ))}
      </div>
      <div className="flex items-center gap-4 mt-5 text-sm font-medium">
        <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-1 text-primary hover:gap-2 transition-all">
          Learn more <ArrowRight size={15} />
        </Link>
        <Link href={`/contact?service=${service.slug}`} className="text-base-content/50 hover:text-primary transition-colors">
          Enquire
        </Link>
      </div>
    </article>
  );
}
