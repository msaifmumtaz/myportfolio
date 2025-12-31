import { getSortedProjectsData } from "@/lib/projects";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = getSortedProjectsData();

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Case Studies</h1>
        <p className="text-text-muted text-lg max-w-2xl">
          A collection of projects demonstrating my expertise in Full Stack Development and AI Engineering.
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="block h-full">
            <Card className="group flex flex-col h-full">
              <div className="aspect-video bg-bg-surface-2 rounded-md mb-6 overflow-hidden relative">
                {project.image_path ? (
                  <img 
                    src={project.image_path} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-bg-surface-2 to-bg-core group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center text-text-muted opacity-20 text-4xl font-bold">
                      {project.title[0]}
                    </div>
                  </>
                )}
              </div>

              <div className="flex-1">
                <span className="text-secondary-rose text-sm font-mono block mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-indigo transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-muted mb-6">
                  {project.content.slice(0, 100)}...
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs bg-bg-surface-2 px-2 py-1 rounded text-text-muted border border-border-subtle">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-border-subtle flex justify-between items-center">
                <span className="text-text-main group-hover:text-primary-indigo text-sm font-medium flex items-center gap-2">
                  View Case Study &rarr;
                </span>
                {project.demo_url && (
                   <span className="text-xs text-text-muted bg-bg-surface-2 px-2 py-1 rounded">Live Demo Available</span>
                )}
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center max-w-2xl mx-auto">
        <p className="text-text-muted text-lg">
          The projects shown here are just a small selection of my work. I have completed many more projects across different technologies and industries.
        </p>
      </div>
    </div>
  );
}
