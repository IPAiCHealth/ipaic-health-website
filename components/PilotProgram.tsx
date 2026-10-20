import { pilot } from "@/content/siteContent";
import { SectionHeading } from "./ui/SectionHeading";
import { CTAButton } from "./ui/CTAButton";
import { FlaskConical, Users, Compass, ArrowRight } from "lucide-react";

const pillarIcons = [FlaskConical, Users, Compass];

export function PilotProgram() {
  return (
    <section id="pilot" className="bg-light-blue px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading eyebrow={pilot.eyebrow} heading={pilot.heading} body={pilot.body} maxWidth="max-w-4xl" />

        <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
          {pilot.pillars.map((pillar, i) => {
            const Icon = pillarIcons[i];
            return (
              <div key={pillar.title} className="flex items-center gap-3">
                <div className="flex flex-1 items-start gap-4 rounded-xl border border-border-blue bg-white px-6 py-5 sm:w-72">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-cyan" strokeWidth={1.75} aria-hidden="true" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold text-navy">{pillar.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{pillar.description}</p>
                  </div>
                </div>
                {i < pilot.pillars.length - 1 && (
                  <ArrowRight className="hidden h-4 w-4 shrink-0 text-secondary-blue/50 sm:block" aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-muted">
          {pilot.subBody}
        </p>

        <div className="mt-8 flex justify-center">
          <CTAButton href="#contact" variant="primary">
            {pilot.primaryCta}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
