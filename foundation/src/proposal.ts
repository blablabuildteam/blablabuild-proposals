import {
  formatInvestment,
  sumPhaseCosts,
  sumWorkflowCosts,
  widenEurRange,
} from "./cost";
import { buildPlatformBundles, type BuiltPlatformBundle } from "./platform";
import { sortByRice } from "./rice";
import { buildWorkflows, type BuiltWorkflow } from "./workflow";
import type {
  CostScopeBuffer,
  PackageSource,
  PhaseSource,
  PlatformBundleSource,
  ProposalContentConfig,
  WorkflowSource,
} from "./types";

function applyCostScopeBuffer(
  sources: readonly WorkflowSource[],
  buffer?: CostScopeBuffer,
): WorkflowSource[] {
  if (!buffer) return [...sources];
  return sources.map((source) => ({
    ...source,
    cost: widenEurRange(source.cost, buffer),
    implementationEstimate: source.implementationEstimate
      ? {
          ...source.implementationEstimate,
          cost: widenEurRange(source.implementationEstimate.cost, buffer),
        }
      : undefined,
  }));
}

function applyPlatformScopeBuffer(
  sources: readonly PlatformBundleSource[] | undefined,
  buffer?: CostScopeBuffer,
): readonly PlatformBundleSource[] | undefined {
  if (!sources || !buffer) return sources;
  return sources.map((bundle) => ({
    ...bundle,
    foundation: {
      ...bundle.foundation,
      cost: widenEurRange(bundle.foundation.cost, buffer),
    },
    layers: bundle.layers.map((layer) => ({
      ...layer,
      cost: widenEurRange(layer.cost, buffer),
    })),
  }));
}

function phaseInvestLabel(
  phase: PhaseSource,
  workflowSources: WorkflowSource[],
  cost: ReturnType<typeof sumPhaseCosts>["cost"],
): string {
  const phaseWorkflows = phase.workflows
    .map((id) => workflowSources.find((w) => w.id === id))
    .filter((w): w is WorkflowSource => w !== undefined);
  const priced = phaseWorkflows.filter((w) => !w.excludeFromTotals);
  if (priced.length === 0 && phaseWorkflows.length > 0) {
    return phaseWorkflows[0].investmentLabel ?? "Nader te bepalen";
  }
  if (cost.min === 0 && cost.max === 0 && phaseWorkflows.length > 0) {
    return phaseWorkflows[0].investmentLabel ?? "Nader te bepalen";
  }
  return formatInvestment(cost);
}

export type BuiltPhase = PhaseSource & {
  invest: string;
  /** Standalone phase total before platform bundle discount */
  investStandalone?: string;
};

export type BuiltPackage = Omit<PackageSource, "workflowIds"> & {
  invest: string;
};

export type ProposalContent = {
  workflows: BuiltWorkflow[];
  riceSorted: BuiltWorkflow[];
  phases: BuiltPhase[];
  packages: BuiltPackage[];
  platformBundles: BuiltPlatformBundle[];
  AI_BUILD_NOTE: string;
};

export function buildPhases(
  phases: readonly PhaseSource[],
  workflowSources: WorkflowSource[],
  platformBundleSources?: readonly PlatformBundleSource[],
): BuiltPhase[] {
  return phases.map((phase) => {
    const { cost, standalone } = sumPhaseCosts(
      phase.workflows,
      workflowSources,
      platformBundleSources,
    );
    return {
      ...phase,
      invest: phaseInvestLabel(phase, workflowSources, cost),
      investStandalone: standalone
        ? formatInvestment(standalone)
        : undefined,
    };
  });
}

export function buildPackages(
  packages: readonly PackageSource[],
  workflowSources: WorkflowSource[],
): BuiltPackage[] {
  return packages.map(({ workflowIds, ...pkg }) => ({
    ...pkg,
    invest: formatInvestment(
      sumWorkflowCosts(workflowIds, workflowSources),
    ),
  }));
}

export function buildProposalContent(
  workflowSources: WorkflowSource[],
  phases: readonly PhaseSource[],
  packages: readonly PackageSource[],
  config: ProposalContentConfig,
  platformBundleSources?: readonly PlatformBundleSource[],
): ProposalContent {
  const scopedWorkflows = applyCostScopeBuffer(
    workflowSources,
    config.costScopeBuffer,
  );
  const scopedPlatforms = applyPlatformScopeBuffer(
    platformBundleSources,
    config.costScopeBuffer,
  );
  const workflows = buildWorkflows(scopedWorkflows);
  const riceSorted = sortByRice(workflows);
  const platformBundles = scopedPlatforms
    ? buildPlatformBundles(scopedPlatforms, scopedWorkflows)
    : [];

  return {
    workflows,
    riceSorted,
    phases: buildPhases(phases, scopedWorkflows, scopedPlatforms),
    packages: buildPackages(packages, scopedWorkflows),
    platformBundles,
    AI_BUILD_NOTE: config.aiBuildNote,
  };
}
