import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShop,
  faBuilding,
  faGraduationCap,
  faCalendarCheck,
  faBriefcase,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import servicePackagingImg from "@/assets/service-packaging.jpg";
import serviceStationeryImg from "@/assets/service-stationery.jpg";
import serviceBooksImg from "@/assets/service-books.jpg";
import servicePostersImg from "@/assets/service-posters.jpg";
import serviceBrochuresImg from "@/assets/service-brochures.jpg";

interface IndustryData {
  id: string;
  number: string;
  shortName: string;
  fullName: string;
  tagline: string;
  description: string;
  icon: IconDefinition;
  image: string;
  deliverables: string[];
}

const industriesList: IndustryData[] = [
  {
    id: "retail-fmcg",
    number: "01",
    shortName: "Retail & FMCG",
    fullName: "Retail & FMCG Brands",
    tagline: "High-Impact Packaging & Shelf Presence",
    description:
      "Elevate your retail merchandise with bespoke product folding cartons, point-of-sale display trays, product hangtags, tamper-evident labels, and retail-ready packaging engineered for maximum shelf impact, structural strength, and consumer trust.",
    icon: faShop,
    image: servicePackagingImg,
    deliverables: [
      "Custom Folding Cartons & Sleeves",
      "Food-Grade & FSSAI-Compliant Packaging",
      "Tamper-Evident Product Labels & Stickers",
      "Counter Display Units (CDUs)",
      "Retail Hangtags & Header Cards",
      "Eco-Friendly Virgin Kraft Shippers",
    ],
  },
  {
    id: "corporate-finance",
    number: "02",
    shortName: "Corporate & Finance",
    fullName: "Corporate & Financial Enterprises",
    tagline: "Executive Stationery & Brand Governance",
    description:
      "Establish authority and prestige across all institutional touchpoints. We manufacture annual financial reports, executive watermarked letterheads, foiled presentation folders, corporate identity suites, and investor collateral with 100% color consistency.",
    icon: faBuilding,
    image: serviceStationeryImg,
    deliverables: [
      "Annual Financial Reports & Accounts",
      "Watermarked Executive Letterheads",
      "Pocket Presentation Folders with Card Slits",
      "Corporate Diaries & Leatherette Notebooks",
      "Investor Relations Collateral & Decks",
      "Gilded & Embossed Business Cards",
    ],
  },
  {
    id: "education",
    number: "03",
    shortName: "Education & Academia",
    fullName: "Educational Institutions",
    tagline: "Prospectuses, Academic Texts & Certificates",
    description:
      "Trusted by universities, colleges, and schools across India. We produce high-volume examination papers, institutional prospectuses, hardbound academic volumes, student diaries, and anti-counterfeit degree certificates.",
    icon: faGraduationCap,
    image: serviceBooksImg,
    deliverables: [
      "College Prospectuses & Course Guides",
      "Curriculum Textbooks & Lab Manuals",
      "Security-Encoded Degree Certificates",
      "Institutional Planners & Student Diaries",
      "Academic Journals & Conference Proceedings",
      "Annual Milestone Souvenirs",
    ],
  },
  {
    id: "events-hospitality",
    number: "04",
    shortName: "Events & Hospitality",
    fullName: "Events, Expos & Hospitality",
    tagline: "Atmospheric Signage, Menus & Badges",
    description:
      "Command attention at trade expos, conferences, luxury hotels, and private galas. From large-format seamless exhibition backdrops and directional signage to waterproof luxury restaurant menus and foil-stamped invitation suites.",
    icon: faCalendarCheck,
    image: servicePostersImg,
    deliverables: [
      "Large-Format Exhibition Backdrops & Banners",
      "Stain-Resistant Luxury Restaurant Menus",
      "Foil-Stamped Invitations & Gala Passes",
      "Lanyard Event Badges & Delegate Kits",
      "Table Talkers & Metallic Foil Tent Cards",
      "Directional & Wayfinding Signage",
    ],
  },
  {
    id: "industrial-manufacturing",
    number: "05",
    shortName: "Industrial & Manufacturing",
    fullName: "Industrial & Manufacturing",
    tagline: "Durable Schematics, Decals & Corrugated Packs",
    description:
      "Engineered for workshop floors, machinery assemblies, and global freight. We produce oil-resistant technical operation manuals, serialized machinery decals, barcode labels, and heavy-duty corrugated shipping cartons built for harsh environments.",
    icon: faBriefcase,
    image: serviceBrochuresImg,
    deliverables: [
      "Technical Machinery User Manuals",
      "Industrial Rating Plate & Asset Decals",
      "Chemical & Oil-Resistant Safety Stickers",
      "High-Density Barcode & QR Serial Labels",
      "Heavy-Duty Corrugated Master Shippers",
      "Wiring Schematics & Parts Catalogues",
    ],
  },
];

