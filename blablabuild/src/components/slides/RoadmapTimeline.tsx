"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type RefCallback,
} from "react";
import { createPortal } from "react-dom";
import { useDeckNavigation } from "@/components/DeckNavigation";
import type { Workflow } from "@/lib/types";
import { Badge } from "./shared";

type TimelinePhase = {
  id: string;
  label: string;
  period: string;
  invest: string;
  workflows: readonly string[];
  accent?: "lime" | "blue" | "neutral";
};

type Edge = {
  from: string;
  to: string;
  key: string;
  qualifier?: string;
};

type EdgePath = Edge & {
  d: string;
  midpoint: { x: number; y: number };
  fromTitle: string;
  toTitle: string;
};

const MAIN_PHASE_IDS = ["now", "next", "near"] as const;

const ACCENT_STYLES = {
  lime: {
    header: "bg-[var(--brand-accent)] text-[var(--brand-fg)]",
    muted: "text-[var(--brand-fg)]/70",
    dot: "bg-[var(--brand-accent)]",
    ring: "ring-[var(--brand-accent)]",
  },
  blue: {
    header: "bg-[var(--brand-primary)] text-white",
    muted: "text-white/70",
    dot: "bg-[var(--brand-primary)]",
    ring: "ring-[var(--brand-primary)]",
  },
  neutral: {
    header: "bg-[var(--brand-fg)] text-white",
    muted: "text-white/70",
    dot: "bg-[var(--brand-fg)]",
    ring: "ring-[var(--brand-fg)]",
  },
} as const;

function collectEdges(workflows: Workflow[]): Edge[] {
  const seen = new Set<string>();
  const edges: Edge[] = [];

  for (const wf of workflows) {
    for (const pre of wf.prerequisites ?? []) {
      const key = `${pre.workflowId}->${wf.id}`;
      if (!seen.has(key)) {
        seen.add(key);
        edges.push({
          from: pre.workflowId,
          to: wf.id,
          key,
          qualifier: pre.qualifier,
        });
      }
    }
    for (const unlock of wf.unlocks ?? []) {
      const key = `${wf.id}->${unlock.workflowId}`;
      if (!seen.has(key)) {
        seen.add(key);
        edges.push({
          from: wf.id,
          to: unlock.workflowId,
          key,
          qualifier: unlock.qualifier,
        });
      }
    }
  }

  return edges;
}

function phaseRationale(
  phaseId: string,
  phaseRationales?: Partial<Record<string, string>>,
  phaseOneRationale?: string,
): string {
  return phaseRationales?.[phaseId] ?? (phaseId === "now" ? phaseOneRationale ?? "" : "");
}

type EdgeAnchorOffsets = {
  fromOffsetY: number;
  toOffsetY: number;
  railOffset: number;
};

const ANCHOR_SPREAD_PX = 28;
const RAIL_STAGGER_PX = 14;

function spreadOffset(index: number, total: number, span: number): number {
  if (total <= 1) return 0;
  const step = span / (total - 1);
  return -span / 2 + index * step;
}

function computeEdgeOffsets(edges: Edge[]): Map<string, EdgeAnchorOffsets> {
  const outgoingByNode = new Map<string, Edge[]>();
  const incomingByNode = new Map<string, Edge[]>();

  for (const edge of edges) {
    const outgoing = outgoingByNode.get(edge.from) ?? [];
    outgoing.push(edge);
    outgoingByNode.set(edge.from, outgoing);

    const incoming = incomingByNode.get(edge.to) ?? [];
    incoming.push(edge);
    incomingByNode.set(edge.to, incoming);
  }

  for (const list of outgoingByNode.values()) {
    list.sort((a, b) => a.to.localeCompare(b.to));
  }
  for (const list of incomingByNode.values()) {
    list.sort((a, b) => a.from.localeCompare(b.from));
  }

  const offsets = new Map<string, EdgeAnchorOffsets>();

  for (const edge of edges) {
    const outgoing = outgoingByNode.get(edge.from) ?? [];
    const incoming = incomingByNode.get(edge.to) ?? [];
    const outIdx = outgoing.findIndex((e) => e.key === edge.key);
    const inIdx = incoming.findIndex((e) => e.key === edge.key);

    offsets.set(edge.key, {
      fromOffsetY: spreadOffset(outIdx, outgoing.length, ANCHOR_SPREAD_PX),
      toOffsetY: spreadOffset(inIdx, incoming.length, ANCHOR_SPREAD_PX),
      railOffset: outIdx * RAIL_STAGGER_PX,
    });
  }

  return offsets;
}

