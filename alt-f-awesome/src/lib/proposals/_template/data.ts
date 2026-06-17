import { ALT_F_AWESOME_PROPOSAL_CONFIG } from "@foundation/config";
import { buildProposalContent } from "@foundation/proposal";
import type { SlideConfig } from "@/lib/types";
import { packageSources, phaseSources } from "./phases.source";
import { workflowSources } from "./workflows.source";

const built = buildProposalContent(
  workflowSources,
  phaseSources,
  packageSources,
  ALT_F_AWESOME_PROPOSAL_CONFIG,
);

export const { workflows, riceSorted, phases, packages, AI_BUILD_NOTE } = built;

export const wayOfWorking = [
  {
    title: "Strategy first",
    body: "We align on outcomes before design or build.",
  },
  {
    title: "Sharp delivery",
    body: "AI-assisted production: fast iteration, clear scope.",
  },
  {
    title: "Phased rollout",
    body: "Launch value early, expand when it works.",
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
