"use client";

import Image from "next/image";
import { useProposal } from "@/components/ProposalProvider";
import { useDeckNavigation } from "@/components/DeckNavigation";
import type { ProposalUnderstandingGrowth } from "@/lib/proposals/types";
import { brand } from "@/lib/brand";
import { ImpactMatrix } from "./ImpactMatrix";
import { KickerPill, HighlightedTitle, SlideTitle } from "./shared";
import { UnderstandingGrowthColumns } from "./UnderstandingGrowthColumns";

function QuoteBlock({ quote, quoteSource }: { quote: string; quoteSource: string }) {
  return (
    <blockquote className="border-l-4 border-[var(--brand-accent)] bg-[var(--brand-accent)]/20 py-4 pr-4 pl-5 sm:pl-6">
      <p className="text-sm leading-relaxed text-[var(--brand-fg)] italic sm:text-base">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-3 text-xs font-medium text-[var(--brand-muted)]">
        {quoteSource}
      </footer>
    </blockquote>
  );
}

function ProjectCards({
  projects,
}: {
  projects: readonly { title: string; description: string; investment: string; slideIndex?: number }[];
}) {
  const { goToSlide } = useDeckNavigation();

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {projects.map((p, i) => {
        const isClickable = p.slideIndex !== undefined;
        const Wrapper = isClickable ? "button" : "div";
        return (
          <Wrapper
            key={i}
            {...(isClickable
              ? {
                  type: "button" as const,
                  onClick: () => goToSlide(p.slideIndex!),
                }
              : {})}
            className={`flex flex-col gap-2 rounded-xl border border-[var(--brand-border)] bg-white p-4 text-left transition ${
              isClickable
                ? "cursor-pointer hover:border-[var(--brand-primary)]/50 hover:shadow-sm"
                : ""
            }`}
          >
            <p className="text-[10px] font-bold tracking-widest text-[var(--brand-primary)] uppercase">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="text-sm font-semibold leading-snug text-[var(--brand-fg)]">{p.title}</p>
            <p className="flex-1 text-xs leading-relaxed text-[var(--brand-muted)]">
              {p.description}
            </p>
            <div className="mt-1 flex items-center justify-between gap-2">
              <p className="font-mono text-xs font-bold text-[var(--brand-primary)]">
                {p.investment}
              </p>
              {isClickable && (
                <span className="text-[10px] font-medium text-[var(--brand-muted)] group-hover:text-[var(--brand-primary)]">
                  Open →
                </span>
              )}
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
}

function CombinedDebriefSlide({
  kicker,
  clientName,
  clientTitle,
  debrief,
  understanding,
}: {
  kicker: string;
  clientName: string;
  clientTitle: string;
  debrief: {
    quote: string;
    quoteSource: string;
    summary?: string;
    focusAreas: string;
    heroGif?: string;
  };
  understanding: {
    kicker: string;
    title: string;
    subtitle: string;
    growth: ProposalUnderstandingGrowth;
  };
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-stretch gap-4 sm:gap-6">
        <div className="min-w-0 flex-1">
          <SlideTitle
            kicker={kicker}
            title={`${clientName} ${clientTitle}`}
            subtitle={debrief.summary}
            compact
          />

          <p className="text-xs text-[var(--brand-muted)] sm:text-sm">
            {debrief.focusAreas}
          </p>
        </div>
        {debrief.heroGif ? (
          <div className="relative hidden shrink-0 self-center sm:block">
            <img
              src={debrief.heroGif}
              alt=""
              className="block h-auto max-h-44 w-auto rounded-lg object-contain sm:max-h-52 md:max-h-60"
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-lg bg-[var(--brand-bg)]/30"
              aria-hidden
            />
          </div>
        ) : null}
      </div>

      <div className="border-t border-[var(--brand-border)] pt-6">
        <SlideTitle
          kicker={understanding.kicker}
          title={understanding.title}
          subtitle={understanding.subtitle}
          compact
        />
        <UnderstandingGrowthColumns growth={understanding.growth} />
        <div className="mt-5">
          <QuoteBlock quote={debrief.quote} quoteSource={debrief.quoteSource} />
        </div>
      </div>
    </div>
  );
}

export function SlideDebrief() {
  const { meta, debrief, impactMatrix, understanding, slideCopy, debriefVariant } =
    useProposal();
  const kicker = slideCopy?.debriefKicker ?? "Discovery debrief";

  if (
    debriefVariant === "combined" &&
    understanding?.layout === "growth" &&
    understanding.growth
  ) {
    return (
      <CombinedDebriefSlide
        kicker={kicker}
        clientName={meta.clientName}
        clientTitle={meta.title}
        debrief={debrief}
        understanding={{
          kicker: understanding.kicker,
          title: understanding.title,
          subtitle: understanding.subtitle,
          growth: understanding.growth,
        }}
      />
    );
  }

  if (impactMatrix) {
    return (
      <div className="grid items-start gap-5 py-1 sm:gap-6 sm:py-2 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col gap-4">
          <SlideTitle
            kicker={kicker}
            title={meta.clientName}
            subtitle={meta.title}
            compact
          />

          <QuoteBlock quote={debrief.quote} quoteSource={debrief.quoteSource} />

          {debrief.summary && (
            <p className="text-sm leading-relaxed text-[var(--brand-fg-secondary)] sm:text-base">
              {debrief.summary}
            </p>
          )}

          <p className="text-xs text-[var(--brand-muted)] sm:text-sm">{debrief.focusAreas}</p>
        </div>

        <ImpactMatrix data={impactMatrix} />
      </div>
    );
  }

  return (
    <div className="flex min-h-[min(70vh,640px)] flex-col justify-between py-2 sm:py-4">
      {/* Header bar: blablabuild logo left, client logo right */}
      <div className="flex items-center justify-between">
        <Image
          src={brand.logo}
          alt={brand.name}
          width={brand.logoWidth}
          height={brand.logoHeight}
          priority
          className="h-7 w-auto sm:h-8"
        />
        {meta.clientLogo && (
          <Image
            src={meta.clientLogo}
            alt={meta.clientName}
            width={160}
            height={40}
            className="h-7 w-auto sm:h-9"
          />
        )}
      </div>

      {/* Hero block */}
      <div className="mt-8 sm:mt-10">
        <KickerPill>{kicker}</KickerPill>

        <div className="mt-5 overflow-hidden rounded-2xl bg-[var(--brand-primary)] px-6 py-7 sm:px-8 sm:py-8">
          <p className="text-xs font-bold tracking-widest text-[var(--brand-accent)] uppercase">
            {meta.clientName}
          </p>
          <h1 className="mt-3 text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
            <HighlightedTitle text={meta.title} variant="on-dark" />
          </h1>
          <p className="mt-3 text-sm text-white/70 sm:text-base">{meta.subtitle}</p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {debrief.projects ? (
          <ProjectCards projects={debrief.projects} />
        ) : (
          <QuoteBlock quote={debrief.quote} quoteSource={debrief.quoteSource} />
        )}

        {debrief.summary && (
          <p className="max-w-2xl text-sm leading-relaxed text-[var(--brand-fg-secondary)] sm:text-base">
            {debrief.summary}
          </p>
        )}

        {!debrief.projects && (
          <p className="text-xs text-[var(--brand-muted)] sm:text-sm">{debrief.focusAreas}</p>
        )}
      </div>

      <p className="mt-8 text-xs text-[var(--brand-muted-light)]">
        {debrief.date} · {brand.footerCredit}
      </p>
    </div>
  );
}
