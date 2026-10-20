import { whyIPAiC } from "@/content/siteContent";
import { SectionHeading } from "./ui/SectionHeading";
import { getIcon } from "@/lib/icons";

export function WhyIPAIC() {
  return (
    <section id="why-ipaic" className="bg-surface px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading eyebrow={whyIPAiC.eyebrow} heading={whyIPAiC.heading} />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {whyIPAiC.values.map((value) => {
            const Icon = getIcon(value.icon);
            return (
              <div key={value.title} className="flex flex-col gap-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-white">
                  <Icon className="h-4.5 w-4.5" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-navy">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
