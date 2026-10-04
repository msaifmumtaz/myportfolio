import { aboutPageContent, homePageContent } from "@/data/config";
import { buttonClass } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export function Hero() {
  const { tagline, headline, cta, subtext } = homePageContent.hero;
  const goal = aboutPageContent.intro.large_text.split(". ")[1];
  return (
    <section className="site-shell py-12 lg:py-16">
      <div className="grid grid-cols-[minmax(0,1fr)_96px] lg:grid-cols-[minmax(0,1fr)_240px] gap-x-6 lg:gap-x-16 gap-y-7 items-center">
        <p className="hero-content text-sm text-accent leading-relaxed lg:self-end">{tagline}</p>
        <div className="col-span-2 lg:col-span-1 lg:row-start-2">
          <h1 className="hero-title leading-[1.06] tracking-[-0.065em] font-semibold text-balance" dangerouslySetInnerHTML={{ __html: headline }} />
          <p className="mt-7 text-text-muted text-base md:text-lg leading-relaxed max-w-xl">{subtext}</p>
          <div className="hero-enter flex flex-wrap gap-3 mt-8">
            <Link prefetch={false} href="/projects" className={buttonClass("primary")}>{cta[0]}<ArrowUpRight size={17} /></Link>
            <Link prefetch={false} href="/contact" className={buttonClass("secondary")}>{cta[1]}<ArrowRight size={17} /></Link>
          </div>
        </div>
        <div className="relative media-frame aspect-[4/5] w-full col-start-2 row-start-1 lg:row-span-2">
          <Image src="/profile.png" alt="Profile" fill sizes="(min-width: 1024px) 240px, 96px" className="object-cover object-top" priority fetchPriority="high" />
        </div>
      </div>
    </section>
  );
}
