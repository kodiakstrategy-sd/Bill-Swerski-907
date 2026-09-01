# Bill Swerski 907 — The Houses of the North

A production website documenting the history, rivalries, relics and questionable decisions of a long-running ten-person fantasy football league in Juneau, Alaska. The site presents league lore with the gravity of an ancient northern civilization.

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Local typed data
- Vercel-compatible static and server-rendered routes

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Before merging changes, run:

```bash
npm run lint
npm run typecheck
npm run build
```

## Content architecture

League facts live under `data/` and presentation lives under `app/` and `components/`.

- `data/houses.ts` — current Houses, banners, titles, lore, sigils and relics
- `data/champions.ts` — the authoritative championship lineage and Old Realm banners
- `data/divisions.ts` — permanent Jackie’s and Daisey’s memberships
- `data/relics.ts` — Crown, Sacred Sausage and Great Scroll
- `data/chronicles.ts` — editorial Chronicle records
- `data/artifacts.ts` — evidence metadata and archive categories
- `data/seasons.ts` — campaign records and draft order
- `data/league.ts` — shared league identity and introductory copy

Do not derive championships from House prose or franchise statistics. `data/champions.ts` is canonical.

## Updating content

### Add an artifact

Place the authenticated image under `public/artifacts/`, then add an entry to `data/artifacts.ts` with its title, date, caption, category, image path, optional associated House and historical note. Placeholders are intentional when no image has been supplied.

### Add a Chronicle

Add a typed record to `data/chronicles.ts`. Include a unique slug, title, era, summary and any associated House slugs. Chronicle detail routes can be added later without changing the index data model.

### Add a season

Add a new campaign record to `data/seasons.ts`, then create `app/season/[year]/page.tsx` or generalize the current 2026 route. Record champion and Sacred Sausage outcomes only after they are known.

## Updating the Realm with AI

Future maintainers can ask an AI coding agent to update the structured league data. Give it the new facts, identify the authoritative records, and ask it to run the full verification suite.

Example:

> Adam Sycks won the 2027 Crown. Stephen Ealy received the Sacred Sausage. Add the 2027 season and update their House records.

The agent should update `data/champions.ts`, `data/seasons.ts`, and only the relevant House or Chronicle records—not rewrite page components.

## Vercel deployment

The app uses standard Next.js defaults. Vercel should detect the framework, run `npm run build`, and deploy without custom configuration. Connect the Git repository to a Vercel project and enable automatic deployments for the production branch. No runtime secrets are required for Version 1.
