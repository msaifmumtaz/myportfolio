import { aboutPageContent } from "@/data/config";
import { Reveal } from "@/components/ui/reveal";
import Image from "next/image";

const categoryLabels: Record<string, string> = { frontend: "Frontend Development", backend: "Backend Engineering", ai_ml: "AI & Machine Learning", ai_agents: "AI Agents Frameworks", devops: "DevOps & Cloud", databases: "Databases & Data Storage" };

export default function AboutPage() {
  const { intro, experience, education, tech_stack } = aboutPageContent;
  return <div className="site-shell document-body">
    <header className="page-intro"><h1 className="page-heading">{intro.title}</h1></header>
    <section className="grid grid-cols-1 md:grid-cols-[.7fr_1.3fr] gap-10 md:gap-20 items-center pb-20">
      <div className="media-frame relative aspect-[4/5] max-w-md"><Image src="/profile.png" alt="Profile" fill sizes="(min-width: 768px) 420px, 100vw" className="object-cover object-top" priority /></div>
      <Reveal><p className="text-xl md:text-[28px] leading-relaxed tracking-[-.025em] max-w-2xl">{intro.large_text}</p></Reveal>
    </section>
    <section className="border-t border-border-subtle section-space"><h2 className="section-heading mb-12">Experience</h2><div className="space-y-12">{experience.map(job => <Reveal key={job.role}><div className="grid grid-cols-1 md:grid-cols-[.45fr_1fr] gap-4 md:gap-12"><p className="font-mono text-sm text-accent">{job.year}</p><div><h3 className="text-2xl font-medium tracking-[-.035em]">{job.role}</h3><p className="text-text-muted mt-2 text-sm">{job.company}</p><p className="text-text-muted mt-5 max-w-2xl leading-relaxed">{job.details}</p></div></div></Reveal>)}</div></section>
    <section className="bg-bg-surface-1 rounded-2xl p-7 md:p-12"><h2 className="section-heading mb-9">Education</h2><dl className="grid grid-cols-1 md:grid-cols-2 gap-10">{education.map(item => <div key={item.degree}><dt className="text-xl font-medium">{item.degree}</dt><dd className="text-text-muted mt-3 text-sm leading-relaxed">{item.school}{item.year && <span className="block mt-2 font-mono">{item.year}</span>}</dd></div>)}</dl></section>
    <section className="section-space"><h2 className="section-heading mb-10">Tools I use</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">{Object.entries(tech_stack).map(([category, techs]) => <div key={category}><h3 className="text-lg font-medium mb-5">{categoryLabels[category]}</h3><div className="flex flex-wrap gap-2">{techs.map(tech => <span key={tech} className="tag">{tech}</span>)}</div></div>)}</div></section>
  </div>;
}
