import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-elevated flex flex-col p-6 rounded-2xl bg-base-100 border border-base-300">
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="badge badge-primary badge-soft badge-sm">{project.category}</span>
        <span className="text-xs text-base-content/40">{project.kind}</span>
      </div>
      <h3 className="text-lg font-semibold mb-2 break-words">
        <Link href={`/work/${project.slug}`} className="hover:text-primary transition-colors">
          {project.name}
        </Link>
      </h3>
      <p className="text-sm text-base-content/60 leading-relaxed flex-1">{project.summary}</p>
      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.tags.slice(0, 4).map((t) => (
          <span key={t} className="badge badge-ghost badge-sm">{t}</span>
        ))}
      </div>
      <Link href={`/work/${project.slug}`} className="inline-flex items-center gap-1 mt-5 text-sm font-medium text-primary">
        Read more <ArrowUpRight size={15} />
      </Link>
    </article>
  );
}
