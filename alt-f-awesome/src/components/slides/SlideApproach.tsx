"use client";

import { useProposal } from "@/components/ProposalProvider";
import { Callout, PhaseTimeline, SlideTitle } from "./shared";

export function SlideApproach() {
  const { phases } = useProposal();

  const timeline = [
    {
      num: "01",
      label: phases[0].label,
      period: phases[0].period,
      invest: phases[0].invest,
      headline: phases[0].headline,
      workflows: phases[0].workflows,
      accent: "lime" as const,
    },
    {
      num: "02",
      label: phases[1].label,
      period: phases[1].period,
      invest: phases[1].invest,
      headline: phases[1].headline,
      workflows: phases[1].workflows,
      accent: "blue" as const,
    },
    {
      num: "03",
      label: phases[3].label,
      period: phases[3].period,
      invest: phases[3].invest,
      headline: phases[3].headline,
      workflows: phases[3].workflows,
      accent: "neutral" as const,
    },
  ];

  return (
    <div>
      <SlideTitle
        kicker="Roadmap"
        title="Three phases — one programme"
        subtitle="Each phase delivers usable value before the next starts. WF9 (website) runs in parallel during Phase 2 — separate track, same timeline."
      />

      <PhaseTimeline phases={timeline} />

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <div className="flex-1 rounded-[var(--brand-radius)] border border-dashed border-[var(--brand-primary)]/40 bg-[var(--brand-primary)]/5 px-4 py-3">
          <p className="text-xs font-bold text-[var(--brand-primary)] uppercase">
            Parallel · {phases[2].period}
          </p>
          <p className="mt-1 text-sm text-[var(--brand-fg-secondary)]">
            <strong>WF9 Website</strong> — {phases[2].invest}. Marketing
            updates without blocking ops automation.
          </p>
        </div>
        <Callout tone="lime" title="Start here">
          Phase 1 only: {phases[0].invest} · {phases[0].period}
        </Callout>
      </div>
    </div>
  );
}
