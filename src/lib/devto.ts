import { z } from "zod";
import { SITE } from "@/data/site";

const API = "https://dev.to/api";
const REVALIDATE_SECONDS = 3600;

const listItem = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string().default(""),
  slug: z.string(),
  url: z.string(),
  canonical_url: z.string().nullish(),
  cover_image: z.string().nullish(),
  published_at: z.string(),
  reading_time_minutes: z.number().default(1),
  tag_list: z.array(z.string()).default([]),
});

const detail = listItem.omit({ tag_list: true }).extend({
  body_html: z.string(),
  tags: z.array(z.string()).default([]),
});

export type PostSummary = z.infer<typeof listItem>;
export type Post = z.infer<typeof detail>;

async function get(path: string): Promise<unknown | null> {
  try {
    const res = await fetch(`${API}${path}`, { next: { revalidate: REVALIDATE_SECONDS } });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    // dev.to unreachable: callers render an empty state instead of failing the page.
    return null;
  }
}

export async function getPosts(limit = 30): Promise<PostSummary[]> {
  const data = await get(`/articles?username=${SITE.devtoUsername}&per_page=${limit}`);
  const parsed = z.array(listItem).safeParse(data);
  return parsed.success ? parsed.data : [];
}

export async function getPost(slug: string): Promise<Post | null> {
  const data = await get(`/articles/${SITE.devtoUsername}/${encodeURIComponent(slug)}`);
  const parsed = detail.safeParse(data);
  return parsed.success ? parsed.data : null;
}

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
