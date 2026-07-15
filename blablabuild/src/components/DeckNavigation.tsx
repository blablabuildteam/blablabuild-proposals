"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";

type DeckNavigationContextValue = {
  workflowDetailId: string | null;
  openWorkflow: (id: string) => void;
  closeWorkflow: () => void;
  goToSlide: (i: number) => void;
  registerGoToSlide: (fn: (i: number) => void) => void;
};

const DeckNavigationContext = createContext<DeckNavigationContextValue | null>(
  null,
);

export function DeckNavigationProvider({ children }: { children: ReactNode }) {
  const [workflowDetailId, setWorkflowDetailId] = useState<string | null>(
    null,
  );
  const goToSlideRef = useRef<((i: number) => void) | null>(null);

  const openWorkflow = useCallback((id: string) => {
    setWorkflowDetailId(id);
  }, []);

  const closeWorkflow = useCallback(() => {
    setWorkflowDetailId(null);
  }, []);

  const goToSlide = useCallback((i: number) => {
    goToSlideRef.current?.(i);
  }, []);

  const registerGoToSlide = useCallback((fn: (i: number) => void) => {
    goToSlideRef.current = fn;
  }, []);

  return (
    <DeckNavigationContext.Provider
      value={{ workflowDetailId, openWorkflow, closeWorkflow, goToSlide, registerGoToSlide }}
    >
      {children}
    </DeckNavigationContext.Provider>
  );
}

const NOOP_NAV: DeckNavigationContextValue = {
  workflowDetailId: null,
  openWorkflow: () => {},
  closeWorkflow: () => {},
  goToSlide: () => {},
  registerGoToSlide: () => {},
};

export function useDeckNavigation() {
  return useContext(DeckNavigationContext) ?? NOOP_NAV;
}
