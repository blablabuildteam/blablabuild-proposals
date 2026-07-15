import { BLABLABUILD_PROPOSAL_CONFIG } from "@foundation/config";
import { buildProposalContent } from "@foundation/proposal";

// Fixed-price projects — no scope buffer needed
const ADSOMNIA_CONFIG = {
  ...BLABLABUILD_PROPOSAL_CONFIG,
  costScopeBuffer: undefined,
} as const;
import { getProposalSection } from "@/components/proposal-library";
import type { SlideConfig } from "@/lib/types";
import { packageSources, phaseSources } from "./phases.source";
import { workflowSources } from "./workflows.source";

const built = buildProposalContent(
  workflowSources,
  phaseSources,
  packageSources,
  ADSOMNIA_CONFIG,
);

export const { workflows, riceSorted, phases, packages, AI_BUILD_NOTE } = built;

export const wayOfWorking = [
  {
    title: "Activate, not just inspire",
    body: "We work from your context and teams. Every step leads directly to concrete actions and ownership within Adsomnia — no generic AI narrative.",
  },
  {
    title: "Parallel is fine",
    body: "The three projects can run alongside each other. They reinforce each other but do not wait for each other. You decide the order and the pace.",
  },
  {
    title: "Structure as a foundation",
    body: "AI initiatives succeed or fail on execution. That is why we build the way of working and tooling before we scale.",
  },
  {
    title: "Ongoing partnership",
    body: "With the retainer, blablabuild stays available as an extension of your team. No briefing cost, no ramp-up — just keep building.",
  },
] as const;

const ADSOMNIA_SECTIONS = [
  "debrief",
  "phase-now",
  "phase-next",
  "phase-near",
  "investment",
  "next-steps",
] as const;

export const slideConfigs: SlideConfig[] = ADSOMNIA_SECTIONS.map((sectionId) => {
  const section = getProposalSection(sectionId);
  return {
    sectionId,
    label: section.defaultLabel,
    variant: section.defaultVariant,
  };
});

export const slideLabels = slideConfigs.map((s) => s.label);
