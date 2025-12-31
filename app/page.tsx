import { Hero } from "@/components/sections/hero";
import { TechTicker } from "@/components/sections/tech-ticker";
import { Skills } from "@/components/sections/skills";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TechTicker />
      <Skills />
      <FeaturedWork />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
