import type {
  CostScopeBuffer,
  EurRange,
  EffortEstimate,
  InvestmentFormat,
  RateCard,
  WorkflowSource,
} from "./types";

const EUR = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

/** Format €6000 → "€6k", €12500 → "€13k" (rounded to nearest k) */
export function formatEurK(amount: number): string {
  const k = Math.round(amount / 1000);
  return `€${k}k`;
}

export function formatEurRange(range: EurRange): string {
  return `${formatEurK(range.min)}–${formatEurK(range.max)}`;
}

/** Investment string for proposals: "€14–21k" */
export function formatInvestment(range: EurRange): string {
  const minK = Math.round(range.min / 1000);
  const maxK = Math.round(range.max / 1000);
  if (minK === maxK) return `€${minK}k`;
  return `€${minK}–${maxK}k`;
}

/** Full ballpark from brief: "€4.500 - €6.500" */
export function formatBallpark(range: EurRange): string {
  const format = (amount: number) => EUR.format(amount).replace(/\s/g, "");
  if (range.min === range.max) return format(range.min);
  return `${format(range.min)} - ${format(range.max)}`;
}

export function formatInvestmentByStyle(
  range: EurRange,
  style: InvestmentFormat = "compact",
): string {
  return style === "ballpark" ? formatBallpark(range) : formatInvestment(range);
}

/** ± band around midpoint cost (avoids min-days×min-rate vs max-days×max-rate blowout) */
const COST_MID_BAND = 0.06;

function roundEur(amount: number): number {
  return Math.round(amount / 500) * 500;
}

/** Widen a cost range for pre-scope proposals (lower min, higher max) */
export function widenEurRange(
  range: EurRange,
  buffer: CostScopeBuffer,
): EurRange {
  let min = roundEur(range.min * (1 - buffer.lowerPct));
  let max = roundEur(range.max * (1 + buffer.upperPct));
  min = Math.max(500, min);
  if (max <= min) max = min + 500;
  return { min, max };
}

/** Estimate cost from day range × rate card (tight band around midpoint) */
export function estimateCostFromDays(
  daysMin: number,
  daysMax: number,
  rateCard: RateCard,
): EurRange {
  const daysMid = (daysMin + daysMax) / 2;
  const rateMid = (rateCard.dayRateMin + rateCard.dayRateMax) / 2;
  const mid = daysMid * rateMid;
  let min = roundEur(mid * (1 - COST_MID_BAND));
  let max = roundEur(mid * (1 + COST_MID_BAND));
  min = Math.max(500, min);
  if (max <= min) max = min + 500;
  return { min, max };
}

export type AiEstimateOptions = {
  /** Override rate-card multiplier (e.g. 10 for trivial infra, 2.5 for discovery) */
  speedMultiplier?: number;
  spread?: number;
  daysLabelSuffix?: string;
};

function resolveSpeedMultiplier(
  rateCard: RateCard,
  override?: number,
): number {
  const multiplier = override ?? rateCard.aiSpeedMultiplier ?? 1;
  return Math.max(1, multiplier);
}

/** Traditional person-months → billable days with AI-assisted speed multiplier */
export function estimateAiAssistedDays(
  effortMonths: number,
  rateCard: RateCard,
  options: AiEstimateOptions = {},
): { daysMin: number; daysMax: number } {
  const spread = options.spread ?? 0.1;
  const multiplier = resolveSpeedMultiplier(rateCard, options.speedMultiplier);
  const base = (effortMonths * rateCard.daysPerEffortMonth) / multiplier;
  return {
    daysMin: Math.max(1, Math.round(base * (1 - spread))),
    daysMax: Math.max(1, Math.round(base * (1 + spread))),
  };
}

/** Rough calendar weeks from billable days (5-day week) */
export function estimateWeeksLabel(daysMin: number, daysMax: number): string {
  const weekMin = Math.max(1, Math.round(daysMin / 5));
  const weekMax = Math.max(weekMin, Math.round(daysMax / 5));
  return weekMin === weekMax ? `${weekMin}` : `${weekMin}–${weekMax}`;
}

