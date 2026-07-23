import type { ProposalLocale } from "@/lib/proposals/locale";
import type { ProposalBundle } from "@/lib/proposals/types";
import {
  buildZappieboxData,
  slideConfigs,
  wayOfWorkingEn,
  wayOfWorkingNl,
} from "./data";

export const meta = {
  slug: "zappiebox",
  clientName: "Zappiebox",
  clientLogo: "/zappiebox-logo.png",
  defaultLocale: "en",
} as const;

// ─── English ─────────────────────────────────────────────────────────────────

const metaEn = {
  ...meta,
  title: "Growth opportunities for **Zappiebox**",
  subtitle: "10 projects · 3 phases · July 2026",
} as const;

const debriefEn = {
  quote:
    "85% of orders via Meta is a growth risk, not a growth strategy. The opportunity is real — the question is which investments deliver the most impact.",
  quoteSource: "blablabuild analysis",
  focusAreas:
    "Content · Conversion · Organic · Data · B2B · International",
  date: "July 2026",
  projects: [
    {
      title: "Phase 1 — Quick Wins",
      description:
        "TikTok & UGC workflow, audience-specific landing pages and a YouTube Ads pilot. Fastest path to channel diversification and higher conversion.",
      investment: "€25.5K–€62.5K",
      slideIndex: 1,
    },
    {
      title: "Phase 2 — Growth Foundation",
      description:
        "SEO & AEO engine, performance dashboard and B2B proposition. Builds the scalable foundation for multi-channel, data-driven growth.",
      investment: "€42K–€100K",
      slideIndex: 2,
    },
    {
      title: "Phase 3 — New Markets",
      description:
        "B2B infrastructure, Germany market validation and technology. Only recommended after Phase 1 & 2 deliver validated results.",
      investment: "€107K–€270K",
      slideIndex: 3,
    },
  ],
} as const;

const accessEn = {
  landing: {
    kicker: "Proposal for",
    greetingTemplate: "Hi {name},",
    clientLabel: "Client",
    passwordLabel: "Password",
    passwordHint: "Use the password from your invitation.",
    submit: "Open proposal",
    submitting: "Checking…",
    opening: "Opening proposal…",
    sessionExpired: "Your session has expired. Please sign in again.",
    invalidAccessLink:
      "This link is invalid or has expired. Enter the password from your invitation.",
    accessDenied: "Invalid client or password",
    genericError: "Something went wrong. Please try again.",
    confidentialNote: "Confidential, prepared by blablabuild",
  },
} as const;

const slideCopyEn = {
  debriefKicker: "Opportunity analysis",
  wayOfWorking: {
    kicker: "Our approach",
    title: "**Start focused**, then scale.",
    subtitle:
      "Not all ten projects at once. A phased approach that delivers fast results and builds toward sustainable, multi-channel growth.",
    aiTitle: "Weekly alignment",
    aiBody:
      "Each project has a fixed rhythm: progress, open items and what is delivered this sprint. No surprises.",
    controlTitle: "You stay in control",
    controlBody:
      "Scope per project is agreed before we start. You decide which projects to activate and in what order.",
  },
  investment: {
    kicker: "Investment",
    title: "Investment **per project**",
    subtitle:
      "All amounts are indicative ranges. Final pricing depends on scope, data availability, technical complexity and content volumes.",
  },
  nextSteps: {
    kicker: "Next steps",
    title: "Ready when **you** are",
    subtitle: "Three steps to move from analysis to action.",
    steps: [
      {
        n: "01",
        title: "Review this proposal & schedule a call",
        body: "Read through the proposal at your own pace. Then we plan a short call to walk through the projects together, answer questions and align on priorities.",
      },
      {
        n: "02",
        title: "Choose your starting scenario",
        body: "Decide whether you start with Scenario A (Quick Wins), B (Growth Foundation) or a custom selection. We scope the first projects in detail.",
      },
      {
        n: "03",
        title: "Kickoff Phase 1",
        body: "We start with CRO & landing pages, TikTok/UGC workflow and the data measurement plan — in parallel where possible.",
      },
    ],
  },
} as const;

const slideLabelsEn: Record<string, string> = {
  debrief: "Overview",
  "phase-now": "Phase 1",
  "phase-next": "Phase 2",
  "phase-near": "Phase 3",
  investment: "Investment",
  "next-steps": "Next steps",
};

// ─── Dutch ───────────────────────────────────────────────────────────────────

const metaNl = {
  ...meta,
  title: "Groeikansen voor **Zappiebox**",
  subtitle: "10 projecten · 3 fasen · juli 2026",
} as const;

