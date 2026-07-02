"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { computeRiceFromInput } from "@foundation/rice";
import { useProposal } from "@/components/ProposalProvider";
import type { Workflow } from "@/lib/types";
import { Badge, SlideTitle } from "./shared";

const MAIN_PHASE_IDS = ["now", "next", "near"] as const;

const DEFAULT_RICE_BREAKDOWN = {
  title: "Score breakdown",
  reach: "Reach",
  impact: "Impact",
  confidence: "Confidence",
  effort: "Effort",
};

type RiceBreakdownCopy = {
  title: string;
  reach: string;
  impact: string;
  confidence: string;
  effort: string;
};

const PHASE_STYLES = {
  now: {
    border: "border-[var(--brand-accent)]",
    headerBg: "bg-[var(--brand-accent)]/40",
    headerBorder: "border-[var(--brand-accent)]/50",
    bodyBg: "bg-[var(--brand-accent)]/15",
    rowDivide: "divide-[var(--brand-accent)]/40",
    bar: "bg-[var(--brand-primary)]",
    badge: "black" as const,
  },
  next: {
    border: "border-[var(--brand-primary)]",
    headerBg: "bg-[var(--brand-primary)]/15",
    headerBorder: "border-[var(--brand-primary)]/40",
    bodyBg: "bg-[var(--brand-primary)]/5",
    rowDivide: "divide-[var(--brand-primary)]/25",
    bar: "bg-[var(--brand-primary)]",
    badge: "blue" as const,
  },
  near: {
    border: "border-[var(--brand-fg)]",
    headerBg: "bg-[var(--brand-fg)]",
    headerBorder: "border-[var(--brand-fg)]",
    bodyBg: "bg-[var(--brand-fg)]/5",
    rowDivide: "divide-[var(--brand-border)]",
    bar: "bg-[var(--brand-fg)]",
    badge: "black" as const,
  },
} as const;

function phaseRationale(
  phaseId: string,
  copy: NonNullable<
    ReturnType<typeof useProposal>["slideCopy"]
  >["prioritization"],
): string {
  if (!copy) return "";
  return (
    copy.phaseRationales?.[phaseId] ??
    (phaseId === "now" ? copy.phaseOneRationale : "")
  );
}

function PrioScore({
  wf,
  breakdown,
}: {
  wf: Pick<
    Workflow,
    "reach" | "impact" | "confidencePct" | "effort" | "riceReported"
  >;
  breakdown: RiceBreakdownCopy;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(
    null,
  );

  const computed = Math.round(
    computeRiceFromInput({
      reach: wf.reach,
      impact: wf.impact,
      confidencePct: wf.confidencePct,
      effort: wf.effort,
    }),
  );

  const updatePosition = useCallback(() => {
    const button = buttonRef.current;
    const tooltip = tooltipRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const tooltipRect = tooltip?.getBoundingClientRect();
    const tooltipWidth = tooltipRect?.width ?? 256;
    const tooltipHeight = tooltipRect?.height ?? 200;
    const gap = 8;
    const pad = 12;

    let top = rect.top - tooltipHeight - gap;
    if (top < pad) {
      top = rect.bottom + gap;
    }
    if (top + tooltipHeight > window.innerHeight - pad) {
      top = Math.max(pad, window.innerHeight - tooltipHeight - pad);
    }

    let left = rect.right - tooltipWidth;
    left = Math.min(
      Math.max(left, pad),
      window.innerWidth - tooltipWidth - pad,
    );

    setCoords({ top, left });
  }, []);

  useLayoutEffect(() => {
    if (!open) return;
    updatePosition();
  }, [open, updatePosition]);

  useEffect(() => {
    if (!open) return;

    const handleReposition = () => updatePosition();
    window.addEventListener("resize", handleReposition);
    window.addEventListener("scroll", handleReposition, true);

    return () => {
      window.removeEventListener("resize", handleReposition);
      window.removeEventListener("scroll", handleReposition, true);
    };
  }, [open, updatePosition]);

  const tooltip = open ? (
    <div
      ref={tooltipRef}
      role="tooltip"
      style={
        coords
          ? { top: coords.top, left: coords.left }
          : { top: -9999, left: -9999 }
      }
      className="pointer-events-none fixed z-[200] w-max max-w-[min(16rem,calc(100vw-2rem))] rounded-lg border border-[var(--brand-border)] bg-white px-3 py-2.5 text-left shadow-xl"
    >
      <p className="mb-2 text-[10px] font-semibold tracking-wide text-[var(--brand-muted)] uppercase">
        {breakdown.title}
      </p>
      <p className="mb-2 font-mono text-[11px] leading-relaxed text-[var(--brand-fg)]">
        ({breakdown.reach} × {breakdown.impact} × {breakdown.confidence}) ÷{" "}
        {breakdown.effort}
      </p>
      <dl className="mb-2 space-y-0.5 text-[11px] text-[var(--brand-muted)]">
        <div className="flex justify-between gap-4">
          <dt>{breakdown.reach}</dt>
          <dd className="font-mono text-[var(--brand-fg)]">{wf.reach}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt>{breakdown.impact}</dt>
          <dd className="font-mono text-[var(--brand-fg)]">{wf.impact}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt>{breakdown.confidence}</dt>
          <dd className="font-mono text-[var(--brand-fg)]">
            {wf.confidencePct}%
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt>{breakdown.effort}</dt>
          <dd className="font-mono text-[var(--brand-fg)]">{wf.effort}</dd>
        </div>
      </dl>
      <p className="border-t border-[var(--brand-border)] pt-2 font-mono text-[11px] font-semibold text-[var(--brand-primary)]">
        ({wf.reach} × {wf.impact} × {wf.confidencePct}%) ÷ {wf.effort} ={" "}
        {computed}
      </p>
    </div>
  ) : null;

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="cursor-help font-mono text-sm font-bold text-[var(--brand-primary)] underline decoration-dotted decoration-[var(--brand-primary)]/40 underline-offset-2 hover:decoration-[var(--brand-primary)]"
        aria-label={`${breakdown.title}: ${computed}`}
        aria-expanded={open}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        {wf.riceReported}
      </button>
      {typeof document !== "undefined" && tooltip
        ? createPortal(tooltip, document.body)
        : null}
    </>
  );
}

