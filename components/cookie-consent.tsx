"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { clearAnalyticsCookies, gaMeasurementId, openConsentSettings, setConsent, useConsent } from "@/lib/consent";

declare global {
  interface Window { gtag?: (...args: unknown[]) => void; [gaDisable: `ga-disable-${string}`]: boolean | undefined }
}

// Only production traffic is measured, so local development never reaches the Analytics property.
const analyticsEnabled = process.env.NODE_ENV === "production" && Boolean(gaMeasurementId);

// Google tag in consent mode "basic": gtag.js is not requested at all until the visitor accepts.
// Advertising signals stay denied because the banner only asks for analytics consent.
const gtagInit = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
gtag('js', new Date());
gtag('config', '${gaMeasurementId}', { allow_google_signals: false, allow_ad_personalization_signals: false });
`;

export function CookieConsent() {
  const { ready, choice, settingsOpen } = useConsent();
  const dialog = useRef<HTMLDivElement>(null);

  // Keeps an already-loaded Google tag in step with the latest choice, so withdrawing consent stops tracking without a reload.
  useEffect(() => {
    if (!ready || !analyticsEnabled) return;
    const granted = choice === "granted";
    window[`ga-disable-${gaMeasurementId}`] = !granted;
    window.gtag?.("consent", "update", { analytics_storage: granted ? "granted" : "denied" });
    if (!granted) clearAnalyticsCookies();
  }, [ready, choice]);

  useEffect(() => { if (settingsOpen) dialog.current?.focus(); }, [settingsOpen]);

  return <>
    {analyticsEnabled && choice === "granted" && <>
      <Script id="ga-init" strategy="afterInteractive">{gtagInit}</Script>
      <Script id="ga-tag" src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} strategy="afterInteractive" />
    </>}
    {ready && (choice === null || settingsOpen) && <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div ref={dialog} tabIndex={-1} role="dialog" aria-labelledby="consent-title" aria-describedby="consent-text"
        className="mx-auto max-w-3xl rounded-2xl border border-border-subtle bg-bg-surface-1 p-5 shadow-lg md:flex md:items-center md:gap-6 md:p-6">
        <div className="min-w-0">
          <h2 id="consent-title" className="text-sm font-semibold mb-2">Can I measure your visit?</h2>
          <p id="consent-text" className="text-text-muted text-sm leading-relaxed">
            I&apos;d like to use Google Analytics cookies to see which pages people read, so I can improve the site. They&apos;re only set if you accept, and you can change your mind any time from the footer.{" "}
            {choice && <>You currently {choice === "granted" ? "allow" : "don't allow"} them. </>}
            <Link href="/privacy#cookies" className="underline underline-offset-4 hover:text-accent">Privacy policy</Link>
          </p>
        </div>
        {/* Refusing is exactly as easy and as prominent as accepting, as GDPR consent requires. */}
        <div className="mt-4 grid grid-cols-2 gap-3 md:mt-0 md:flex md:shrink-0">
          <Button variant="secondary" onClick={() => setConsent("denied")}>Reject</Button>
          <Button variant="secondary" onClick={() => setConsent("granted")}>Accept</Button>
        </div>
      </div>
    </div>}
  </>;
}

export function CookieSettingsButton({ className }: { className?: string }) {
  return <button type="button" onClick={openConsentSettings} className={className}>Cookie settings</button>;
}
