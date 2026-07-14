import type { ProposalLocale } from "@/lib/proposals/locale";
import type { ProposalBundle } from "@/lib/proposals/types";
import * as data from "./data";

export const meta = {
  slug: "adsomnia",
  clientName: "Adsomnia",
  title: "**AI-transformatie** voorstel",
  subtitle: "Workshop, fundament & doorlopende samenwerking · juli 2026",
} as const;

export const debrief = {
  quote:
    "Traffic never sleeps — en AI ook niet. Adsomnia wil AI niet zijdelings adopteren maar er echt mee bouwen: bewust, geactiveerd en met een concreet pad vooruit.",
  quoteSource: "Intake gesprek",
  focusAreas: "3 projecten: AI Workshop & Roadmap, Organisatiefundament, AI Retainer",
  date: "juli 2026",
} as const;

export const access = {
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

export const slideCopy = {
  debriefKicker: "Intake samengevat",
  wayOfWorking: {
    kicker: "Werkwijze",
    title: "**Activeren**, niet alleen inspireren.",
    subtitle:
      "Vier principes die bepalen hoe we met Adsomnia werken. Geen standaard bureautraject.",
    aiTitle: "Wekelijkse afstemming",
    aiBody:
      "Elke week een vast moment voor voortgang, open punten en prioriteiten. Jullie weten altijd waar we staan.",
    controlTitle: "Jullie houden de regie",
    controlBody:
      "Scope leggen we vast vóór we bouwen. Per fase heldere opleveringen. Jullie bepalen het tempo.",
  },
  approach: {
    kicker: "Aanpak",
    title: "**Drie projecten**, één samenhangend traject",
    subtitle:
      "Workshop en fundament vormen de kickoff. De retainer zorgt voor continuïteit. Elk project levert zelfstandig waarde.",
    parallelLabel: "Parallel",
    parallelBody: "Workshop en fundament lopen grotendeels gelijktijdig.",
    backlogLabel: undefined,
    backlogBody: undefined,
  },
  workflows: {
    kicker: "Projectoverzicht",
    title: "Alle **drie projecten**",
    subtitle: "Van workshop tot doorlopende samenwerking — volledig overzicht.",
  },
  investment: {
    kicker: "Investering",
    title: "Investering **per project**",
    subtitle:
      "Workshop en fundament zijn vaste projecten. De retainer is een doorlopende afspraak.",
  },
  nextSteps: {
    kicker: "Volgende stappen",
    title: "Klaar wanneer **jullie** willen",
    subtitle: "Van voorstel naar uitvoering in vier stappen.",
    steps: [
      {
        n: "01",
        title: "Voorstel doorlezen",
        body: "Doorloop de drie projecten, aanpak en investering in je eigen tempo. Noteer vragen en prioriteiten.",
      },
      {
        n: "02",
        title: "Bespreken",
        body: "Korte sessie om samen door het voorstel te lopen. Open vragen, scope aanpassen en startdatum bepalen.",
      },
      {
        n: "03",
        title: "Scope vastleggen",
        body: "We sluiten de scope voor de kickoff: welke projecten, wanneer, wat zijn de concrete opleveringen.",
      },
      {
        n: "04",
        title: "Kickoff plannen",
        body: "Milestone #1 inplannen — 29 juli staat al in de agenda. Contract ondertekenen en starten.",
      },
    ],
  },
} as const;

const bundle: ProposalBundle = {
  meta,
  access,
  debrief,
  slideCopy,
  workflows: data.workflows,
  riceSorted: data.riceSorted,
  phases: data.phases,
  packages: data.packages,
  wayOfWorking: data.wayOfWorking,
  slideConfigs: data.slideConfigs,
  slideLabels: data.slideLabels,
  AI_BUILD_NOTE: data.AI_BUILD_NOTE,
};

export function buildAdsomniaBundle(_locale: ProposalLocale = "nl"): ProposalBundle {
  return bundle;
}

export function buildAdsomniaBundles(): Record<ProposalLocale, ProposalBundle> {
  return { nl: bundle, en: bundle };
}