function buildPath(
  fromRect: DOMRect,
  toRect: DOMRect,
  containerRect: DOMRect,
  offsets: EdgeAnchorOffsets = {
    fromOffsetY: 0,
    toOffsetY: 0,
    railOffset: 0,
  },
): { d: string; midpoint: { x: number; y: number } } {
  const fromCenter = {
    x: fromRect.left + fromRect.width / 2 - containerRect.left,
    y:
      fromRect.top +
      fromRect.height / 2 -
      containerRect.top +
      offsets.fromOffsetY,
  };
  const toCenter = {
    x: toRect.left + toRect.width / 2 - containerRect.left,
    y:
      toRect.top + toRect.height / 2 - containerRect.top + offsets.toOffsetY,
  };

  const dx = toCenter.x - fromCenter.x;
  const dy = toCenter.y - fromCenter.y;

  const xRightFrom = fromRect.right - containerRect.left;
  const xRightTo = toRect.right - containerRect.left;
  const xLeftTo = toRect.left - containerRect.left;

  let d: string;

  // Cross-column: exit right, enter left
  if (Math.abs(dx) > Math.abs(dy) * 1.2) {
    const cp = Math.max(40, Math.abs(dx) * 0.45);
    d = `M ${xRightFrom} ${fromCenter.y} C ${xRightFrom + cp} ${fromCenter.y}, ${xLeftTo - cp} ${toCenter.y}, ${xLeftTo} ${toCenter.y}`;
  } else {
    // Same column (stacked cards): right edge to right edge, bulge outward
    const bulge = Math.max(28, Math.min(52, Math.abs(dy) * 0.18));
    const railX =
      Math.max(xRightFrom, xRightTo) + bulge + offsets.railOffset;
    d = `M ${xRightFrom} ${fromCenter.y} C ${railX} ${fromCenter.y}, ${railX} ${toCenter.y}, ${xRightTo} ${toCenter.y}`;
  }

  return {
    d,
    midpoint: {
      x: (fromCenter.x + toCenter.x) / 2,
      y: (fromCenter.y + toCenter.y) / 2,
    },
  };
}

function RoadmapProjectCard({
  wf,
  registerRef,
  highlighted,
  dimmed,
  onHover,
  variant = "default",
}: {
  wf: Workflow;
  registerRef: RefCallback<HTMLDivElement>;
  highlighted: boolean;
  dimmed: boolean;
  onHover: (id: string | null) => void;
  variant?: "default" | "highlight";
}) {
  const { openWorkflow } = useDeckNavigation();
  const isHighlight = variant === "highlight";

  return (
    <div ref={registerRef} data-project-id={wf.id} className="relative">
      <button
        type="button"
        onClick={() => openWorkflow(wf.id)}
        onMouseEnter={() => onHover(wf.id)}
        onMouseLeave={() => onHover(null)}
        onFocus={() => onHover(wf.id)}
        onBlur={() => onHover(null)}
        className={`group w-full rounded-xl border p-3 text-left transition-all duration-200 sm:p-3.5 ${
          isHighlight
            ? highlighted
              ? "border-[var(--brand-accent)] bg-[var(--brand-highlight)] shadow-lg ring-2 ring-[var(--brand-accent)]/40"
              : "border-[var(--brand-highlight)] bg-[var(--brand-highlight)] hover:border-[var(--brand-accent)] hover:shadow-lg"
            : highlighted
              ? "border-[var(--brand-primary)] bg-white shadow-md ring-2 ring-[var(--brand-primary)]/25"
              : "border-[var(--brand-border)] bg-white hover:border-[var(--brand-primary)]/35 hover:shadow-sm"
        } ${dimmed ? "opacity-40" : "opacity-100"}`}
      >
        <div className="flex items-start justify-between gap-2">
          <Badge variant={isHighlight ? "glass" : "black"}>{wf.id}</Badge>
          {!wf.hideTimeline && (
            <span
              className={`shrink-0 font-mono text-[10px] font-bold sm:text-xs ${
                isHighlight
                  ? "text-[var(--brand-accent)]"
                  : "text-[var(--brand-primary)]"
              }`}
            >
              {wf.investment}
            </span>
          )}
        </div>
        <p
          className={`mt-2 line-clamp-2 text-xs leading-snug font-semibold sm:text-sm ${
            isHighlight ? "text-white" : "text-[var(--brand-fg)]"
          }`}
        >
          {wf.title}
        </p>
      </button>
    </div>
  );
}

