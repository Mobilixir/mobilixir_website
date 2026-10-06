import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getPost, getPosts } from "@/lib/devto";
import { SITE } from "@/data/site";
import { CtaBand } from "@/components/ui/CtaBand";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 3600;

export async function generateStaticParams() {
  return (await getPosts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost((await params).slug);
  if (!post) return {};
  // Canonical stays on dev.to until posts are authored natively on this site.
  const canonical = post.canonical_url ?? post.url;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.published_at,
      ...(post.cover_image && { images: [post.cover_image] }),
    },
  };
}

export default async function PostPage({ params }: Props) {
  const post = await getPost((await params).slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.published_at,
    image: post.cover_image ?? undefined,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="pt-32 pb-16 sm:pt-40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/blog" className="text-sm text-primary">← All posts</Link>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mt-4">{post.title}</h1>
          <p className="text-sm text-base-content/50 mt-4">
            <time dateTime={post.published_at}>{formatDate(post.published_at)}</time> · {post.reading_time_minutes} min read
          </p>
          {/* Content comes from our own dev.to account (trusted). */}
          <div
            className="prose prose-neutral dark:prose-invert max-w-none mt-10 prose-pre:overflow-x-auto prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.body_html }}
          />
          <p className="mt-12 text-sm text-base-content/60">
            Originally published on{" "}
            <a href={post.url} target="_blank" rel="noopener noreferrer" className="link link-primary">dev.to</a>.
          </p>
        </div>
      </article>
      <CtaBand />
    </>
  );
}
