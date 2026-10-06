import Link from "next/link";
import { getPosts } from "@/lib/devto";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PostCard } from "@/components/ui/PostCard";

export async function LatestPostsSection() {
  const posts = (await getPosts(3)).slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="py-24 sm:py-32 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Blog" title="Latest writing." description="Notes on React Native, mobile security and Elixir." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((p) => <PostCard key={p.id} post={p} />)}
        </div>
        <p className="mt-10">
          <Link href="/blog" className="link link-primary font-medium">Read the blog →</Link>
        </p>
      </div>
    </section>
  );
}
