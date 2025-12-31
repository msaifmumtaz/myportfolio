import { getSortedProjectsData } from "@/lib/projects";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FeaturedWork() {
  const projects = getSortedProjectsData();
  const featuredProjects = projects.filter(p => p.show_home).slice(0, 3);

  return (
    <section className="py-24 container mx-auto px-4">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Selected Work</h2>
          <p className="text-text-muted">A glimpse into my recent engineering endeavors.</p>
        </div>
        <Link href="/projects">
          <Button variant="secondary" className="hidden md:flex gap-2">
            View All Projects <ArrowRight size={16} />
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <Card className="group cursor-pointer h-full flex flex-col">
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
              
              <div className="flex justify-between items-start mb-2">
                <span className="text-secondary-rose text-sm font-mono">{project.category}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary-indigo transition-colors">
                {project.title}
              </h3>
              
              <p className="text-text-muted text-sm mb-4 line-clamp-2">
                {project.content}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="text-xs bg-bg-surface-2 px-2 py-1 rounded text-text-muted border border-border-subtle">
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>
      
      <div className="mt-8 text-center md:hidden">
         <Link href="/projects">
          <Button variant="secondary" className="gap-2">
            View All Projects <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </section>
  );
}
