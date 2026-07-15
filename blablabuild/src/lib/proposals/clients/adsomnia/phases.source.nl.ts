import type { PackageSource, PhaseSource } from "@foundation/types";

export const phaseSourcesNl: readonly PhaseSource[] = [
  {
    id: "now",
    label: "AI Enablement Workshop",
    period: "",
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
    period: "Pending voorverkenning",
    headline: "Centraal overzicht, **de juiste toolstack** en een fundament voor de PM-rol",
    workflows: ["WF2"],
    outcomes: [
      "Eén centraal overzicht van alle lopende projecten — altijd actueel",
      "Toolstack bepaald en ingericht op basis van hoe Adsomnia werkt en groeit",
      "Fundament klaar voor een PM / PO — intern of te werven — om direct vanuit te werken",
      "Structuur die schaalt — of Adsomnia intern groeit of extern blijft werken",
    ],
  },
  {
    id: "near",
    label: "Always-On Retainer",
    period: "Nader te bepalen",
    headline: "Altijd beschikbaar — **Innovatie · Productie · Business**",
    workflows: ["WF3"],
    outcomes: [
      "Productie: vangnet én directe support voor de head of delivery — escalaties worden opgepakt voordat het problemen worden",
      "Innovatie: maandelijkse 'AI 30 Minutes of Now' sessies + nieuwe AI-ideeën die ontstaan krijgen eigenaarschap en structuur",
      "Business: strategisch sparring op roadmap, prioriteiten en beslissingen",
      "Jij bepaalt hoe de uren verdeeld worden over de drie gebieden — op basis van wat die week het hardst nodig is",
    ],
  },
];

export const packageSourcesNl: readonly PackageSource[] = [
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
