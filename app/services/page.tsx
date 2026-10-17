import Link from "next/link";
import { ArrowRight, ArrowUpRight, Bot, Check, Globe, Newspaper, ShoppingBag, Smartphone, type LucideIcon } from "lucide-react";
import { servicesContent } from "@/data/config";
import { buttonClass } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata, servicesJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services & Pricing – AI Chatbots, Web & Apps",
  description: "Website development, Shopify stores, AI chatbots, iOS & macOS apps, WordPress blog automation and monthly AI engineering, with clear prices.",
  path: "/services",
});

const icons: Record<string, LucideIcon> = { Globe, ShoppingBag, Bot, Smartphone, Newspaper };

export default function ServicesPage() {
  const { intro, packages, retainer } = servicesContent;
  return <div className="site-shell document-body">
    <JsonLd data={servicesJsonLd()} />
    <header className="page-intro"><h1 className="page-heading">{intro.title}</h1><p className="section-intro">{intro.text}</p></header>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {packages.map((service, index) => {
        const Icon = icons[service.icon];
        return <Reveal key={service.slug} delay={(index % 3) * .06} className="h-full">
          <article id={service.slug} className="flex h-full flex-col rounded-2xl bg-bg-surface-1 p-7 md:p-8">
            <Icon size={26} strokeWidth={1.75} className="text-accent" aria-hidden="true" />
            <h2 className="mt-6 text-2xl font-medium leading-tight tracking-[-.04em]">{service.title}</h2>
            <p className="mt-5"><span className="text-3xl font-medium tracking-[-.05em] text-accent">{service.price}</span> <span className="text-xs text-text-muted">{service.price_note}</span></p>
            <p className="mt-5 text-sm leading-relaxed text-text-muted">{service.description}</p>
            <ul className="mt-6 space-y-3 border-t border-border-subtle pt-6">{service.includes.map(item => <li key={item} className="flex gap-3 text-sm leading-relaxed"><Check size={16} className="mt-[3px] shrink-0 text-accent" aria-hidden="true" />{item}</li>)}</ul>
            <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-8">
              <Link prefetch={false} href={`/contact?service=${service.slug}`} className={buttonClass("primary")}>Start this project <ArrowRight size={17} /></Link>
              {service.case_study && <Link prefetch={false} href={`/projects/${service.case_study}`} className="text-link text-sm">See a case study <ArrowUpRight size={15} /></Link>}
            </div>
          </article>
        </Reveal>;
      })}
    </div>
    <Reveal>
      <section id={retainer.slug} aria-labelledby="retainer-heading" className="mt-16 grid grid-cols-1 gap-10 rounded-2xl border border-accent bg-bg-surface-1 p-7 md:p-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <p className="font-mono text-xs text-accent">{retainer.subtitle}</p>
          <h2 id="retainer-heading" className="section-heading mt-4">{retainer.title}</h2>
          <p className="mt-6"><span className="text-4xl md:text-5xl font-medium tracking-[-.06em] text-accent">{retainer.price}</span> <span className="text-sm text-text-muted">{retainer.price_note}</span></p>
          <p className="section-intro">{retainer.description}</p>
        </div>
        <div className="flex flex-col">
          <ul className="space-y-4">{retainer.includes.map(item => <li key={item} className="flex gap-3 leading-relaxed"><Check size={18} className="mt-[3px] shrink-0 text-accent" aria-hidden="true" />{item}</li>)}</ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="https://calendly.com/ch-saif109/30min" target="_blank" rel="noopener noreferrer" className={buttonClass("primary")}>Schedule a Meeting <ArrowUpRight size={17} /></a>
            <Link prefetch={false} href={`/contact?service=${retainer.slug}`} className={buttonClass("secondary")}>Send a message <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>
    </Reveal>
    <p className="text-text-muted max-w-2xl mt-20 text-base leading-relaxed">Prices are starting points. The final quote depends on what your project needs, and you&apos;ll get it in writing before any work begins. Working on something bigger, like a full SaaS platform or a custom AI model? <Link href="/contact" className="text-accent underline underline-offset-4">Let&apos;s talk about it</Link>.</p>
  </div>;
}
