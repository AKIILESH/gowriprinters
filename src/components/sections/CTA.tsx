import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import printShowcaseImg from "@/assets/print-showcase.jpg";

export function CTA() {
  return (
    <section className="w-full bg-[#F7F8FA] py-20 lg:py-28 border-t border-[#E5E8EF]">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* =========================================
              LEFT COLUMN — Editorial Content & Actions
              ========================================= */}
          <div className="w-full lg:w-[48%] flex flex-col items-start text-left">
            {/* Eyebrow */}
            <p className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#1D397F] uppercase mb-4">
              LET'S WORK TOGETHER
            </p>

            {/* Headline */}
            <h2 className="font-heading text-[clamp(1.75rem,4.5vw,3.25rem)] font-bold text-[#111318] leading-[1.14] tracking-tight">
              Your Next Great Print<br className="hidden sm:inline" /> Project Starts Here.
            </h2>

            {/* Supporting Text */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#626978] max-w-lg">
              From business cards and brochures to large-scale commercial printing, let's bring your ideas to life.
            </p>

            {/* Actions: Primary & Secondary */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              {/* Primary Button */}
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-lg bg-[#1D397F] px-7 text-sm sm:text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#142C68]"
              >
                <span>Request a Free Quote</span>
                <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
              </Link>

              {/* Secondary Action: Call */}
              <a
                href="tel:+919843009219"
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-lg border border-[#E5E8EF] bg-white px-6 text-sm sm:text-base font-semibold text-[#111318] transition-colors hover:border-[#1D397F] hover:text-[#1D397F]"
              >
                <FontAwesomeIcon icon={faPhone} className="h-3.5 w-3.5 text-[#D9A52E]" />
                <span>Call +91 98430 09219</span>
              </a>
            </div>

            {/* Location Metadata */}
            <div className="mt-6 flex items-center gap-2 text-xs font-medium text-[#626978]">
              <FontAwesomeIcon icon={faLocationDot} className="h-3.5 w-3.5 text-[#1D397F]" />
              <span>Peelamedu Pudur, Coimbatore</span>
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN — Authentic Studio Still Life Photography
              ========================================= */}
          <div className="w-full lg:w-[52%] flex items-center justify-center">
            <div className="w-full max-w-[600px] overflow-hidden rounded-2xl border border-[#E5E8EF] bg-white shadow-[0_16px_40px_rgba(20,35,70,0.06)]">
              <img
                src={printShowcaseImg}
                alt="Premium commercial print materials by Gowri Printers: casebound hardcover books, catalogues, brochures, foil-embossed business cards, and custom packaging"
                className="w-full h-auto object-cover aspect-[4/3] block"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
