import type { WorkflowSource } from "@foundation/types";

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
  | "expectedValue"
  | "investmentNote"
> & {
  implementationEstimate?: { label: string; investmentLabel?: string };
  hideTimeline?: boolean;
};

export const workflowBases: readonly WorkflowBase[] = [
  {
    id: "01",
    bucket: "Quick Win",
    rice: { reach: 300, impact: 2, confidencePct: 90, effort: 1 },
    impactLabel: "High",
    phaseOriginal: "NOW",
    phaseRevised: "NOW",
    effort: { daysMin: 5, daysMax: 7, weeks: "1–1½", daysLabel: "5–7 dagen" },
    cost: { min: 4500, max: 6500 },
    domainLabels: ["Operations"],
  },
  {
    id: "02",
    bucket: "Quick Win",
    rice: { reach: 400, impact: 4, confidencePct: 80, effort: 3 },
    impactLabel: "Massive",
    phaseOriginal: "NOW",
    phaseRevised: "NOW",
    effort: { daysMin: 6, daysMax: 8, weeks: "1½–2", daysLabel: "6–8 dagen" },
    cost: { min: 5500, max: 7500 },
    domainLabels: ["Marketing"],
  },
  {
    id: "03",
    bucket: "Quick Win",
    rice: { reach: 400, impact: 4, confidencePct: 80, effort: 3 },
    impactLabel: "Massive",
    phaseOriginal: "NOW",
    phaseRevised: "NOW",
    effort: { daysMin: 7, daysMax: 9, weeks: "1½–2", daysLabel: "7–9 dagen" },
    cost: { min: 6500, max: 8500 },
    domainLabels: ["Marketing"],
  },
  {
    id: "04",
    bucket: "Incremental",
    rice: { reach: 300, impact: 3, confidencePct: 70, effort: 4 },
    impactLabel: "High",
    phaseOriginal: "NEAR",
    phaseRevised: "NEAR",
    effort: { daysMin: 12, daysMax: 15, weeks: "2½–3", daysLabel: "12–15 dagen" },
    cost: { min: 11500, max: 14500 },
    domainLabels: ["Marketing"],
  },
  {
    id: "05",
    bucket: "Incremental",
    rice: { reach: 300, impact: 4, confidencePct: 90, effort: 3 },
    impactLabel: "Massive",
    phaseOriginal: "NOW",
    phaseRevised: "NOW",
    effort: { daysMin: 6, daysMax: 8, weeks: "1½–2", daysLabel: "6–8 dagen" },
    cost: { min: 6000, max: 8000 },
    domainLabels: ["Marketing"],
  },
  {
    id: "06",
    bucket: "Incremental",
    rice: { reach: 400, impact: 4, confidencePct: 80, effort: 4 },
    impactLabel: "Massive",
    phaseOriginal: "NEXT",
    phaseRevised: "NEXT",
    effort: { daysMin: 15, daysMax: 19, weeks: "3–4", daysLabel: "15–19 dagen" },
    cost: { min: 14000, max: 18500 },
    domainLabels: ["Marketing"],
  },
  {
    id: "07",
    bucket: "Incremental",
    rice: { reach: 400, impact: 3, confidencePct: 90, effort: 3 },
    impactLabel: "High",
    phaseOriginal: "NEAR",
    phaseRevised: "NEAR",
    effort: { daysMin: 10, daysMax: 13, weeks: "2–2½", daysLabel: "10–13 dagen" },
    cost: { min: 9500, max: 12500 },
    domainLabels: ["Sales"],
  },
  {
    id: "08",
    bucket: "Quick Win",
    rice: { reach: 200, impact: 3, confidencePct: 90, effort: 1 },
    impactLabel: "High",
    phaseOriginal: "NOW",
    phaseRevised: "NOW",
    effort: { daysMin: 3, daysMax: 4, weeks: "1", daysLabel: "3–4 dagen" },
    cost: { min: 3500, max: 3500 },
    excludeFromTotals: true,
    domainLabels: ["Marketing"],
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
              "Implementatie (indicatief, na discovery)",
            effort: base.implementationEstimate.effort,
            cost: base.implementationEstimate.cost,
            investmentLabel: text.implementationEstimate?.investmentLabel,
          }
        : undefined,
    };
  });
}
