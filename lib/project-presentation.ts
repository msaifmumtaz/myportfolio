import type { Project } from "@/lib/projects";

// Concise presentation copy drawn from each existing case study; source articles stay intact.
const summaries: Record<string, string> = {
  "ai-powered-news-automation": "AI-generated Spanish news articles and thumbnails, built from a pipeline that scrapes provided sources.",
  "facial-verification": "Facial recognition for KYC, comparing a live selfie with an identity document and providing real-time feedback.",
  "form-filling": "Browser automation for bulk form submissions, with a management dashboard, proxy handling and field mapping.",
  "project-chat-ai": "A workspace-based AI assistant that answers questions using your project documents and connected data sources.",
  "swiming-tracking": "Computer vision that tracks swimmers in video footage and analyzes race performance.",
  "twitter-automation": "AI-driven Twitter/X publishing, rewriting, replies and engagement through a single automation platform.",
};
export function projectSummary(project: Project) { return summaries[project.slug] || project.content.trim().split("\n")[0]; }
export function projectImage(project: Project) { return project.image_path || (project.slug === "facial-verification" ? "/projects/facial-verification-concept.png" : undefined); }
