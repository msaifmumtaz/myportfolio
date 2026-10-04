import { getSortedProjectsData } from "@/lib/projects";
import { projectImage } from "@/lib/project-presentation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { buttonClass } from "@/components/ui/button";

export function generateStaticParams() { return getSortedProjectsData().map(project => ({ slug: project.slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getSortedProjectsData().find(project => project.slug === slug);
  if (!project) notFound();
  const image = projectImage(project);
  return <article className="site-shell document-body">
    <header className="page-intro">
      <Link href="/projects" className="text-link text-sm mb-12"><ArrowLeft size={16} />Back to Projects</Link>
      <p className="font-mono text-sm text-accent mb-4">{project.category}</p>
      <h1 className="page-heading max-w-5xl">{project.title}</h1>
      <div className="flex flex-wrap gap-2 mt-7">{project.tech.map(tech => <span key={tech} className="tag">{tech}</span>)}</div>
      {project.demo_url && <a href={project.demo_url} target="_blank" rel="noopener noreferrer" className={buttonClass("primary", "mt-8")}>View Live Demo<ArrowUpRight size={17} /></a>}
    </header>
    {image && <figure className="mb-16"><div className="media-frame relative aspect-[16/9]"><Image src={image} alt={project.image_path ? project.title : "Illustrative concept for Facial Verification & KYC System"} fill sizes="(min-width: 1280px) 1248px, 100vw" className={project.image_path ? "object-contain p-4 md:p-10" : "object-cover"} priority /></div>{!project.image_path && <figcaption className="text-xs text-text-muted mt-3">Illustrative concept for facial verification.</figcaption>}</figure>}
    <div className="prose prose-lg max-w-[78ch] mx-auto"><MDXRemote source={project.content} /></div>
  </article>;
}
