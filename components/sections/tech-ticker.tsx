import { homePageContent } from "@/data/config";

export function TechTicker() {
  return <section className="site-shell pb-20 md:pb-24" aria-label="Technologies">
    <div role="list" aria-label="Technical stack" tabIndex={0} className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory">{homePageContent.tech_ticker.map(tech => <span role="listitem" key={tech} className="tag snap-start shrink-0 !px-4 !py-3 !text-sm">{tech}</span>)}</div>
  </section>;
}
