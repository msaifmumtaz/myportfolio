import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { format } from "date-fns";
import { servicesContent, siteConfig } from "@/data/config";
import { getServicePage } from "@/data/service-pages";
import { getGuide, getGuides } from "@/lib/guides";
import { articleJsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { buttonClass } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { Markdown } from "@/components/markdown";

export const dynamicParams = false;
export function generateStaticParams() { return getGuides().map(guide => ({ slug: guide.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const guide = getGuide((await params).slug);
  if (!guide) return {};
  return pageMetadata({ title: guide.seo_title, description: guide.description, path: `/guides/${guide.slug}` });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();
  const path = `/guides/${guide.slug}`;
  const servicePage = getServicePage(guide.service);
  const service = servicePage && servicesContent.packages.find(item => item.slug === servicePage.package);
  const others = getGuides().filter(other => other.slug !== guide.slug);
  return <article className="site-shell document-body">
    <JsonLd data={[articleJsonLd({ title: guide.title, description: guide.description, path, updated: guide.updated }), breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }, { name: guide.title, path }])]} />
    <header className="page-intro max-w-5xl">
      <Link prefetch={false} href="/guides" className="text-link text-sm mb-12"><ArrowLeft size={16} />All guides</Link>
      <h1 className="page-heading">{guide.title}</h1>
      <p className="section-intro">{guide.description}</p>
      <p className="mt-6 text-xs font-mono text-text-muted">By {siteConfig.author} · Updated <time dateTime={guide.updated}>{format(new Date(guide.updated), "d MMMM yyyy")}</time></p>
    </header>
    <div className="prose prose-lg max-w-[78ch]"><Markdown source={guide.content} /></div>
    {servicePage && service && <aside className="max-w-[78ch] mt-16 rounded-2xl bg-bg-surface-1 p-7 md:p-9">
      <p className="font-mono text-xs text-accent">{servicePage.eyebrow}</p>
      <p className="mt-3 text-2xl font-medium tracking-[-.04em]">{service.title}</p>
      <p className="mt-3 text-sm leading-relaxed text-text-muted">{service.description}</p>
      <p className="mt-5"><span className="text-2xl font-medium tracking-[-.05em] text-accent">{service.price}</span> <span className="text-xs text-text-muted">{service.price_note}</span></p>
      <Link prefetch={false} href={`/services/${servicePage.slug}`} className={buttonClass("primary", "mt-6")}>See what&apos;s included <ArrowRight size={17} /></Link>
    </aside>}
    {others.length > 0 && <nav aria-label="More guides" className="max-w-[78ch] mt-16 border-t border-border-subtle pt-8">
      <p className="text-sm text-text-muted mb-4">More guides</p>
      <ul className="space-y-3">{others.map(other => <li key={other.slug}><Link prefetch={false} href={`/guides/${other.slug}`} className="text-link">{other.title}<ArrowUpRight size={16} /></Link></li>)}</ul>
    </nav>}
  </article>;
}
