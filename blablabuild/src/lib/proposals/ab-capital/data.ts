import { BLABLABUILD_PROPOSAL_CONFIG } from "@foundation/config";
import { buildProposalContent } from "@foundation/proposal";
import {
  AB_CAPITAL_SECTION_ORDER,
  getProposalSection,
} from "@/components/proposal-library";
import type { SlideConfig } from "@/lib/types";
import { packageSources, phaseSources } from "./phases.source";
import { workflowSources } from "./workflows.source";

export const BRAND = {
  bg: "var(--brand-bg)",
  lime: "var(--brand-accent)",
  blue: "var(--brand-primary)",
  black: "var(--brand-fg)",
  muted: "#666666",
  border: "var(--brand-border)",
} as const;

const built = buildProposalContent(
  workflowSources,
  phaseSources,
  packageSources,
  BLABLABUILD_PROPOSAL_CONFIG,
);

export const { workflows, riceSorted, phases, packages } = built;

export const AI_BUILD_NOTE =
  "Schattingen zijn gebaseerd op AI-ondersteunde delivery: kortere doorlooptijden en minder declarabele uren. Hosting en licenties van derden niet inbegrepen.";

export const wayOfWorking = [
  {
    title: "Discovery-gedreven",
    body: "We starten vanuit jullie workshopbevindingen, niet vanuit een generiek playbook. Scope wordt gevalideerd vóór de build.",
  },
  {
    title: "AI-ondersteunde delivery",
    body: "We bouwen met AI, zodat jullie sneller werkende software krijgen tegen een fractie van klassieke agency-kosten.",
  },
  {
    title: "Gefaseerd, geen big bang",
    body: "Elke fase levert bruikbare waarde voordat de volgende start. Jullie bepalen hoe ver we gaan.",
  },
  {
    title: "Jullie data, jullie security",
    body: "Vooral voor AB Capital: private AI, EU-hosting, geen training op jullie vertrouwelijke informatie.",
  },
] as const;

export const slideConfigs: SlideConfig[] = AB_CAPITAL_SECTION_ORDER.map(
  (sectionId) => {
    const section = getProposalSection(sectionId);
    return {
      sectionId,
      label: section.defaultLabel,
      variant: section.defaultVariant,
    };
  },
);

export const slideLabels = slideConfigs.map((s) => s.label);

export function getWorkflow(id: string) {
  return workflows.find((w) => w.id === id);
}
