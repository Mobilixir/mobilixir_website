import { isValidRange } from "../lib/effort.ts";
import type { Project, ProjectCategory, Service } from "./site";

interface Content {
  projects: Project[];
  services: Service[];
  categories: ProjectCategory[];
}

/** A site path ("/contact") or an absolute https URL. Protocol-relative "//host" is rejected. */
const isSafeHref = (href: string) =>
  href.startsWith("https://") || (href.startsWith("/") && !href.startsWith("//"));

/**
 * Checks the content in site.ts for mistakes the type system cannot catch.
 * Returns one human-readable message per problem; an empty list means valid.
 */
export function findContentProblems({ projects, services, categories }: Content): string[] {
  const problems: string[] = [];
  const serviceSlugs = new Set(services.map((s) => s.slug));
  const seen = new Set<string>();

  for (const p of projects) {
    const at = `project "${p.slug}"`;
    if (seen.has(p.slug)) problems.push(`${at}: duplicate slug`);
    seen.add(p.slug);

    if (!categories.includes(p.category)) {
      problems.push(`${at}: category "${p.category}" is not in PROJECT_CATEGORIES`);
    }
    if (p.highlights.length === 0) problems.push(`${at}: needs at least one highlight`);

    for (const s of p.services) {
      if (!serviceSlugs.has(s)) problems.push(`${at}: unknown service "${s}"`);
    }
    for (const l of p.links) {
      if (!isSafeHref(l.href)) problems.push(`${at}: link "${l.label}" must be https:// or a site path`);
    }

    for (const b of p.benefits ?? []) {
      if (!b.title.trim() || !b.text.trim()) problems.push(`${at}: benefit "${b.title}" needs a title and text`);
    }
    for (const c of p.comparisons ?? []) {
      if (c.rows.length === 0) problems.push(`${at}: comparison "${c.against}" has no rows`);
    }
    if (p.effort?.length === 0) problems.push(`${at}: effort must list at least one task`);
    for (const e of p.effort ?? []) {
      if (!isValidRange(e.hours)) problems.push(`${at}: effort "${e.task}" has an invalid hour range`);
    }
  }

  return problems;
}
