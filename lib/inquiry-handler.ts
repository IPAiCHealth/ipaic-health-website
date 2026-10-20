import type { ContactFormValues } from "./contact-schema";

// Abstraction point for delivering inquiries. Swap the implementation below to
// call Resend, HubSpot, Salesforce, Formspree, or a custom CRM/API — the
// /api/contact route and the form only depend on this function's signature.
export async function deliverInquiry(data: Omit<ContactFormValues, "company_website">): Promise<void> {
  // TODO: replace with a real integration, e.g.:
  //
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "IPAiC Website <inquiries@ipaic.health>",
  //   to: process.env.INQUIRY_NOTIFICATION_EMAIL!,
  //   subject: `New inquiry from ${data.organization}`,
  //   text: JSON.stringify(data, null, 2),
  // });
  console.log("[IPAiC inquiry received]", data);
}
