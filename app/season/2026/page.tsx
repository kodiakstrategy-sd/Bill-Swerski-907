import Image from "next/image";
import Link from "next/link";
import { CampaignDraft } from "@/components/CampaignDraft";
import draft from "@/data/draft2026.json";
import { houseBySlug } from "@/data/houses";

export const metadata = { title: "The 2026 Campaign" };

function validateDraft() {
  const picks = draft.picks;
  if (picks.length !== 160 || new Set(picks.map(({ pick }) => pick)).size !== 160) throw new Error("2026 draft must contain 160 unique picks.");
  for (let round = 1; round <= 16; round += 1) {
    const roundPicks = picks.filter((pick) => pick.round === round);
    if (roundPicks.length !== 10) throw new Error(`Round ${round} must contain 10 picks.`);
    roundPicks.forEach((pick, index) => {
      const expectedSlot = round % 2 ? index + 1 : 10 - index;
      if (pick.draftSlot !== expectedSlot) throw new Error(`Invalid snake mapping at pick ${pick.pick}.`);
    });
  }
  draft.draftOrder.forEach(({ houseSlug }) => {
    if (picks.filter((pick) => pick.houseSlug === houseSlug).length !== 16) throw new Error(`${houseSlug} must contain 16 picks.`);
  });
}

export default function SeasonPage() {
  validateDraft();
  return <main className="campaign-page">
    <section className="campaign-hero"><Image src="/world/campaign-2026.webp" alt="The 2026 campaign war table in the northern Realm" fill priority sizes="100vw"/><div className="campaign-hero__veil"/><div><p className="eyebrow">Bill Swerski 907 · Campaign 2026</p><h1>The Armies<br/><span>Are Chosen</span></h1><p>Ten Houses. Sixteen rounds. One hundred sixty selections inscribed upon the campaign ledger.</p></div></section>
    <section className="order-battle"><header><p className="eyebrow">Order of Battle</p><h2>The Ten Draft Standards</h2></header><ol>{draft.draftOrder.map((entry) => { const house = houseBySlug(entry.houseSlug)!; return <li key={entry.slot}><span className="order-battle__slot">{String(entry.slot).padStart(2, "0")}</span><Image src={`/houses/${entry.houseSlug}/crest.webp`} alt="" width={84} height={105}/><div><Link href={`/houses/${entry.houseSlug}`}>{house.name}</Link><strong>{entry.owner}</strong><small>{entry.currentBanner} · {house.division}</small></div></li>; })}</ol></section>
    <CampaignDraft draftOrder={draft.draftOrder} picks={draft.picks}/>
    <section className="campaign-facts"><p className="eyebrow">Campaign record</p><h2>Facts of the Draft</h2><div><article><strong>160</strong><span>Selections</span></article><article><strong>16</strong><span>Rounds</span></article><article><strong>10</strong><span>Houses</span></article><article><strong>16</strong><span>Picks per House</span></article></div></section>
  </main>;
}
