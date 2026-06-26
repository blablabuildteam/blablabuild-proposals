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

const wf1 = est(1.2, 5);
const wf2 = est(2, 4);
const wf3 = est(1.8, 5);
const wf4 = est(1.5, 5);
const wf5 = est(2, 4);
const wf6 = est(3);
const wf7 = est(3.5);
const wf8 = est(4);
const wf9 = est(2);
const wf2OnEip = est(1.6, 5);
const wf3OnEip = est(1.4, 5);

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
    id: "WF1",
    bucket: "Quick Win",
    rice: { reach: 25, impact: 2.5, confidencePct: 85, effort: 1.2 },
    impactLabel: "High",
    phaseOriginal: "NOW",
    phaseRevised: "NOW",
    effort: wf1.effort,
    cost: wf1.cost,
  },
  {
    id: "WF2",
    bucket: "Quick Win",
    rice: { reach: 30, impact: 2.5, confidencePct: 80, effort: 2 },
    impactLabel: "High",
    phaseOriginal: "NOW",
    phaseRevised: "NOW",
    platformId: "eip",
    effort: wf2.effort,
    cost: wf2.cost,
  },
  {
    id: "WF3",
    bucket: "Quick Win",
    rice: { reach: 35, impact: 2.5, confidencePct: 85, effort: 1.8 },
    impactLabel: "High",
    phaseOriginal: "NOW",
    phaseRevised: "NOW",
    platformId: "eip",
    effort: wf3.effort,
    cost: wf3.cost,
  },
  {
    id: "WF4",
    bucket: "Quick Win",
    rice: { reach: 20, impact: 2, confidencePct: 90, effort: 1.5 },
    impactLabel: "High",
    phaseOriginal: "NOW",
    phaseRevised: "NOW",
    effort: wf4.effort,
    cost: wf4.cost,
  },
  {
    id: "WF5",
    bucket: "Quick Win",
    rice: { reach: 25, impact: 2, confidencePct: 75, effort: 2 },
    impactLabel: "High",
    phaseOriginal: "NEXT",
    phaseRevised: "NEXT",
    effort: wf5.effort,
    cost: wf5.cost,
  },
  {
    id: "WF6",
    bucket: "Incremental",
    rice: { reach: 30, impact: 3, confidencePct: 70, effort: 3 },
    impactLabel: "Massive",
    phaseOriginal: "NEXT",
    phaseRevised: "NEXT",
    effort: wf6.effort,
    cost: wf6.cost,
  },
  {
    id: "WF7",
    bucket: "Incremental",
    rice: { reach: 20, impact: 2.5, confidencePct: 65, effort: 3.5 },
    impactLabel: "High",
    phaseOriginal: "NEXT",
    phaseRevised: "NEXT",
    effort: wf7.effort,
    cost: wf7.cost,
  },
  {
    id: "WF9",
    bucket: "Incremental",
    rice: { reach: 15, impact: 2, confidencePct: 70, effort: 2 },
    impactLabel: "High",
    phaseOriginal: "NEXT",
    phaseRevised: "NEXT",
    effort: wf9.effort,
    cost: wf9.cost,
  },
  {
    id: "WF8",
    bucket: "Incremental",
    rice: { reach: 40, impact: 2.5, confidencePct: 60, effort: 4 },
    impactLabel: "High",
    phaseOriginal: "BACKLOG",
    phaseRevised: "BACKLOG",
    effort: wf8.effort,
    cost: wf8.cost,
  },
  {
    id: "WF10",
    bucket: "Big Bet",
    rice: { reach: 50, impact: 3, confidencePct: 40, effort: 1.2 },
    impactLabel: "Massive",
    phaseOriginal: "BACKLOG",
    phaseRevised: "BACKLOG",
    effort: { daysMin: 0, daysMax: 0, weeks: "", daysLabel: "" },
    cost: { min: 0, max: 0 },
    excludeFromTotals: true,
    hideTimeline: true,
  },
];

export const eipLayerEstimates = {
  wf2: wf2OnEip,
  wf3: wf3OnEip,
};

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
              "Implementatie (indicatief, na discovery)",
            effort: base.implementationEstimate.effort,
            cost: base.implementationEstimate.cost,
            investmentLabel: text.implementationEstimate?.investmentLabel,
          }
        : undefined,
    };
  });
}
