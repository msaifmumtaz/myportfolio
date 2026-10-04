import { getSortedPostsData } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export function generateStaticParams() { return getSortedPostsData().map(post => ({ slug: post.slug })); }

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getSortedPostsData().find(post => post.slug === slug);
  if (!post) notFound();
  const body = post.content.replace(/^\s*# [^\n]+\n/, "");
  return <article className="site-shell document-body"><header className="page-intro max-w-5xl">
    <Link href="/blog" className="text-link text-sm mb-12"><ArrowLeft size={16} />Back to Blog</Link>
    <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-text-muted mb-5"><span className="text-accent">{post.category}</span><time dateTime={post.date}>{post.date}</time><span>{post.readingTime}</span></div>
    <h1 className="page-heading">{post.title}</h1><p className="section-intro">{post.excerpt}</p>
  </header><div className="prose prose-lg max-w-[78ch]"><MDXRemote source={body} /></div></article>;
}
