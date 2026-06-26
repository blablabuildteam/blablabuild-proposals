"use client";

import type { PlatformBundle } from "@/lib/types";

export function PlatformBundleCard({
  bundle,
  copy,
  variant = "banner",
}: {
  bundle: PlatformBundle;
  copy: {
    title: string;
    standaloneLabel?: string;
    combinedLabel?: string;
    savingsLabel?: string;
    note?: string;
  };
  variant?: "banner" | "inline";
}) {
  const workflowLine = bundle.workflowIds.join(" + ");

  if (variant === "inline") {
    return (
      <div className="flex flex-col gap-2 rounded-lg border border-[var(--brand-primary)]/20 bg-[var(--brand-primary)]/5 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase text-[var(--brand-primary)]">
            {copy.title}
          </p>
          <p className="mt-0.5 text-sm font-semibold text-[var(--brand-fg)]">
            {bundle.name} · {workflowLine}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="font-mono text-[var(--brand-muted)] line-through">
            {bundle.standaloneInvest}
          </span>
          <span className="font-mono font-bold text-[var(--brand-primary)]">
            {bundle.combinedInvest}
          </span>
          <span className="rounded-full bg-[var(--brand-accent)] px-2 py-0.5 text-[10px] font-bold text-[var(--brand-fg)]">
            {copy.savingsLabel ?? "Besparing"} {bundle.savingsInvest}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-xl bg-[var(--brand-accent)] shadow-sm">
      <div className="flex flex-col gap-3 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-5 sm:py-4">
        <div className="min-w-0 flex-1">
          <span className="inline-block rounded-full bg-[var(--brand-fg)] px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-[var(--brand-accent)] uppercase">
            {copy.title}
          </span>
          <p className="mt-2 text-sm leading-snug font-bold text-[var(--brand-fg)] sm:text-base">
            {bundle.name}
            <span className="font-normal text-[var(--brand-fg)]/80"> · {workflowLine}</span>
          </p>
          <p className="mt-0.5 text-xs text-[var(--brand-fg)]/70 sm:text-sm">
            {bundle.tagline}
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-2 sm:gap-3">
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-xs text-[var(--brand-fg)]/50 line-through sm:text-sm">
              {bundle.standaloneInvest}
            </span>
            <span className="font-mono text-xl font-bold text-[var(--brand-fg)] sm:text-2xl">
              {bundle.combinedInvest}
            </span>
          </div>
          <span className="rounded-full bg-[var(--brand-primary)] px-2.5 py-1 text-[10px] font-bold text-white sm:text-xs">
            {copy.savingsLabel ?? "Bespaar"} {bundle.savingsInvest}
          </span>
        </div>
      </div>

      {copy.note && (
        <p className="border-t border-[var(--brand-fg)]/10 px-4 py-2 text-[11px] leading-snug text-[var(--brand-fg)]/65 sm:px-5">
          {copy.note}
        </p>
      )}
    </div>
  );
}
