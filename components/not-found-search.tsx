"use client";

import { useCallback, useId, useMemo, useRef, useState, useSyncExternalStore, type KeyboardEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SearchEntry } from "@/lib/site-search";

const stopWords = new Set(["the", "and", "for", "with", "page", "www", "html", "php", "index"]);
const suggestions = ["AI chatbot", "Shopify", "Automation", "Computer vision", "Website"];

const normalize = (text: string) => text.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, " ").trim();
const tokenize = (text: string) => normalize(text).split(" ").filter(token => token.length > 1 && !stopWords.has(token));

// Edit distance with an early exit once every cell in a row exceeds the allowed typo budget.
function withinDistance(a: string, b: string, limit: number) {
  if (Math.abs(a.length - b.length) > limit) return false;
  let previous = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i++) {
    const current = [i];
    for (let j = 1; j <= b.length; j++) current[j] = Math.min(previous[j] + 1, current[j - 1] + 1, previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    if (Math.min(...current) > limit) return false;
    previous = current;
  }
  return previous[b.length] <= limit;
}

// "/projects/swiming-tracking.html" -> "swiming tracking"
function queryFromPath(path: string) {
  const segment = path.split("/").filter(Boolean).pop() ?? "";
  try { return tokenize(decodeURIComponent(segment).replace(/\.[a-z]+$/i, "")).join(" "); } catch { return ""; }
}

const subscribe = () => () => {};

export function NotFoundSearch({ entries }: { entries: SearchEntry[] }) {
  const router = useRouter();
  const inputId = useId();
  const listRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  // The 404 is prerendered once, so the requested path is only known after hydration.
  const missingPath = useSyncExternalStore(subscribe, () => window.location.pathname, () => "");
  const [typed, setTyped] = useState<string | null>(null);

  const indexed = useMemo(() => entries.map(entry => {
    const haystack = normalize(`${entry.title} ${entry.kind} ${entry.description} ${entry.keywords}`);
    return { entry, title: normalize(entry.title), haystack, words: haystack.split(" ") };
  }), [entries]);

  const search = useCallback((query: string) => {
    const tokens = tokenize(query);
    if (!tokens.length) return [];
    return indexed.map(({ entry, title, haystack, words }, order) => {
      let score = 0, matched = 0;
      for (const token of tokens) {
        const limit = token.length >= 7 ? 2 : 1;
        if (title.includes(token)) score += 3;
        else if (haystack.includes(token)) score += 1;
        else if (token.length >= 4 && words.some(word => withinDistance(word, token, limit))) score += 1;
        else continue;
        matched++;
      }
      return { entry, score: matched >= Math.ceil(tokens.length / 2) ? score : 0, order };
    }).filter(result => result.score > 0).sort((a, b) => b.score - a.score || a.order - b.order).slice(0, 8).map(result => result.entry);
  }, [indexed]);

  const fromPath = queryFromPath(missingPath);
  const query = typed ?? (search(fromPath).length ? fromPath : "");
  const results = useMemo(() => search(query), [search, query]);
  const browsing = !tokenize(query).length;
  const shown = browsing ? entries.filter(entry => entry.kind === "Page" && entry.href !== "/privacy") : results;

  const focusResult = (index: number) => {
    const links = listRef.current?.querySelectorAll<HTMLAnchorElement>("a");
    if (!links?.length) return;
    if (index < 0) return inputRef.current?.focus();
    links[Math.min(index, links.length - 1)].focus();
  };
  const onInputKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") { event.preventDefault(); focusResult(0); }
    if (event.key === "Escape" && query) { event.preventDefault(); setTyped(""); }
  };
  const onListKey = (event: KeyboardEvent<HTMLUListElement>) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const links = Array.from(listRef.current?.querySelectorAll("a") ?? []);
    const index = links.indexOf(document.activeElement as HTMLAnchorElement);
    focusResult(index + (event.key === "ArrowDown" ? 1 : -1));
  };

  return <section aria-labelledby={`${inputId}-heading`}>
    <form role="search" onSubmit={event => { event.preventDefault(); if (results[0]) router.push(results[0].href); }} className="max-w-3xl">
      <label htmlFor={inputId} className="sr-only">Search the site</label>
      <div className="relative">
        <Search size={19} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" aria-hidden="true" />
        <input ref={inputRef} id={inputId} type="text" inputMode="search" enterKeyHint="go" autoComplete="off" spellCheck={false} placeholder="Search case studies, services, pages…" value={query} onChange={event => setTyped(event.target.value)} onKeyDown={onInputKey} className="field min-h-[56px] pl-12 pr-14 text-lg" />
        {query && <button type="button" aria-label="Clear search" onClick={() => { setTyped(""); inputRef.current?.focus(); }} className="button button-ghost button-icon absolute right-1.5 top-1/2 -translate-y-1/2"><X size={18} /></button>}
      </div>
      {missingPath && <p className="mt-4 font-mono text-xs text-text-muted break-all">Requested <span className="text-text-main">{missingPath}</span></p>}
    </form>

    <div className="mt-12 flex items-baseline justify-between gap-5 border-b border-border-subtle pb-4">
      <h2 id={`${inputId}-heading`} className="text-sm font-medium" aria-live="polite">{browsing ? "Popular destinations" : `${results.length} ${results.length === 1 ? "match" : "matches"} for “${query.trim()}”`}</h2>
      {!browsing && results.length > 0 && <p className="hidden md:flex items-center gap-2 font-mono text-xs text-text-muted"><kbd className="tag">↵</kbd>opens the top match</p>}
    </div>

    {shown.length ? <ul ref={listRef} onKeyDown={onListKey}>{shown.map(entry => <li key={entry.href}>
      <Link prefetch={false} href={entry.href} className="group flex items-start justify-between gap-5 py-7 border-b border-border-subtle">
        <div className="min-w-0">
          <p className="font-mono text-xs text-accent mb-3">{entry.kind}</p>
          <h3 className="text-xl md:text-2xl font-medium tracking-[-.04em] group-hover:text-accent transition-colors">{entry.title}</h3>
          {entry.description && <p className="text-text-muted text-sm leading-relaxed mt-3 max-w-2xl">{entry.description}</p>}
        </div>
        <ArrowUpRight size={22} className="shrink-0 mt-7 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </li>)}</ul>
      : <div className="mt-8 bg-bg-surface-1 rounded-2xl p-8">
        <p className="text-lg mb-2">Nothing matches that yet.</p>
        <p className="text-text-muted text-sm mb-6">Try a broader word, or start from one of these.</p>
        <div className="flex flex-wrap gap-2">{suggestions.map(item => <Button key={item} variant="secondary" onClick={() => { setTyped(item); inputRef.current?.focus(); }}>{item}</Button>)}</div>
      </div>}
  </section>;
}
