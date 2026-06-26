import { BLABLABUILD_RATE_CARD } from "@foundation/config";
import { buildAiWorkflowEstimate } from "@foundation/cost";
import type { ThuishavenLocaleContent } from "./types";

const rate = BLABLABUILD_RATE_CARD;
const eipFoundation = buildAiWorkflowEstimate(2, rate, { speedMultiplier: 4 });
const wf2OnEip = buildAiWorkflowEstimate(1.6, rate, { speedMultiplier: 5 });
const wf3OnEip = buildAiWorkflowEstimate(1.4, rate, { speedMultiplier: 5 });

export const nl: ThuishavenLocaleContent = {
  meta: {
    slug: "thuishaven",
    clientName: "Thuishaven",
    clientLogo: "/thuishaven-logo.png",
    title: "**Marketing innovatie** & AI-sparring",
    subtitle: "juni 2026",
  },
  debrief: {
    quote:
      "Thuishaven heeft de afgelopen jaren een sterke marketingbasis opgebouwd en behaalt uitstekende resultaten. De focus ligt nu op het verder professionaliseren en optimaliseren van de marketingaanpak. Door de dagelijkse operatie is er beperkt ruimte om nieuwe technologieën, AI en innovatieve werkwijzen te onderzoeken. Er is daarom behoefte aan een ervaren sparringpartner die helpt om kansen te identificeren en de volgende groeistap te realiseren.",
    quoteSource: "Discovery workshop",
    summary:
      "Dit voorstel laat zien waar AI het snelst waarde toevoegt: contentcapaciteit terugwinnen (WF1), datagedreven sturing op campagnes en tickets (WF2–WF3), en een laagdrempelige start via het Starter-pakket.",
    focusAreas:
      "Sparring · Marketing AI · Gefaseerde groei",
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
      { id: "WF1", label: "AI Marketing Copilot", x: 14, y: 74, rotation: -3 },
      { id: "WF4", label: "Dagcontracten", x: 26, y: 68, rotation: 2 },
      { id: "WF3", label: "Ticket Sales", x: 20, y: 58, rotation: -2 },
      { id: "WF2", label: "Marketing Intel", x: 32, y: 80, rotation: 4 },
      { id: "WF5", label: "Line-up sync", x: 40, y: 52, rotation: -1 },
      { id: "WF9", label: "Corporate Sales", x: 36, y: 38, rotation: 3 },
      { id: "WF7", label: "DJ Intelligence", x: 50, y: 46, rotation: -4 },
      { id: "WF6", label: "Ticket Pricing", x: 56, y: 64, rotation: 2 },
      { id: "WF8", label: "Loyalty App", x: 64, y: 54, rotation: -2 },
      { id: "WF10", label: "Intelligence", x: 74, y: 84, rotation: 3 },
    ],
    axisX: { low: "Lage inspanning", high: "Inspanning" },
    axisY: { low: "Lage impact", high: "Impact" },
    caption:
      "Impact/effort-matrix uit de workshop: 10 workflows in kaart gebracht.",
  },
  understanding: {
    layout: "growth",
    growth: {
      strengthsLabel: "Waar jullie staan",
      strengths: [
        "Uitstekende commerciële resultaten en sterke merkpositie",
        "Actieve marketing op Instagram, TikTok en YouTube",
        "Bewijs dat de huidige aanpak werkt — nu professionaliseren",
      ],
      ambitionLabel: "Waar jullie naartoe",
      ambition: [
        "Marketingaanpak verder professionaliseren en optimaliseren",
        "AI en innovatie structureel benutten",
        "Volgende groeistap zonder het team uit te breiden",
      ],
      gapLabel: "Wat ontbreekt",
      gap: [
        "Dagelijkse operatie laat weinig ruimte voor tech-verkenning",
        "Geen senior laag voor innovatie en sparring",
        "Kanalen en data worden nog niet maximaal gecombineerd",
      ],
      opportunitiesLabel: "Eerste AI-kansen",
      opportunities: [
        {
          title: "WF1 · Marketing Copilot",
          body: "8–12 uur per week terug op content — direct inzetbaar op jullie kanalen.",
        },
        {
          title: "Starter-pakket",
          body: "WF1 + dagcontracten: laag risico, snelle ROI, ideaal als eerste pilot.",
        },
        {
          title: "WF2 + WF3 · Dashboards",
          body: "Stop met onderbuikgevoel — start met datagedreven campagne- en ticketsturing.",
        },
      ],
    },
    klanten: { label: "Marketing", value: "Sterk", hint: "" },
    pillarsLabel: "Focusgebieden",
    pillars: ["Marketing", "Operatie", "Data"],
    kicker: "De kans",
    title: "Sterke basis, **ruimte voor innovatie**",
    subtitle:
      "Jullie hoeven niet harder te werken — wel slimmer. AI en automatisering vullen precies het gat dat ontstaat doordat de operatie vol zit en innovatie nu geen vaste plek heeft.",
    goalsLabel: "Doelen",
    goals: [],
    frictionLabel: "Kansen",
    friction: [],
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
    debriefKicker: "Intake samengevat",
    wayOfWorking: {
      kicker: "Werkwijze",
      title: "**Sparren eerst**, daarna **bouwen wat past**.",
      subtitle:
        "Geen groot bureautraject — wel een partner die meedenkt over wat AI concreet oplevert voor Thuishaven.",
      aiTitle: "Maandelijks sparren",
      aiBody:
        "Vast ritme om ideeën te toetsen, prioriteiten te scherpen en nieuwe AI-kansen te identificeren — zonder jullie dagelijkse operatie te belasten.",
      controlTitle: "Pilot eerst, schaal later",
      controlBody:
        "Start met WF1 of het Starter-pakket. Bewijs waarde in weken, niet maanden. Jullie bepalen of en wanneer we opschalen.",
    },
    approach: {
      kicker: "Roadmap",
      title: "**Start klein**, schaal wat werkt",
      subtitle:
        "Marketing eerst: WF1 levert direct capaciteit terug. Daarna dashboards en automatisering. Fase 2 en 3 volgen pas als de basis staat — geen big bang.",
      parallelLabel: "Parallel",
      parallelBody:
        "Marketing en operatie kunnen tegelijk doorontwikkelen zonder elkaar te blokkeren.",
      backlogLabel: "Backlog",
      backlogBody:
        "Intelligence bouwen we op via losse workflows en brengen uiteindelijk samen. De Loyalty App volgt wanneer ticket- en bezoekersdata op orde zijn.",
    },
    workflows: {
      kicker: "Overzicht",
      title: "Alle **10 workflows**",
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
        "RICE meet losse opbrengst per workflow. De roadmap meet volgorde: wat levert snel waarde in marketing en operatie, en wat legt de datalaag voor alles wat volgt? WF1–WF4 vormen fase 1: directe tijdwinst plus de basis voor datagedreven marketing en ticketsturing.",
      workflowRationale: {
        WF1:
          "Hoogste impact met beperkte inspanning: het marketingteam krijgt direct capaciteit terug. Leert de tone of voice van Thuishaven en levert meerdere contentvarianten voor A/B-testen. Geen blokkerende afhankelijkheden, ideaal als eerste live workflow.",
        WF2:
          "Fundament voor datagedreven marketing: alle kanalen in één dashboard met AI-vragen. Combineer met WF3 op het Event Intelligence Platform voor gedeelde datalaag, minder dubbel werk en lager totaalbedrag. Maakt WF6 (pricing) en strategische besluitvorming mogelijk.",
      },
      wf0Note:
        "RICE = (Bereik × Impact × Zekerheid) ÷ Inspanning. Quick wins (WF1–WF4) scoren hoog op zekerheid en snelle oplevering. Intelligence (WF10) en de Loyalty App (WF8) staan bewust in de backlog: eerst waarde uit fase 1 en 2, daarna samenbrengen en uitbouwen.",
    },
    investment: {
      kicker: "Investering",
      title: "Investering **per fase**",
      subtitle:
        "Vier fases met onderbouwing per workflow. Elke fase levert waarde voordat de volgende start.",
      platformBundleTitle: "Combinatievoordeel",
      platformSavingsLabel: "Bespaar",
      platformNote:
        "WF2 en WF3 samen op het Event Intelligence Platform. De faseprijs hierboven is al gebaseerd op dit combinatievoordeel.",
    },
    nextSteps: {
      kicker: "Volgende stappen",
      title: "Klaar om **te starten**",
      subtitle: "Van sparren naar een concrete pilot — vier stappen, laagdrempelig.",
      steps: [
        {
          n: "01",
          title: "Spar-sessie",
          body:
            "Samen de kansenkaart doorspreken: waar levert AI het snelst waarde op voor jullie marketing en operatie?",
        },
        {
          n: "02",
          title: "Pilot kiezen",
          body:
            "Starter (WF1 + WF4) of Momentum (WF1–WF3): klein beginnen, snel zichtbaar resultaat.",
        },
        {
          n: "03",
          title: "Bouwen & trainen",
          body:
            "Live tooling in jullie tone of voice, inclusief teamtraining en gebruiksrichtlijnen.",
        },
        {
          n: "04",
          title: "Evalueren & opschalen",
          body:
            "Meten wat werkt. Daarna door naar fase 2 of verder uitbreiden — alleen wat bewezen waarde levert.",
        },
      ],
    },
    phaseBacklog: {
      note:
        "Backlog = Intelligence + Loyalty App. Intelligence groeit mee met de workflows uit fase 1 en 2 (dashboards, pricing, DJ-data) en wordt uiteindelijk samengebracht in één laag. De Loyalty App volgt wanneer bezoekers- en ticketdata betrouwbaar beschikbaar zijn.",
    },
  },
  wayOfWorking: [
    {
      title: "Sparringpartner",
      body: "Eerst verkennen waar AI en automatisering het meeste opleveren — pragmatisch, niet vanuit een standaard playbook.",
    },
    {
      title: "Bouwen met AI",
      body: "Werkende tools in weken, niet maanden. Marketing blijft focussen op resultaat, wij brengen de innovatie.",
    },
    {
      title: "Pilot eerst",
      body: "Start klein met WF1 of het Starter-pakket. Bewijs waarde, dan pas opschalen naar dashboards en automatisering.",
    },
    {
      title: "Tech zonder overhead",
      body: "Externe innovatiekracht zonder eigen dev-team of groot bureau — precies wat nu ontbreekt.",
    },
  ],
  slideLabels: {
    debrief: "Debrief",
    understanding: "Kansen",
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
      period: "Maand 0 tot 2",
      headline: "**Marketing eerst** — quick wins die direct renderen",
      workflows: ["WF1", "WF2", "WF3", "WF4"],
      outcomes: [
        "AI Marketing Copilot live voor contentcreatie in jullie tone of voice",
        "Marketing- en ticketdashboards met realtime inzicht",
        "Digitale dagcontracten zonder handmatige administratie",
        "Fundament voor datagedreven besluitvorming in fase 2",
      ],
    },
    {
      id: "next",
      label: "Fase 2, NEXT",
      period: "Maand 2 tot 5",
      headline: "Automatisering en **commerciële intelligence**",
      workflows: ["WF5", "WF6", "WF7", "WF9"],
      outcomes: [
        "Line-up wijzigingen automatisch gepubliceerd op alle platforms",
        "Datagedreven ticketprijsadvies op basis van historische verkopen",
        "DJ Momentum Score voor vroegtijdige artiestenscouting",
        "Geautomatiseerde outbound voor zakelijke evenementen",
      ],
    },
    {
      id: "backlog",
      label: "Backlog",
      period: "Na fase 1 & 2",
      headline: "**Intelligence** samenbrengen & **Loyalty App**",
      workflows: ["WF10", "WF8"],
      outcomes: [
        "Intelligence opgebouwd via losse workflows, uiteindelijk samengebracht in één laag",
        "AI-chat en voorspellingen over edities, prijzen, campagnes en verkoop",
        "Loyalty App voor trouwe bezoekers: early access, beloningen en memberships",
        "Pas starten wanneer de databasis uit fase 1 en 2 op orde is",
      ],
    },
  ],
  packages: [
    {
      name: "Starter",
      tag: "Instap",
      workflows: "WF1 + WF4",
      workflowIds: ["WF1", "WF4"],
      weeks: "3 tot 4",
      description:
        "Ideale eerste stap: marketing copilot plus digitale dagcontracten. Laag risico, snelle ROI — perfect na een spar-sessie.",
    },
    {
      name: "Momentum",
      tag: "Aanbevolen",
      workflows: "WF1 + WF2 + WF3",
      workflowIds: ["WF1", "WF2", "WF3"],
      weeks: "5 tot 7",
      description:
        "Marketing copilot plus dashboards: directe tijdwinst én datagedreven sturing op campagnes en ticketverkoop.",
      recommended: true,
    },
    {
      name: "Full Phase 1",
      tag: "Compleet",
      workflows: "WF1–WF4",
      workflowIds: ["WF1", "WF2", "WF3", "WF4"],
      weeks: "6 tot 8",
      description:
        "Volledige NOW-roadmap: marketing, data, tickets en operatie in één traject.",
    },
  ],
  platformBundles: [
    {
      id: "eip",
      name: "Event Intelligence Platform",
      tagline: "Eén centrale datalaag voor marketing en tickets",
      description:
        "In plaats van WF2 en WF3 als losse koppelingen te bouwen, leggen we eerst een gedeelde datalaag: koppelingen met Instagram, TikTok, YouTube, Brevo, Weeztix, TicketSwap en meer, één datamodel en één pipeline. Daarna worden het marketingdashboard en het ticketverkoopdashboard weergaven op dezelfde bron. Minder dubbel werk, sneller live, lager totaalbedrag.",
      workflowIds: ["WF2", "WF3"],
      foundation: eipFoundation,
      layers: [
        {
          workflowId: "WF2",
          label: "Marketing Intelligence Dashboard",
          effort: wf2OnEip.effort,
          cost: wf2OnEip.cost,
        },
        {
          workflowId: "WF3",
          label: "Ticket Sales Dashboard",
          effort: wf3OnEip.effort,
          cost: wf3OnEip.cost,
        },
      ],
      deliverables: [
        "Centrale data-opslag met versiebeheer en controlelog",
        "Koppelingen met marketing- en ticketplatformen",
        "Gedeeld datamodel voor campagnes en verkoop",
        "API-laag voor toekomstige workflows (o.a. WF6 en WF10)",
      ],
    },
  ],
  workflows: {
    WF1: {
      title: "AI Marketing Copilot",
      summary:
        "Een AI-assistent die het marketingteam ondersteunt bij het creëren van content in de tone of voice van Thuishaven.",
      why: "Marketing draait op een compact team met veel verantwoordelijkheid. Content voor Instagram, TikTok, nieuwsbrieven en pushnotificaties kost nu veel tijd — terwijl de vraag alleen maar groeit. Dit is de snelste AI-win: direct capaciteit terug zonder extra mensen.",
      benefits: [
        "Minder tijd besteden aan contentcreatie",
        "Consistente merkcommunicatie over alle kanalen",
        "Hogere output zonder extra capaciteit",
        "Meerdere varianten per bericht voor A/B-testen",
        "Leert van bestaande social posts en past zich aan jullie stijl aan",
      ],
      unlocks: [{ workflowId: "WF2", qualifier: "Rijkere contentdata voor marketinginzichten" }],
      timeSaved: "8 tot 12 uur per week contentcreatie",
      deliverables: [
        "AI-assistent getraind op Thuishaven tone of voice",
        "Generatie van captions, stories, nieuwsbrieven en pushnotificaties",
        "A/B-varianten per contenttype",
        "Teamtraining en gebruiksrichtlijnen",
      ],
    },
    WF2: {
      title: "Marketing Intelligence Dashboard",
      summary:
        "Een centraal dashboard waarin alle marketingprestaties samenkomen, met AI om vragen te stellen over campagnes en resultaten.",
      why: "Marketing wordt nu aangestuurd op onderbuikgevoel. Data uit Instagram, TikTok, YouTube, Brevo, Weeztix en TicketSwap staat verspreid, waardoor het lastig is om te begrijpen waarom een editie minder verkoopt of welke campagne het meeste oplevert.",
      benefits: [
        "Datagedreven marketingbeslissingen in plaats van onderbuikgevoel",
        "Continu inzicht in campagneprestaties over alle kanalen",
        "AI-vragen zoals: waarom verkoopt deze editie minder?",
        "Inzicht in optimale postmomenten en kanaalprestaties",
        "Combineer met WF3 op het Event Intelligence Platform voor schaalvoordeel",
      ],
      unlocks: [
        { workflowId: "WF6", qualifier: "Marketingdata als input voor prijsadvies" },
        { workflowId: "WF10", qualifier: "Marketinglaag in het centrale platform" },
      ],
      timeSaved: "4 tot 6 uur per week rapportage en analyse",
      deliverables: [
        "Dashboard met koppelingen naar alle marketingkanalen",
        "AI-querylaag voor campagne- en verkoopvragen",
        "Campagneprestatie-overzichten per editie",
        "Documentatie en teamtraining",
      ],
    },
    WF3: {
      title: "Ticket Sales Dashboard",
      summary:
        "Realtime inzicht in ticketverkoop over alle verkoopkanalen, inclusief TicketSwap.",
      why: "Ticketverkoop wordt nu deels bijgehouden in handmatige spreadsheets. Zonder realtime zicht op ticketfasen, omzet en verkooptempo is commerciële sturing reactief in plaats van proactief.",
      benefits: [
        "Geen handmatige spreadsheets meer voor ticketverkoop",
        "Altijd realtime inzicht in verkoop per kanaal en fase",
        "Betere commerciële sturing op prijsfasen en uitverkoop",
        "Combineer met WF2 op het Event Intelligence Platform: gedeelde datalaag, lager totaalbedrag",
      ],
      prerequisites: [
        {
          workflowId: "WF2",
          qualifier: "Sterker gecombineerd op Event Intelligence Platform",
        },
      ],
      unlocks: [
        { workflowId: "WF6", qualifier: "Verkoopdata als basis voor prijsadvies" },
      ],
      timeSaved: "3 tot 5 uur per week handmatige rapportage",
      deliverables: [
        "Automatische koppeling met alle ticketplatformen",
        "Realtime dashboard: fasen, omzet, tempo en kanalen",
        "Waarschuwingen bij afwijkend verkooptempo",
        "Export en rapportage voor management",
      ],
    },
    WF4: {
      title: "Digitale Dagcontracten",
      summary:
        "Volledig digitale verwerking van dagcontracten: invullen, ondertekenen, archiveren en doorsturen naar XPS.",
      why: "Dagcontracten worden nu handmatig verwerkt. Dat kost administratieve tijd, leidt tot fouten en vertraagt de doorstroom naar salarisadministratie. Personeel wil snel kunnen starten zonder papierwerk.",
      benefits: [
        "Minder administratie voor HR en operatie",
        "Minder fouten in contractgegevens",
        "Snellere verwerking richting XPS",
        "Automatische signalering na drie losse diensten",
        "Digitaal archief zonder papieren rompslomp",
      ],
      timeSaved: "4 tot 8 uur per week contractadministratie",
      deliverables: [
        "Digitaal invul- en ondertekeningsformulier voor personeel",
        "Automatische PDF-generatie en archivering",
        "Koppeling en verwerking richting XPS",
        "Signaalregel voor drie losse diensten",
      ],
    },
    WF5: {
      title: "Website & Platform Automation",
      summary:
        "Automatisch publiceren van line-up wijzigingen op Thuishaven website en externe platforms.",
      why: "Line-up wijzigingen moeten nu handmatig worden doorgevoerd op de website, Partyflock, DJGuide, Bash en Guestzone. Dat is dubbel werk, foutgevoelig en vertraagt publicatie.",
      benefits: [
        "Minder dubbel werk bij elke line-up wijziging",
        "Minder fouten tussen platforms",
        "Snellere publicatie van actuele line-ups",
        "Browserautomatisering waar API's ontbreken",
      ],
      prerequisites: [{ workflowId: "WF1", qualifier: "Contentworkflows als basis" }],
      timeSaved: "2 tot 4 uur per line-up wijziging",
      deliverables: [
        "Centrale line-up bron met sync naar alle platforms",
        "Koppelingen met Thuishaven website, Partyflock, DJGuide, Bash en Guestzone",
        "Fallback via browserautomatisering waar nodig",
        "Logging en foutafhandeling",
      ],
    },
    WF6: {
      title: "Ticket Pricing Intelligence",
      summary:
        "Analyse van historische ticketverkopen, weer, line-ups en ticketfasen om prijsadvies te geven.",
      why: "Ticketprijzen worden nu grotendeels op ervaring bepaald. Zonder systematische analyse blijven vragen onbeantwoord: had deze editie duurder verkocht kunnen worden, is fase drie te goedkoop, wanneer moet een nieuwe fase live?",
      benefits: [
        "Datagedreven prijsadvies per editie en ticketfase",
        "Inzicht in effect van weer en line-up op verkoop",
        "Snellere beslissingen over nieuwe ticketfasen",
        "Hogere omzet zonder extra marketingkosten",
      ],
      prerequisites: [
        { workflowId: "WF2", qualifier: "Marketingdata voor context" },
        { workflowId: "WF3", qualifier: "Historische verkoopdata" },
      ],
      timeSaved: "Structureel: betere marge per editie",
      deliverables: [
        "Prijsadviesmodel op basis van historische data",
        "Dashboard met scenario's per editie",
        "Aanbevelingen voor ticketfase-timing",
        "Rapportage per afgelopen editie",
      ],
    },
    WF7: {
      title: "DJ Intelligence Platform",
      summary:
        "Automatische monitoring van artiesten op social media, streaming en line-ups met een objectieve DJ Momentum Score.",
      why: "Het scouten van opkomende artiesten gebeurt nu handmatig en subjectief. Data uit Instagram, TikTok, Spotify, SoundCloud, Beatport en Resident Advisor wordt niet systematisch gecombineerd.",
      benefits: [
        "Objectieve DJ Momentum Score voor vroegtijdige scouting",
        "Eerder inspelen op opkomende artiesten",
        "Minder afhankelijkheid van individueel netwerk",
        "Monitoring over meerdere platforms in één overzicht",
      ],
      timeSaved: "5 tot 10 uur per week artist research",
      deliverables: [
        "DJ Momentum Score op basis van meerdere databronnen",
        "Monitoringdashboard voor artiesten en trends",
        "Alerts bij significante momentum-wijzigingen",
        "Integratie met line-up planning",
      ],
    },
    WF8: {
      title: "Loyalty App",
      summary:
        "App voor trouwe bezoekers: loyaliteit op basis van bezoekersgedrag, met early access, exclusieve evenementen en beloningen.",
      why: "Thuishaven heeft een sterke community maar nog geen gestructureerde Loyalty App. Die hoort in de backlog: pas zinvol wanneer ticket- en bezoekersdata uit de eerdere workflows betrouwbaar beschikbaar zijn.",
      benefits: [
        "Early access en exclusieve evenementen voor trouwe bezoekers",
        "Kortingen en memberships als nieuwe omzetstroom",
        "Beloningen op basis van bezoekersgedrag",
        "Sterkere binding met de community",
      ],
      prerequisites: [
        { workflowId: "WF3", qualifier: "Ticketdata voor bezoekersgedrag" },
      ],
      timeSaved: "Structureel: hogere lifetime value per bezoeker",
      deliverables: [
        "Loyaliteitsprogramma met punten en beloningen",
        "Membership-tiers met early access",
        "Koppeling met ticketverkoop en bezoekersdata",
        "Beheerinterface voor het team",
      ],
    },
    WF9: {
      title: "Corporate Sales Automation",
      summary:
        "Automatisch identificeren van interessante bedrijven voor zakelijke evenementen met gepersonaliseerde outboundcampagnes.",
      why: "Zakelijke evenementen zijn een groeikans maar vereisen gerichte acquisitie. Handmatig zoeken in KVK en LinkedIn en opvolgen via Brevo kost veel tijd zonder gestructureerde aanpak.",
      benefits: [
        "Automatische identificatie van relevante bedrijven",
        "Gepersonaliseerde outboundcampagnes via Brevo",
        "Integratie met KVK en LinkedIn data",
        "Structurele pipeline voor zakelijke evenementen",
      ],
      timeSaved: "4 tot 6 uur per week sales research",
      deliverables: [
        "Bedrijfsselectie op basis van KVK en LinkedIn",
        "Outboundcampagnes via Brevo",
        "CRM-achtige opvolging van leads",
        "Rapportage op conversie en pipeline",
      ],
    },
    WF10: {
      title: "Intelligence",
      investmentLabel: "Nader te bepalen",
      hideTimeline: true,
      summary:
        "De intelligence-laag waarin operationele en commerciële data samenkomen — opgebouwd via losse workflows en uiteindelijk samengebracht.",
      why: "Intelligence bouwen we niet in één keer. Elke workflow in fase 1 en 2 levert een stukje: marketingdashboards (WF2), ticketdata (WF3), pricing (WF6), DJ-inzichten (WF7). Uiteindelijk brengen we die samen in één laag met AI-chat voor vragen als: welke editie loopt uit de hand, welke campagne levert het meeste op, kunnen prijzen omhoog? Geen prijs of doorlooptijd tot de basis workflows live zijn.",
      benefits: [
        "Alle databronnen in één centraal platform",
        "AI-chat voor strategische en operationele vragen",
        "Voorspellingen over uitverkoop en omzet per editie",
        "ROI-inzicht per campagne en artiest",
        "Fundament voor volledig datagedreven evenementenorganisatie",
      ],
      prerequisites: [
        { workflowId: "WF2", qualifier: "Marketingdatalaag" },
        { workflowId: "WF3", qualifier: "Ticketverkoopdatalaag" },
      ],
      timeSaved: "Structureel: betere besluitvorming op alle niveaus",
      deliverables: [
        "Centraal datawarehouse met alle operationele en commerciële bronnen",
        "AI-chatinterface voor strategische vragen",
        "Voorspellende modellen voor verkoop en omzet",
        "Roadmap en investeringsadvies na verkenningstraject",
      ],
    },
  },
};
