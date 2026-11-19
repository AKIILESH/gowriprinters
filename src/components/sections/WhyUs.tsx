import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faTruck,
  faPalette,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Advantage {
  number: string;
  icon: IconDefinition;
  title: string;
  description: string;
}

const advantages: Advantage[] = [
  {
    number: "01",
    icon: faMedal,
    title: "Premium Quality",
    description:
      "State-of-the-art Heidelberg presses ensure razor-sharp clarity and vivid colours on every print run.",
  },
  {
    number: "02",
    icon: faTruck,
    title: "Fast Turnaround",
    description:
      "Same-day printing for urgent orders. Standard orders delivered within 2–3 business days across India.",
  },
  {
    number: "03",
    icon: faPalette,
    title: "Custom Design",
    description:
      "In-house design team to help you create stunning layouts, or bring your own artwork — we handle both.",
  },
  {
    number: "04",
    icon: faHandshake,
    title: "Competitive Pricing",
    description:
      "Transparent pricing with no hidden costs. Volume discounts for bulk orders to maximize your budget.",
  },
];

export function WhyUs() {
  return (
    <section className="w-full bg-white py-20 lg:py-24 border-b border-[#E5E8EF]">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8">
        
        {/* =========================================
            Section Header
            ========================================= */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#1D397F] uppercase mb-4">
            WHY GOWRI PRINTERS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-[#111318] leading-[1.16]">
            We Don't Just Print —<br className="hidden sm:inline" /> We Perfect Every Detail.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#626978]">
            Three decades of expertise, modern equipment, and a passion for craftsmanship set us apart from the rest.
          </p>
        </div>

        {/* =========================================
            4-Column Advantages Grid
            ========================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {advantages.map((item) => (
            <div
              key={item.number}
              className="group relative flex flex-col justify-between border-b border-[#E5E8EF] pb-8 transition-colors duration-200 hover:border-[#D9A52E]"
            >
              {/* Gold baseline accent on hover */}
              <div className="absolute -bottom-[1px] left-0 h-[2px] w-0 bg-[#D9A52E] transition-all duration-300 group-hover:w-full" />

              <div>
                {/* Meta: Gold Numeral & Elegant Minimal Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold tracking-wider text-[#D9A52E]">
                    {item.number}
                  </span>
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="h-4 w-4 text-[#1D397F] opacity-80 transition-opacity duration-200 group-hover:opacity-100"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold tracking-tight text-[#111318] transition-colors duration-200 group-hover:text-[#1D397F]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-sm leading-relaxed text-[#626978]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
