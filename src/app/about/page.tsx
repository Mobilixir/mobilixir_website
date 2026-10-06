import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description: "Mobilixir Technologies is an independent software studio building secure, maintainable mobile and web products.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="An independent studio for mobile and web." />
      <AboutSection />
      <TechStackSection />
      <CtaBand />
    </>
  );
}
