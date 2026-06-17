"use client";

import { useMemo } from "react";
import { useProposal } from "@/components/ProposalProvider";
import {
  defaultProposalUi,
  defaultShowingWorkflowsTemplate,
  formatShowingWorkflows,
} from "@/lib/proposals/ui-defaults";
import type { ProposalUiCopy } from "@/lib/proposals/types";

export function useProposalUi(): ProposalUiCopy {
  const { slideCopy } = useProposal();

  return useMemo(() => {
    const ui = slideCopy?.ui;
    if (!ui) return defaultProposalUi;

    const { showingWorkflowsTemplate, ...rest } = ui;
    const template =
      showingWorkflowsTemplate ?? defaultShowingWorkflowsTemplate;

    return {
      ...defaultProposalUi,
      ...rest,
      showingWorkflows: (filtered: number, total: number) =>
        formatShowingWorkflows(template, filtered, total),
      phaseFilters: { ...defaultProposalUi.phaseFilters, ...ui.phaseFilters },
      phaseLabels: { ...defaultProposalUi.phaseLabels, ...ui.phaseLabels },
      bucketLabels: { ...defaultProposalUi.bucketLabels, ...ui.bucketLabels },
      impactLabels: { ...defaultProposalUi.impactLabels, ...ui.impactLabels },
    };
  }, [slideCopy?.ui]);
}

export function labelFor(
  map: Record<string, string>,
  key: string,
  fallback = key,
): string {
  return map[key] ?? fallback;
}
