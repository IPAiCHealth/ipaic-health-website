import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { deliverInquiry } from "@/lib/inquiry-handler";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 400 },
    );
  }

  // Honeypot tripped — silently report success so bots don't learn to adapt.
  if (parsed.data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const { company_website: _honeypot, ...data } = parsed.data;

  try {
    await deliverInquiry(data);
  } catch {
    return NextResponse.json({ error: "Could not submit inquiry. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
