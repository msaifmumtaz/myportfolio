import { homePageContent } from "@/data/config";
import { Reveal } from "@/components/ui/reveal";

export function Stats() {
  return <section className="bg-bg-surface-1 py-10 md:py-14" aria-label="Experience and delivery">
    <Reveal className="site-shell"><dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      {homePageContent.stats.map(stat => <div key={stat.label} className="flex sm:block items-baseline justify-between gap-4"><dt className="text-sm text-text-muted sm:mt-2 sm:order-2">{stat.label}</dt><dd className="text-4xl md:text-5xl font-medium tracking-[-.06em] text-accent sm:mt-3">{stat.value}</dd></div>)}
    </dl></Reveal>
  </section>;
}
