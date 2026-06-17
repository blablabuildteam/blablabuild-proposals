import type { ProposalBundle } from "../types";
import * as data from "./data";

export const meta = {
  slug: "ab-capital",
  clientName: "AB Capital",
  title: "**Digitale transformatie** roadmap",
  subtitle: "Gefaseerd automatiseringsprogramma · juni 2026",
} as const;

export const debrief = {
  quote:
    "In het algemeen is de grootste bottleneck om automatisering over de gehele AB Capital te verbeteren, om tijd vrij te maken voor uitvoering en minder ruimte voor fouten te creëren. AB Capital is de start-upfase ontgroeid. De volgende stap zijn geïnstitutionaliseerde, geautomatiseerde workflows, niet meer heroïek in persoonlijke inboxen.",
  quoteSource: "Discovery workshop",
  focusAreas:
    "11 focusgebieden: fondsoperaties, groepsfinanciën, family office en nieuwe investeringen",
  date: "juni 2026",
} as const;

/** Workshop impact/effort matrix: posities volgen het discovery-whiteboard */
export const impactMatrix = {
  quadrants: {
    quickWins: "Snelle winst",
    bigBets: "Grote zetten",
    incremental: "Geleidelijk",
    moneySinks: "Weinig rendement",
  },
  postIts: [
    { id: "WF0", label: "Lokale LLM", x: 10, y: 10, rotation: -4 },
    { id: "WF7", label: "Legal & KYC", x: 10, y: 24, rotation: 3 },
    { id: "WF8", label: "AI Deal Flow", x: 34, y: 12, rotation: -2 },
    { id: "WF5", label: "Documentverwerking", x: 16, y: 38, rotation: 4 },
    { id: "WF9", label: "Website-migratie", x: 40, y: 28, rotation: -5 },
    { id: "WF3", label: "Performance-inzichten", x: 40, y: 42, rotation: 2 },
    { id: "WF4", label: "LP-dashboard", x: 48, y: 48, rotation: -1 },
    { id: "WF10", label: "Bunch vervangen", x: 68, y: 32, rotation: -2 },
    { id: "WF1", label: "Asset management", x: 48, y: 54, rotation: 3 },
    { id: "WF6", label: "E-mail workflows", x: 26, y: 66, rotation: -3 },
    { id: "WF2", label: "Financieel overzicht", x: 22, y: 84, rotation: 2 },
  ],
  axisX: { low: "Lage inspanning", high: "Inspanning →" },
  axisY: { low: "Lage impact", high: "Impact →" },
  caption: "Impact/effort-matrix uit de discovery workshop: 11 workflows in kaart gebracht",
} as const;

export const understanding = {
  klanten: { label: "Klanten", value: "40+" },
  tools: {
    label: "Tools",
    value: "7",
    hint: "Twinfield · Basecone · Bunch · Notion…",
  },
  pillarsLabel: "Focusgebieden",
  pillars: [
    "Fondsoperaties",
    "Groepsfinanciën",
    "Family office",
    "Nieuwe investeringen",
  ],
  kicker: "De uitdaging",
  title: "Groei creëerde een **administratief plafond**",
  subtitle:
    "AB Capital is de start-upfase ontgroeid. Handmatige processen zijn nu de bottleneck, niet het team.",
  goalsLabel: "Doelen",
  goals: [
    { title: "Tijd bespaard" },
    { title: "Meer inzichten" },
    { title: "Silo's doorbreken" },
  ],
  frictionLabel: "Waar frictie vandaag zichtbaar is",
  friction: [
    "Handmatige documentstromen: downloaden, hernoemen, uploaden",
    "Bestanden vast in persoonlijke inboxen en ad-hoc mappen",
    "Twinfield, Bunch en interne tools praten niet met elkaar",
    "Repetitief juridisch en onboarding-werk dat niemand wil doen",
  ],
} as const;

export const access = {
  landing: {
    kicker: "Voorstel voor",
    greetingTemplate: "Hoi {name},",
    clientLabel: "Klant",
    passwordLabel: "Wachtwoord",
    passwordHint: "Gebruik het wachtwoord uit je uitnodiging.",
    submit: "Open voorstel",
    submitting: "Controleren…",
    opening: "Voorstel openen…",
    sessionExpired: "Je sessie is verlopen. Log opnieuw in.",
    invalidAccessLink:
      "Deze link is ongeldig of verlopen. Vul het wachtwoord uit je uitnodiging in.",
    accessDenied: "Onjuiste klant of wachtwoord",
    genericError: "Er ging iets mis. Probeer het opnieuw.",
    confidentialNote: "Vertrouwelijk · opgesteld door blablabuild",
  },
} as const;

