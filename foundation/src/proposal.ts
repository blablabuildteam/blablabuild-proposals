import { formatInvestment, sumWorkflowCosts } from "./cost";
import { sortByRice } from "./rice";
import { buildWorkflows, type BuiltWorkflow } from "./workflow";
import type {
  PackageSource,
  PhaseSource,
  ProposalContentConfig,
  WorkflowSource,
} from "./types";

export type BuiltPhase = PhaseSource & {
  invest: string;
};

export type BuiltPackage = Omit<PackageSource, "workflowIds"> & {
  invest: string;
};

export type ProposalContent = {
  workflows: BuiltWorkflow[];
  riceSorted: BuiltWorkflow[];
  phases: BuiltPhase[];
  packages: BuiltPackage[];
  AI_BUILD_NOTE: string;
};

export function buildPhases(
  phases: readonly PhaseSource[],
  workflowSources: WorkflowSource[],
): BuiltPhase[] {
  return phases.map((phase) => ({
    ...phase,
    invest: formatInvestment(
      sumWorkflowCosts(phase.workflows, workflowSources),
    ),
  }));
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
): ProposalContent {
  const workflows = buildWorkflows(workflowSources);
  const riceSorted = sortByRice(workflows);

  return {
    workflows,
    riceSorted,
    phases: buildPhases(phases, workflowSources),
    packages: buildPackages(packages, workflowSources),
    AI_BUILD_NOTE: config.aiBuildNote,
  };
}
