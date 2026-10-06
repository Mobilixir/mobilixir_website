import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/site";

/** One indexed row in the work list: number, name, category, kind, arrow. */
export function WorkRow({ project, index }: { project: Project; index: number }) {
  return (
    <li>
      <Link
        href={`/work/${project.slug}`}
        className="work-row group grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[3.5rem_1fr_14rem_auto] items-center gap-x-4 sm:gap-x-6 gap-y-1 py-6 sm:py-8 border-b border-base-300 hover:bg-base-200/60 transition-colors px-2 -mx-2 rounded-lg"
      >
        <span className="font-mono text-sm text-base-content/35">{String(index + 1).padStart(2, "0")}</span>
        <span className="min-w-0">
          <span className="block text-xl sm:text-2xl font-semibold tracking-tight break-words group-hover:text-primary transition-colors">{project.name}</span>
          <span className="block mt-1 text-sm text-base-content/60 line-clamp-2 max-w-2xl">{project.summary}</span>
        </span>
        <span className="hidden sm:flex flex-col items-start gap-1">
          <span className="font-mono text-[11px] uppercase tracking-wider text-primary">{project.category}</span>
          <span className="text-xs text-base-content/45">{project.kind}</span>
        </span>
        <ArrowRight size={20} className="work-arrow text-primary" aria-hidden="true" />
      </Link>
    </li>
  );
}
