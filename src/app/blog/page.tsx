import type { Metadata } from "next";
import { getPosts } from "@/lib/devto";
import { PageHeader } from "@/components/ui/PageHeader";
import { PostCard } from "@/components/ui/PostCard";
import { CtaBand } from "@/components/ui/CtaBand";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on React Native, mobile security, Elixir and Phoenix from Mobilixir Technologies.",
  keywords: ["React Native blog", "mobile security articles", "Elixir Phoenix tutorials"],
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <PageHeader eyebrow="Blog" title="Notes from the workshop." description="Practical write-ups on React Native, mobile security, Elixir and Phoenix." />
      <section className="py-16 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((p) => <PostCard key={p.id} post={p} />)}
            </div>
          ) : (
            <p className="text-center text-base-content/60">Posts are unavailable right now. Please check back soon.</p>
          )}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
