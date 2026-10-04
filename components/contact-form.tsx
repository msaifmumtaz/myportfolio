"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

type FormData = { name: string; company: string; email: string; details: string };
type ValidationIssue = { path?: (string | number)[]; message: string };
const empty: FormData = { name: "", company: "", email: "", details: "" };

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(empty);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const form = useRef<HTMLFormElement>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(previous => ({ ...previous, [name]: value }));
    if (fieldErrors[name]) setFieldErrors(previous => { const next = { ...previous }; delete next[name]; return next; });
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (loading) return;
    setLoading(true); setSuccess(false); setError(""); setFieldErrors({});
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      const data: { details?: ValidationIssue[]; error?: string } = await response.json();
      if (!response.ok) {
        if (Array.isArray(data.details)) {
          const errors: Record<string, string> = {};
          data.details.forEach(issue => { if (issue.path?.length) errors[String(issue.path[0])] = issue.message; });
          setFieldErrors(errors);
          const first = Object.keys(errors)[0];
          requestAnimationFrame(() => (form.current?.elements.namedItem(first) as HTMLElement | null)?.focus());
          throw new Error("Please check the form for errors.");
        }
        throw new Error(data.error || "Something went wrong");
      }
      setSuccess(true); setFormData(empty);
    } catch (caught) { setError(caught instanceof Error ? caught.message : "Something went wrong"); }
    finally { setLoading(false); }
  };
  const attributes = (name: keyof FormData) => ({ id: `contact-${name}`, name, value: formData[name], onChange: handleChange, className: "field", "aria-invalid": Boolean(fieldErrors[name]), "aria-describedby": fieldErrors[name] ? `contact-${name}-error` : undefined });
  const fieldError = (name: keyof FormData) => fieldErrors[name] && <p id={`contact-${name}-error`} className="text-xs text-text-main mt-2" role="alert">{fieldErrors[name]}</p>;
  return <form ref={form} onSubmit={handleSubmit} aria-label="Project inquiry" aria-busy={loading} className="min-w-0 rounded-2xl bg-bg-surface-1 p-6 md:p-9 space-y-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"><div><label htmlFor="contact-name" className="block text-sm font-medium mb-2">Name</label><input {...attributes("name")} type="text" required autoComplete="name" placeholder="Your name" />{fieldError("name")}</div><div><label htmlFor="contact-company" className="block text-sm font-medium mb-2">Company</label><input {...attributes("company")} type="text" autoComplete="organization" placeholder="Your organization" />{fieldError("company")}</div></div>
    <div><label htmlFor="contact-email" className="block text-sm font-medium mb-2">Email</label><input {...attributes("email")} type="email" required autoComplete="email" placeholder="you@company.com" />{fieldError("email")}</div>
    <div><label htmlFor="contact-details" className="block text-sm font-medium mb-2">Project Details</label><textarea {...attributes("details")} required rows={5} placeholder="What are you building, and what do you need help with?" />{fieldError("details")}</div>
    {error && <div role="alert" className="form-notice">{error}</div>}{success && <div role="status" className="form-notice">Thanks, your message is in! I&apos;ll get back to you soon.</div>}
    <Button type="submit" disabled={loading} className="w-full">{loading ? "Sending..." : "Send Message"}<ArrowUpRight size={17} aria-hidden="true" /></Button>
  </form>;
}
