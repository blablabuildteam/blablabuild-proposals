"use client";

import type { Workflow } from "@/lib/types";
import { useProposalLocale } from "@/components/ProposalProvider";
import { BulletList } from "./shared";

const copy = {
  nl: {
    standalone: "Onderdelen los",
    combined: "Gecombineerd",
    perEpic: "Per onderdeel",
    synergy: "Synergie",
  },
  en: {
    standalone: "Epics separately",
    combined: "Combined",
    perEpic: "Per epic",
    synergy: "Synergy",
  },
} as const;

export function WorkflowEpicsPanel({ wf }: { wf: Workflow }) {
  const { locale } = useProposalLocale();
  const labels = copy[locale] ?? copy.nl;
  const epics = wf.epics ?? [];

  if (epics.length === 0) return null;

  return (
    <section className="mt-4 overflow-hidden rounded-2xl border border-[var(--brand-border)] bg-white">
      <div className="border-b border-[var(--brand-border)] bg-[var(--brand-primary)]/5 px-5 py-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-bold tracking-wide text-[var(--brand-primary)] uppercase">
              {labels.perEpic}
            </p>
            <h2 className="mt-1 text-lg font-bold text-[var(--brand-fg)] sm:text-xl">
              {wf.epicsSectionTitle}
            </h2>
          </div>
          {wf.epicsStandaloneInvest ? (
            <div className="flex flex-wrap items-end gap-3 sm:justify-end">
              <div className="text-right">
                <p className="text-[10px] font-bold tracking-wide text-[var(--brand-muted)] uppercase">
                  {labels.standalone}
                </p>
                <p className="font-mono text-sm text-[var(--brand-muted)] line-through">
                  {wf.epicsStandaloneInvest}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold tracking-wide text-[var(--brand-primary)] uppercase">
                  {labels.combined}
                </p>
                <p className="font-mono text-xl font-bold text-[var(--brand-primary)]">
                  {wf.investment}
                </p>
              </div>
            </div>
          ) : null}
        </div>
        {wf.epicsCombinedNote ? (
          <p className="mt-3 text-sm leading-relaxed text-[var(--brand-fg-secondary)]">
            {wf.epicsCombinedNote}
          </p>
        ) : null}
      </div>

      <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-5">
        {epics.map((epic, index) => (
          <article
            key={epic.id}
            className="flex h-full flex-col rounded-xl border border-[var(--brand-border)] bg-[var(--brand-bg)] p-4 sm:p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand-primary)] font-mono text-xs font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="text-sm font-bold leading-snug text-[var(--brand-fg)] sm:text-base">
                  {epic.title}
                </h3>
              </div>
              <p className="shrink-0 font-mono text-sm font-bold text-[var(--brand-primary)]">
                {epic.investment}
              </p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--brand-fg-secondary)]">
              {epic.summary}
            </p>
            <div className="mt-4 flex-1 border-t border-[var(--brand-border)]/70 pt-3">
              <BulletList items={epic.deliverables} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
