"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, brand } from "@/content/siteContent";
import { CTAButton } from "./ui/CTAButton";

export function Navbar() {
  const [open, setOpen] = useState(false);

  function scrollToTop(e: React.MouseEvent) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollToSection(e: React.MouseEvent, href: string) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 20;
    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border-blue/70 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          onClick={scrollToTop}
          className="flex items-center text-2xl font-extrabold tracking-tight"
        >
          <span className="text-navy">IP</span>
          <span className="text-cyan">Ai</span>
          <span className="text-navy">C</span>
          <span className="sr-only">{brand.fullName}</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-text transition-colors duration-200 hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <CTAButton href="#contact" variant="primary">
            {nav.cta}
          </CTAButton>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border-blue bg-white px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text"
                onClick={(e) => {
                  scrollToSection(e, link.href);
                  setOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
            <CTAButton href="#contact" variant="primary" className="mt-2 w-full">
              {nav.cta}
            </CTAButton>
          </div>
        </div>
      )}
    </header>
  );
}
