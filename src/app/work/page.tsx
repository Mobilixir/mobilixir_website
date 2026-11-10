import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { WorkExplorer } from "@/components/sections/WorkExplorer";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "Work",
  description: "Open-source React Native libraries, developer tools, VS Code extensions and SaaS starter kits built by Mobilixir Technologies.",
  keywords: ["React Native libraries", "open source React Native", "VS Code extensions", "iOS privacy manifest tool", "SaaS starter kit", "Phoenix LiveView boilerplate", "Next.js NestJS boilerplate"],
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Libraries, tools and starter kits."
        description="Software we have built ourselves, from open-source React Native libraries to SaaS starter kits, grouped by theme. Client work will appear here once it can be shared."
      />
      <section className="py-16 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WorkExplorer />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
