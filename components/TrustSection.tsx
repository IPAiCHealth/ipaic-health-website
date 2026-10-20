import { trust } from "@/content/siteContent";
import { SectionHeading } from "./ui/SectionHeading";
import { TrustPrinciple } from "./ui/TrustPrinciple";

export function TrustSection() {
  return (
    <section className="bg-light-blue px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading eyebrow={trust.eyebrow} heading={trust.heading} maxWidth="max-w-3xl" />

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-0">
          {trust.principles.map((p) => (
            <TrustPrinciple key={p.title} icon={p.icon} title={p.title} description={p.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
