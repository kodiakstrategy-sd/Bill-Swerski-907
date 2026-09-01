import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { relics } from "@/data/relics";

export const metadata = { title: "The Three Great Relics" };

export default function RelicsPage() {
  return <div className="page-wrap"><PageHero eyebrow="The northern reliquary" title="The Three Great Relics" intro="One marks victory. One records ruin. One allegedly settles every argument, provided it can be found." />
    <section className="relic-dossiers">{relics.map((relic, i) => <article key={relic.slug}><div className="relic-glyph">{relic.mark}</div><div><p className="eyebrow">Relic {String(i + 1).padStart(2, "0")} · {relic.meaning}</p><h2>{relic.name}</h2><p>{relic.description}</p>{relic.slug === "scroll" && <Link href="/scroll" className="text-link">Seek the Great Scroll ↗</Link>}</div></article>)}</section>
  </div>;
}
