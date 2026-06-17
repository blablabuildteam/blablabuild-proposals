import type { WorkflowSource } from "@foundation/types";
import { impactFromLabel } from "@foundation/rice";
import { estimateCostFromDays, estimateDaysFromEffort } from "@foundation/cost";
import { ALT_F_AWESOME_RATE_CARD } from "@foundation/config";

const rateCard = ALT_F_AWESOME_RATE_CARD;

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
    effort: (() => {
      const { daysMin, daysMax } = estimateDaysFromEffort(1.5, rateCard);
      return {
        daysMin,
        daysMax,
        weeks: "2–3",
        daysLabel: `${daysMin}–${daysMax} days`,
      };
    })(),
    cost: (() => {
      const { daysMin, daysMax } = estimateDaysFromEffort(1.5, rateCard);
      return estimateCostFromDays(daysMin, daysMax, rateCard);
    })(),
    summary: "One-line outcome the client cares about.",
    why: "Why this matters: pain in their words from discovery.",
    benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
    timeSaved: "~X hours/week",
    deliverables: ["Deliverable 1", "Deliverable 2"],
  },
];
