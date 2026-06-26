import { BLABLABUILD_PROPOSAL_CONFIG } from "@foundation/config";
import { buildProposalContent } from "@foundation/proposal";
import {
  AB_CAPITAL_SECTION_ORDER,
  getProposalSection,
} from "@/components/proposal-library";
import type { ProposalLocale } from "@/lib/proposals/locale";
import type { ProposalBundle } from "@/lib/proposals/types";
import type { SlideConfig } from "@/lib/types";
import { en } from "./locales/en";
import { nl } from "./locales/nl";
import type { AbCapitalLocaleContent } from "./locales/types";
import { mergeWorkflowSources } from "./workflows.base";

const localeContent: Record<ProposalLocale, AbCapitalLocaleContent> = {
  en,
  nl,
};

export const BRAND = {
  bg: "var(--brand-bg)",
  lime: "var(--brand-accent)",
  blue: "var(--brand-primary)",
  black: "var(--brand-fg)",
  muted: "#666666",
  border: "var(--brand-border)",
} as const;

function buildSlideConfigs(content: AbCapitalLocaleContent): SlideConfig[] {
  return AB_CAPITAL_SECTION_ORDER.map((sectionId) => {
    const section = getProposalSection(sectionId);
    return {
      sectionId,
      label: content.slideLabels[sectionId] ?? section.defaultLabel,
      variant: section.defaultVariant,
    };
  });
}

export function buildAbCapitalBundle(locale: ProposalLocale): ProposalBundle {
  const content = localeContent[locale];
  const workflowSources = mergeWorkflowSources(content.workflows);

  const built = buildProposalContent(
    workflowSources,
    content.phases,
    content.packages,
    {
      ...BLABLABUILD_PROPOSAL_CONFIG,
      aiBuildNote: content.aiBuildNote,
      costScopeBuffer: { lowerPct: 0.325, upperPct: 0.39 },
    },
    content.platformBundles,
  );

  const slideConfigs = buildSlideConfigs(content);

  return {
    meta: content.meta,
    access: content.access,
    debrief: content.debrief,
    impactMatrix: content.impactMatrix,
    understanding: content.understanding,
    slideCopy: content.slideCopy,
    workflows: built.workflows,
    riceSorted: built.riceSorted,
    phases: built.phases,
    packages: built.packages,
    platformBundles: built.platformBundles,
    wayOfWorking: content.wayOfWorking,
    slideConfigs,
    slideLabels: slideConfigs.map((s) => s.label),
    AI_BUILD_NOTE: content.aiBuildNote,
  };
}

export function buildAbCapitalBundles(): Record<ProposalLocale, ProposalBundle> {
  return {
    en: buildAbCapitalBundle("en"),
    nl: buildAbCapitalBundle("nl"),
  };
}

export function getWorkflow(id: string, locale: ProposalLocale = "nl") {
  return buildAbCapitalBundle(locale).workflows.find((w) => w.id === id);
}
