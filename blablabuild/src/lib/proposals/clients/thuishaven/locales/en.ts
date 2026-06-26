import { BLABLABUILD_RATE_CARD } from "@foundation/config";
import { buildAiWorkflowEstimate } from "@foundation/cost";
import type { ThuishavenLocaleContent } from "./types";

const rate = BLABLABUILD_RATE_CARD;
const eipFoundation = buildAiWorkflowEstimate(2, rate, { speedMultiplier: 4 });
const wf2OnEip = buildAiWorkflowEstimate(1.6, rate, { speedMultiplier: 5 });
const wf3OnEip = buildAiWorkflowEstimate(1.4, rate, { speedMultiplier: 5 });

export const en: ThuishavenLocaleContent = {
  meta: {
    slug: "thuishaven",
    clientName: "Thuishaven",
    clientLogo: "/thuishaven-logo.png",
    title: "**Marketing innovation** & AI sparring",
    subtitle: "June 2026",
  },
  debrief: {
    quote:
      "Over recent years, Thuishaven has built a strong marketing foundation and is achieving excellent results. The focus is now on further professionalising and optimising the marketing approach. Day-to-day operations leave limited room to explore new technologies, AI, and innovative ways of working. There is therefore a need for an experienced sparring partner to help identify opportunities and realise the next step in growth.",
    quoteSource: "Discovery workshop",
    summary:
      "This proposal shows where AI adds value fastest: reclaiming content capacity (WF1), data-driven campaign and ticket steering (WF2–WF3), and a low-threshold start via the Starter package.",
    focusAreas:
      "Sparring · Marketing AI · Phased growth",
    date: "June 2026",
  },
  impactMatrix: {
    quadrants: {
      quickWins: "Quick wins",
      bigBets: "Big bets",
      incremental: "Incremental",
      moneySinks: "Low return",
    },
    postIts: [
      { id: "WF1", label: "AI Marketing Copilot", x: 14, y: 74, rotation: -3 },
      { id: "WF4", label: "Day contracts", x: 26, y: 68, rotation: 2 },
      { id: "WF3", label: "Ticket Sales", x: 20, y: 58, rotation: -2 },
      { id: "WF2", label: "Marketing Intel", x: 32, y: 80, rotation: 4 },
      { id: "WF5", label: "Line-up sync", x: 40, y: 52, rotation: -1 },
      { id: "WF9", label: "Corporate Sales", x: 36, y: 38, rotation: 3 },
      { id: "WF7", label: "DJ Intelligence", x: 50, y: 46, rotation: -4 },
      { id: "WF6", label: "Ticket Pricing", x: 56, y: 64, rotation: 2 },
      { id: "WF8", label: "Loyalty App", x: 64, y: 54, rotation: -2 },
      { id: "WF10", label: "Intelligence", x: 74, y: 84, rotation: 3 },
    ],
    axisX: { low: "Low effort", high: "Effort" },
    axisY: { low: "Low impact", high: "Impact" },
    caption:
      "Impact/effort matrix from the workshop: 10 workflows mapped.",
  },
  understanding: {
    layout: "growth",
    growth: {
      strengthsLabel: "Where you are",
      strengths: [
        "Excellent commercial results and a strong brand position",
        "Active marketing on Instagram, TikTok, and YouTube",
        "Proof the current approach works — now time to professionalise",
      ],
      ambitionLabel: "Where you're heading",
      ambition: [
        "Further professionalise and optimise the marketing approach",
        "Use AI and innovation structurally",
        "Take the next growth step without expanding the team",
      ],
      gapLabel: "What's missing",
      gap: [
        "Day-to-day operations leave little room for tech exploration",
        "No senior layer for innovation and sparring",
        "Channels and data are not yet fully combined",
      ],
      opportunitiesLabel: "First AI opportunities",
      opportunities: [
        {
          title: "WF1 · Marketing Copilot",
          body: "8–12 hours per week back on content — directly usable on your channels.",
        },
        {
          title: "Starter package",
          body: "WF1 + day contracts: low risk, fast ROI, ideal as a first pilot.",
        },
        {
          title: "WF2 + WF3 · Dashboards",
          body: "Move from gut feel to data-driven campaign and ticket steering.",
        },
      ],
    },
    klanten: { label: "Marketing", value: "Strong", hint: "" },
    pillarsLabel: "Focus areas",
    pillars: ["Marketing", "Operations", "Data"],
    kicker: "The opportunity",
    title: "Strong foundation, **room for innovation**",
    subtitle:
      "You don't need to work harder — you need to work smarter. AI and automation fill exactly the gap created when operations are full and innovation has no fixed place.",
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
      passwordLabel: "Password",
      passwordHint: "Use the password from your invitation.",
      submit: "Open proposal",
      submitting: "Checking…",
      opening: "Opening proposal…",
      sessionExpired: "Your session has expired. Please sign in again.",
      invalidAccessLink:
        "This link is invalid or has expired. Enter the password from your invitation.",
      accessDenied: "Invalid client or password",
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
      timeBack: "Time back",
      openUseCase: "Open use case",
      useCase: "Use case",
      backToOverview: "Back to overview",
      whyThisMatters: "Why this matters",
      whatYouGet: "What you get",
      whatWeDeliver: "What we deliver",
      prerequisites: "Prerequisites",
      unlocks: "Unlocks",
      impactSuffix: "impact",
      exit: "Exit",
      previous: "Previous",
      next: "Next",
      useCaseFallback: "Use case",
      tableRank: "#",
      tableId: "ID",
      tableInitiative: "Initiative",
      tablePhaseInvest: "Phase, investment",
      tableRice: "RICE",
      fullRiceRanking: "Full RICE ranking",
      phaseOneBadge: "P1",
      showingWorkflowsTemplate: "{filtered} of {total} workflows",
      filterByPhase: "Filter by phase",
      phaseFilters: {
        ALL: "All",
        NOW: "Now",
        NEXT: "Next",
        NEAR: "Later",
        PARALLEL: "Parallel",
        BACKLOG: "Backlog",
      },
      phaseLabels: {
        NOW: "Now",
        NEXT: "Next",
        NEAR: "Later",
        PARALLEL: "Parallel",
        BACKLOG: "Backlog",
      },
      bucketLabels: {
        "Quick Win": "Quick win",
        Incremental: "Incremental",
        "Big Bet": "Big bet",
      },
      impactLabels: {
        Massive: "Very high",
        High: "High",
        Medium: "Medium",
        Low: "Low",
      },
    },
    debriefKicker: "Intake summary",
    wayOfWorking: {
      kicker: "Way of working",
      title: "**Spar first**, then **build what fits**.",
      subtitle:
        "Not a big agency programme — a partner who thinks with you about what AI concretely delivers for Thuishaven.",
      aiTitle: "Monthly sparring",
      aiBody:
        "A fixed rhythm to test ideas, sharpen priorities, and identify new AI opportunities — without burdening day-to-day operations.",
      controlTitle: "Pilot first, scale later",
      controlBody:
        "Start with WF1 or the Starter package. Prove value in weeks, not months. You decide if and when to scale.",
    },
    approach: {
      kicker: "Roadmap",
      title: "**Start small**, scale what works",
      subtitle:
        "Marketing first: WF1 gives capacity back immediately. Then dashboards and automation. Phases 2 and 3 follow only once the foundation is in place — no big bang.",
      parallelLabel: "Parallel",
      parallelBody:
        "Marketing and operations can evolve in parallel without blocking each other.",
      backlogLabel: "Backlog",
      backlogBody:
        "We build Intelligence through individual workflows and bring it together eventually. The Loyalty App follows once ticket and visitor data are in place.",
    },
    workflows: {
      kicker: "Overview",
      title: "All **10 workflows**",
      subtitle:
        "Full overview with phase filters. Detail slides above cover what matters most.",
    },
    prioritization: {
      kicker: "Prioritisation",
      title: "Why **this order**?",
      subtitle:
        "Scored on reach, impact, confidence, and effort, then weighted by what you need first to build the rest.",
      startHere: "Start here",
      phaseOne: "Phase 1",
      riceNote: "roadmap priority over raw ranking",
      phaseOneRationale:
        "RICE measures standalone return per workflow. The roadmap measures sequence: what delivers value quickly in marketing and operations, and what lays the data foundation for everything that follows? WF1–WF4 form phase 1: immediate time savings plus the base for data-driven marketing and ticket steering.",
      workflowRationale: {
        WF1:
          "Highest impact for limited effort: the marketing team gets capacity back immediately. Learns Thuishaven's tone of voice and delivers multiple content variants for A/B testing. No blocking dependencies, ideal as the first live workflow.",
        WF2:
          "Foundation for data-driven marketing: all channels in one dashboard with AI queries. Combine with WF3 on the Event Intelligence Platform for a shared data layer, less duplicate work, and lower total cost. Enables WF6 (pricing) and strategic decision-making.",
      },
      wf0Note:
        "RICE = (Reach × Impact × Confidence) ÷ Effort. Quick wins (WF1–WF4) score high on confidence and fast delivery. Intelligence (WF10) and the Loyalty App (WF8) deliberately sit in the backlog: first value from phases 1 and 2, then combine and expand.",
    },
    investment: {
      kicker: "Investment",
      title: "Investment **by phase**",
      subtitle:
        "Four phases with rationale per workflow. Each phase delivers value before the next begins.",
      platformBundleTitle: "Bundle advantage",
      platformSavingsLabel: "Save",
      platformNote:
        "WF2 and WF3 together on the Event Intelligence Platform. Phase pricing above already reflects this bundle advantage.",
    },
    nextSteps: {
      kicker: "Next steps",
      title: "Ready to **get started**",
      subtitle: "From sparring to a concrete pilot — four low-threshold steps.",
      steps: [
        {
          n: "01",
          title: "Sparring session",
          body:
            "Walk through the opportunity map together: where does AI deliver value fastest for your marketing and operations?",
        },
        {
          n: "02",
          title: "Choose a pilot",
          body:
            "Starter (WF1 + WF4) or Momentum (WF1–WF3): start small, get visible results quickly.",
        },
        {
          n: "03",
          title: "Build & train",
          body:
            "Live tooling in your tone of voice, including team training and usage guidelines.",
        },
        {
          n: "04",
          title: "Evaluate & scale",
          body:
            "Measure what works. Then move to phase 2 or expand further — only what proves its value.",
        },
      ],
    },
    phaseBacklog: {
      note:
        "Backlog = Intelligence + Loyalty App. Intelligence grows with workflows from phases 1 and 2 (dashboards, pricing, DJ data) and is eventually brought together in one layer. The Loyalty App follows once visitor and ticket data are reliably available.",
    },
  },
  wayOfWorking: [
    {
      title: "Sparring partner",
      body: "First explore where AI and automation deliver most — pragmatic, not from a standard playbook.",
    },
    {
      title: "Building with AI",
      body: "Working tools in weeks, not months. Marketing keeps focusing on results; we bring the innovation.",
    },
    {
      title: "Pilot first",
      body: "Start small with WF1 or the Starter package. Prove value, then scale to dashboards and automation.",
    },
    {
      title: "Tech without overhead",
      body: "External innovation capacity without an in-house dev team or large agency — exactly what's missing now.",
    },
  ],
  slideLabels: {
    debrief: "Debrief",
    understanding: "Opportunity",
    "way-of-working": "Way of working",
    approach: "Roadmap",
    "phase-now": "Phase 1",
    "phase-next": "Phase 2",
    "phase-near": "Phase 3",
    "phase-backlog": "Backlog",
    workflows: "Workflows",
    prioritization: "Prioritisation",
    investment: "Investment",
    "next-steps": "Next steps",
  },
  aiBuildNote:
    "Estimates reflect AI-assisted delivery (roughly 5× faster build). Bands are intentionally wide until scope is fixed. Third-party hosting and licences excluded.",
  phases: [
    {
      id: "now",
      label: "Phase 1, NOW",
      period: "Month 0 to 2",
      headline: "**Marketing first** — quick wins that pay off immediately",
      workflows: ["WF1", "WF2", "WF3", "WF4"],
      outcomes: [
        "AI Marketing Copilot live for content creation in your tone of voice",
        "Marketing and ticket dashboards with real-time insight",
        "Digital day contracts without manual administration",
        "Foundation for data-driven decision-making in phase 2",
      ],
    },
    {
      id: "next",
      label: "Phase 2, NEXT",
      period: "Month 2 to 5",
      headline: "Automation and **commercial intelligence**",
      workflows: ["WF5", "WF6", "WF7", "WF9"],
      outcomes: [
        "Line-up changes published automatically across all platforms",
        "Data-driven ticket pricing advice based on historical sales",
        "DJ Momentum Score for early artist scouting",
        "Automated outbound for corporate events",
      ],
    },
    {
      id: "backlog",
      label: "Backlog",
      period: "After phases 1 & 2",
      headline: "Bring **Intelligence** together & **Loyalty App**",
      workflows: ["WF10", "WF8"],
      outcomes: [
        "Intelligence built through individual workflows, eventually unified in one layer",
        "AI chat and predictions on editions, pricing, campaigns, and sales",
        "Loyalty App for loyal visitors: early access, rewards, and memberships",
        "Start only once the data foundation from phases 1 and 2 is in place",
      ],
    },
  ],
  packages: [
    {
      name: "Starter",
      tag: "Entry",
      workflows: "WF1 + WF4",
      workflowIds: ["WF1", "WF4"],
      weeks: "3 to 4",
      description:
        "Ideal first step: marketing copilot plus digital day contracts. Low risk, fast ROI — perfect after a sparring session.",
    },
    {
      name: "Momentum",
      tag: "Recommended",
      workflows: "WF1 + WF2 + WF3",
      workflowIds: ["WF1", "WF2", "WF3"],
      weeks: "5 to 7",
      description:
        "Marketing copilot plus dashboards: immediate time savings and data-driven steering on campaigns and ticket sales.",
      recommended: true,
    },
    {
      name: "Full Phase 1",
      tag: "Complete",
      workflows: "WF1–WF4",
      workflowIds: ["WF1", "WF2", "WF3", "WF4"],
      weeks: "6 to 8",
      description:
        "Full NOW roadmap: marketing, data, tickets, and operations in one programme.",
    },
  ],
  platformBundles: [
    {
      id: "eip",
      name: "Event Intelligence Platform",
      tagline: "One central data layer for marketing and tickets",
      description:
        "Instead of building WF2 and WF3 as separate integrations, we first lay a shared data layer: connectors to Instagram, TikTok, YouTube, Brevo, Weeztix, TicketSwap, and more, one data model, one pipeline. The marketing dashboard and ticket sales dashboard then become views on the same source. Less duplicate work, faster go-live, lower combined cost.",
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
        "Central data store with versioning and audit trail",
        "Connectors to marketing and ticket platforms",
        "Shared data model for campaigns and sales",
        "API layer for future workflows (including WF6 and WF10)",
      ],
    },
  ],
  workflows: {
    WF1: {
      title: "AI Marketing Copilot",
      summary:
        "An AI assistant that supports the marketing team in creating content in Thuishaven's tone of voice.",
      why: "Marketing runs on a compact team with a lot of responsibility. Content for Instagram, TikTok, newsletters, and push notifications takes a lot of time — while demand only keeps growing. This is the fastest AI win: capacity back immediately without extra headcount.",
      benefits: [
        "Less time spent on content creation",
        "Consistent brand communication across all channels",
        "Higher output without extra headcount",
        "Multiple variants per message for A/B testing",
        "Learns from existing social posts and adapts to your style",
      ],
      unlocks: [
        { workflowId: "WF2", qualifier: "Richer content data for marketing insights" },
      ],
      timeSaved: "8 to 12 hours per week on content creation",
      deliverables: [
        "AI assistant trained on Thuishaven tone of voice",
        "Generation of captions, stories, newsletters, and push notifications",
        "A/B variants per content type",
        "Team training and usage guidelines",
      ],
    },
    WF2: {
      title: "Marketing Intelligence Dashboard",
      summary:
        "A central dashboard bringing together all marketing performance, with AI to ask questions about campaigns and results.",
      why: "Marketing is steered largely on gut feel today. Data from Instagram, TikTok, YouTube, Brevo, Weeztix, and TicketSwap sits in silos, making it hard to understand why an edition sells less or which campaign drives the most tickets.",
      benefits: [
        "Data-driven marketing decisions instead of gut feel",
        "Continuous insight into campaign performance across channels",
        "AI queries such as: why is this edition selling less?",
        "Insight into optimal posting times and channel performance",
        "Combine with WF3 on the Event Intelligence Platform for scale advantage",
      ],
      unlocks: [
        { workflowId: "WF6", qualifier: "Marketing data as input for pricing advice" },
        { workflowId: "WF10", qualifier: "Marketing layer in the central platform" },
      ],
      timeSaved: "4 to 6 hours per week on reporting and analysis",
      deliverables: [
        "Dashboard with connectors to all marketing channels",
        "AI query layer for campaign and sales questions",
        "Campaign performance views per edition",
        "Documentation and team training",
      ],
    },
    WF3: {
      title: "Ticket Sales Dashboard",
      summary:
        "Real-time insight into ticket sales across all sales channels, including TicketSwap.",
      why: "Ticket sales are partly tracked in manual spreadsheets today. Without real-time visibility on ticket phases, revenue, and sales pace, commercial steering is reactive rather than proactive.",
      benefits: [
        "No more manual spreadsheets for ticket sales",
        "Always real-time insight on sales per channel and phase",
        "Better commercial steering on pricing phases and sell-outs",
        "Combine with WF2 on the Event Intelligence Platform: shared data layer, lower total cost",
      ],
      prerequisites: [
        {
          workflowId: "WF2",
          qualifier: "Stronger together on Event Intelligence Platform",
        },
      ],
      unlocks: [
        { workflowId: "WF6", qualifier: "Sales data as basis for pricing advice" },
      ],
      timeSaved: "3 to 5 hours per week on manual reporting",
      deliverables: [
        "Automatic connection to all ticket platforms",
        "Real-time dashboard: phases, revenue, pace, and channels",
        "Alerts on deviating sales pace",
        "Export and reporting for management",
      ],
    },
    WF4: {
      title: "Digital Day Contracts",
      summary:
        "Fully digital processing of day contracts: fill in, sign, archive, and forward to XPS.",
      why: "Day contracts are processed manually today. That costs administrative time, introduces errors, and slows payroll processing. Staff want to start quickly without paperwork.",
      benefits: [
        "Less administration for HR and operations",
        "Fewer errors in contract data",
        "Faster processing towards XPS",
        "Automatic flagging after three separate shifts",
        "Digital archive without paper hassle",
      ],
      timeSaved: "4 to 8 hours per week on contract administration",
      deliverables: [
        "Digital fill-in and signing form for staff",
        "Automatic PDF generation and archiving",
        "Connection and processing towards XPS",
        "Flagging rule for three separate shifts",
      ],
    },
    WF5: {
      title: "Website & Platform Automation",
      summary:
        "Automatically publish line-up changes on the Thuishaven website and external platforms.",
      why: "Line-up changes must currently be applied manually on the website, Partyflock, DJGuide, Bash, and Guestzone. That is duplicate work, error-prone, and slows publication.",
      benefits: [
        "Less duplicate work on every line-up change",
        "Fewer errors between platforms",
        "Faster publication of current line-ups",
        "Browser automation where APIs are missing",
      ],
      prerequisites: [{ workflowId: "WF1", qualifier: "Content workflows as foundation" }],
      timeSaved: "2 to 4 hours per line-up change",
      deliverables: [
        "Central line-up source with sync to all platforms",
        "Connectors to Thuishaven website, Partyflock, DJGuide, Bash, and Guestzone",
        "Fallback via browser automation where needed",
        "Logging and error handling",
      ],
    },
    WF6: {
      title: "Ticket Pricing Intelligence",
      summary:
        "Analysis of historical ticket sales, weather, line-ups, and ticket phases to provide pricing advice.",
      why: "Ticket prices are largely set on experience today. Without systematic analysis, questions remain unanswered: could this edition have sold at a higher price, is phase three too cheap, when should a new phase go live?",
      benefits: [
        "Data-driven pricing advice per edition and ticket phase",
        "Insight into effect of weather and line-up on sales",
        "Faster decisions on new ticket phases",
        "Higher revenue without extra marketing spend",
      ],
      prerequisites: [
        { workflowId: "WF2", qualifier: "Marketing data for context" },
        { workflowId: "WF3", qualifier: "Historical sales data" },
      ],
      timeSaved: "Structural: better margin per edition",
      deliverables: [
        "Pricing advice model based on historical data",
        "Dashboard with scenarios per edition",
        "Recommendations for ticket phase timing",
        "Reporting per completed edition",
      ],
    },
    WF7: {
      title: "DJ Intelligence Platform",
      summary:
        "Automatic monitoring of artists on social media, streaming, and line-ups with an objective DJ Momentum Score.",
      why: "Scouting emerging artists happens manually and subjectively today. Data from Instagram, TikTok, Spotify, SoundCloud, Beatport, and Resident Advisor is not systematically combined.",
      benefits: [
        "Objective DJ Momentum Score for early scouting",
        "Act earlier on emerging artists",
        "Less dependence on individual networks",
        "Monitoring across multiple platforms in one view",
      ],
      timeSaved: "5 to 10 hours per week on artist research",
      deliverables: [
        "DJ Momentum Score based on multiple data sources",
        "Monitoring dashboard for artists and trends",
        "Alerts on significant momentum changes",
        "Integration with line-up planning",
      ],
    },
    WF8: {
      title: "Loyalty App",
      summary:
        "App for loyal visitors: loyalty based on visitor behaviour, with early access, exclusive events, and rewards.",
      why: "Thuishaven has a strong community but no structured Loyalty App yet. It belongs in the backlog: only meaningful once ticket and visitor data from earlier workflows are reliably available.",
      benefits: [
        "Early access and exclusive events for loyal visitors",
        "Discounts and memberships as a new revenue stream",
        "Rewards based on visitor behaviour",
        "Stronger binding with the community",
      ],
      prerequisites: [
        { workflowId: "WF3", qualifier: "Ticket data for visitor behaviour" },
      ],
      timeSaved: "Structural: higher lifetime value per visitor",
      deliverables: [
        "Loyalty programme with points and rewards",
        "Membership tiers with early access",
        "Connection to ticket sales and visitor data",
        "Management interface for the team",
      ],
    },
    WF9: {
      title: "Corporate Sales Automation",
      summary:
        "Automatically identify interesting companies for corporate events with personalised outbound campaigns.",
      why: "Corporate events are a growth opportunity but require targeted acquisition. Manual searching in KVK and LinkedIn and follow-up via Brevo takes significant time without a structured approach.",
      benefits: [
        "Automatic identification of relevant companies",
        "Personalised outbound campaigns via Brevo",
        "Integration with KVK and LinkedIn data",
        "Structured pipeline for corporate events",
      ],
      timeSaved: "4 to 6 hours per week on sales research",
      deliverables: [
        "Company selection based on KVK and LinkedIn",
        "Outbound campaigns via Brevo",
        "CRM-style lead follow-up",
        "Reporting on conversion and pipeline",
      ],
    },
    WF10: {
      title: "Intelligence",
      investmentLabel: "To be determined",
      hideTimeline: true,
      summary:
        "The intelligence layer where operational and commercial data come together — built through individual workflows and eventually unified.",
      why: "We don't build Intelligence in one go. Each workflow in phases 1 and 2 delivers a piece: marketing dashboards (WF2), ticket data (WF3), pricing (WF6), DJ insights (WF7). Eventually we bring these together in one layer with AI chat for questions like: which edition is selling out, which campaign delivers most, can prices go up? No price or timeline until the foundation workflows are live.",
      benefits: [
        "All data sources in one central platform",
        "AI chat for strategic and operational questions",
        "Predictions on sell-outs and revenue per edition",
        "ROI insight per campaign and artist",
        "Foundation for a fully data-driven events organisation",
      ],
      prerequisites: [
        { workflowId: "WF2", qualifier: "Marketing data layer" },
        { workflowId: "WF3", qualifier: "Ticket sales data layer" },
      ],
      timeSaved: "Structural: better decision-making at every level",
      deliverables: [
        "Central data warehouse with all operational and commercial sources",
        "AI chat interface for strategic questions",
        "Predictive models for sales and revenue",
        "Roadmap and investment advice after discovery track",
      ],
    },
  },
};
