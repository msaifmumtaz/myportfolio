import { getPostData, getSortedPostsData } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  try {
    const post = getPostData(resolvedParams.slug);

    return (
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-text-muted hover:text-primary-indigo mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6 text-sm">
            <span className="text-secondary-rose font-mono px-2 py-1 bg-bg-surface-2 rounded border border-border-subtle">
              {post.category}
            </span>
            <span className="text-text-muted">{post.date}</span>
            <span className="text-text-muted">{post.readingTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-text-muted leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-pre:border prose-pre:border-border-subtle">
          <MDXRemote source={post.content} />
        </div>
      </article>
    );
  } catch (error) {
    notFound();
  }
}

