"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/lib/blog";

export function BlogList({ posts }: { posts: Omit<BlogPost, "content">[] }) {
  const categories = ["All", "Tutorials", "System Design", "AI Research", "Career"];
  const [category, setCategory] = useState("All");
  const filtered = posts.filter(post => category === "All" || post.category === category);
  return <><div className="flex gap-2 overflow-x-auto pb-5 mb-8" aria-label="Filter articles">{categories.map(item => <Button key={item} variant={category === item ? "primary" : "secondary"} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</Button>)}</div>
    <div aria-live="polite">{filtered.length ? filtered.map(post => <Link key={post.slug} href={`/blog/${post.slug}`} className="group block py-9 border-b border-border-subtle">
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-text-muted mb-5"><span className="text-accent">{post.category}</span><time dateTime={post.date}>{post.date}</time><span>{post.readingTime}</span></div>
      <div className="flex items-start justify-between gap-5"><h2 className="text-2xl md:text-4xl font-medium tracking-[-.045em] group-hover:text-accent transition-colors max-w-4xl">{post.title}</h2><ArrowUpRight size={23} className="shrink-0 text-accent mt-1" /></div><p className="text-text-muted mt-5 leading-relaxed max-w-2xl">{post.excerpt}</p>
    </Link>) : <div className="bg-bg-surface-1 rounded-2xl p-8"><p className="text-lg mb-2">No articles in this category yet.</p><p className="text-text-muted text-sm mb-6">Choose another category to explore the available writing.</p><Button variant="secondary" onClick={() => setCategory("All")}>Show all articles</Button></div>}</div>
  </>;
}
