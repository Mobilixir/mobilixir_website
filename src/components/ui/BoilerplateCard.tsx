import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import type { BoilerplateEntry, Project } from "@/data/site";
import { formatHours, totalEffort } from "@/lib/effort";

export function BoilerplateCard({ project, platform }: { project: Project; platform: BoilerplateEntry["platform"] }) {
  return (
    <article className="card-elevated group relative flex h-full flex-col p-6 rounded-2xl bg-base-100 border border-base-300">
      <div className="flex items-center justify-between gap-2 mb-4">
        <span className="font-mono text-[11px] uppercase tracking-wider text-primary">{platform}</span>
        <span className="text-xs text-base-content/50">{project.kind}</span>
      </div>
      <h3 className="text-lg font-semibold mb-2 break-words">
        <Link href={`/work/${project.slug}`} className="after:absolute after:inset-0 after:rounded-2xl">{project.name}</Link>
      </h3>
      <p className="text-sm text-base-content/65 leading-relaxed flex-1">{project.summary}</p>
      {project.effort && (
        <p className="mt-5 flex items-center gap-2 text-sm">
          <Clock size={16} className="text-primary shrink-0" aria-hidden="true" />
          <span>
            Saves an estimated <strong className="font-semibold">{formatHours(totalEffort(project.effort))}</strong>
          </span>
        </p>
      )}
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
        See what is included <ArrowUpRight size={15} aria-hidden="true" />
      </span>
    </article>
  );
}
