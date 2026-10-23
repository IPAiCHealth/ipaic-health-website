import { hero } from "@/content/siteContent";
import { CTAButton } from "./ui/CTAButton";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[560px] items-center overflow-hidden bg-navy sm:min-h-[600px] lg:min-h-[680px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-24">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-[0.12em] text-cyan">{hero.eyebrow}</span>

            <h1 className="text-[38px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[48px] lg:text-[60px]">
              {hero.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-white/80">{hero.subheadline}</p>

          <div className="mt-1 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CTAButton href="#contact" variant="hero-primary" showArrow>
              {hero.primaryCta}
            </CTAButton>
            <CTAButton href="#aria" variant="hero-secondary">
              {hero.secondaryCta}
            </CTAButton>
          </div>

          <p className="mt-1 max-w-xl border-t border-white/10 pt-4 text-sm text-white/60 sm:whitespace-nowrap">
            {hero.supportingLine}
          </p>
        </div>

        <HeroSignalGraph />
      </div>
    </section>
  );
}

// An abstract branching network radiating outward from a center point.
// Each generation of branches sits further out and fades further into the
// background, rather than a flat grid or mesh with uniform weight.
type GraphNode = { x: number; y: number; depth: 0 | 1 | 2 | 3 };

const graphNodes: GraphNode[] = [
  { x: 220, y: 223, depth: 0 },
  // generation 1 — six primary branches at uneven angles
  { x: 158, y: 173, depth: 1 },
  { x: 232, y: 128, depth: 1 },
  { x: 292, y: 176, depth: 1 },
  { x: 290, y: 270, depth: 1 },
  { x: 226, y: 317, depth: 1 },
  { x: 152, y: 263, depth: 1 },
  // generation 2 — two children per primary branch
  { x: 102, y: 135, depth: 2 }, { x: 118, y: 227, depth: 2 },
  { x: 208, y: 61, depth: 2 }, { x: 272, y: 74, depth: 2 },
  { x: 348, y: 135, depth: 2 }, { x: 350, y: 216, depth: 2 },
  { x: 342, y: 290, depth: 2 }, { x: 328, y: 344, depth: 2 },
  { x: 258, y: 381, depth: 2 }, { x: 182, y: 375, depth: 2 },
  { x: 92, y: 290, depth: 2 }, { x: 108, y: 335, depth: 2 },
  // generation 3 — sparse twigs, nearly dissolved into the background
  { x: 58, y: 105, depth: 3 },
  { x: 188, y: 14, depth: 3 },
  { x: 390, y: 236, depth: 3 },
  { x: 365, y: 375, depth: 3 },
  { x: 288, y: 405, depth: 3 },
  { x: 70, y: 367, depth: 3 },
];

const graphEdges: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
  [1, 7], [1, 8], [2, 9], [2, 10], [3, 11], [3, 12],
  [4, 13], [4, 14], [5, 15], [5, 16], [6, 17], [6, 18],
  [7, 19], [9, 20], [12, 21], [14, 22], [15, 23], [18, 24],
];

const depthStyle = {
  0: { r: 7, nodeOpacity: 1 },
  1: { r: 4, nodeOpacity: 0.7, edgeOpacity: 0.42, edgeWidth: 1.4 },
  2: { r: 3, nodeOpacity: 0.38, edgeOpacity: 0.2, edgeWidth: 1.1 },
  3: { r: 2, nodeOpacity: 0.15, edgeOpacity: 0.09, edgeWidth: 0.9 },
} as const;

function HeroSignalGraph() {
  return (
    <div className="mx-auto w-full max-w-md">
      <svg viewBox="0 0 440 430" className="h-auto w-full" aria-hidden="true">
        {graphEdges.map(([a, b]) => {
          const style = depthStyle[graphNodes[b].depth as 1 | 2 | 3];
          return (
            <line
              key={`${a}-${b}`}
              x1={graphNodes[a].x}
              y1={graphNodes[a].y}
              x2={graphNodes[b].x}
              y2={graphNodes[b].y}
              stroke="#58B7C8"
              strokeOpacity={style.edgeOpacity}
              strokeWidth={style.edgeWidth}
            />
          );
        })}

        {graphNodes.map((n, i) => {
          const style = depthStyle[n.depth];
          return (
            <g key={i}>
              {n.depth === 0 && <circle cx={n.x} cy={n.y} r={16} fill="#58B7C8" fillOpacity={0.18} />}
              <circle cx={n.x} cy={n.y} r={style.r} fill="#58B7C8" fillOpacity={style.nodeOpacity} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
