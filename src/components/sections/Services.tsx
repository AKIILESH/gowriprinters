import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faFileLines,
  faBook,
  faBoxOpen,
  faIdCard,
  faNewspaper,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ServiceItem {
  number: string;
  icon: IconDefinition;
  title: string;
  description: string;
  href: string;
}

const services: ServiceItem[] = [
  {
    number: "01",
    icon: faImage,
    title: "Poster Printing",
    description:
      "Vibrant, high-resolution posters in all sizes. Perfect for events, promotions, and wall art. Available in matte, glossy, and canvas finishes.",
    href: "/services#posters",
  },
  {
    number: "02",
    icon: faFileLines,
    title: "Flyers & Leaflets",
    description:
      "Cost-effective flyers and leaflets for maximum outreach. Full-colour digital and offset printing with quick turnaround times.",
    href: "/services#flyers",
  },
  {
    number: "03",
    icon: faBook,
    title: "Book Printing",
    description:
      "Complete book publishing solutions — from paperback novels to hardbound academic texts. Perfect binding, saddle-stitch, and case binding options.",
    href: "/services#books",
  },
  {
    number: "04",
    icon: faBoxOpen,
    title: "Packaging Materials",
    description:
      "Custom corrugated boxes, product cartons, labels, and food-safe packaging. Designed to protect and present your products beautifully.",
    href: "/services#packaging",
  },
  {
    number: "05",
    icon: faIdCard,
    title: "Business Cards",
    description:
      "Make a lasting first impression with premium business cards. Options include embossed, foil-stamped, spot UV, and eco-friendly recycled stock.",
    href: "/services#stationery",
  },
  {
    number: "06",
    icon: faNewspaper,
    title: "Brochures & Catalogues",
    description:
      "Multi-page brochures and catalogues that showcase your brand. Bi-fold, tri-fold, and custom folding options available.",
    href: "/services#brochures",
  },
];

export function ServicesSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-28 border-b border-[#E5E8EF]">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">

          {/* =========================================
              LEFT COLUMN — Section Introduction
              ========================================= */}
          <div className="w-full lg:w-[34%] shrink-0 lg:sticky lg:top-32">
            <p className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#1D397F] uppercase mb-4">
              WHAT WE OFFER
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-[#111318] leading-[1.16]">
              Comprehensive Print Services
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#626978]">
              From concept to delivery, we handle every aspect of your printing
              needs with industry-leading quality and attention to detail.
            </p>
            <div className="mt-8">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1D397F] hover:text-[#142C68] transition-colors"
              >
                <span>Explore all services</span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#1D397F]"
                />
              </Link>
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN — Editorial Service Catalogue
              ========================================= */}
          <div className="w-full lg:w-[66%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
              {services.map((service) => (
                <div
                  key={service.number}
                  className="group relative flex flex-col justify-between border-b border-[#E5E8EF] pb-8 transition-colors duration-200 hover:border-[#D9A52E]"
                >
                  {/* Subtle top indicator bar on hover */}
                  <div className="absolute -bottom-[1px] left-0 h-[2px] w-0 bg-[#D9A52E] transition-all duration-300 group-hover:w-full" />

                  <div>
                    {/* Header: Number & Minimal Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-semibold tracking-wider text-[#626978] transition-colors duration-200 group-hover:text-[#D9A52E]">
                        {service.number}
                      </span>
                      <FontAwesomeIcon
                        icon={service.icon}
                        className="h-4 w-4 text-[#1D397F] opacity-75 transition-opacity duration-200 group-hover:opacity-100"
                      />
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl font-bold tracking-tight text-[#111318] transition-colors duration-200 group-hover:text-[#1D397F]">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2.5 text-sm leading-relaxed text-[#626978]">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
