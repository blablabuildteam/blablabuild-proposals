"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { useSlideTheme } from "./SlideTheme";

type TitleVariant = "light" | "on-dark" | "auto";

function parseHighlightedTitle(text: string) {
  const parts: { text: string; highlight: boolean }[] = [];
  const regex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ text: text.slice(lastIndex, match.index), highlight: false });
    }
    parts.push({ text: match[1], highlight: true });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex), highlight: false });
  }

  return parts.length > 0 ? parts : [{ text, highlight: false }];
}

export function HighlightedTitle({
  text,
  variant = "auto",
}: {
  text: string;
  variant?: TitleVariant;
}) {
  const theme = useSlideTheme();
  const resolved =
    variant === "auto" ? (theme === "blue" ? "on-dark" : "light") : variant;
  const highlightClass =
    resolved === "on-dark"
      ? "font-bold text-[var(--brand-accent)]"
      : "font-bold text-[var(--brand-primary)]";

  return (
    <>
      {parseHighlightedTitle(text).map((part, index) =>
        part.highlight ? (
          <span key={index} className={highlightClass}>
            {part.text}
          </span>
        ) : (
          <span key={index}>{part.text}</span>
        ),
      )}
    </>
  );
}

export function KickerPill({
  children,
  variant = "light",
}: {
  children: ReactNode;
  variant?: "light" | "on-dark";
}) {
  const styles = {
    light: "bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]",
    "on-dark": "bg-white text-[var(--brand-primary)] shadow-sm",
  };

  return (
    <span
      className={`inline-flex w-fit items-center rounded-[var(--brand-radius-pill)] px-3.5 py-1 text-xs font-semibold leading-none sm:px-4 sm:py-1.5 sm:text-[13px] ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

export function SlideTitle({
  kicker,
  title,
  subtitle,
  compact,
  dense,
  balanced,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  compact?: boolean;
  dense?: boolean;
  balanced?: boolean;
}) {
  const theme = useSlideTheme();
  const isBlue = theme === "blue";
  const tight = dense && !balanced;

  return (
    <div
      className={
        compact || balanced
          ? tight
            ? "mb-3 space-y-1 sm:mb-4"
            : "mb-4 space-y-1.5 sm:mb-5"
          : "mb-6 space-y-2 sm:mb-8 sm:space-y-3 md:mb-10 md:space-y-4"
      }
    >
      {kicker && (
        <div className={compact || balanced ? "mb-2 sm:mb-3" : "mb-3 sm:mb-4"}>
          {isBlue ? (
            <KickerPill variant="on-dark">{kicker}</KickerPill>
          ) : (
            <KickerPill>{kicker}</KickerPill>
          )}
        </div>
      )}
      <h1
        className={`max-w-3xl leading-[1.15] tracking-tight ${
          tight
            ? "text-xl sm:text-2xl md:text-[2rem] md:leading-[1.1]"
            : balanced
              ? "text-2xl sm:text-[1.75rem] md:text-[2.25rem] md:leading-[1.1]"
              : "text-2xl sm:text-3xl md:text-[2.75rem] md:leading-[1.1]"
        } ${isBlue ? "text-white" : "text-[var(--brand-fg)]"}`}
      >
        <HighlightedTitle text={title} />
      </h1>
      {subtitle && (
        <p
          className={`max-w-2xl leading-relaxed ${
            tight
              ? "text-xs sm:text-sm"
              : balanced
                ? "text-sm md:text-[0.95rem]"
                : "text-sm sm:text-base md:text-lg"
          } ${isBlue ? "text-white/80" : "text-[var(--brand-muted)]"}`}
        >
          <HighlightedTitle text={subtitle} />
        </p>
      )}
    </div>
  );
}

export function HeroBand({
  kicker,
  title,
  subtitle,
  children,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <div className="-mx-4 -mt-6 mb-6 rounded-none bg-[var(--brand-primary)] px-4 py-8 sm:-mx-6 sm:-mt-8 sm:mb-8 sm:px-8 sm:py-10 md:-mx-12 md:-mt-12 md:px-12 md:py-12">
      {kicker && <KickerPill variant="on-dark">{kicker}</KickerPill>}
      <h1 className="mt-4 max-w-3xl text-2xl leading-[1.1] text-white sm:mt-5 sm:text-4xl md:text-5xl">
        <HighlightedTitle text={title} variant="on-dark" />
      </h1>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
          {subtitle}
        </p>
      )}
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}

export function SlideGrid({
  children,
  cols = 2,
}: {
  children: ReactNode;
  cols?: 2 | 3 | 4;
}) {
  const colClass =
    cols === 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : cols === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2";
  return (
    <div className={`grid grid-cols-1 gap-3 sm:gap-4 ${colClass}`}>
      {children}
    </div>
  );
}

export function StatCard({
  label,
  value,
  hint,
  variant = "default",
  compact,
}: {
  label: string;
  value: string;
  hint?: string;
  variant?: "default" | "lime" | "blue" | "dark";
  compact?: boolean;
}) {
  const bg =
    variant === "lime"
      ? "bg-[var(--brand-accent)] border-[var(--brand-accent)]"
      : variant === "blue"
        ? "bg-[var(--brand-primary)] text-white border-[var(--brand-primary)]"
        : variant === "dark"
          ? "bg-[var(--brand-fg)] text-white border-[var(--brand-fg)]"
          : "bg-white border-[var(--brand-border)]";

  const labelColor =
    variant === "blue" || variant === "dark"
      ? "text-white/70"
      : "text-[var(--brand-muted)]";
  const valueColor =
    variant === "blue" || variant === "dark" ? "text-white" : "text-[var(--brand-fg)]";
  const hintColor =
    variant === "blue" || variant === "dark"
      ? "text-white/75"
      : "text-[var(--brand-muted)]";

  return (
    <div
      className={`rounded-xl border ${
        compact ? "p-3 lg:p-4 xl:p-5" : "p-4 sm:p-5"
      } ${bg}`}
    >
      <p
        className={`font-medium tracking-wide uppercase ${
          compact
            ? "text-[9px] leading-tight lg:text-[10px] xl:text-xs"
            : "text-[10px] sm:text-xs"
        } ${labelColor}`}
      >
        {label}
      </p>
      <p
        className={`font-bold ${
          compact
            ? "mt-1 text-lg lg:mt-1.5 lg:text-xl xl:mt-2 xl:text-2xl"
            : "mt-1.5 text-xl sm:mt-2 sm:text-2xl"
        } ${valueColor}`}
      >
        {value}
      </p>
      {hint && (
        <p
          className={`${
            compact
              ? "mt-1 text-[10px] leading-snug lg:mt-1.5 lg:text-xs xl:mt-2 xl:text-sm"
              : "mt-1.5 text-xs sm:mt-2 sm:text-sm"
          } ${hintColor}`}
        >
          {hint}
        </p>
      )}
    </div>
  );
}

export function Callout({
  tone = "lime",
  title,
  children,
}: {
  tone?: "lime" | "blue" | "neutral";
  title?: string;
  children: ReactNode;
}) {
  const styles =
    tone === "lime"
      ? "border-[var(--brand-accent)] bg-[var(--brand-accent)]/25"
      : tone === "blue"
        ? "border-[var(--brand-primary)] bg-[var(--brand-primary)]/8"
        : "border-[var(--brand-border)] bg-white";

  return (
    <div className={`rounded-xl border-2 p-4 sm:p-5 ${styles}`}>
      {title && (
        <p className="mb-2 text-sm font-bold text-[var(--brand-fg)]">{title}</p>
      )}
      <div className="text-sm leading-relaxed text-[var(--brand-fg-secondary)]">{children}</div>
    </div>
  );
}

export function Badge({
  children,
  variant = "neutral",
}: {
  children: ReactNode;
  variant?: "lime" | "blue" | "neutral" | "black" | "glass";
}) {
  const styles = {
    lime: "bg-[var(--brand-accent)] text-[var(--brand-fg)]",
    blue: "bg-[var(--brand-primary)] text-white",
    neutral: "bg-[#E8E8E8] text-[var(--brand-muted)]",
    black: "bg-[var(--brand-fg)] text-white",
    glass: "border border-white/30 bg-white/15 text-white",
  };
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold sm:px-3 sm:py-1 sm:text-xs ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

export function BulletList({
  items,
  onDark,
}: {
  items: string[];
  onDark?: boolean;
}) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-2.5 text-sm sm:gap-3 ${onDark ? "text-white/90" : "text-[var(--brand-fg-secondary)]"}`}
        >
          <span
            className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${onDark ? "bg-[var(--brand-accent)]" : "bg-[var(--brand-primary)]"}`}
          />
          <span className="min-w-0 break-words">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PhaseTimeline({
  phases,
}: {
  phases: ReadonlyArray<{
    num: string;
    label: string;
    period: string;
    invest: string;
    investStandalone?: string;
    headline: string;
    workflows: readonly string[];
    accent?: "lime" | "blue" | "neutral";
  }>;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
      {phases.map((phase, i) => {
        const accent =
          phase.accent ??
          (i === 0 ? "lime" : i === 1 ? "blue" : "neutral");
        const headerBg =
          accent === "lime"
            ? "bg-[var(--brand-accent)]"
            : accent === "blue"
              ? "bg-[var(--brand-primary)] text-white"
              : "bg-[var(--brand-fg)] text-white";
        const headerText =
          accent === "lime" ? "text-[var(--brand-fg)]" : "text-white";
        const headerMuted =
          accent === "lime" ? "text-[var(--brand-fg)]/70" : "text-white/70";

        return (
          <div
            key={phase.label}
            className="flex flex-col overflow-hidden rounded-xl border border-[var(--brand-border)] bg-white"
          >
            <div className={`px-4 py-4 sm:px-5 ${headerBg}`}>
              <p
                className={`font-mono text-3xl font-bold leading-none ${headerText}`}
              >
                {phase.num}
              </p>
              <p
                className={`mt-2 text-[10px] font-bold tracking-wide uppercase sm:text-xs ${headerText}`}
              >
                {phase.label}
              </p>
              <p className={`mt-0.5 text-xs ${headerMuted}`}>{phase.period}</p>
              {phase.investStandalone && (
                <p className={`mt-2 font-mono text-xs line-through ${headerMuted}`}>
                  {phase.investStandalone}
                </p>
              )}
              <p
                className={`${phase.investStandalone ? "mt-0.5" : "mt-2"} font-mono text-sm font-bold ${headerText}`}
              >
                {phase.invest}
              </p>
            </div>
            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <p className="text-sm font-bold text-[var(--brand-fg)]">
                <HighlightedTitle text={phase.headline} />
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {phase.workflows.map((wf) => (
                  <Badge key={wf} variant="neutral">
                    {wf}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function StepFlow({
  steps,
  icons,
  compact,
  comfortable,
  balanced,
}: {
  steps: ReadonlyArray<{ title: string; body: string }>;
  icons?: readonly string[];
  compact?: boolean;
  comfortable?: boolean;
  balanced?: boolean;
}) {
  const theme = useSlideTheme();
  const isBlue = theme === "blue";
  const spacious = comfortable && !compact && !balanced;
  const middle = balanced && !compact && !comfortable;

  return (
    <div
      className={
        compact
          ? "grid gap-4 sm:grid-cols-4 sm:gap-3"
          : middle
            ? "grid gap-5 sm:grid-cols-4 sm:gap-4 md:gap-5"
            : spacious
              ? "grid gap-6 sm:grid-cols-4 sm:gap-5 md:gap-8"
              : "grid gap-6 sm:grid-cols-4 sm:gap-4"
      }
    >
        {steps.map((step, i) => (
          <div key={step.title} className="relative">
            {icons?.[i] ? (
              <Image
                src={icons[i]}
                alt=""
                width={compact ? 112 : middle ? 104 : spacious ? 136 : 80}
                height={compact ? 112 : middle ? 104 : spacious ? 136 : 80}
                className={
                  compact
                    ? "mb-2 h-24 w-auto object-contain drop-shadow-lg sm:h-28"
                    : middle
                      ? "mb-3 h-24 w-auto object-contain drop-shadow-lg md:h-28"
                      : spacious
                        ? "mb-4 h-28 w-auto object-contain drop-shadow-lg md:mb-5 md:h-32"
                        : "mb-3 h-20 w-auto object-contain drop-shadow-lg"
                }
              />
            ) : (
              <div
                className={`mb-3 flex items-center justify-center rounded-full bg-[var(--brand-primary)] font-mono font-bold text-white ${
                  compact ? "h-9 w-9 text-xs" : middle ? "h-10 w-10 text-sm" : spacious ? "h-12 w-12 text-sm" : "h-10 w-10 text-sm"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            )}
            <p
              className={`font-bold ${
                compact ? "text-xs" : middle ? "text-sm" : spacious ? "text-sm md:text-base" : "text-sm"
              } ${
                isBlue ? "text-[var(--brand-accent)]" : "text-[var(--brand-fg)]"
              }`}
            >
              {step.title}
            </p>
            <p
              className={`${
                compact
                  ? "mt-1 text-[11px] leading-snug sm:text-xs"
                  : middle
                    ? "mt-1.5 text-xs leading-relaxed sm:text-sm"
                    : spacious
                      ? "mt-2 text-sm leading-relaxed"
                      : "mt-1.5 text-xs leading-relaxed sm:text-sm"
              } ${
                isBlue ? "text-white/75" : "text-[var(--brand-muted)]"
              }`}
            >
              {step.body}
            </p>
          </div>
        ))}
    </div>
  );
}
