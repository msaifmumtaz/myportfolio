import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { buttonClass } from "@/components/ui/button";
import { NotFoundSearch } from "@/components/not-found-search";
import { buildSearchIndex } from "@/lib/site-search";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <div className="site-shell document-body">
    <header className="page-intro">
      <p className="hero-content font-mono text-xs text-accent">Error 404</p>
      <h1 className="page-heading mt-5 max-w-4xl">This page went <span className="text-accent">off-script.</span></h1>
      <p className="section-intro">The link may be old, mistyped or moved during a redesign. Search below and I&apos;ll point you to the closest match.</p>
    </header>
    <NotFoundSearch entries={buildSearchIndex()} />
    <div className="mt-16 flex flex-wrap gap-3 border-t border-border-subtle pt-10">
      <Link prefetch={false} href="/" className={buttonClass("primary")}><ArrowLeft size={17} />Back to home</Link>
      <Link prefetch={false} href="/contact" className={buttonClass("secondary")}>Ask me directly<ArrowRight size={17} /></Link>
    </div>
  </div>;
}
