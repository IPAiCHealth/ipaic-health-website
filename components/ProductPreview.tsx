import { productPreview } from "@/content/siteContent";
import { SectionHeading } from "./ui/SectionHeading";
import { Circle, FileText } from "lucide-react";

const statusStyles: Record<string, string> = {
  "Review Recommended": "bg-cyan/15 text-secondary-blue",
  "New Information": "bg-light-blue text-navy",
  "Context Updated": "bg-soft-blue/60 text-navy",
  Reviewed: "bg-border-blue/60 text-muted",
};

export function ProductPreview() {
  const { sidebar, tabs, rightPanel } = productPreview;

  return (
    <section className="bg-surface px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading heading={productPreview.heading} body={productPreview.body} />

        <div className="mt-10 overflow-hidden rounded-2xl border border-border-blue bg-white shadow-card-hover">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-border-blue bg-light-blue/40 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-border-blue" />
            <span className="h-2.5 w-2.5 rounded-full bg-border-blue" />
            <span className="h-2.5 w-2.5 rounded-full bg-border-blue" />
            <span className="ml-3 text-xs font-medium text-muted">ARIA — Surveillance Workspace</span>
          </div>

          <div className="grid grid-cols-1 overflow-x-auto lg:grid-cols-[180px_1fr_220px]">
            {/* Left sidebar */}
            <div className="hidden flex-col gap-5 border-r border-border-blue p-4 lg:flex">
              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-muted">Units</p>
                <div className="flex flex-col gap-1">
                  {sidebar.units.map((u, i) => (
                    <span
                      key={u}
                      className={`rounded-md px-2.5 py-1.5 text-[13px] font-medium ${
                        i === 0 ? "bg-navy text-white" : "text-text"
                      }`}
                    >
                      {u}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-muted">Patients</p>
                <div className="flex flex-col gap-1.5">
                  {sidebar.patients.map((p) => (
                    <div key={p.id} className="flex items-center gap-1.5 text-[12px] text-text">
                      <Circle className="h-2 w-2 shrink-0 fill-cyan text-cyan" aria-hidden="true" />
                      {p.id}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Center workspace */}
            <div className="flex flex-col gap-4 border-r border-border-blue p-5">
              <div className="flex items-center gap-1 border-b border-border-blue pb-3">
                {tabs.map((tab, i) => (
                  <span
                    key={tab}
                    className={`rounded-t-md px-3 py-1.5 text-[13px] font-medium ${
                      i === 1 ? "bg-light-blue text-navy" : "text-muted"
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>

              <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">
                Recent updates · Patient 001
              </p>
              <div className="flex flex-col gap-2.5">
                {sidebar.patients.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center justify-between rounded-lg border border-border-blue px-3.5 py-3"
                  >
                    <span className="text-[13px] font-medium text-text">{p.id}</span>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                        statusStyles[p.status]
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right panel */}
            <div className="flex flex-col gap-3 p-5">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-secondary-blue" aria-hidden="true" />
                <p className="text-[13px] font-semibold text-navy">{rightPanel.title}</p>
              </div>
              <div className="flex flex-col gap-2">
                {rightPanel.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-border-blue bg-background px-3 py-2.5 text-[12px] text-muted"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-muted">{productPreview.caption}</p>
      </div>
    </section>
  );
}
