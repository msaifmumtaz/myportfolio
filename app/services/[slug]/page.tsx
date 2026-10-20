import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Minus } from "lucide-react";
import { servicesContent } from "@/data/config";
import { deliveryProcess, getServicePage, servicePages } from "@/data/service-pages";
import { getGuides } from "@/lib/guides";
import { getSortedProjectsData } from "@/lib/projects";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { buttonClass } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/json-ld";
import { ScopeDetails } from "@/components/scope-details";

const meetingUrl = "https://calendly.com/ch-saif109/30min";

export const dynamicParams = false;
export function generateStaticParams() { return servicePages.map(page => ({ slug: page.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const page = getServicePage((await params).slug);
  if (!page) return {};
  return pageMetadata({ title: page.seo_title, description: page.seo_description, path: `/services/${page.slug}` });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const page = getServicePage((await params).slug);
  const service = page && servicesContent.packages.find(item => item.slug === page.package);
  if (!page || !service) notFound();
  const path = `/services/${page.slug}`;
  const projects = getSortedProjectsData();
  const project = (slug: string) => projects.find(item => item.slug === slug);
  const proofProject = page.proof && project(page.proof.case_study);
  const guides = getGuides().filter(guide => page.guides.includes(guide.slug));
  return <article className="site-shell document-body">
    <JsonLd data={[serviceJsonLd({ ...service, page: path }, page.seo_title), breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: page.eyebrow, path }])]} />
    <header className="page-intro">
      <Link prefetch={false} href="/services" className="text-link text-sm mb-12"><ArrowLeft size={16} />All services</Link>
      <p className="font-mono text-sm text-accent mb-4">{page.eyebrow}</p>
      <h1 className="page-heading max-w-5xl">{page.title}</h1>
      <p className="section-intro">{page.intro}</p>
      <p className="mt-7"><span className="text-3xl font-medium tracking-[-.05em] text-accent">{service.price}</span> <span className="text-sm text-text-muted">{service.price_note}</span></p>
      <div className="flex flex-wrap gap-3 mt-8">
        <a href={meetingUrl} target="_blank" rel="noopener noreferrer" className={buttonClass("primary")}>Book a free scoping call <ArrowUpRight size={17} /></a>
        <Link prefetch={false} href={`/contact?service=${service.slug}`} className={buttonClass("secondary")}>Send a message <ArrowRight size={17} /></Link>
        {page.demo_url && <a href={page.demo_url} target="_blank" rel="noopener noreferrer" className={buttonClass("secondary")}>Try the demo <ArrowUpRight size={17} /></a>}
      </div>
    </header>

    <section aria-label="Who this is for" className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="rounded-2xl bg-bg-surface-1 p-7 md:p-9"><h2 className="text-xl font-medium tracking-[-.03em]">A good fit if</h2><ul className="mt-6 space-y-4">{page.fit.good.map(item => <li key={item} className="flex gap-3 leading-relaxed"><Check size={18} className="mt-[3px] shrink-0 text-accent" aria-hidden="true" />{item}</li>)}</ul></div>
      <div className="rounded-2xl border border-border-subtle p-7 md:p-9"><h2 className="text-xl font-medium tracking-[-.03em]">Probably not a fit if</h2><ul className="mt-6 space-y-4">{page.fit.not.map(item => <li key={item} className="flex gap-3 leading-relaxed text-text-muted"><Minus size={18} className="mt-[3px] shrink-0" aria-hidden="true" />{item}</li>)}</ul></div>
    </section>

    {page.diagram && <section aria-labelledby="diagram-heading" className="section-space">
      <h2 id="diagram-heading" className="section-heading">{page.diagram.heading}</h2>
      <figure className="mt-10">
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">{page.diagram.steps.map((step, index) => <li key={step.title} className="relative rounded-2xl bg-bg-surface-1 p-5">
          <p className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</p>
          <p className="mt-3 font-medium">{step.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.text}</p>
          {index < page.diagram!.steps.length - 1 && <ArrowRight size={16} aria-hidden="true" className="absolute -right-[13px] top-1/2 hidden -translate-y-1/2 text-accent lg:block" />}
        </li>)}</ol>
        <figcaption className="mt-5 text-sm text-text-muted max-w-3xl">{page.diagram.caption} <Link prefetch={false} href={`/projects/${page.proof?.case_study}`} className="text-accent underline underline-offset-4">Read the case study</Link>.</figcaption>
      </figure>
    </section>}

    <section aria-labelledby="how-heading" className={page.diagram ? "border-t border-border-subtle section-space" : "section-space"}>
      <h2 id="how-heading" className="section-heading max-w-3xl">{page.how.heading}</h2>
      {page.how.intro && <p className="section-intro">{page.how.intro}</p>}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">{page.how.items.map((item, index) => <Reveal key={item.title} delay={(index % 2) * .06}>
        <h3 className="flex items-baseline gap-4 text-xl font-medium tracking-[-.03em]"><span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>{item.title}</h3>
        <p className="mt-3 leading-relaxed text-text-muted">{item.text}</p>
      </Reveal>)}</div>
    </section>

    {page.proof && proofProject && <section aria-labelledby="proof-heading" className="rounded-2xl bg-bg-surface-1 p-7 md:p-12 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16">
      <div>
        <p className="font-mono text-xs text-accent">{proofProject.category}</p>
        <h2 id="proof-heading" className="section-heading mt-4">{page.proof.heading}</h2>
        <ul className="mt-8 space-y-4">{page.proof.points.map(point => <li key={point} className="flex gap-3 leading-relaxed"><Check size={18} className="mt-[3px] shrink-0 text-accent" aria-hidden="true" />{point}</li>)}</ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link prefetch={false} href={`/projects/${proofProject.slug}`} className={buttonClass("primary")}>Read the case study <ArrowRight size={17} /></Link>
          {proofProject.demo_url && <a href={proofProject.demo_url} target="_blank" rel="noopener noreferrer" className={buttonClass("secondary")}>See it live <ArrowUpRight size={17} /></a>}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {proofProject.image_path && <div className="media-frame relative aspect-[16/10]"><Image src={proofProject.image_path} alt={proofProject.image_alt ?? proofProject.title} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-contain p-4" /></div>}
        {page.proof.quote && <figure><blockquote className="text-lg leading-relaxed tracking-[-.02em]">“{page.proof.quote.text}”</blockquote>
          <figcaption className="flex items-center gap-3 mt-5">{page.proof.quote.image && <Image src={page.proof.quote.image} alt={page.proof.quote.author} width={40} height={40} className="rounded-full object-cover w-10 h-10" />}<div><p className="font-medium text-sm">{page.proof.quote.author}</p><p className="text-xs text-text-muted mt-1">{page.proof.quote.role}</p></div></figcaption>
        </figure>}
        {page.proof.more && <div><p className="text-sm text-text-muted">More automation work</p><ul className="mt-3 space-y-2">{page.proof.more.map(slug => project(slug)).filter(item => item !== undefined).map(item => <li key={item.slug}><Link prefetch={false} href={`/projects/${item.slug}`} className="text-link text-sm">{item.title} <ArrowUpRight size={15} /></Link></li>)}</ul></div>}
      </div>
    </section>}

    <section aria-labelledby="costs-heading" className="section-space">
      <h2 id="costs-heading" className="section-heading">{page.costs.heading}</h2>
      <p className="section-intro">{page.costs.intro}</p>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-16">
        <div className="rounded-2xl bg-bg-surface-1 p-7 md:p-9 self-start">
          <p><span className="text-3xl font-medium tracking-[-.05em] text-accent">{service.price}</span> <span className="text-sm text-text-muted">{service.price_note}</span></p>
          <ul className="mt-6 space-y-3 border-t border-border-subtle pt-6">{service.includes.map(item => <li key={item} className="flex gap-3 text-sm leading-relaxed"><Check size={16} className="mt-[3px] shrink-0 text-accent" aria-hidden="true" />{item}</li>)}</ul>
          <div className="mt-6 border-t border-border-subtle pt-6"><ScopeDetails scope={service.scope} /></div>
        </div>
        <dl className="border-t border-border-subtle">{page.costs.rows.map(row => <div key={row.cost} className="grid grid-cols-1 sm:grid-cols-[.7fr_1.6fr] gap-2 sm:gap-8 border-b border-border-subtle py-6">
          <dt><span className="block font-medium">{row.cost}</span><span className="block mt-1 text-xs font-mono text-accent">{row.paid_to}</span></dt>
          <dd className="text-sm leading-relaxed text-text-muted">{row.detail}</dd>
        </div>)}</dl>
      </div>
    </section>

    <section aria-labelledby="process-heading" className="border-t border-border-subtle section-space">
      <h2 id="process-heading" className="section-heading">How we&apos;ll work</h2>
      <p className="section-intro">You work with me directly from the first call to handover. No account managers, no hand-offs.</p>
      <ol className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">{deliveryProcess.map((step, index) => <li key={step.title} className="border-t-2 border-accent pt-5">
        <p className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</p>
        <p className="mt-3 font-medium">{step.title}</p>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.text}</p>
      </li>)}</ol>
    </section>

    <section aria-labelledby="faq-heading" className="border-t border-border-subtle section-space grid grid-cols-1 lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-20">
      <h2 id="faq-heading" className="section-heading">Questions</h2>
      <div className="border-t border-border-subtle">{page.faqs.map(faq => <details key={faq.q} className="skill-disclosure border-b border-border-subtle">
        <summary><span className="text-lg font-medium tracking-[-.02em]">{faq.q}</span><span className="disclosure-icon text-2xl leading-none" aria-hidden="true">+</span></summary>
        <p className="pb-7 -mt-2 leading-relaxed text-text-muted max-w-2xl">{faq.a}</p>
      </details>)}</div>
    </section>

    {guides.length > 0 && <section aria-labelledby="guides-heading" className="border-t border-border-subtle pt-10">
      <h2 id="guides-heading" className="text-sm font-medium text-text-muted">Related guides</h2>
      <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">{guides.map(guide => <li key={guide.slug}><Link prefetch={false} href={`/guides/${guide.slug}`} className="group block rounded-2xl bg-bg-surface-1 p-7 h-full">
        <p className="text-lg font-medium tracking-[-.03em] group-hover:text-accent transition-colors">{guide.title}</p>
        <p className="mt-3 text-sm leading-relaxed text-text-muted">{guide.description}</p>
      </Link></li>)}</ul>
    </section>}

    <section className="section-space"><Reveal>
      <h2 className="section-heading max-w-3xl">Tell me about your project</h2>
      <p className="section-intro">A 30-minute call is enough to tell whether this fits and what it would cost. You&apos;ll get the scope and quote in writing afterwards.</p>
      <div className="flex flex-wrap gap-3 mt-8">
        <a href={meetingUrl} target="_blank" rel="noopener noreferrer" className={buttonClass("primary")}>Book a free scoping call <ArrowUpRight size={17} /></a>
        <Link prefetch={false} href={`/contact?service=${service.slug}`} className={buttonClass("secondary")}>Send a message <ArrowRight size={17} /></Link>
      </div>
    </Reveal></section>
  </article>;
}
