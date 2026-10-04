import { homePageContent } from "@/data/config";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function Skills() {
  return <section className="site-shell section-space">
    <div className="grid grid-cols-1 lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-20">
      <div><h2 className="section-heading">Skills & Expertise</h2><p className="section-intro">{homePageContent.hero.subtext}</p><p className="mt-5 text-sm text-text-muted leading-relaxed max-w-md">A comprehensive overview of my technical capabilities across AI, Web Development, and Infrastructure.</p></div>
      <Reveal><div className="border-t border-border-subtle">{homePageContent.skills.map((skill, index) => <details key={skill.category} open={index === 0} className="skill-disclosure border-b border-border-subtle pb-3">
        <summary><h3 className="text-xl md:text-2xl font-medium tracking-[-.035em]">{skill.category}</h3><Plus className="disclosure-icon" size={20} /></summary>
        <ul className="capability-list">{skill.items.map(item => <li key={item}>{item}</li>)}</ul>
      </details>)}</div></Reveal>
    </div>
  </section>;
}
