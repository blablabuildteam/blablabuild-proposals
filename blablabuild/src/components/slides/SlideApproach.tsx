"use client";

import { useProposal, useProposalLocale } from "@/components/ProposalProvider";
import { RoadmapTimeline } from "./RoadmapTimeline";
import { SlideTitle } from "./shared";

const defaultCopy = {
  kicker: "Roadmap",
  title: "Three phases, one programme",
  subtitle:
    "Each phase delivers usable value before the next starts. Projects that share data are connected — click an arrow for details.",
  parallelLabel: "Parallel",
  parallelBody: "Marketingupdates zonder ops-automatisering te blokkeren.",
  backlogLabel: "Backlog",
  backlogBody:
    "Bunch-vervanging start met discovery; implementatie volgt pas na een onderbouwde beslissing.",
  connectionHint: "Click an arrow to see how projects connect to each other.",
  connectionTitle: "Data connection",
  connectionFallback:
    "These projects share data or build on each other's outputs.",
};

const timelineAccents = ["lime", "blue", "neutral"] as const;

export function SlideApproach() {
  const { phases, getWorkflow, slideCopy } = useProposal();
  const { locale } = useProposalLocale();
  const copy = slideCopy?.approach ?? defaultCopy;
  const phaseRationales = slideCopy?.prioritization?.phaseRationales;
  const phaseOneRationale = slideCopy?.prioritization?.phaseOneRationale;

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
    copy.connectionHint ??
    (locale === "nl"
      ? "Klik op een pijl om te zien hoe projecten met elkaar verbonden zijn."
      : "Click an arrow to see how projects connect to each other.");

  return (
    <div>
      <SlideTitle kicker={copy.kicker} title={copy.title} subtitle={copy.subtitle} />

      <RoadmapTimeline
        phases={allTimelinePhases}
        getWorkflow={getWorkflow}
        connectionHint={connectionHint}
        connectionTitle={copy.connectionTitle}
        connectionFallback={copy.connectionFallback}
        phaseRationales={phaseRationales}
        phaseOneRationale={phaseOneRationale}
      />
    </div>
  );
}
