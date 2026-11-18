import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faAward,
  faBoxesStacked,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="w-full bg-white">
      {/* ========================================================
          HERO SECTION — 2-Column Asymmetrical Composition
          ======================================================== */}
      <section className="relative overflow-hidden bg-white">
        {/* Main Content Container (max-w-[1380px], centered) */}
        <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 pt-10 pb-16 lg:pt-16 lg:pb-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

            {/* =========================================
                LEFT COLUMN (48%)
                ========================================= */}
            <div className="w-full lg:w-[48%] flex flex-col items-start text-left">


              {/* Main Headline with clamp() and whitespace-nowrap for 'Every Need' */}
              <h1 className="text-[clamp(2.4rem,4.5vw,3.75rem)] font-extrabold tracking-tight text-[#111318] leading-[1.12]">
                Premium Printing
                <br />
                Solutions for
                <br />
                <span className="whitespace-nowrap bg-gradient-to-r from-[#1D397F] via-[#142C68] to-[#D9A52E] bg-clip-text text-transparent">
                  Every Need
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#626978] max-w-xl">
                From stunning posters and eye-catching flyers to beautifully bound
                books and custom packaging — Gowri Printers brings your vision to
                life with precision and care.
              </p>

              {/* CTA Buttons — Equal height, restrained rounding */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  to="/services"
                  className="inline-flex h-12 items-center justify-center gap-2.5 rounded-lg bg-[#1D397F] px-7 text-sm sm:text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#142C68]"
                >
                  <span>Explore Services</span>
                  <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-[#1D397F] bg-white px-7 text-sm sm:text-base font-semibold text-[#1D397F] transition-colors hover:bg-[#F7F8FA]"
                >
                  <span>Request a Quote</span>
                </Link>
              </div>

            </div>

            {/* =========================================
                RIGHT COLUMN (52%)
                Refined Commercial Product Showcase
                ========================================= */}
            <div className="w-full lg:w-[52%] flex items-center justify-center">
              <div className="w-full max-w-[620px] select-none">

                {/* Clean Product Arrangement with Natural Studio Depth */}
                <svg
                  viewBox="0 0 600 460"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto drop-shadow-sm"
                >
                  <defs>
                    {/* Realistic Ground Shadows */}
                    <filter id="soft-shadow" x="-10%" y="-10%" width="125%" height="130%">
                      <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#142C68" floodOpacity="0.09" />
                    </filter>
                    <filter id="book-shadow" x="-12%" y="-10%" width="130%" height="135%">
                      <feDropShadow dx="-4" dy="16" stdDeviation="16" floodColor="#111318" floodOpacity="0.14" />
                    </filter>
                    <filter id="box-shadow" x="-10%" y="-10%" width="125%" height="130%">
                      <feDropShadow dx="4" dy="16" stdDeviation="14" floodColor="#142C68" floodOpacity="0.12" />
                    </filter>

                    {/* Rich Material Gradients */}
                    <linearGradient id="gold-stamp" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E2B74B" />
                      <stop offset="40%" stopColor="#FFF4D0" />
                      <stop offset="70%" stopColor="#D9A52E" />
                      <stop offset="100%" stopColor="#B3821C" />
                    </linearGradient>

                    <linearGradient id="navy-linen" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E3E8D" />
                      <stop offset="50%" stopColor="#1D397F" />
                      <stop offset="100%" stopColor="#142C68" />
                    </linearGradient>

                    <linearGradient id="box-face-left" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22428C" />
                      <stop offset="100%" stopColor="#142C68" />
                    </linearGradient>

                    <linearGradient id="box-face-right" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#183372" />
                      <stop offset="100%" stopColor="#0F204C" />
                    </linearGradient>

                    <linearGradient id="box-lid" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2E52AB" />
                      <stop offset="100%" stopColor="#1E3E8D" />
                    </linearGradient>
                  </defs>

                  {/* Ground Contact Shadow */}
                  <ellipse cx="300" cy="415" rx="260" ry="20" fill="#E5E8EF" fillOpacity="0.6" />

                  {/* --------------------------------------------------
                      ITEM 1: OPEN EDITORIAL PUBLICATION (Background Layer)
                      -------------------------------------------------- */}
                  <g filter="url(#soft-shadow)">
                    {/* Left Spread */}
                    <path
                      d="M 50 170 Q 170 162 250 174 L 250 360 Q 160 348 50 355 Z"
                      fill="#FFFFFF"
                      stroke="#E5E8EF"
                      strokeWidth="1"
                    />
                    {/* Left Page Thickness */}
                    <path d="M 48 355 L 50 357 L 250 362 L 250 360 Z" fill="#E2E6EE" />

                    {/* Editorial Layout: Clean Image Plate */}
                    <rect x="74" y="190" width="150" height="92" rx="2" fill="#1D397F" fillOpacity="0.08" />
                    <rect x="82" y="198" width="134" height="76" rx="1" fill="#1D397F" fillOpacity="0.14" />
                    {/* Abstract architectural image shapes */}
                    <path d="M 95 258 L 135 220 L 175 250 L 205 232 L 216 258 Z" fill="#1D397F" fillOpacity="0.25" />
                    <circle cx="120" cy="225" r="10" fill="#D9A52E" fillOpacity="0.5" />

                    {/* Editorial Type Lines */}
                    <rect x="74" y="296" width="130" height="4.5" rx="2" fill="#111318" fillOpacity="0.7" />
                    <rect x="74" y="306" width="145" height="3" rx="1.5" fill="#626978" fillOpacity="0.4" />
                    <rect x="74" y="314" width="140" height="3" rx="1.5" fill="#626978" fillOpacity="0.4" />
                    <rect x="74" y="322" width="90" height="3" rx="1.5" fill="#626978" fillOpacity="0.4" />

                    {/* Spine Gutter Shadow */}
                    <path d="M 235 171 Q 245 173 250 174 L 250 360 Q 242 358 235 357 Z" fill="#000000" fillOpacity="0.08" />

                    {/* Right Spread */}
                    <path
                      d="M 250 174 Q 330 162 450 170 L 450 355 Q 340 348 250 360 Z"
                      fill="#FAFAFC"
                      stroke="#E5E8EF"
                      strokeWidth="1"
                    />
                    {/* Right Page Thickness */}
                    <path d="M 450 355 L 452 357 L 250 362 L 250 360 Z" fill="#D5DAE4" />

                    {/* Right Page Typography */}
                    <rect x="274" y="192" width="120" height="6" rx="2" fill="#1D397F" fillOpacity="0.8" />
                    <rect x="274" y="206" width="150" height="3" rx="1.5" fill="#626978" fillOpacity="0.45" />
                    <rect x="274" y="214" width="144" height="3" rx="1.5" fill="#626978" fillOpacity="0.45" />
                    <rect x="274" y="222" width="148" height="3" rx="1.5" fill="#626978" fillOpacity="0.45" />
                    <rect x="274" y="230" width="135" height="3" rx="1.5" fill="#626978" fillOpacity="0.45" />

                    {/* CMYK Color Control Calibration Strip */}
                    <g transform="translate(274, 246)">
                      <rect x="0" y="0" width="15" height="10" rx="1" fill="#00A3E0" />
                      <rect x="18" y="0" width="15" height="10" rx="1" fill="#E4007F" />
                      <rect x="36" y="0" width="15" height="10" rx="1" fill="#FFDD00" />
                      <rect x="54" y="0" width="15" height="10" rx="1" fill="#111318" />
                      <rect x="72" y="0" width="15" height="10" rx="1" fill="#D9A52E" />
                      <circle cx="102" cy="5" r="4.5" stroke="#1D397F" strokeWidth="0.8" fill="none" />
                      <line x1="102" y1="0" x2="102" y2="10" stroke="#1D397F" strokeWidth="0.8" />
                      <line x1="97" y1="5" x2="107" y2="5" stroke="#1D397F" strokeWidth="0.8" />
                    </g>

                    {/* Dual Column Editorial Grid */}
                    <rect x="274" y="268" width="70" height="66" rx="1.5" fill="#FFFFFF" stroke="#E5E8EF" strokeWidth="0.8" />
                    <rect x="282" y="278" width="54" height="3" rx="1.5" fill="#1D397F" fillOpacity="0.4" />
                    <rect x="282" y="286" width="48" height="2.5" rx="1.2" fill="#626978" fillOpacity="0.35" />
                    <rect x="282" y="293" width="50" height="2.5" rx="1.2" fill="#626978" fillOpacity="0.35" />

                    <rect x="354" y="268" width="70" height="66" rx="1.5" fill="#FFFFFF" stroke="#E5E8EF" strokeWidth="0.8" />
                    <rect x="362" y="278" width="54" height="3" rx="1.5" fill="#1D397F" fillOpacity="0.4" />
                    <rect x="362" y="286" width="48" height="2.5" rx="1.2" fill="#626978" fillOpacity="0.35" />
                    <rect x="362" y="293" width="50" height="2.5" rx="1.2" fill="#626978" fillOpacity="0.35" />
                  </g>

                  {/* --------------------------------------------------
                      ITEM 2: CASEBOUND HARDCOVER BOOK (Center Layer)
                      -------------------------------------------------- */}
                  <g filter="url(#book-shadow)" transform="translate(85, 70) rotate(-5)">
                    {/* Cream Paper Block Behind Cover */}
                    <path
                      d="M 12 16 L 202 16 L 198 290 L 8 290 Z"
                      fill="#F8F8FA"
                      stroke="#D8DDE6"
                      strokeWidth="1"
                    />
                    <line x1="202" y1="18" x2="198" y2="288" stroke="#CBD2DF" strokeWidth="2.5" strokeDasharray="1.5 1" />
                    <line x1="12" y1="289" x2="198" y2="289" stroke="#CBD2DF" strokeWidth="2" strokeDasharray="1.5 1" />

                    {/* Hardcover Cloth Binding */}
                    <rect
                      x="0"
                      y="0"
                      width="195"
                      height="285"
                      rx="4"
                      fill="url(#navy-linen)"
                      stroke="#142C68"
                      strokeWidth="1.2"
                    />

                    {/* Spine Groove & Crease */}
                    <rect x="0" y="0" width="15" height="285" rx="3" fill="#142C68" fillOpacity="0.4" />
                    <line x1="15" y1="0" x2="15" y2="285" stroke="#FFFFFF" strokeWidth="0.75" strokeOpacity="0.2" />

                    {/* Gold Foil Border Frame */}
                    <rect
                      x="26"
                      y="26"
                      width="148"
                      height="233"
                      rx="2"
                      fill="none"
                      stroke="url(#gold-stamp)"
                      strokeWidth="1.2"
                    />

                    {/* Gold Foil Emblem */}
                    <g transform="translate(100, 90)">
                      <circle cx="0" cy="0" r="18" fill="none" stroke="url(#gold-stamp)" strokeWidth="1.2" />
                      <text
                        x="0"
                        y="6"
                        fill="url(#gold-stamp)"
                        fontFamily="serif"
                        fontSize="16"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        G
                      </text>
                    </g>

                    {/* Refined Gold Foil Typography (Clean & Readable) */}
                    <text
                      x="100"
                      y="140"
                      fill="url(#gold-stamp)"
                      fontFamily="sans-serif"
                      fontSize="10"
                      fontWeight="bold"
                      letterSpacing="2.5"
                      textAnchor="middle"
                    >
                      GOWRI PRINTERS
                    </text>
                    <text
                      x="100"
                      y="156"
                      fill="#FFFFFF"
                      fillOpacity="0.95"
                      fontFamily="serif"
                      fontSize="13"
                      fontStyle="italic"
                      textAnchor="middle"
                    >
                      Selected Works
                    </text>
                    <line x1="68" y1="166" x2="132" y2="166" stroke="url(#gold-stamp)" strokeWidth="0.8" />
                    <text
                      x="100"
                      y="180"
                      fill="#FFFFFF"
                      fillOpacity="0.7"
                      fontFamily="sans-serif"
                      fontSize="7"
                      letterSpacing="1.8"
                      textAnchor="middle"
                    >
                      HARDCOVER · CASEBOUND
                    </text>

                    {/* Gold Silk Bookmark Ribbon */}
                    <path
                      d="M 94 283 L 94 316 L 100 308 L 106 316 L 106 283 Z"
                      fill="url(#gold-stamp)"
                      filter="url(#soft-shadow)"
                    />
                  </g>

                  {/* --------------------------------------------------
                      ITEM 3: RIGID PACKAGING BOX (Right Foreground)
                      -------------------------------------------------- */}
                  <g filter="url(#box-shadow)" transform="translate(320, 105)">
                    {/* Top Lid Plane */}
                    <path
                      d="M 90 20 L 210 65 L 120 105 L 0 60 Z"
                      fill="url(#box-lid)"
                      stroke="#3B64C4"
                      strokeWidth="1"
                    />

                    {/* Left Front Facet */}
                    <path
                      d="M 0 60 L 120 105 L 120 220 L 0 175 Z"
                      fill="url(#box-face-left)"
                      stroke="#142C68"
                      strokeWidth="1"
                    />

                    {/* Right Front Facet */}
                    <path
                      d="M 120 105 L 210 65 L 210 180 L 120 220 Z"
                      fill="url(#box-face-right)"
                      stroke="#0C1B3E"
                      strokeWidth="1"
                    />

                    {/* Gold Lid Trim Line */}
                    <path d="M 0 88 L 120 133 L 210 93" stroke="#D9A52E" strokeWidth="1.2" fill="none" />

                    {/* Minimalist Gold Foil Packaging Seal */}
                    <g transform="translate(60, 155) skewY(20)">
                      <rect x="-35" y="-16" width="70" height="32" rx="2" fill="#FFFFFF" fillOpacity="0.08" stroke="url(#gold-stamp)" strokeWidth="0.8" />
                      <text
                        x="0"
                        y="-2"
                        fill="url(#gold-stamp)"
                        fontSize="6.5"
                        fontWeight="bold"
                        letterSpacing="1.5"
                        textAnchor="middle"
                      >
                        GOWRI PACK
                      </text>
                      <text
                        x="0"
                        y="8"
                        fill="#FFFFFF"
                        fontSize="5"
                        letterSpacing="1"
                        textAnchor="middle"
                        fillOpacity="0.85"
                      >
                        RIGID PACKAGING
                      </text>
                    </g>
                  </g>

                  {/* --------------------------------------------------
                      ITEM 4: TRI-FOLD BROCHURE & FOIL BUSINESS CARD
                      -------------------------------------------------- */}
                  {/* Folded Brochure */}
                  <g filter="url(#soft-shadow)" transform="translate(175, 265) rotate(7)">
                    <path
                      d="M 0 0 L 85 -10 L 85 130 L 0 140 Z"
                      fill="#FFFFFF"
                      stroke="#E5E8EF"
                      strokeWidth="1"
                    />
                    <path
                      d="M 85 -10 L 170 0 L 170 140 L 85 130 Z"
                      fill="#F7F8FA"
                      stroke="#E5E8EF"
                      strokeWidth="1"
                    />
                    <line x1="85" y1="-10" x2="85" y2="130" stroke="#CBD2DF" strokeWidth="1" />

                    {/* Clean Brochure Accents */}
                    <rect x="14" y="16" width="55" height="5" rx="2" fill="#1D397F" />
                    <rect x="14" y="26" width="58" height="28" rx="1.5" fill="#EEF2F8" />
                    <rect x="14" y="60" width="52" height="2.5" rx="1" fill="#626978" fillOpacity="0.5" />
                    <rect x="14" y="66" width="46" height="2.5" rx="1" fill="#626978" fillOpacity="0.5" />

                    <rect x="100" y="16" width="55" height="5" rx="2" fill="#D9A52E" />
                    <rect x="100" y="26" width="52" height="2.5" rx="1" fill="#626978" fillOpacity="0.5" />
                    <rect x="100" y="32" width="48" height="2.5" rx="1" fill="#626978" fillOpacity="0.5" />
                  </g>

                  {/* Cotton Business Card with Beveled Gilded Edge */}
                  <g filter="url(#soft-shadow)" transform="translate(255, 315) rotate(-3)">
                    <rect x="1" y="2" width="135" height="78" rx="2.5" fill="#D5DAE4" />
                    <rect
                      x="0"
                      y="0"
                      width="135"
                      height="77"
                      rx="2.5"
                      fill="#FFFFFF"
                      stroke="#E5E8EF"
                      strokeWidth="1"
                    />
                    {/* Card Monogram & Contact Details */}
                    <rect x="14" y="14" width="15" height="15" rx="2" fill="#1D397F" />
                    <text x="21.5" y="25" fill="url(#gold-stamp)" fontSize="9.5" fontWeight="bold" textAnchor="middle">
                      G
                    </text>
                    <text x="36" y="22" fill="#111318" fontSize="8" fontWeight="bold">
                      Gowri Printers
                    </text>
                    <text x="36" y="28" fill="#D9A52E" fontSize="5.5" fontWeight="600" letterSpacing="0.5">
                      COMMERCIAL PRINT HOUSE
                    </text>
                    <line x1="14" y1="38" x2="121" y2="38" stroke="#E5E8EF" strokeWidth="0.8" />
                    <text x="14" y="49" fill="#626978" fontSize="5" fontWeight="500">
                      Peelamedu Pudur, Coimbatore - 641014
                    </text>
                    <text x="14" y="57" fill="#1D397F" fontSize="5.5" fontWeight="600">
                      gowriprinters@yahoo.in
                    </text>
                    <text x="14" y="65" fill="#111318" fontSize="5.5" fontWeight="bold">
                      +91 98430 09219
                    </text>
                  </g>
                </svg>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          7. FULL-WIDTH WHITE STATISTICS SECTION (Below Hero)
          ======================================================== */}
      <section className="w-full border-y border-[#E5E8EF] bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8">
          <div className="grid grid-cols-1 divide-y divide-[#E5E8EF] sm:grid-cols-3 sm:divide-y-0 sm:divide-x sm:divide-[#E5E8EF]">

            {/* Stat 1: 29+ Years */}
            <div className="flex flex-col items-center justify-center px-4 py-5 sm:py-2 text-center">
              <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF2F8] text-[#1D397F]">
                <FontAwesomeIcon icon={faAward} className="h-4 w-4" />
              </div>
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1D397F]">
                29+ Years
              </p>
              <p className="mt-1 text-sm font-medium text-[#626978]">
                Printing Excellence
              </p>
            </div>

            {/* Stat 2: 10K+ */}
            <div className="flex flex-col items-center justify-center px-4 py-5 sm:py-2 text-center">
              <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF2F8] text-[#1D397F]">
                <FontAwesomeIcon icon={faBoxesStacked} className="h-4 w-4" />
              </div>
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1D397F]">
                10K+
              </p>
              <p className="mt-1 text-sm font-medium text-[#626978]">
                Projects Delivered
              </p>
            </div>

            {/* Stat 3: 500+ */}
            <div className="flex flex-col items-center justify-center px-4 py-5 sm:py-2 text-center">
              <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF2F8] text-[#1D397F]">
                <FontAwesomeIcon icon={faUsers} className="h-4 w-4" />
              </div>
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1D397F]">
                500+
              </p>
              <p className="mt-1 text-sm font-medium text-[#626978]">
                Happy Clients
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
