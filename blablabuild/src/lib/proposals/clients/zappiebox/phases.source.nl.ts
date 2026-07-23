import type { PackageSource, PhaseSource } from "@foundation/types";

export const phaseSourcesNl: readonly PhaseSource[] = [
  {
    id: "now",
    label: "Fase 1 — Quick Wins",
    period: "0–3 maanden",
    headline: "Content, conversie & **eerste kanalentests**",
    workflows: ["WF1", "WF3", "WF5"],
    outcomes: [
      "Schaalbare UGC en TikTok-contentworkflow operationeel",
      "Conversieratio verbeterd via doelgroepgerichte landingspagina's",
      "YouTube Ads getest als aanvullend betaald kanaal",
      "Eerste creative-performancedata over kanalen heen",
      "Minder afhankelijkheid van één Meta-doelgroep",
    ],
  },
  {
    id: "next",
    label: "Fase 2 — Groei Fundament",
    period: "3–6 maanden",
    headline: "Organisch verkeer, data & **B2B-validatie**",
    workflows: ["WF2", "WF4", "WF6"],
    outcomes: [
      "Organisch verkeer structureel groeiend via SEO en AEO",
      "Performance-dashboard live: CAC, LTV, ROAS en cohortinzichten per kanaal",
      "B2B-propositie gevalideerd met eerste scholen of kinderopvangpartners",
      "Datagedreven media-investeringsbeslissingen die buikgevoel vervangen",
    ],
  },
  {
    id: "near",
    label: "Fase 3 — Nieuwe Markten",
    period: "6–12 maanden",
    headline: "B2B-infrastructuur, **internationale expansie** en technologie",
    workflows: ["WF7", "WF8", "WF9", "WF10"],
    outcomes: [
      "B2B-digitale omgeving live voor institutionele kopers (als WF6 valideert)",
      "CRM operationeel voor partner- en leadbeheer",
      "Duitsland-pilot afgerond met een data-gedreven go/no-go-aanbeveling",
      "Headless Shopify rebuild uitsluitend als concrete technische beperkingen zijn bewezen",
    ],
  },
];

export const packageSourcesNl: readonly PackageSource[] = [
  {
    name: "Scenario A — Quick Wins",
    tag: "Snelle start",
    workflows: "WF1 + WF3 + WF5",
    workflowIds: ["WF1", "WF3", "WF5"],
    weeks: "6–10",
    description:
      "TikTok/UGC-workflow, doelgroep-landingspagina's en YouTube Ads-pilot. Snelste weg naar kanaaldiversificatie en hogere conversie. Exclusief mediabudget en doorlopende contentproductie.",
  },
  {
    name: "Scenario B — Groei Fundament",
    tag: "Aanbevolen",
    workflows: "WF1 + WF2 + WF3 + WF4",
    workflowIds: ["WF1", "WF2", "WF3", "WF4"],
    weeks: "12–20",
    description:
      "Scenario A plus SEO/AEO en performance-dashboard. Bouwt het schaalbare fundament voor meerkanaalsgroei en datagedreven beslissingen. Ons aanbevolen startpunt.",
    recommended: true,
  },
  {
    name: "Scenario C — Groei & Nieuwe Kanalen",
    tag: "Volledig",
    workflows: "WF1–4 + WF6 + WF7 + WF9",
    workflowIds: ["WF1", "WF2", "WF3", "WF4", "WF6", "WF7", "WF9"],
    weeks: "20–40+",
    description:
      "Volledig aanbod inclusief B2B-propositie, B2B-website en Duitsland-pilot. Uitsluitend aanbevolen nadat Scenario B gevalideerde resultaten oplevert.",
  },
];
