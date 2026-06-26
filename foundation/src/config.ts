import type { ProposalContentConfig, RateCard } from "./types";

/** blablabuild default rate card — AI-assisted delivery (~€750–€1.125/day) */
export const BLABLABUILD_RATE_CARD: RateCard = {
  currency: "EUR",
  dayRateMin: 750,
  dayRateMax: 1125,
  daysPerEffortMonth: 20,
  aiSpeedMultiplier: 5,
};

export const BLABLABUILD_PROPOSAL_CONFIG: ProposalContentConfig = {
  rateCard: BLABLABUILD_RATE_CARD,
  aiBuildNote:
    "Schattingen zijn gebaseerd op AI-ondersteunde delivery (~5× sneller bouwen). Discovery en zware integraties krijgen een lagere versnelling. Bandbreedtes zijn ruimer gehouden tot scope is vastgelegd. Hosting en licenties van derden niet inbegrepen.",
  costScopeBuffer: { lowerPct: 0.25, upperPct: 0.3 },
};

/** Alt F Awesome default rate card — agency positioning */
export const ALT_F_AWESOME_RATE_CARD: RateCard = {
  currency: "EUR",
  dayRateMin: 850,
  dayRateMax: 1200,
  daysPerEffortMonth: 20,
  aiSpeedMultiplier: 5,
};

export const ALT_F_AWESOME_PROPOSAL_CONFIG: ProposalContentConfig = {
  rateCard: ALT_F_AWESOME_RATE_CARD,
  aiBuildNote:
    "Estimates reflect AI-assisted production: faster iteration, transparent scope. Third-party licences and media buy excluded.",
};
