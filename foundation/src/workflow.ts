import { formatInvestmentByStyle, sumRanges } from "./cost";
import { computeRiceFromInput, roundRice } from "./rice";
import type {
  Bucket,
  ImpactLevel,
  ImplementationEstimate,
  InvestmentFormat,
  Phase,
  WorkflowRelation,
  WorkflowSource,
} from "./types";

/** Deck-ready workflow epic — sub-component with its own ballpark */
export type BuiltWorkflowEpic = {
  id: string;
  title: string;
  summary: string;
  deliverables: string[];
  investment: string;
};

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
  investmentNote?: string;
  summary: string;
  why: string;
  benefits: string[];
  prerequisites?: WorkflowRelation[];
  unlocks?: WorkflowRelation[];
  timeSaved: string;
  expectedValue?: string;
  deliverables: string[];
  domainLabels?: readonly string[];
  implementationEstimate?: {
    label: string;
    weeks: string;
    effortDays: string;
    investment: string;
  };
  platformId?: string;
  hideTimeline?: boolean;
  epics?: BuiltWorkflowEpic[];
  epicsSectionTitle?: string;
  epicsStandaloneInvest?: string;
  epicsCombinedNote?: string;
  cardVariant?: "highlight";
  excludeFromTotals?: boolean;
  excludeFromPrio?: boolean;
};

function mapImplementationEstimate(
  estimate: ImplementationEstimate,
  investmentFormat: InvestmentFormat,
): BuiltWorkflow["implementationEstimate"] {
  return {
    label: estimate.label,
    weeks: estimate.effort.weeks,
    effortDays: estimate.effort.daysLabel,
    investment:
      estimate.investmentLabel ??
      formatInvestmentByStyle(estimate.cost, investmentFormat),
  };
}

export function buildWorkflow(
  source: WorkflowSource,
  investmentFormat: InvestmentFormat = "compact",
): BuiltWorkflow {
  const riceReported = roundRice(computeRiceFromInput(source.rice));
  const epicCosts = source.epics?.map((epic) => epic.cost) ?? [];
  const epicsStandalone =
    epicCosts.length > 0 ? sumRanges(epicCosts) : undefined;

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
    investment:
      source.investmentLabel ??
      formatInvestmentByStyle(source.cost, investmentFormat),
    investmentNote: source.investmentNote,
    summary: source.summary,
    why: source.why,
    benefits: source.benefits,
    prerequisites: source.prerequisites,
    unlocks: source.unlocks,
    timeSaved: source.timeSaved,
    expectedValue: source.expectedValue,
    deliverables: source.deliverables,
    domainLabels: source.domainLabels,
    implementationEstimate: source.implementationEstimate
      ? mapImplementationEstimate(
          source.implementationEstimate,
          investmentFormat,
        )
      : undefined,
    platformId: source.platformId,
    hideTimeline: source.hideTimeline,
    cardVariant: source.cardVariant,
    excludeFromTotals: source.excludeFromTotals,
    excludeFromPrio: source.excludeFromPrio,
    epics: source.epics?.map((epic) => ({
      id: epic.id,
      title: epic.title,
      summary: epic.summary,
      deliverables: [...epic.deliverables],
      investment: formatInvestmentByStyle(epic.cost, investmentFormat),
    })),
    epicsSectionTitle: source.epicsSectionTitle,
    epicsStandaloneInvest: epicsStandalone
      ? formatInvestmentByStyle(epicsStandalone, investmentFormat)
      : undefined,
    epicsCombinedNote: source.epicsCombinedNote,
  };
}

export function buildWorkflows(
  sources: WorkflowSource[],
  investmentFormat: InvestmentFormat = "compact",
): BuiltWorkflow[] {
  return sources.map((source) => buildWorkflow(source, investmentFormat));
}
