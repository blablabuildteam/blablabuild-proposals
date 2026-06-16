import type { ProposalBundle } from "../types";
import * as data from "./data";

export const meta = {
  slug: "ab-capital",
  clientName: "AB Capital",
  title: "Digital transformation roadmap",
  subtitle: "Phased automation programme · June 2026",
} as const;

export const debrief = {
  quote:
    "In general, the biggest bottleneck is to improve automation across the entire AB organisation to clear time on execution and create less room for error.",
  quoteSource: "Discovery workshop",
  summary:
    "AB Capital has outgrown start-up mode. The next step is institutionalised, automated workflows — not more heroics in personal inboxes.",
  ecosystem: "Twinfield · Basecone · Harvest · Notion · SharePoint · Bunch",
  focusAreas:
    "11 focus areas mapped across fund operations, group finance, family office and new investments",
  date: "June 2026",
} as const;

export const bundle: ProposalBundle = {
  meta,
  debrief,
  workflows: data.workflows,
  riceSorted: data.riceSorted,
  phases: data.phases,
  packages: data.packages,
  wayOfWorking: data.wayOfWorking,
  slideConfigs: data.slideConfigs,
  slideLabels: data.slideLabels,
  AI_BUILD_NOTE: data.AI_BUILD_NOTE,
};
