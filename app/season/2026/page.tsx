import { PageHero } from "@/components/PageHero";
import { campaign2026 } from "@/data/seasons";

export const metadata = { title: "The 2026 Campaign" };

export default function SeasonPage() {
  return <div className="page-wrap"><PageHero eyebrow={`Campaign ${campaign2026.year} · ${campaign2026.status}`} title="The Armies Gather" intro="The architecture of the next campaign stands ready. The draft, standings and final judgments will be inscribed as the season unfolds." />
    <section className="season-status"><div><span>Champion</span><strong>Undecided</strong></div><div><span>Sacred Sausage</span><strong>Unclaimed</strong></div><div><span>Draft selections</span><strong>0 / 160 recorded</strong></div></section>
    <section className="draft-order"><div><p className="eyebrow">Order of assembly</p><h2>2026 Draft Order</h2></div><ol>{campaign2026.order.map(([owner, banner]) => <li key={owner}><span>{owner}</span><strong>{banner}</strong></li>)}</ol></section>
    <section className="board-scaffold"><p className="eyebrow">The future draft board</p><h2>Sixteen rounds await inscription.</h2><div>{Array.from({ length: 10 }, (_, i) => <span key={i}>Pick {i + 1}<small>Awaiting selection</small></span>)}</div><p>Horizontal campaign board scaffold · Full 160-pick record forthcoming</p></section>
  </div>;
}
