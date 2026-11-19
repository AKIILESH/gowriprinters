import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CTA } from "@/components/sections/CTA";

const faqs = [
  {
    q: "What is the minimum order quantity for each service?",
    a: "We have flexible minimums: single-unit proofing and small batches (from 1 unit) on our high-resolution digital presses, and commercial volume runs typically starting at 100 to 250 units on our multi-unit Heidelberg offset presses. Contact our estimators for custom volume tiers.",
  },
  {
    q: "How fast can you deliver urgent print orders?",
    a: "Same-day express turnaround is available for posters, flyers, and select digital items. Standard commercial runs (books, brochures, packaging) typically dispatch within 2 to 5 business days across Tamil Nadu and all of India.",
  },
  {
    q: "Can you review my artwork before printing?",
    a: "Yes. Every submitted file undergoes a complimentary pre-flight check by our in-house prepress team. We verify bleed margins, image resolution (300 DPI+), CMYK color spaces, and fonts to ensure flawless press results.",
  },
  {
    q: "Do you supply physical proofs before full volume production?",
    a: "Absolutely. We provide GMG-calibrated digital color contract proofs and unprinted structural dummy mockups (for packaging and books) so you can review paper feel, folds, and color before the presses roll.",
  },
  {
    q: "What file formats should I submit?",
    a: "We accept press-ready PDF (PDF/X-1a preferred), Adobe Illustrator (.ai), InDesign (.indd), Photoshop (.psd), and vector EPS files. Our studio team can also help convert or optimize files if required.",
  },
];

export function ServicesPage() {
  return (
    <div className="w-full bg-white font-sans">
      {/* ========================================================
          1. SERVICES HEADER
          ======================================================== */}
      <section className="w-full bg-[#F7F8FA] border-b border-[#E5E8EF] py-12 lg:py-16">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#1D397F] uppercase mb-3">
              OUR SERVICES
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-[800] tracking-tight text-[#111318] leading-[1.12]">
              Everything You Need<br className="hidden sm:inline" />{" "}
              <span className="text-[#1D397F]">Printed Perfectly.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. 3-COLUMN EDITORIAL SERVICE SHOWCASE GRID
          ======================================================== */}
      <section className="py-16 lg:py-24 border-b border-[#E5E8EF]">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                priority={index < 3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. FREQUENTLY ASKED QUESTIONS (Accordion)
          ======================================================== */}
      <section className="py-16 lg:py-20 bg-[#F7F8FA] border-b border-[#E5E8EF]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-center mb-10">
            <p className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#1D397F] uppercase mb-2">
              HELP & GUIDANCE
            </p>
            <h2 className="text-2xl sm:text-3xl font-[800] tracking-tight text-[#111318]">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#626978]">
              Common questions about specs, files, materials, and turnaround.
            </p>
          </div>

          <Accordion className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-[#E5E8EF] bg-white px-5 transition-colors"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-bold text-[#111318] py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-[#626978] pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ========================================================
          4. FINAL CTA
          ======================================================== */}
      <CTA />
    </div>
  );
}
