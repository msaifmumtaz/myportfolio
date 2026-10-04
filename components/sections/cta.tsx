import { buttonClass } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return <section className="site-shell section-space border-t border-border-subtle">
    <Reveal><h2 className="section-heading max-w-3xl">Ready to Build something <span className="text-accent">Extraordinary?</span></h2><p className="section-intro">Whether you need an MVP, an enterprise-grade application, or AI integration, I&apos;m here to help you turn your vision into reality.</p>
      <div className="mt-8"><a href="https://www.upwork.com/freelancers/~01dc46728553f3bae5" target="_blank" rel="noopener noreferrer" className={buttonClass("primary")}>Hire Me on Upwork <ArrowUpRight size={17} /></a></div>
    </Reveal>
  </section>;
}
