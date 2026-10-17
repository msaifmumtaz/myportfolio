import { useSyncExternalStore } from "react";

export type ConsentChoice = "granted" | "denied";
type ConsentState = { ready: boolean; choice: ConsentChoice | null; settingsOpen: boolean };

export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-V95Y9FKY46";

const storageKey = "saifcodes-consent";
// Regulators such as the CNIL recommend asking again after about six months, for both answers.
const maxAge = 182 * 24 * 60 * 60 * 1000;
const serverState: ConsentState = { ready: false, choice: null, settingsOpen: false };
const listeners = new Set<() => void>();
let state: ConsentState | null = null;

function readStoredChoice(): ConsentChoice | null {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) ?? "null");
    if ((stored?.choice === "granted" || stored?.choice === "denied") && Date.now() - stored.at < maxAge) return stored.choice;
  } catch {}
  // Global Privacy Control is an explicit opt-out signal, so treat it as a refusal until the visitor says otherwise.
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl ? "denied" : null;
}

function update(next: Partial<ConsentState>) {
  state = { ...getSnapshot(), ...next };
  listeners.forEach(listener => listener());
}

function getSnapshot() {
  return state ??= { ready: true, choice: readStoredChoice(), settingsOpen: false };
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => { if (event.key === storageKey) update({ choice: readStoredChoice() }); };
  window.addEventListener("storage", onStorage);
  return () => { listeners.delete(listener); window.removeEventListener("storage", onStorage); };
}

export function useConsent() {
  return useSyncExternalStore(subscribe, getSnapshot, () => serverState);
}

export function setConsent(choice: ConsentChoice) {
  try { localStorage.setItem(storageKey, JSON.stringify({ choice, at: Date.now() })); } catch {}
  update({ choice, settingsOpen: false });
}

export function openConsentSettings() {
  update({ settingsOpen: true });
}

// Removes Google Analytics cookies after consent is refused or withdrawn, whichever domain they were set on.
export function clearAnalyticsCookies() {
  const host = location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  const names = document.cookie.split(";").map(cookie => cookie.split("=")[0].trim()).filter(name => name === "_ga" || name.startsWith("_ga_") || name === "_gid");
  for (const name of names) for (const domain of domains) document.cookie = `${name}=; Max-Age=0; path=/${domain && `; domain=${domain}`}`;
}
