import Link from "next/link";
import { formatDate, type PostSummary } from "@/lib/devto";

export function PostCard({ post }: { post: PostSummary }) {
  return (
    <article className="card-elevated flex flex-col p-6 rounded-2xl bg-base-100 border border-base-300">
      <p className="text-xs text-base-content/50 mb-3">
        <time dateTime={post.published_at}>{formatDate(post.published_at)}</time> · {post.reading_time_minutes} min read
      </p>
      <h3 className="text-lg font-semibold mb-2">
        <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
      </h3>
      <p className="text-sm text-base-content/60 leading-relaxed flex-1 line-clamp-3">{post.description}</p>
      <div className="flex flex-wrap gap-1.5 mt-4">
        {post.tag_list.slice(0, 3).map((t) => <span key={t} className="badge badge-ghost badge-sm">#{t}</span>)}
      </div>
    </article>
  );
}
