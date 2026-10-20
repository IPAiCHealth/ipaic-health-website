import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  email: z.string().trim().min(1, "Work email is required").email("Enter a valid email address").max(200),
  organization: z.string().trim().max(200).optional().or(z.literal("")),
  interest: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().max(5000).optional().or(z.literal("")),
  // Honeypot field — real users never fill this in; bots usually do.
  company_website: z.string().max(0, "Spam check failed").optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