const debriefNl = {
  quote:
    "85% van de orders via Meta is een groeirisico, geen groeistrategie. De kans is er — de vraag is welke investeringen de meeste impact opleveren.",
  quoteSource: "blablabuild analyse",
  focusAreas:
    "Content · Conversie · Organisch · Data · B2B · Internationaal",
  date: "juli 2026",
  projects: [
    {
      title: "Fase 1 — Quick Wins",
      description:
        "TikTok & UGC-workflow, doelgroepgerichte landingspagina's en een YouTube Ads-pilot. Snelste weg naar kanaaldiversificatie en hogere conversie.",
      investment: "€25,5K–€62,5K",
      slideIndex: 1,
    },
    {
      title: "Fase 2 — Groei Fundament",
      description:
        "SEO & AEO-engine, performance-dashboard en B2B-propositie. Bouwt het schaalbare fundament voor meerkanaalsgroei en datagedreven beslissingen.",
      investment: "€42K–€100K",
      slideIndex: 2,
    },
    {
      title: "Fase 3 — Nieuwe Markten",
      description:
        "B2B-infrastructuur, Duitsland-validatiepilot en technologie. Uitsluitend aanbevolen nadat fase 1 & 2 gevalideerde resultaten opleveren.",
      investment: "€107K–€270K",
      slideIndex: 3,
    },
  ],
} as const;

const accessNl = {
  landing: {
    kicker: "Voorstel voor",
    greetingTemplate: "Hoi {name},",
    clientLabel: "Klant",
    passwordLabel: "Wachtwoord",
    passwordHint: "Gebruik het wachtwoord uit je uitnodiging.",
    submit: "Open voorstel",
    submitting: "Controleren…",
    opening: "Voorstel openen…",
    sessionExpired: "Je sessie is verlopen. Log opnieuw in.",
    invalidAccessLink:
      "Deze link is ongeldig of verlopen. Vul het wachtwoord uit je uitnodiging in.",
    accessDenied: "Onjuiste klant of wachtwoord",
    genericError: "Er ging iets mis. Probeer het opnieuw.",
    confidentialNote: "Vertrouwelijk, opgesteld door blablabuild",
  },
} as const;

const slideCopyNl = {
  debriefKicker: "Kansanalyse",
  wayOfWorking: {
    kicker: "Onze aanpak",
    title: "**Gefocust starten**, dan schalen.",
    subtitle:
      "Niet alle tien projecten tegelijk. Een gefaseerde aanpak die snel resultaat oplevert en toewerkt naar duurzame, meerkanaalsgroei.",
    aiTitle: "Wekelijkse afstemming",
    aiBody:
      "Elk project heeft een vast ritme: voortgang, open punten en wat er deze sprint wordt opgeleverd. Geen verrassingen.",
    controlTitle: "Jullie houden de regie",
    controlBody:
      "Scope per project leggen we vast vóór we starten. Jullie bepalen welke projecten worden geactiveerd en in welke volgorde.",
  },
  investment: {
    kicker: "Investering",
    title: "Investering **per project**",
    subtitle:
      "Alle bedragen zijn indicatieve ranges. Definitieve prijzen hangen af van scope, databeschikbaarheid, technische complexiteit en contentvolumes.",
  },
  nextSteps: {
    kicker: "Volgende stappen",
    title: "Klaar wanneer **jullie** willen",
    subtitle: "Drie stappen van analyse naar actie.",
    steps: [
      {
        n: "01",
        title: "Voorstel doorlezen & gesprek inplannen",
        body: "Lees het voorstel in alle rust door. Daarna plannen we een kort gesprek om de projecten samen door te lopen, vragen te beantwoorden en prioriteiten af te stemmen.",
      },
      {
        n: "02",
        title: "Startscenario kiezen",
        body: "Beslissen of jullie starten met Scenario A (Quick Wins), B (Groei Fundament) of een eigen selectie. We scopen de eerste projecten dan in detail.",
      },
      {
        n: "03",
        title: "Kickoff Fase 1",
        body: "We starten met CRO & landingspagina's, TikTok/UGC-workflow en het data-meetplan — parallel waar het kan.",
      },
    ],
  },
} as const;

const slideLabelNl: Record<string, string> = {
  debrief: "Overzicht",
  "phase-now": "Fase 1",
  "phase-next": "Fase 2",
  "phase-near": "Fase 3",
  investment: "Investering",
  "next-steps": "Volgende stappen",
};

// ─── Bundle factory ───────────────────────────────────────────────────────────

function buildBundle(locale: ProposalLocale): ProposalBundle {
  const isNl = locale === "nl";
  const data = buildZappieboxData(locale);
  const labels = isNl ? slideLabelNl : slideLabelsEn;

  return {
    meta: isNl ? metaNl : metaEn,
    access: isNl ? accessNl : accessEn,
    debrief: isNl ? debriefNl : debriefEn,
    slideCopy: isNl ? slideCopyNl : slideCopyEn,
    workflows: data.workflows,
    riceSorted: data.riceSorted,
    phases: data.phases,
    packages: data.packages,
    wayOfWorking: isNl ? wayOfWorkingNl : wayOfWorkingEn,
    slideConfigs: slideConfigs.map((c) => ({
      ...c,
      label: labels[c.sectionId] ?? c.label,
    })),
    slideLabels: slideConfigs.map((c) => labels[c.sectionId] ?? c.label),
    AI_BUILD_NOTE: data.AI_BUILD_NOTE,
  };
}

export function buildZappieboxBundle(locale: ProposalLocale = "en"): ProposalBundle {
  return buildBundle(locale);
}

export function buildZappieboxBundles(): Record<ProposalLocale, ProposalBundle> {
  return {
    en: buildBundle("en"),
    nl: buildBundle("nl"),
  };
}
