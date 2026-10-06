import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-elevated group relative flex h-full flex-col p-6 rounded-2xl bg-base-100 border border-base-300">
      <div className="flex items-center justify-between gap-2 mb-4">
        <span className="font-mono text-[11px] uppercase tracking-wider text-primary">{project.category}</span>
        <span className="text-xs text-base-content/40">{project.kind}</span>
      </div>
      <h3 className="text-lg font-semibold mb-2 break-words">
        <Link href={`/work/${project.slug}`} className="after:absolute after:inset-0 after:rounded-2xl">{project.name}</Link>
      </h3>
      <p className="text-sm text-base-content/65 leading-relaxed flex-1">{project.summary}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
        Read more <ArrowUpRight size={15} />
      </span>
    </article>
  );
}
