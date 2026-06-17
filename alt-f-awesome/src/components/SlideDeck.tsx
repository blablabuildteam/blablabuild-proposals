"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  DeckNavigationProvider,
  useDeckNavigation,
} from "@/components/DeckNavigation";
import { useProposal } from "@/components/ProposalProvider";
import { brand } from "@/lib/brand";
import { SlideDebrief } from "./slides/SlideDebrief";
import { SlideUnderstanding } from "./slides/SlideUnderstanding";
import { SlideWayOfWorking } from "./slides/SlideWayOfWorking";
import { SlideApproach } from "./slides/SlideApproach";
import { SlidePhaseNow } from "./slides/SlidePhaseNow";
import { SlidePhaseNext } from "./slides/SlidePhaseNext";
import { SlidePhaseNear } from "./slides/SlidePhaseNear";
import { SlideWorkflows } from "./slides/SlideWorkflows";
import { SlidePrioritization } from "./slides/SlidePrioritization";
import { SlideInvestment } from "./slides/SlideInvestment";
import { SlideNextSteps } from "./slides/SlideNextSteps";
import { SlideWorkflowUseCase } from "./slides/SlideWorkflowUseCase";

const slides = [
  SlideDebrief,
  SlideUnderstanding,
  SlideWayOfWorking,
  SlideApproach,
  SlidePhaseNow,
  SlidePhaseNext,
  SlidePhaseNear,
  SlideWorkflows,
  SlidePrioritization,
  SlideInvestment,
  SlideNextSteps,
] as const;

const SWIPE_THRESHOLD = 50;

export function SlideDeck() {
  return (
    <DeckNavigationProvider>
      <SlideDeckInner />
    </DeckNavigationProvider>
  );
}

