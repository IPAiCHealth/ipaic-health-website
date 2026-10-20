import { useCases } from "@/content/siteContent";

export function UseCases() {
  return (
    <section className="bg-surface px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="mx-auto max-w-xl text-center text-[28px] font-bold leading-tight tracking-tight text-navy sm:text-[34px]">
          {useCases.heading}
        </h2>
        <p className="mx-auto mt-3 text-center text-sm font-medium text-muted">{useCases.body}</p>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
          {useCases.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border-blue bg-white px-4 py-2.5 text-sm font-medium text-navy"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
