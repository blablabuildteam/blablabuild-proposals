"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  DeckNavigationProvider,
  useDeckNavigation,
} from "@/components/DeckNavigation";
import { BrandLogo } from "./BrandLogo";
import { LanguageToggle } from "./LanguageToggle";
import { useProposal, useProposalLocale } from "@/components/ProposalProvider";
import { useProposalUi } from "@/lib/proposals/use-proposal-ui";
import { resolveSlideComponents } from "@/components/proposal-library";
import { SlideWorkflowUseCase } from "./slides/SlideWorkflowUseCase";
import { SlideThemeProvider } from "./slides/SlideTheme";

const SWIPE_THRESHOLD = 50;

export function SlideDeck() {
  return (
    <DeckNavigationProvider>
      <SlideDeckInner />
    </DeckNavigationProvider>
  );
}

function SlideDeckInner() {
  const { slideLabels, meta, getWorkflow, slideConfigs } = useProposal();
  const { locale, setLocale } = useProposalLocale();
  const ui = useProposalUi();
  const { workflowDetailId, closeWorkflow } = useDeckNavigation();
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const mainRef = useRef<HTMLElement>(null);
  const slides = resolveSlideComponents(
    slideConfigs.map((config) => config.sectionId),
  );
  const total = slides.length;
  const Slide = slides[index];
  const detailWorkflow = workflowDetailId
    ? getWorkflow(workflowDetailId)
    : undefined;
  const variant = slideConfigs[index]?.variant ?? "light";
  const isBlue = variant === "blue";
  const slideAnimClass =
    variant === "blue"
      ? "slide-enter-blue"
      : direction > 0
        ? "slide-enter-forward"
        : "slide-enter-back";

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: "auto" });
  }, [index, workflowDetailId]);

  const go = useCallback(
    (delta: number) => {
      closeWorkflow();
      setDirection(delta > 0 ? 1 : -1);
      setIndex((i) => Math.max(0, Math.min(total - 1, i + delta)));
    },
    [total, closeWorkflow],
  );

  const goToSlide = useCallback(
    (i: number) => {
      closeWorkflow();
      setDirection(i >= index ? 1 : -1);
      setIndex(i);
    },
    [closeWorkflow, index],
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
    <div
      className={`deck-root deck-chrome flex h-dvh min-h-dvh flex-col ${
        isBlue
          ? "bg-[var(--brand-primary)] text-white"
          : "bg-[var(--brand-bg)] text-[var(--brand-fg)]"
      }`}
    >
      <header
        className={`deck-chrome flex shrink-0 items-center justify-between gap-3 border-b px-4 py-3 sm:px-6 sm:py-4 ${
          isBlue
            ? "border-white/15 bg-[var(--brand-primary)]"
            : "border-[var(--brand-border)] bg-white"
        }`}
      >
        <div className="flex min-w-0 items-center gap-2 sm:gap-4">
          <BrandLogo
            variant={isBlue ? "on-dark" : "default"}
            className="h-5 w-auto shrink-0 transition-[color] duration-500 sm:h-6"
          />
          <span
            className={`hidden sm:inline ${
              isBlue ? "text-white/25" : "text-[var(--brand-border)]"
            }`}
          >
            |
          </span>
          {meta.clientLogo ? (
            <Image
              src={meta.clientLogo}
              alt={meta.clientName}
              width={28}
              height={28}
              className="hidden h-7 w-7 shrink-0 rounded sm:block"
            />
          ) : (
            <span
              className={`hidden truncate text-sm sm:inline ${
                isBlue ? "text-white/70" : "text-[var(--brand-muted)]"
              }`}
            >
              {meta.clientName}
            </span>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <LanguageToggle
            locale={locale}
            onChange={setLocale}
            variant={isBlue ? "on-dark" : "light"}
          />
          <span
            className={`max-w-[9rem] truncate text-xs sm:max-w-none sm:text-sm md:hidden ${
              isBlue ? "text-white/75" : "text-[var(--brand-muted)]"
            }`}
          >
            {workflowDetailId
              ? detailWorkflow?.title ?? ui.useCaseFallback
              : slideLabels[index]}
          </span>
          <span
            className={`hidden text-sm md:inline ${
              isBlue ? "text-white/75" : "text-[var(--brand-muted)]"
            }`}
          >
            {workflowDetailId
              ? `${detailWorkflow?.id ?? ""} · ${detailWorkflow?.title ?? ui.useCaseFallback}`
              : slideLabels[index]}
          </span>
          <span
            className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium sm:px-3 sm:py-1 sm:text-xs ${
              isBlue
                ? "bg-white/15 text-white"
                : "bg-[var(--brand-fg)] text-white"
            }`}
          >
            {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={async () => {
              await fetch("/api/logout", { method: "POST" });
              router.push("/");
              router.refresh();
            }}
            aria-label={ui.exit}
            className={`flex shrink-0 items-center justify-center rounded-md p-1 transition-colors ${
              isBlue
                ? "text-white/60 hover:bg-white/10 hover:text-white"
                : "text-[var(--brand-muted)] hover:bg-[var(--brand-bg)] hover:text-[var(--brand-fg)]"
            }`}
          >
            <X className="size-6" strokeWidth={1.75} />
          </button>
        </div>
      </header>

      <div
        className={`deck-chrome shrink-0 border-b px-4 py-2 text-center text-xs sm:hidden ${
          isBlue
            ? "border-white/15 bg-[var(--brand-primary)] text-white/80"
            : "border-[var(--brand-border)] bg-[var(--brand-bg)] text-[var(--brand-muted)]"
        }`}
      >
        <span className={isBlue ? "text-white/55" : "text-[var(--brand-muted)]"}>
          {ui.proposalFor}
        </span>{" "}
        <span
          className={`font-medium ${
            isBlue ? "text-white" : "text-[var(--brand-fg)]"
          }`}
        >
          {meta.clientName}
        </span>
      </div>

      <main
        ref={mainRef}
        className="relative min-h-0 flex-1 overflow-hidden touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={`deck-bg-layer pointer-events-none absolute inset-0 ${
            isBlue ? "bg-[var(--brand-primary)]" : "bg-[var(--brand-bg)]"
          }`}
          aria-hidden
        />

        {!workflowDetailId && (
          <div
            key={index}
            className={`${slideAnimClass} absolute inset-0 overflow-y-auto overscroll-contain bg-transparent px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-12`}
          >
            <SlideThemeProvider variant={variant}>
              <div className="mx-auto flex min-h-full max-w-6xl flex-col justify-start pb-4 md:justify-center md:pb-0">
                <Slide />
              </div>
            </SlideThemeProvider>
          </div>
        )}

        {detailWorkflow && (
          <div
            key={detailWorkflow.id}
            className="slide-enter-forward absolute inset-0 z-20 overflow-y-auto overscroll-contain bg-[var(--brand-bg)] px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-12"
          >
            <div className="mx-auto flex min-h-full max-w-6xl flex-col justify-start pb-4 md:justify-center md:pb-0">
              <SlideWorkflowUseCase
                wf={detailWorkflow}
                onBack={closeWorkflow}
              />
            </div>
          </div>
        )}
      </main>

      <footer
        className={`deck-chrome deck-footer shrink-0 border-t ${
          isBlue
            ? "border-white/15 bg-[var(--brand-primary)]"
            : "border-[var(--brand-border)] bg-white"
        } ${workflowDetailId ? "hidden sm:block" : ""}`}
      >
        <div className="flex flex-col gap-2 px-4 py-3 sm:hidden">
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
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? isBlue
                      ? "w-6 bg-[var(--brand-accent)]"
                      : "w-6 bg-[var(--brand-primary)]"
                    : isBlue
                      ? "w-2 bg-white/25 hover:bg-white/40"
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
              className={`flex-1 rounded-full border py-2.5 text-sm font-medium disabled:opacity-30 ${
                isBlue
                  ? "border-white/25 text-white hover:bg-white/10"
                  : "border-[var(--brand-border)]"
              }`}
            >
              <span className="inline-flex items-center justify-center gap-1.5">
                <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
                {ui.previous}
              </span>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              disabled={index === total - 1 || !!workflowDetailId}
              className="flex-1 rounded-full bg-[var(--brand-accent)] py-2.5 text-sm font-bold text-[var(--brand-fg)] disabled:opacity-30"
            >
              <span className="inline-flex items-center justify-center gap-1.5">
                {ui.next}
                <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
              </span>
            </button>
          </div>
        </div>

        <div className="hidden items-center gap-2 px-4 py-4 sm:flex">
          <nav className="flex min-w-0 flex-1 gap-1 overflow-x-auto">
            {slideLabels.map((label, i) => (
              <button
                key={label}
                type="button"
                onClick={() => goToSlide(i)}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-300 ${
                  i === index
                    ? isBlue
                      ? "bg-[var(--brand-accent)] text-[var(--brand-fg)]"
                      : "bg-[var(--brand-primary)] text-white"
                    : isBlue
                      ? "text-white/55 hover:bg-white/10 hover:text-white"
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
              aria-label={ui.previous}
              className={`inline-flex items-center justify-center rounded-full border px-4 py-2 transition disabled:opacity-30 ${
                isBlue
                  ? "border-white/25 bg-white/10 text-white hover:bg-white/15"
                  : "border-[var(--brand-border)] bg-white hover:border-[var(--brand-fg)]"
              }`}
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              disabled={index === total - 1 || !!workflowDetailId}
              aria-label={ui.next}
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-accent)] px-4 py-2 text-[var(--brand-fg)] transition hover:bg-[var(--brand-accent-hover)] disabled:opacity-30"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
