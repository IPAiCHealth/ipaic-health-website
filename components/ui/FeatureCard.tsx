import { getIcon } from "@/lib/icons";

export function FeatureCard({
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
    <div className="group flex flex-col gap-4 rounded-xl border border-border-blue bg-white p-7 transition-colors duration-200 hover:border-secondary-blue/50">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-light-blue text-navy transition-colors duration-200 group-hover:bg-navy group-hover:text-white">
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-navy sm:text-[21px]">{title}</h3>
      <p className="text-[15px] leading-relaxed text-muted sm:text-base">{description}</p>
    </div>
  );
}
