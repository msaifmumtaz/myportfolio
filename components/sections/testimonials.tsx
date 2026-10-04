"use client";

import { memo, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { homePageContent } from "@/data/config";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export const Testimonials = memo(function Testimonials() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const quotes = homePageContent.testimonials;
  const move = (direction: number) => {
    const next = Math.max(0, Math.min(quotes.length - 1, active + direction));
    const slide = track.current?.children[next] as HTMLElement | undefined;
    if (track.current && slide) track.current.scrollTo({ left: slide.offsetLeft - track.current.offsetLeft, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    setActive(next);
  };
  return <section className="bg-bg-surface-1 section-space">
    <div className="site-shell"><h2 className="section-heading">What clients say</h2><p className="section-intro">Don&apos;t just take my word for it. Here&apos;s what people I&apos;ve worked with had to say.</p>
      <Reveal className="mt-12"><div ref={track} tabIndex={0} role="region" className="testimonial-track" aria-label="Client reviews" onScroll={() => {
        if (!track.current) return;
        const first = track.current.children[0] as HTMLElement | undefined;
        if (first) setActive(Math.round(track.current.scrollLeft / (first.offsetWidth + 24)));
      }}>
        {quotes.map(testimonial => <article key={testimonial.author} className="testimonial-slide min-w-0 py-3">
          <blockquote><p className="hidden md:block text-[28px] lg:text-[32px] leading-[1.4] tracking-[-.035em] max-w-5xl">“{testimonial.quote}”</p><p className="md:hidden text-xl leading-relaxed tracking-[-.02em]">“{testimonial.quote.split(/(?<=[.!?]) /)[0]}”</p></blockquote>
          <div className="flex items-center gap-4 mt-8">{"image" in testimonial && testimonial.image && <Image src={testimonial.image} alt={testimonial.author} width={44} height={44} className="rounded-full object-cover w-11 h-11" />}<div><p className="text-sm font-medium">{testimonial.author}</p><p className="text-xs text-text-muted mt-1">Client</p></div></div>
          <details className="md:hidden mt-5 text-sm text-text-muted leading-relaxed"><summary className="text-accent">Read full review</summary><p className="mt-3">{testimonial.quote}</p></details>
        </article>)}
      </div></Reveal>
      <div className="flex justify-end gap-2 mt-8"><Button variant="secondary" size="icon" aria-label="Previous testimonial" disabled={active === 0} onClick={() => move(-1)}><ArrowLeft size={18} /></Button><Button variant="secondary" size="icon" aria-label="Next testimonial" disabled={active === quotes.length - 1} onClick={() => move(1)}><ArrowRight size={18} /></Button></div>
    </div>
  </section>;
});
