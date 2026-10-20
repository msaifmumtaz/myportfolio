import { navigation, servicesContent } from "@/data/config";
import { getSortedProjectsData } from "@/lib/projects";
import { getGuides } from "@/lib/guides";
import { projectSummary } from "@/lib/project-presentation";

export type SearchEntry = { title: string; href: string; kind: string; description: string; keywords: string };

const pageDescriptions: Record<string, string> = {
  "/": "AI engineer and full-stack developer building RAG systems, chatbots and automations.",
  "/about": "Experience, education and the tech stack behind the work.",
  "/services": "Custom RAG development, AI workflow automation, AI chatbots, websites, Shopify stores and Apple apps, with clear prices.",
  "/projects": "Case studies covering AI products, automation and computer vision.",
  "/contact": "Send a message, email or book a 30-minute call.",
};

// The blog stays out of the index while it is noindex and hidden from navigation.
export function buildSearchIndex(): SearchEntry[] {
  const pages = navigation.links.map(link => ({ title: link.label, href: link.path, kind: "Page", description: pageDescriptions[link.path] ?? "", keywords: "" }));
  const { packages, retainer } = servicesContent;
  const services = [...packages, retainer].map(service => ({
    title: service.title,
    href: "page" in service && service.page ? service.page : `/services#${service.slug}`,
    kind: "Service",
    description: service.description,
    keywords: [service.price, ...service.includes].join(" "),
  }));
  const projects = getSortedProjectsData().map(project => ({
    title: project.title,
    href: `/projects/${project.slug}`,
    kind: "Case study",
    description: projectSummary(project),
    keywords: [project.slug, project.category, ...project.tech].join(" "),
  }));
  const guideIndex = { title: "Guides", href: "/guides", kind: "Page", description: "RAG costs, hiring an AI developer and n8n vs custom Python automation.", keywords: "guides" };
  const guides = [guideIndex, ...getGuides().map(guide => ({ title: guide.title, href: `/guides/${guide.slug}`, kind: "Guide", description: guide.description, keywords: guide.slug.replace(/-/g, " ") }))];
  const legal = { title: "Privacy Policy", href: "/privacy", kind: "Page", description: "How this site handles your data, cookies and analytics.", keywords: "cookies analytics gdpr" };
  return [...pages, ...services, ...guides, ...projects, legal];
}
