import type { PackageSource, PhaseSource } from "@foundation/types";

export const phaseSources: readonly PhaseSource[] = [
  {
    id: "now",
    label: "AI Enablement Workshop",
    period: "",
    headline: "**Human-First, AI-Empowered** — from grunt work to strategic impact",
    workflows: ["WF1"],
    outcomes: [
      "Every team understands what AI means for their work — concrete and immediately actionable",
      "Use cases per department validated, prioritised, and ready to pursue",
      "Shared AI roadmap: NOW / NEXT / NEAR — owned by the whole team",
      "Business cases developed for the most promising initiatives",
      "A rhythm of innovation established — not a one-off hype",
    ],
  },
  {
    id: "next",
    label: "Project Enablement",
    period: "Pending pre-exploration",
    headline: "Central overview, **the right toolstack**, and a foundation for the PM role",
    workflows: ["WF2"],
    outcomes: [
      "One central overview of all active projects — always up to date",
      "Toolstack decided and configured based on how Adsomnia works and grows",
      "Foundation ready for a PM / PO — internal or new hire — to work from day one",
      "Structure that scales — whether Adsomnia grows internally or continues to work externally",
      "Foundation for future AI initiatives coming out of the workshop",
    ],
  },
  {
    id: "near",
    label: "Always-On Retainer",
    period: "To be confirmed",
    headline: "Always available — **Innovation · Production · Business**",
    workflows: ["WF3"],
    outcomes: [
      "Production: safety net and direct support for project leads and the PM-to-be — escalations handled before they become problems",
      "Innovation: monthly 'AI 30 Minutes of Now' sessions — live demos, new use cases, and ideas people have been experimenting with in Claude get ownership and a path forward",
      "Business: strategic sparring on roadmap, priorities, and decisions",
      "You decide how hours are split across the three areas — based on what matters most that week",
    ],
  },
];

export const packageSources: readonly PackageSource[] = [
  {
    name: "Workshop",
    tag: "Start here",
    workflows: "WF1",
    workflowIds: ["WF1"],
    weeks: "3–4",
    description:
      "AI Workshop with four milestones: from awareness to strategic roadmap and business cases.",
  },
  {
    name: "Workshop + Enablement",
    tag: "Recommended",
    workflows: "WF1 + WF2",
    workflowIds: ["WF1", "WF2"],
    weeks: "6–10",
    description:
      "Workshop and organisational foundation. Can run in parallel — ready to build afterwards.",
    recommended: true,
  },
  {
    name: "Full Partnership",
    tag: "Ongoing",
    workflows: "WF1 + WF2 + Retainer",
    workflowIds: ["WF1", "WF2", "WF3"],
    weeks: "Ongoing",
    description:
      "Full partnership: workshop, foundation, and ongoing blablabuild capacity.",
  },
];