export function buildAiWorkflowEstimate(
  effortMonths: number,
  rateCard: RateCard,
  options: AiEstimateOptions = {},
): { effort: EffortEstimate; cost: EurRange } {
  const { daysMin, daysMax } = estimateAiAssistedDays(
    effortMonths,
    rateCard,
    options,
  );
  const suffix = options.daysLabelSuffix ?? " dagen";
  return {
    effort: {
      daysMin,
      daysMax,
      weeks: estimateWeeksLabel(daysMin, daysMax),
      daysLabel: `${daysMin}–${daysMax}${suffix}`,
    },
    cost: estimateCostFromDays(daysMin, daysMax, rateCard),
  };
}

/** Estimate days from RICE effort — uses AI multiplier when set on rate card */
export function estimateDaysFromEffort(
  effortMonths: number,
  rateCard: RateCard,
  spread = 0.1,
): { daysMin: number; daysMax: number } {
  return estimateAiAssistedDays(effortMonths, rateCard, { spread });
}

export function formatDaysLabel(daysMin: number, daysMax: number): string {
  return `${daysMin}–${daysMax} days`;
}

export function sumRanges(ranges: EurRange[]): EurRange {
  return ranges.reduce(
    (acc, r) => ({
      min: acc.min + r.min,
      max: acc.max + r.max,
    }),
    { min: 0, max: 0 },
  );
}

export function sumWorkflowCosts(
  workflowIds: readonly string[],
  workflows: WorkflowSource[],
): EurRange {
  const byId = new Map(workflows.map((w) => [w.id, w]));
  const ranges = workflowIds
    .map((id) => byId.get(id))
    .filter((w): w is WorkflowSource => w !== undefined && !w.excludeFromTotals)
    .map((w) => w.cost);
  return sumRanges(ranges);
}

/** Combined platform cost (foundation + layers) */
export function platformBundleCombinedCost(bundle: {
  foundation: { cost: EurRange };
  layers: readonly { cost: EurRange }[];
}): EurRange {
  return sumRanges([
    bundle.foundation.cost,
    ...bundle.layers.map((layer) => layer.cost),
  ]);
}

export type PhaseCostResult = {
  cost: EurRange;
  /** Sum if every workflow were built standalone (when a bundle discount applies) */
  standalone?: EurRange;
};

/**
 * Phase total with platform-bundle pricing: bundled workflows count once at combined rate.
 */
export function sumPhaseCosts(
  phaseWorkflowIds: readonly string[],
  workflowSources: WorkflowSource[],
  platformBundles?: readonly {
    workflowIds: readonly string[];
    foundation: { cost: EurRange };
    layers: readonly { cost: EurRange }[];
  }[],
): PhaseCostResult {
  const phaseSet = new Set(phaseWorkflowIds);
  const bundledIds = new Set<string>();
  const appliedBundles =
    platformBundles?.filter((bundle) =>
      bundle.workflowIds.every((id) => phaseSet.has(id)),
    ) ?? [];

  for (const bundle of appliedBundles) {
    for (const id of bundle.workflowIds) bundledIds.add(id);
  }

  const unbundledIds = phaseWorkflowIds.filter((id) => !bundledIds.has(id));
  const ranges: EurRange[] = [
    ...unbundledIds
      .map((id) => workflowSources.find((w) => w.id === id))
      .filter((w): w is WorkflowSource => w !== undefined && !w.excludeFromTotals)
      .map((w) => w.cost),
    ...appliedBundles.map((bundle) => platformBundleCombinedCost(bundle)),
  ];

  const cost = sumRanges(ranges);
  if (appliedBundles.length === 0) return { cost };

  return {
    cost,
    standalone: sumWorkflowCosts(phaseWorkflowIds, workflowSources),
  };
}

/** Check hand-tuned cost is within ~15% of day-rate estimate */
export function costWithinEstimate(
  cost: EurRange,
  estimate: EurRange,
  tolerancePct = 0.15,
): boolean {
  const midCost = (cost.min + cost.max) / 2;
  const midEst = (estimate.min + estimate.max) / 2;
  if (midEst === 0) return true;
  return Math.abs(midCost - midEst) / midEst <= tolerancePct;
}
