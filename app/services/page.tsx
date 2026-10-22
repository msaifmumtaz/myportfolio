import Link from "next/link";
import { ArrowRight, ArrowUpRight, Bot, Check, FileSearch, Globe, Newspaper, ShieldCheck, ShoppingBag, Smartphone, Workflow, type LucideIcon } from "lucide-react";
import { servicesContent } from "@/data/config";
import { getGuides } from "@/lib/guides";
import { buttonClass } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/json-ld";
import { ScopeDetails } from "@/components/scope-details";
import { pageMetadata, servicesJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services & Pricing – RAG, AI Automation, Web & Apps",
  description: "Custom RAG development and AI workflow automation for startups and small teams, plus AI chatbots, websites, Shopify stores, iOS & macOS apps and PHP security patching. Clear prices and defined scope.",
  path: "/services",
});

const icons: Record<string, LucideIcon> = { FileSearch, Workflow, Globe, ShoppingBag, Bot, Smartphone, Newspaper, ShieldCheck };

export default function ServicesPage() {
  const { intro, categories, packages, retainer } = servicesContent;
  const guides = getGuides();
  return <div className="site-shell document-body">
    <JsonLd data={servicesJsonLd()} />
    <header className="page-intro"><h1 className="page-heading">{intro.title}</h1><p className="section-intro">{intro.text}</p></header>
    {categories.map(category => <section key={category.id} id={category.id} aria-labelledby={`${category.id}-heading`} className="pb-20">
      <div className="mb-10 border-t border-border-subtle pt-10"><h2 id={`${category.id}-heading`} className="section-heading">{category.title}</h2><p className="section-intro">{category.text}</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.filter(service => service.category === category.id).map((service, index) => {
          const Icon = icons[service.icon];
          const learnMore = service.page ?? service.related_page;
          return <Reveal key={service.slug} delay={(index % 3) * .06} className="h-full">
            <article id={service.slug} className="flex h-full flex-col rounded-2xl bg-bg-surface-1 p-7 md:p-8">
              <Icon size={26} strokeWidth={1.75} className="text-accent" aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-medium leading-tight tracking-[-.04em]">{service.title}</h3>
              <p className="mt-5"><span className="text-3xl font-medium tracking-[-.05em] text-accent">{service.price}</span> <span className="text-xs text-text-muted">{service.price_note}</span></p>
              <p className="mt-5 text-sm leading-relaxed text-text-muted">{service.description}</p>
              <ul className="mt-6 space-y-3 border-t border-border-subtle pt-6">{service.includes.map(item => <li key={item} className="flex gap-3 text-sm leading-relaxed"><Check size={16} className="mt-[3px] shrink-0 text-accent" aria-hidden="true" />{item}</li>)}</ul>
              <details className="mt-6 border-t border-border-subtle pt-5"><summary className="text-sm font-medium text-accent">Running costs and what&apos;s not included</summary><div className="mt-4"><ScopeDetails scope={service.scope} /></div></details>
              <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-8">
                <Link prefetch={false} href={`/contact?service=${service.slug}`} className={buttonClass("primary")}>Start this project <ArrowRight size={17} /></Link>
                {learnMore ? <Link prefetch={false} href={learnMore} className="text-link text-sm">{service.page ? "How it works" : "How I build automations"} <ArrowUpRight size={15} /></Link>
                  : service.case_study && <Link prefetch={false} href={`/projects/${service.case_study}`} className="text-link text-sm">See a case study <ArrowUpRight size={15} /></Link>}
              </div>
            </article>
          </Reveal>;
        })}
      </div>
      {category.id === "ai" && <Reveal>
        <section id={retainer.slug} aria-labelledby="retainer-heading" className="mt-6 grid grid-cols-1 gap-10 rounded-2xl border border-accent bg-bg-surface-1 p-7 md:p-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs text-accent">{retainer.subtitle}</p>
            <h3 id="retainer-heading" className="section-heading mt-4">{retainer.title}</h3>
            <p className="mt-6"><span className="text-4xl md:text-5xl font-medium tracking-[-.06em] text-accent">{retainer.price}</span> <span className="text-sm text-text-muted">{retainer.price_note}</span></p>
            <p className="section-intro">{retainer.description}</p>
          </div>
          <div className="flex flex-col">
            <ul className="space-y-4">{retainer.includes.map(item => <li key={item} className="flex gap-3 leading-relaxed"><Check size={18} className="mt-[3px] shrink-0 text-accent" aria-hidden="true" />{item}</li>)}</ul>
            <div className="mt-8 border-t border-border-subtle pt-6"><ScopeDetails scope={retainer.scope} retainer /></div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="https://calendly.com/ch-saif109/30min" target="_blank" rel="noopener noreferrer" className={buttonClass("primary")}>Schedule a Meeting <ArrowUpRight size={17} /></a>
              <Link prefetch={false} href={`/contact?service=${retainer.slug}`} className={buttonClass("secondary")}>Send a message <ArrowRight size={17} /></Link>
            </div>
          </div>
        </section>
      </Reveal>}
    </section>)}
    {guides.length > 0 && <section aria-labelledby="guides-heading" className="border-t border-border-subtle pt-10">
      <h2 id="guides-heading" className="section-heading">Guides</h2><p className="section-intro">Plain answers to the questions people ask before hiring me: what things cost, how to evaluate a developer and which tools to use.</p>
      <ul className="mt-10 border-t border-border-subtle">{guides.map(guide => <li key={guide.slug} className="border-b border-border-subtle"><Link prefetch={false} href={`/guides/${guide.slug}`} className="group flex items-center justify-between gap-6 py-6"><span className="text-lg md:text-xl font-medium tracking-[-.03em] group-hover:text-accent transition-colors">{guide.title}</span><ArrowUpRight size={18} className="shrink-0 text-accent" aria-hidden="true" /></Link></li>)}</ul>
    </section>}
    <p className="text-text-muted max-w-2xl mt-20 text-base leading-relaxed">Prices are starting points. The final quote depends on what your project needs, and you&apos;ll get it in writing before any work begins, with running costs and the support window spelled out. Working on something bigger, like a full SaaS platform or a custom AI model? <Link href="/contact" className="text-accent underline underline-offset-4">Let&apos;s talk about it</Link>.</p>
  </div>;
}
