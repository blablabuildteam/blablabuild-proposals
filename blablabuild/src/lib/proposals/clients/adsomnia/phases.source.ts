import type { PackageSource, PhaseSource } from "@foundation/types";

export const phaseSources: readonly PhaseSource[] = [
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
    period: "",
    headline: "Centraal overzicht, **de juiste toolstack** en een fundament voor de PM-rol",
    workflows: ["WF2"],
    outcomes: [
      "Eén centraal overzicht van alle lopende projecten — altijd actueel",
      "Tool stack bepaald en ingericht op basis van hoe Adsomnia werkt en groeit",
      "Fundament staat klaar voor een Project / Product Manager — intern of nieuw — om direct vanuit te werken",
      "Structuur die schaalt — ongeacht of Adsomnia intern groeit of extern blijft werken",
    ],
  },
  {
    id: "near",
    label: "Always-On Retainer",
    period: "",
    headline: "Altijd beschikbaar — **Innovatie · Productie · Business**",
    workflows: ["WF3"],
    outcomes: [
      "Jouw vangnet op productie: directe beschikbaarheid bij problemen, geen wachttijd",
      "Ritme op innovatie: AI-initiatieven blijven leven en worden daadwerkelijk geïmplementeerd",
      "Strategisch sparringpartner: beslissingsondersteuning bij roadmap en prioriteiten",
      "Flexibel inzetbaar: jij bepaalt per week waar de uren naartoe gaan",
      "Altijd in context — geen briefingkosten, geen opstarttijd",
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