export function IndustriesSection() {
  const [activeTab, setActiveTab] = useState<string>(industriesList[0].id);

  const activeIndustry =
    industriesList.find((item) => item.id === activeTab) || industriesList[0];

  return (
    <section id="industries" className="w-full bg-[#F7F8FA] py-20 lg:py-28 border-b border-[#E5E8EF] font-sans">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8">

        {/* =========================================
            Section Header
            ========================================= */}
        <div className="max-w-3xl mb-10 lg:mb-14">
          <p className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#1D397F] uppercase mb-4">
            INDUSTRIES WE SERVE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-[800] tracking-tight text-[#111318] leading-[1.14]">
            Tailored Print Solutions<br className="hidden sm:inline" /> for Every Sector.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#626978]">
            From high-volume commercial packaging for FMCG brands to bespoke publications for institutions, our presses are configured to meet rigorous industry-specific standards.
          </p>
        </div>

        {/* =========================================
            Industry Selection Bar
            ========================================= */}
        <div className="w-full overflow-x-auto pb-2 mb-8 sm:mb-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div
            role="tablist"
            aria-label="Industries served"
            className="inline-flex min-w-full sm:min-w-0 items-center gap-1.5 sm:gap-2 rounded-2xl bg-white p-1.5 sm:p-2 border border-[#E5E8EF] shadow-sm"
          >
            {industriesList.map((ind) => {
              const isActive = ind.id === activeIndustry.id;
              return (
                <button
                  key={ind.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${ind.id}`}
                  id={`tab-${ind.id}`}
                  onClick={() => setActiveTab(ind.id)}
                  className={`flex items-center gap-2.5 whitespace-nowrap rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#1D397F] text-white shadow-sm"
                      : "text-[#626978] hover:text-[#111318] hover:bg-[#F7F8FA]"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={ind.icon}
                    className={`h-3.5 w-3.5 ${
                      isActive ? "text-[#D9A52E]" : "text-[#1D397F] opacity-75"
                    }`}
                  />
                  <span>{ind.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================
            Dynamic Industry Showcase Content
            ========================================= */}
        <div
          id={`panel-${activeIndustry.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeIndustry.id}`}
          className="rounded-3xl border border-[#E5E8EF] bg-white p-6 sm:p-10 lg:p-12 shadow-[0_12px_36px_rgba(20,35,70,0.05)] transition-all duration-300"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">

            {/* Left Column: Details & Capabilities */}
            <div className="w-full lg:w-[54%] flex flex-col items-start text-left">
              {/* Meta index */}
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs font-semibold tracking-wider text-[#D9A52E]">
                  Sector {activeIndustry.number}
                </span>
                <span className="h-1 w-1 rounded-full bg-[#E5E8EF]" />
                <span className="text-xs font-semibold text-[#626978] uppercase tracking-wider">
                  {activeIndustry.fullName}
                </span>
              </div>

              {/* Tagline */}
              <h3 className="text-2xl sm:text-3xl font-[800] tracking-tight text-[#111318] leading-tight">
                {activeIndustry.tagline}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#626978]">
                {activeIndustry.description}
              </p>

              {/* Key Deliverables Bullet Grid */}
              <div className="mt-6 w-full pt-6 border-t border-[#E5E8EF]">
                <p className="text-xs font-bold uppercase tracking-wider text-[#111318] mb-3">
                  Typical Deliverables & Products
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeIndustry.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#111318]">
                      <FontAwesomeIcon icon={faCheck} className="h-3 w-3 text-[#1D397F] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: High Quality Photography Visual */}
            <div className="w-full lg:w-[46%] flex items-center justify-center">
              <div className="relative w-full max-w-[540px] overflow-hidden rounded-2xl border border-[#E5E8EF] bg-[#F7F8FA] shadow-[0_16px_40px_rgba(20,35,70,0.06)]">
                <img
                  src={activeIndustry.image}
                  alt={activeIndustry.fullName}
                  className="w-full h-auto object-cover aspect-[4/3] block transition-opacity duration-300"
                />
                <div className="flex items-center justify-between border-t border-[#E5E8EF] bg-white px-5 py-3 text-xs text-[#626978]">
                  <span className="font-semibold text-[#111318]">
                    {activeIndustry.shortName} Production
                  </span>
                  <span className="hidden sm:inline font-normal">Commercial Standard</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