export const slideCopy = {
  ui: {
    proposalFor: "Voorstel voor",
    weekPrefix: "Week",
    outcomes: "Resultaten",
    why: "Waarom",
    timeBack: "Tijd terug",
    openUseCase: "Open use case →",
    useCase: "Use case →",
    backToOverview: "Terug naar overzicht",
    whyThisMatters: "Waarom dit telt",
    whatYouGet: "Wat je krijgt",
    whatWeDeliver: "Wat we opleveren",
    unlocks: "Ontgrendelt",
    impactSuffix: "impact",
    exit: "Afsluiten",
    previous: "Vorige",
    next: "Volgende",
    useCaseFallback: "Use case",
    tableRank: "#",
    tableId: "ID",
    tableInitiative: "Initiatief",
    tablePhaseInvest: "Fase · Investering",
    tableRice: "RICE",
    fullRiceRanking: "Volledige RICE-ranking",
    phaseOneBadge: "F1",
    showingWorkflowsTemplate: "{filtered} van {total} workflows",
    filterByPhase: "Filter op fase",
    phaseFilters: {
      ALL: "Alles",
      NOW: "Nu",
      NEXT: "Volgend",
      NEAR: "Later",
      PARALLEL: "Parallel",
      BACKLOG: "Backlog",
    },
    phaseLabels: {
      NOW: "Nu",
      NEXT: "Volgend",
      NEAR: "Later",
      PARALLEL: "Parallel",
      BACKLOG: "Backlog",
    },
    bucketLabels: {
      "Quick Win": "Snelle winst",
      Incremental: "Geleidelijk",
      "Big Bet": "Grote zet",
    },
    impactLabels: {
      Massive: "Zeer hoog",
      High: "Hoog",
      Medium: "Gemiddeld",
      Low: "Laag",
    },
  },
  debriefKicker: "Discovery debrief",
  wayOfWorking: {
    kicker: "Werkwijze",
    title: "**Discovery** erin. **Werkende software** eruit.",
    subtitle:
      "Vier principes die bepalen hoe we met jullie bouwen, geen generiek agency-playbook.",
    aiTitle: "Wekelijkse syncs",
    aiBody:
      "Elke week een vast moment: voortgang, open punten en prioriteiten, zodat jullie altijd weten waar we staan en wat de volgende stap is.",
    controlTitle: "Jullie houden de regie",
    controlBody:
      "Scope wordt gevalideerd vóór de build. Heldere deliverables per fase. Jullie bepalen hoe ver we gaan.",
  },
  approach: {
    kicker: "Roadmap",
    title: "**Drie fases**, één programma",
    subtitle:
      "Elke fase levert bruikbare waarde voordat de volgende start. WF9 (website) loopt parallel in fase 2, apart spoor, zelfde tijdlijn.",
    parallelLabel: "Parallel",
    parallelBody:
      "Marketingupdates zonder ops-automatisering te blokkeren.",
  },
  workflows: {
    kicker: "Referentie",
    title: "Alle **11 workflows**",
    subtitle:
      "Volledig overzicht, filter op fase. Detailslides hierboven behandelen wat het meest telt.",
  },
  prioritization: {
    kicker: "Prioritering",
    title: "Waarom **deze volgorde**?",
    subtitle:
      "Gescoord op bereik, impact, zekerheid en inspanning, daarna gewogen op wat je eerst nodig hebt om de rest te kunnen bouwen.",
    startHere: "Start hier",
    phaseOne: "Fase 1",
    riceNote: "roadmapprioriteit boven ruwe ranking",
    phaseOneRationale:
      "RICE meet losse opbrengst per workflow. De roadmap meet volgorde: wat is snel live, wat ontbreekt als randvoorwaarde, en wat levert meteen momentum? WF7 (43) en WF1 (36) scoren hoger, maar leunen op WF0 voor veilige AI en op schone documenten uit WF5.",
    workflowRationale: {
      WF0:
        "Lagere RICE (30) door bereik: weinig directe eindgebruikers, wél randvoorwaarde. Zonder EU-hosted AI geen WF7, WF8 of andere flows op gevoelige data. Snelste inspanning in de top-5 (~1–1,5 week).",
      WF5:
        "Hoogste RICE (56) én dagelijkse ops-pijn. Direct ~6–10 u/week terug en een naamgevingsbackbone voor Bunch, reporting (WF3) en LP-views (WF4). ~2 weken, geen blokkerende afhankelijkheden.",
    },
    wf0Note:
      "RICE = (Bereik × Impact × Zekerheid) ÷ Inspanning. WF0 scoort lager op bereik, niet op impact of haalbaarheid. WF8 scoort lager (14) door inspanning maar leidt fase 2: eerst veilig fundament, dan deal flow. Samen leveren WF0 + WF5 in 2–3 weken bruikbare waarde vóór de zwaardere stappen.",
  },
  investment: {
    kicker: "Investering",
    title: "Investering **per fase**",
    subtitle:
      "Drie fases met onderbouwing per workflow. Elke fase levert waarde voordat de volgende start.",
  },
  nextSteps: {
    kicker: "Volgende stappen",
    title: "Klaar wanneer **jullie** dat zijn",
    subtitle: "Van roadmap naar gefaseerde uitvoering: vier stappen naar kick-off.",
    steps: [
      {
        n: "01",
        title: "Review",
        body:
          "Doorloop het faseplan, de workflows en investeringen in je eigen tempo. Noteer vragen, prioriteiten en wat voor jullie anders moet.",
      },
      {
        n: "02",
        title: "Call om te bespreken",
        body:
          "Korte sessie om open punten door te nemen: waar zit de meeste pijn, welke fase heeft prioriteit en wat moet anders dan in dit kader.",
      },
      {
        n: "03",
        title: "Fases en scope aanscherpen",
        body:
          "Samen finetunen we de fasering: workflows verschuiven, scope versmallen of verruimen, en timing afstemmen op jullie capaciteit. Van kader naar concreet: bevestigde scope per fase, line-item budget, deliverables en mijlpalen. Geen ballpark meer.",
      },
      {
        n: "04",
        title: "Contracting",
        body:
          "Statement of Work ondertekenen en kick-off plannen. Start binnen 2 weken na akkoord.",
      },
    ],
  },
  phaseNear: {
    wf10Note:
      "WF10 start met alleen discovery; bouwscope wordt na de deep-dive bepaald.",
  },
} as const;

export const bundle: ProposalBundle = {
  meta,
  access,
  debrief,
  impactMatrix,
  understanding,
  slideCopy,
  workflows: data.workflows,
  riceSorted: data.riceSorted,
  phases: data.phases,
  packages: data.packages,
  wayOfWorking: data.wayOfWorking,
  slideConfigs: data.slideConfigs,
  slideLabels: data.slideLabels,
  AI_BUILD_NOTE: data.AI_BUILD_NOTE,
};
