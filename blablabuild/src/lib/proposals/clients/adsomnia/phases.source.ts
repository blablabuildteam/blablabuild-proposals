import type { PackageSource, PhaseSource } from "@foundation/types";

export const phaseSources: readonly PhaseSource[] = [
  {
    id: "now",
    label: "AI Enablement Workshop",
    period: "29 juli · start zo snel mogelijk",
    headline: "**Human-First, AI-Empowered** — van grunt work naar strategische impact",
    workflows: ["WF1"],
    outcomes: [
      "Elk team begrijpt wat AI voor hun werk betekent — concreet en direct toepasbaar",
      "Use cases per afdeling gevalideerd, geprioriteerd en klaar om op te pakken",
      "Gedeelde AI-roadmap: NOW / NEXT / NEAR — gedragen door het hele team",
      "Business cases voor de kansrijkste initiatieven uitgewerkt",
      "Een ritme van innovatie neergezet — geen eenmalige hype",
    ],
  },
  {
    id: "next",
    label: "Project Enablement",
    period: "Parallel of aansluitend",
    headline: "Fundament, werkwijze en **tooling ingericht**",
    workflows: ["WF2"],
    outcomes: [
      "Jira of bestaande tooling ingericht op maat",
      "Gedeelde werkwijze en stramien voor projecten",
      "Teams weten hoe ze samenwerken en wie wat beslist",
      "Klaar om AI-initiatieven uit de workshop op te pakken",
    ],
  },
  {
    id: "near",
    label: "Samenwerking",
    period: "Doorlopend",
    headline: "AI-implementatie, technische begeleiding en **projectmanagement**",
    workflows: ["WF3"],
    outcomes: [
      "AI-initiatieven landen daadwerkelijk in de organisatie",
      "Technical guidance bij architectuur- en toolkeuzes",
      "PM/PO als vliegende keep over de hele organisatie",
      "Maandelijks overzicht van voortgang en prioriteiten",
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
    name: "Workshop + Enablement",
    tag: "Aanbevolen",
    workflows: "WF1 + WF2",
    workflowIds: ["WF1", "WF2"],
    weeks: "6–10",
    description:
      "Workshop én organisatiefundament. Kunnen parallel lopen — klaar om te bouwen na afloop.",
    recommended: true,
  },
  {
    name: "Full Partnership",
    tag: "Doorlopend",
    workflows: "WF1 + WF2 + Retainer",
    workflowIds: ["WF1", "WF2", "WF3"],
    weeks: "Doorlopend",
    description:
      "Volledige samenwerking: workshop, fundament én doorlopende blablabuild-capaciteit.",
  },
];
