import { footer, brand } from "@/content/siteContent";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy px-5 py-14 sm:px-8">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-2.5">
          <span className="text-xl font-extrabold tracking-tight text-white">{brand.name}</span>
          <span className="text-sm text-white/60">{footer.descriptor}</span>
          <span className="text-sm font-medium text-cyan">{footer.tagline}</span>
        </div>

        <nav className="flex flex-wrap gap-x-7 gap-y-3">
          {footer.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1280px] flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/60 sm:whitespace-nowrap">{footer.statement}</p>
        <div className="flex items-center gap-5">
          {footer.legal.map((link) => (
            <a key={link.label} href={link.href} className="text-xs text-white/50 hover:text-white/80">
              {link.label}
            </a>
          ))}
          <span className="text-xs text-white/50">
            © {year} {brand.fullName}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
