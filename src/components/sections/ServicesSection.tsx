import Link from "next/link";
import { SERVICES } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function ServicesSection() {
  return (
    <section className="py-24 sm:py-32 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Engineering for mobile, web and the backend in between."
          description="From first prototype to store release, with security and maintainability designed in."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08} className="h-full">
              <ServiceCard service={s} index={i} />
            </Reveal>
          ))}
        </div>
        <p className="mt-10">
          <Link href="/services" className="link link-primary font-medium">View all services →</Link>
        </p>
      </div>
    </section>
  );
}
