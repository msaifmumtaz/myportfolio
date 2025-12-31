import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="pl-0 hover:pl-2 transition-all">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="prose max-w-none prose-headings:text-text-main prose-p:text-text-main prose-strong:text-text-main prose-li:text-text-main prose-a:text-primary-indigo hover:prose-a:text-primary-indigo-dim">
        <h1 className="text-4xl font-bold font-heading mb-8">Privacy Policy</h1>
        <p className="text-text-muted mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to the portfolio website of <strong>Muhammad Saif</strong> ("we," "our," or "us"). 
            We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (saifcodes.com) and tell you about your privacy rights and how the law protects you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. The Data We Collect</h2>
          <p className="mb-4">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data:</strong> includes first name, last name, or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes email address and any other contact details you provide via our contact form.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform on the devices you use to access this website.</li>
            <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. How We Use Your Data</h2>
          <p className="mb-4">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to your inquiries submitted through our contact form.</li>
            <li>To discuss potential projects, collaborations, or employment opportunities.</li>
            <li>To improve our website, services, marketing, and customer relationships.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
          <p className="mb-4">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Third-Party Links</h2>
          <p className="mb-4">
            This website may include links to third-party websites, plug-ins and applications (such as LinkedIn, GitHub, etc.). Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Contact Details</h2>
          <p className="mb-4">
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
          </p>
          <div className="not-prose bg-bg-surface-1 p-6 rounded-lg border border-border-subtle">
            <p className="font-medium">Muhammad Saif</p>
            <p className="text-text-muted">Full-Stack Developer & AI Consultant</p>
            <p className="text-text-muted">Lahore, Pakistan</p>
            <p className="mt-2">
              <a href="mailto:hello@saifcodes.com" className="text-primary-indigo hover:text-primary-indigo-dim transition-colors">hello@saifcodes.com</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

