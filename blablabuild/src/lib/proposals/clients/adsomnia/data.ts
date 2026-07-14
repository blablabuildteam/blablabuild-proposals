import { BLABLABUILD_PROPOSAL_CONFIG } from "@foundation/config";
import { buildProposalContent } from "@foundation/proposal";
import { getProposalSection } from "@/components/proposal-library";
import type { SlideConfig } from "@/lib/types";
import { packageSources, phaseSources } from "./phases.source";
import { workflowSources } from "./workflows.source";

const built = buildProposalContent(
  workflowSources,
  phaseSources,
  packageSources,
  BLABLABUILD_PROPOSAL_CONFIG,
);

export const { workflows, riceSorted, phases, packages, AI_BUILD_NOTE } = built;

export const wayOfWorking = [
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

const ADSOMNIA_SECTIONS = [
  "debrief",
  "way-of-working",
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
