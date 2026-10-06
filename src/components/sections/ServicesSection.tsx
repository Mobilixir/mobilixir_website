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
          title="What we build"
          description="Mobile, web and backend engineering, from first prototype to store release."
        />
        <div className="cards-perspective grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.06}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
        <p className="text-center mt-10">
          <Link href="/services" className="link link-primary font-medium">View all services</Link>
        </p>
      </div>
    </section>
  );
}
