import { formatInvestment } from "./cost";
import { computeRiceFromInput, roundRice } from "./rice";
import type {
  Bucket,
  ImpactLevel,
  ImplementationEstimate,
  Phase,
  WorkflowRelation,
  WorkflowSource,
} from "./types";

/** Deck-ready workflow — flat shape for slide components */
export type BuiltWorkflow = {
  id: string;
  title: string;
  bucket: Bucket;
  reach: number;
  impact: number;
  impactLabel: ImpactLevel;
  confidencePct: number;
  effort: number;
  riceReported: number;
  phaseOriginal: Phase;
  phaseRevised: Phase;
  weeks: string;
  effortDays: string;
  investment: string;
  summary: string;
  why: string;
  benefits: string[];
  prerequisites?: WorkflowRelation[];
  unlocks?: WorkflowRelation[];
  timeSaved: string;
  deliverables: string[];
  implementationEstimate?: {
    label: string;
    weeks: string;
    effortDays: string;
    investment: string;
  };
  platformId?: string;
  hideTimeline?: boolean;
};

function mapImplementationEstimate(
  estimate: ImplementationEstimate,
): BuiltWorkflow["implementationEstimate"] {
  return {
    label: estimate.label,
    weeks: estimate.effort.weeks,
    effortDays: estimate.effort.daysLabel,
    investment:
      estimate.investmentLabel ?? formatInvestment(estimate.cost),
  };
}

export function buildWorkflow(source: WorkflowSource): BuiltWorkflow {
  const riceReported = roundRice(computeRiceFromInput(source.rice));

  return {
    id: source.id,
    title: source.title,
    bucket: source.bucket,
    reach: source.rice.reach,
    impact: source.rice.impact,
    impactLabel: source.impactLabel,
    confidencePct: source.rice.confidencePct,
    effort: source.rice.effort,
    riceReported,
    phaseOriginal: source.phaseOriginal,
    phaseRevised: source.phaseRevised,
    weeks: source.effort.weeks,
    effortDays: source.effort.daysLabel,
    investment: source.investmentLabel ?? formatInvestment(source.cost),
    summary: source.summary,
    why: source.why,
    benefits: source.benefits,
    prerequisites: source.prerequisites,
    unlocks: source.unlocks,
    timeSaved: source.timeSaved,
    deliverables: source.deliverables,
    implementationEstimate: source.implementationEstimate
      ? mapImplementationEstimate(source.implementationEstimate)
      : undefined,
    platformId: source.platformId,
    hideTimeline: source.hideTimeline,
  };
}

export function buildWorkflows(sources: WorkflowSource[]): BuiltWorkflow[] {
  return sources.map(buildWorkflow);
}
