import type { ComponentType } from "react";
import type { SlideVariant } from "@/lib/types";

/** Stable IDs for every proposal deck section (derived from AB Capital). */
export type ProposalSectionId =
  | "debrief"
  | "understanding"
  | "way-of-working"
  | "approach"
  | "phase-now"
  | "phase-next"
  | "phase-near"
  | "workflows"
  | "prioritization"
  | "investment"
  | "next-steps";

/** Overlay sections rendered outside the main slide flow. */
export type ProposalOverlayId = "workflow-use-case";

export type ProposalSectionCategory =
  | "opening"
  | "context"
  | "approach"
  | "phases"
  | "reference"
  | "closing";

export type ProposalSectionDefinition = {
  id: ProposalSectionId;
  name: string;
  description: string;
  defaultLabel: string;
  defaultVariant: SlideVariant;
  category: ProposalSectionCategory;
  component: ComponentType;
};

export type ProposalOverlayDefinition = {
  id: ProposalOverlayId;
  name: string;
  description: string;
};
