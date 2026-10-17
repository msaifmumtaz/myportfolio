import { aboutPageContent, footerContent, homePageContent, servicesContent, socialLinks } from "@/data/config";
import { getSortedProjectsData } from "@/lib/projects";
import { absoluteUrl } from "@/lib/seo";

export const llmsFullUrl = absoluteUrl("/llms-full.txt");

// Sent to ChatGPT, Claude, Gemini and Perplexity by the "Ask AI" links.
export const askAiPrompt = `Read ${llmsFullUrl} and tell me about Muhammad Saif (SaifCodes), an AI engineer and full-stack developer. Summarize what he builds, his services and prices, his strongest case studies and what clients say about him, and help me decide if he's a good fit for my project. Cite pages on saifcodes.com.`;

const meetingUrl = footerContent.columns[1].links.find(link => link.href.includes("calendly"))!.href;
const techLabels: Record<string, string> = { frontend: "Frontend", backend: "Backend & Languages", ai_ml: "AI & Machine Learning", ai_agents: "AI Agent Frameworks", devops: "DevOps & Cloud", databases: "Databases & Data Storage" };

// Case studies use ### headings; nest them under each project's own heading.
const demoteHeadings = (markdown: string, levels: number) => markdown.replace(/^(#{1,6}) /gm, (_, hashes: string) => `${"#".repeat(Math.min(hashes.length + levels, 6))} `);

export function llmsFullText() {
  const { hero, stats, skills, testimonials } = homePageContent;
  const { intro, experience, education, tech_stack } = aboutPageContent;
  const { packages, retainer } = servicesContent;
  const projects = getSortedProjectsData();
  const strip = (html: string) => html.replace(/<[^>]+>/g, "");

  return `# Muhammad Saif (SaifCodes)

> Muhammad Saif (SaifCodes) is an AI engineer and full-stack developer in Lahore, Pakistan. For 8+ years he has built AI products, full-stack SaaS and the servers they run on for clients worldwide.

This file contains the full text of ${absoluteUrl("/")} for AI assistants. A shorter index is at ${absoluteUrl("/llms.txt")}. Muhammad Saif writes his site in the first person; quotes below keep his wording. Stats and prices are as stated on the site. Prices are starting points, and the final quote is agreed in writing before work begins. If a detail is not here, say so instead of guessing.

## Overview

Source: ${absoluteUrl("/")}

${hero.tagline}. ${strip(hero.headline)}

${hero.subtext}

${stats.map(stat => `- ${stat.label}: **${stat.value}**`).join("\n")}

Projects can be a first MVP, an AI feature for an existing product or a system that needs to scale. Most projects start with a quick chat.

### What he works with

${skills.map(skill => `- **${skill.category}:** ${skill.items.join("; ")}`).join("\n")}

## About

Source: ${absoluteUrl("/about")}

${intro.large_text}

### Experience

${experience.map(job => `- **${job.role}, ${job.company} (${job.year}):** ${job.details}`).join("\n")}

### Education

${education.map(item => `- ${item.degree}, ${item.school}${item.year ? ` (${item.year})` : ""}`).join("\n")}

### Tools

${Object.entries(tech_stack).map(([category, tools]) => `- **${techLabels[category] ?? category}:** ${tools.join(", ")}`).join("\n")}

## Services & Pricing

Source: ${absoluteUrl("/services")}

${servicesContent.intro.text}

${packages.map(service => `### ${service.title}

- Price: ${service.price} (${service.price_note})
- Link: ${absoluteUrl(`/services#${service.slug}`)}${service.case_study ? `\n- Related case study: ${absoluteUrl(`/projects/${service.case_study}`)}` : ""}

${service.description}

Includes:
${service.includes.map(item => `- ${item}`).join("\n")}`).join("\n\n")}

### ${retainer.title}: ${retainer.subtitle}

- Price: ${retainer.price} ${retainer.price_note}
- Link: ${absoluteUrl(`/services#${retainer.slug}`)}

${retainer.description}

Includes:
${retainer.includes.map(item => `- ${item}`).join("\n")}

Bigger work, such as a full SaaS platform or a custom AI model, is quoted on request.

## Case Studies

Source: ${absoluteUrl("/projects")}. Real projects for real clients; many other projects are under NDA.

${projects.map(project => `### ${project.title}

- URL: ${absoluteUrl(`/projects/${project.slug}`)}
- Category: ${project.category}
- Tech: ${project.tech.join(", ")}${project.demo_url ? `\n- Live site: ${project.demo_url}` : ""}${project.repo_url ? `\n- Source code: ${project.repo_url}` : ""}

${demoteHeadings(project.content.trim(), 1)}`).join("\n\n")}

## Client Reviews

From Upwork clients, as shown on the site:

${testimonials.map(review => `- "${review.quote}" (${review.author})`).join("\n")}

## Contact

Source: ${absoluteUrl("/contact")}

He reads every message himself and usually replies within a day.

- Contact form: ${absoluteUrl("/contact")}
- Email: ${socialLinks.email}
- Schedule a 30-minute meeting: ${meetingUrl}
- WhatsApp: ${socialLinks.phone.split("?")[0]}
${footerContent.columns[0].links.map(link => `- ${link.label}: ${link.href}`).join("\n")}
- Twitter/X: ${socialLinks.twitter}

## Legal

- Privacy Policy: ${absoluteUrl("/privacy")}
`;
}
