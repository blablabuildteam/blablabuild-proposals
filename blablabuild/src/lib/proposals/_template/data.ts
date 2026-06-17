import { BLABLABUILD_PROPOSAL_CONFIG } from "@foundation/config";
import { buildProposalContent } from "@foundation/proposal";
import type { SlideConfig } from "@/lib/types";
import { packageSources, phaseSources } from "./phases.source";
import { workflowSources } from "./workflows.source";

const built = buildProposalContent(
  workflowSources,
  phaseSources,
  packageSources,
  BLABLABUILD_PROPOSAL_CONFIG,
);

export const { workflows, riceSorted, phases, packages, AI_BUILD_NOTE } = built;

export const wayOfWorking = [
  {
    title: "Discovery-led",
    body: "Scope is validated in a deep-dive before build starts.",
  },
  {
    title: "AI-assisted delivery",
    body: "Faster delivery, fewer billable hours — reflected in the estimates.",
  },
  {
    title: "Phased, not big bang",
    body: "Each phase delivers usable value before the next begins.",
  },
] as const;

export const slideConfigs: SlideConfig[] = [
  { label: "Debrief", variant: "light" },
  { label: "Challenge", variant: "light" },
  { label: "Way of working", variant: "light" },
  { label: "Roadmap", variant: "light" },
  { label: "Phase 1", variant: "light" },
  { label: "Workflows", variant: "light" },
  { label: "Prioritisation", variant: "light" },
  { label: "Investment", variant: "light" },
  { label: "Next steps", variant: "light" },
];

export const slideLabels = slideConfigs.map((s) => s.label);
