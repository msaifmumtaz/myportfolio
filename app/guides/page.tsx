import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getGuides } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";
import { Reveal } from "@/components/ui/reveal";

export const metadata = pageMetadata({
  title: "Guides: RAG Costs, Hiring an AI Developer, Automation Tools",
  description: "Practical guides for startups and small teams planning an AI project: what a RAG system costs to build and run, how to hire an AI developer, and n8n vs custom Python automation.",
  path: "/guides",
});

export default function GuidesPage() {
  const guides = getGuides();
  return <div className="site-shell document-body">
    <header className="page-intro"><h1 className="page-heading">Guides</h1><p className="section-intro">Plain answers to the questions people ask before an AI project: what it costs, how to evaluate a developer and which tools to use. Every assumption is written down so you can redo the maths with your own numbers.</p></header>
    <ul className="border-t border-border-subtle">{guides.map((guide, index) => <li key={guide.slug} className="border-b border-border-subtle"><Reveal delay={index * .05}>
      <Link href={`/guides/${guide.slug}`} className="group grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-4 md:gap-12 py-9">
        <h2 className="text-2xl md:text-3xl font-medium tracking-[-.045em] group-hover:text-accent transition-colors">{guide.title}</h2>
        <p className="text-sm leading-relaxed text-text-muted">{guide.description}</p>
        <ArrowUpRight size={22} className="hidden md:block text-accent" aria-hidden="true" />
      </Link>
    </Reveal></li>)}</ul>
  </div>;
}
