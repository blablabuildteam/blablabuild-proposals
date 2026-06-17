import type { ProposalBundle } from "../types";
import * as data from "./data";

export const meta = {
  slug: "CLIENT_SLUG",
  clientName: "Client Name",
  title: "Proposal title",
  subtitle: "Subtitle · Month Year",
} as const;

export const debrief = {
  quote: "Key quote from discovery workshop.",
  quoteSource: "Discovery workshop",
  summary: "One paragraph on where the client is and where they need to go.",
  focusAreas: "N focus areas from workshop",
  date: "Month Year",
} as const;

export const access = {
  landing: {
    kicker: "Proposal for",
    greetingTemplate: "Hi {name},",
    clientLabel: "Client",
    passwordLabel: "Password",
    passwordHint: "Use the password from your invitation email.",
    submit: "Open proposal",
    submitting: "Checking…",
    opening: "Opening proposal…",
    sessionExpired: "Session expired. Sign in again.",
    invalidAccessLink:
      "This link is invalid or expired. Enter the password from your invitation.",
    accessDenied: "Invalid client or password",
    genericError: "Something went wrong. Please try again.",
    confidentialNote: "Confidential · prepared by blablabuild",
  },
} as const;

export const bundle: ProposalBundle = {
  meta,
  access,
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
