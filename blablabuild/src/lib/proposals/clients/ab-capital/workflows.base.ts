import { BLABLABUILD_RATE_CARD } from "@foundation/config";
import { buildAiWorkflowEstimate } from "@foundation/cost";
import type { WorkflowSource } from "@foundation/types";

const rate = BLABLABUILD_RATE_CARD;

const est = (
  effortMonths: number,
  speedMultiplier?: number,
  weeksSuffix?: string,
) => {
  const { effort, cost } = buildAiWorkflowEstimate(effortMonths, rate, {
    speedMultiplier,
  });
  if (weeksSuffix) {
    effort.weeks = `${effort.weeks} ${weeksSuffix}`;
  }
  return { effort, cost };
};

const wf0 = est(1, 8);
const wf5 = est(1.2);
const wf7 = est(1.5, 4.5);
const wf8 = est(2.8);
const wf1 = est(2);
const wf9 = est(1.5);
const wf3 = est(3);
const wf6 = est(1);
const wf4 = est(4);
const wf2 = est(4.5, 4);

export type WorkflowBase = Omit<
  WorkflowSource,
  | "title"
  | "summary"
  | "why"
  | "benefits"
  | "prerequisites"
  | "unlocks"
  | "timeSaved"
  | "deliverables"
  | "implementationEstimate"
  | "investmentLabel"
> & {
  implementationEstimate?: {
    effort: WorkflowSource["effort"];
    cost: WorkflowSource["cost"];
  };
};

export type WorkflowLocaleText = Pick<
  WorkflowSource,
  | "title"
  | "summary"
  | "why"
  | "benefits"
  | "prerequisites"
  | "unlocks"
  | "timeSaved"
  | "deliverables"
  | "investmentLabel"
> & {
  implementationEstimate?: { label: string; investmentLabel?: string };
  hideTimeline?: boolean;
};

export const workflowBases: readonly WorkflowBase[] = [
  {
    id: "WF0",
    bucket: "Quick Win",
    rice: { reach: 20, impact: 3, confidencePct: 100, effort: 1 },
    impactLabel: "Massive",
    phaseOriginal: "NOW",
    phaseRevised: "NOW",
    effort: wf0.effort,
    cost: wf0.cost,
  },
  {
    id: "WF5",
    bucket: "Quick Win",
    rice: { reach: 30, impact: 2.5, confidencePct: 90, effort: 1.2 },
    impactLabel: "High",
    phaseOriginal: "NOW",
    phaseRevised: "NOW",
    effort: wf5.effort,
    cost: wf5.cost,
  },
  {
    id: "WF8",
    bucket: "Quick Win",
    rice: { reach: 15, impact: 3, confidencePct: 80, effort: 2.5 },
    impactLabel: "Massive",
    phaseOriginal: "NEXT",
    phaseRevised: "NEXT",
    effort: wf8.effort,
    cost: wf8.cost,
  },
  {
    id: "WF1",
    bucket: "Quick Win",
    rice: { reach: 40, impact: 2, confidencePct: 90, effort: 2 },
    impactLabel: "High",
    phaseOriginal: "NEXT",
    phaseRevised: "NEXT",
    effort: wf1.effort,
    cost: wf1.cost,
  },
  {
    id: "WF7",
    bucket: "Quick Win",
    rice: { reach: 25, impact: 3, confidencePct: 85, effort: 1.5 },
    impactLabel: "Massive",
    phaseOriginal: "NOW",
    phaseRevised: "NOW",
    effort: wf7.effort,
    cost: wf7.cost,
  },
  {
    id: "WF9",
    bucket: "Quick Win",
    rice: { reach: 50, impact: 1, confidencePct: 100, effort: 1.5 },
    impactLabel: "Medium",
    phaseOriginal: "NEXT",
    phaseRevised: "PARALLEL",
    effort: wf9.effort,
    cost: wf9.cost,
  },
  {
    id: "WF3",
    bucket: "Incremental",
    rice: { reach: 20, impact: 2.5, confidencePct: 80, effort: 3 },
    impactLabel: "High",
    phaseOriginal: "NEXT",
    phaseRevised: "NEAR",
    effort: wf3.effort,
    cost: wf3.cost,
  },
  {
    id: "WF2",
    bucket: "Incremental",
    rice: { reach: 40, impact: 2.5, confidencePct: 60, effort: 4.5 },
    impactLabel: "High",
    phaseOriginal: "NEAR",
    phaseRevised: "NEAR",
    platformId: "sdp",
    effort: wf2.effort,
    cost: wf2.cost,
  },
  {
    id: "WF4",
    bucket: "Incremental",
    rice: { reach: 30, impact: 2, confidencePct: 70, effort: 4 },
    impactLabel: "High",
    phaseOriginal: "NEAR",
    phaseRevised: "NEAR",
    platformId: "sdp",
    effort: wf4.effort,
    cost: wf4.cost,
  },
  {
    id: "WF6",
    bucket: "Incremental",
    rice: { reach: 15, impact: 1.5, confidencePct: 60, effort: 1.5 },
    impactLabel: "Medium",
    phaseOriginal: "NEXT",
    phaseRevised: "NEXT",
    effort: wf6.effort,
    cost: wf6.cost,
  },
  {
    id: "WF10",
    bucket: "Big Bet",
    rice: { reach: 20, impact: 2.5, confidencePct: 40, effort: 1.2 },
    impactLabel: "Massive",
    phaseOriginal: "BACKLOG",
    phaseRevised: "BACKLOG",
    effort: { daysMin: 0, daysMax: 0, weeks: "", daysLabel: "" },
    cost: { min: 0, max: 0 },
    excludeFromTotals: true,
    hideTimeline: true,
  },
];

export function mergeWorkflowSources(
  texts: Record<string, WorkflowLocaleText>,
): WorkflowSource[] {
  return workflowBases.map((base) => {
    const text = texts[base.id];
    if (!text) {
      throw new Error(`Missing workflow locale text for ${base.id}`);
    }
    return {
      ...base,
      ...text,
      implementationEstimate: base.implementationEstimate
        ? {
            label:
              text.implementationEstimate?.label ??
              "Implementation (indicative, after discovery)",
            effort: base.implementationEstimate.effort,
            cost: base.implementationEstimate.cost,
            investmentLabel: text.implementationEstimate?.investmentLabel,
          }
        : undefined,
    };
  });
}
