"use client";

import { ListFilter, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useProposal } from "@/components/ProposalProvider";
import { labelFor, useProposalUi } from "@/lib/proposals/use-proposal-ui";
import { SlideTitle } from "./shared";
import { WorkflowRow } from "./WorkflowDetailCard";

const ALL_PHASE_FILTERS = [
  "ALL",
  "NOW",
  "NEXT",
  "NEAR",
  "PARALLEL",
  "BACKLOG",
] as const;
type Filter = (typeof ALL_PHASE_FILTERS)[number];

export function SlideWorkflows() {
  const { workflows, slideCopy } = useProposal();
  const ui = useProposalUi();
  const copy = slideCopy?.workflows ?? {
    kicker: "Reference",
    title: "All 11 workflows",
    subtitle:
      "Full overview, filter by phase. Detail slides above cover what matters most.",
  };
  const [filter, setFilter] = useState<Filter>("ALL");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const filterOrder = ALL_PHASE_FILTERS.filter(
    (p) =>
      p === "ALL" ||
      workflows.some((w) => w.phaseRevised === p),
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!filterOrder.includes(filter)) setFilter("ALL");
  }, [filter, filterOrder]);

  const filtered =
    filter === "ALL"
      ? workflows
      : workflows.filter((w) => w.phaseRevised === filter);

  const selectFilter = (next: Filter) => {
    setFilter(next);
    setDrawerOpen(false);
  };

  useEffect(() => {
    if (!drawerOpen) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setDrawerOpen(false);
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [drawerOpen]);

  return (
    <div>
      <SlideTitle
        kicker={copy.kicker}
        title={copy.title}
        subtitle={copy.subtitle}
        compact
      />

      <div className="mb-4 sm:hidden">
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          aria-expanded={drawerOpen}
          aria-haspopup="dialog"
          className="flex w-full items-center gap-3 rounded-xl border border-[var(--brand-border)] bg-white px-4 py-3 text-left transition-colors hover:border-[var(--brand-fg)]/20"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-bg)] text-[var(--brand-primary)]">
            <ListFilter className="h-4 w-4" aria-hidden />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[10px] font-semibold tracking-wide text-[var(--brand-muted)] uppercase">
              {ui.filterByPhase}
            </span>
            <span className="block truncate text-sm font-semibold text-[var(--brand-fg)]">
              {labelFor(ui.phaseFilters, filter)}
            </span>
          </span>
          {filter !== "ALL" && (
            <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--brand-accent)]" />
          )}
        </button>
      </div>

      <div className="mb-4 hidden flex-wrap gap-1.5 sm:flex">
        {filterOrder.map((p) => (
          <FilterBtn key={p} active={filter === p} onClick={() => setFilter(p)}>
            {labelFor(ui.phaseFilters, p)}
          </FilterBtn>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border border-[var(--brand-border)] bg-white">
        <div className="hidden border-b border-[var(--brand-border)] bg-[var(--brand-bg)] px-4 py-2 text-[10px] font-semibold tracking-wide text-[var(--brand-muted)] uppercase sm:grid sm:grid-cols-[4rem_1fr_auto] sm:gap-4 sm:px-5">
          <span>{ui.tableId}</span>
          <span>{ui.tableInitiative}</span>
          <span className="text-right">{ui.tablePhaseInvest}</span>
        </div>
        <div className="px-4 sm:px-5">
          {filtered.map((wf) => (
            <WorkflowRow key={wf.id} wf={wf} />
          ))}
        </div>
      </div>

      <p className="mt-3 text-xs text-[var(--brand-muted)]">
        {ui.showingWorkflows(filtered.length, workflows.length)}
      </p>

      {mounted &&
        drawerOpen &&
        createPortal(
          <WorkflowFilterDrawer
            title={ui.filterByPhase}
            filter={filter}
            filterOrder={filterOrder}
            labels={ui.phaseFilters}
            onSelect={selectFilter}
            onClose={() => setDrawerOpen(false)}
          />,
          document.body,
        )}
    </div>
  );
}

function WorkflowFilterDrawer({
  title,
  filter,
  filterOrder,
  labels,
  onSelect,
  onClose,
}: {
  title: string;
  filter: Filter;
  filterOrder: readonly Filter[];
  labels: Record<string, string>;
  onSelect: (filter: Filter) => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 sm:hidden" role="presentation">
      <button
        type="button"
        aria-label={title}
        className="filter-drawer-backdrop absolute inset-0 bg-black/40"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="workflow-filter-drawer-title"
        className="filter-drawer-panel absolute inset-x-0 bottom-0 rounded-t-2xl border-t border-[var(--brand-border)] bg-white px-4 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))]"
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2
            id="workflow-filter-drawer-title"
            className="text-base font-semibold text-[var(--brand-fg)]"
          >
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--brand-muted)] transition-colors hover:bg-[var(--brand-bg)] hover:text-[var(--brand-fg)]"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col gap-1">
          {filterOrder.map((p) => {
            const active = filter === p;
            return (
              <button
                key={p}
                type="button"
                onClick={() => onSelect(p)}
                aria-pressed={active}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors ${
                  active
                    ? "bg-[var(--brand-primary)] text-white"
                    : "text-[var(--brand-fg)] hover:bg-[var(--brand-bg)]"
                }`}
              >
                {labelFor(labels, p)}
                {active && (
                  <span className="h-2 w-2 rounded-full bg-[var(--brand-accent)]" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function FilterBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
        active
          ? "bg-[var(--brand-primary)] text-white"
          : "bg-white text-[var(--brand-muted)] ring-1 ring-[var(--brand-border)] hover:text-[var(--brand-fg)]"
      }`}
    >
      {children}
    </button>
  );
}
