import { Hero } from "@/components/sections/hero";
// import { TechTicker } from "@/components/sections/tech-ticker";
import { Skills } from "@/components/sections/skills";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Stats } from "@/components/sections/stats";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/data/config";
import { pageMetadata, personJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({ title: siteConfig.home_title, description: siteConfig.home_description, path: "/", absoluteTitle: true });

export default function Home() {
  return <><JsonLd data={[personJsonLd, websiteJsonLd]} /><Hero /><FeaturedWork /><Stats /><Services /><Skills /><Testimonials /><CTA /></>;
}
