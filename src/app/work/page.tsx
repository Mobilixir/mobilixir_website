import type { Metadata } from "next";
import { PROJECTS, PROJECT_CATEGORIES } from "@/data/site";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "Work",
  description: "Open-source React Native libraries, VS Code extensions and developer tools published by Mobilixir Technologies.",
  keywords: ["React Native libraries", "open source React Native", "VS Code extensions", "iOS privacy manifest tool"],
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Open-source libraries and tools."
        description="Software we have built and published ourselves, grouped by theme. Client work will appear here once it can be shared."
      />
      <section className="py-16 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {PROJECT_CATEGORIES.map((category) => {
            const items = PROJECTS.filter((p) => p.category === category);
            if (items.length === 0) return null;
            return (
              <div key={category}>
                <h2 className="text-xl font-bold mb-6">{category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((p) => <ProjectCard key={p.slug} project={p} />)}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
