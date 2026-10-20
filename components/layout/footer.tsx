import Link from "next/link";
import { footerContent, siteConfig } from "@/data/config";
import { askAiPrompt } from "@/lib/llms";
import { AskAi } from "@/components/ask-ai";
import { CookieSettingsButton } from "@/components/cookie-consent";

export function Footer() {
  return <footer className="border-t border-border-subtle bg-bg-surface-1 pt-16 pb-8">
    <div className="site-shell">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] mb-16">
        <div><Link href="/" className="text-xl font-bold font-logo text-text-main tracking-tighter mb-4 block">{siteConfig.site_name.split(" - ")[0]}</Link><p className="text-text-muted text-sm leading-relaxed max-w-xs">{siteConfig.meta_description}</p></div>
        {footerContent.columns.map(column => <div key={column.title}><h3 className="text-sm font-semibold mb-5">{column.title}</h3><ul className="space-y-3">{column.links.map(link => <li key={link.label}><Link href={link.href} className="text-text-muted hover:text-accent text-sm transition-colors">{link.label}</Link></li>)}</ul></div>)}
        <AskAi prompt={askAiPrompt} />
      </div>
      <div className="border-t border-border-subtle pt-6 text-text-muted text-xs flex flex-wrap items-center justify-between gap-3"><span>© {new Date().getFullYear()} {footerContent.bottom_text}</span>
        {/* Plain anchors: the .txt routes are files for AI crawlers, not pages the client router can prefetch. */}
        <nav aria-label="Legal and AI resources" className="flex flex-wrap items-center gap-x-5 gap-y-2">{footerContent.bottom_links.map(link => <a key={link.href} href={link.href} className="hover:text-accent transition-colors">{link.label}</a>)}<CookieSettingsButton className="hover:text-accent transition-colors" /></nav>
      </div>
    </div>
  </footer>;
}
