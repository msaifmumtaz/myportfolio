"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { navigation, siteConfig } from "@/data/config";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-bg-core/80 backdrop-blur-md border-b border-border-subtle py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold font-heading text-text-main tracking-tighter hover:text-primary-indigo-dim transition-colors">
          @{siteConfig.site_name.split(" - ")[0]}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="relative text-sm font-medium text-text-muted hover:text-text-main transition-colors"
            >
              {link.label}
              {pathname === link.path && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 top-full block h-px w-full bg-primary-indigo mt-1"
                />
              )}
            </Link>
          ))}
          <ModeToggle />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ModeToggle />
          <button
            className="text-text-main"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-bg-core border-b border-border-subtle"
        >
          <nav className="flex flex-col p-4 gap-4">
            {navigation.links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "text-lg font-medium transition-colors",
                  pathname === link.path ? "text-primary-indigo" : "text-text-muted hover:text-text-main"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}

