import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { spacing } from "@/theme";

const services = [
  "Poster Printing",
  "Flyer Design & Print",
  "Book Publishing",
  "Packaging Materials",
  "Business Cards",
  "Brochures",
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className={`${spacing.container} ${spacing.section.x} ${spacing.section.y}`}>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">G</span>
              </div>
              <span className="text-lg font-bold">Gowri Printers</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Trusted printing partner since 1995. We deliver premium print
              solutions for businesses and individuals across India.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <FontAwesomeIcon icon={faFacebook} className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/919843009219"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <FontAwesomeIcon icon={faLocationDot} className="mt-0.5 h-4 w-4 text-primary" />
                <span>100, Mariamman kovil street, peelamedu pudur, coimbatore-641014</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <FontAwesomeIcon icon={faPhone} className="h-4 w-4 text-primary" />
                <a href="tel:+919843009219" className="hover:text-primary">
                  +91 98430 09219
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 text-primary" />
                <a href="mailto:gowriprinters@yahoo.in" className="hover:text-primary">
                  gowriprinters@yahoo.in
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <FontAwesomeIcon icon={faClock} className="h-4 w-4 text-primary" />
                <span>Mon – Sat: 9 AM – 7 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Separator />
      <div className={`${spacing.container} ${spacing.section.x} py-6`}>
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Gowri Printers. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafting print excellence since 1995
          </p>
        </div>
      </div>
    </footer>
  );
}
