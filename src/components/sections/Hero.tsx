import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import printShowcaseImg from "@/assets/print-showcase.jpg";
import clientLogoImg from "@/assets/client-logo.jpg";
import { LogoLoop, type LogoItem } from "@/components/ui/LogoLoop";

const trustedLogos: LogoItem[] = [
  {
    title: "Apex Retail",
    node: (
      <div className="flex items-center gap-2.5 font-bold tracking-tight text-[#626978] transition-colors duration-200 hover:text-[#1D397F]">
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <polygon points="12,2 22,20 2,20" />
        </svg>
        <span className="text-sm sm:text-base tracking-wider uppercase font-bold">APEX RETAIL</span>
      </div>
    ),
  },
  {
    title: "Partner Brand",
    src: clientLogoImg,
    alt: "Partner Brand Logo",
  },
  {
    title: "Cambridge Press",
    node: (
      <div className="flex items-center gap-2.5 font-bold tracking-tight text-[#626978] transition-colors duration-200 hover:text-[#1D397F]">
        <svg className="h-6 w-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
        <span className="text-sm sm:text-base tracking-wider uppercase font-bold">CAMBRIDGE PRESS</span>
      </div>
    ),
  },
  {
    title: "Titan Global Logistics",
    node: (
      <div className="flex items-center gap-2.5 font-bold tracking-tight text-[#626978] transition-colors duration-200 hover:text-[#1D397F]">
        <svg className="h-6 w-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M3 12h18M12 3v18" />
        </svg>
        <span className="text-sm sm:text-base tracking-wider uppercase font-bold">TITAN GLOBAL</span>
      </div>
    ),
  },
  {
    title: "Heritage Foods",
    node: (
      <div className="flex items-center gap-2.5 font-bold tracking-tight text-[#626978] transition-colors duration-200 hover:text-[#1D397F]">
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
        <span className="text-sm sm:text-base tracking-wider uppercase font-bold">HERITAGE FOODS</span>
      </div>
    ),
  },
  {
    title: "Skyline Capital",
    node: (
      <div className="flex items-center gap-2.5 font-bold tracking-tight text-[#626978] transition-colors duration-200 hover:text-[#1D397F]">
        <svg className="h-6 w-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M4 20h16M6 16l6-10 6 10" />
        </svg>
        <span className="text-sm sm:text-base tracking-wider uppercase font-bold">SKYLINE CAPITAL</span>
      </div>
    ),
  },
  {
    title: "Nexus Media Group",
    node: (
      <div className="flex items-center gap-2.5 font-bold tracking-tight text-[#626978] transition-colors duration-200 hover:text-[#1D397F]">
        <svg className="h-6 w-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15z" />
        </svg>
        <span className="text-sm sm:text-base tracking-wider uppercase font-bold">NEXUS MEDIA</span>
      </div>
    ),
  },
  {
    title: "Aura Hotels & Resorts",
    node: (
      <div className="flex items-center gap-2.5 font-bold tracking-tight text-[#626978] transition-colors duration-200 hover:text-[#1D397F]">
        <svg className="h-6 w-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
        <span className="text-sm sm:text-base tracking-wider uppercase font-bold">AURA HOTELS</span>
      </div>
    ),
  },
  {
    title: "Zenith Industrial",
    node: (
      <div className="flex items-center gap-2.5 font-bold tracking-tight text-[#626978] transition-colors duration-200 hover:text-[#1D397F]">
        <svg className="h-6 w-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
          <polygon points="12,2 22,8.5 22,17.5 12,22 2,17.5 2,8.5" />
          <line x1="12" y1="12" x2="12" y2="22" />
        </svg>
        <span className="text-sm sm:text-base tracking-wider uppercase font-bold">ZENITH INDUSTRIAL</span>
      </div>
    ),
  },
];

