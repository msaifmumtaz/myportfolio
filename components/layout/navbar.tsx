"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation, siteConfig } from "@/data/config";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonClass } from "@/components/ui/button";

export const Navbar = memo(function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="sticky top-0 border-b border-border-subtle bg-bg-core" style={{ zIndex: "var(--layer-nav)" }}>
      <div className="site-shell flex h-[72px] items-center justify-between gap-5">
        <Link prefetch={false} href="/" className="text-xl font-bold font-logo text-text-main tracking-tighter hover:text-accent transition-colors">@{siteConfig.site_name.split(" - ")[0]}</Link>
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-6 lg:gap-9">
          {navigation.links.map(link => <Link prefetch={false} key={link.path} href={link.path} aria-current={pathname === link.path ? "page" : undefined} className={cn("relative py-2 text-sm font-medium transition-colors hover:text-text-main", pathname === link.path ? "text-text-main" : "text-text-muted")}>
            {link.label}
            {pathname === link.path && <span className="navigation-underline absolute bottom-0 left-0 h-[2px] w-full bg-accent" />}
          </Link>)}
        </nav>
        <div className="flex items-center gap-2 lg:gap-4">
          <ModeToggle />
          <a href="https://calendly.com/ch-saif109/30min" target="_blank" rel="noopener noreferrer" className={buttonClass("primary", "hidden lg:inline-flex")}>Schedule a Meeting <ArrowUpRight size={16} strokeWidth={2} /></a>
          <button ref={toggle} type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation" className="button button-ghost button-icon md:hidden" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </div>
        {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-navigation absolute top-full left-0 right-0 border-b border-border-subtle bg-bg-core p-6 md:hidden" style={{ zIndex: "var(--layer-menu)" }}>
          <div className="flex flex-col gap-2">{navigation.links.map(link => <Link key={link.path} href={link.path} aria-current={pathname === link.path ? "page" : undefined} className="py-3 text-lg" onClick={() => setOpen(false)}>{link.label}</Link>)}
          <a href="https://calendly.com/ch-saif109/30min" target="_blank" rel="noopener noreferrer" className={buttonClass("primary", "mt-3")}>Schedule a Meeting <ArrowUpRight size={16} /></a></div>
        </nav>}
    </header>
  );
});
