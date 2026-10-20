"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Check, AlertCircle } from "lucide-react";
import { contact } from "@/content/siteContent";
import { SectionHeading } from "./ui/SectionHeading";
import { getDemoSchedulingUrl } from "@/lib/demo-scheduling";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const demoSchedulingUrl = getDemoSchedulingUrl();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      organization: formData.get("organization"),
      interest: formData.get("interest"),
      message: formData.get("message"),
      company_website: formData.get("company_website"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="bg-background px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <SectionHeading heading={contact.heading} body={contact.body} align="left" />

          <div className="flex flex-col gap-4">
            {contact.paths.map((path) => (
              <div key={path.title} className="rounded-xl border border-border-blue bg-white p-5 shadow-card">
                <h3 className="text-base font-semibold text-navy">{path.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{path.description}</p>
              </div>
            ))}
          </div>

          {demoSchedulingUrl && (
            <a
              href={demoSchedulingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit rounded-[10px] border border-navy px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-light-blue"
            >
              Book a Demo
            </a>
          )}
        </div>

        <div className="flex flex-col justify-center rounded-2xl border border-border-blue bg-white p-7 shadow-card sm:p-9">
          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                <Check className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </div>
              <p className="text-lg font-semibold text-navy">{contact.form.successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              {/* Honeypot — hidden from real users via CSS, not display:none, to deter simple bots */}
              <div className="absolute left-[-9999px]" aria-hidden="true">
                <label htmlFor="company_website">Company Website</label>
                <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
              </div>

              <Field label="Name" name="name" required />

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Work Email" name="email" type="email" required />
                <Field label="Organization" name="organization" />
              </div>

              <SelectField label="I'm interested in" name="interest" options={contact.form.interests} />

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-navy">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="rounded-lg border border-border-blue bg-background px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-cyan"
                />
              </div>

              {status === "error" && errorMessage && (
                <div className="flex items-center gap-2 rounded-lg bg-red-50 px-3.5 py-2.5 text-sm text-red-700">
                  <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-1 flex items-center justify-center gap-2 rounded-[10px] bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light disabled:opacity-60"
              >
                {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                {contact.form.submitLabel}
              </button>

              <p className="text-xs leading-relaxed text-muted">{contact.form.privacyNote}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-navy">
        {label} {required && <span className="text-cyan">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        className="rounded-lg border border-border-blue bg-background px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-cyan"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-navy">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="rounded-lg border border-border-blue bg-background px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-cyan"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
