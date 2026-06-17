"use client";

import Image from "next/image";
import { useProposal } from "@/components/ProposalProvider";
import { brand } from "@/lib/brand";
import { ImpactMatrix } from "./ImpactMatrix";
import { KickerPill, HighlightedTitle, SlideTitle } from "./shared";

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

export function SlideDebrief() {
  const { meta, debrief, impactMatrix, slideCopy } = useProposal();
  const kicker = slideCopy?.debriefKicker ?? "Discovery debrief";

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
      <div>
        <Image
          src={brand.logo}
          alt={brand.name}
          width={brand.logoWidth}
          height={brand.logoHeight}
          priority
          className="h-7 w-auto sm:h-8"
        />

        <div className="mt-10 sm:mt-12">
          <KickerPill>{kicker}</KickerPill>
        </div>

        <h1 className="mt-4 text-3xl tracking-tight text-[var(--brand-fg)] sm:mt-5 sm:text-4xl md:text-5xl">
          {meta.clientName}
        </h1>
        <p className="mt-2 max-w-xl text-xl text-[var(--brand-fg)] sm:text-2xl">
          <HighlightedTitle text={meta.title} variant="light" />
        </p>
        <p className="mt-2 text-sm text-[var(--brand-muted)] sm:text-base">{meta.subtitle}</p>
      </div>

      <div className="mt-8 space-y-4 sm:mt-10">
        <QuoteBlock quote={debrief.quote} quoteSource={debrief.quoteSource} />

        {debrief.summary && (
          <p className="max-w-2xl text-sm leading-relaxed text-[var(--brand-fg-secondary)] sm:text-base">
            {debrief.summary}
          </p>
        )}

        <p className="text-xs text-[var(--brand-muted)] sm:text-sm">{debrief.focusAreas}</p>
      </div>

      <p className="mt-8 text-xs text-[var(--brand-muted-light)]">
        {debrief.date} · {brand.footerCredit}
      </p>
    </div>
  );
}
