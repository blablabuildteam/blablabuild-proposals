import type { PackageSource, PhaseSource } from "@foundation/types";

/**
 * Phases hier alleen voor investment rollup — geen fase-slides in de deck.
 * De 3 projecten zijn los en kunnen parallel lopen.
 */
export const phaseSources: readonly PhaseSource[] = [
  {
    id: "now",
    label: "Projecten",
    period: "Flexibel, parallel uitvoerbaar",
    headline: "Drie losse projecten",
    workflows: ["WF1", "WF2"],
    outcomes: [
      "AI Workshop & Roadmap afgerond",
      "Organisatiefundament ingericht",
    ],
  },
  {
    id: "next",
    label: "Doorlopend",
    period: "Vanaf start",
    headline: "AI Retainer",
    workflows: ["WF3"],
    outcomes: [
      "Vaste blablabuild-capaciteit beschikbaar",
    ],
  },
];

export const packageSources: readonly PackageSource[] = [
  {
    name: "Workshop",
    tag: "Start hier",
    workflows: "WF1",
    workflowIds: ["WF1"],
    weeks: "3–4",
    description:
      "AI Workshop met vier milestones: van bewustwording tot strategische roadmap en business cases.",
  },
  {
    name: "Kickoff",
    tag: "Aanbevolen",
    workflows: "WF1 + WF2",
    workflowIds: ["WF1", "WF2"],
    weeks: "6–10",
    description:
      "Workshop plus organisatiefundament. Kunnen parallel lopen — klaar om te bouwen.",
    recommended: true,
  },
  {
    name: "Full Partnership",
    tag: "Doorlopend",
    workflows: "WF1 + WF2 + Retainer",
    workflowIds: ["WF1", "WF2", "WF3"],
    weeks: "Doorlopend",
    description:
      "Volledige samenwerking: kickoff, fundament én vaste blablabuild-capaciteit per maand.",
  },
];
