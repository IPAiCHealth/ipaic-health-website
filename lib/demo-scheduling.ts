// Demo scheduling integration (e.g. Calendly) is added later by setting
// NEXT_PUBLIC_DEMO_SCHEDULING_URL. Until configured, scheduling UI stays hidden
// and CTAs fall back to the contact form.
export function getDemoSchedulingUrl(): string | undefined {
  const url = process.env.NEXT_PUBLIC_DEMO_SCHEDULING_URL;
  return url && url.trim().length > 0 ? url : undefined;
}