export function Hero() {
  return (
    <div className="w-full bg-white font-sans">
      {/* ========================================================
          HERO SECTION — 2-Column Asymmetrical Composition
          ======================================================== */}
      <section className="relative overflow-hidden bg-white">
        {/* Main Content Container (max-w-[1380px], centered) */}
        <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 pt-8 pb-14 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10">

            {/* =========================================
                LEFT COLUMN (48%)
                ========================================= */}
            <div className="w-full lg:w-[48%] flex flex-col items-start text-left">
              {/* Eyebrow */}
              <p className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#1D397F] uppercase mb-4 sm:mb-5">
                PRINT · PACK · BRAND
              </p>

              {/* Headline */}
              <h1 className="text-[clamp(40px,5vw,72px)] sm:text-[clamp(44px,5vw,72px)] font-[800] tracking-[-0.035em] text-[#111318] leading-[1.05]">
                Premium Printing
                <br className="hidden sm:inline" />{" "}
                Solutions for{" "}
                <br className="hidden lg:inline" />
                <span className="bg-gradient-to-r from-[#1D397F] via-[#142C68] to-[#D9A52E] bg-clip-text text-transparent inline-block pb-1">
                  Every Need.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 sm:mt-7 text-base sm:text-lg leading-[1.65] text-[#626978] max-w-xl font-normal">
                From stunning posters and eye-catching flyers to beautifully bound
                books and custom packaging — Gowri Printers brings your vision to
                life with precision and care.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                <Link
                  to="/services"
                  className="inline-flex h-12 sm:h-13 items-center justify-center gap-2.5 rounded-lg bg-[#1D397F] px-7 text-sm sm:text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#142C68] hover:shadow-md"
                >
                  <span>Explore Services</span>
                  <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex h-12 sm:h-13 items-center justify-center rounded-lg border border-[#1D397F] bg-white px-7 text-sm sm:text-base font-semibold text-[#1D397F] transition-all duration-200 hover:bg-[#F7F8FA]"
                >
                  <span>Request a Quote</span>
                </Link>
              </div>
            </div>

            {/* =========================================
                RIGHT COLUMN (52%)
                Authentic Commercial Print Product Showcase
                ========================================= */}
            <div className="w-full lg:w-[52%] flex items-center justify-center">
              <div className="relative w-full max-w-[620px] rounded-2xl overflow-hidden border border-[#E5E8EF] bg-white shadow-[0_20px_50px_rgba(20,35,70,0.08)]">
                <img
                  src={printShowcaseImg}
                  alt="Gowri Printers commercial print portfolio showcase featuring casebound hardcover books, catalogues, brochures, foil-embossed business cards, and custom packaging"
                  className="w-full h-auto object-cover aspect-[4/3] block"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          TRUSTED BY — LOGO LOOP
          ======================================================== */}
      <div className="w-full border-t border-[#E5E8EF] bg-white py-6 sm:py-8 overflow-hidden">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 mb-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#626978]">
            TRUSTED BY
          </p>
        </div>
        <div className="w-full overflow-hidden">
          <LogoLoop
            logos={trustedLogos}
            speed={8}
            direction="left"
            logoHeight={34}
            gap={64}
            fadeOut={true}
            fadeOutWidth={0.16}
            pauseOnHover={true}
            scaleOnHover={true}
          />
        </div>
      </div>

      {/* ========================================================
          INTEGRATED STATISTICS STRIP (Anchoring the Hero)
          ======================================================== */}
      <div className="w-full border-t border-[#E5E8EF] bg-white">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E8EF]">
            {/* Stat 1: 29+ Years */}
            <div className="flex flex-col items-center justify-center py-4 sm:py-2 px-4 text-center">
              <span className="text-3xl sm:text-4xl lg:text-[2.65rem] font-[800] tracking-tight text-[#1D397F] leading-none">
                29+ Years
              </span>
              <span className="mt-2 text-xs sm:text-sm font-medium tracking-wide text-[#626978]">
                Printing Excellence
              </span>
            </div>

            {/* Stat 2: 10K+ */}
            <div className="flex flex-col items-center justify-center py-4 sm:py-2 px-4 text-center">
              <span className="text-3xl sm:text-4xl lg:text-[2.65rem] font-[800] tracking-tight text-[#1D397F] leading-none">
                10K+
              </span>
              <span className="mt-2 text-xs sm:text-sm font-medium tracking-wide text-[#626978]">
                Projects Delivered
              </span>
            </div>

            {/* Stat 3: 500+ */}
            <div className="flex flex-col items-center justify-center py-4 sm:py-2 px-4 text-center">
              <span className="text-3xl sm:text-4xl lg:text-[2.65rem] font-[800] tracking-tight text-[#1D397F] leading-none">
                500+
              </span>
              <span className="mt-2 text-xs sm:text-sm font-medium tracking-wide text-[#626978]">
                Happy Clients
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
