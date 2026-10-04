import Image from "next/image";
import { Github, Linkedin, Twitter, Mail, ExternalLink, Phone, Calendar } from "lucide-react";
import { socialLinks } from "@/data/config";
import { ContactForm } from "@/components/contact-form";

const socials = [{ key: "github", label: "GitHub", icon: Github }, { key: "linkedin", label: "LinkedIn", icon: Linkedin }, { key: "twitter", label: "Twitter", icon: Twitter }, { key: "phone", label: "WhatsApp", icon: Phone }, { key: "upwork", label: "Upwork", icon: ExternalLink }] as const;

export default function ContactPage() {
  return <div className="site-shell document-body"><header className="page-intro"><h1 className="page-heading">Let&apos;s talk</h1><p className="section-intro">Tell me what you&apos;re building and where you&apos;re stuck. I read every message myself and usually reply within a day.</p></header>
    <div className="grid grid-cols-1 lg:grid-cols-[.85fr_1.15fr] gap-12 lg:gap-20 items-start">
      <div className="min-w-0">
        <div className="space-y-7"><div className="flex items-center gap-4"><Mail size={22} className="text-accent shrink-0" /><div className="min-w-0"><p className="text-xs text-text-muted mb-1">Email</p><a href={`mailto:${socialLinks.email}`} className="text-lg font-medium break-all">{socialLinks.email}</a></div></div>
          <a href="https://calendly.com/ch-saif109/30min" target="_blank" rel="noopener noreferrer" className="text-link"><Calendar size={22} className="text-accent" />Schedule a Meeting<ExternalLink size={15} /></a>
        </div>
        <div className="flex flex-wrap gap-3 mt-9">{socials.map(({ key, label, icon: Icon }) => <a key={key} href={socialLinks[key]} aria-label={label} className="button button-secondary button-icon"><Icon size={19} /></a>)}</div>
        <figure className="mt-12 pt-9 border-t border-border-subtle"><blockquote className="text-xl leading-relaxed tracking-[-.025em]">“Muhammad delivered an exceptional work! Excellent communication, and always making sure that you&apos;re happy with the final work.”</blockquote>
          <figcaption className="flex items-center gap-3 mt-6"><Image src="/howard.jpg" alt="Howard Ryan" width={44} height={44} className="rounded-full object-cover w-11 h-11" /><div><p className="font-medium text-sm">Howard Ryan</p><p className="text-xs text-text-muted mt-1">CEO, ProjectChat</p></div></figcaption>
          <details className="mt-5 text-sm text-text-muted leading-relaxed"><summary className="text-accent">Read full review</summary><p className="mt-3">Muhammad delivered an exceptional work! Excellent communication, and always making sure that you&apos;re happy with the final work. Highly recommended.</p></details>
        </figure>
      </div>
      <ContactForm />
    </div>
  </div>;
}
