"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import type {
  ProposalBundle,
  ProposalContextValue,
} from "@/lib/proposals/types";

const ProposalContext = createContext<ProposalContextValue | null>(null);

export function ProposalProvider({
  bundle,
  children,
}: {
  bundle: ProposalBundle;
  children: ReactNode;
}) {
  const value = useMemo<ProposalContextValue>(
    () => ({
      ...bundle,
      getWorkflow: (id: string) =>
        bundle.workflows.find((workflow) => workflow.id === id),
    }),
    [bundle],
  );

  return (
    <ProposalContext.Provider value={value}>{children}</ProposalContext.Provider>
  );
}

export function useProposal(): ProposalContextValue {
  const ctx = useContext(ProposalContext);
  if (!ctx) {
    throw new Error("useProposal must be used within ProposalProvider");
  }
  return ctx;
}
