import { formatInvestment, sumRanges } from "./cost";
import { platformBundleCombinedCost } from "./cost";
import type { EurRange, PlatformBundleSource, WorkflowSource } from "./types";

export type BuiltPlatformLayer = {
  workflowId: string;
  label: string;
  effortDays: string;
  investment: string;
};

export type BuiltPlatformBundle = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  workflowIds: readonly string[];
  foundation: { effortDays: string; investment: string };
  layers: BuiltPlatformLayer[];
  standaloneInvest: string;
  combinedInvest: string;
  combinedCost: EurRange;
  savingsInvest: string;
  deliverables: readonly string[];
};

function savingsRange(standalone: EurRange, combined: EurRange): EurRange {
  return {
    min: Math.max(0, standalone.min - combined.max),
    max: Math.max(0, standalone.max - combined.min),
  };
}

export function buildPlatformBundles(
  sources: readonly PlatformBundleSource[],
  workflowSources: WorkflowSource[],
): BuiltPlatformBundle[] {
  const byId = new Map(workflowSources.map((w) => [w.id, w]));

  return sources.map((source) => {
    const standalone = sumRanges(
      source.workflowIds
        .map((id) => byId.get(id)?.cost)
        .filter((c): c is EurRange => c !== undefined),
    );
    const combined = platformBundleCombinedCost(source);
    const savings = savingsRange(standalone, combined);

    return {
      id: source.id,
      name: source.name,
      tagline: source.tagline,
      description: source.description,
      workflowIds: source.workflowIds,
      foundation: {
        effortDays: source.foundation.effort.daysLabel,
        investment: formatInvestment(source.foundation.cost),
      },
      layers: source.layers.map((layer) => ({
        workflowId: layer.workflowId,
        label: layer.label,
        effortDays: layer.effort.daysLabel,
        investment: formatInvestment(layer.cost),
      })),
      standaloneInvest: formatInvestment(standalone),
      combinedInvest: formatInvestment(combined),
      combinedCost: combined,
      savingsInvest: formatInvestment(savings),
      deliverables: source.deliverables,
    };
  });
}
