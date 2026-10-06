import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { WorkExplorer } from "@/components/sections/WorkExplorer";
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WorkExplorer />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
