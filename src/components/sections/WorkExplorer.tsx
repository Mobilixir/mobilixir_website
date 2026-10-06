"use client";

import { useState } from "react";
import { PROJECT_CATEGORIES, PROJECTS, type ProjectCategory } from "@/data/site";
import { WorkRow } from "@/components/ui/WorkRow";
import { cn } from "@/lib/utils";

/** Filterable work list. Filtering is instant: it is a frequent, utilitarian action. */
export function WorkExplorer() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");
  const items = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);
  const filters: (ProjectCategory | "All")[] = ["All", ...PROJECT_CATEGORIES];

  return (
    <div>
      <div role="group" aria-label="Filter work by category" className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={active === f}
            onClick={() => setActive(f)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium border transition-colors active:scale-[0.97]",
              active === f
                ? "bg-primary text-primary-content border-primary"
                : "border-base-300 text-base-content/70 hover:border-primary/50 hover:text-base-content",
            )}
          >
            {f}
          </button>
        ))}
      </div>
      <ul className="border-t border-base-300">
        {items.map((p, i) => <WorkRow key={p.slug} project={p} index={i} />)}
      </ul>
    </div>
  );
}
