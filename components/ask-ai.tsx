"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

// Prefill URLs each assistant accepts. Gemini has no official one, so its link also copies the prompt to paste.
const assistants = [
  { name: "ChatGPT", url: (q: string) => `https://chatgpt.com/?hints=search&q=${q}` },
  { name: "Claude", url: (q: string) => `https://claude.ai/new?q=${q}` },
  { name: "Gemini", url: (q: string) => `https://gemini.google.com/app?q=${q}`, copy: true },
  { name: "Perplexity", url: (q: string) => `https://www.perplexity.ai/search/new?q=${q}` },
];

export function AskAi({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false);
  const query = encodeURIComponent(prompt);
  return <div>
    <p className="text-sm font-semibold mb-3">Ask AI about me</p>
    <ul className="flex flex-wrap gap-2">{assistants.map(assistant => <li key={assistant.name}>
      <a href={assistant.url(query)} target="_blank" rel="noopener noreferrer" className="tag hover:text-accent transition-colors items-center gap-1"
        onClick={assistant.copy ? () => navigator.clipboard?.writeText(prompt).then(() => setCopied(true), () => {}) : undefined}>
        {assistant.name}<ArrowUpRight size={12} aria-hidden="true" />
      </a>
    </li>)}</ul>
    <p className="text-xs text-text-muted mt-3" aria-live="polite">{copied ? "Prompt copied. Paste it into Gemini if it isn't filled in." : "Opens your AI assistant with a summary of my work."}</p>
  </div>;
}
