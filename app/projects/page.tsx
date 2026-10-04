import { getSortedProjectsData } from "@/lib/projects";
import { projectImage, projectSummary } from "@/lib/project-presentation";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = getSortedProjectsData();
  return <div className="site-shell document-body">
    <header className="page-intro"><h1 className="page-heading">Case Studies</h1><p className="section-intro">A collection of projects demonstrating my expertise in Full Stack Development and AI Engineering.</p></header>
    {projects.length ? <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
      {projects.map((project, index) => <Reveal key={project.slug} delay={(index % 2) * .08}>
        <Link href={`/projects/${project.slug}`} className="project-link group block">
          <div className="media-frame relative aspect-[16/10]">{projectImage(project) && <Image src={projectImage(project)!} alt={project.image_path ? project.title : "Illustrative concept for Facial Verification & KYC System"} fill sizes="(min-width: 768px) 600px, 100vw" className={`project-image ${project.image_path ? "object-contain p-4" : "object-cover"}`} />}</div>
          <div className="mt-6 flex justify-between gap-5"><div><p className="font-mono text-accent text-xs mb-3">{project.category}</p><h2 className="text-2xl md:text-3xl font-medium tracking-[-.045em]">{project.title}</h2></div><ArrowUpRight size={22} className="shrink-0 mt-8 text-accent" /></div>
          <p className="text-text-muted text-sm leading-relaxed mt-4 max-w-xl">{projectSummary(project)}</p>
          <div className="flex flex-wrap gap-2 mt-5">{project.tech.map(tech => <span key={tech} className="tag">{tech}</span>)}</div>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm"><span className="text-link">View Case Study <span aria-hidden="true">→</span></span>{project.demo_url && <span className="text-text-muted text-xs">Live Demo Available</span>}{!project.image_path && <span className="text-text-muted text-xs">Illustrative concept</span>}</div>
        </Link>
      </Reveal>)}
    </div> : <p className="form-notice">Case studies will appear here when projects are added.</p>}
    <p className="text-text-muted max-w-2xl mt-20 text-base leading-relaxed">The projects shown here are just a small selection of my work. I have completed many more projects across different technologies and industries.</p>
  </div>;
}
