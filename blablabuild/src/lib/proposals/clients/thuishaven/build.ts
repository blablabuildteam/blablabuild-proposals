import { BLABLABUILD_PROPOSAL_CONFIG } from "@foundation/config";
import { buildProposalContent } from "@foundation/proposal";
import {
  THUISHAVEN_SECTION_ORDER,
  getProposalSection,
} from "@/components/proposal-library";
import type { ProposalLocale } from "@/lib/proposals/locale";
import type { ProposalBundle } from "@/lib/proposals/types";
import type { SlideConfig } from "@/lib/types";
import { en } from "./locales/en";
import { nl } from "./locales/nl";
import type { ThuishavenLocaleContent } from "./locales/types";
import { mergeWorkflowSources } from "./workflows.base";

const localeContent: Record<ProposalLocale, ThuishavenLocaleContent> = {
  en,
  nl,
};

function buildSlideConfigs(content: ThuishavenLocaleContent): SlideConfig[] {
  return THUISHAVEN_SECTION_ORDER.map((sectionId) => {
    const section = getProposalSection(sectionId);
    return {
      sectionId,
      label: content.slideLabels[sectionId] ?? section.defaultLabel,
      variant: section.defaultVariant,
    };
  });
}

export function buildThuishavenBundle(locale: ProposalLocale): ProposalBundle {
  const content = localeContent[locale];
  const workflowSources = mergeWorkflowSources(content.workflows);

  const built = buildProposalContent(
    workflowSources,
    content.phases,
    content.packages,
    {
      ...BLABLABUILD_PROPOSAL_CONFIG,
      aiBuildNote: content.aiBuildNote,
      costScopeBuffer: undefined,
      investmentFormat: "ballpark",
    },
    content.platformBundles?.length ? content.platformBundles : undefined,
  );

  const slideConfigs = buildSlideConfigs(content);

  return {
    meta: content.meta,
    access: content.access,
    debrief: content.debrief,
    debriefVariant: "combined",
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

export function buildThuishavenBundles(): Record<ProposalLocale, ProposalBundle> {
  return {
    en: buildThuishavenBundle("en"),
    nl: buildThuishavenBundle("nl"),
  };
}

export function getWorkflow(id: string, locale: ProposalLocale = "nl") {
  return buildThuishavenBundle(locale).workflows.find((w) => w.id === id);
}
