import type { WorkflowSource } from "@foundation/types";
import { impactFromLabel } from "@foundation/rice";
import { buildAiWorkflowEstimate } from "@foundation/cost";
import { ALT_F_AWESOME_RATE_CARD } from "@foundation/config";

const rateCard = ALT_F_AWESOME_RATE_CARD;
const example = buildAiWorkflowEstimate(1.5, rateCard);

export const workflowSources: WorkflowSource[] = [
  {
    id: "WF1",
    title: "Example Initiative",
    bucket: "Quick Win",
    rice: {
      reach: 20,
      impact: impactFromLabel("High"),
      confidencePct: 85,
      effort: 1.5,
    },
    impactLabel: "High",
    phaseOriginal: "NOW",
    phaseRevised: "NOW",
    effort: {
      ...example.effort,
      daysLabel: example.effort.daysLabel.replace(" dagen", " days"),
    },
    cost: example.cost,
    summary: "One-line outcome the client cares about.",
    why: "Why this matters: pain in their words from discovery.",
    benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
    timeSaved: "~X hours/week",
    deliverables: ["Deliverable 1", "Deliverable 2"],
  },
];
