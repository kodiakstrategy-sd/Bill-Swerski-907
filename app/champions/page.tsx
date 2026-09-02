import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { champions, oldRealm } from "@/data/champions";

export const metadata = { title: "Line of Champions" };

export default function ChampionsPage() {
  return <div className="page-wrap"><PageHero eyebrow="The authoritative succession" title="Line of Champions" intro="The Crown remembers only the name inscribed upon it. This lineage permits no inference, revision or convenient accounting." />
    <section className="succession-crown" aria-label="The Crown"><Image src="/relics/crown.webp" alt="The Bill Swerski 907 championship belt known as The Crown" fill sizes="(max-width: 760px) 92vw, 720px" priority /></section>
    <section className="lineage">{champions.map((champion, i) => <article key={champion.year} className={i === 0 ? "current" : ""}><span className="lineage-year">{champion.year}</span><span className="lineage-node"/><div><p className="eyebrow">{i === 0 ? "Reigning champion" : "Crowned in the North"}</p><h2>{champion.owner}</h2>{champion.houseSlug ? <Link href={`/houses/${champion.houseSlug}`}>View the House ↗</Link> : <span>Banner of the Old Realm</span>}</div></article>)}</section>
    <section className="old-realm"><p className="eyebrow">Banners of the Old Realm</p><h2>Not every House that shaped the Realm still holds a seat upon its Council.</h2><div>{oldRealm.map(record => <article key={record.owner}><span>{record.year}</span><h3>{record.owner}</h3><strong>{record.title}</strong><p>{record.lore}</p></article>)}</div></section>
  </div>;
}
