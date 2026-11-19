import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  return (
    <header className="sticky top-3 sm:top-5 z-50 w-full px-3 sm:px-6 flex justify-center font-sans">
      <div className="w-full max-w-[1380px] h-16 sm:h-[76px] rounded-full bg-white border border-[#E5E8EF] shadow-[0_8px_30px_rgba(20,35,70,0.06)] px-4 sm:px-8 flex items-center justify-between">

        {/* =========================================
            LEFT: Logo and Brand Name
            ========================================= */}
        <Link to="/" className="group flex items-center gap-2.5 sm:gap-3 shrink-0">
          <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#1D397F] text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white">G</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight text-[#111318] leading-tight">
              Gowri Printers
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-[#626978] uppercase hidden sm:block">
              Print · Pack · Brand
            </span>
          </div>
        </Link>

        {/* =========================================
            RIGHT: Direct Actions
            ========================================= */}
        <div className="flex items-center gap-2.5 sm:gap-5">
          {/* Phone contact link */}
          <a
            href="tel:+919843009219"
            className="hidden sm:inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#111318] hover:text-[#1D397F] transition-colors"
          >
            <FontAwesomeIcon icon={faPhone} className="h-3.5 w-3.5 text-[#D9A52E]" />
            <span>+91 98430 09219</span>
          </a>

          {/* Request a Quote Button */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#1D397F] hover:bg-[#142C68] text-white font-semibold text-xs sm:text-sm h-10 sm:h-11 px-4 sm:px-6 rounded-full shadow-sm transition-all shrink-0"
          >
            <span>
              <span className="hidden sm:inline">Request a </span>Quote
            </span>
            <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </Link>
        </div>

      </div>
    </header>
  );
}
