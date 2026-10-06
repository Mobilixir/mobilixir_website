import { SITE } from "@/data/site";
import { getPosts } from "@/lib/devto";

export const revalidate = 3600;

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[c]!);

export async function GET() {
  const posts = await getPosts();
  const items = posts
    .map(
      (p) => `<item><title>${esc(p.title)}</title><link>${SITE.url}/blog/${p.slug}</link><guid isPermaLink="true">${SITE.url}/blog/${p.slug}</guid><pubDate>${new Date(p.published_at).toUTCString()}</pubDate><description>${esc(p.description)}</description></item>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${esc(SITE.name)} Blog</title><link>${SITE.url}/blog</link><description>${esc(SITE.description)}</description>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
