import type { PackageSource, PhaseSource } from "@foundation/types";

export const phaseSources: readonly PhaseSource[] = [
  {
    id: "now",
    label: "Fase 1 · Kickoff",
    period: "Week 1–10",
    headline: "**Workshop** en **fundament** gelijktijdig",
    workflows: ["WF1", "WF2"],
    outcomes: [
      "Alle teams geactiveerd en spreken dezelfde AI-taal",
      "Concrete use cases gevalideerd en geprioriteerd",
      "Strategische AI-roadmap vastgelegd in NOW / NEXT / NEAR",
      "Organisatiestructuur en werkwijze ingericht voor AI-projecten",
      "Business cases voor de kansrijkste initiatieven klaar",
    ],
  },
  {
    id: "next",
    label: "Doorlopend",
    period: "Vanaf maand 2",
    headline: "Beschikbaarheid, **support** en doorgroei",
    workflows: ["WF3"],
    outcomes: [
      "Vaste blablabuild-capaciteit voor strategie en uitvoering",
      "AI-visie maandelijks aangescherpt op basis van learnings",
      "Technische en project support direct beschikbaar",
      "Nieuwe AI-initiatieven snel opgepakt vanuit bestaande context",
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
      "Workshop plus inrichting van het organisatiefundament. Klaar om te bouwen.",
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
