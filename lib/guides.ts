import fs from "fs";
import path from "path";
import matter from "gray-matter";

const guidesDirectory = path.join(process.cwd(), "content/guides");

export type Guide = {
  slug: string;
  title: string;
  seo_title: string;
  description: string;
  updated: string;
  // Slug of the /services/<slug> page each guide leads readers to.
  service: string;
  order: number;
  content: string;
};

export function getGuides(): Guide[] {
  if (!fs.existsSync(guidesDirectory)) return [];
  return fs.readdirSync(guidesDirectory).filter(name => name.endsWith(".md")).map(fileName => {
    const { data, content } = matter(fs.readFileSync(path.join(guidesDirectory, fileName), "utf8"));
    return { slug: fileName.replace(/\.md$/, ""), content, ...(data as Omit<Guide, "slug" | "content">) };
  }).sort((a, b) => a.order - b.order);
}

export const getGuide = (slug: string) => getGuides().find(guide => guide.slug === slug);
