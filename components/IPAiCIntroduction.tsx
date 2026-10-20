import { introduction } from "@/content/siteContent";
import { SectionHeading } from "./ui/SectionHeading";

export function IPAiCIntroduction() {
  return (
    <section id="product" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-14 px-5 sm:px-8 lg:flex-row lg:items-start lg:gap-[96px]">
        <div className="flex w-full justify-center lg:w-auto lg:flex-none lg:justify-start lg:self-center lg:pl-8">
          <div className="inline-flex flex-col items-start">
            {introduction.steps.map((step, i) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy text-xs font-bold text-white">
                    {step.number}
                  </span>
                  {i < introduction.steps.length - 1 && (
                    <span className="w-px flex-1 bg-border-blue" aria-hidden="true" />
                  )}
                </div>
                <div className={i < introduction.steps.length - 1 ? "pb-6" : ""}>
                  <h3 className="text-base font-semibold text-navy">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 lg:self-center">
          <SectionHeading
            eyebrow={introduction.eyebrow}
            heading={introduction.heading}
            body={introduction.body}
            align="left"
            maxWidth="max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
