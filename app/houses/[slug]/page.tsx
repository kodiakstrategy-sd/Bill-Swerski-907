import { notFound } from "next/navigation";
import Link from "next/link";
import { Sigil } from "@/components/Sigil";
import { champions } from "@/data/champions";
import { houses, houseBySlug } from "@/data/houses";

export function generateStaticParams() { return houses.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const house = houseBySlug((await params).slug);
  return { title: house?.name ?? "House not found", description: house?.subtitle };
}

export default async function HousePage({ params }: { params: Promise<{ slug: string }> }) {
  const house = houseBySlug((await params).slug); if (!house) notFound();
  const wins = champions.filter((c) => c.houseSlug === house.slug);
  return <div className="house-page" style={{ "--house-a": house.colors[0], "--house-b": house.colors[1], "--house-c": house.colors[2] } as React.CSSProperties}>
    <section className="house-hero"><div className="house-hero__copy"><Link href="/houses" className="back-link">← The Ten Houses</Link><p className="eyebrow">{house.division} · Seat: {house.seat}</p><h1>{house.name}</h1><p className="house-subtitle">{house.subtitle}</p><p className="house-title">{house.primaryTitle}</p></div><Sigil kind={house.sigil} label={house.name} large/><div className="house-colors">{house.colors.map(c => <i key={c} style={{ background: c }}/>)}</div></section>
    <section className="house-facts"><div><span>Current banner</span><strong>{house.banner}</strong></div><div><span>Lord of the House</span><strong>{house.owner}</strong></div><div><span>Division</span><strong>{house.division}</strong></div><div><span>Crowns</span><strong>{wins.length ? wins.map(w => w.year).join(" · ") : "None yet recorded"}</strong></div></section>
    <section className="house-dossier"><aside><p className="eyebrow">Known titles</p><ul><li>{house.primaryTitle}</li>{house.titles.map(t => <li key={t}>{t}</li>)}</ul>{house.relics.length > 0 && <><p className="eyebrow aside-gap">Relic{house.relics.length > 1 ? "s" : ""}</p><ul>{house.relics.map(r => <li key={r}>{r}</li>)}</ul></>}</aside><article><p className="eyebrow">An account of the House</p><p className="dropcap">{house.character}</p>{house.lore.map(p => <p key={p}>{p}</p>)}<blockquote>{house.motto}</blockquote>{house.saying && <p className="league-saying">The Council says: “{house.saying}”</p>}</article></section>
    {house.disputedTitle && <section className="disputed"><p className="eyebrow">On the disputed title</p><h2>“{house.disputedTitle.title}”</h2><p>{house.disputedTitle.note}</p></section>}
    <section className="chronicle-callout"><p className="eyebrow">Recorded in the Chronicles</p><h2>{house.chronicle}</h2><Link href="/chronicles">Consult the archive ↗</Link>{house.easterEgg && <span className="easter-egg">{house.easterEgg}</span>}</section>
  </div>;
}
