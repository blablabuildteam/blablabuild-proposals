import type { ProposalUiCopy } from "./types";

export function formatShowingWorkflows(
  template: string,
  filtered: number,
  total: number,
): string {
  return template
    .replaceAll("{filtered}", String(filtered))
    .replaceAll("{total}", String(total));
}

export const defaultShowingWorkflowsTemplate =
  "Showing {filtered} of {total} workflows";

export const defaultProposalUi: ProposalUiCopy = {
  proposalFor: "Proposal for",
  weekPrefix: "Week",
  outcomes: "Outcomes",
  why: "Why",
  timeBack: "Time back",
  openUseCase: "Open use case →",
  useCase: "Use case →",
  backToOverview: "Back to overview",
  whyThisMatters: "Why this matters",
  whatYouGet: "What you get",
  whatWeDeliver: "What we deliver",
  expectedValue: "Expected value",
  prerequisites: "Prerequisites",
  unlocks: "Unlocks",
  interconnectivity: "Interconnectivity",
  interconnectivityHint:
    "These projects share data or build on each other's outputs.",
  feedsFrom: "Receives from",
  feedsInto: "Contributes to",
  impactSuffix: "impact",
  exit: "Exit",
  previous: "Previous",
  next: "Next",
  useCaseFallback: "Use case",
  tableRank: "#",
  tableId: "ID",
  tableInitiative: "Initiative",
  tablePhaseInvest: "Phase, investment",
  tableRice: "RICE",
  fullRiceRanking: "Full RICE ranking",
  phaseOneBadge: "P1",
  showingWorkflows: (filtered, total) =>
    formatShowingWorkflows(defaultShowingWorkflowsTemplate, filtered, total),
  filterByPhase: "Filter by phase",
  phaseFilters: {
    ALL: "ALL",
    NOW: "NOW",
    NEXT: "NEXT",
    NEAR: "NEAR",
    PARALLEL: "PARALLEL",
    BACKLOG: "BACKLOG",
  },
  phaseLabels: {
    NOW: "NOW",
    NEXT: "NEXT",
    NEAR: "NEAR",
    PARALLEL: "PARALLEL",
    BACKLOG: "BACKLOG",
  },
  bucketLabels: {
    "Quick Win": "Quick Win",
    Incremental: "Incremental",
    "Big Bet": "Big Bet",
  },
  impactLabels: {
    Massive: "Massive",
    High: "High",
    Medium: "Medium",
    Low: "Low",
  },
  domainLabels: {},
};
