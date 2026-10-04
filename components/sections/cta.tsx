import { buttonClass } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return <section className="site-shell section-space border-t border-border-subtle">
    <Reveal><h2 className="section-heading max-w-3xl">Got an idea? <span className="text-accent">Let&apos;s build it.</span></h2><p className="section-intro">Whether it&apos;s a first MVP, an AI feature for your existing product or a system that needs to scale, I&apos;d love to hear about it. Most projects start with a quick chat.</p>
      <div className="mt-8"><a href="https://www.upwork.com/freelancers/~01dc46728553f3bae5" target="_blank" rel="noopener noreferrer" className={buttonClass("primary")}>Work with me on Upwork <ArrowUpRight size={17} /></a></div>
    </Reveal>
  </section>;
}
