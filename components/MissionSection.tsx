import { mission } from "@/content/siteContent";

export function MissionSection() {
  return (
    <section id="mission" className="bg-navy px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <span className="text-sm font-semibold tracking-[0.12em] text-cyan">{mission.eyebrow}</span>
        <h2 className="text-[36px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[48px] lg:text-[56px]">
          {mission.statement}
        </h2>
        <p className="mt-2 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">{mission.body}</p>
      </div>
    </section>
  );
}
