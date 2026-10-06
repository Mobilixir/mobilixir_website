import Link from "next/link";
import { formatDate, type PostSummary } from "@/lib/devto";

export function PostCard({ post }: { post: PostSummary }) {
  return (
    <article className="card-elevated relative flex h-full flex-col p-6 rounded-2xl bg-base-100 border border-base-300">
      <p className="font-mono text-xs text-base-content/45 mb-4">
        <time dateTime={post.published_at}>{formatDate(post.published_at)}</time> · {post.reading_time_minutes} min read
      </p>
      <h3 className="text-lg font-semibold mb-2 leading-snug">
        <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:rounded-2xl">{post.title}</Link>
      </h3>
      <p className="text-sm text-base-content/65 leading-relaxed flex-1 line-clamp-3">{post.description}</p>
      <ul className="flex flex-wrap gap-1.5 mt-5">
        {post.tag_list.slice(0, 3).map((t) => <li key={t} className="font-mono text-[11px] px-2 py-1 rounded bg-base-200 text-base-content/60">#{t}</li>)}
      </ul>
    </article>
  );
}
