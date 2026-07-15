"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_PROPOSAL_LOCALE,
  LOCALE_STORAGE_KEY,
  resolveProposalLocale,
  type ProposalLocale,
} from "@/lib/proposals/locale";
import type {
  ProposalBundle,
  ProposalContextValue,
} from "@/lib/proposals/types";

type LocaleContextValue = {
  locale: ProposalLocale;
  setLocale: (locale: ProposalLocale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);
const ProposalContext = createContext<ProposalContextValue | null>(null);

export function ProposalProvider({
  bundles,
  initialLocale,
  children,
}: {
  bundles: Record<ProposalLocale, ProposalBundle>;
  initialLocale?: ProposalLocale;
  children: ReactNode;
}) {
  const [locale, setLocaleState] = useState<ProposalLocale>(
    initialLocale ?? DEFAULT_PROPOSAL_LOCALE,
  );

  useEffect(() => {
    const raw = localStorage.getItem(LOCALE_STORAGE_KEY);
    const resolved = raw
      ? resolveProposalLocale(raw)
      : (initialLocale ?? DEFAULT_PROPOSAL_LOCALE);
    setLocaleState(resolved);
  }, [initialLocale]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: ProposalLocale) => {
    setLocaleState(next);
    localStorage.setItem(LOCALE_STORAGE_KEY, next);
  }, []);

  const bundle = bundles[locale];

  const proposalValue = useMemo<ProposalContextValue>(
    () => ({
      ...bundle,
      getWorkflow: (id: string) =>
        bundle.workflows.find((workflow) => workflow.id === id),
    }),
    [bundle],
  );

  const localeValue = useMemo(
    () => ({ locale, setLocale }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={localeValue}>
      <ProposalContext.Provider value={proposalValue}>
        {children}
      </ProposalContext.Provider>
    </LocaleContext.Provider>
  );
}

export function useProposal(): ProposalContextValue {
  const ctx = useContext(ProposalContext);
  if (!ctx) {
    throw new Error("useProposal must be used within ProposalProvider");
  }
  return ctx;
}

export function useProposalLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useProposalLocale must be used within ProposalProvider");
  }
  return ctx;
}
