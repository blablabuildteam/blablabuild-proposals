import type { ThuishavenLocaleContent } from "./types";

export const nl: ThuishavenLocaleContent = {
  meta: {
    slug: "thuishaven",
    clientName: "Thuishaven",
    clientLogo: "/thuishaven-logo.png",
    title: "**Transformatie** Tactiek",
    subtitle: "juli 2026",
  },
  debrief: {
    quote:
      "Thuishaven heeft net een ongekend goed seizoen achter de rug. De druk op zowel de operationele bezetting als op marketing om evenementen zo snel mogelijk uit te verkopen is hoog. Veel cruciale beslissingen worden nu nog noodgedwongen op onderbuikgevoel genomen, simpelweg omdat waardevolle data verspreid staat over losse systemen of omdat het handmatig verzamelen ervan te veel tijd kost.",
    quoteSource: "Discovery workshop",
    summary:
      "Dit voorstel beschrijft zeven projecten en één strategische activiteit die samen de bouwstenen vormen om Thuishaven efficiënter te laten werken, data slim in te zetten en gericht te groeien.",
    focusAreas: "Operations · Marketing · Sales & Data",
    date: "juli 2026",
    heroGif:
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGloc2Zmb3FucGR4cjNyamR6d21neTdyMm15YjE2cW1kMGk0dm10MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/M9xtw95RB2ZMc/giphy.gif",
  },
  impactMatrix: {
    quadrants: {
      quickWins: "Snelle winst",
      bigBets: "Grote zetten",
      incremental: "Geleidelijk",
      moneySinks: "Weinig rendement",
    },
    postIts: [
      { id: "01", label: "Personeelsformulier", x: 12, y: 72, rotation: -3 },
      { id: "02", label: "Marketing Dashboard", x: 30, y: 82, rotation: 2 },
      { id: "03", label: "Kaartverkoop Dashboard", x: 32, y: 76, rotation: -2 },
      { id: "05", label: "Bedrijvenpost", x: 34, y: 70, rotation: 4 },
      { id: "08", label: "Loyalty Sessie", x: 14, y: 58, rotation: -1 },
      { id: "06", label: "Content Studio", x: 56, y: 78, rotation: 3 },
      { id: "04", label: "DJ Talenten Radar", x: 52, y: 64, rotation: -4 },
      { id: "07", label: "Bar & Consumptie Data", x: 42, y: 66, rotation: 2 },
    ],
    axisX: { low: "Lage inspanning", high: "Inspanning" },
    axisY: { low: "Lage impact", high: "Impact" },
    caption:
      "Impact/effort-matrix uit de workshop: 7 projecten en 1 activiteit in kaart gebracht.",
  },
  understanding: {
    layout: "growth",
    growth: {
      strengthsLabel: "Waar jullie staan",
      strengths: [
        "Ongekend goed seizoen — organische basis sterker dan ooit",
        "Maximaal loyale achterban en herkenbare merkidentiteit",
        "Succesvol marketingteam dat evenementen snel uitverkoopt",
      ],
      ambitionLabel: "Waar jullie naartoe",
      ambition: [
        "Druk van de ketel halen op operations en content",
        "Beslissingen onderbouwen met keiharde cijfers",
        "Goedkoper meer mensen bereiken en marges maximaliseren",
      ],
      gapLabel: "Wat ontbreekt",
      gap: [
        "Waardevolle data verspreid over losse systemen",
        "Handmatige administratie kost te veel tijd",
        "Geen structureel inzicht in welke campagne het meest oplevert",
      ],
    },
    klanten: { label: "Marketing", value: "Sterk", hint: "" },
    pillarsLabel: "Focusgebieden",
    pillars: ["Operations", "Marketing", "Sales & Data"],
    kicker: "De kans",
    title: "Sterk seizoen, **nu doorpakken**",
    subtitle:
      "De basis is sterker dan ooit. Door data slim te combineren en handmatig werk te digitaliseren, wordt Thuishaven sneller, scherper en winstgevender — zonder extra mensen.",
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
      passwordLabel: "Wie is Thuishaven's grootste fan?",
      passwordHint: "",
      passwordInputType: "text",
      submit: "Open voorstel",
      submitting: "Controleren…",
      opening: "Voorstel openen…",
      sessionExpired: "Je sessie is verlopen. Log opnieuw in.",
      invalidAccessLink:
        "Deze link is ongeldig of verlopen. Probeer het opnieuw via je uitnodiging.",
      accessDenied: "Hmm, dat klinkt niet als onze grootste fan.",
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
      openUseCase: "Details",
      useCase: "Details",
      backToOverview: "Terug naar overzicht",
      whyThisMatters: "Waarom dit telt",
      whatYouGet: "Wat je krijgt",
      whatWeDeliver: "Wat we opleveren",
      expectedValue: "Verwachte waarde",
      prerequisites: "Vereisten",
      unlocks: "Maakt mogelijk",
      impactSuffix: "impact",
      exit: "Afsluiten",
      previous: "Vorige",
      next: "Volgende",
      useCaseFallback: "Details",
      tableRank: "#",
      tableId: "ID",
      tableInitiative: "Project",
      tablePhaseInvest: "Fase, investering",
      tableRice: "Prio",
      prioScoreLabel: "PRIO SCORE",
      fullRiceRanking: "Volledige Prio-ranking",
      phaseOneBadge: "F1",
      showingWorkflowsTemplate: "{filtered} van {total} projecten",
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
      domainLabels: {
        Operations: "Operatie",
        Marketing: "Marketing",
        Sales: "Sales",
      },
    },
    debriefKicker: "Intake samengevat",
    wayOfWorking: {
      kicker: "Werkwijze",
      title: "**Samenwerken**, dan **bouwen wat past**.",
      subtitle:
        "De verkenning is achter de rug. We weten waar de kansen liggen — nu gaan we concreet aan de slag met de projecten die het meeste opleveren.",
      aiTitle: "Vast ritme",
      aiBody:
        "Periodiek afstemmen om prioriteiten scherp te houden, voortgang te bespreken en nieuwe kansen te signaleren — zonder jullie dagelijkse operatie te belasten.",
      controlTitle: "Bewezen waarde eerst",
      controlBody:
        "Start met fase 1. Bewijs waarde in weken, niet maanden. Jullie bepalen of en wanneer we opschalen naar de volgende fase.",
    },
    approach: {
      kicker: "Roadmap",
      title: "**Nu, volgende, later** — gefaseerde oplevering",
      subtitle:
        "Druk van de ketel en data op orde eerst. Fase 1 levert direct tijdwinst en inzicht. Projecten die data delen zijn visueel gekoppeld — hover om de interconnecties te zien.",
      parallelLabel: "Strategische sessie",
      parallelBody:
        "Sessie om de Loyalty Experience te verkennen: scope, doelgroep en pricing bepalen. Loopt parallel aan fase 1, zonder de overige projecten te blokkeren.",
      backlogLabel: "Strategische sessie",
      backlogBody: "",
    },
    workflows: {
      kicker: "Overzicht",
      title: "Alle **projecten**",
      subtitle:
        "Volledig overzicht, filter op fase. De detailpagina's hierboven gaan in op wat het meest telt.",
    },
    prioritization: {
      kicker: "Prioritering",
      title: "Waarom **deze volgorde**?",
      subtitle:
        "Gescoord op bereik, impact, zekerheid en inspanning. Projecten zijn ingedeeld in drie fases op basis van wat je eerst nodig hebt om de rest te kunnen bouwen.",
      startHere: "Start hier",
      phaseOne: "Fase 1",
      riceNote: "roadmap-volgorde boven kale score",
      phaseOneRationale:
        "Fase 1 richt zich op de hoogste directe impact: het Marketing Dashboard en Kaartverkoop Dashboard geven direct inzicht in campagneprestaties en ticketverkoop. Het Personeelsformulier haalt de druk van HR. Bedrijvenpost opent een nieuwe omzetstroom. Samen leggen ze de databasis voor alles wat volgt.",
      phaseRationales: {
        now:
          "Fase 1 richt zich op de hoogste directe impact: het Marketing Dashboard en Kaartverkoop Dashboard geven direct inzicht in campagneprestaties en ticketverkoop. Het Personeelsformulier haalt de druk van HR. Bedrijvenpost opent een nieuwe omzetstroom. Samen leggen ze de databasis voor alles wat volgt.",
        next:
          "De Content Studio bouwt voort op de marketingdata uit fase 1. Zodra dashboards live zijn, kan AI content genereren op basis van echte campagneprestaties en tone of voice.",
        near:
          "Fase 3 bevat projecten met hoge strategische waarde maar meer afhankelijkheden of integraties. De DJ Talenten Radar en Bar & Consumptie Data profiteren van de databasis en tooling uit eerdere fases.",
      },
      workflowRationale: {
        "01":
          "Hoogste Prio-score: laagste inspanning met directe tijdwinst op HR. Standalone project zonder afhankelijkheden, ideaal als eerste live oplevering.",
        "02":
          "Brengt alle marketingdata samen op één scherm met AI-vragen. Directe koppeling met het Kaartverkoop Dashboard en basis voor de Content Studio.",
        "03":
          "Live inzicht in ticketverkoop per platform. Essentieel voor marketingbeslissingen en direct gekoppeld aan het Marketing Dashboard.",
        "05":
          "Automatische outbound naar zakelijke prospects. Relatief snelle oplevering met directe omzetpotentie, los te zien van de dashboards.",
        "06":
          "AI-gedreven contentcreatie op basis van bewezen campagnedata. Wacht op dashboards uit fase 1 voor optimale training en segmentatie.",
        "04":
          "Objectieve DJ-scoring op basis van verkoop- en marketingdata. Vereist stabiele datafeeds uit fase 1 en 2.",
        "07":
          "Live bar- en consumptiedata via Weeztix-koppeling. Complexere integratie; loont zodra ticketing- en marketingdata betrouwbaar zijn.",
      },
      wf0Note:
        "Prio = (Bereik × Impact × Zekerheid) ÷ Inspanning. De volgorde binnen elke fase weegt roadmap-afhankelijkheden zwaarder dan de kale score. Fase 1 (01–03, 05) levert snel zichtbare waarde. Fase 2 (06) volgt zodra de dashboards live zijn. Fase 3 (04, 07) schaalt data en sales zodra de basis staat.",
      riceBreakdown: {
        title: "Prio-berekening",
        reach: "Bereik",
        impact: "Impact",
        confidence: "Zekerheid",
        effort: "Inspanning",
      },
    },
    investment: {
      kicker: "Investering",
      title: "Investering **per fase**",
      subtitle:
        "Drie fases met onderbouwing per project. Elke fase levert waarde voordat de volgende start. De getoonde bedragen zijn ballpark ranges — indicaties op basis van de huidige scope. Mochten we hiermee verder gaan, dan vertalen we dit naar een concreet financieel voorstel op basis van aanvullend onderzoek.",
      platformBundleTitle: "",
      platformSavingsLabel: "",
      platformNote: "",
    },
    nextSteps: {
      kicker: "Volgende stappen",
      title: "Klaar om **te starten**",
      subtitle: "Van voorstel naar concrete realisatie — vijf stappen.",
      steps: [
        {
          n: "🔍",
          title: "Voorstel bekijken",
          body: "Jullie krijgen de tijd om dit voorstel in eigen tempo door te nemen. Noteer vragen, prioriteiten en wat anders moet.",
        },
        {
          n: "🍺",
          title: "Toelichting & afstemming",
          body: "We komen samen — desgewenst onder het genot van een biertje — zodat wij toelichting kunnen geven op de projecten, aanpak en fasering. Open gesprek, geen verplichtingen.",
        },
        {
          n: "🎯",
          title: "Selectie maken",
          body: "Samen bepalen welke projecten als eerste worden opgepakt. Op basis van jullie prioriteiten en de roadmap.",
        },
        {
          n: "📄",
          title: "Concrete voorstellen",
          body: "Per geselecteerd project leveren wij een concreet voorstel met exact budget, aanpak, planning en deliverables.",
        },
        {
          n: "🚀",
          title: "Starten met bouwen",
          body: "Zodra er akkoord is, gaan we direct aan de slag. Werkende resultaten in weken, niet maanden.",
        },
      ],
    },
    phaseBacklog: {
      note:
        "De strategische sessie voor de Loyalty Experience loopt parallel aan fase 1. Doel: de vorm, pricing en voordelen bepalen, zodat we daarna kunnen beslissen wanneer en hoe het loyaliteitsprogramma wordt gebouwd.",
    },
  },
  wayOfWorking: [
    {
      title: "Partner, geen bureau",
      body: "We denken mee als sparringpartner — pragmatisch, niet vanuit een standaard playbook. De verkenning is gedaan, nu bouwen we.",
    },
    {
      title: "Bouwen met AI",
      body: "Werkende tools in weken, niet maanden. Marketing en operatie blijven focussen op resultaat, wij brengen de innovatie.",
    },
    {
      title: "Bewezen waarde eerst",
      body: "Start met fase 1: directe impact, snel zichtbaar resultaat. Opschalen naar fase 2 en 3 alleen als de basis staat.",
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
    "phase-backlog": "Strategische sessie",
    workflows: "Projecten",
    prioritization: "Prioritering",
    investment: "Investering",
    "next-steps": "Volgende stappen",
  },
  aiBuildNote:
    "Schattingen zijn gebaseerd op AI-ondersteunde oplevering. Bandbreedtes zijn bewust ruim gehouden tot scope is vastgelegd. Hosting en licenties van derden niet inbegrepen.",
  phases: [
    {
      id: "now",
      label: "Fase 1, NU",
      period: "Maand 0 tot 2",
      headline: "**Directe realisatie** — inzicht en efficiency",
      workflows: ["01", "02", "03", "05"],
      outcomes: [
        "Digitaal personeelsformulier live met automatische XPS-koppeling",
        "Marketing Dashboard met alle kanalen en AI-vragen",
        "Kaartverkoop Dashboard met live verkoopcijfers per platform",
        "Bedrijvenpost met automatische outbound naar zakelijke prospects",
        "Databasis voor datagedreven besluitvorming in fase 2 en 3",
      ],
      companions: [{ phaseId: "backlog", style: "highlight" }],
    },
    {
      id: "next",
      label: "Fase 2, VOLGENDE",
      period: "Maand 2 tot 5",
      headline: "**Content innovatie** — slimmer maken wat werkt",
      workflows: ["06"],
      outcomes: [
        "AI Caption Generator getraind op Thuishaven tone of voice",
        "Slimme fotoselectie: van 500 foto's naar de beste in seconden",
        "Statische beeldgeneratie in de huisstijl",
        "Gesegmenteerde nieuwsbrieven voor gerichte doelgroepen",
      ],
    },
    {
      id: "near",
      label: "Fase 3, LATER",
      period: "Maand 5+",
      headline: "**Schaalbaarheid** — data en sales uitbreiden",
      workflows: ["04", "07"],
      outcomes: [
        "DJ Talenten Radar met objectieve Groeiscore en alerts",
        "Bar & Consumptie Data: live omzet per bar, product en locatie",
      ],
    },
    {
      id: "backlog",
      label: "Strategische sessie",
      period: "Parallel aan fase 1",
      headline: "**Loyalty Experience** verkennen",
      workflows: ["08"],
      outcomes: [
        "Vorm en pricing van het loyaliteitsprogramma bepalen",
        "Voordelen definiëren: early access, kortingen, gastenlijst",
        "Technisch fundament kiezen: app, web of integratie",
        "Concreet stappenplan voor de realisatiefase",
      ],
    },
  ],
  packages: [
    {
      name: "Operations First",
      tag: "Instap",
      workflows: "01",
      workflowIds: ["01"],
      weeks: "1 tot 2",
      description:
        "Start met het Digitale Personeelsformulier. Directe tijdsbesparing op HR, geen afhankelijkheden.",
    },
    {
      name: "Data & Inzicht",
      tag: "Aanbevolen",
      workflows: "01 + 02 + 03",
      workflowIds: ["01", "02", "03"],
      weeks: "4 tot 6",
      description:
        "Volledige fase 1: personeelsformulier plus beide dashboards. Directe tijdwinst én datagedreven marketing.",
      recommended: true,
    },
  ],
  platformBundles: [],
  workflows: {
    "01": {
      title: "Het Digitale Personeelsformulier",
      summary:
        "Een online formulier waar medewerkers zelf gegevens invullen, met automatische doorstroom naar XPS en signalering bij drie losse diensten.",
      why: "Iedereen die bij Thuishaven werkt vult nu een papieren formulier in dat handmatig wordt overgetypt in een IB47-formulier voor uitbetaling in XPS. Na drie losse werkdagen moet handmatig worden bijgehouden of iemand een langer contract moet krijgen. Dit kost onnodig veel tijd.",
      benefits: [
        "Geen papieren formulieren meer",
        "Automatische doorstroom naar XPS",
        "Blokkering en melding na vier losse diensten",
        "Live overzichtsscherm met status van alle medewerkers",
        "Minder fouten bij contracttermijnen",
      ],
      timeSaved: "Enorme wekelijkse tijdsbesparing op HR-administratie",
      expectedValue:
        "Enorme wekelijkse tijdsbesparing op de HR-administratie en het uitsluiten van fouten bij contracttermijnen.",
      deliverables: [
        "Online invulformulier voor medewerkers",
        "Automatische IB47-generatie en XPS-koppeling",
        "Signaalregel bij vier werkdagen met contractmelding",
        "Overzichtsdashboard voor management",
      ],
    },
    "02": {
      title: "Het Marketing Dashboard",
      summary:
        "Eén overzichtelijk scherm met alle marketingdata, gekoppeld aan ticketverkoop, met een slimme chatfunctie voor directe vragen.",
      why: "Beslissingen over marketing worden nu op onderbuikgevoel genomen. Belangrijke data uit Instagram, TikTok, YouTube, Brevo, Weeztix en TicketSwap staat overal verspreid. Hierdoor is het lastig te zien waarom de ene editie sneller uitverkoopt dan de andere, of welke campagne het meeste oplevert.",
      benefits: [
        "Alle marketingdata op één scherm",
        "Direct zien welke campagne de meeste tickets verkoopt",
        "AI-chatfunctie voor vragen in gewone taal",
        "Inzicht in campagneprestaties per editie",
        "Betere kwaliteit van campagnes en gerichte groei",
      ],
      unlocks: [
        { workflowId: "06", qualifier: "Conversiedata voor de Content Studio" },
        { workflowId: "08", qualifier: "Community-data voor de Loyalty Experience" },
      ],
      timeSaved: "Direct inzicht in marketinguitgaven",
      expectedValue:
        "Direct inzicht in je marketinguitgaven, wat zorgt voor een betere kwaliteit van je campagnes en gerichte groei in kaartverkoop.",
      deliverables: [
        "Dashboard met koppelingen naar Instagram, TikTok, YouTube, Brevo, Weeztix, TicketSwap",
        "Directe koppeling met ticketverkoop",
        "AI-chatfunctie voor vragen als: waarom verkoopt deze editie beter?",
        "Campagneprestatie-overzichten per editie",
      ],
    },
    "03": {
      title: "Het Kaartverkoop Dashboard",
      summary:
        "Live dashboard dat verkoopcijfers rechtstreeks ophaalt uit Weeztix, Resident Advisor, Appic en TicketSwap.",
      why: "Er wordt nu handmatig in spreadsheets bijgehouden hoeveel kaarten er worden verkocht. Het totale aantal is wel bekend, maar de verdeling per platform en het exacte moment van aankoop ontbreekt. Dit kost uren spreadsheet-werk.",
      benefits: [
        "Geen handmatige spreadsheets meer",
        "Live inzicht per platform, tijdstip en prijs",
        "Historische data voor slim prijsadvies",
        "Directe koppeling met marketingcampagnes",
        "Strategisch inzicht om ticketprijzen datagedreven te verhogen",
      ],
      prerequisites: [
        { workflowId: "02", qualifier: "Gekoppeld voor historische verkoopcurves en marketinguitingen" },
      ],
      unlocks: [
        { workflowId: "04", qualifier: "Impact van DJ-boekingen op kaartverkoop meten" },
        { workflowId: "07", qualifier: "Bezoekersuitgaven combineren met ticketdata" },
      ],
      timeSaved: "Uren per week aan handmatig spreadsheet-werk",
      expectedValue:
        "Directe tijdsbesparing op de administratie én strategisch inzicht om ticketprijzen datagedreven te verhogen voor meer omzet.",
      deliverables: [
        "Live dashboard gekoppeld aan Weeztix, Resident Advisor, Appic en TicketSwap",
        "Verkoop per platform, tijdstip en prijs",
        "Historische dataopslag voor prijsadvies",
        "Export en rapportage voor management",
      ],
    },
    "04": {
      title: "Het DJ Talenten Radar",
      summary:
        "Dashboard dat automatisch social media, streaming en festivaldata scant en opkomende DJ's signaleert met een objectieve Groeiscore.",
      why: "Voor Thuishaven is het essentieel om opkomende DJ's vroegtijdig te ontdekken. Hoe eerder een talent op de radar staat, hoe gunstiger de gage en hoe groter de kans op een goede langetermijndeal. Nu is dit nog een handmatig zoekproces.",
      benefits: [
        "Objectieve Groeiscore voor vroegtijdige scouting",
        "Automatische alerts bij plotselinge populariteitsstijging",
        "Vergelijking met line-ups van Europese festivals",
        "Betere kwaliteit van de programmering",
        "Financiële groei door talent te boeken vóórdat ze onbetaalbaar worden",
      ],
      prerequisites: [
        { workflowId: "03", qualifier: "Impact van DJ-boeking op kaartverkoop meten" },
      ],
      timeSaved: "Uren per week aan handmatig artist research",
      expectedValue:
        "Betere kwaliteit van de programmering en financiële groei door opkomend talent te boeken vóórdat ze onbetaalbaar worden.",
      deliverables: [
        "Dashboard met data uit Instagram, TikTok, Spotify, SoundCloud, Resident Advisor",
        "Groeiscore per artiest op basis van meerdere databronnen",
        "Analyse van line-ups van vergelijkbare festivals in West-Europa",
        "Automatische alerts bij significante groei",
      ],
    },
    "05": {
      title: "Bedrijvenpost & Verkoop Automatisering",
      summary:
        "Automatisch interessante bedrijven identificeren voor zakelijke evenementen en op het juiste moment een persoonlijke e-mail sturen.",
      why: "Thuishaven draait in de weekenden een topomzet, maar de doordeweekse dagen zijn vaak nog vrij. Er wordt momenteel weinig actieve verkoop richting bedrijven gedaan. Hier ligt een grote kans op extra omzet.",
      benefits: [
        "Automatische identificatie van relevante bedrijven",
        "Filtering op bedrijfsgrootte, regio en jubilea",
        "Persoonlijke e-mails op het perfecte moment",
        "Warme leads direct doorgestuurd naar het team",
        "Directe groei in omzet op doordeweekse dagen",
      ],
      timeSaved: "Uren per week aan handmatig sales research",
      expectedValue:
        "Directe groei in omzet door het slim en automatisch vullen van de nu nog lege, doordeweekse dagen.",
      deliverables: [
        "Bedrijfsselectie op basis van KvK en LinkedIn",
        "Automatische outbound-campagnes met personalisatie",
        "Lead-notificatie bij positieve respons",
        "Rapportage op conversie en pipeline",
      ],
    },
    "06": {
      title: "De Thuishaven Content Studio",
      summary:
        "Centrale creatieve studio met AI Caption Generator, slimme fotoselectie, beeldgeneratie en gesegmenteerde nieuwsbrieven — vier onderdelen, één platform.",
      why: "Het handmatig schrijven van teksten voor Instagram, TikTok en nieuwsbrieven kost wekelijks veel tijd. Daarnaast ontvangt Thuishaven wekelijks mappen met 400 tot 500 foto's waarvan het uitzoeken 2 tot 3 uur kost. Door een slim systeem te trainen op de Thuishaven-stijl versnellen we dit drastisch.",
      benefits: [
        "AI Caption Generator getraind op jullie exacte tone of voice",
        "Fotoselectie van uren naar minuten met visual recognition",
        "Statische beeldgeneratie in de huisstijl",
        "Gesegmenteerde nieuwsbrieven voor gerichte doelgroepen",
        "Self-learning: het systeem wordt continu beter",
      ],
      prerequisites: [
        { workflowId: "02", qualifier: "Conversiedata om te leren welke content het beste werkt" },
      ],
      timeSaved: "Enorme wekelijkse besparing op contentcreatie en fotoselectie",
      expectedValue:
        "Enorme wekelijkse tijdsbesparing op contentcreatie en fotoselectie, gecombineerd met een hogere marketingkwaliteit door persoonlijke nieuwsbrieven.",
      deliverables: [
        "Getrainde Caption Generator voor alle kanalen",
        "AI Visual Selection & Curation module",
        "Statische Beelden Generator in huisstijl",
        "Segmented Newsletter Generator",
      ],
    },
    "07": {
      title: "Slimme Bar- & Consumptie Data",
      summary:
        "Hybride bar-model: bezoekers betalen met vertrouwde munten, terwijl personeel elke bestelling digitaal registreert op een mobiel of vast verkooppunt — realtime inzicht zonder volledig cashless te gaan.",
      why: "Thuishaven koos bewust voor fysieke munten vanwege breakage-omzet en de vertrouwdheid voor bezoekers. Bij een traditioneel muntensysteem weet je pas na afloop — na wegen en tellen — wat de omzet is. Er is geen live zicht op welke producten, bars of tijdstippen het meest opleveren, en handmatig rekenen kost tijd en levert fouten op.",
      benefits: [
        "Realtime omzet per bar, product en locatie — tijdens het evenement bijsturen",
        "Bezoekers blijven betalen met munten; personeel hoeft niet meer te rekenen",
        "Digitale audittrail per transactie: fraudepreventie en betrouwbare afrekening",
        "Eco-cup statiegeld, retouren en niet-ingeleverde bekers automatisch verwerkt",
        "BTW-tarieven per productcategorie (drank vs. beker) correct toegepast",
        "Behoud van fysieke munten én digitale basis voor toekomstige cashless-stap",
      ],
      prerequisites: [
        { workflowId: "03", qualifier: "Bezoekersuitgaven later combineren met ticketdata" },
      ],
      timeSaved: "Kortere wachtrijen aan de bar en geen turflijsten meer na afloop",
      expectedValue:
        "Gasten betalen simpelweg met munten, terwijl Thuishaven de professionele controle en commerciële inzichten krijgt van een modern cashless platform — inclusief live sturing op assortiment, personeel en marges.",
      investmentNote: "Exclusief eventuele POS-hardware en platformlicenties",
      deliverables: [
        "Hybride POS-opzet: munten innen + digitale registratie per bestelling",
        "Product-, locatie- en tijdstip-koppeling voor elke transactie",
        "Live dashboard: omzet per bar, subcategorie en bestseller",
        "Eco-cup flow met statiegeld, retouren en inzicht in uitgegeven vs. ingenomen tokens",
        "BTW-verrekening per productcategorie",
        "Audittrail gekoppeld aan terminal en medewerker",
      ],
    },
    "08": {
      title: "Loyalty App – Strategische Sessie",
      investmentLabel: "€3.500",
      summary:
        "Intensieve strategische sessie om de blauwdruk voor de Thuishaven Loyalty Experience te bepalen — scope, pricing en voordelen.",
      why: "Thuishaven heeft een gigantisch loyale achterban: 7.000 volgers in het Broadcast-kanaal en actieve online communities. De potentie voor een exclusief lidmaatschap is enorm. Om te voorkomen dat er direct een dure app wordt gebouwd zonder te weten wat de fans écht willen, starten we met een strategische sessie.",
      benefits: [
        "Voorkomt een dure miskoop of verkeerde softwarekeuze",
        "Heldere strategie voor de vaste achterban",
        "Bepaling van vorm, pricing en voordelen",
        "Bewezen aanpak op basis van ervaring met Q-dance loyalty-app",
      ],
      timeSaved: "Voorkomt maanden verkeerde ontwikkeling",
      expectedValue:
        "Voorkomt een dure miskoop of verkeerde softwarekeuze door vooraf een glasheldere, rendabele strategie te bepalen voor je vaste achterban.",
      deliverables: [
        "Strategisch document met scope en functionele requirements",
        "Vorm & pricing: app vs. web, gratis vs. betaald lid",
        "Voordelenpakket: early access, korting, gastenlijst",
        "Businesscase en concreet stappenplan voor realisatie",
      ],
    },
  },
};
