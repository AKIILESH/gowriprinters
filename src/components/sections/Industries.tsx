import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShop,
  faBuilding,
  faGraduationCap,
  faCalendarCheck,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IndustryItem {
  number: string;
  name: string;
  description: string;
  icon: IconDefinition;
  href: string;
}

const industries: IndustryItem[] = [
  {
    number: "01",
    name: "Retail & FMCG Brands",
    description:
      "Custom product packaging cartons, point-of-sale labels, hangtags, and retail-ready boxes crafted for shelf impact.",
    icon: faShop,
    href: "/services",
  },
  {
    number: "02",
    name: "Corporate & Financial Enterprises",
    description:
      "Annual reports, executive stationery, presentation folders, corporate decks, and high-end brand identity suites.",
    icon: faBuilding,
    href: "/services",
  },
  {
    number: "03",
    name: "Educational Institutions",
    description:
      "College prospectuses, degree certificates, academic textbooks, institutional diaries, and examination printing.",
    icon: faGraduationCap,
    href: "/services",
  },
  {
    number: "04",
    name: "Events, Expos & Hospitality",
    description:
      "Large-format exhibition banners, conference collateral, premium menus, invitations, and promotional signage.",
    icon: faCalendarCheck,
    href: "/services",
  },
  {
    number: "05",
    name: "Industrial & Manufacturing",
    description:
      "Technical product manuals, machinery schematics, safety decals, barcode labels, and heavy-duty corrugated packaging.",
    icon: faBriefcase,
    href: "/services",
  },
];

export function IndustriesSection() {
  return (
    <section className="w-full bg-[#F7F8FA] py-20 lg:py-28 border-b border-[#E5E8EF]">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8">

        {/* =========================================
            Section Header
            ========================================= */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#1D397F] uppercase mb-4">
            INDUSTRIES WE SERVE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-[#111318] leading-[1.16]">
            Tailored Print Solutions<br className="hidden sm:inline" /> for Every Sector.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#626978]">
            From high-volume commercial packaging for retail brands to bespoke publications for institutions, our presses are configured to meet rigorous industry-specific standards.
          </p>
        </div>

        {/* =========================================
            Industries Grid
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {industries.map((item) => (
            <div
              key={item.number}
              className="group relative flex flex-col justify-between border-b border-[#E5E8EF] pb-8 transition-colors duration-200 hover:border-[#D9A52E]"
            >
              {/* Gold baseline accent on hover */}
              <div className="absolute -bottom-[1px] left-0 h-[2px] w-0 bg-[#D9A52E] transition-all duration-300 group-hover:w-full" />

              <div>
                {/* Meta: Gold Numeral & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold tracking-wider text-[#D9A52E]">
                    {item.number}
                  </span>
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="h-4 w-4 text-[#1D397F] opacity-75 transition-opacity duration-200 group-hover:opacity-100"
                  />
                </div>

                {/* Industry Title */}
                <h3 className="text-lg font-bold tracking-tight text-[#111318] transition-colors duration-200 group-hover:text-[#1D397F]">
                  {item.name}
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
