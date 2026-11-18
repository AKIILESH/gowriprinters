import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faPenRuler,
  faPrint,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Step {
  number: string;
  icon: IconDefinition;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: faLightbulb,
    title: "Consult",
    description:
      "Share your requirements. Our experts help you pick the right materials, format, and finish.",
  },
  {
    number: "02",
    icon: faPenRuler,
    title: "Design",
    description:
      "Our in-house designers craft pixel-perfect artwork, or we prepare your files for press.",
  },
  {
    number: "03",
    icon: faPrint,
    title: "Print",
    description:
      "High-speed offset and digital presses deliver consistent, vibrant results on every sheet.",
  },
  {
    number: "04",
    icon: faTruckFast,
    title: "Deliver",
    description:
      "Quality-checked, carefully packed, and shipped to your door — on time, every time.",
  },
];

export function Process() {
  return (
    <section className="w-full bg-[#F7F8FA] py-20 lg:py-24 border-b border-[#E5E8EF]">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8">
        
        {/* =========================================
            Section Header
            ========================================= */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#1D397F] uppercase mb-4">
            OUR PROCESS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-[#111318] leading-[1.16]">
            Four Simple Steps to<br className="hidden sm:inline" /> Great Print.
          </h2>
        </div>

        {/* =========================================
            DESKTOP TIMELINE (Horizontal Connected Process)
            ========================================= */}
        <div className="hidden lg:block relative">
          {/* Continuous thin horizontal connector line */}
          <div
            className="absolute top-[18px] left-[24px] right-[24px] h-[1px] bg-[#E5E8EF]"
            aria-hidden="true"
          />

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="group relative flex flex-col">
                {/* Node Marker sitting directly on connector line */}
                <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#1D397F] text-[#1D397F] shadow-sm transition-all duration-200 group-hover:border-[#D9A52E] group-hover:bg-[#1D397F] group-hover:text-white">
                  <span className="font-mono text-xs font-bold">{step.number}</span>
                </div>

                {/* Step Details Below Marker */}
                <div className="mt-7">
                  <div className="flex items-center gap-2 mb-2">
                    <FontAwesomeIcon
                      icon={step.icon}
                      className="h-3.5 w-3.5 text-[#1D397F] opacity-75 transition-all duration-200 group-hover:opacity-100 group-hover:text-[#D9A52E]"
                    />
                    <h3 className="text-lg font-bold tracking-tight text-[#111318] transition-colors duration-200 group-hover:text-[#1D397F]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#626978] pr-4">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================
            MOBILE / TABLET TIMELINE (Vertical Connected Process)
            ========================================= */}
        <div className="block lg:hidden relative pl-7 sm:pl-10 border-l border-[#E5E8EF] ml-5 sm:ml-7 space-y-10 sm:space-y-12">
          {steps.map((step) => (
            <div key={step.number} className="group relative">
              {/* Vertical Node Marker — centered directly on the border-l line */}
              <div className="absolute -left-[18px] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#1D397F] text-[#1D397F] shadow-sm font-mono text-xs font-bold">
                {step.number}
              </div>

              {/* Step Details */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon
                    icon={step.icon}
                    className="h-3.5 w-3.5 text-[#1D397F]"
                  />
                  <h3 className="text-lg font-bold text-[#111318]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[#626978]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
