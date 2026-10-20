import { servicesContent } from "@/data/config";

type Scope = { you_pay: string[]; not_included: string[] };

// What a price covers beyond its includes list: costs paid to providers, exclusions and the support window.
export function ScopeDetails({ scope, retainer }: { scope: Scope; retainer?: boolean }) {
  return <dl className="space-y-5 text-sm leading-relaxed">
    <div><dt className="font-medium">You pay providers directly</dt><dd><ul className="mt-2 space-y-1 text-text-muted">{scope.you_pay.map(item => <li key={item}>{item}</li>)}</ul></dd></div>
    <div><dt className="font-medium">Not included</dt><dd><ul className="mt-2 space-y-1 text-text-muted">{scope.not_included.map(item => <li key={item}>{item}</li>)}</ul></dd></div>
    {!retainer && <div><dt className="font-medium">After launch</dt><dd className="mt-2 text-text-muted">Bug fixes for {servicesContent.support_window}. After that, changes are quoted, or you can hire me monthly.</dd></div>}
  </dl>;
}
