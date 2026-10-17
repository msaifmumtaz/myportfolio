import { servicesContent } from "@/data/config";
import { buttonClass } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Services() {
  const { packages, retainer } = servicesContent;
  const rows = [...packages.map(service => ({ ...service, href: `/services#${service.slug}` })), { ...retainer, title: `${retainer.title}: ${retainer.subtitle}`, price: `${retainer.price}+/mo`, href: `/services#${retainer.slug}` }];
  return <section className="site-shell section-space">
    <div className="grid grid-cols-1 lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-20">
      <div><h2 className="section-heading">How I can help</h2><p className="section-intro">Clear prices for the projects I&apos;m asked for most, or hire me monthly for ongoing AI work.</p><Link prefetch={false} href="/services" className={buttonClass("secondary", "mt-8")}>See all services <ArrowRight size={17} /></Link></div>
      <Reveal><ul className="border-t border-border-subtle">{rows.map(service => <li key={service.slug} className="border-b border-border-subtle">
        <Link prefetch={false} href={service.href} className="group flex items-center justify-between gap-6 py-6">
          <h3 className="text-lg md:text-xl font-medium tracking-[-.03em] group-hover:text-accent transition-colors">{service.title}</h3>
          <span className="flex shrink-0 items-center gap-3 font-mono text-sm text-accent">{service.price}<ArrowUpRight size={18} aria-hidden="true" /></span>
        </Link>
      </li>)}</ul></Reveal>
    </div>
  </section>;
}
