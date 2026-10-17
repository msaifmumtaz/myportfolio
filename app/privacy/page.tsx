import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { CookieSettingsButton } from "@/components/cookie-consent";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How saifcodes.com collects, uses and protects your personal data, which cookies it uses, and the GDPR rights you have.",
  path: "/privacy",
});

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href="/" className="text-link text-sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
        </Link>
      </div>

      <div className="prose max-w-none prose-headings:text-text-main prose-p:text-text-main prose-strong:text-text-main prose-li:text-text-main prose-a:text-primary-indigo hover:prose-a:text-primary-indigo-dim">
        <h1 className="text-4xl font-bold font-heading mb-8">Privacy Policy</h1>
        <p className="text-text-muted mb-8">Last updated: 17 October 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Who I Am</h2>
          <p className="mb-4">
            This is the website of <strong>Muhammad Saif</strong> (&quot;I&quot;, &quot;me&quot;), a freelance full-stack developer and AI engineer based in Lahore, Pakistan. I am the data controller for the personal data collected through saifcodes.com. This policy explains what I collect, why, who else handles it, and the rights you have under the EU General Data Protection Regulation (GDPR), the UK GDPR and similar laws.
          </p>
          <p className="mb-4">
            In short: you can browse the site without being tracked by cookies unless you accept them, I only collect what you choose to send me through the contact form, and I never sell your data or use it for advertising.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. What I Collect, Why, and on What Legal Basis</h2>

          <h3 className="text-xl font-semibold mb-2">Contact form and email</h3>
          <p className="mb-4">
            When you send a message, I receive your name, email address, company (if you give one) and what you write. I use this only to reply to you and to discuss a possible project. The legal basis is taking steps at your request before entering into a contract (Art. 6(1)(b) GDPR) and, for general questions, my legitimate interest in answering messages sent to me (Art. 6(1)(f)).
          </p>

          <h3 className="text-xl font-semibold mb-2">Spam protection</h3>
          <p className="mb-4">
            The contact form uses Cloudflare Turnstile to check that a person, not a bot, is sending it. Turnstile reads technical signals from your browser, such as your IP address and browser characteristics, only to perform this check. The legal basis is my legitimate interest in keeping the form free of spam and abuse (Art. 6(1)(f)).
          </p>

          <h3 className="text-xl font-semibold mb-2">Hosting and server logs</h3>
          <p className="mb-4">
            The site is hosted by Vercel. Like any web server, it processes your IP address, browser type, the page requested and the time of the request so it can deliver the page and protect the site against attacks. The legal basis is my legitimate interest in running a secure, working website (Art. 6(1)(f)).
          </p>

          <h3 className="text-xl font-semibold mb-2">Privacy-friendly visitor statistics</h3>
          <p className="mb-4">
            I use Vercel Web Analytics to count page views. It sets no cookies and does not identify you: visits are grouped using a short-lived hash of the request that Vercel discards within 24 hours, and I only see aggregated numbers. The legal basis is my legitimate interest in knowing which pages are useful (Art. 6(1)(f)).
          </p>

          <h3 className="text-xl font-semibold mb-2">Google Analytics (only with your consent)</h3>
          <p className="mb-4">
            If you click &quot;Accept&quot; in the cookie banner, I use Google Analytics 4 to understand in more detail how visitors use the site, for example which pages are read, how long people stay, the referring website, the type of device and browser, and an approximate location (country or city) derived from your IP address. Google Analytics 4 does not store IP addresses. Google signals and ad personalisation are switched off, so this data is not used for advertising. If you don&apos;t accept, the Google Analytics script is never loaded. The legal basis is your consent (Art. 6(1)(a)), which you can withdraw at any time.
          </p>
        </section>

        <section id="cookies" className="mb-8 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-4">3. Cookies and Local Storage</h2>
          <p className="mb-4">
            The site only sets analytics cookies after you accept them. The table below lists everything stored on your device.
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr><th>Name</th><th>Provider</th><th>Purpose</th><th>Duration</th><th>Needs consent</th></tr>
              </thead>
              <tbody>
                <tr><td><code>_ga</code>, <code>_ga_*</code></td><td>Google Analytics</td><td>Tells visits apart to measure site usage</td><td>2 years</td><td>Yes</td></tr>
                <tr><td><code>saifcodes-consent</code> (local storage)</td><td>This site</td><td>Remembers your cookie choice</td><td>6 months</td><td>No, strictly necessary</td></tr>
                <tr><td><code>theme</code> (local storage)</td><td>This site</td><td>Remembers light or dark mode</td><td>Until you clear it</td><td>No, strictly necessary</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4">
            Cloudflare Turnstile may store short-lived technical data while it runs the bot check on the contact page. This is strictly necessary to protect the form.
          </p>
          <p className="mb-4">
            You can change or withdraw your consent at any time with the &quot;Cookie settings&quot; link in the footer or right here:{" "}
            <CookieSettingsButton className="font-medium text-primary-indigo underline underline-offset-4" />. When you withdraw consent, Google Analytics stops collecting data and its cookies are deleted. Until you choose, nothing is collected. After six months I&apos;ll ask you again.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Who Receives Your Data</h2>
          <p className="mb-4">
            I don&apos;t sell or rent personal data. I share it only with the service providers below, who process it on my behalf under data processing terms:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Vercel Inc.</strong> (USA): website hosting and cookieless statistics.</li>
            <li><strong>Cloudflare, Inc.</strong> (USA): Turnstile spam protection on the contact form.</li>
            <li><strong>Resend</strong> (USA): delivers contact form messages to my inbox.</li>
            <li><strong>Google</strong> (Google Ireland Ltd. for visitors in the EEA, Google LLC in the USA): Google Analytics, only with your consent, and the email service where I read your messages.</li>
          </ul>
          <p className="mb-4">
            I may also disclose data where the law requires it, or to protect my legal rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. International Transfers</h2>
          <p className="mb-4">
            I work from Pakistan, and the providers above are based in or use servers in the United States. These countries may not offer the same level of data protection as the EU or UK. Where a provider is certified under the EU-US Data Privacy Framework (and its UK extension), transfers rely on that framework; otherwise they rely on the European Commission&apos;s Standard Contractual Clauses. When you contact me, transferring your message to me in Pakistan is necessary to answer your request (Art. 49(1)(b) GDPR).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. How Long I Keep Data</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Contact messages:</strong> up to 2 years after our last exchange. If we work together, I keep project correspondence for as long as the work lasts and as long as tax and accounting law requires afterwards.</li>
            <li><strong>Google Analytics data:</strong> no longer than 14 months, after which Google deletes it automatically.</li>
            <li><strong>Server logs:</strong> for the short period Vercel retains them for security and debugging.</li>
            <li><strong>Your cookie choice:</strong> 6 months.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
          <p className="mb-4">Under the GDPR you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Access</strong> the personal data I hold about you and get a copy of it.</li>
            <li><strong>Rectification</strong> of data that is inaccurate or incomplete.</li>
            <li><strong>Erasure</strong> of your data (&quot;right to be forgotten&quot;).</li>
            <li><strong>Restriction</strong> of how I process your data.</li>
            <li><strong>Data portability</strong>: receiving your data in a common, machine-readable format.</li>
            <li><strong>Object</strong> to processing based on my legitimate interests.</li>
            <li><strong>Withdraw consent</strong> at any time, without affecting processing that happened before.</li>
            <li><strong>Lodge a complaint</strong> with a data protection authority, for example the one in the EU country where you live or work, or the Information Commissioner&apos;s Office (ICO) in the UK.</li>
          </ul>
          <p className="mb-4">
            To use any of these rights, email me at <a href="mailto:hello@saifcodes.com">hello@saifcodes.com</a>. I&apos;ll reply within one month. I don&apos;t make decisions about you based solely on automated processing or profiling.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Data Security</h2>
          <p className="mb-4">
            The site is served only over HTTPS, and only I have access to the accounts that hold your data. No method of transmission or storage is completely secure, but I take reasonable measures to protect your data against loss, misuse and unauthorised access.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">9. Children</h2>
          <p className="mb-4">
            This site is meant for businesses and professionals. It is not directed at children under 16, and I don&apos;t knowingly collect their data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">10. Third-Party Links</h2>
          <p className="mb-4">
            This site links to other websites, such as LinkedIn, GitHub, Upwork, Calendly and AI assistants like ChatGPT, Claude, Gemini and Perplexity. Nothing is shared with them until you click a link. Once you do, their own privacy policies apply, and I&apos;m not responsible for how they handle your data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">11. Changes to This Policy</h2>
          <p className="mb-4">
            I may update this policy when the site or the law changes. The date at the top shows the latest version. If I start using your data in a new way that needs consent, I&apos;ll ask you again.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">12. Contact Details</h2>
          <p className="mb-4">
            If you have any questions about this privacy policy or want to exercise your rights, contact me at:
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
