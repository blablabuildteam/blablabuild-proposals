import { BLABLABUILD_PROPOSAL_CONFIG } from "@foundation/config";
import { buildProposalContent } from "@foundation/proposal";
import { getProposalSection } from "@/components/proposal-library";
import type { SlideConfig } from "@/lib/types";
import type { ProposalLocale } from "@/lib/proposals/locale";
import { packageSources, phaseSources } from "./phases.source.en";
import { packageSourcesNl, phaseSourcesNl } from "./phases.source.nl";
import { workflowSources } from "./workflows.source.en";
import { workflowSourcesNl } from "./workflows.source.nl";

// Fixed-price projects — no scope buffer needed
const ADSOMNIA_CONFIG = {
  ...BLABLABUILD_PROPOSAL_CONFIG,
  costScopeBuffer: undefined,
} as const;

const ADSOMNIA_SECTIONS = [
  "debrief",
  "phase-now",
  "phase-next",
  "phase-near",
  "investment",
  "next-steps",
] as const;

export const slideConfigs: SlideConfig[] = ADSOMNIA_SECTIONS.map((sectionId) => {
  const section = getProposalSection(sectionId);
  return {
    sectionId,
    label: section.defaultLabel,
    variant: section.defaultVariant,
  };
});

export const slideLabels = slideConfigs.map((s) => s.label);

export function buildAdsomniaData(locale: ProposalLocale = "en") {
  const wfSources = locale === "nl" ? workflowSourcesNl : workflowSources;
  const phSources = locale === "nl" ? phaseSourcesNl : phaseSources;
  const pkgSources = locale === "nl" ? packageSourcesNl : packageSources;

  return buildProposalContent(wfSources, phSources, pkgSources, ADSOMNIA_CONFIG);
}

export const wayOfWorkingEn = [
  {
    title: "Activate, not just inspire",
    body: "We work from your context and teams. Every step leads directly to concrete actions and ownership within Adsomnia — no generic AI narrative.",
  },
  {
    title: "Parallel is fine",
    body: "The three projects can run alongside each other. They reinforce each other but do not wait for each other. You decide the order and the pace.",
  },
  {
    title: "Structure as a foundation",
    body: "AI initiatives succeed or fail on execution. That is why we build the way of working and tooling before we scale.",
  },
  {
    title: "Ongoing partnership",
    body: "With the retainer, blablabuild stays available as an extension of your team. No briefing cost, no ramp-up — just keep building.",
  },
] as const;

export const wayOfWorkingNl = [
  {
    title: "Activeren, niet alleen inspireren",
    body: "We werken vanuit jullie context en teams. Elke stap leidt direct naar concrete acties en eigenaarschap binnen Adsomnia — geen generiek AI-verhaal.",
  },
  {
    title: "Parallel is prima",
    body: "De drie projecten kunnen naast elkaar lopen. Ze versterken elkaar maar wachten niet op elkaar. Jullie bepalen de volgorde en het tempo.",
  },
  {
    title: "Structuur als fundament",
    body: "AI-initiatieven slagen of falen op uitvoering. Daarom bouwen we eerst de werkwijze en tooling voordat we schalen.",
  },
  {
    title: "Doorlopende samenwerking",
    body: "Met de retainer blijft blablabuild beschikbaar als verlengstuk van het team. Geen briefingkosten, geen opstarttijd — gewoon doorbouwen.",
  },
] as const;
