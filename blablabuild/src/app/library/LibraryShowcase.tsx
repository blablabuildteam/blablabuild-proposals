"use client";

import { useMemo, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { DeckNavigationProvider } from "@/components/DeckNavigation";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ProposalProvider, useProposalLocale } from "@/components/ProposalProvider";
import {
  PROPOSAL_OVERLAYS,
  PROPOSAL_SECTIONS,
  SECTION_CATEGORIES,
  SlideThemeProvider,
} from "@/components/proposal-library";
import type { ProposalSectionCategory } from "@/components/proposal-library";
import type { ProposalLocale } from "@/lib/proposals/locale";
import type { SlideVariant } from "@/lib/types";
import type { ProposalBundle } from "@/lib/proposals/types";

function LibraryHeader() {
  const { locale, setLocale } = useProposalLocale();
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-3">
        <BrandLogo className="h-5 w-auto shrink-0 sm:h-6" />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">
            Proposal Component Library
          </p>
          <p className="truncate text-xs text-[var(--brand-muted)]">
            {PROPOSAL_SECTIONS.length} secties · {PROPOSAL_OVERLAYS.length}{" "}
            overlay · ABCapital preview data
          </p>
        </div>
      </div>
      <LanguageToggle locale={locale} onChange={setLocale} />
    </div>
  );
}

export function LibraryShowcase({
  bundles,
}: {
  bundles: Record<ProposalLocale, ProposalBundle>;
}) {
  const [activeCategory, setActiveCategory] = useState<
    ProposalSectionCategory | "all"
  >("all");

  const filteredSections = useMemo(
    () =>
      activeCategory === "all"
        ? PROPOSAL_SECTIONS
        : PROPOSAL_SECTIONS.filter(
            (section) => section.category === activeCategory,
          ),
    [activeCategory],
  );

  return (
    <ProposalProvider bundles={bundles}>
      <DeckNavigationProvider>
        <div className="min-h-dvh bg-[var(--brand-bg)] text-[var(--brand-fg)]">
          <header className="sticky top-0 z-30 border-b border-[var(--brand-border)] bg-white/95 backdrop-blur-sm">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 sm:py-5">
              <LibraryHeader />

              <nav className="flex flex-wrap gap-1.5">
                <CategoryFilter
                  active={activeCategory === "all"}
                  onClick={() => setActiveCategory("all")}
                >
                  Alles
                </CategoryFilter>
                {(
                  Object.entries(SECTION_CATEGORIES) as [
                    ProposalSectionCategory,
                    string,
                  ][]
                ).map(([id, label]) => (
                  <CategoryFilter
                    key={id}
                    active={activeCategory === id}
                    onClick={() => setActiveCategory(id)}
                  >
                    {label}
                  </CategoryFilter>
                ))}
              </nav>
            </div>
          </header>

          <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 sm:py-10">
            {filteredSections.map((section) => (
              <SectionPreview
                key={section.id}
                id={section.id}
                name={section.name}
                description={section.description}
                category={SECTION_CATEGORIES[section.category]}
                defaultVariant={section.defaultVariant}
                component={section.component}
              />
            ))}

            <section className="rounded-2xl border border-dashed border-[var(--brand-border)] bg-white p-5 sm:p-6">
              <p className="text-xs font-bold tracking-wide text-[var(--brand-muted)] uppercase">
                Overlays
              </p>
              <h2 className="mt-1 text-xl font-semibold">Workflow Use Case</h2>
              <p className="mt-1 max-w-2xl text-sm text-[var(--brand-muted)]">
                {PROPOSAL_OVERLAYS[0].description} Opent boven de deck via
                workflow-kaarten; niet onderdeel van de slide-navigatie.
              </p>
            </section>
          </main>
        </div>
      </DeckNavigationProvider>
    </ProposalProvider>
  );
}

function CategoryFilter({
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
      className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
        active
          ? "bg-[var(--brand-primary)] text-white"
          : "bg-[var(--brand-bg)] text-[var(--brand-muted)] hover:text-[var(--brand-fg)]"
      }`}
    >
      {children}
    </button>
  );
}

function SectionPreview({
  id,
  name,
  description,
  category,
  defaultVariant,
  component: Component,
}: {
  id: string;
  name: string;
  description: string;
  category: string;
  defaultVariant: SlideVariant;
  component: React.ComponentType;
}) {
  const [variant, setVariant] = useState<SlideVariant>(defaultVariant);
  const isBlue = variant === "blue";

  return (
    <section
      id={id}
      className="overflow-hidden rounded-2xl border border-[var(--brand-border)] bg-white shadow-sm"
    >
      <div className="flex flex-col gap-3 border-b border-[var(--brand-border)] px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <code className="rounded bg-[var(--brand-bg)] px-2 py-0.5 font-mono text-[11px] text-[var(--brand-primary)]">
              {id}
            </code>
            <span className="rounded-full bg-[#E8E8E8] px-2.5 py-0.5 text-[10px] font-semibold text-[var(--brand-muted)]">
              {category}
            </span>
          </div>
          <h2 className="mt-2 text-lg font-semibold">{name}</h2>
          <p className="mt-1 max-w-2xl text-sm text-[var(--brand-muted)]">
            {description}
          </p>
        </div>

        <div className="flex shrink-0 gap-1 rounded-full bg-[var(--brand-bg)] p-1">
          <VariantToggle
            active={variant === "light"}
            onClick={() => setVariant("light")}
          >
            Light
          </VariantToggle>
          <VariantToggle
            active={variant === "blue"}
            onClick={() => setVariant("blue")}
          >
            Blue
          </VariantToggle>
        </div>
      </div>

      <div
        className={`${
          isBlue
            ? "bg-[var(--brand-primary)] text-white"
            : "bg-[var(--brand-bg)] text-[var(--brand-fg)]"
        }`}
      >
        <SlideThemeProvider variant={variant}>
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 md:px-12">
            <Component />
          </div>
        </SlideThemeProvider>
      </div>
    </section>
  );
}

function VariantToggle({
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
          ? "bg-white text-[var(--brand-fg)] shadow-sm"
          : "text-[var(--brand-muted)] hover:text-[var(--brand-fg)]"
      }`}
    >
      {children}
    </button>
  );
}
