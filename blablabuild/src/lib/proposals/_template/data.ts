import { BLABLABUILD_PROPOSAL_CONFIG } from "@foundation/config";
import { buildProposalContent } from "@foundation/proposal";
import {
  getProposalSection,
} from "@/components/proposal-library";
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
    body: "Faster delivery, fewer billable hours, reflected in the estimates.",
  },
  {
    title: "Phased, not big bang",
    body: "Each phase delivers usable value before the next begins.",
  },
] as const;

/** Pick sections from the library — customise labels per client. */
const TEMPLATE_SECTIONS = [
  "debrief",
  "understanding",
  "way-of-working",
  "approach",
  "phase-now",
  "workflows",
  "prioritization",
  "investment",
  "next-steps",
] as const;

export const slideConfigs: SlideConfig[] = TEMPLATE_SECTIONS.map(
  (sectionId) => {
    const section = getProposalSection(sectionId);
    return {
      sectionId,
      label: section.defaultLabel,
      variant: section.defaultVariant,
    };
  },
);

export const slideLabels = slideConfigs.map((s) => s.label);
