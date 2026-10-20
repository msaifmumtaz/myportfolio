import { servicesContent } from "@/data/config";
import { buttonClass } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Services() {
  const { categories, packages, retainer } = servicesContent;
  const groups = categories.map(category => ({
    ...category,
    rows: [
      ...packages.filter(service => service.category === category.id).map(service => ({ slug: service.slug, title: service.title, price: service.price, href: service.page ?? `/services#${service.slug}` })),
      ...(category.id === "ai" ? [{ slug: retainer.slug, title: `${retainer.title}: ${retainer.subtitle}`, price: `${retainer.price}+/mo`, href: `/services#${retainer.slug}` }] : []),
    ],
  }));
  return <section className="site-shell section-space">
    <div className="grid grid-cols-1 lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-20">
      <div><h2 className="section-heading">How I can help</h2><p className="section-intro">Mostly custom RAG systems and AI workflow automation for startups and small teams. I also build websites and native iOS and macOS apps. Every project has a written scope and clear running costs.</p><Link prefetch={false} href="/services" className={buttonClass("secondary", "mt-8")}>See all services <ArrowRight size={17} /></Link></div>
      <Reveal><div className="space-y-12">{groups.map(group => <div key={group.id}>
        <h3 className="font-mono text-xs text-accent mb-2">{group.title}</h3>
        <ul className="border-t border-border-subtle">{group.rows.map(service => <li key={service.slug} className="border-b border-border-subtle">
          <Link prefetch={false} href={service.href} className="group flex items-center justify-between gap-6 py-6">
            <span className="text-lg md:text-xl font-medium tracking-[-.03em] group-hover:text-accent transition-colors">{service.title}</span>
            <span className="flex shrink-0 items-center gap-3 font-mono text-sm text-accent">{service.price}<ArrowUpRight size={18} aria-hidden="true" /></span>
          </Link>
        </li>)}</ul>
      </div>)}</div></Reveal>
    </div>
  </section>;
}
