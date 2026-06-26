"use client";

import { LOCALE_LABELS, type ProposalLocale } from "@/lib/proposals/locale";

type Props = {
  locale: ProposalLocale;
  onChange: (locale: ProposalLocale) => void;
  variant?: "light" | "on-dark";
};

export function LanguageToggle({ locale, onChange, variant = "light" }: Props) {
  const isOnDark = variant === "on-dark";

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex rounded-full p-0.5 text-[10px] font-semibold sm:text-xs ${
        isOnDark ? "bg-white/15" : "bg-[var(--brand-bg)]"
      }`}
    >
      {(["en", "nl"] as const).map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => onChange(code)}
            aria-pressed={active}
            className={`min-w-[2.25rem] rounded-full px-2 py-1 transition-colors ${
              active
                ? isOnDark
                  ? "bg-white text-[var(--brand-primary)]"
                  : "bg-[var(--brand-fg)] text-white"
                : isOnDark
                  ? "text-white/70 hover:text-white"
                  : "text-[var(--brand-muted)] hover:text-[var(--brand-fg)]"
            }`}
          >
            {LOCALE_LABELS[code]}
          </button>
        );
      })}
    </div>
  );
}
