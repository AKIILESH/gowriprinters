import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import type { ServiceItem } from "@/data/services";

interface ServiceCardProps {
  service: ServiceItem;
  priority?: boolean;
}

export function ServiceCard({ service, priority = false }: ServiceCardProps) {
  return (
    <Link
      to={`/contact?service=${service.slug}`}
      className="group relative flex flex-col justify-between rounded-2xl border border-[#E5E8EF] bg-white p-4 sm:p-5 transition-all duration-300 hover:border-[#1D397F]/40 hover:shadow-[0_14px_36px_rgba(20,35,70,0.06)]"
    >
      <div>
        {/* =========================================
            Visual Showcase (Real Product Photography)
            ========================================= */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#E5E8EF] bg-[#F7F8FA]">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            loading={priority ? "eager" : "lazy"}
          />
        </div>

        {/* =========================================
            Metadata & Title
            ========================================= */}
        <div className="mt-4 flex items-center justify-between">
          <span className="font-mono text-xs font-semibold tracking-wider text-[#D9A52E]">
            {service.number}
          </span>
          <span className="text-[11px] font-medium text-[#626978] uppercase tracking-wider">
            Commercial Print
          </span>
        </div>

        <h3 className="mt-2 text-xl font-bold tracking-tight text-[#111318] transition-colors duration-200 group-hover:text-[#1D397F]">
          {service.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-[#626978] line-clamp-2">
          {service.shortDescription}
        </p>
      </div>

      {/* =========================================
          Footer CTA Link
          ========================================= */}
      <div className="mt-5 flex items-center gap-2 border-t border-[#E5E8EF] pt-3 text-xs sm:text-sm font-semibold text-[#1D397F]">
        <span>Request a Quote</span>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1.5"
        />
      </div>
    </Link>
  );
}
