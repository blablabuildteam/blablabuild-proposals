"use client";

import { useProposal, useProposalLocale } from "@/components/ProposalProvider";
import { RoadmapTimeline } from "./RoadmapTimeline";
import { SlideTitle } from "./shared";

const defaultCopy = {
  kicker: "Roadmap",
  title: "Three phases, one programme",
  subtitle:
    "Each phase delivers usable value before the next starts. Projects that share data are connected — hover to explore.",
  parallelLabel: "Parallel",
  parallelBody: "Marketingupdates zonder ops-automatisering te blokkeren.",
  backlogLabel: "Backlog",
  backlogBody:
    "Bunch-vervanging start met discovery; implementatie volgt pas na een onderbouwde beslissing.",
};

const timelineAccents = ["lime", "blue", "neutral"] as const;

export function SlideApproach() {
  const { phases, getWorkflow, slideCopy } = useProposal();
  const { locale } = useProposalLocale();
  const copy = slideCopy?.approach ?? defaultCopy;

  const timeline = ["now", "next", "near"]
    .map((id) => phases.find((p) => p.id === id))
    .filter((phase): phase is NonNullable<typeof phase> => Boolean(phase))
    .map((phase, index) => ({
      id: phase.id,
      label: phase.label,
      period: phase.period,
      invest: phase.invest,
      workflows: phase.workflows,
      accent: timelineAccents[index] ?? "neutral",
    }));

  const secondaryPhases = phases.filter(
    (p) => p.id === "backlog" || p.id === "parallel",
  );

  const allTimelinePhases = [
    ...timeline,
    ...secondaryPhases.map((phase) => ({
      id: phase.id,
      label: phase.label,
      period: phase.period,
      invest: phase.invest,
      workflows: phase.workflows,
      accent: "neutral" as const,
    })),
  ];

  const connectionHint =
    locale === "nl"
      ? "Hover over een project om de datakoppelingen te zien."
      : "Hover a project to see data connections.";

  return (
    <div>
      <SlideTitle kicker={copy.kicker} title={copy.title} subtitle={copy.subtitle} />

      <RoadmapTimeline
        phases={allTimelinePhases}
        getWorkflow={getWorkflow}
        connectionHint={connectionHint}
      />
    </div>
  );
}
