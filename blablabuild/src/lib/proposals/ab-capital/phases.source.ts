import type { PackageSource, PhaseSource } from "@foundation/types";

export const phaseSources: readonly PhaseSource[] = [
  {
    id: "now",
    label: "Fase 1 · NOW",
    period: "Week 1–4",
    headline: "Fundament en **directe ops-winsten**",
    workflows: ["WF0", "WF5"],
    outcomes: [
      "Veilige AI die het team op gevoelige data kan gebruiken",
      "Dagelijkse fondsdocumentverwerking op de automatische piloot",
      "Naamgevingsbackbone klaar voor alles wat volgt",
    ],
  },
  {
    id: "next",
    label: "Fase 2 · NEXT",
    period: "Maand 2–3",
    headline: "Structuur, **deal flow** en onboarding",
    workflows: ["WF8", "WF1", "WF7"],
    outcomes: [
      "Sneller pad van opportunity naar investment committee",
      "Eén bestandsstructuur voor de hele organisatie",
      "Juridische onboarding-templates: fase 1 live",
    ],
  },
  {
    id: "parallel",
    label: "Parallel spoor",
    period: "Maand 2–3",
    headline: "Merk en **digitale presence**",
    workflows: ["WF9"],
    outcomes: [
      "Marketingupdates zonder developer-afhankelijkheid",
      "Moderne publieke site",
      "Onafhankelijk van de timing van de ops-roadmap",
    ],
  },
  {
    id: "near",
    label: "Fase 3 · NEAR",
    period: "Maand 4+",
    headline: "Dataplatforms en **langetermijninzetten**",
    workflows: ["WF3", "WF2", "WF4", "WF6", "WF10"],
    outcomes: [
      "Live financieel en portfolio-inzicht",
      "LP-investeerdersportaal",
      "Onderbouwde beslissing over Bunch-vervanging",
    ],
  },
];

export const packageSources: readonly PackageSource[] = [
  {
    name: "Foundation",
    tag: "Klein beginnen",
    workflows: "WF0 + WF5",
    workflowIds: ["WF0", "WF5"],
    weeks: "2–3",
    description:
      "Veilige AI plus documentautomatisering: snelle ROI, laag risico, legt de backbone.",
  },
  {
    name: "Momentum",
    tag: "Aanbevolen",
    workflows: "WF0 + WF5 + WF8 MVP",
    workflowIds: ["WF0", "WF5", "WF8"],
    weeks: "6–8",
    description:
      "Fundament plus deal flow: ops-efficiëntie en impact voor het investment team samen.",
    recommended: true,
  },
  {
    name: "Full Phase 1–2",
    tag: "Compleet",
    workflows: "WF0–WF8 + WF1 + WF7 fase 1",
    workflowIds: ["WF0", "WF5", "WF8", "WF1", "WF7"],
    weeks: "10–14",
    description:
      "Volledige NOW + NEXT-roadmap inclusief file governance en juridische automatisering.",
  },
];
