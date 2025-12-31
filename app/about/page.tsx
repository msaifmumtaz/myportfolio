import { aboutPageContent } from "@/data/config";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Code2, Database, BrainCircuit, Rocket, Terminal } from "lucide-react";

const iconMap: Record<string, any> = {
  frontend: Code2,
  backend: Database,
  ai_ml: BrainCircuit,
  devops: Rocket,
  databases: Database, // Reusing Database icon or I could import another one
  systems_os: Terminal,
};

const categoryLabels: Record<string, string> = {
  frontend: "Frontend Development",
  backend: "Backend Engineering",
  ai_ml: "AI & Machine Learning",
  devops: "DevOps & Cloud",
  databases: "Databases & Data Storage",
  systems_os: "Systems, Scripting & OS",
};

export default function AboutPage() {
  const { intro, experience, education, tech_stack } = aboutPageContent;

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-20 grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-2">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8">{intro.title}</h1>
          <p className="text-xl md:text-2xl text-text-main leading-relaxed">
            {intro.large_text}
          </p>
        </div>
        <div className="relative aspect-square md:aspect-[3/4] rounded-2xl overflow-hidden border border-border-subtle shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
           <Image 
            src="/profile.png" 
            alt="Profile" 
            fill 
            className="object-cover"
            priority 
          />
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-16 mb-20">
        <div>
          <h2 className="text-2xl font-bold font-heading mb-8 text-secondary-rose">Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-8 border-l border-border-subtle">
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-primary-indigo rounded-full" />
                <h3 className="text-xl font-bold">{job.role}</h3>
                <div className="text-sm text-secondary-rose mb-2">{job.company} | {job.year}</div>
                <p className="text-text-muted">{job.details}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold font-heading mb-8 text-secondary-rose">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l border-border-subtle">
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-text-muted rounded-full" />
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <div className="text-sm text-text-muted mb-2">{edu.school}</div>
                <p className="text-text-muted">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold font-heading mb-8 text-secondary-rose">Technical Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(tech_stack).map(([category, techs]) => {
            const Icon = iconMap[category] || Terminal;
            const label = categoryLabels[category] || category.replace('_', ' ');
            
            return (
              <Card key={category} className="h-full hover:border-primary-indigo/50 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-6 border-b border-border-subtle pb-4">
                  <div className="p-2 bg-primary-indigo/10 rounded-lg text-primary-indigo">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold capitalize">
                    {label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-bg-surface-2 text-sm rounded-full text-text-muted hover:text-primary-indigo hover:bg-primary-indigo/10 transition-colors duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}

