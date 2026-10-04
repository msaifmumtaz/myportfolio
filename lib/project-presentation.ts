import type { Project } from "@/lib/projects";

// Concise presentation copy drawn from each existing case study; source articles stay intact.
const summaries: Record<string, string> = {
  "ai-powered-news-automation": "A Spanish news site that mostly runs itself: it gathers stories, writes articles with AI, creates thumbnails and publishes to WordPress.",
  "facial-verification": "Identity checks without the paperwork. A live selfie is matched against an ID document, and users get their result right away.",
  "form-filling": "Browser automation that fills forms at scale, with human-like browsing, smart proxies and a dashboard anyone can run.",
  "project-chat-ai": "An AI assistant that knows your project. It answers questions from your own documents and connected drives.",
  "swiming-tracking": "Computer vision for the pool. It tracks every swimmer, spots who finishes first and times each one.",
  "twitter-automation": "A Twitter/X account that almost runs itself: posting, rewriting, replies and growth, without sounding like a bot.",
};
export function projectSummary(project: Project) { return summaries[project.slug] || project.content.trim().split("\n")[0]; }
export function projectImage(project: Project) { return project.image_path || (project.slug === "facial-verification" ? "/projects/facial-verification-concept.png" : undefined); }
