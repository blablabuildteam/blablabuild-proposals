import type { PackageSource, PhaseSource } from "@foundation/types";

export const phaseSources: readonly PhaseSource[] = [
  {
    id: "now",
    label: "Phase 1 · NOW",
    period: "Weeks 1–4",
    headline: "Immediate impact",
    workflows: ["WF1"],
    outcomes: ["Outcome 1", "Outcome 2"],
  },
];

export const packageSources: readonly PackageSource[] = [
  {
    name: "Starter",
    tag: "Recommended",
    workflows: "WF1",
    workflowIds: ["WF1"],
    weeks: "2–3",
    description: "Single workflow to prove value fast.",
    recommended: true,
  },
];
