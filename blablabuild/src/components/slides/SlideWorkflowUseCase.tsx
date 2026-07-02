"use client";

import type { Workflow } from "@/lib/types";
import { useProposal } from "@/components/ProposalProvider";
import { labelFor, useProposalUi } from "@/lib/proposals/use-proposal-ui";
import { Badge, HighlightedTitle, BulletList } from "./shared";
import { WorkflowWeekLabel } from "./WorkflowDetailCard";
import { PlatformBundleCard } from "./PlatformBundleCard";
import { WorkflowRelations } from "./WorkflowRelations";

export function SlideWorkflowUseCase({
  wf,
  onBack,
}: {
  wf: Workflow;
  onBack: () => void;
}) {
  const ui = useProposalUi();
  const { platformBundles } = useProposal();
  const platform = wf.platformId
    ? platformBundles?.find((b) => b.id === wf.platformId)
    : undefined;

  return (
    <div className="pb-2">
      <button
        type="button"
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-primary)] transition hover:text-[var(--brand-fg)]"
      >
        <span aria-hidden>←</span> {ui.backToOverview}
      </button>

      <div className="overflow-hidden rounded-2xl bg-[var(--brand-primary)] text-white">
        <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-start sm:justify-between sm:p-7">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[var(--brand-accent)] px-3 py-1 font-mono text-xs font-bold text-[var(--brand-fg)]">
                {wf.id}
              </span>
              <Badge variant="glass">
                {labelFor(ui.phaseLabels, wf.phaseRevised)}
              </Badge>
              {wf.domainLabels?.map((domain) => (
                <Badge key={domain} variant="glass">
                  {labelFor(ui.domainLabels ?? {}, domain)}
                </Badge>
              ))}
              <Badge variant="glass">
                {labelFor(ui.impactLabels, wf.impactLabel)} {ui.impactSuffix}
              </Badge>
            </div>
            <h1 className="mt-4 text-2xl leading-tight sm:text-3xl">
              <HighlightedTitle text={wf.title} variant="on-dark" />
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
              {wf.summary}
            </p>
          </div>
          <div className="shrink-0 rounded-xl bg-white/10 px-5 py-4 text-right sm:max-w-sm">
            <p className="font-mono text-2xl font-bold sm:text-3xl">
              {wf.investment}
            </p>
            {wf.investmentNote ? (
              <p className="mt-1 text-[11px] leading-snug text-white/65">
                {wf.investmentNote}
              </p>
            ) : null}
            {!wf.hideTimeline && (
              <WorkflowWeekLabel
                effortDays={wf.effortDays}
                weeks={wf.weeks}
                tone="light"
              />
            )}
            {wf.expectedValue ? (
              <div className="mt-3 border-t border-white/15 pt-3 text-left">
                <p className="text-[10px] font-bold tracking-wide text-[var(--brand-accent)] uppercase">
                  {ui.expectedValue}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/90">
                  {wf.expectedValue}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <section className="rounded-xl border border-[var(--brand-border)] bg-white p-5 sm:p-6">
          <p className="text-[10px] font-bold tracking-wide text-[var(--brand-primary)] uppercase">
            {ui.whyThisMatters}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--brand-fg)] sm:text-base">
            {wf.why}
          </p>
        </section>

        <section className="rounded-xl bg-[var(--brand-accent)]/30 p-5 sm:p-6">
          <p className="text-[10px] font-bold tracking-wide text-[var(--brand-fg)] uppercase">
            {ui.whatYouGet}
          </p>
          <div className="mt-3">
            <BulletList items={wf.benefits} />
          </div>
        </section>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_auto]">
        <section className="rounded-xl border border-[var(--brand-border)] bg-white p-5 sm:p-6">
          <p className="text-[10px] font-bold tracking-wide text-[var(--brand-muted)] uppercase">
            {ui.whatWeDeliver}
          </p>
          <div className="mt-3">
            <BulletList items={wf.deliverables} />
          </div>
        </section>

        <WorkflowRelations wf={wf} />
      </div>

      {wf.implementationEstimate && (
        <section className="mt-4 rounded-xl border border-dashed border-[var(--brand-primary)]/30 bg-[var(--brand-bg)] p-5 sm:p-6">
          <p className="text-[10px] font-bold tracking-wide text-[var(--brand-primary)] uppercase">
            {wf.implementationEstimate.label}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <span className="font-mono text-lg font-bold text-[var(--brand-fg)]">
              {wf.implementationEstimate.investment}
            </span>
            <span className="text-sm text-[var(--brand-muted)]">
              {wf.implementationEstimate.effortDays}
            </span>
          </div>
          <p className="mt-2 text-xs text-[var(--brand-muted)]">
            Indicatief; scope en budget worden vastgesteld na discovery.
          </p>
        </section>
      )}

      {platform && (
        <div className="mt-4">
          <PlatformBundleCard
            bundle={platform}
            variant="inline"
            copy={{
              title: "Combinatievoordeel",
              savingsLabel: "Bespaar",
            }}
          />
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-2 border-t border-[var(--brand-border)] pt-4 text-xs text-[var(--brand-muted)]">
        <span className="rounded-full bg-[var(--brand-bg)] px-3 py-1">
          {wf.effortDays}
        </span>
        <span className="rounded-full bg-[var(--brand-bg)] px-3 py-1">
          {ui.prioScoreLabel ?? ui.tableRice} {wf.riceReported}
        </span>
        <span className="rounded-full bg-[var(--brand-bg)] px-3 py-1">
          {labelFor(ui.bucketLabels, wf.bucket)}
        </span>
      </div>
    </div>
  );
}