export function SlidePrioritization() {
  const { riceSorted, phases, getWorkflow, slideCopy } = useProposal();
  const copy = slideCopy?.prioritization ?? {
    kicker: "Prioritisation",
    title: "Why this order?",
    subtitle: "Scored on reach, impact, confidence and effort, not gut feel.",
    startHere: "Start here",
    phaseOne: "Phase 1",
    riceNote: "roadmap priority over raw rank",
    phaseOneRationale: "",
    wf0Note:
      "RICE = (Reach × Impact × Confidence) ÷ Effort. WF0 ranks lower on raw RICE (30) but leads Phase 1: it unlocks safe AI for everything that follows. WF8 scores lower (14) due to effort but leads Phase 2 for investment team impact.",
  };

  const maxRice = riceSorted[0]?.riceReported ?? 1;
  const riceBreakdown = copy.riceBreakdown ?? DEFAULT_RICE_BREAKDOWN;

  const mainPhases = useMemo(
    () =>
      MAIN_PHASE_IDS.map((id) => phases.find((p) => p.id === id)).filter(
        (p): p is NonNullable<typeof p> => Boolean(p),
      ),
    [phases],
  );

  return (
    <div>
      <SlideTitle
        kicker={copy.kicker}
        title={copy.title}
        subtitle={copy.subtitle}
        compact
      />

      <div className="space-y-5">
        {mainPhases.map((phase) => {
          const style =
            PHASE_STYLES[phase.id as keyof typeof PHASE_STYLES] ??
            PHASE_STYLES.now;
          const rationale = phaseRationale(phase.id, copy);
          const phaseWorkflows = phase.workflows
            .map((id) => getWorkflow(id))
            .filter(Boolean);

          if (phaseWorkflows.length === 0) return null;

          const headerFg =
            phase.id === "near" ? "text-white" : "text-[var(--brand-fg)]";

          return (
            <div
              key={phase.id}
              className={`rounded-xl border-2 ${style.border} ${style.bodyBg}`}
            >
              <div
                className={`flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2.5 sm:px-5 ${style.headerBg} ${style.headerBorder}`}
              >
                <div className="flex items-center gap-2">
                  {phase.id === "now" && (
                    <Badge variant={style.badge}>{copy.startHere}</Badge>
                  )}
                  <span className={`text-xs font-semibold ${headerFg}`}>
                    {phase.label} · {phase.period}
                  </span>
                </div>
                <span className={`font-mono text-sm font-bold ${headerFg}`}>
                  {phase.invest}
                </span>
              </div>

              <div className={`divide-y ${style.rowDivide}`}>
                {rationale ? (
                  <div className="px-4 py-3 sm:px-5">
                    <p className="text-xs leading-relaxed text-[var(--brand-fg)]/85 sm:text-sm">
                      {rationale}
                    </p>
                  </div>
                ) : null}

                {phaseWorkflows.map((wf) => {
                  if (!wf) return null;
                  const width = (wf.riceReported / maxRice) * 100;
                  const workflowRationale = copy.workflowRationale?.[wf.id];

                  return (
                    <div key={wf.id} className="px-4 py-3 sm:px-5">
                      <div className="grid grid-cols-[3rem_1fr_3rem] items-center gap-2 sm:grid-cols-[4rem_1fr_4rem]">
                        <span className="font-bold text-[var(--brand-fg)]">
                          {wf.id}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-[var(--brand-fg)]">
                            {wf.title}
                          </p>
                        </div>
                        <PrioScore wf={wf} breakdown={riceBreakdown} />
                      </div>
                      {workflowRationale && (
                        <p className="mt-2 text-xs leading-relaxed text-[var(--brand-fg)]/80 sm:pl-[4.5rem]">
                          {workflowRationale}
                        </p>
                      )}
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/60">
                        <div
                          className={`h-full rounded-full ${style.bar}`}
                          style={{ width: `${width}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-[var(--brand-muted)] sm:text-sm">
        {copy.wf0Note}
      </p>
    </div>
  );
}
