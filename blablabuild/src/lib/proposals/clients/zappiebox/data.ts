import { BLABLABUILD_PROPOSAL_CONFIG } from "@foundation/config";
import { buildProposalContent } from "@foundation/proposal";
import { getProposalSection } from "@/components/proposal-library";
import type { SlideConfig } from "@/lib/types";
import type { ProposalLocale } from "@/lib/proposals/locale";
import { packageSources, phaseSources } from "./phases.source.en";
import { packageSourcesNl, phaseSourcesNl } from "./phases.source.nl";
import { workflowSources } from "./workflows.source.en";
import { workflowSourcesNl } from "./workflows.source.nl";

const ZAPPIEBOX_SECTIONS = [
  "debrief",
  "phase-now",
  "phase-next",
  "phase-near",
  "investment",
  "next-steps",
] as const;

export const slideConfigs: SlideConfig[] = ZAPPIEBOX_SECTIONS.map((sectionId) => {
  const section = getProposalSection(sectionId);
  return {
    sectionId,
    label: section.defaultLabel,
    variant: section.defaultVariant,
  };
});

export const slideLabels = slideConfigs.map((s) => s.label);

export function buildZappieboxData(locale: ProposalLocale = "en") {
  const wfSources = locale === "nl" ? workflowSourcesNl : workflowSources;
  const phSources = locale === "nl" ? phaseSourcesNl : phaseSources;
  const pkgSources = locale === "nl" ? packageSourcesNl : packageSources;

  return buildProposalContent(wfSources, phSources, pkgSources, BLABLABUILD_PROPOSAL_CONFIG);
}

export const wayOfWorkingEn = [
  {
    title: "Start with impact, not scope",
    body: "We begin with the projects that have the most direct effect on revenue and channel independence — and build from there. Not all ten at once.",
  },
  {
    title: "Evidence before investment",
    body: "B2B, Germany and Headless are only recommended after the foundation projects deliver validated results. We pilot before we commit.",
  },
  {
    title: "Your data, your decisions",
    body: "The performance dashboard is not a reporting formality — it becomes the engine behind every future media, content and channel decision.",
  },
  {
    title: "Parallel where possible",
    body: "CRO, TikTok and YouTube can run simultaneously. SEO and Data can start in parallel with Phase 1 projects. No unnecessary waiting.",
  },
] as const;

export const wayOfWorkingNl = [
  {
    title: "Begin met impact, niet met scope",
    body: "We starten met de projecten die de meeste directe invloed hebben op omzet en kanalonafhankelijkheid — en bouwen van daaruit. Niet alle tien tegelijk.",
  },
  {
    title: "Bewijs vóór investering",
    body: "B2B, Duitsland en Headless adviseren we pas nadat de fundamentprojecten gevalideerde resultaten opleveren. We piloten vóór we committeren.",
  },
  {
    title: "Jouw data, jouw beslissingen",
    body: "Het performance-dashboard is geen rapportageformulier — het wordt de motor achter elke toekomstige media-, content- en kanaalbeslissing.",
  },
  {
    title: "Parallel waar het kan",
    body: "CRO, TikTok en YouTube kunnen tegelijkertijd lopen. SEO en Data kunnen al in fase 1 parallel starten. Geen onnodige wachttijd.",
  },
] as const;
