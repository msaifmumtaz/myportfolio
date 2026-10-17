import { navigation, servicesContent } from "@/data/config";
import { getSortedProjectsData } from "@/lib/projects";
import { projectSummary } from "@/lib/project-presentation";

export type SearchEntry = { title: string; href: string; kind: string; description: string; keywords: string };

const pageDescriptions: Record<string, string> = {
  "/": "AI engineer and full-stack developer building RAG systems, chatbots and automations.",
  "/about": "Experience, education and the tech stack behind the work.",
  "/services": "Websites, Shopify stores, AI chatbots, Apple apps and monthly AI engineering, with clear prices.",
  "/projects": "Case studies covering AI products, automation and computer vision.",
  "/contact": "Send a message, email or book a 30-minute call.",
};

// The blog stays out of the index while it is noindex and hidden from navigation.
export function buildSearchIndex(): SearchEntry[] {
  const pages = navigation.links.map(link => ({ title: link.label, href: link.path, kind: "Page", description: pageDescriptions[link.path] ?? "", keywords: "" }));
  const { packages, retainer } = servicesContent;
  const services = [...packages, retainer].map(service => ({
    title: service.title,
    href: `/services#${service.slug}`,
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
  const legal = { title: "Privacy Policy", href: "/privacy", kind: "Page", description: "How this site handles your data, cookies and analytics.", keywords: "cookies analytics gdpr" };
  return [...pages, ...services, ...projects, legal];
}
