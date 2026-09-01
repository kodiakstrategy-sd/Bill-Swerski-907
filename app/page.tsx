import Link from "next/link";
import { champions } from "@/data/champions";
import { divisions, divisionLore } from "@/data/divisions";
import { houseBySlug } from "@/data/houses";
import { league } from "@/data/league";
import { relics } from "@/data/relics";
import { chronicles } from "@/data/chronicles";
import { Sigil } from "@/components/Sigil";

export default function Home() {
  return <>
    <section className="hero">
      <div className="mountains" aria-hidden="true" />
      <div className="hero__content"><p className="eyebrow">A history of the North · Est. Juneau</p><h1>{league.name}</h1><p className="hero__subtitle">{league.subtitle}</p><p className="tagline">{league.tagline}</p><Link href="/houses" className="button">Enter the Realm <span>↓</span></Link></div>
      <div className="hero__edition"><span>Vol. I</span><span>907 · AK</span></div>
    </section>

    <section className="intro-section section"><div className="section-index">I</div><div><p className="eyebrow">The surviving account</p><p className="intro-copy">{league.intro}</p></div></section>

    <section className="division-feature section"><div className="section-heading"><p className="eyebrow">The permanent order</p><h2>The Division<br/>of the Realm</h2></div><div className="division-feature__body"><p>{divisionLore[0]}</p><p className="pullquote">{divisionLore[2]}</p><Link href="/houses" className="text-link">Examine the ten Houses ↗</Link></div></section>

    <section className="home-houses section"><div className="section-kicker"><p className="eyebrow">Ten seats upon the Council</p><h2>The Houses</h2></div>
      <div className="mini-houses">{divisions.map((division) => <div key={division.name} className="mini-division"><h3>{division.name}</h3>{division.houseSlugs.map((slug) => { const house = houseBySlug(slug)!; return <Link key={slug} href={`/houses/${slug}`}><Sigil kind={house.sigil} label={house.name}/><span>{house.name}</span><small>{house.owner}</small></Link> })}</div>)}</div>
    </section>

    <section className="relic-band section"><div><p className="eyebrow">Objects of consequence</p><h2>The Three<br/>Great Relics</h2><Link href="/relics" className="text-link">Enter the reliquary ↗</Link></div><div className="relic-list">{relics.map((relic, i) => <article key={relic.slug}><span className="relic-mark">{relic.mark}</span><span className="house-number">0{i + 1}</span><div><h3>{relic.name}</h3><p>{relic.meaning}</p></div></article>)}</div></section>

    <section className="champion-feature section"><p className="eyebrow">The latest succession</p><div className="champion-year">{champions[0].year}</div><div><h2>{champions[0].owner}</h2><p>House Ealy · Holder of the Crown</p><Link href="/champions" className="button button--dark">Read the full lineage →</Link></div></section>

    <section className="chronicle-preview section"><div className="section-kicker"><p className="eyebrow">From the historical record</p><h2>Chronicles</h2></div><div>{chronicles.slice(0, 3).map((item, i) => <Link href="/chronicles" key={item.slug} className="chronicle-row"><span>0{i + 1}</span><div><small>{item.era}</small><h3>{item.title}</h3><p>{item.summary}</p></div><b>↗</b></Link>)}</div></section>

    <section className="campaign-tease"><p className="eyebrow">A new age approaches</p><h2>The 2026<br/>Campaign</h2><p>Ten armies are being assembled. The Crown waits. The Sausage also waits.</p><Link href="/season/2026" className="button">View the campaign →</Link></section>
  </>;
}
