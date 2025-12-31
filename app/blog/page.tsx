import { getSortedPostsData } from "@/lib/blog";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function BlogPage() {
  const posts = getSortedPostsData();
  const categories = ["All", "Tutorials", "System Design", "AI Research", "Career"];

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Engineering Insights</h1>
        <p className="text-text-muted text-lg max-w-2xl">
          Thoughts on code, artificial intelligence, and the future of tech.
        </p>
      </section>

      <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
        {categories.map((cat, i) => (
          <button
            key={cat}
             className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors whitespace-nowrap ${
              i === 0 
                ? "bg-primary-indigo text-white border-primary-indigo" 
                : "bg-transparent text-text-muted border-border-subtle hover:border-primary-indigo hover:text-text-main"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="group flex flex-col md:flex-row gap-8 items-start hover:border-primary-indigo transition-colors p-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3 text-sm">
                  <span className="text-secondary-rose font-mono">{post.category}</span>
                  <span className="text-text-muted">•</span>
                  <span className="text-text-muted">{post.date}</span>
                  <span className="text-text-muted">•</span>
                  <span className="text-text-muted">{post.readingTime}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary-indigo transition-colors">
                  {post.title}
                </h2>
                <p className="text-text-muted line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

