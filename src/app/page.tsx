import { HeroSection } from "@/components/sections/HeroSection";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { LatestPostsSection } from "@/components/sections/LatestPostsSection";
import { CtaBand } from "@/components/ui/CtaBand";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechMarquee />
      <ServicesSection />
      <StatsStrip />
      <FeaturedWorkSection />
      <ProcessSection />
      <LatestPostsSection />
      <CtaBand />
    </>
  );
}
