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
    body: "We starten vanuit jullie context en teams, niet vanuit een standaard AI-verhaal. Elke stap leidt direct naar concrete acties en eigenaarschap binnen Adsomnia.",
  },
  {
    title: "Bouwen met AI",
    body: "Met AI-ondersteunde tools bouwen we sneller en effectiever. Dat maakt het traject toegankelijk en levert resultaat zonder klassieke bureaukosten.",
  },
  {
    title: "Structuur als fundament",
    body: "We werken gefaseerd: eerst bewustwording en roadmap, dan inrichting, daarna uitvoering. Jullie bepalen de snelheid en scope per stap.",
  },
  {
    title: "Doorlopende samenwerking",
    body: "AI-transformatie is geen eenmalig project. Met de retainer blijft blablabuild beschikbaar als strategisch en technisch verlengstuk — zonder telkens opnieuw te briefen.",
  },
] as const;

const ADSOMNIA_SECTIONS = [
  "debrief",
  "way-of-working",
  "approach",
  "phase-now",
  "phase-next",
  "workflows",
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
