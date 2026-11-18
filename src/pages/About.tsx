import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faEye,
  faHeart,
  faAward,
  faUsers,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { spacing, typography } from "@/theme";
import { CTA } from "@/components/sections/CTA";

const milestones = [
  { year: "1995", event: "Founded as a small offset printing shop in Chennai" },
  { year: "2002", event: "Expanded to digital printing with first HP Indigo press" },
  { year: "2008", event: "Launched packaging division for FMCG clients" },
  { year: "2014", event: "Installed Heidelberg Speedmaster for large-format printing" },
  { year: "2019", event: "Opened second facility with 20,000 sq ft production floor" },
  { year: "2023", event: "Crossed 10,000 successful projects milestone" },
];

const values = [
  {
    icon: faAward,
    title: "Quality First",
    description: "Every print is inspected against our rigorous standards before it leaves the facility.",
  },
  {
    icon: faUsers,
    title: "Client-Centric",
    description: "We listen, adapt, and deliver exactly what our clients envision — often exceeding expectations.",
  },
  {
    icon: faGlobe,
    title: "Sustainability",
    description: "Committed to eco-friendly practices: soy-based inks, recycled stocks, and energy-efficient presses.",
  },
];

export function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className={`bg-muted/30 ${spacing.section.y} ${spacing.section.x}`}>
        <div className={`${spacing.container} text-center`}>
          <Badge variant="secondary" className="mb-4">About Us</Badge>
          <h1 className={typography.h1}>
            The Story Behind{" "}
            <span className="text-primary">Gowri Printers</span>
          </h1>
          <p className={`${typography.bodyLg} mx-auto mt-4 max-w-2xl text-muted-foreground`}>
            From a humble printing shop to one of South India's most trusted
            print houses — here's how we got here.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className={`${spacing.section.y} ${spacing.section.x}`}>
        <div className={spacing.container}>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-border/50">
              <CardContent className="flex gap-4 pt-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FontAwesomeIcon icon={faBullseye} className="h-5 w-5" />
                </div>
                <div>
                  <h3 className={typography.h4}>Our Mission</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    To empower businesses and creators with affordable,
                    high-quality print solutions that make their ideas tangible
                    and their brands memorable. We combine traditional
                    craftsmanship with modern technology to deliver excellence on
                    every project.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/50">
              <CardContent className="flex gap-4 pt-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FontAwesomeIcon icon={faEye} className="h-5 w-5" />
                </div>
                <div>
                  <h3 className={typography.h4}>Our Vision</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    To be India's most trusted and innovative printing partner —
                    known for exceptional quality, sustainable practices, and a
                    relentless commitment to customer satisfaction. We aim to set
                    the standard for the printing industry.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`bg-muted/30 ${spacing.section.y} ${spacing.section.x}`}>
        <div className={spacing.container}>
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">Our Values</Badge>
            <h2 className={typography.h2}>What We Stand For</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                  <FontAwesomeIcon icon={v.icon} className="h-6 w-6" />
                </div>
                <h4 className="mt-4 text-lg font-semibold">{v.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder quote */}
      <section className={`${spacing.section.y} ${spacing.section.x}`}>
        <div className={`${spacing.container} mx-auto max-w-3xl text-center`}>
          <FontAwesomeIcon icon={faHeart} className="mx-auto h-8 w-8 text-primary/20" />
          <blockquote className="mt-6 text-xl font-medium italic leading-relaxed text-foreground/80 sm:text-2xl">
            "Printing is not just ink on paper — it's bringing someone's dream to
            life. Every poster, every book, every package we create carries a
            piece of our pride."
          </blockquote>
          <Separator className="mx-auto mt-6 w-16" />
          <p className="mt-4 font-semibold">Mr. Gowri Shankar</p>
          <p className="text-sm text-muted-foreground">
            Founder & Managing Director
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className={`bg-muted/30 ${spacing.section.y} ${spacing.section.x}`}>
        <div className={`${spacing.container} mx-auto max-w-2xl`}>
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Our Journey</Badge>
            <h2 className={typography.h2}>Milestones</h2>
          </div>
          <div className="mt-12 space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="relative flex gap-6 pb-8 last:pb-0">
                {/* Vertical line */}
                {i < milestones.length - 1 && (
                  <div className="absolute left-[1.1rem] top-10 h-full w-px bg-border" />
                )}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {m.year.slice(-2)}
                </div>
                <div className="pt-1">
                  <span className="text-sm font-semibold text-primary">
                    {m.year}
                  </span>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {m.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
