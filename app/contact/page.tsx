"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Twitter, Mail, ExternalLink, Loader2, Phone, Calendar } from "lucide-react";
import { socialLinks } from "@/data/config";
import Link from "next/link";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    budget: "",
    details: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setFieldErrors({});
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.details && Array.isArray(data.details)) {
          const errors: Record<string, string> = {};
          data.details.forEach((issue: any) => {
            if (issue.path && issue.path.length > 0) {
              errors[issue.path[0]] = issue.message;
            }
          });
          setFieldErrors(errors);
          throw new Error("Please check the form for errors.");
        }
        throw new Error(data.error || "Something went wrong");
      }

      setSuccess(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        budget: "",
        details: "",
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Start a Collaboration</h1>
          <p className="text-text-muted text-lg mb-12">
            Interested in working together? Let's discuss your project and how I can help you achieve your goals.
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-bg-surface-2 rounded-full flex items-center justify-center text-primary-indigo">
                <Mail />
              </div>
              <div>
                <div className="text-sm text-text-muted">Email</div>
                <div className="text-lg font-medium"><a href={`mailto:${socialLinks.email}`}>{socialLinks.email}</a></div>
              </div>
              <div className="w-12 h-12 bg-bg-surface-2 rounded-full flex items-center justify-center text-primary-indigo">
                <Calendar />
              </div>
              <div>
                <div className="text-md font-medium flex items-center gap-2 border border-border-subtle rounded-md p-2"><a href="https://calendly.com/ch-saif109/30min" target="_blank" rel="noopener noreferrer"><ExternalLink />Schedule a Meeting</a></div>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              {[Github, Linkedin, Twitter, Phone,ExternalLink].map((Icon, i) => {
                const keys = ["github", "linkedin", "twitter", "phone", "upwork"] as const;
                return (
                  <a
                    key={i}
                    href={socialLinks[keys[i]]}
                    className="w-10 h-10 border border-border-subtle rounded-full flex items-center justify-center text-text-muted hover:text-text-main hover:border-primary-indigo transition-all hover:scale-110"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <Card className="bg-bg-surface-2/50 border-none p-8">
            <p className="text-lg italic text-text-muted mb-4">
              "Saif is one of the most talented engineers I've worked with. His ability to blend AI with robust software engineering is unmatched."
            </p>
            <div className="flex items-center gap-3">
              <Image 
                src="/howard.jpg" 
                alt="Howard Ryan" 
                width={40} 
                height={40} 
                className="rounded-full object-cover" 
              />
              <div>
                <div className="font-bold">Howard Ryan</div>
                <div className="text-xs text-text-muted">CEO, ProjectChat</div>
              </div>
            </div>
          </Card>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-bg-surface-1 p-8 rounded-xl border border-border-subtle">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-muted">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full bg-bg-core border rounded-md p-3 focus:outline-none transition-colors ${
                  fieldErrors.name 
                    ? "border-red-500 focus:border-red-500" 
                    : "border-border-subtle focus:border-primary-indigo"
                }`}
                placeholder="John Doe"
              />
              {fieldErrors.name && (
                <p className="text-xs text-red-500">{fieldErrors.name}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-muted">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={`w-full bg-bg-core border rounded-md p-3 focus:outline-none transition-colors ${
                  fieldErrors.company 
                    ? "border-red-500 focus:border-red-500" 
                    : "border-border-subtle focus:border-primary-indigo"
                }`}
                placeholder="Company Inc."
              />
              {fieldErrors.company && (
                <p className="text-xs text-red-500">{fieldErrors.company}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-text-muted">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full bg-bg-core border rounded-md p-3 focus:outline-none transition-colors ${
                fieldErrors.email 
                  ? "border-red-500 focus:border-red-500" 
                  : "border-border-subtle focus:border-primary-indigo"
              }`}
              placeholder="john@example.com"
            />
            {fieldErrors.email && (
              <p className="text-xs text-red-500">{fieldErrors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-text-muted">Budget Range</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={`w-full bg-bg-core border rounded-md p-3 focus:outline-none transition-colors text-text-muted ${
                fieldErrors.budget 
                  ? "border-red-500 focus:border-red-500" 
                  : "border-border-subtle focus:border-primary-indigo"
              }`}
            >
              <option value="">Select a range</option>
              <option value="$5k - $10k">$5k - $10k</option>
              <option value="$10k - $25k">$10k - $25k</option>
              <option value="$25k+">$25k+</option>
            </select>
            {fieldErrors.budget && (
              <p className="text-xs text-red-500">{fieldErrors.budget}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-text-muted">Project Details</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              required
              rows={4}
              className={`w-full bg-bg-core border rounded-md p-3 focus:outline-none transition-colors ${
                fieldErrors.details 
                  ? "border-red-500 focus:border-red-500" 
                  : "border-border-subtle focus:border-primary-indigo"
              }`}
              placeholder="Tell me about your project..."
            />
            {fieldErrors.details && (
              <p className="text-xs text-red-500">{fieldErrors.details}</p>
            )}
          </div>

          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-md text-red-500 text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-md text-green-500 text-sm">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
