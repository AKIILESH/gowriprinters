import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { spacing, typography } from "@/theme";

const contactInfo = [
  {
    icon: faPhone,
    title: "Phone",
    value: "+91 98430 09219",
    href: "tel:+919843009219",
    description: "Mon–Sat, 9 AM – 7 PM IST",
  },
  {
    icon: faWhatsapp,
    title: "WhatsApp",
    value: "+91 98430 09219",
    href: "https://wa.me/919843009219",
    description: "Quick responses, share files directly",
  },
  {
    icon: faEnvelope,
    title: "Email",
    value: "gowriprinters@yahoo.in",
    href: "mailto:gowriprinters@yahoo.in",
    description: "We reply within 2 business hours",
  },
  {
    icon: faLocationDot,
    title: "Visit Us",
    value: "100, Mariamman kovil street",
    href: "https://maps.google.com/?q=100+Mariamman+kovil+street+peelamedu+pudur+coimbatore+641014",
    description: "Peelamedu pudur, Coimbatore - 641014",
  },
];

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const s = searchParams.get("service")?.toLowerCase();
    if (s) {
      if (s.includes("poster")) setSelectedService("posters");
      else if (s.includes("flyer")) setSelectedService("flyers");
      else if (s.includes("book")) setSelectedService("books");
      else if (s.includes("pack")) setSelectedService("packaging");
      else if (s.includes("card") || s.includes("stationery")) setSelectedService("cards");
      else if (s.includes("brochure") || s.includes("catalogue")) setSelectedService("brochures");
    }
  }, [searchParams]);
  return (
    <>
      {/* Header */}
      <section className={`bg-muted/30 ${spacing.section.y} ${spacing.section.x}`}>
        <div className={`${spacing.container} text-center`}>
          <Badge variant="secondary" className="mb-4">Contact Us</Badge>
          <h1 className={typography.h1}>
            Let's Start Your{" "}
            <span className="text-primary">Next Project</span>
          </h1>
          <p className={`${typography.bodyLg} mx-auto mt-4 max-w-2xl text-muted-foreground`}>
            Have a printing project in mind? Reach out to us and we'll get back
            to you with a quote within hours.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className={`${spacing.section.y} ${spacing.section.x}`}>
        <div className={spacing.container}>
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Contact info cards */}
            <div className="space-y-4 lg:col-span-2">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="border-border/50 transition-all hover:border-primary/30 hover:shadow-md">
                    <CardContent className="flex items-start gap-4 py-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <FontAwesomeIcon icon={item.icon} className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="text-sm text-foreground">{item.value}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}

              {/* Hours */}
              <Card className="border-border/50">
                <CardContent className="flex items-start gap-4 py-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Business Hours</p>
                    <div className="mt-1 space-y-0.5 text-sm text-muted-foreground">
                      <p>Monday – Friday: 9:00 AM – 7:00 PM</p>
                      <p>Saturday: 9:00 AM – 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact form */}
            <Card className="border-border/50 lg:col-span-3">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Fill in the details below and we'll get back to you shortly.
                </p>
              </CardHeader>
              <CardContent>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you! We will get back to you soon.");
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select a service</option>
                      <option value="posters">Poster Printing</option>
                      <option value="flyers">Flyers & Leaflets</option>
                      <option value="books">Book Printing</option>
                      <option value="packaging">Packaging Materials</option>
                      <option value="cards">Business Cards</option>
                      <option value="brochures">Brochures & Catalogues</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Tell us about your project — quantity, size, paper preferences, deadline, etc."
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <FontAwesomeIcon icon={faPaperPlane} className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="border-t">
        <div className="flex h-64 items-center justify-center bg-muted/30 sm:h-80">
          <div className="text-center">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="mx-auto h-8 w-8 text-primary/30"
            />
            <p className="mt-2 text-sm text-muted-foreground">
              Google Maps embed will be placed here
            </p>
            <p className="text-xs text-muted-foreground">
              100, Mariamman kovil street, peelamedu pudur, coimbatore-641014
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
