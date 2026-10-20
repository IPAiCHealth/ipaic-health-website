// Centralized website copy for IPAiC Health.
// Edit this file to update messaging anywhere on the site without touching component logic.

export const brand = {
  name: "IPAiC",
  fullName: "IPAiC Health",
  descriptor: "Intelligent Infection Prevention",
  tagline: "Smarter Infection Prevention. Safer Patient Care.",
  mission:
    "To empower Infection Prevention teams with intelligent, evidence-guided technology that reduces manual work, surfaces the right information at the right time, and supports faster, more confident decisions to protect patients.",
};

export const nav = {
  links: [
    { label: "Product", href: "#product" },
    { label: "Why IPAiC", href: "#why-ipaic" },
    { label: "Our Mission", href: "#mission" },
    { label: "Pilot Program", href: "#pilot" },
  ],
  cta: "Request a Demo",
};

export const hero = {
  eyebrow: "AI-ENABLED INFECTION PREVENTION SURVEILLANCE",
  headline: ["See what matters.", "Act with confidence."],
  subheadline:
    "IPAiC brings relevant surveillance information, clinical context, and evidence into one structured workflow for Infection Prevention teams.",
  supportingLine:
    "Designed to support — not replace — Infection Prevention expertise.",
  primaryCta: "Request a Demo",
  secondaryCta: "Explore ARIA",
  tertiaryCta: "Learn more about a Pilot",
};

export const introduction = {
  eyebrow: "INTRODUCING IPAiC",
  heading: "A surveillance workspace built around Infection Prevention.",
  body: "IPAiC connects relevant clinical information into a structured surveillance experience. Instead of repeatedly searching across the health record, Infection Prevention professionals can review meaningful changes, understand patient context, examine timelines and potential overlaps, access supporting guidance, and document their assessment in one workflow.",
  steps: [
    { number: "01", title: "Connect", description: "Bring in source data" },
    { number: "02", title: "Organize", description: "Structure surveillance information" },
    { number: "03", title: "Surface", description: "Bring forward changes" },
    { number: "04", title: "Review", description: "Human-in-the-loop" },
    { number: "05", title: "Decide & Document", description: "Document final assessment" },
  ],
};

export const aria = {
  eyebrow: "MEET ARIA",
  heading: "Your surveillance intelligence layer.",
  body: "ARIA is the intelligence layer within IPAiC that helps organize information, surface meaningful changes, and support the Infection Prevention review process.",
  capabilities: [
    {
      navLabel: "Unit View",
      icon: "LayoutGrid",
      title: "Prioritized Unit View",
      description:
        "See patients and surveillance priorities through an organized unit-level view designed around Infection Prevention workflows.",
    },
    {
      navLabel: "Recent Updates",
      icon: "Sparkles",
      title: "Meaningful Updates",
      description:
        "Surface clinically relevant changes since the last review so teams can focus attention where it may be needed.",
    },
    {
      navLabel: "Clinical Timeline",
      icon: "GitCommitHorizontal",
      title: "Clinical Timeline",
      description:
        "Bring relevant microbiology, clinical events, devices, movement, and other contextual information into one chronological view.",
    },
    {
      navLabel: "Overlap Review",
      icon: "Network",
      title: "Exposure & Overlap Review",
      description:
        "Review shared locations and time periods that may matter when assessing potential transmission or exposure.",
    },
    {
      navLabel: "Evidence Workspace",
      icon: "ShieldCheck",
      title: "Evidence-Guided Workspace",
      description:
        "Surveillance decisions often require interpretation of definitions, policies, and guidance. ARIA is designed to make relevant supporting information available within the review workflow rather than requiring another search.",
    },
  ],
};

export const productPreview = {
  heading: "One place to understand the surveillance story.",
  body: "ARIA is designed to make complex patient information easier to review — without removing the Infection Prevention professional from the decision.",
  caption: "Illustrative product interface — all data shown is fictional.",
  sidebar: {
    units: ["Unit A", "Unit B", "Unit C"],
    patients: [
      { id: "Patient 001", status: "Review Recommended" },
      { id: "Patient 002", status: "New Information" },
      { id: "Patient 003", status: "Context Updated" },
      { id: "Patient 004", status: "Reviewed" },
    ],
  },
  tabs: ["Overview", "Updates", "Timeline", "Overlap", "Review"],
  rightPanel: {
    title: "Relevant Guidance",
    items: ["NHSN Definition", "Hospital Policy", "Clinical Reference"],
  },
};

