import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Gowri Printers delivered 10,000 flyers for our product launch in just 48 hours. The colour accuracy was phenomenal — exactly what we needed.",
    name: "Rajesh Kumar",
    role: "Marketing Director",
    company: "TechCorp",
  },
  {
    quote:
      "They printed my debut novel beautifully. The binding quality, paper feel, and cover finish exceeded my expectations. Already planning my second edition with them.",
    name: "Priya Sharma",
    role: "Author & Publisher",
    company: "Independent",
  },
  {
    quote:
      "Our food packaging needed to be both attractive and food-safe. Gowri Printers nailed the design and ensured full compliance with FSSAI standards.",
    name: "Arun Mehta",
    role: "Owner",
    company: "FreshPack Foods",
  },
];

export function Testimonials() {
  return (
    <section className="w-full bg-white py-20 lg:py-24 border-b border-[#E5E8EF]">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8">
        
        {/* =========================================
            Section Header
            ========================================= */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#1D397F] uppercase mb-4">
            CLIENT EXPERIENCES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-[#111318] leading-[1.16]">
            Trusted by Businesses.<br className="hidden sm:inline" /> Proven by Results.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#626978]">
            Our commitment to quality, precision and dependable service is reflected in every project we deliver.
          </p>
        </div>

        {/* =========================================
            Editorial Testimonial Columns
            ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E8EF]">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className={`flex flex-col justify-between py-8 lg:py-0 ${
                idx === 0
                  ? "lg:pr-10"
                  : idx === 1
                  ? "lg:px-10"
                  : "lg:pl-10"
              }`}
            >
              <div>
                {/* Oversized Subtle Quotation Mark */}
                <span
                  className="font-serif text-5xl leading-none text-[#1D397F]/20 select-none block mb-2"
                  aria-hidden="true"
                >
                  “
                </span>

                {/* Quote Text */}
                <p className="text-base sm:text-lg leading-relaxed text-[#111318] font-normal">
                  {t.quote}
                </p>

                {/* Five-Star Gold Rating */}
                <div className="flex items-center gap-1 mt-5 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="h-3.5 w-3.5 text-[#D9A52E]"
                    />
                  ))}
                </div>
              </div>

              {/* Client Info */}
              <div className="pt-5 border-t border-[#E5E8EF]">
                <p className="text-base font-bold text-[#111318]">
                  {t.name}
                </p>
                <p className="text-xs sm:text-sm text-[#626978] mt-0.5">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
