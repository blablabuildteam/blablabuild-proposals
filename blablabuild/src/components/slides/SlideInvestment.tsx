"use client";

import { useProposal } from "@/components/ProposalProvider";
import { SlideTitle, StatCard } from "./shared";

export function SlideInvestment() {
  const { packages, AI_BUILD_NOTE } = useProposal();

  return (
    <div>
      <SlideTitle
        kicker="Investment"
        title="Pick your starting package"
        subtitle={AI_BUILD_NOTE}
        compact
      />

      <div className="grid gap-4 lg:grid-cols-3 lg:items-stretch">
        {packages.map((pkg) => {
          const rec = "recommended" in pkg && pkg.recommended;
          return (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-xl p-5 sm:p-6 ${
                rec
                  ? "border-2 border-[var(--brand-accent)] bg-[var(--brand-primary)] text-white"
                  : "border border-[var(--brand-border)] bg-white"
              }`}
            >
              {rec && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--brand-accent)] px-3 py-0.5 text-[10px] font-bold text-[var(--brand-fg)] uppercase">
                  Recommended
                </span>
              )}
              <p
                className={`text-xs font-bold uppercase ${rec ? "text-[var(--brand-accent)]" : "text-[var(--brand-muted)]"}`}
              >
                {pkg.tag}
              </p>
              <h3
                className={`mt-1 text-xl font-bold ${rec ? "text-white" : "text-[var(--brand-fg)]"}`}
              >
                {pkg.name}
              </h3>
              <p
                className={`mt-3 font-mono text-2xl font-bold ${rec ? "text-white" : "text-[var(--brand-primary)]"}`}
              >
                {pkg.invest}
              </p>
              <p
                className={`mt-1 text-xs ${rec ? "text-white/70" : "text-[var(--brand-muted)]"}`}
              >
                {pkg.weeks} weeks
              </p>
              <p
                className={`mt-4 text-sm font-medium ${rec ? "text-white" : "text-[var(--brand-fg)]"}`}
              >
                {pkg.workflows}
              </p>
              <p
                className={`mt-2 flex-1 text-sm leading-relaxed ${rec ? "text-white/80" : "text-[var(--brand-muted)]"}`}
              >
                {pkg.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <StatCard
          variant="lime"
          label="Full programme (excl. WF10 build)"
          value="€180–260k"
          hint="12+ months · all workflows"
        />
        <StatCard
          label="Time back Phase 1–2"
          value="~20–30 hrs/mo"
          hint="Conservative estimate"
        />
      </div>
    </div>
  );
}
