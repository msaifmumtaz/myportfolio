import Link from "next/link";
import { footerContent, siteConfig } from "@/data/config";

export function Footer() {
  return <footer className="border-t border-border-subtle bg-bg-surface-1 pt-16 pb-8">
    <div className="site-shell">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr] mb-16">
        <div><Link href="/" className="text-xl font-bold font-logo text-text-main tracking-tighter mb-4 block">{siteConfig.site_name.split(" - ")[0]}</Link><p className="text-text-muted text-sm leading-relaxed max-w-xs">{siteConfig.meta_description}</p></div>
        {footerContent.columns.map(column => <div key={column.title}><h3 className="text-sm font-semibold mb-5">{column.title}</h3><ul className="space-y-3">{column.links.map(link => <li key={link.label}><Link href={link.href} className="text-text-muted hover:text-accent text-sm transition-colors">{link.label}</Link></li>)}</ul></div>)}
      </div>
      <div className="border-t border-border-subtle pt-6 text-text-muted text-xs">© {new Date().getFullYear()} {footerContent.bottom_text}</div>
    </div>
  </footer>;
}
