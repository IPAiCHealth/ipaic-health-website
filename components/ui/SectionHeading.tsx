type Align = "left" | "center";

export function SectionHeading({
  eyebrow,
  heading,
  body,
  align = "center",
  light = false,
  headingClassName = "",
  maxWidth = "max-w-2xl",
}: {
  eyebrow?: string;
  heading: string | string[];
  body?: string | string[];
  align?: Align;
  light?: boolean;
  headingClassName?: string;
  maxWidth?: string;
}) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${maxWidth} ${alignClass}`}>
      {eyebrow && (
        <span
          className={`text-sm font-semibold tracking-[0.12em] uppercase ${
            light ? "text-cyan" : "text-secondary-blue"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-[32px] leading-[1.15] font-bold tracking-tight sm:text-[38px] md:text-[44px] ${
          light ? "text-white" : "text-navy"
        } ${headingClassName}`}
      >
        {Array.isArray(heading)
          ? heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))
          : heading}
      </h2>
      {body && (
        <p className={`text-base sm:text-lg leading-relaxed ${light ? "text-white/75" : "text-muted"}`}>
          {Array.isArray(body)
            ? body.map((line) => (
                <span key={line} className="block sm:whitespace-nowrap">
                  {line}
                </span>
              ))
            : body}
        </p>
      )}
    </div>
  );
}
