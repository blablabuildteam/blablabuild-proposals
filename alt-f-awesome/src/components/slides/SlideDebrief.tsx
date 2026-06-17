"use client";

import Image from "next/image";
import { useProposal } from "@/components/ProposalProvider";
import { brand } from "@/lib/brand";

export function SlideDebrief() {
  const { meta, debrief } = useProposal();

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

        <p className="mt-10 text-[10px] font-semibold tracking-[0.2em] text-[var(--brand-primary)] uppercase sm:mt-12">
          Discovery debrief
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[var(--brand-fg)] sm:text-4xl md:text-5xl">
          {meta.clientName}
        </h1>
        <p className="mt-2 max-w-xl text-xl font-bold text-[var(--brand-fg)] sm:text-2xl">
          {meta.title}
        </p>
        <p className="mt-2 text-sm text-[var(--brand-muted)] sm:text-base">{meta.subtitle}</p>
      </div>

      <div className="mt-8 space-y-4 sm:mt-10">
        <blockquote className="border-l-4 border-[var(--brand-accent)] bg-[var(--brand-accent)]/20 py-4 pr-4 pl-5 sm:pl-6">
          <p className="text-sm leading-relaxed text-[var(--brand-fg)] italic sm:text-base">
            &ldquo;{debrief.quote}&rdquo;
          </p>
          <footer className="mt-3 text-xs font-medium text-[var(--brand-muted)]">
            {debrief.quoteSource}
          </footer>
        </blockquote>

        <p className="max-w-2xl text-sm leading-relaxed text-[var(--brand-fg-secondary)] sm:text-base">
          {debrief.summary}
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--brand-muted)] sm:text-sm">
          <span>{debrief.focusAreas}</span>
          <span className="hidden text-[var(--brand-border)] sm:inline">·</span>
          <span>{debrief.ecosystem}</span>
        </div>
      </div>

      <p className="mt-8 text-xs text-[var(--brand-muted-light)]">
        {debrief.date} · {brand.footerCredit}
      </p>
    </div>
  );
}
