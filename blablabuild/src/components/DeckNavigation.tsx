"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

type DeckNavigationContextValue = {
  workflowDetailId: string | null;
  openWorkflow: (id: string) => void;
  closeWorkflow: () => void;
};

const DeckNavigationContext = createContext<DeckNavigationContextValue | null>(
  null,
);

export function DeckNavigationProvider({ children }: { children: ReactNode }) {
  const [workflowDetailId, setWorkflowDetailId] = useState<string | null>(
    null,
  );

  const openWorkflow = useCallback((id: string) => {
    setWorkflowDetailId(id);
  }, []);

  const closeWorkflow = useCallback(() => {
    setWorkflowDetailId(null);
  }, []);

  return (
    <DeckNavigationContext.Provider
      value={{ workflowDetailId, openWorkflow, closeWorkflow }}
    >
      {children}
    </DeckNavigationContext.Provider>
  );
}

export function useDeckNavigation() {
  const ctx = useContext(DeckNavigationContext);
  if (!ctx) {
    throw new Error("useDeckNavigation must be used within DeckNavigationProvider");
  }
  return ctx;
}
