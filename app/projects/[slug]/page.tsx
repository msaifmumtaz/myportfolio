import { getProjectData, getSortedProjectsData } from "@/lib/projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const projects = getSortedProjectsData();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  try {
    const project = getProjectData(resolvedParams.slug);

    return (
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-text-muted hover:text-primary-indigo mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6 text-sm">
            <span className="text-secondary-rose font-mono px-2 py-1 bg-bg-surface-2 rounded border border-border-subtle">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span key={t} className="text-sm bg-bg-surface-2 px-3 py-1.5 rounded text-text-muted border border-border-subtle">
                {t}
              </span>
            ))}
          </div>

          {project.demo_url && (
            <div className="mb-8">
              <a 
                href={project.demo_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-indigo text-white px-4 py-2 rounded-md font-medium hover:bg-primary-indigo-dim transition-colors"
              >
                View Live Demo
              </a>
            </div>
          )}

          {project.image_path && (
            <div className="mb-12 rounded-lg overflow-hidden border border-border-subtle">
              <img 
                src={project.image_path} 
                alt={project.title} 
                className="w-full h-auto"
              />
            </div>
          )}
        </header>

        <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-pre:border prose-pre:border-border-subtle">
          <MDXRemote source={project.content} />
        </div>
      </article>
    );
  } catch (error) {
    notFound();
  }
}

