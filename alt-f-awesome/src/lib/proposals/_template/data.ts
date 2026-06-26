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

const TEMPLATE_SECTIONS: readonly {
  sectionId: string;
  label: string;
  variant: SlideConfig["variant"];
}[] = [
  { sectionId: "debrief", label: "Debrief", variant: "light" },
  { sectionId: "understanding", label: "Challenge", variant: "light" },
  { sectionId: "way-of-working", label: "Way of working", variant: "light" },
  { sectionId: "approach", label: "Roadmap", variant: "light" },
  { sectionId: "phase-now", label: "Phase 1", variant: "light" },
  { sectionId: "phase-next", label: "Phase 2", variant: "light" },
  { sectionId: "phase-near", label: "Phase 3", variant: "light" },
  { sectionId: "workflows", label: "Workflows", variant: "light" },
  { sectionId: "prioritization", label: "Prioritisation", variant: "light" },
  { sectionId: "investment", label: "Investment", variant: "light" },
  { sectionId: "next-steps", label: "Next steps", variant: "light" },
];

export const slideConfigs: SlideConfig[] = [...TEMPLATE_SECTIONS];

export const slideLabels = slideConfigs.map((s) => s.label);
