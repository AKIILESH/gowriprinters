import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/Services";
import { IndustriesSection } from "@/components/sections/Industries";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <IndustriesSection />
      <WhyUs />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
