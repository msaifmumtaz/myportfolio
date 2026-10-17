import type { Metadata } from "next";
import { getSortedProjectsData } from "@/lib/projects";
import { projectImage, projectSummary } from "@/lib/project-presentation";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { servicesContent } from "@/data/config";
import { JsonLd } from "@/components/json-ld";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { buttonClass } from "@/components/ui/button";

export function generateStaticParams() { return getSortedProjectsData().map(project => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getSortedProjectsData().find(project => project.slug === slug);
  if (!project) return {};
  return pageMetadata({ title: `${project.seo_title ?? project.title} – Case Study`, description: projectSummary(project), path: `/projects/${slug}`, image: `/projects/${slug}/opengraph-image` });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getSortedProjectsData().find(project => project.slug === slug);
  if (!project) notFound();
  const image = projectImage(project);
  const service = servicesContent.packages.find(service => service.case_study === slug);
  return <article className="site-shell document-body">
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/projects" }, { name: project.title, path: `/projects/${slug}` }])} />
    <header className="page-intro">
      <Link href="/projects" className="text-link text-sm mb-12"><ArrowLeft size={16} />Back to Projects</Link>
      <p className="font-mono text-sm text-accent mb-4">{project.category}</p>
      <h1 className="page-heading max-w-5xl">{project.title}</h1>
      <div className="flex flex-wrap gap-2 mt-7">{project.tech.map(tech => <span key={tech} className="tag">{tech}</span>)}</div>
      {(project.demo_url || project.repo_url) && <div className="flex flex-wrap gap-3 mt-8">
        {project.demo_url && <a href={project.demo_url} target="_blank" rel="noopener noreferrer" className={buttonClass("primary")}>View Live Demo<ArrowUpRight size={17} /></a>}
        {project.repo_url && <a href={project.repo_url} target="_blank" rel="noopener noreferrer" className={buttonClass(project.demo_url ? "secondary" : "primary")}>View Source on GitHub<ArrowUpRight size={17} /></a>}
      </div>}
    </header>
    {image && <figure className="mb-16"><div className="media-frame relative aspect-[16/9]"><Image src={image} alt={project.image_alt ?? project.title} fill sizes="(min-width: 1280px) 1248px, 100vw" className={project.image_path ? "object-contain p-4 md:p-10" : "object-cover"} priority /></div>{!project.image_path && <figcaption className="text-xs text-text-muted mt-3">Illustrative concept for facial verification.</figcaption>}</figure>}
    <div className="prose prose-lg max-w-[78ch] mx-auto"><MDXRemote source={project.content} /></div>
    {service && <aside className="max-w-[78ch] mx-auto mt-16 border-t border-border-subtle pt-8"><p className="text-sm text-text-muted mb-3">Want something like this?</p><Link href={`/services#${service.slug}`} className="text-link text-lg">{service.title}, {service.price}<ArrowUpRight size={17} /></Link></aside>}
  </article>;
}
