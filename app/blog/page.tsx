import { getSortedPostsData } from "@/lib/blog";
import { BlogList } from "@/components/blog-list";

export default function BlogPage() {
  const posts = getSortedPostsData().map(({ slug, title, excerpt, date, category, readingTime }) => ({ slug, title, excerpt, date, category, readingTime }));
  return <div className="site-shell document-body"><header className="page-intro"><h1 className="page-heading">Engineering Insights</h1><p className="section-intro">Thoughts on code, artificial intelligence, and the future of tech.</p></header><BlogList posts={posts} /></div>;
}
