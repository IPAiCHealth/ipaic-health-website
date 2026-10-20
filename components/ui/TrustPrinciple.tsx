import { getIcon } from "@/lib/icons";

export function TrustPrinciple({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  const Icon = getIcon(icon);

  return (
    <div className="flex flex-col gap-3.5 border-t border-navy/15 pt-7 first:border-t-0 first:pt-0 lg:border-t-0 lg:border-l lg:px-7 lg:py-4 lg:first:border-l-0 lg:first:pl-0 lg:first:pt-4">
      <Icon className="h-5 w-5 text-navy" strokeWidth={1.5} aria-hidden="true" />
      <h3 className="text-base font-semibold text-navy">{title}</h3>
      <p className="text-[15px] leading-relaxed text-navy/70">{description}</p>
    </div>
  );
}
