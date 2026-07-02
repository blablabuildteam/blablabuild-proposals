import { SlideApproach } from "@/components/slides/SlideApproach";
import { SlideDebrief } from "@/components/slides/SlideDebrief";
import { SlideInvestment } from "@/components/slides/SlideInvestment";
import { SlideNextSteps } from "@/components/slides/SlideNextSteps";
import { SlidePhaseBacklog } from "@/components/slides/SlidePhaseBacklog";
import { SlidePhaseNear } from "@/components/slides/SlidePhaseNear";
import { SlidePhaseNext } from "@/components/slides/SlidePhaseNext";
import { SlidePhaseNow } from "@/components/slides/SlidePhaseNow";
import { SlidePrioritization } from "@/components/slides/SlidePrioritization";
import { SlideUnderstanding } from "@/components/slides/SlideUnderstanding";
import { SlideWayOfWorking } from "@/components/slides/SlideWayOfWorking";
import { SlideWorkflows } from "@/components/slides/SlideWorkflows";
import type {
  ProposalOverlayDefinition,
  ProposalSectionDefinition,
  ProposalSectionId,
} from "./types";

export const PROPOSAL_SECTIONS = [
  {
    id: "debrief",
    name: "Discovery Debrief",
    description:
      "Client intro, workshop quote, focus areas and impact/effort matrix.",
    defaultLabel: "Debrief",
    defaultVariant: "light",
    category: "opening",
    component: SlideDebrief,
  },
  {
    id: "understanding",
    name: "Challenge & Context",
    description:
      "Stats sidebar, programme goals, friction points and focus pillars.",
    defaultLabel: "Uitdaging",
    defaultVariant: "light",
    category: "context",
    component: SlideUnderstanding,
  },
  {
    id: "way-of-working",
    name: "Way of Working",
    description: "Delivery principles, step flow and sync/control callouts.",
    defaultLabel: "Werkwijze",
    defaultVariant: "blue",
    category: "context",
    component: SlideWayOfWorking,
  },
  {
    id: "approach",
    name: "Roadmap Overview",
    description: "Three-phase timeline with parallel track callout.",
    defaultLabel: "Roadmap",
    defaultVariant: "light",
    category: "approach",
    component: SlideApproach,
  },
  {
    id: "phase-now",
    name: "Phase Detail · NOW",
    description: "Phase 1 headline, outcomes and workflow cards.",
    defaultLabel: "Fase 1",
    defaultVariant: "light",
    category: "phases",
    component: SlidePhaseNow,
  },
  {
    id: "phase-next",
    name: "Phase Detail · NEXT",
    description: "Phase 2 detail with parallel WF9 track.",
    defaultLabel: "Fase 2",
    defaultVariant: "light",
    category: "phases",
    component: SlidePhaseNext,
  },
  {
    id: "phase-near",
    name: "Phase Detail · NEAR",
    description: "Phase 3 detail with dataplatform workflows.",
    defaultLabel: "Fase 3",
    defaultVariant: "light",
    category: "phases",
    component: SlidePhaseNear,
  },
  {
    id: "phase-backlog",
    name: "Phase Detail · Backlog",
    description: "WF10 Bunch replacement discovery, separate from phased roadmap.",
    defaultLabel: "Backlog",
    defaultVariant: "light",
    category: "phases",
    component: SlidePhaseBacklog,
  },
  {
    id: "workflows",
    name: "Workflow Reference",
    description: "Filterable table of all workflows with phase badges.",
    defaultLabel: "Workflows",
    defaultVariant: "light",
    category: "reference",
    component: SlideWorkflows,
  },
  {
    id: "prioritization",
    name: "RICE Prioritisation",
    description: "Phase 1 rationale, start-here block and full RICE ranking.",
    defaultLabel: "Prioritering",
    defaultVariant: "light",
    category: "reference",
    component: SlidePrioritization,
  },
  {
    id: "investment",
    name: "Investment Breakdown",
    description: "Per-phase cost blocks, parallel track and programme totals.",
    defaultLabel: "Investering",
    defaultVariant: "light",
    category: "reference",
    component: SlideInvestment,
  },
  {
    id: "next-steps",
    name: "Next Steps",
    description: "Four-step path from review to kick-off with brand callout.",
    defaultLabel: "Volgende stappen",
    defaultVariant: "light",
    category: "closing",
    component: SlideNextSteps,
  },
] as const satisfies readonly ProposalSectionDefinition[];

export const PROPOSAL_OVERLAYS = [
  {
    id: "workflow-use-case",
    name: "Workflow Use Case",
    description: "Full-screen workflow detail with benefits and deliverables.",
  },
] as const satisfies readonly ProposalOverlayDefinition[];

const sectionMap = new Map(
  PROPOSAL_SECTIONS.map((section) => [section.id, section]),
);

export const THUISHAVEN_SECTION_ORDER: ProposalSectionId[] = [
  "debrief",
  "way-of-working",
  "workflows",
  "prioritization",
  "approach",
  "phase-now",
  "phase-next",
  "phase-near",
  "investment",
  "next-steps",
];

/** Default section order used by AB Capital. */
export const AB_CAPITAL_SECTION_ORDER: ProposalSectionId[] = [
  "debrief",
  "understanding",
  "way-of-working",
  "approach",
  "phase-now",
  "phase-next",
  "phase-near",
  "phase-backlog",
  "workflows",
  "prioritization",
  "investment",
  "next-steps",
];

export function getProposalSection(id: ProposalSectionId) {
  const section = sectionMap.get(id);
  if (!section) {
    throw new Error(`Unknown proposal section: ${id}`);
  }
  return section;
}

export function resolveSlideComponents(sectionIds: readonly ProposalSectionId[]) {
  return sectionIds.map((id) => getProposalSection(id).component);
}

export const SECTION_CATEGORIES: Record<
  ProposalSectionDefinition["category"],
  string
> = {
  opening: "Opening",
  context: "Context",
  approach: "Approach",
  phases: "Phases",
  reference: "Reference",
  closing: "Closing",
};
