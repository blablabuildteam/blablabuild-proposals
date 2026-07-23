import type { PackageSource, PhaseSource } from "@foundation/types";

export const phaseSources: readonly PhaseSource[] = [
  {
    id: "now",
    label: "Phase 1 — Quick Wins",
    period: "0–3 months",
    headline: "Content, conversion & **first channel tests**",
    workflows: ["WF1", "WF3", "WF5"],
    outcomes: [
      "Scalable UGC and TikTok content workflow operational",
      "Conversion rate improved through audience-specific landing pages",
      "YouTube Ads tested as an additional paid channel",
      "First creative performance data across channels",
      "Reduced dependency on a single Meta audience",
    ],
  },
  {
    id: "next",
    label: "Phase 2 — Growth Foundation",
    period: "3–6 months",
    headline: "Organic traffic, data & **B2B validation**",
    workflows: ["WF2", "WF4", "WF6"],
    outcomes: [
      "Organic traffic growing structurally via SEO and AEO",
      "Performance dashboard live: CAC, LTV, ROAS and cohort insights per channel",
      "B2B proposition validated with first schools or childcare partners",
      "Data-driven media investment decisions replacing gut feel",
    ],
  },
  {
    id: "near",
    label: "Phase 3 — New Markets",
    period: "6–12 months",
    headline: "B2B infrastructure, **international expansion** and technology",
    workflows: ["WF7", "WF8", "WF9", "WF10"],
    outcomes: [
      "B2B digital environment live for institutional buyers (if WF6 validated)",
      "CRM operational for partner and lead management",
      "Germany pilot completed with a data-backed go/no-go recommendation",
      "Headless Shopify rebuild only if concrete technical limitations are proven",
    ],
  },
];

export const packageSources: readonly PackageSource[] = [
  {
    name: "Scenario A — Quick Wins",
    tag: "Fast start",
    workflows: "WF1 + WF3 + WF5",
    workflowIds: ["WF1", "WF3", "WF5"],
    weeks: "6–10",
    description:
      "TikTok/UGC workflow, audience landing pages and YouTube Ads pilot. Fastest path to channel diversification and higher conversion. Excludes media budget and recurring content.",
  },
  {
    name: "Scenario B — Growth Foundation",
    tag: "Recommended",
    workflows: "WF1 + WF2 + WF3 + WF4",
    workflowIds: ["WF1", "WF2", "WF3", "WF4"],
    weeks: "12–20",
    description:
      "Scenario A plus SEO/AEO and performance dashboard. Builds the scalable foundation for multi-channel growth and data-driven decisions. Our recommended starting point.",
    recommended: true,
  },
  {
    name: "Scenario C — Growth & New Channels",
    tag: "Full scope",
    workflows: "WF1–4 + WF6 + WF7 + WF9",
    workflowIds: ["WF1", "WF2", "WF3", "WF4", "WF6", "WF7", "WF9"],
    weeks: "20–40+",
    description:
      "Full scope including B2B proposition, B2B website and Germany pilot. Only recommended after Scenario B delivers validated results.",
  },
];
