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
      "Foundation ready for a Project / Product Manager — internal or new hire — to work from day one",
      "Structure that scales — whether Adsomnia grows internally or continues to work externally",
    ],
  },
  {
    id: "near",
    label: "Always-On Retainer",
    period: "To be confirmed",
    headline: "Always available — **Innovation · Production · Business**",
    workflows: ["WF3"],
    outcomes: [
      "Your safety net on production: direct availability when things go wrong, no waiting",
      "Rhythm on innovation: AI initiatives stay alive and actually get implemented",
      "Strategic sparring partner: decision support for roadmap and priorities",
      "Flexible hours: you decide each week where effort goes",
      "Always in context — no briefing cost, no ramp-up time",
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
