import Link from "next/link";
import { getBoilerplates } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BoilerplateCard } from "@/components/ui/BoilerplateCard";

/** Home-page pitch for the ready-made web and mobile foundations. */
export function BoilerplatesSection() {
  const items = getBoilerplates();

  return (
    <section className="py-24 sm:py-32 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Boilerplates"
          title="Ready-made foundations for web and mobile apps."
          description="We do not start your product from an empty folder. Our tested boilerplates for Next.js + NestJS, Phoenix LiveView and React Native cover the groundwork every app needs, which cuts development time and effort so your budget goes on your features."
        />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ project, platform }, i) => (
            <li key={project.slug}>
              <Reveal delay={(i % 4) * 0.08} className="h-full">
                <BoilerplateCard project={project} platform={platform} />
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-10">
          <Link href="/boilerplates" className="link link-primary font-medium">Why start from a boilerplate →</Link>
        </p>
      </div>
    </section>
  );
}
