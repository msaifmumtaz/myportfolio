import Link from "next/link";
import { footerContent, siteConfig } from "@/data/config";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-surface-1 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold font-heading text-text-main tracking-tighter mb-4 block">
              {siteConfig.site_name.split(" - ")[0]}
            </Link>
            <p className="text-text-muted text-sm leading-relaxed">
              {siteConfig.meta_description}
            </p>
          </div>
          
          {footerContent.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-text-main font-bold mb-4">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-text-muted hover:text-primary-indigo transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border-subtle pt-8 text-center text-text-muted text-sm">
        © {new Date().getFullYear()} {footerContent.bottom_text}
        </div>
      </div>
    </footer>
  );
}

