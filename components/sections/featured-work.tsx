import { getSortedProjectsData } from "@/lib/projects";
import { projectImage, projectSummary } from "@/lib/project-presentation";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function FeaturedWork() {
  const projects = getSortedProjectsData().filter(project => project.show_home).slice(0, 3);
  return <section className="site-shell section-space border-t border-border-subtle">
    <div className="mb-10"><h2 className="section-heading">Selected Work</h2><p className="section-intro">A glimpse into my recent engineering endeavors.</p></div>
    <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 md:gap-9">
      {projects.map((project, index) => <Reveal key={project.slug} className={index === 0 ? "md:row-span-2" : undefined} delay={index * .06}>
        <Link prefetch={false} href={`/projects/${project.slug}`} className="project-link group block">
          <div className={`media-frame relative ${index === 0 ? "aspect-[4/3]" : "aspect-[2.1/1]"}`}>{projectImage(project) && <Image src={projectImage(project)!} alt={project.title} fill sizes={index === 0 ? "(min-width: 768px) 700px, 100vw" : "(min-width: 768px) 500px, 100vw"} className="project-image object-contain p-3 md:p-5" />}</div>
          <div className="mt-5 flex items-start justify-between gap-5"><div><p className="text-xs font-mono text-accent mb-2">{project.category}</p><h3 className={index === 0 ? "text-2xl md:text-[32px] leading-tight font-medium tracking-[-.04em]" : "text-xl md:text-2xl leading-tight font-medium tracking-[-.035em]"}>{project.title}</h3></div><ArrowUpRight className="mt-1 shrink-0 text-accent" size={22} /></div>
          <p className="text-sm leading-relaxed text-text-muted mt-3 max-w-xl">{projectSummary(project)}</p>
          <div className="flex flex-wrap gap-2 mt-4">{project.tech.slice(0, 3).map(tech => <span key={tech} className="tag">{tech}</span>)}</div>
        </Link>
      </Reveal>)}
    </div>
  </section>;
}
