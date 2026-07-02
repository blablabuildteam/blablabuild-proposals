import type { ThuishavenLocaleContent } from "./types";

export const en: ThuishavenLocaleContent = {
  meta: {
    slug: "thuishaven",
    clientName: "Thuishaven",
    clientLogo: "/thuishaven-logo.png",
    title: "**Transformation** Tactics",
    subtitle: "July 2026",
  },
  debrief: {
    quote:
      "Thuishaven just wrapped an unprecedented season. Pressure on both operations and marketing to sell out events as fast as possible is high. Many crucial decisions are still made on gut feeling, simply because valuable data is scattered across systems or gathering it manually takes too much time.",
    quoteSource: "Discovery workshop",
    summary:
      "This proposal describes seven projects and one strategic activity that together form the building blocks for Thuishaven to work more efficiently, deploy data smartly, and grow with focus.",
    focusAreas: "Operations · Marketing · Sales & Data",
    date: "July 2026",
    heroGif:
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGloc2Zmb3FucGR4cjNyamR6d21neTdyMm15YjE2cW1kMGk0dm10MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/M9xtw95RB2ZMc/giphy.gif",
  },
  impactMatrix: {
    quadrants: {
      quickWins: "Quick Wins",
      bigBets: "Big Bets",
      incremental: "Incremental",
      moneySinks: "Low Return",
    },
    postIts: [
      { id: "01", label: "Staff Form", x: 12, y: 72, rotation: -3 },
      { id: "02", label: "Marketing Dashboard", x: 30, y: 82, rotation: 2 },
      { id: "03", label: "Ticket Sales Dashboard", x: 32, y: 76, rotation: -2 },
      { id: "05", label: "Corporate Event Outreach", x: 34, y: 70, rotation: 4 },
      { id: "08", label: "Loyalty Session", x: 14, y: 58, rotation: -1 },
      { id: "06", label: "Content Studio", x: 56, y: 78, rotation: 3 },
      { id: "04", label: "DJ Talent Radar", x: 52, y: 64, rotation: -4 },
      { id: "07", label: "Bar & Consumption Data", x: 42, y: 66, rotation: 2 },
    ],
    axisX: { low: "Low effort", high: "Effort" },
    axisY: { low: "Low impact", high: "Impact" },
    caption:
      "Impact/effort matrix from the workshop: 7 projects and 1 activity mapped out.",
  },
  understanding: {
    layout: "growth",
    growth: {
      strengthsLabel: "Where you stand",
      strengths: [
        "Record-breaking season — organic base stronger than ever",
        "Maximally loyal community and recognisable brand identity",
        "Successful marketing team selling out events fast",
      ],
      ambitionLabel: "Where the opportunities are",
      ambition: [
        "Relieve pressure on operations and content",
        "Back decisions with hard data",
        "Reach more people at lower cost and maximise margins",
      ],
      gapLabel: "Current limitations",
      gap: [
        "Valuable data scattered across separate systems",
        "Manual admin consuming too much time",
        "No structural insight into which campaigns perform best",
      ],
    },
    klanten: { label: "Marketing", value: "Strong", hint: "" },
    pillarsLabel: "Focus areas",
    pillars: ["Operations", "Marketing", "Sales & Data"],
    kicker: "The opportunity",
    title: "Strong season, **time to capitalise**",
    subtitle:
      "The foundation has never been stronger. By combining data smartly and digitising manual work, Thuishaven becomes faster, sharper and more profitable — without adding headcount.",
    goalsLabel: "Goals",
    goals: [],
    frictionLabel: "Opportunities",
    friction: [],
  },
  access: {
    landing: {
      kicker: "Proposal for",
      greetingTemplate: "Hi {name},",
      clientLabel: "Client",
      passwordLabel: "Who is Thuishaven's biggest fan?",
      passwordHint: "",
      passwordInputType: "text",
      submit: "Open proposal",
      submitting: "Verifying…",
      opening: "Opening proposal…",
      sessionExpired: "Your session has expired. Please log in again.",
      invalidAccessLink:
        "This link is invalid or expired. Try again via your invitation.",
      accessDenied: "Hmm, that doesn't sound like our biggest fan.",
      genericError: "Something went wrong. Please try again.",
      confidentialNote: "Confidential, prepared by blablabuild",
    },
  },
  slideCopy: {
    ui: {
      proposalFor: "Proposal for",
      weekPrefix: "Week",
      outcomes: "Outcomes",
      why: "Why",
      timeBack: "Time saved",
      openUseCase: "View details",
      useCase: "Details",
      backToOverview: "Back to overview",
      whyThisMatters: "Why this matters",
      whatYouGet: "What you get",
      whatWeDeliver: "What we deliver",
      expectedValue: "Expected value",
      prerequisites: "Prerequisites",
      unlocks: "Unlocks",
      interconnectivity: "Interconnectivity",
      interconnectivityHint:
        "This project shares data or builds on other projects in the roadmap — click to view the linked project.",
      feedsFrom: "Receives from",
      feedsInto: "Contributes to",
      impactSuffix: "impact",
      exit: "Exit",
      previous: "Previous",
      next: "Next",
      useCaseFallback: "Details",
      tableRank: "#",
      tableId: "ID",
      tableInitiative: "Project",
      tablePhaseInvest: "Phase, investment",
      tableRice: "Priority",
      prioScoreLabel: "PRIO SCORE",
      fullRiceRanking: "Full priority ranking",
      phaseOneBadge: "P1",
      showingWorkflowsTemplate: "{filtered} of {total} projects",
      filterByPhase: "Filter by phase",
      phaseFilters: {
        ALL: "All",
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
        "Quick Win": "Quick Win",
        Incremental: "Incremental",
        "Big Bet": "Big Bet",
      },
      impactLabels: {
        Massive: "Massive",
        High: "High",
        Medium: "Medium",
        Low: "Low",
      },
      domainLabels: {
        Operations: "Operations",
        Marketing: "Marketing",
        Sales: "Sales",
      },
    },
    debriefKicker: "Intake summary",
    wayOfWorking: {
      kicker: "Way of working",
      title: "**Collaborate**, then **build what fits**.",
      subtitle:
        "The exploration phase is done. We know where the opportunities are — now we focus on the projects that deliver the most value.",
      aiTitle: "Steady rhythm",
      aiBody:
        "Regular check-ins to keep priorities sharp, discuss progress and flag new opportunities — without disrupting your daily operations.",
      controlTitle: "Proven value first",
      controlBody:
        "Start with phase 1. Prove value in weeks, not months. You decide if and when to scale to the next phase.",
    },
    approach: {
      kicker: "Roadmap",
      title: "**NOW, NEXT, NEAR** — phased delivery",
      subtitle:
        "Relieve pressure and get data in order first. Phase 1 delivers immediate time savings and insight. Projects that share data are connected — click an arrow for details.",
      parallelLabel: "Strategic session",
      parallelBody:
        "Session to explore the Loyalty Experience: define scope, audience and pricing — optional in phase 1.",
      backlogLabel: "Strategic session",
      backlogBody: "",
      connectionHint:
        "Click an arrow to see how projects connect to each other.",
      connectionTitle: "Data connection",
      connectionFallback:
        "These projects share data or build on each other's outputs.",
    },
    workflows: {
      kicker: "Overview",
      title: "All **projects**",
      subtitle:
        "Full overview, filter by phase. The detail pages above cover what matters most.",
    },
    prioritization: {
      kicker: "Prioritisation",
      title: "Why **this order**?",
      subtitle:
        "The order reflects what delivers the most value and what you need in place first. Three phases — from quick wins to bigger initiatives.",
      startHere: "Start here",
      phaseOne: "Phase 1",
      riceNote: "roadmap order over raw score",
      phaseOneRationale:
        "Phase 1 focuses on the highest direct impact: the Marketing Dashboard and Ticket Sales Dashboard provide immediate insight into campaign performance and ticket sales. The Staff Form relieves HR pressure. Corporate Event Outreach opens a new revenue stream. Together they lay the data foundation for everything that follows.",
      phaseRationales: {
        now:
          "Phase 1 focuses on the highest direct impact: the Marketing Dashboard and Ticket Sales Dashboard provide immediate insight into campaign performance and ticket sales. The Staff Form relieves HR pressure. Corporate Event Outreach opens a new revenue stream. Together they lay the data foundation for everything that follows.",
        next:
          "The Content Studio builds on marketing data from phase 1. Once dashboards are live, AI can generate content based on real campaign performance and tone of voice.",
        near:
          "Phase 3 contains projects with high strategic value but more dependencies or integrations. The DJ Talent Radar and Bar & Consumption Data benefit from the data foundation and tooling from earlier phases.",
      },
      workflowRationale: {
        "01":
          "Highest Priority score: lowest effort with immediate time savings on HR. Standalone project with no dependencies, ideal as the first live delivery.",
        "02":
          "Brings all marketing data together on one screen with AI questions. Visual recognition shows which assets perform — colour, image, timing, tone per audience — linked to ticket sales. Foundation for the Content Studio.",
        "03":
          "Live insight into ticket sales per platform, including alerts when external channels still list tickets while official sales are sold out. Essential for marketing decisions and directly linked to the Marketing Dashboard.",
        "05":
          "Automatic outbound to business prospects. Relatively fast delivery with direct revenue potential, independent of the dashboards.",
        "08":
          "Optional strategic session: blueprint for the Loyalty Experience — format, pricing and benefits — before building the programme.",
        "06":
          "Four epics in one studio: captions, photo selection, image generation and newsletters. Waits for phase 1 dashboards for optimal training and segmentation.",
        "04":
          "Objective DJ scoring based on sales and marketing data. Requires stable data feeds from phases 1 and 2.",
        "07":
          "Live bar and consumption data via Weeztix integration. More complex integration; pays off once ticketing and marketing data are reliable.",
      },
      wf0Note:
        "Priority = (Reach × Impact × Confidence) ÷ Effort. Order within each phase weighs roadmap dependencies more heavily than the raw score. Phase 1 (01–03, 05, 08) delivers quickly visible value. Phase 2 (06) follows once dashboards are live. Phase 3 (04, 07) scales data and sales once the foundation is in place.",
      riceBreakdown: {
        title: "Priority calculation",
        reach: "Reach",
        impact: "Impact",
        confidence: "Confidence",
        effort: "Effort",
      },
    },
    investment: {
      kicker: "Investment",
      title: "Investment **per phase**",
      subtitle:
        "Three phases with substantiation per project. Each phase delivers value before the next one starts. Amounts shown are ballpark ranges — estimates based on the current scope. If we move forward together, we will convert these into a concrete financial proposal based on additional research.",
      platformBundleTitle: "",
      platformSavingsLabel: "",
      platformNote: "",
    },
    nextSteps: {
      kicker: "Next steps",
      title: "Ready to **start**",
      subtitle: "From proposal to concrete implementation — five steps.",
      steps: [
        {
          n: "🔍",
          title: "Review proposal",
          body: "You get the time to go through this proposal at your own pace. Note questions, priorities and what should be different.",
        },
        {
          n: "🍺",
          title: "Alignment & clarification",
          body: "We get together — optionally over a beer — so we can provide clarification on the projects, approach and phasing. Open conversation, no obligations.",
        },
        {
          n: "🎯",
          title: "Make selection",
          body: "Together we determine which projects to tackle first. Based on your priorities and the roadmap.",
        },
        {
          n: "📄",
          title: "Concrete proposals",
          body: "For each selected project we deliver a concrete proposal with exact budget, approach, planning and deliverables.",
        },
        {
          n: "🚀",
          title: "Start building",
          body: "Once agreed, we start immediately. Working results in weeks, not months.",
        },
      ],
    },
    phaseBacklog: {
      note:
        "The strategic session for the Loyalty Experience is an optional part of phase 1. Goal: explore format, pricing and benefits before building the loyalty programme.",
    },
  },
  wayOfWorking: [
    {
      title: "Partner, not an agency",
      body: "We think along as a sparring partner — pragmatic. The exploration is done, now it's time to build.",
    },
    {
      title: "Build with AI",
      body: "Working tools in weeks, not months. Marketing and operations stay focused on results, we bring the innovation.",
    },
    {
      title: "Proven value first",
      body: "Start with phase 1: direct impact, visible results fast. Scale to phase 2 and 3 only when the foundation stands.",
    },
    {
      title: "Tech without overhead",
      body: "External innovation power without your own dev team or big agency — exactly what's missing now.",
    },
  ],
  slideLabels: {
    debrief: "Debrief",
    understanding: "Opportunities",
    "way-of-working": "Way of working",
    approach: "Roadmap",
    "phase-now": "Phase 1",
    "phase-next": "Phase 2",
    "phase-near": "Phase 3",
    "phase-backlog": "Strategic session",
    workflows: "Projects",
    prioritization: "Prioritisation",
    investment: "Investment",
    "next-steps": "Next steps",
  },
  aiBuildNote:
    "Estimates are based on AI-assisted delivery. Ranges are intentionally kept broad until scope is locked. Hosting and third-party licences not included.",
  phases: [
    {
      id: "now",
      label: "Phase 1, NOW",
      period: "Month 0 to 2",
      headline: "**Direct impact** — insight and efficiency",
      workflows: ["01", "02", "03", "05", "08"],
      outcomes: [
        "Digital staff form live with automatic XPS integration",
        "Marketing Dashboard with all channels, asset performance via visual recognition and AI questions",
        "Ticket Sales Dashboard with live sales per platform and alerts for secondary listings after sell-out",
        "Corporate Event Outreach with automatic outbound to business prospects",
        "Strategic Loyalty Experience session: explore format, pricing and benefits",
        "Data foundation for data-driven decision-making in phase 2 and 3",
      ],
    },
    {
      id: "next",
      label: "Phase 2, NEXT",
      period: "Month 2 to 5",
      headline: "**Content innovation** — smarter what already works",
      workflows: ["06"],
      outcomes: [
        "AI Caption Generator trained on Thuishaven tone of voice",
        "Smart photo selection: from 500 photos to the best in seconds",
        "Static image generation in brand style",
        "Segmented newsletters for targeted audiences",
      ],
    },
    {
      id: "near",
      label: "Phase 3, NEAR",
      period: "Month 5+",
      headline: "**Scalability** — expand data and sales",
      workflows: ["04", "07"],
      outcomes: [
        "DJ Talent Radar with objective Growth Score and alerts",
        "Bar & Consumption Data: live revenue per bar, product and location",
      ],
    },
  ],
  packages: [
    {
      name: "Operations First",
      tag: "Entry",
      workflows: "01",
      workflowIds: ["01"],
      weeks: "1 to 2",
      description:
        "Start with the Digital Staff Form. Immediate time savings on HR, no dependencies.",
    },
    {
      name: "Data & Insight",
      tag: "Recommended",
      workflows: "01 + 02 + 03",
      workflowIds: ["01", "02", "03"],
      weeks: "4 to 6",
      description:
        "Full phase 1: staff form plus both dashboards. Immediate time savings and data-driven marketing.",
      recommended: true,
    },
  ],
  platformBundles: [],
  workflows: {
    "01": {
      title: "The Digital Staff Form",
      summary:
        "An online form where staff enter their own details, with automatic flow to XPS and alerts after three shifts.",
      why: "Every person working at Thuishaven currently fills in a paper form that has to be manually retyped into an IB47 form for payroll in XPS. After three shifts, someone must manually track whether a longer contract is needed. This costs unnecessary time.",
      benefits: [
        "No more paper forms",
        "Automatic flow to XPS",
        "Auto-lock and alert after four shifts",
        "Live overview screen with all staff status",
        "Fewer errors in contract terms",
      ],
      timeSaved: "Enormous weekly time savings on HR administration",
      expectedValue:
        "Enormous weekly time savings on HR administration and elimination of errors in contract terms.",
      deliverables: [
        "Online form for staff",
        "Automatic IB47 generation and XPS integration",
        "Alert rule after four working days with contract notification",
        "Overview dashboard for management",
      ],
    },
    "02": {
      title: "The Marketing Dashboard",
      summary:
        "One clear screen with all marketing data, linked to ticket sales — including insight into which creative assets perform best via visual recognition and performance data.",
      why: "Marketing decisions are currently made on gut feeling. Important data from Instagram, TikTok, YouTube, Brevo, Weeztix and TicketSwap is scattered everywhere. This makes it hard to see why one edition sells out faster than another, which campaign generates the most revenue, or which image, colour, timing or tone works best for which audience.",
      benefits: [
        "All marketing data on one screen",
        "See directly which campaign sells the most tickets",
        "Visual recognition: which assets perform — colour, image, timing, format",
        "Audience insight: which joke, tone or message converts best",
        "AI chat function for questions in plain language",
        "Insight into campaign performance per edition",
        "Better campaign quality and targeted growth",
      ],
      unlocks: [
        { workflowId: "06", qualifier: "Conversion data for the Content Studio" },
        { workflowId: "08", qualifier: "Community data for the Loyalty Experience" },
      ],
      timeSaved: "Direct insight into marketing spend",
      expectedValue:
        "Direct insight into marketing spend and into which creative choices actually drive tickets — from colour and image to timing and tone per audience.",
      deliverables: [
        "Dashboard with integrations for Instagram, TikTok, YouTube, Brevo, Weeztix, TicketSwap",
        "Direct link with ticket sales",
        "Asset performance analysis: visual recognition linked to conversion data",
        "Insight into what works — which colour, image, moment and message for which audience",
        "AI chat function for questions like: why does this edition sell better?",
        "Campaign performance overviews per edition",
      ],
    },
    "03": {
      title: "The Ticket Sales Dashboard",
      summary:
        "Live dashboard pulling sales figures directly from Weeztix, Resident Advisor, Appic and TicketSwap — including alerts when tickets are still listed on external platforms while official sales are sold out.",
      why: "Ticket sales are currently tracked manually in spreadsheets. The total number is known, but the breakdown per platform and exact time of purchase is missing. It is also not immediately visible when tickets on TicketSwap or other secondary channels are still on offer while primary sales are already sold out. This costs hours of spreadsheet work and leaves revenue on the table.",
      benefits: [
        "No more manual spreadsheets",
        "Live insight per platform, time and price",
        "Alert when external platforms still list tickets while official sales are sold out",
        "Historical data for smart pricing advice",
        "Direct link with marketing campaigns",
        "Strategic insight to increase ticket prices data-driven",
      ],
      prerequisites: [
        { workflowId: "02", qualifier: "Linked for historical sales curves and marketing activities" },
      ],
      unlocks: [
        { workflowId: "04", qualifier: "Measure impact of DJ bookings on ticket sales" },
        { workflowId: "07", qualifier: "Combine visitor spending with ticket data" },
      ],
      timeSaved: "Hours per week on manual spreadsheet work",
      expectedValue:
        "Less manual admin work and smarter ticket pricing based on real data — plus immediate visibility when tickets still appear on TicketSwap and other channels while official sales are already sold out.",
      deliverables: [
        "Live dashboard connected to Weeztix, Resident Advisor, Appic and TicketSwap",
        "Sales per platform, time and price",
        "Detection of tickets on external platforms while official sales are sold out",
        "Historical data storage for pricing advice",
        "Export and reporting for management",
      ],
    },
    "04": {
      title: "DJ Talent Radar",
      summary:
        "Dashboard that automatically scans social media, streaming and festival data and flags emerging DJs with an objective Growth Score.",
      why: "For Thuishaven it is essential to discover emerging DJs early. The earlier a talent is on the radar, the more favourable the fee and the greater the chance of a good long-term deal. Currently this is still a manual search process.",
      benefits: [
        "Objective Growth Score for early scouting",
        "Automatic alerts on sudden popularity surges",
        "Comparison with line-ups of European festivals",
        "Better quality programming",
        "Financial growth by booking talent before they become unaffordable",
      ],
      prerequisites: [
        { workflowId: "03", qualifier: "Measure impact of DJ booking on ticket sales" },
      ],
      timeSaved: "Hours per week on manual artist research",
      expectedValue:
        "Better programming quality and financial growth by booking emerging talent before they become unaffordable.",
      deliverables: [
        "Dashboard with data from Instagram, TikTok, Spotify, SoundCloud, Resident Advisor",
        "Growth Score per artist based on multiple data sources",
        "Analysis of line-ups from comparable festivals in Western Europe",
        "Automatic alerts on significant growth",
      ],
    },
    "05": {
      title: "Corporate Event Outreach",
      summary:
        "Automatically identify interesting companies for business events and send a personal email at the right moment.",
      why: "Thuishaven generates top revenue on weekends, but weekdays are often still quiet. There is currently little active sales outreach to companies. This represents a major revenue opportunity.",
      benefits: [
        "Automatic identification of relevant companies",
        "Filtering by company size, region and anniversaries",
        "Personalised emails at the perfect moment",
        "Warm leads forwarded directly to the team",
        "Direct revenue growth on weekdays",
      ],
      timeSaved: "Hours per week on manual sales research",
      expectedValue:
        "Direct revenue growth by smartly and automatically filling currently empty weekdays.",
      deliverables: [
        "Company selection based on Chamber of Commerce and LinkedIn",
        "Automatic outbound campaigns with personalisation",
        "Lead notification on positive response",
        "Reporting on conversion and pipeline",
      ],
    },
    "06": {
      title: "The Thuishaven Content Studio",
      summary:
        "Central creative studio split into four epics: captions, photo selection, image generation and segmented newsletters — one platform, modular or combined.",
      why: "Manually writing copy for Instagram, TikTok and newsletters takes a lot of time every week. Thuishaven also receives folders with 400 to 500 event photos weekly — selecting the right images now takes 2 to 3 hours per week. By training a smart system on the unique Thuishaven style, we drastically speed this up.",
      benefits: [
        "Four epics, one studio — modular or combined",
        "Trained Caption Generator on your exact tone of voice",
        "Photo selection from hours to minutes with visual recognition",
        "Static image generation in brand style",
        "Segmented newsletters per audience and event",
        "Self-learning: the system continuously improves",
      ],
      prerequisites: [
        { workflowId: "02", qualifier: "Conversion data to learn which content performs best" },
      ],
      timeSaved: "Enormous weekly savings on content creation and photo selection",
      expectedValue:
        "Enormous weekly time savings on content creation and photo selection, combined with higher marketing quality through personalised newsletters.",
      investmentNote:
        "Epics separately: €16,000 – €20,500. Combined as one project benefits from synergy.",
      epicsSectionTitle: "Four epics, one studio",
      epicsCombinedNote:
        "Buying all epics separately costs €16,000 – €20,500. As one combined project we deliver more efficiently through shared infrastructure, training and design — ballpark €14,000 – €18,500.",
      epics: [
        {
          id: "06-1",
          title: "Trained Caption Generator",
          summary:
            "We ingest historical social posts and mailings to train an AI agent on your exact tone of voice. The marketer selects event, audience and channel — the generator proposes text variants instantly. Every final choice feeds the model for continuous self-learning.",
          deliverables: [
            "Training on historical Thuishaven posts and mailings",
            "Interface: select event, audience and channel",
            "Multiple text variants per asset",
            "Self-learning based on final marketer choices",
          ],
          cost: { min: 4000, max: 5000 },
        },
        {
          id: "06-2",
          title: "AI Visual Selection & Curation",
          summary:
            "Bulk analysis of incoming photo folders. The marketer uploads reference images and adds a guiding prompt. Visual recognition serves the best subset within seconds — from hours of manual work to minutes.",
          deliverables: [
            "Bulk upload and analysis of photo folders",
            "Reference images + prompt as steering input",
            "Visual recognition for style and composition",
            "Curated subset within seconds",
          ],
          cost: { min: 3500, max: 4500 },
        },
        {
          id: "06-3",
          title: "Static Image Generator",
          summary:
            "Extension into image creation once the textual foundation is in place. Upload a reference image — based on event, audience and channel the AI generates a new on-brand asset, including on-image copy, ready to download.",
          deliverables: [
            "Image generation from reference image",
            "Variables: event, audience, channel",
            "Output in Thuishaven brand style with optional on-image text",
            "Direct download for social and campaigns",
          ],
          cost: { min: 5000, max: 6500 },
        },
        {
          id: "06-4",
          title: "Segmented Newsletter Generator",
          summary:
            "Combines textual tone (epic 1) and visual assets (epics 2 & 3) in an automated newsletter module. Build segmented emails directly from generated content — multiple personalised versions per audience and event.",
          deliverables: [
            "Newsletter module linked to captions and visuals",
            "Segmentation by audience and event",
            "Multiple personalised versions per campaign",
            "Targeted outreach to specific fan segments",
          ],
          cost: { min: 3500, max: 4500 },
        },
      ],
      deliverables: [
        "Trained Caption Generator for all channels",
        "AI Visual Selection & Curation module",
        "Static Image Generator in brand style",
        "Segmented Newsletter Generator",
      ],
    },
    "07": {
      title: "Smart Bar & Consumption Data",
      summary:
        "Hybrid bar model: visitors pay with trusted tokens while staff digitally register every order on a mobile or fixed point of sale — real-time insight without going fully cashless.",
      why: "Thuishaven deliberately chose physical tokens for breakage revenue and visitor familiarity. With a traditional token system you only know your revenue after the event — after weighing and counting. There is no live view of which products, bars or time slots perform best, and manual calculation costs time and creates errors.",
      benefits: [
        "Real-time revenue per bar, product and location — adjust during the event",
        "Visitors keep paying with tokens; staff no longer need to calculate change",
        "Digital audit trail per transaction: fraud prevention and reliable settlement",
        "Eco-cup deposits, returns and unreturned cups processed automatically",
        "VAT rates applied correctly per product category (drinks vs. cups)",
        "Retention of physical tokens plus digital foundation for future cashless step",
      ],
      prerequisites: [
        { workflowId: "03", qualifier: "Combine visitor spending with ticket data later" },
      ],
      timeSaved: "Shorter queues at the bar and no more tally sheets after close",
      expectedValue:
        "Guests simply pay with tokens while Thuishaven gets the professional control and commercial insights of a modern cashless platform — including live steering on assortment, staffing and margins.",
      investmentNote: "Excluding any POS hardware and platform licences",
      deliverables: [
        "Hybrid POS setup: collect tokens + digital registration per order",
        "Product, location and timestamp linking for every transaction",
        "Live dashboard: revenue per bar, subcategory and bestseller",
        "Eco-cup flow with deposit, returns and insight into issued vs. collected tokens",
        "VAT reconciliation per product category",
        "Audit trail linked to terminal and staff member",
      ],
    },
    "08": {
      title: "Loyalty App – Strategic Session",
      investmentLabel: "€3,500",
      summary:
        "Intensive strategic session to determine the blueprint for the Thuishaven Loyalty Experience — scope, pricing and benefits.",
      why: "Thuishaven has a massively loyal fanbase: 7,000 followers in the Broadcast channel and active online communities. The potential for an exclusive membership is enormous. To prevent building an expensive app without knowing what fans really want, we start with a strategic session.",
      benefits: [
        "Prevents an expensive wrong purchase or software choice",
        "Clear strategy for the loyal fanbase",
        "Definition of format, pricing and benefits",
        "Proven approach based on experience with Q-dance loyalty app",
      ],
      timeSaved: "Prevents months of wrong development",
      expectedValue:
        "Prevents an expensive wrong purchase or software choice by defining a clear, profitable strategy upfront for your loyal fanbase.",
      deliverables: [
        "Strategic document with scope and functional requirements",
        "Format & pricing: app vs. web, free vs. paid membership",
        "Benefits package: early access, discounts, guest list",
        "Business case and concrete step-by-step plan for realisation",
      ],
    },
  },
};
