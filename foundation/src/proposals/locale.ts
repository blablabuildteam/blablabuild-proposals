export const PROPOSAL_LOCALES = ["en", "nl"] as const;
export type ProposalLocale = (typeof PROPOSAL_LOCALES)[number];

export const DEFAULT_PROPOSAL_LOCALE: ProposalLocale = "nl";

export const LOCALE_STORAGE_KEY = "proposal-locale";

export const LOCALE_LABELS: Record<ProposalLocale, string> = {
  en: "EN",
  nl: "NL",
};

export function isProposalLocale(value: string): value is ProposalLocale {
  return (PROPOSAL_LOCALES as readonly string[]).includes(value);
}

export function resolveProposalLocale(
  value: string | null | undefined,
): ProposalLocale {
  if (value && isProposalLocale(value)) return value;
  return DEFAULT_PROPOSAL_LOCALE;
}
