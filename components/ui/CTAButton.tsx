import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "hero-primary" | "hero-secondary" | "text";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-navy text-white hover:bg-navy-light shadow-card hover:shadow-card-hover",
  secondary:
    "bg-transparent text-navy border border-navy hover:bg-light-blue",
  "hero-primary": "bg-white text-navy hover:bg-light-blue",
  "hero-secondary":
    "bg-transparent text-white border border-white/40 hover:border-white/80 hover:bg-white/5",
  text: "bg-transparent text-cyan hover:text-navy underline-offset-4 hover:underline p-0!",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  showArrow = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  showArrow?: boolean;
  className?: string;
}) {
  const base =
    variant === "text"
      ? "inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
      : "inline-flex items-center justify-center gap-2 rounded-[10px] px-6 py-3.5 text-sm font-semibold transition-all duration-200";

  return (
    <a
      href={href}
      className={`${base} ${variantClasses[variant]} ${className}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </a>
  );
}
