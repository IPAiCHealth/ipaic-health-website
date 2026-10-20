"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { aria } from "@/content/siteContent";
import { SectionHeading } from "./ui/SectionHeading";
import { getIcon } from "@/lib/icons";

export function AriaCapabilities() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const count = aria.capabilities.length;

  function selectAndFocus(index: number) {
    const next = (index + count) % count;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  function handleKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      selectAndFocus(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      selectAndFocus(index - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      selectAndFocus(0);
    } else if (e.key === "End") {
      e.preventDefault();
      selectAndFocus(count - 1);
    }
  }

  return (
    <section
      id="aria"
      className="flex min-h-[560px] items-center bg-light-blue px-5 py-16 sm:min-h-[600px] sm:px-8 sm:py-20 lg:min-h-[680px]"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <SectionHeading
          eyebrow={aria.eyebrow}
          heading={aria.heading}
          body={aria.body}
          headingClassName="sm:whitespace-nowrap"
          maxWidth="max-w-3xl"
        />

        <div className="mt-10">
          <div
            role="tablist"
            aria-label="ARIA capabilities"
            className="scrollbar-none flex gap-1 overflow-x-auto border-b border-border-blue sm:justify-center sm:overflow-visible"
          >
            {aria.capabilities.map((cap, i) => (
              <button
                key={cap.title}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`aria-tab-${i}`}
                aria-selected={i === active}
                aria-controls={`aria-panel-${i}`}
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className={`shrink-0 whitespace-nowrap border-b-2 px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                  i === active
                    ? "border-navy text-navy"
                    : "border-transparent text-muted hover:text-navy"
                }`}
              >
                {cap.navLabel}
              </button>
            ))}
          </div>

          {/* All panels are stacked in the same grid cell so the container
              auto-sizes to the tallest one (Unit View) instead of resizing
              as the active tab changes; only the active panel is visible. */}
          <div className="relative mt-8 grid rounded-2xl border border-border-blue bg-white p-8 sm:p-10">
            {aria.capabilities.map((cap, i) => {
              const PanelIcon = getIcon(cap.icon);
              const isActive = i === active;
              return (
                <div
                  key={cap.title}
                  role="tabpanel"
                  id={`aria-panel-${i}`}
                  aria-labelledby={`aria-tab-${i}`}
                  aria-hidden={!isActive}
                  className={`col-start-1 row-start-1 grid gap-10 transition-opacity duration-200 lg:grid-cols-[0.85fr_1.15fr] lg:items-center ${
                    isActive ? "opacity-100" : "invisible opacity-0"
                  }`}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                      <PanelIcon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy sm:text-2xl">{cap.title}</h3>
                    <p className="text-base leading-relaxed text-muted">{cap.description}</p>
                  </div>

                  <CapabilityVisual index={i} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilityVisual({ index }: { index: number }) {
  switch (index) {
    case 0:
      return <UnitViewVisual />;
    case 1:
      return <RecentUpdatesVisual />;
    case 2:
      return <ClinicalTimelineVisual />;
    case 3:
      return <OverlapReviewVisual />;
    default:
      return <EvidenceWorkspaceVisual />;
  }
}

const visualWrapper = "flex min-h-[240px] flex-col justify-center gap-3 rounded-xl border border-border-blue bg-surface p-6";

const unitRows = [
  { unit: "Unit A", patient: "Patient 014", status: "Review Recommended" },
  { unit: "Unit B", patient: "Patient 022", status: "New Information" },
  { unit: "Unit A", patient: "Patient 031", status: "Context Updated" },
  { unit: "Unit C", patient: "Patient 008", status: "Reviewed" },
];

const statusStyles: Record<string, string> = {
  "Review Recommended": "bg-cyan/15 text-secondary-blue",
  "New Information": "bg-light-blue text-navy",
  "Context Updated": "bg-soft-blue/60 text-navy",
  Reviewed: "bg-border-blue/60 text-muted",
};

function UnitViewVisual() {
  return (
    <div className={visualWrapper}>
      {unitRows.map((row) => (
        <div
          key={row.patient}
          className="flex items-center justify-between rounded-lg border border-border-blue bg-white px-4 py-3"
        >
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-secondary-blue">{row.unit}</span>
            <span className="text-sm font-medium text-text">{row.patient}</span>
          </div>
          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[row.status]}`}>
            {row.status}
          </span>
        </div>
      ))}
    </div>
  );
}

const updateItems = [
  { text: "New culture result available", time: "2h ago", highlight: true },
  { text: "Device removed — central line", time: "5h ago", highlight: false },
  { text: "Transfer to Unit B", time: "Yesterday", highlight: false },
];

function RecentUpdatesVisual() {
  return (
    <div className={visualWrapper}>
      <div className="flex flex-col">
        {updateItems.map((item, i) => (
          <div key={item.text} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span
                className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${
                  item.highlight ? "bg-cyan" : "bg-border-blue"
                }`}
              />
              {i < updateItems.length - 1 && <span className="w-px flex-1 bg-border-blue" />}
            </div>
            <div className="flex flex-1 items-center justify-between pb-6">
              <span className="text-sm font-medium text-text">{item.text}</span>
              <span className="text-xs text-muted">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const timelinePoints = [
  { label: "Admission", day: "Day 1" },
  { label: "Labs", day: "Day 3" },
  { label: "Device", day: "Day 4" },
  { label: "Procedure", day: "Day 6" },
  { label: "Discharge", day: "Day 9" },
];

function ClinicalTimelineVisual() {
  return (
    <div className={visualWrapper}>
      <div className="relative flex justify-between px-1">
        <span className="absolute left-1 right-1 top-2 h-px bg-border-blue" aria-hidden="true" />
        {timelinePoints.map((point, i) => (
          <div key={point.label} className="relative flex flex-col items-center gap-2">
            <span
              className={`h-3.5 w-3.5 rounded-full border-2 border-white ${
                i === 1 ? "bg-cyan" : "bg-secondary-blue"
              }`}
            />
            <span className="text-xs font-semibold text-navy">{point.label}</span>
            <span className="text-[11px] text-muted">{point.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const overlapRows = [
  { label: "Room 204", start: 10, width: 45 },
  { label: "Room 311", start: 35, width: 50 },
];

function OverlapReviewVisual() {
  return (
    <div className={visualWrapper}>
      {overlapRows.map((row) => (
        <div key={row.label} className="flex items-center gap-3">
          <span className="w-16 shrink-0 text-xs font-semibold text-secondary-blue">{row.label}</span>
          <div className="relative h-5 flex-1 rounded-full bg-white">
            <div
              className="absolute top-0 h-full rounded-full bg-border-blue"
              style={{ left: `${row.start}%`, width: `${row.width}%` }}
            />
          </div>
        </div>
      ))}
      <div className="flex items-center gap-3">
        <span className="w-16 shrink-0" />
        <div className="relative h-5 flex-1 rounded-full">
          <div
            className="absolute top-0 h-full rounded-full border border-cyan bg-cyan/20"
            style={{ left: "35%", width: "20%" }}
          />
        </div>
      </div>
      <p className="text-center text-xs font-medium text-secondary-blue">Overlapping window identified</p>
    </div>
  );
}

const guidanceSources = ["NHSN Definition", "Hospital Policy", "Clinical Reference"];
const guidanceFields = ["Supporting rationale", "Source", "Reference", "Date / version"];

function EvidenceWorkspaceVisual() {
  return (
    <div className={visualWrapper}>
      <p className="text-xs font-semibold uppercase tracking-wide text-muted">Relevant Guidance</p>
      <div className="flex flex-wrap gap-2">
        {guidanceSources.map((s) => (
          <span key={s} className="rounded-lg border border-border-blue bg-white px-3 py-2 text-sm text-text">
            {s}
          </span>
        ))}
      </div>
      <div className="mt-1 grid grid-cols-2 gap-2 border-t border-border-blue pt-4">
        {guidanceFields.map((f) => (
          <span key={f} className="rounded-md bg-light-blue/60 px-3 py-2 text-xs font-medium text-secondary-blue">
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}
