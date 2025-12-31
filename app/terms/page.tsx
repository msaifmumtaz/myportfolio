import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TermsAndConditions() {
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
        <h1 className="text-4xl font-bold font-heading mb-8">Terms and Conditions</h1>
        <p className="text-text-muted mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
          <p className="mb-4">
            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and <strong>Muhammad Saif</strong> ("we," "us," or "our"), concerning your access to and use of the saifcodes.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Intellectual Property Rights</h2>
          <p className="mb-4">
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
          </p>
          <p className="mb-4">
            The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. User Representations</h2>
          <p className="mb-4">
            By using the Site, you represent and warrant that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>All registration information you submit via our contact forms will be true, accurate, current, and complete.</li>
            <li>You have the legal capacity and you agree to comply with these Terms of Use.</li>
            <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
            <li>You will not use the Site for any illegal or unauthorized purpose.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Limitations of Liability</h2>
          <p className="mb-4">
            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Governing Law</h2>
          <p className="mb-4">
            These Terms shall be governed by and defined following the laws of Pakistan. Muhammad Saif and yourself irrevocably consent that the courts of Pakistan shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
          <p className="mb-4">
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
          </p>
          <div className="not-prose bg-bg-surface-1 p-6 rounded-lg border border-border-subtle">
            <p className="font-medium">Muhammad Saif</p>
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

