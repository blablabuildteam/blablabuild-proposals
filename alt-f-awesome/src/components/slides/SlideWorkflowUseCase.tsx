"use client";

import type { Workflow } from "@/lib/types";
import { Badge, BulletList } from "./shared";

export function SlideWorkflowUseCase({
  wf,
  onBack,
}: {
  wf: Workflow;
  onBack: () => void;
}) {
  return (
    <div className="pb-2">
      <button
        type="button"
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-primary)] transition hover:text-[var(--brand-fg)]"
      >
        <span aria-hidden>←</span> Back to overview
      </button>

      <div className="overflow-hidden rounded-2xl bg-[var(--brand-primary)] text-white">
        <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-start sm:justify-between sm:p-7">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[var(--brand-accent)] px-3 py-1 font-mono text-xs font-bold text-[var(--brand-fg)]">
                {wf.id}
              </span>
              <Badge variant="glass">{wf.phaseRevised}</Badge>
              <Badge variant="glass">{wf.impactLabel} impact</Badge>
            </div>
            <h1 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
              {wf.title}
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
              {wf.summary}
            </p>
          </div>
          <div className="shrink-0 rounded-xl bg-white/10 px-5 py-4 text-right">
            <p className="font-mono text-2xl font-bold sm:text-3xl">
              {wf.investment}
            </p>
            <p className="mt-1 text-sm text-white/75">{wf.weeks}</p>
            <p className="mt-2 text-xs text-[var(--brand-accent)]">
              {wf.timeSaved}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <section className="rounded-xl border border-[var(--brand-border)] bg-white p-5 sm:p-6">
          <p className="text-[10px] font-bold tracking-wide text-[var(--brand-primary)] uppercase">
            Why this matters
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--brand-fg)] sm:text-base">
            {wf.why}
          </p>
        </section>

        <section className="rounded-xl bg-[var(--brand-accent)]/30 p-5 sm:p-6">
          <p className="text-[10px] font-bold tracking-wide text-[var(--brand-fg)] uppercase">
            What you get
          </p>
          <div className="mt-3">
            <BulletList items={wf.benefits} />
          </div>
        </section>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_auto]">
        <section className="rounded-xl border border-[var(--brand-border)] bg-white p-5 sm:p-6">
          <p className="text-[10px] font-bold tracking-wide text-[var(--brand-muted)] uppercase">
            What we deliver
          </p>
          <div className="mt-3">
            <BulletList items={wf.deliverables} />
          </div>
        </section>

        {wf.foundationFor && wf.foundationFor.length > 0 && (
          <section className="rounded-xl border border-[var(--brand-primary)]/20 bg-[var(--brand-primary)]/5 p-5 sm:min-w-[220px] sm:p-6">
            <p className="text-[10px] font-bold tracking-wide text-[var(--brand-primary)] uppercase">
              Unlocks
            </p>
            <ul className="mt-3 space-y-2">
              {wf.foundationFor.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-snug text-[var(--brand-fg-secondary)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-[var(--brand-border)] pt-4 text-xs text-[var(--brand-muted)]">
        <span className="rounded-full bg-[var(--brand-bg)] px-3 py-1">
          {wf.effortDays}
        </span>
        <span className="rounded-full bg-[var(--brand-bg)] px-3 py-1">
          RICE {wf.riceReported}
        </span>
        <span className="rounded-full bg-[var(--brand-bg)] px-3 py-1">
          {wf.bucket}
        </span>
      </div>
    </div>
  );
}