export function RoadmapTimeline({
  phases,
  getWorkflow,
  connectionHint,
  connectionTitle = "Data connection",
  connectionFallback = "These projects share data or build on each other's outputs.",
  phaseRationales,
  phaseOneRationale,
}: {
  phases: readonly TimelinePhase[];
  getWorkflow: (id: string) => Workflow | undefined;
  connectionHint?: string;
  connectionTitle?: string;
  connectionFallback?: string;
  phaseRationales?: Partial<Record<string, string>>;
  phaseOneRationale?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef(new Map<string, HTMLDivElement>());
  const [edgePaths, setEdgePaths] = useState<EdgePath[]>([]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeEdgeKey, setActiveEdgeKey] = useState<string | null>(null);
  const [popoverCoords, setPopoverCoords] = useState<{
    top: number;
    left: number;
  } | null>(null);

  const mainPhases = MAIN_PHASE_IDS.map((id) => phases.find((p) => p.id === id)).filter(
    (phase): phase is TimelinePhase => Boolean(phase),
  );

  const secondaryPhases = phases.filter(
    (p) => p.id === "backlog" || p.id === "parallel",
  );

  const allWorkflowIds = useMemo(
    () => phases.flatMap((phase) => [...phase.workflows]),
    [phases],
  );

  const workflows = useMemo(
    () =>
      allWorkflowIds
        .map((id) => getWorkflow(id))
        .filter((wf): wf is Workflow => Boolean(wf)),
    [allWorkflowIds, getWorkflow],
  );

  const edges = useMemo(() => collectEdges(workflows), [workflows]);

  const connectedIds = useMemo(() => {
    if (!hoveredId && !activeEdgeKey) return null;
    const ids = new Set<string>();
    if (hoveredId) ids.add(hoveredId);
    if (activeEdgeKey) {
      const edge = edgePaths.find((item) => item.key === activeEdgeKey);
      if (edge) {
        ids.add(edge.from);
        ids.add(edge.to);
      }
    }
    for (const edge of edges) {
      if (hoveredId && (edge.from === hoveredId || edge.to === hoveredId)) {
        ids.add(edge.from);
        ids.add(edge.to);
      }
    }
    return ids;
  }, [edges, hoveredId, activeEdgeKey, edgePaths]);

  const activeEdge = useMemo(
    () => edgePaths.find((edge) => edge.key === activeEdgeKey) ?? null,
    [activeEdgeKey, edgePaths],
  );

  const updatePopoverPosition = useCallback((edge: EdgePath) => {
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const popoverWidth = 320;
    const popoverHeight = 180;
    const gap = 12;
    const pad = 12;

    let top = containerRect.top + edge.midpoint.y - popoverHeight - gap;
    let left = containerRect.left + edge.midpoint.x - popoverWidth / 2;

    if (top < pad) {
      top = containerRect.top + edge.midpoint.y + gap;
    }
    if (top + popoverHeight > window.innerHeight - pad) {
      top = Math.max(pad, window.innerHeight - popoverHeight - pad);
    }
    left = Math.min(
      Math.max(left, pad),
      window.innerWidth - popoverWidth - pad,
    );

    setPopoverCoords({ top, left });
  }, []);

  const closeEdgePopover = useCallback(() => {
    if (document.activeElement instanceof SVGElement) {
      document.activeElement.blur();
    }
    setActiveEdgeKey(null);
    setPopoverCoords(null);
  }, []);

  const openEdgePopover = useCallback(
    (edge: EdgePath) => {
      setActiveEdgeKey(edge.key);
      updatePopoverPosition(edge);
    },
    [updatePopoverPosition],
  );

  const toggleEdgePopover = useCallback(
    (edge: EdgePath) => {
      if (activeEdgeKey === edge.key) {
        closeEdgePopover();
        return;
      }
      openEdgePopover(edge);
    },
    [activeEdgeKey, closeEdgePopover, openEdgePopover],
  );

  useEffect(() => {
    if (!activeEdge) return;

    const handleReposition = () => updatePopoverPosition(activeEdge);
    window.addEventListener("resize", handleReposition);
    window.addEventListener("scroll", handleReposition, true);

    return () => {
      window.removeEventListener("resize", handleReposition);
      window.removeEventListener("scroll", handleReposition, true);
    };
  }, [activeEdge, updatePopoverPosition]);

  useEffect(() => {
    if (!activeEdgeKey) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeEdgePopover();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeEdgeKey, closeEdgePopover]);

  const registerRef = useCallback((id: string): RefCallback<HTMLDivElement> => {
    return (node) => {
      if (node) cardRefs.current.set(id, node);
      else cardRefs.current.delete(id);
    };
  }, []);

  const updatePaths = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const anchorOffsets = computeEdgeOffsets(edges);
    const nextPaths: EdgePath[] = [];

    for (const edge of edges) {
      const fromEl = cardRefs.current.get(edge.from);
      const toEl = cardRefs.current.get(edge.to);
      if (!fromEl || !toEl) continue;

      const fromWf = getWorkflow(edge.from);
      const toWf = getWorkflow(edge.to);
      const { d, midpoint } = buildPath(
        fromEl.getBoundingClientRect(),
        toEl.getBoundingClientRect(),
        containerRect,
        anchorOffsets.get(edge.key),
      );

      nextPaths.push({
        ...edge,
        d,
        midpoint,
        fromTitle: fromWf?.title ?? edge.from,
        toTitle: toWf?.title ?? edge.to,
      });
    }

    setEdgePaths(nextPaths);
  }, [edges, getWorkflow]);

  useLayoutEffect(() => {
    updatePaths();
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(updatePaths);
    observer.observe(container);
    window.addEventListener("resize", updatePaths);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updatePaths);
    };
  }, [updatePaths, phases, workflows]);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="relative overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="relative min-w-[720px]">
          {/* Phase headers */}
          <div
            className="grid gap-3"
            style={{ gridTemplateColumns: `repeat(${mainPhases.length}, minmax(0, 1fr))` }}
          >
            {mainPhases.map((phase, index) => {
              const accent =
                phase.accent ??
                (index === 0 ? "lime" : index === 1 ? "blue" : "neutral");
              const styles = ACCENT_STYLES[accent];

              return (
                <div key={phase.id} className="relative px-1">
                  <div className={`rounded-xl px-4 py-3 ${styles.header}`}>
                    <p className="text-[10px] font-bold tracking-wide uppercase sm:text-xs">
                      {phase.label}
                    </p>
                    <p className={`mt-0.5 text-xs ${styles.muted}`}>
                      {phase.period}
                    </p>
                    <p className="mt-1 font-mono text-sm font-bold">
                      {phase.invest}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Project cards per phase */}
          <div
            className="mt-4 grid gap-4 px-1"
            style={{ gridTemplateColumns: `repeat(${mainPhases.length}, minmax(0, 1fr))` }}
          >
            {mainPhases.map((phase) => {
              const rationale = phaseRationale(
                phase.id,
                phaseRationales,
                phaseOneRationale,
              );

              return (
                <div key={phase.id} className="flex flex-col gap-2.5">
                  {rationale ? (
                    <p className="rounded-lg border border-[var(--brand-border)]/70 bg-white/80 px-3 py-2.5 text-xs leading-relaxed text-[var(--brand-fg)]/85">
                      {rationale}
                    </p>
                  ) : null}
                  {phase.workflows.map((id) => {
                    const wf = getWorkflow(id);
                    if (!wf) return null;

                    const highlighted = connectedIds?.has(id) ?? false;
                    const dimmed =
                      connectedIds !== null && !connectedIds.has(id);

                    return (
                      <RoadmapProjectCard
                        key={id}
                        wf={wf}
                        registerRef={registerRef(id)}
                        highlighted={highlighted}
                        dimmed={dimmed}
                        onHover={setHoveredId}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>

          {/* Secondary track: parallel / strategic session */}
          {secondaryPhases.length > 0 ? (
            <div className="mt-6 border-t border-dashed border-[var(--brand-border)] pt-5">
              <div
                className="grid gap-4 px-1"
                style={{
                  gridTemplateColumns: `repeat(${mainPhases.length}, minmax(0, 1fr))`,
                }}
              >
                {secondaryPhases.map((phase) => {
                  const column =
                    phase.id === "parallel"
                      ? Math.min(2, mainPhases.length)
                      : undefined;

                  return (
                    <div
                      key={phase.id}
                      style={
                        phase.id === "backlog"
                          ? { gridColumn: "1 / -1" }
                          : column
                            ? { gridColumn: column }
                            : undefined
                      }
                      className={`min-w-0 ${phase.id === "backlog" ? "max-w-md" : ""}`}
                    >
                      <p
                        className={`mb-2 text-[10px] font-bold tracking-wide uppercase ${
                          phase.id === "backlog"
                            ? "text-[var(--brand-fg)]"
                            : "text-[var(--brand-muted)]"
                        }`}
                      >
                        {phase.label} · {phase.period}
                      </p>
                      <div className="flex flex-col gap-2.5">
                        {phase.workflows.map((id) => {
                          const wf = getWorkflow(id);
                          if (!wf) return null;

                          const highlighted = connectedIds?.has(id) ?? false;
                          const dimmed =
                            connectedIds !== null && !connectedIds.has(id);

                          return (
                            <RoadmapProjectCard
                              key={id}
                              wf={wf}
                              registerRef={registerRef(id)}
                              highlighted={highlighted}
                              dimmed={dimmed}
                              onHover={setHoveredId}
                              variant={
                                phase.id === "backlog" ? "highlight" : "default"
                              }
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>

        {/* Connection lines — wide invisible hit targets + visible paths */}
        <svg
          className="absolute inset-0 z-20 h-full w-full overflow-visible"
          aria-hidden={!activeEdge}
        >
          <defs>
            <marker
              id="roadmap-arrow"
              markerWidth="8"
              markerHeight="8"
              refX="7"
              refY="4"
              orient="auto"
            >
              <path
                d="M0,0 L8,4 L0,8 Z"
                fill="var(--brand-primary)"
                fillOpacity="0.7"
              />
            </marker>
            <marker
              id="roadmap-arrow-active"
              markerWidth="8"
              markerHeight="8"
              refX="7"
              refY="4"
              orient="auto"
            >
              <path d="M0,0 L8,4 L0,8 Z" fill="var(--brand-primary)" />
            </marker>
          </defs>
          {edgePaths.map((edge) => {
            const active = activeEdgeKey === edge.key;
            const faded = connectedIds && !active;

            return (
              <g key={edge.key}>
                <path
                  d={edge.d}
                  fill="none"
                  stroke="transparent"
                  strokeWidth={18}
                  className="cursor-pointer outline-none [outline:none]"
                  style={{ pointerEvents: "stroke" }}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => toggleEdgePopover(edge)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      toggleEdgePopover(edge);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={active}
                  aria-label={`${edge.fromTitle} → ${edge.toTitle}`}
                />
                <path
                  d={edge.d}
                  fill="none"
                  stroke="var(--brand-primary)"
                  strokeWidth={active ? 2.5 : 2}
                  strokeOpacity={faded ? 0.15 : active ? 1 : 0.55}
                  markerEnd={
                    active
                      ? "url(#roadmap-arrow-active)"
                      : "url(#roadmap-arrow)"
                  }
                  style={{ pointerEvents: "none" }}
                />
              </g>
            );
          })}
        </svg>
      </div>

      {activeEdge && popoverCoords && typeof document !== "undefined"
        ? createPortal(
            <>
              <button
                type="button"
                className="fixed inset-0 z-[250] cursor-default bg-black/20"
                aria-label="Close connection details"
                onClick={closeEdgePopover}
              />
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={`roadmap-connection-${activeEdge.key}`}
                style={{ top: popoverCoords.top, left: popoverCoords.left }}
                className="fixed z-[260] w-[min(20rem,calc(100vw-2rem))] rounded-xl border border-[var(--brand-border)] bg-white p-4 shadow-2xl"
              >
                <p className="text-[10px] font-bold tracking-wide text-[var(--brand-muted)] uppercase">
                  {connectionTitle}
                </p>
                <div
                  id={`roadmap-connection-${activeEdge.key}`}
                  className="mt-2 flex flex-wrap items-center gap-2"
                >
                  <Badge variant="black">{activeEdge.from}</Badge>
                  <span className="text-xs text-[var(--brand-muted)]">→</span>
                  <Badge variant="blue">{activeEdge.to}</Badge>
                </div>
                <p className="mt-2 text-sm font-semibold leading-snug text-[var(--brand-fg)]">
                  {activeEdge.fromTitle}
                </p>
                <p className="text-xs text-[var(--brand-muted)]">↓</p>
                <p className="text-sm font-semibold leading-snug text-[var(--brand-fg)]">
                  {activeEdge.toTitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--brand-fg-secondary)]">
                  {activeEdge.qualifier ?? connectionFallback}
                </p>
              </div>
            </>,
            document.body,
          )
        : null}

      {edges.length > 0 && connectionHint ? (
        <p className="mt-3 text-xs text-[var(--brand-muted)]">{connectionHint}</p>
      ) : null}
    </div>
  );
}
