import type { WorkflowSource } from "@foundation/types";

/**
 * Adsomnia proposal — 3 projecten:
 * WF1: AI Workshop & Roadmap
 * WF2: Project & Team Fundament
 * WF3: AI Retainer (doorlopend)
 */
export const workflowSources: WorkflowSource[] = [
  {
    id: "WF1",
    title: "AI Workshop & Roadmap",
    bucket: "Quick Win",
    rice: { reach: 10, impact: 3, confidencePct: 95, effort: 1 },
    impactLabel: "Massive",
    phaseOriginal: "NOW",
    phaseRevised: "PARALLEL",
    effort: { daysMin: 3, daysMax: 4, weeks: "3–4 weken", daysLabel: "26–28 uur" },
    cost: { min: 3900, max: 4200 },
    summary: "Van bewustwording naar een concrete AI-roadmap — in vier milestones.",
    why: "Adsomnia staat aan het begin van een AI-transitie. Zonder gedeeld bewustzijn, gecheckte use cases en een heldere roadmap ontstaat versnippering: iedereen doet iets met AI, maar niemand bouwt op hetzelfde fundament. Deze workshop brengt de teams samen, activeert ze direct en legt de basis voor alles wat volgt.",
    benefits: [
      "Alle teams spreken dezelfde AI-taal",
      "Concrete use cases gevalideerd per afdeling",
      "Eén gedeelde AI-roadmap in NOW / NEXT / NEAR",
      "Direct bruikbare Claude-prototypes als huiswerkresultaat",
      "Business cases voor de meest kansrijke initiatieven",
    ],
    timeSaved: "Weken aan trial-and-error omzeild door een gestructureerde start",
    deliverables: [
      "Workshopprogramma op maat (Milestone #1 + #3)",
      "Analyse en validatie van alle use cases per afdeling (Milestone #2)",
      "Strategische AI-roadmap NOW / NEXT / NEAR (Milestone #4)",
      "Business cases voor geselecteerde initiatieven",
    ],
  },
  {
    id: "WF2",
    title: "Project & Team Fundament",
    bucket: "Quick Win",
    rice: { reach: 10, impact: 2.5, confidencePct: 85, effort: 2 },
    impactLabel: "High",
    phaseOriginal: "NOW",
    phaseRevised: "PARALLEL",
    effort: { daysMin: 3, daysMax: 5, weeks: "4–6 weken", daysLabel: "20–30 uur" },
    cost: { min: 3000, max: 4500 },
    summary: "Een solide werkstructuur als basis: projectmanagement, samenwerking en way of working neergezet.",
    why: "AI-initiatieven slagen of falen op uitvoering, niet op ideeën. Zonder heldere projectstructuur, communicatielijnen en afgestemde manier van werken stranden de mooiste plannen in de dagelijkse waan. Dit project zet het fundament neer waarop de AI-roadmap daadwerkelijk gebouwd kan worden.",
    benefits: [
      "Eén gedeelde werkwijze voor alle AI-projecten",
      "Heldere rollen, verantwoordelijkheden en beslisstructuur",
      "Projectmanagement setup die schaalbaar is naar meerdere initiatieven",
      "Directe vermindering van miscommunicatie en dubbel werk",
      "Teams weten waar prioriteiten liggen en wie wat doet",
    ],
    timeSaved: "Uren per week minder afstemming en onduidelijkheid",
    deliverables: [
      "Projectmanagement omgeving ingericht (Notion / Linear of bestaande tooling)",
      "Gedefinieerde projectflows en statusrapportagestructuur",
      "Way of working document: beslisregels, ritme, rollen",
      "Onboarding voor het team",
    ],
  },
  {
    id: "WF3",
    title: "AI Retainer",
    bucket: "Incremental",
    rice: { reach: 10, impact: 2, confidencePct: 90, effort: 3 },
    impactLabel: "High",
    phaseOriginal: "NEXT",
    phaseRevised: "NEXT",
    effort: { daysMin: 0, daysMax: 0, weeks: "Doorlopend", daysLabel: "Doorlopend" },
    cost: { min: 0, max: 0 },
    investmentLabel: "€2.000 / maand",
    excludeFromTotals: true,
    hideTimeline: true,
    summary: "Vaste beschikbaarheid voor AI-visie uitbouwen, project support en technische begeleiding.",
    why: "AI-transformatie stopt niet na de workshop of de inrichting. Kansen en vragen komen doorlopend — nieuwe use cases, implementatievraagstukken, technische keuzes. Met een retainer is blablabuild structureel beschikbaar: niet als extern bureau dat je opnieuw moet onboarden, maar als verlengstuk van het team.",
    benefits: [
      "Vaste capaciteit per maand, flexibel inzetbaar",
      "Continuïteit in AI-visie en strategische sturing",
      "Snelle ondersteuning bij technische vragen en implementatie",
      "Directe escalatie bij vastlopers in projecten",
      "Maandelijkse afstemming met overzicht van voortgang en prioriteiten",
    ],
    timeSaved: "Geen opstart- of briefingkosten bij elk nieuw vraagstuk",
    deliverables: [
      "Maandelijks strategisch overleg",
      "Ad-hoc beschikbaarheid voor project support en technical support",
      "Doorlopende begeleiding bij uitbouwen AI-visie",
      "Prioriteitenlijst en voortgangsoverzicht per maand",
    ],
  },
];