export const whyIPAiC = {
  eyebrow: "WHY IPAiC",
  heading: "Built for the work between the data and the decision.",
  values: [
    {
      icon: "Search",
      title: "Less time spent searching",
      description:
        "Bring relevant surveillance information together instead of repeatedly navigating across the health record.",
    },
    {
      icon: "Eye",
      title: "Faster understanding of clinical context",
      description: "See the information that contributes to the surveillance story in a structured view.",
    },
    {
      icon: "ListChecks",
      title: "More consistent review",
      description: "Support a shared approach to surveillance assessment while preserving professional judgment.",
    },
    {
      icon: "Link2",
      title: "Traceable decisions",
      description:
        "Connect surveillance reasoning with the information, evidence, and guidance that supported the review.",
    },
    {
      icon: "HeartPulse",
      title: "More time for prevention",
      description:
        "Reduce administrative surveillance burden so Infection Prevention teams can focus more attention on intervention, education, investigation, and prevention.",
    },
  ],
};

export const trust = {
  eyebrow: "BUILT FOR RESPONSIBLE CLINICAL USE",
  heading: "AI that keeps the Infection Prevention professional in control.",
  principles: [
    {
      icon: "UserCheck",
      title: "Human oversight",
      description: "ARIA supports surveillance review. The Infection Prevention professional remains responsible for the final assessment.",
    },
    {
      icon: "Eye",
      title: "Transparent support",
      description: "Relevant information, evidence, and reasoning should remain visible rather than hidden behind an unexplained output.",
    },
    {
      icon: "GitBranch",
      title: "Traceability",
      description: "Supporting information can remain connected to the surveillance review and documented decision.",
    },
    {
      icon: "Workflow",
      title: "Workflow integration",
      description: "AI should support existing professional processes rather than create another disconnected system.",
    },
  ],
};

export const useCases = {
  heading: "One platform. Multiple workflows.",
  body: "Potential workflows IPAiC is designed to support:",
  items: [
    "Healthcare-associated infection surveillance",
    "MDRO / organism review",
    "Potential transmission investigation",
    "Clinical timeline reconstruction",
    "Patient overlap review",
    "Policy and guideline lookup",
    "Surveillance documentation",
  ],
};

export const mission = {
  eyebrow: "OUR MISSION",
  statement: "Give Infection Prevention teams more time to prevent.",
  body: brand.mission,
};

export const pilot = {
  eyebrow: "PILOT PROGRAM",
  heading: "Help shape the future of infection surveillance.",
  body: [
    "We are engaging with healthcare organizations and Infection Prevention leaders to evaluate",
    "real-world workflows, refine ARIA, and identify opportunities for pilot implementation.",
  ],
  subBody:
    "We are especially interested in working with organizations that want to explore how AI‑enabled surveillance support can reduce manual review while keeping Infection Prevention professionals at the center of every decision.",
  pillars: [
    { title: "Validate", description: "Evaluate IPAiC against real Infection Prevention surveillance workflows." },
    { title: "Collaborate", description: "Work directly with Infection Prevention professionals, leadership, and informatics teams." },
    { title: "Shape", description: "Help inform usability, workflow design, integration priorities, and future implementation." },
  ],
  primaryCta: "Inquire About the Pilot Program",
};

export const contact = {
  heading: "Let's Connect.",
  body: "Whether you're exploring a product demo, evaluating a pilot opportunity, or simply interested in how IPAiC could fit into your surveillance program, we'd like to hear from you.",
  paths: [
    {
      title: "Request a Demo",
      description: "See how ARIA brings surveillance information, clinical context, and structured review into one workflow.",
    },
    {
      title: "Pilot Program",
      description: "Discuss whether your organization could participate in product validation or future pilot implementation.",
    },
  ],
  form: {
    interests: ["Product Demo", "Pilot Program", "Partnership", "General Inquiry"],
    submitLabel: "Submit Inquiry",
    successMessage: "Thank you. Your inquiry has been received. We'll be in touch soon.",
    privacyNote: "Please do not include patient-identifiable or protected health information in this form.",
  },
};

export const footer = {
  descriptor: brand.descriptor,
  tagline: brand.tagline,
  statement: "Healthcare technology for more efficient, consistent infection surveillance workflows.",
  links: [
    { label: "Product", href: "#product" },
    { label: "Why IPAiC", href: "#why-ipaic" },
    { label: "Our Mission", href: "#mission" },
    { label: "Pilot Program", href: "#pilot" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};
