import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faFileLines,
  faBook,
  faBoxOpen,
  faIdCard,
  faNewspaper,
  faCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { spacing, typography } from "@/theme";
import { CTA } from "@/components/sections/CTA";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ServiceDetail {
  icon: IconDefinition;
  title: string;
  description: string;
  features: string[];
  badge?: string;
}

const services: ServiceDetail[] = [
  {
    icon: faImage,
    title: "Poster Printing",
    description:
      "High-impact posters for advertising, events, education, and decoration. We print on a wide range of paper stocks and finishes.",
    features: [
      "Sizes from A4 to billboard-scale",
      "Matte, gloss, satin, and canvas finishes",
      "UV-resistant inks for outdoor display",
      "Lamination and mounting available",
      "Same-day express printing",
    ],
    badge: "Popular",
  },
  {
    icon: faFileLines,
    title: "Flyers & Leaflets",
    description:
      "Affordable, high-quality flyers perfect for marketing campaigns, promotions, and information distribution.",
    features: [
      "Full-colour digital and offset printing",
      "Single-sided and double-sided options",
      "Multiple paper weights (100gsm – 350gsm)",
      "Custom die-cut shapes available",
      "Bulk pricing for large volumes",
    ],
  },
  {
    icon: faBook,
    title: "Book Printing & Publishing",
    description:
      "End-to-end book production — from manuscripts to finished copies ready for distribution and retail.",
    features: [
      "Perfect binding, saddle-stitch, case binding",
      "Paperback and hardcover options",
      "ISBN registration support",
      "Full-colour and B&W interiors",
      "Print-on-demand and bulk runs",
    ],
    badge: "Premium",
  },
  {
    icon: faBoxOpen,
    title: "Packaging Materials",
    description:
      "Custom packaging solutions that protect your products and enhance your brand at the shelf.",
    features: [
      "Corrugated boxes and cartons",
      "Food-grade and FSSAI-compliant packaging",
      "Product labels and stickers",
      "Retail-ready shelf boxes",
      "Eco-friendly packaging options",
    ],
  },
  {
    icon: faIdCard,
    title: "Business Cards & Stationery",
    description:
      "Premium business cards and corporate stationery that make a memorable first impression.",
    features: [
      "Standard, square, and mini sizes",
      "Embossing and debossing",
      "Gold and silver foil stamping",
      "Spot UV and soft-touch finishes",
      "Matching letterheads and envelopes",
    ],
  },
  {
    icon: faNewspaper,
    title: "Brochures & Catalogues",
    description:
      "Multi-page marketing collateral designed to showcase your products, services, and brand story.",
    features: [
      "Bi-fold, tri-fold, and gate-fold designs",
      "Up to 200+ page catalogues",
      "Wire-o and spiral binding",
      "In-house design and typesetting",
      "Variable data printing for personalization",
    ],
  },
];

const faqs = [
  {
    q: "What is the minimum order quantity?",
    a: "We have no strict minimums for digital printing. For offset printing, minimum runs typically start at 500 units. Contact us for specific quotes.",
  },
  {
    q: "How long does delivery take?",
    a: "Standard orders are delivered within 2-3 business days. Same-day express printing is available for select products at an additional charge.",
  },
  {
    q: "Do you offer design services?",
    a: "Yes! Our in-house design team can create artwork from scratch or refine your existing designs to be print-ready.",
  },
  {
    q: "Can I get a sample before placing a bulk order?",
    a: "Absolutely. We offer sample prints so you can verify colours, paper quality, and finish before committing to a large run.",
  },
  {
    q: "What file formats do you accept?",
    a: "We accept PDF (preferred), AI, PSD, INDD, EPS, TIFF, and high-resolution JPG/PNG files. Our team can help convert formats if needed.",
  },
];

export function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className={`bg-muted/30 ${spacing.section.y} ${spacing.section.x}`}>
        <div className={`${spacing.container} text-center`}>
          <Badge variant="secondary" className="mb-4">Our Services</Badge>
          <h1 className={typography.h1}>
            Everything You Need,{" "}
            <span className="text-primary">Printed Perfectly</span>
          </h1>
          <p className={`${typography.bodyLg} mx-auto mt-4 max-w-2xl text-muted-foreground`}>
            Explore our comprehensive range of printing and packaging services,
            each backed by decades of expertise and modern technology.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className={`${spacing.section.y} ${spacing.section.x}`}>
        <div className={spacing.container}>
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <Card
                key={service.title}
                className="overflow-hidden border-border/50 transition-shadow hover:shadow-lg hover:shadow-primary/5"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <FontAwesomeIcon icon={service.icon} className="h-5 w-5" />
                    </div>
                    {service.badge && (
                      <Badge variant="outline">{service.badge}</Badge>
                    )}
                  </div>
                  <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="h-3.5 w-3.5 text-primary"
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`bg-muted/30 ${spacing.section.y} ${spacing.section.x}`}>
        <div className={`${spacing.container} mx-auto max-w-3xl`}>
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">FAQ</Badge>
            <h2 className={typography.h2}>Frequently Asked Questions</h2>
          </div>
          <Accordion className="mt-8">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-sm font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground">
              Still have questions?
            </p>
            <Button className="mt-3" asChild>
              <Link to="/contact">
                Contact Us
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
