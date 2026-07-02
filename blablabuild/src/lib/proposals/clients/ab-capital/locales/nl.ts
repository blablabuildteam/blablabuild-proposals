import { BLABLABUILD_RATE_CARD } from "@foundation/config";
import { buildAiWorkflowEstimate } from "@foundation/cost";
import type { AbCapitalLocaleContent } from "./types";

const rate = BLABLABUILD_RATE_CARD;
const sdpFoundation = buildAiWorkflowEstimate(2, rate, { speedMultiplier: 4 });
const wf2OnSdp = buildAiWorkflowEstimate(2.5, rate, { speedMultiplier: 5 });
const wf4OnSdp = buildAiWorkflowEstimate(2, rate, { speedMultiplier: 5 });

export const nl: AbCapitalLocaleContent = {
  meta: {
    slug: "ab-capital",
    clientName: "ABCapital",
    clientLogo: "/ab-capital-logo.png",
    title: "**Digitale transformatie** roadmap",
    subtitle: "Gefaseerd automatiseringsprogramma, juni 2026",
  },
  debrief: {
    quote:
      "ABCapital is de start-upfase ontgroeid. Om verder te groeien is meer automatisering nodig. Door processen slimmer en consistenter in te richten, ontstaat meer tijd voor uitvoering en neemt de kans op fouten af. Het doel is minder afhankelijk te zijn van persoonlijke kennis en losse e-mails, en meer te werken vanuit gestandaardiseerde, geautomatiseerde workflows.",
    quoteSource: "Workshop intake",
    focusAreas:
      "4 focusgebieden: Fund Operations, Group Financing, Family office en New Investments",
    date: "juni 2026",
  },
  impactMatrix: {
    quadrants: {
      quickWins: "Snelle winst",
      bigBets: "Grote zetten",
      incremental: "Geleidelijk",
      moneySinks: "Weinig rendement",
    },
    postIts: [
      { id: "WF0", label: "Lokale LLM", x: 10, y: 6, rotation: -4 },
      { id: "WF7", label: "Legal & KYC", x: 10, y: 24, rotation: 3 },
      { id: "WF8", label: "AI-deals", x: 34, y: 12, rotation: -2 },
      { id: "WF5", label: "Documentverwerking", x: 16, y: 38, rotation: 4 },
      { id: "WF9", label: "Website-migratie", x: 40, y: 28, rotation: -5 },
      { id: "WF3", label: "Performance-inzichten", x: 40, y: 42, rotation: 2 },
      { id: "WF4", label: "LP-dashboard", x: 48, y: 48, rotation: -1 },
      { id: "WF10", label: "Bunch, verkenning", x: 68, y: 32, rotation: -2 },
      { id: "WF1", label: "Asset management", x: 48, y: 54, rotation: 3 },
      { id: "WF6", label: "E-mailworkflows", x: 26, y: 66, rotation: -3 },
      { id: "WF2", label: "Financieel overzicht", x: 22, y: 84, rotation: 2 },
    ],
    axisX: { low: "Lage inspanning", high: "Inspanning" },
    axisY: { low: "Lage impact", high: "Impact" },
    caption:
      "Impact/effort-matrix uit de workshop: 11 workflows in kaart gebracht.",
  },
  understanding: {
    klanten: { label: "Limited Partners", value: "40+" },
    tools: {
      label: "Tools",
      value: "7",
      hint: "Twinfield, Basecone, Harvest, Notion, SharePoint, Claude, Bunch",
    },
    pillarsLabel: "Focusgebieden",
    pillars: [
      "Fund Operations",
      "Group Financing",
      "Family office",
      "New Investments",
    ],
    kicker: "De uitdaging",
    title: "Groei stuit op een **administratief plafond**",
    subtitle:
      "ABCapital is de start-upfase ontgroeid. Handmatig werk is nu het knelpunt, niet het team.",
    goalsLabel: "Doelen",
    goals: [
      { title: "Tijdsbesparing" },
      { title: "Meer inzichten" },
      { title: "Silo's doorbreken" },
    ],
    frictionLabel: "Waar frictie vandaag zichtbaar is",
    friction: [
      "Handmatige documentstromen: downloaden, hernoemen, uploaden",
      "Bestanden vast in persoonlijke inboxen en ad-hoc mappen",
      "Twinfield, Bunch en interne tools praten niet met elkaar",
      "Repetitief juridisch en onboardingwerk dat niemand wil doen",
    ],
  },
  access: {
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
      confidentialNote: "Vertrouwelijk, opgesteld door blablabuild",
    },
  },
  slideCopy: {
    ui: {
      proposalFor: "Voorstel voor",
      weekPrefix: "Week",
      outcomes: "Resultaten",
      why: "Waarom",
      timeBack: "Tijdwinst",
      openUseCase: "Bekijk toelichting",
      useCase: "Toelichting",
      backToOverview: "Terug naar overzicht",
      whyThisMatters: "Waarom dit telt",
      whatYouGet: "Wat je krijgt",
      whatWeDeliver: "Wat we opleveren",
      prerequisites: "Vereisten",
      unlocks: "Maakt mogelijk",
      interconnectivity: "Interconnectiviteit",
      interconnectivityHint:
        "Dit project deelt data of bouwt voort op andere projecten in de roadmap — klik om het gekoppelde project te bekijken.",
      feedsFrom: "Ontvangt van",
      feedsInto: "Draagt bij aan",
      impactSuffix: "impact",
      exit: "Afsluiten",
      previous: "Vorige",
      next: "Volgende",
      useCaseFallback: "Toelichting",
      tableRank: "#",
      tableId: "ID",
      tableInitiative: "Initiatief",
      tablePhaseInvest: "Fase, investering",
      tableRice: "RICE",
      fullRiceRanking: "Volledige RICE-ranking",
      phaseOneBadge: "F1",
      showingWorkflowsTemplate: "{filtered} van {total} workflows",
      filterByPhase: "Filter op fase",
      phaseFilters: {
        ALL: "Alles",
        NOW: "NOW",
        NEXT: "NEXT",
        NEAR: "NEAR",
        PARALLEL: "Parallel",
        BACKLOG: "Backlog",
      },
      phaseLabels: {
        NOW: "NOW",
        NEXT: "NEXT",
        NEAR: "NEAR",
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
    debriefKicker: "Workshop samengevat",
    wayOfWorking: {
      kicker: "Werkwijze",
      title: "**Eerst verkennen**, daarna **bouwen wat werkt**.",
      subtitle:
        "Vier principes die bepalen hoe we met jullie samenwerken. Geen standaard bureautraject.",
      aiTitle: "Wekelijkse afstemming",
      aiBody:
        "Elke week een vast moment voor voortgang, open punten en prioriteiten. Zo weten jullie altijd waar we staan en wat de volgende stap is.",
      controlTitle: "Jullie houden de regie",
      controlBody:
        "Scope leggen we vast vóór we bouwen. Per fase heldere opleveringen. Jullie bepalen hoe ver we gaan.",
    },
    approach: {
      kicker: "Roadmap",
      title: "**Drie fases**, één traject",
      subtitle:
        "Fase 1 levert impact en fundering. Fase 2 de eerste automatisering, inclusief e-mail. Fase 3 data en dashboards. WF9 (website) loopt parallel in fase 2.",
      parallelLabel: "Parallel",
      parallelBody:
        "Marketing kan door terwijl de operationele automatisering doorloopt.",
      backlogLabel: "Backlog",
      backlogBody:
        "Vervanging van Bunch start met verkenning. Implementatie volgt pas na een onderbouwde beslissing.",
    },
    workflows: {
      kicker: "Overzicht",
      title: "Alle **11 workflows**",
      subtitle:
        "Volledig overzicht, filter op fase. De detailpagina's hierboven gaan in op wat het meest telt.",
    },
    prioritization: {
      kicker: "Prioritering",
      title: "Waarom **deze volgorde**?",
      subtitle:
        "Gescoord op bereik, impact, zekerheid en inspanning, daarna gewogen op wat je eerst nodig hebt om de rest te kunnen bouwen.",
      startHere: "Start hier",
      phaseOne: "Fase 1",
      riceNote: "roadmap-volgorde boven kale score",
      phaseOneRationale:
        "RICE meet losse opbrengst per workflow. De roadmap meet volgorde: wat is snel live, wat ontbreekt als randvoorwaarde, en wat levert meteen momentum? WF7 (43) hoort in fase 1 naast WF0 en WF5. Juridische automatisering bouwt op het veilige AI-fundament en levert snel winst bij onboarding.",
      workflowRationale: {
        WF0:
          "Hogere impact als fundament: maakt WF5, WF7, WF8 en elke AI-flow op gevoelige data mogelijk. RICE (60) weerspiegelt organisatiebreed bereik, niet alleen directe eindgebruikers. Laagste inspanning in de top 5 (ongeveer 1 tot 1,5 week).",
        WF5:
          "Hoogste RICE (56) én dagelijkse pijn in de operatie. Direct 6 tot 10 uur per week terug, plus een naamgevingsbasis voor Bunch, rapportage (WF3) en LP-overzichten (WF4). Ongeveer 2 weken, geen blokkerende afhankelijkheden.",
      },
      wf0Note:
        "RICE = (Bereik × Impact × Zekerheid) ÷ Inspanning. WF0 scoort hoog op impact als fundament. Bereik is verhoogd omdat het de hele AI-roadmap mogelijk maakt. WF8 scoort lager (14) door inspanning maar opent fase 2: eerst een veilig fundament, dan dealverwerking. Samen leveren WF0, WF5 en WF7 in fase 1 bruikbare waarde vóór de zwaardere stappen.",
    },
    investment: {
      kicker: "Investering",
      title: "Investering **per fase**",
      subtitle:
        "Drie fases met onderbouwing per workflow. Elke fase levert waarde voordat de volgende start.",
      platformBundleTitle: "Combinatievoordeel",
      platformSavingsLabel: "Bespaar",
      platformNote:
        "WF2 en WF4 samen op het Smart Data Platform. De faseprijs hierboven is al gebaseerd op dit combinatievoordeel.",
    },
    nextSteps: {
      kicker: "Volgende stappen",
      title: "Klaar wanneer **jullie** willen",
      subtitle: "Van roadmap naar uitvoering: vier stappen tot de start.",
      steps: [
        {
          n: "01",
          title: "Voorstel doorlezen",
          body:
            "Doorloop het faseplan, de workflows en investeringen in je eigen tempo. Noteer vragen, prioriteiten en wat voor jullie anders moet.",
        },
        {
          n: "02",
          title: "Bespreken",
          body:
            "Korte sessie om dit voorstel samen door te nemen. Open vragen, welke fase prioriteit heeft en wat jullie anders willen dan in dit kader.",
        },
        {
          n: "03",
          title: "Fases en scope aanscherpen",
          body:
            "Samen scherpen we de fasering aan: workflows verschuiven, scope versmallen of verruimen, en timing afstemmen op jullie capaciteit. Van kader naar concreet: bevestigde scope per fase, budget per regel, opleveringen en mijlpalen.",
        },
        {
          n: "04",
          title: "Contract afsluiten",
          body:
            "Onderteken de Statement of Work en plan de kick-off. Start binnen 2 weken na akkoord.",
        },
      ],
    },
    phaseBacklog: {
      note:
        "WF10 staat los van de gefaseerde roadmap: geen prijs of doorlooptijd tot jullie expliciet kiezen om te verkennen. Dan volgen stakeholders, requirements en build vs. buy vóór elke migratiebeslissing.",
    },
  },
  wayOfWorking: [
    {
      title: "Verkenning eerst",
      body: "We starten vanuit jullie workshopbevindingen, niet vanuit een standaard draaiboek. Scope leggen we vast vóór we gaan bouwen.",
    },
    {
      title: "Bouwen met AI",
      body: "Met AI bouwen we sneller werkende software, tegen een fractie van de kosten van een klassiek bureau.",
    },
    {
      title: "Stap voor stap",
      body: "Elke fase levert bruikbare waarde voordat de volgende start. Jullie bepalen hoe ver we gaan.",
    },
    {
      title: "Jullie data, jullie beveiliging",
      body: "Vooral voor ABCapital: private AI, hosting in de EU, geen vertrouwelijke data bij publieke taalmodellen.",
    },
  ],
  slideLabels: {
    debrief: "Debrief",
    understanding: "Uitdaging",
    "way-of-working": "Werkwijze",
    approach: "Roadmap",
    "phase-now": "Fase 1",
    "phase-next": "Fase 2",
    "phase-near": "Fase 3",
    "phase-backlog": "Backlog",
    workflows: "Workflows",
    prioritization: "Prioritering",
    investment: "Investering",
    "next-steps": "Volgende stappen",
  },
  aiBuildNote:
    "Schattingen gaan uit van AI-ondersteunde oplevering (ongeveer 5× sneller bouwen). Bandbreedtes zijn bewust ruim gehouden tot scope is vastgelegd. Hosting en licenties van derden niet inbegrepen.",
  phases: [
    {
      id: "now",
      label: "Fase 1, NOW",
      period: "Week 1 tot 6",
      headline: "**Fundament** en snelle winst in de operatie",
      workflows: ["WF0", "WF5", "WF7"],
      outcomes: [
        "Veilige AI die het team op gevoelige data kan gebruiken",
        "Dagelijkse fondsdocumentverwerking volledig geautomatiseerd",
        "Naamgevingsstructuur klaar voor alles wat volgt",
        "Juridische onboarding-sjablonen operationeel in fase 1",
      ],
    },
    {
      id: "next",
      label: "Fase 2, NEXT",
      period: "Maand 2 tot 3",
      headline: "Structuur, **deals** en e-mail",
      workflows: ["WF8", "WF1", "WF6"],
      outcomes: [
        "Sneller van kans tot investeringscomité",
        "Eén bestandsstructuur voor de hele organisatie",
        "E-mailacties automatisch als taken in Notion",
      ],
    },
    {
      id: "parallel",
      label: "Parallel spoor",
      period: "Maand 2 tot 3",
      headline: "**Merk** en digitale zichtbaarheid",
      workflows: ["WF9"],
      outcomes: [
        "Marketing kan zelfstandig bijwerken, zonder developers",
        "Moderne publieke website",
        "Los van de timing van de operationele roadmap",
      ],
    },
    {
      id: "near",
      label: "Fase 3, NEAR",
      period: "Maand 4+",
      headline: "Data-platforms en **actueel inzicht**",
      workflows: ["WF3", "WF2", "WF4"],
      outcomes: [
        "Actueel financieel en portfolio-inzicht",
        "LP-investeerdersportaal",
        "Optioneel: WF2 en WF4 samen via Smart Data Platform (schaalvoordeel)",
      ],
    },
    {
      id: "backlog",
      label: "Backlog",
      period: "Na fase 3, op verzoek",
      headline: "Bunch vervangen, **eerst verkennen**",
      workflows: ["WF10"],
      outcomes: [
        "Onderbouwde beslissing: blijven bij Bunch of migreren",
        "Zelf bouwen of inkopen, en ROI per fonds in kaart",
        "Migratieroadmap alleen na expliciete go/no-go",
      ],
    },
  ],
  packages: [
    {
      name: "Foundation",
      tag: "Klein beginnen",
      workflows: "WF0 + WF5",
      workflowIds: ["WF0", "WF5"],
      weeks: "2 tot 3",
      description:
        "Veilige AI plus documentautomatisering: snelle ROI, laag risico, legt de basis.",
    },
    {
      name: "Momentum",
      tag: "Aanbevolen",
      workflows: "WF0 + WF5 + WF8 MVP",
      workflowIds: ["WF0", "WF5", "WF8"],
      weeks: "6 tot 8",
      description:
        "Fundament plus dealverwerking: operationele efficiëntie en impact voor het investment team samen.",
      recommended: true,
    },
    {
      name: "Full Phase 1–2",
      tag: "Compleet",
      workflows: "WF0–WF7 + WF8 + WF1",
      workflowIds: ["WF0", "WF5", "WF8", "WF1", "WF7"],
      weeks: "10 tot 14",
      description:
        "Volledige NOW- en NEXT-roadmap inclusief documentbeheer en juridische automatisering.",
    },
  ],
  platformBundles: [
    {
      id: "sdp",
      name: "Smart Data Platform",
      tagline: "Eén centrale database voor finance en LP",
      description:
        "In plaats van WF2 en WF4 als losse koppelingen te bouwen, leggen we eerst een gedeelde datalaag: koppelingen met Twinfield, Basecone en Bunch, één datamodel en één pipeline. Daarna worden het financiële dashboard en het LP-portaal weergaven op dezelfde bron. Minder dubbel werk, sneller live, lager totaalbedrag.",
      workflowIds: ["WF2", "WF4"],
      foundation: sdpFoundation,
      layers: [
        {
          workflowId: "WF2",
          label: "Financieel dashboard",
          effort: wf2OnSdp.effort,
          cost: wf2OnSdp.cost,
        },
        {
          workflowId: "WF4",
          label: "LP-dashboard",
          effort: wf4OnSdp.effort,
          cost: wf4OnSdp.cost,
        },
      ],
      deliverables: [
        "Centrale data-opslag met versiebeheer en controlelog",
        "Koppelingen met Twinfield, Basecone en Bunch",
        "Gedeeld entiteiten- en fondsmodel",
        "API-laag voor toekomstige workflows (o.a. WF3)",
      ],
    },
  ],
  workflows: {
    WF0: {
      title: "Veilig AI-fundament",
      summary:
        "Een eigen private AI-omgeving voor gevoelige financiële en klantdata.",
      why: "Publieke AI-tools zijn geen optie bij vertrouwelijke fonds-, klant- en dealdata. ABCapital heeft AI nodig die in Europa blijft, alleen jullie data gebruikt en nooit op jullie informatie traint.",
      benefits: [
        "Werken met gevoelige data zonder lek naar Amerikaanse modellen",
        "Jullie documenten blijven van jullie: geen opslag door derden, gehost in de EU",
        "Afstemmen op eigen kaders, memo's en beleid",
        "Eén vertrouwde laag voor elke AI-workflow die volgt",
      ],
      unlocks: [
        { workflowId: "WF5" },
        { workflowId: "WF7" },
        { workflowId: "WF8" },
      ],
      timeSaved: "Basis voor veilige AI in de hele organisatie",
      deliverables: [
        "Private AI-omgeving in de EU",
        "Teamtraining: veilig en effectief werken met de private AI",
        "Gebruiksrichtlijnen waar het team op kan vertrouwen",
        "Klaar voor automatisering in deals, legal en operatie",
      ],
    },
    WF5: {
      title: "Fondsdocument-pipeline",
      summary:
        "Geen handmatig hernoemen en uploaden meer. De dagelijkse fondsadministratie verdwijnt.",
      why: "Capital calls, distributies en kwartaalrapporten komen continu binnen. Eén verkeerde bestandsnaam breekt automatiseringen in Bunch verderop. Repetitief werk dat niemand handmatig zou moeten doen.",
      benefits: [
        "Inkomende documenten krijgen elke keer de juiste naam",
        "Gedeelde naamgevingsregels worden de basis voor AI om bestanden te lezen en te routeren",
        "Minder fouten die workflows in de fondsadministratie breken",
        "Direct tijdwinst voor het operatieteam, elke week",
      ],
      unlocks: [
        {
          workflowId: "WF3",
          qualifier: "Schonere data voor rapportage",
        },
        {
          workflowId: "WF4",
          qualifier: "Betrouwbare input voor LP-overzichten",
        },
      ],
      timeSaved: "6 tot 10 uur per week fondsadministratie",
      deliverables: [
        "Automatische intake en hernoemen naar Bunch-conventies",
        "Tussenopslag voor upload: geen download-hernoem-upload meer",
        "Naamgevingsstandaard gedocumenteerd voor mens en AI",
      ],
    },
    WF8: {
      title: "Dealverwerking en investmentmemo's",
      summary:
        "Van binnenkomende kans tot investeringscomité: drie workflows met interface — risico, profiel en memo.",
      why: "Elke deal wordt vandaag anders beoordeeld. Dat vertraagt de voorbereiding op het comité en maakt kwaliteit afhankelijk van wie er tijd heeft. Jullie hebben een vaste manier nodig om risico te wegen, structuren in kaart te brengen en memo's op te stellen — elk als eigen input-naar-output flow met een duidelijke interface.",
      benefits: [
        "Kansen consistent vergelijken met jullie investment thesis",
        "Organogrammen en cap tables automatisch in kaart gebracht",
        "Eerste versie investment memo's in uren in plaats van dagen",
        "Drie losse modules (risico, profiel, memo) met één consistente UX",
        "Betere gesprekken in het comité, met minder voorbereidingstijd",
      ],
      prerequisites: [{ workflowId: "WF0" }],
      timeSaved: "Van 2 tot 3 dagen per deal naar memo-concept in uren",
      deliverables: [
        "Risicobeoordeling op basis van jullie thesis, met interface",
        "Gestructureerd entiteits- en cap table-profiel",
        "Memo-output klaar voor presentatie",
      ],
    },
    WF1: {
      title: "Bestands- en documentbeheer",
      summary:
        "Eén plek voor elk bestand, met chatinterface om documenten en informatie direct op te vragen.",
      why: "Kritieke documenten liggen in persoonlijke inboxen en ad-hoc SharePoint-mappen. Dat creëert silo's en vertraagt iedereen wanneer iets urgent opduikt. Alleen een mappenstructuur is niet genoeg — het team moet snel kunnen vragen stellen over wat er staat.",
      benefits: [
        "Elk klant- of fondsbestand in seconden gevonden",
        "Chatinterface: bestanden en informatie opvragen zonder te zoeken",
        "Inkomende PDF's automatisch naar de juiste plek",
        "Het hele kantoor werkt vanuit dezelfde structuur",
        "Minder risico op verouderde versies of kwijtgeraakte documenten",
      ],
      timeSaved: "4 tot 6 uur per week zoeken en archiveren",
      deliverables: [
        "Heldere mapstructuur en afspraken",
        "Chatinterface bovenop documenten en metadata",
        "Routing van inbox naar map",
        "Metadata en versiebeheer",
      ],
    },
    WF7: {
      title: "Juridische documenten en KYC",
      summary:
        "Onboardingpapierwerk vooringevuld vanuit data die jullie al hebben. Juridische controle blijft bij jullie.",
      why: "Transfer agreements, UBO-documentatie en W-8-formulieren betekenen repetitief typwerk dat niemand leuk vindt. Het vertraagt klant-onboarding en leidt tot fouten.",
      benefits: [
        "Sjablonen gevuld vanuit bestaande klant- en fondsgegevens",
        "Snellere onboarding zonder het juridisch compromis",
        "Fase 1: twee documenttypes, met menselijke controle ingebouwd",
        "Minder handmatig werk aan taken die het team bewust uitstelt",
      ],
      prerequisites: [{ workflowId: "WF0" }],
      timeSaved: "4 tot 8 uur per onboarding",
      deliverables: [
        "Twee documentsjablonen operationeel (fase 1)",
        "Automatisch vullen vanuit bestaande gegevens",
        "Controleworkflow vóór verzending",
      ],
    },
    WF9: {
      title: "Website en merk",
      summary: "Site en content bijwerken zonder op developers te wachten.",
      why: "Marketing- en merkupdates hangen nu af van technische hulp. Dat vertraagt campagnes en maakt het lastiger om de publieke uitstraling van ABCapital actueel te houden.",
      benefits: [
        "Marketingteam publiceert pagina's en teksten zelfstandig",
        "Moderne, flexibele site, klaar voor een toekomstig klantenportaal",
        "Snellere doorlooptijd van campagnes",
        "Loopt parallel: blokkeert operationele automatisering niet",
      ],
      timeSaved: "Contentupdates: van dagen naar uren",
      deliverables: [
        "Gebruiksvriendelijk contentbeheer",
        "Nieuwe site operationeel met gemigreerde content",
        "SEO-veilige redirects",
      ],
    },
    WF3: {
      title: "Inzicht in fondsprestaties",
      summary:
        "Portfolio-overzichten klaar voor klanten — de externe laag bovenop WF2.",
      why: "Kwartaalrapportage uit Bunch en KRIF is lastig te consolideren. Eerdere Power BI-pogingen gaven niet de helderheid of presentatiekwaliteit die jullie nodig hebben. WF3 is de klantgerichte stap na WF2: intern actueel inzicht wordt externe fondsrapportage.",
      benefits: [
        "Allocaties over strategieën, jaargangen en beleggingscategorieën in één overzicht",
        "AB-betrokken versus niet-AB performance duidelijk gescheiden",
        "Rapportages waar jullie trots mee naar klanten kunnen",
        "Minder handmatig werk per kwartaal",
        "Bouwt voort op WF2: intern overzicht wordt klantklare rapportage",
      ],
      prerequisites: [
        {
          workflowId: "WF5",
          qualifier: "Consistente document- en naamgevingsbasis",
        },
        {
          workflowId: "WF2",
          qualifier: "Actuele interne financiële basis (WF2 intern, WF3 extern)",
        },
      ],
      timeSaved: "1 tot 2 dagen per kwartaalcyclus",
      deliverables: [
        "Allocatie-dashboards",
        "Fondsoverzichten over meerdere jaargangen",
        "Rapportages geschikt voor klantpresentaties",
      ],
    },
    WF2: {
      title: "Actueel financieel overzicht",
      summary:
        "Cash en kosten over 40 entiteiten live — intern overzicht, eerste stap richting WF3.",
      why: "Management leunt nog op handmatige Excel-updates over Twinfield en Basecone. Het pijnpunt uit de workshop: beslissingen op basis van consolidated cijfers die vaak drie maanden achterlopen. Nederlandse GAAP maakte standaard ERP-oplossingen geen optie.",
      benefits: [
        "Geen beslissingen meer op cijfers van drie maanden geleden",
        "Geconsolideerde cashpositie zonder handmatig werk",
        "Detail per regel wanneer beslissingen dat nodig hebben",
        "Minder tijd achter accountants aan voor statusupdates",
        "Runway-zichtbaarheid voor de directie",
        "Eerste stap richting WF3: intern overzicht wordt later klantklare fondsrapportage",
        "Combineer met WF4 op het Smart Data Platform voor schaalvoordeel",
      ],
      unlocks: [
        {
          workflowId: "WF4",
          qualifier: "Sterker gecombineerd op Smart Data Platform",
        },
        {
          workflowId: "WF3",
          qualifier: "Intern overzicht als basis voor externe fondsrapportage",
        },
      ],
      timeSaved: "8 tot 12 uur per week financiële consolidatie",
      deliverables: [
        "Actueel dashboard over meerdere entiteiten",
        "Cash- en kostenoverzichten waar de directie op kan vertrouwen",
        "Gebouwd rond jullie bestaande Twinfield-setup",
      ],
    },
    WF4: {
      title: "Dashboard voor investeerders (LP)",
      summary:
        "Direct zicht op LP-posities, capital calls en fondsprestaties.",
      why: "LP-data zit verspreid over losgekoppelde fondsadministratie-systemen. Investor relations en voorbereiding op fundraising duren langer dan nodig.",
      benefits: [
        "Eén scherm voor LP-structuren en openstaande verplichtingen",
        "Snellere antwoorden wanneer LPs of prospects vragen stellen",
        "Sterkere basis voor toekomstige fundraising",
        "Minder handmatig werk vóór elk investeerdersgesprek",
        "Combineer met WF2 op het Smart Data Platform: gedeelde datalaag, lager totaalbedrag",
      ],
      prerequisites: [
        {
          workflowId: "WF5",
          qualifier: "Betrouwbare fondsdocumenten en Bunch-input",
        },
      ],
      unlocks: [
        {
          workflowId: "WF2",
          qualifier: "Sterker gecombineerd op Smart Data Platform",
        },
      ],
      timeSaved: "6 tot 10 uur per week LP-rapportage",
      deliverables: [
        "LP-positieoverzicht",
        "Opvolging van capital calls",
        "Overzicht fondsprestaties",
      ],
    },
    WF6: {
      title: "E-mailworkflows",
      summary:
        "Belangrijke acties uit e-mail halen en opvolgen in Notion — gerichte automatisering, geen zware integratie.",
      why: "Operationele taken verstoppen zich in gedeelde en persoonlijke inboxen. Afstemming in het management hangt af van handmatige check-ins en geheugen. Een getrainde e-mailmonitor die taken in Notion aanmaakt volstaat; geen enterprise workflow-suite nodig.",
      benefits: [
        "Belangrijke e-mails worden automatisch taken met opvolging",
        "Minder tijd aan threads lezen om te vinden wat gedaan moet worden",
        "Gedeeld zicht in Notion zonder inbox als knelpunt",
        "Minder zaken die tussen wal en schip vallen",
      ],
      timeSaved: "3 tot 5 uur per week managementtijd",
      deliverables: [
        "Monitoring van gedeelde inbox",
        "Automatische taakaanmaak in Notion",
        "Duidelijke verantwoordelijkheid per actie",
      ],
    },
    WF10: {
      title: "Bunch vervangen, verkenning",
      investmentLabel: "Nader te bepalen",
      summary:
        "Los traject: stakeholdergesprekken, requirements en keuze zelf bouwen of inkopen — alleen op verzoek, vóór elke migratiebeslissing.",
      why: "Bunch is duur, star op API's en dwingt tot handmatige omwegen. Volledige vervanging heeft veel weerstand. Eerst verkennen is het verantwoorde pad. Dit staat bewust los van de gefaseerde roadmap: geen prijs of doorlooptijd tot jullie besluiten door te pakken.",
      benefits: [
        "Inzicht in de echte kosten van blijven versus wisselen",
        "Roadmap vóór elke grote migratiebeslissing",
        "Potentieel om aanzienlijke jaarlijkse softwarekosten terug te winnen",
        "Volledige programmatische toegang tot eigen fondsdata op lange termijn",
      ],
      timeSaved: "Structureel: leverancierskosten plus minder handmatig werk",
      deliverables: [
        "Advies zelf bouwen of inkopen",
        "Migratieroadmap indien gerechtvaardigd",
        "ROI-model per fonds",
      ],
    },
  },
};
