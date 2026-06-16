# Proposals Template

Monorepo for password-protected client proposal decks, split by brand.

## Structure

| Folder | Brand | Style |
|--------|-------|-------|
| [`blablabuild/`](blablabuild/) | blablabuild | Lime `#CEFF00` + blue `#1125FF`, Geist fonts |
| [`alt-f-awesome/`](alt-f-awesome/) | Alt F Awesome | Yellow `#EEFF00` + purple `#8885FF`, PP Gosha Sans + Hybi11 Amigo, sharp corners |

Each folder is a standalone Next.js app. Deploy them as separate Vercel projects.

## Quick start

```bash
cd blablabuild   # or alt-f-awesome
cp .env.example .env.local
npm install
npm run dev
```

Set proposal passwords in `.env.local`:

```env
PROPOSAL_AB_CAPITAL_PASSWORD=your-password
```

## Adding a proposal

**blablabuild:** copy `src/lib/proposals/ab-capital/` and register the bundle in `src/lib/proposals/registry.ts`.

**alt-f-awesome:** same pattern under `src/lib/proposals/` (registry starts empty).

## Briefing source

Client briefing notes live in [`briefing.md`](briefing.md) at the repo root.
