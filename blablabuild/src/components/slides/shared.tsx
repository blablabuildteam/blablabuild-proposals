import type { ReactNode } from "react";

export function SlideTitle({
  kicker,
  title,
  subtitle,
  compact,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={
        compact
          ? "mb-4 space-y-1 sm:mb-5"
          : "mb-6 space-y-2 sm:mb-8 sm:space-y-3 md:mb-10 md:space-y-4"
      }
    >
      {kicker && (
        <p className="text-[10px] font-semibold tracking-[0.15em] text-[var(--brand-primary)] uppercase sm:text-xs sm:tracking-[0.2em]">
          {kicker}
        </p>
      )}
      <h1 className="max-w-3xl text-2xl leading-[1.15] font-bold tracking-tight text-[var(--brand-fg)] sm:text-3xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h1>
      {subtitle && (
        <p className="max-w-2xl text-sm leading-relaxed text-[var(--brand-muted)] sm:text-base md:text-lg">
          {subtitle}
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
      {kicker && (
        <p className="text-[10px] font-semibold tracking-[0.2em] text-[var(--brand-accent)] uppercase sm:text-xs">
          {kicker}
        </p>
      )}
      <h1 className="mt-2 max-w-3xl text-2xl leading-[1.1] font-bold text-white sm:text-4xl md:text-5xl">
        {title}
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
}: {
  label: string;
  value: string;
  hint?: string;
  variant?: "default" | "lime" | "blue" | "dark";
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
    <div className={`rounded-xl border p-4 sm:p-5 ${bg}`}>
      <p
        className={`text-[10px] font-medium tracking-wide uppercase sm:text-xs ${labelColor}`}
      >
        {label}
      </p>
      <p className={`mt-1.5 text-xl font-bold sm:mt-2 sm:text-2xl ${valueColor}`}>
        {value}
      </p>
      {hint && (
        <p className={`mt-1.5 text-xs sm:mt-2 sm:text-sm ${hintColor}`}>
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
  variant?: "lime" | "blue" | "neutral" | "black";
}) {
  const styles = {
    lime: "bg-[var(--brand-accent)] text-[var(--brand-fg)]",
    blue: "bg-[var(--brand-primary)] text-white",
    neutral: "bg-[#E8E8E8] text-[var(--brand-muted)]",
    black: "bg-[var(--brand-fg)] text-white",
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
              <p
                className={`mt-2 font-mono text-sm font-bold ${headerText}`}
              >
                {phase.invest}
              </p>
            </div>
            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <p className="text-sm font-bold text-[var(--brand-fg)]">
                {phase.headline}
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
}: {
  steps: ReadonlyArray<{ title: string; body: string }>;
}) {
  return (
    <div className="relative">
      <div className="absolute top-5 right-0 left-5 hidden h-0.5 bg-[var(--brand-border)] sm:block" />
      <div className="grid gap-4 sm:grid-cols-4">
        {steps.map((step, i) => (
          <div key={step.title} className="relative">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-primary)] font-mono text-sm font-bold text-white">
              {String(i + 1).padStart(2, "0")}
            </div>
            <p className="text-sm font-bold text-[var(--brand-fg)]">{step.title}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-[var(--brand-muted)] sm:text-sm">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
