# Bill Swerski 907 — Repo-ready approved asset bundle

Copy the contents of this folder into the root of the `Bill-Swerski-907` repository.

## Included
- Approved House reference art for all ten active Houses
- Two real championship-belt photos from league lore uploads
- Real Sacred Sausage reference photo
- `SWERSKI_BUILD_SPEC.md`
- `SWERSKI_VISUAL_ASSET_SPEC.md`
- Production destination folders for each House

## Important Crown correction
`The Crown` remains the in-world name of the championship prize, but the actual physical object is the Bill Swerski 907 WWE-style championship belt.

Use:
- `reference/approved/relics/crown-belt-reference-1.jpeg`
- `reference/approved/relics/crown-belt-reference-2.jpeg`

as canonical visual references.

## House production asset standard
For every House, Codex should create:

```text
/public/houses/[slug]/crest.webp
/public/houses/[slug]/banner.webp
/public/houses/[slug]/hero.webp
```

The reference art is intentionally separate from the production web assets.

## Three newest visual refs
The chat uploads named `house entry`, `house commune`, and `house scroll` are not available as raw bytes in this execution runtime, so see:

`reference/approved/world/ADD_THESE_THREE_REFERENCE_IMAGES.md`

for the exact filenames and placement.
