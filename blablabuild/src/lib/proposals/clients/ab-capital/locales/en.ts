import { BLABLABUILD_RATE_CARD } from "@foundation/config";
import { buildAiWorkflowEstimate } from "@foundation/cost";
import type { AbCapitalLocaleContent } from "./types";

const rate = BLABLABUILD_RATE_CARD;
const sdpFoundation = buildAiWorkflowEstimate(2, rate, { speedMultiplier: 4 });
const wf2OnSdp = buildAiWorkflowEstimate(2.5, rate, { speedMultiplier: 5 });
const wf4OnSdp = buildAiWorkflowEstimate(2, rate, { speedMultiplier: 5 });

export const en: AbCapitalLocaleContent = {
  meta: {
    slug: "ab-capital",
    clientName: "ABCapital",
    clientLogo: "/ab-capital-logo.png",
    title: "**Digital transformation** roadmap",
    subtitle: "Phased automation programme, June 2026",
  },
  debrief: {
    quote:
      "ABCapital has outgrown the start-up phase. To keep scaling, the organisation needs more automation. Smarter, more consistent processes free up time for execution and reduce the margin for error. The goal is to rely less on personal knowledge and ad hoc email, and more on standardised, automated workflows.",
    quoteSource: "Discovery workshop",
    focusAreas:
      "4 focus areas: Fund Operations, Group Financing, Family Office, and New Investments",
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
      { id: "WF0", label: "Local LLM", x: 10, y: 6, rotation: -4 },
      { id: "WF7", label: "Legal & KYC", x: 10, y: 24, rotation: 3 },
      { id: "WF8", label: "AI deal flow", x: 34, y: 12, rotation: -2 },
      { id: "WF5", label: "Document handling", x: 16, y: 38, rotation: 4 },
      { id: "WF9", label: "Website migration", x: 40, y: 28, rotation: -5 },
      { id: "WF3", label: "Performance insights", x: 40, y: 42, rotation: 2 },
      { id: "WF4", label: "LP dashboard", x: 48, y: 48, rotation: -1 },
      { id: "WF10", label: "Bunch, discovery", x: 68, y: 32, rotation: -2 },
      { id: "WF1", label: "Asset management", x: 48, y: 54, rotation: 3 },
      { id: "WF6", label: "Email workflows", x: 26, y: 66, rotation: -3 },
      { id: "WF2", label: "Financial overview", x: 22, y: 84, rotation: 2 },
    ],
    axisX: { low: "Low effort", high: "Effort" },
    axisY: { low: "Low impact", high: "Impact" },
    caption:
      "Impact/effort matrix from the discovery workshop: 11 workflows mapped.",
  },
  understanding: {
    klanten: { label: "Limited Partners", value: "40+" },
    tools: {
      label: "Tools",
      value: "7",
      hint: "Twinfield, Basecone, Harvest, Notion, SharePoint, Claude, Bunch",
    },
    pillarsLabel: "Focus areas",
    pillars: [
      "Fund Operations",
      "Group Financing",
      "Family Office",
      "New Investments",
    ],
    kicker: "The challenge",
    title: "Growth is hitting an **administrative ceiling**",
    subtitle:
      "ABCapital has outgrown the start-up phase. Manual processes are now the bottleneck, not the team.",
    goalsLabel: "Goals",
    goals: [
      { title: "Time saved" },
      { title: "Better insights" },
      { title: "Break the silos" },
    ],
    frictionLabel: "Where friction shows up today",
    friction: [
      "Manual document flows: download, rename, upload",
      "Files trapped in personal inboxes and ad hoc folders",
      "Twinfield, Bunch, and internal tools do not talk to each other",
      "Repetitive legal and onboarding work nobody wants to do",
    ],
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
      interconnectivity: "Interconnectivity",
      interconnectivityHint:
        "This workflow shares data or builds on other workflows in the roadmap — click to view the linked workflow.",
      feedsFrom: "Receives from",
      feedsInto: "Contributes to",
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
    debriefKicker: "Discovery summary",
    wayOfWorking: {
      kicker: "Way of working",
      title: "**Discovery** in. **Working software** out.",
      subtitle:
        "Four principles that shape how we build with you. Not a standard agency playbook.",
      aiTitle: "Regular alignment",
      aiBody:
        "A fixed weekly slot for progress, open items, and priorities. You always know where things stand and what comes next.",
      controlTitle: "You stay in control",
      controlBody:
        "Scope is validated before we build. Clear deliverables per phase. You decide how far we go.",
    },
    approach: {
      kicker: "Roadmap",
      title: "**Three phases**, one programme",
      subtitle:
        "Phase 1 delivers impact and foundation. Phase 2 the first automation, including email. Phase 3 data and dashboards. WF9 (website) runs in parallel during phase 2.",
      parallelLabel: "Parallel",
      parallelBody: "Marketing updates without blocking ops automation.",
      backlogLabel: "Backlog",
      backlogBody:
        "Bunch replacement starts with discovery. Implementation only follows a well-founded decision.",
    },
    workflows: {
      kicker: "Overview",
      title: "All **11 workflows**",
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
        "RICE measures standalone return per workflow. The roadmap measures sequence: what goes live quickly, what is a prerequisite, and what creates momentum? WF7 (43) belongs in phase 1 alongside WF0 and WF5. Legal automation builds on the secure AI foundation and delivers fast onboarding gains.",
      workflowRationale: {
        WF0:
          "Higher impact as foundation: unlocks WF5, WF7, WF8, and every AI flow on sensitive data. RICE (60) reflects organisation-wide reach, not just direct end users. Fastest effort in the top 5 (roughly 1 to 1.5 weeks).",
        WF5:
          "Highest RICE (56) and daily ops pain. Returns 6 to 10 hours per week immediately, plus a naming backbone for Bunch, reporting (WF3), and LP views (WF4). About 2 weeks, no blocking dependencies.",
      },
      wf0Note:
        "RICE = (Reach × Impact × Confidence) ÷ Effort. WF0 scores high on impact as foundation. Reach is elevated because it enables the entire AI roadmap. WF8 scores lower (14) on effort but leads phase 2: secure foundation first, then deal flow. Together, WF0, WF5, and WF7 deliver usable value in phase 1 before the heavier steps.",
    },
    investment: {
      kicker: "Investment",
      title: "Investment **by phase**",
      subtitle:
        "Three phases with rationale per workflow. Each phase delivers value before the next begins.",
      platformBundleTitle: "Bundle advantage",
      platformSavingsLabel: "Save",
      platformNote:
        "WF2 and WF4 together on the Smart Data Platform. Phase pricing above already reflects this bundle advantage.",
    },
    nextSteps: {
      kicker: "Next steps",
      title: "Ready when **you** are",
      subtitle: "From roadmap to execution: four steps to kick-off.",
      steps: [
        {
          n: "01",
          title: "Review the proposal",
          body:
            "Walk through the phase plan, workflows, and investment at your own pace. Note questions, priorities, and anything that should differ for you.",
        },
        {
          n: "02",
          title: "Discuss together",
          body:
            "A short session to review this proposal. Open questions, which phase takes priority, and what you want to change within this framework.",
        },
        {
          n: "03",
          title: "Sharpen phases and scope",
          body:
            "We fine-tune phasing together: shift workflows, narrow or expand scope, and align timing with your capacity. From framework to concrete: confirmed scope per phase, line-item budget, deliverables, and milestones.",
        },
        {
          n: "04",
          title: "Sign and start",
          body:
            "Sign the Statement of Work and plan kick-off. Start within 2 weeks of agreement.",
        },
      ],
    },
    phaseBacklog: {
      note:
        "WF10 sits outside the phased roadmap: no price or timeline until you explicitly choose to explore. Then stakeholders, requirements, and build vs. buy follow before any migration decision.",
    },
  },
  wayOfWorking: [
    {
      title: "Discovery first",
      body: "We start from your workshop findings, not a generic playbook. Scope is validated before we build.",
    },
    {
      title: "Building with AI",
      body: "We build with AI so you get working software faster, at a fraction of classic agency cost.",
    },
    {
      title: "Step by step",
      body: "Each phase delivers usable value before the next starts. You decide how far we go.",
    },
    {
      title: "Your data, your security",
      body: "Especially for ABCapital: private AI, EU hosting, no confidential data shared with public LLMs.",
    },
  ],
  slideLabels: {
    debrief: "Debrief",
    understanding: "Challenge",
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
      period: "Weeks 1 to 6",
      headline: "Foundation and **immediate ops wins**",
      workflows: ["WF0", "WF5", "WF7"],
      outcomes: [
        "Secure AI the team can use on sensitive data",
        "Daily fund document processing on autopilot",
        "Naming backbone ready for everything that follows",
        "Legal onboarding templates live in phase 1",
      ],
    },
    {
      id: "next",
      label: "Phase 2, NEXT",
      period: "Months 2 to 3",
      headline: "Structure, **deal flow**, and email",
      workflows: ["WF8", "WF1", "WF6"],
      outcomes: [
        "Faster path from opportunity to investment committee",
        "One file structure for the whole organisation",
        "Email actions automatically tracked as tasks in Notion",
      ],
    },
    {
      id: "parallel",
      label: "Parallel track",
      period: "Months 2 to 3",
      headline: "Brand and **digital presence**",
      workflows: ["WF9"],
      outcomes: [
        "Marketing updates without developer dependency",
        "Modern public website",
        "Independent of ops roadmap timing",
      ],
    },
    {
      id: "near",
      label: "Phase 3, NEAR",
      period: "Month 4+",
      headline: "Data platforms and **live insight**",
      workflows: ["WF3", "WF2", "WF4"],
      outcomes: [
        "Live financial and portfolio insight",
        "LP investor portal",
        "Optional: WF2 and WF4 together via Smart Data Platform (scale advantage)",
      ],
    },
    {
      id: "backlog",
      label: "Backlog",
      period: "After phase 3, on request",
      headline: "Replace Bunch, **discovery** first",
      workflows: ["WF10"],
      outcomes: [
        "Evidence-based decision: stay on Bunch or migrate",
        "Build vs. buy and ROI per fund mapped",
        "Migration roadmap only after explicit go/no-go",
      ],
    },
  ],
  packages: [
    {
      name: "Foundation",
      tag: "Start small",
      workflows: "WF0 + WF5",
      workflowIds: ["WF0", "WF5"],
      weeks: "2 to 3",
      description:
        "Secure AI plus document automation: fast ROI, low risk, lays the backbone.",
    },
    {
      name: "Momentum",
      tag: "Recommended",
      workflows: "WF0 + WF5 + WF8 MVP",
      workflowIds: ["WF0", "WF5", "WF8"],
      weeks: "6 to 8",
      description:
        "Foundation plus deal flow: ops efficiency and investment team impact together.",
      recommended: true,
    },
    {
      name: "Full Phase 1–2",
      tag: "Complete",
      workflows: "WF0–WF7 + WF8 + WF1",
      workflowIds: ["WF0", "WF5", "WF8", "WF1", "WF7"],
      weeks: "10 to 14",
      description:
        "Full NOW and NEXT roadmap including file governance and legal automation.",
    },
  ],
  platformBundles: [
    {
      id: "sdp",
      name: "Smart Data Platform",
      tagline: "One central database for finance and LP",
      description:
        "Instead of building WF2 and WF4 as separate integrations, we first lay a shared data layer: connectors to Twinfield, Basecone, and Bunch, one data model, one pipeline. The financial dashboard and LP portal then become views on the same source. Less duplicate work, faster go-live, lower combined cost.",
      workflowIds: ["WF2", "WF4"],
      foundation: sdpFoundation,
      layers: [
        {
          workflowId: "WF2",
          label: "Financial dashboard (view)",
          effort: wf2OnSdp.effort,
          cost: wf2OnSdp.cost,
        },
        {
          workflowId: "WF4",
          label: "LP dashboard (view)",
          effort: wf4OnSdp.effort,
          cost: wf4OnSdp.cost,
        },
      ],
      deliverables: [
        "Central data store with versioning and audit trail",
        "Connectors for Twinfield, Basecone, and Bunch",
        "Shared entity and fund model",
        "API layer for future workflows (including WF3)",
      ],
    },
  ],
  workflows: {
    WF0: {
      title: "Secure AI foundation",
      summary:
        "A private AI environment built for sensitive financial and client data.",
      why: "Public AI tools are not acceptable when you work with confidential fund, client, and deal data. ABCapital needs AI that stays in Europe, uses only your data, and never trains on your information.",
      benefits: [
        "Work with sensitive data without leaking to US models",
        "Your documents stay yours: zero retention, EU-hosted",
        "Train and tune on your own frameworks, memos, and policies",
        "One trusted layer for every AI workflow that follows",
      ],
      unlocks: [
        { workflowId: "WF5" },
        { workflowId: "WF7" },
        { workflowId: "WF8" },
      ],
      timeSaved: "Enabler: unlocks secure AI across the organisation",
      deliverables: [
        "Private AI environment (EU)",
        "Team training: working safely and effectively with private AI",
        "Usage guidelines the team can trust",
        "Ready for deal, legal, and ops automation",
      ],
    },
    WF5: {
      title: "Fund document pipeline",
      summary:
        "Stop manually renaming and uploading fund documents. Daily admin disappears.",
      why: "Capital calls, distributions, and quarterly reports arrive constantly. One wrong filename breaks downstream Bunch automations. This is repetitive work nobody should do by hand.",
      benefits: [
        "Incoming docs land with correct names every time",
        "Shared naming rules become the backbone for AI to read and route files",
        "Fewer errors that break fund admin workflows",
        "Immediate time back for the ops team, every week",
      ],
      unlocks: [
        {
          workflowId: "WF3",
          qualifier: "Cleaner data for reporting",
        },
        {
          workflowId: "WF4",
          qualifier: "Reliable input for LP views",
        },
      ],
      timeSaved: "6 to 10 hours per week on fund administration",
      deliverables: [
        "Automatic intake and rename to Bunch conventions",
        "Staging for upload: no more download-rename-upload loops",
        "Naming standard documented for people and AI",
      ],
    },
    WF8: {
      title: "Deal flow and investment memos",
      summary:
        "From inbound opportunity to investment committee: three workflows with UI — risk, profile, and memo.",
      why: "Every deal is evaluated differently today. That slows IC preparation and makes quality depend on who is available. You need a standard way to assess risk, map structures, and produce memos — each as its own input-to-output flow with a clear interface.",
      benefits: [
        "Compare opportunities consistently against your investment thesis",
        "Structure charts and cap tables profiled automatically",
        "First-draft investment memos in hours, not days",
        "Three modules (risk, profile, memo) with one consistent UX",
        "Better IC conversations with less prep friction",
      ],
      prerequisites: [{ workflowId: "WF0" }],
      timeSaved: "2 to 3 days per deal down to memo draft in hours",
      deliverables: [
        "Thesis-based risk assessment with interface",
        "Structured entity and cap table profile",
        "Presentation-ready memo output",
      ],
    },
    WF1: {
      title: "File and document management",
      summary:
        "One place for every file, with a chat interface to query documents and information on demand.",
      why: "Critical documents live in personal inboxes and ad hoc SharePoint folders. That creates knowledge silos and slows everyone when something urgent appears. Folder structure alone is not enough — the team needs to ask questions about what is stored.",
      benefits: [
        "Find any client or fund file in seconds, not minutes",
        "Chat interface: query files and information without manual search",
        "Incoming PDFs routed automatically to the right place",
        "The whole office works from the same structure",
        "Less risk of outdated versions or lost documents",
      ],
      timeSaved: "4 to 6 hours per week searching and filing",
      deliverables: [
        "Clear folder structure and governance",
        "Chat interface over documents and metadata",
        "Inbox-to-folder routing",
        "Metadata and version control",
      ],
    },
    WF7: {
      title: "Legal documents and KYC",
      summary:
        "Onboarding paperwork pre-filled from data you already have. Legal review stays in control.",
      why: "Transfer agreements, UBO documents, and W-8 forms mean repetitive typing nobody enjoys. It slows client onboarding and introduces errors.",
      benefits: [
        "Templates filled from existing client and fund records",
        "Faster onboarding without cutting legal corners",
        "Phase 1: two document types with human review built in",
        "Less manual work on tasks the team actively avoids",
      ],
      prerequisites: [{ workflowId: "WF0" }],
      timeSaved: "4 to 8 hours per onboarding",
      deliverables: [
        "Two live document templates (phase 1)",
        "Auto-fill from existing records",
        "Review workflow before sending",
      ],
    },
    WF9: {
      title: "Website and brand",
      summary: "Update your site and content without waiting on developers.",
      why: "Marketing and brand updates now depend on technical help. That slows campaigns and makes ABCapital's public face harder to keep current.",
      benefits: [
        "Marketing team publishes pages and copy independently",
        "Modern, flexible site ready for future client portal ideas",
        "Faster campaign turnaround",
        "Runs in parallel: does not block ops automation",
      ],
      timeSaved: "Content updates: days down to hours",
      deliverables: [
        "User-friendly content management",
        "New site live with migrated content",
        "SEO-safe redirects",
      ],
    },
    WF3: {
      title: "Fund performance insight",
      summary:
        "Client-ready portfolio views — the external layer on top of WF2.",
      why: "Quarterly reporting from Bunch and KRIF is painful to consolidate. Previous Power BI attempts did not deliver the clarity or presentation quality you need. WF3 is the client-facing step after WF2: internal live insight becomes external fund reporting.",
      benefits: [
        "Allocations across strategies, vintages, and asset classes in one view",
        "AB-involved vs. non-AB performance clearly separated",
        "Something you are proud to show clients",
        "Less manual quarterly assembly",
        "Builds on WF2: internal overview becomes client-ready reporting",
      ],
      prerequisites: [
        {
          workflowId: "WF5",
          qualifier: "Consistent document and naming foundation",
        },
        {
          workflowId: "WF2",
          qualifier: "Live internal finance base (WF2 internal, WF3 external)",
        },
      ],
      timeSaved: "1 to 2 days per quarterly cycle",
      deliverables: [
        "Allocation dashboards",
        "Multi-vintage fund views",
        "Client-presentable reporting",
      ],
    },
    WF2: {
      title: "Real-time financial overview",
      summary:
        "Cash and expenses across 40 entities live — internal view, first step toward WF3.",
      why: "Management still relies on reactive Excel updates across Twinfield and Basecone. The workshop pain point: decisions based on consolidated figures that are often three months old. Dutch GAAP constraints ruled out off-the-shelf ERP shortcuts.",
      benefits: [
        "No more decisions on figures that are three months old",
        "Unified cash position without manual consolidation",
        "Line-item detail when decisions need it",
        "Less time chasing accountants for status updates",
        "Runway visibility for leadership",
        "First step toward WF3: internal overview later becomes client-ready fund reporting",
        "Combine with WF4 on the Smart Data Platform for scale advantage",
      ],
      unlocks: [
        {
          workflowId: "WF4",
          qualifier: "Stronger together on Smart Data Platform",
        },
        {
          workflowId: "WF3",
          qualifier: "Internal overview as base for external fund reporting",
        },
      ],
      timeSaved: "8 to 12 hours per week on finance consolidation",
      deliverables: [
        "Live multi-entity dashboard",
        "Cash and expense views leadership can trust",
        "Built around your existing Twinfield setup",
      ],
    },
    WF4: {
      title: "Limited partner dashboard",
      summary:
        "Instant view of LP positions, capital calls, and fund performance.",
      why: "LP data sits across disconnected fund admin lines. Investor relations and fundraising prep take longer than they should.",
      benefits: [
        "One screen for LP structures and outstanding commitments",
        "Faster answers when LPs or prospects ask questions",
        "Stronger base for future fundraising",
        "Less manual assembly before every investor conversation",
        "Combine with WF2 on the Smart Data Platform: shared data layer, lower total cost",
      ],
      prerequisites: [
        {
          workflowId: "WF5",
          qualifier: "Reliable fund documents and Bunch inputs",
        },
      ],
      unlocks: [
        {
          workflowId: "WF2",
          qualifier: "Stronger together on Smart Data Platform",
        },
      ],
      timeSaved: "6 to 10 hours per week on LP reporting",
      deliverables: [
        "LP position overview",
        "Capital call tracking",
        "Fund performance overview",
      ],
    },
    WF6: {
      title: "Email workflows",
      summary:
        "Important actions extracted from email and tracked in Notion — focused automation, not a heavy integration.",
      why: "Operational tasks hide in shared and personal inboxes. Management alignment depends on manual check-ins and memory. A trained email monitor that creates Notion tasks is enough; no enterprise workflow suite required.",
      benefits: [
        "Important emails become trackable tasks automatically",
        "Less time reading threads to find what needs doing",
        "Shared visibility in Notion without inbox bottlenecks",
        "Fewer things slipping through the cracks",
      ],
      timeSaved: "3 to 5 hours per week on management overhead",
      deliverables: [
        "Monitoring of shared inbox",
        "Automatic task creation in Notion",
        "Clear ownership on extracted actions",
      ],
    },
    WF10: {
      title: "Replace Bunch, discovery",
      investmentLabel: "To be determined",
      summary:
        "Separate track: stakeholder conversations, requirements, and build vs. buy — only on request, before any migration decision.",
      why: "Bunch is expensive, rigid on APIs, and forces manual workarounds. Full replacement has high friction. Discovery first is the responsible path. This deliberately sits outside the phased roadmap: no price or timeline until you decide to proceed.",
      benefits: [
        "Understand the true cost of staying vs. switching",
        "Roadmap before any major migration commitment",
        "Potential to reclaim significant annual software spend",
        "Full programmatic access to your own fund data long term",
      ],
      timeSaved: "Structural: vendor cost plus less manual work",
      deliverables: [
        "Build vs. buy recommendation",
        "Migration roadmap if justified",
        "ROI model per fund",
      ],
    },
  },
};