function SlideDeckInner() {
  const { slideLabels, meta, getWorkflow } = useProposal();
  const { workflowDetailId, closeWorkflow } = useDeckNavigation();
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const mainRef = useRef<HTMLElement>(null);
  const total = slides.length;
  const Slide = slides[index];
  const detailWorkflow = workflowDetailId
    ? getWorkflow(workflowDetailId)
    : undefined;
  const progress = ((index + 1) / total) * 100;

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: "auto" });
  }, [index, workflowDetailId]);

  const go = useCallback(
    (delta: number) => {
      closeWorkflow();
      setIndex((i) => Math.max(0, Math.min(total - 1, i + delta)));
    },
    [total, closeWorkflow],
  );

  const goToSlide = useCallback(
    (i: number) => {
      closeWorkflow();
      setIndex(i);
    },
    [closeWorkflow],
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && workflowDetailId) {
        e.preventDefault();
        closeWorkflow();
        return;
      }
      if (workflowDetailId) return;

      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(1);
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(-1);
      }
      if (e.key === "Home") setIndex(0);
      if (e.key === "End") setIndex(total - 1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, total, workflowDetailId, closeWorkflow]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (workflowDetailId) return;
    if (!touchStart.current) return;
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
    go(dx < 0 ? 1 : -1);
  };

  return (
    <div className="deck-root flex h-dvh min-h-dvh flex-col bg-[var(--brand-bg)] text-[var(--brand-fg)]">
      <div
        className="h-1 shrink-0 bg-[var(--brand-border)]"
        role="progressbar"
        aria-valuenow={index + 1}
        aria-valuemin={1}
        aria-valuemax={total}
      >
        <div
          className="h-full bg-[var(--brand-accent)] transition-[width] duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header className="flex shrink-0 items-center justify-between gap-3 border-b border-[var(--brand-border)] bg-white px-4 py-2.5 sm:px-6 sm:py-3">
        <div className="flex min-w-0 items-center gap-2 sm:gap-4">
          <Image
            src={brand.logo}
            alt={brand.name}
            width={brand.logoWidth}
            height={brand.logoHeight}
            className="h-5 w-auto shrink-0 sm:h-6"
          />
          <span className="hidden text-[var(--brand-border)] sm:inline">|</span>
          <span className="hidden truncate text-sm text-[var(--brand-muted)] sm:inline">
            {meta.clientName}
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <button
            type="button"
            onClick={async () => {
              await fetch("/api/logout", { method: "POST" });
              router.push("/");
              router.refresh();
            }}
            className="hidden text-xs text-[var(--brand-muted)] underline-offset-2 hover:text-[var(--brand-fg)] hover:underline sm:inline"
          >
            Exit
          </button>
          <span className="max-w-[9rem] truncate text-xs text-[var(--brand-muted)] sm:max-w-none sm:text-sm md:hidden">
            {workflowDetailId
              ? detailWorkflow?.title ?? "Use case"
              : slideLabels[index]}
          </span>
          <span className="hidden text-sm text-[var(--brand-muted)] md:inline">
            {workflowDetailId
              ? `${detailWorkflow?.id ?? ""} · ${detailWorkflow?.title ?? "Use case"}`
              : slideLabels[index]}
          </span>
          <span className="rounded-full bg-[var(--brand-fg)] px-2.5 py-0.5 font-mono text-[10px] text-white sm:px-3 sm:py-1 sm:text-xs">
            {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
          </span>
        </div>
      </header>

      <main
        ref={mainRef}
        className="relative min-h-0 flex-1 overflow-hidden touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          key={workflowDetailId ?? index}
          className="slide-enter absolute inset-0 overflow-y-auto overscroll-contain bg-[var(--brand-bg)] px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-12"
        >
          <div className="mx-auto flex min-h-full max-w-5xl flex-col justify-start pb-4 md:justify-center md:pb-0">
            {detailWorkflow ? (
              <SlideWorkflowUseCase
                wf={detailWorkflow}
                onBack={closeWorkflow}
              />
            ) : (
              <Slide />
            )}
          </div>
        </div>
      </main>

      <footer className="deck-footer shrink-0 border-t border-[var(--brand-border)] bg-white">
        <div className="flex flex-col gap-2 px-4 py-2.5 sm:hidden">
          <div
            className="flex items-center justify-center gap-1.5"
            role="tablist"
            aria-label="Slides"
          >
            {slideLabels.map((label, i) => (
              <button
                key={label}
                type="button"
                onClick={() => goToSlide(i)}
                aria-label={label}
                aria-current={i === index ? "step" : undefined}
                className={`h-2 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-[var(--brand-primary)]"
                    : "w-2 bg-[var(--brand-border)] hover:bg-[var(--brand-accent)]"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={index === 0 || !!workflowDetailId}
              className="flex-1 rounded-full border border-[var(--brand-border)] py-2.5 text-sm font-medium disabled:opacity-30"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              disabled={index === total - 1 || !!workflowDetailId}
              className="flex-1 rounded-full bg-[var(--brand-accent)] py-2.5 text-sm font-bold text-[var(--brand-fg)] disabled:opacity-30"
            >
              Next
            </button>
          </div>
        </div>

        <div className="hidden items-center gap-2 px-4 py-3 sm:flex">
          <nav className="flex min-w-0 flex-1 gap-1 overflow-x-auto">
            {slideLabels.map((label, i) => (
              <button
                key={label}
                type="button"
                onClick={() => goToSlide(i)}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  i === index
                    ? "bg-[var(--brand-primary)] text-white"
                    : "text-[var(--brand-muted)] hover:bg-[var(--brand-bg)] hover:text-[var(--brand-fg)]"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={index === 0 || !!workflowDetailId}
              className="rounded-full border border-[var(--brand-border)] bg-white px-4 py-2 text-sm font-medium transition hover:border-[var(--brand-fg)] disabled:opacity-30"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              disabled={index === total - 1 || !!workflowDetailId}
              className="rounded-full bg-[var(--brand-accent)] px-4 py-2 text-sm font-bold text-[var(--brand-fg)] transition hover:bg-[var(--brand-accent-hover)] disabled:opacity-30"
            >
              →
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
