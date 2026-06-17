import type { PackageSource, PhaseSource } from "@foundation/types";

export const phaseSources: readonly PhaseSource[] = [
  {
    id: "now",
    label: "Phase 1 · NOW",
    period: "Weeks 1–4",
    headline: "Foundation & immediate ops wins",
    workflows: ["WF0", "WF5"],
    outcomes: [
      "Safe AI your team can use on sensitive data",
      "Daily fund document handling on autopilot",
      "Naming backbone ready for everything that follows",
    ],
  },
  {
    id: "next",
    label: "Phase 2 · NEXT",
    period: "Month 2–3",
    headline: "Structure, deal flow & onboarding",
    workflows: ["WF8", "WF1", "WF7"],
    outcomes: [
      "Faster path from opportunity to investment committee",
      "One file structure for the whole organisation",
      "Legal onboarding templates — phase 1 live",
    ],
  },
  {
    id: "parallel",
    label: "Parallel track",
    period: "Month 2–3",
    headline: "Brand & digital presence",
    workflows: ["WF9"],
    outcomes: [
      "Marketing updates without developer dependency",
      "Modern public-facing site",
      "Independent from ops roadmap timing",
    ],
  },
  {
    id: "near",
    label: "Phase 3 · NEAR",
    period: "Month 4+",
    headline: "Data platforms & long-term bets",
    workflows: ["WF3", "WF2", "WF4", "WF6", "WF10"],
    outcomes: [
      "Live finance & portfolio visibility",
      "LP investor portal",
      "Informed decision on Bunch replacement",
    ],
  },
];

export const packageSources: readonly PackageSource[] = [
  {
    name: "Foundation",
    tag: "Start small",
    workflows: "WF0 + WF5",
    workflowIds: ["WF0", "WF5"],
    weeks: "2–3",
    description:
      "Secure AI plus document automation — fast ROI, low risk, sets the backbone.",
  },
  {
    name: "Momentum",
    tag: "Recommended",
    workflows: "WF0 + WF5 + WF8 MVP",
    workflowIds: ["WF0", "WF5", "WF8"],
    weeks: "6–8",
    description:
      "Foundation plus deal flow — ops efficiency and investment team impact together.",
    recommended: true,
  },
  {
    name: "Full Phase 1–2",
    tag: "Complete",
    workflows: "WF0–WF8 + WF1 + WF7 phase 1",
    workflowIds: ["WF0", "WF5", "WF8", "WF1", "WF7"],
    weeks: "10–14",
    description:
      "Full NOW + NEXT roadmap including file governance and legal automation.",
  },
];
