import type { Metadata } from "next";
import { SERVICES } from "@/data/site";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "Services",
  description: "Mobile app development, mobile security hardening, web apps, backend APIs, CI/CD and technical consulting from Mobilixir Technologies.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Engineering for mobile and web products."
        description="Pick a service to see what is included, the tools we use and how to get started."
      />
      <section className="py-16 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </section>
      <ProcessSection />
      <CtaBand />
    </>
  );
}
