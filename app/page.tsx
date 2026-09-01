import Image from "next/image";
import Link from "next/link";
import { champions } from "@/data/champions";
import { divisions, divisionLore } from "@/data/divisions";
import { houseBySlug } from "@/data/houses";
import { league } from "@/data/league";
import { relics } from "@/data/relics";
import { chronicles } from "@/data/chronicles";
import { HouseArtwork } from "@/components/HouseArtwork";
import { WorldArtwork } from "@/components/WorldArtwork";

const relicArt: Record<string, string> = { crown: "/relics/crown.webp", sausage: "/relics/sacred-sausage.webp", scroll: "/relics/great-scroll.webp" };

export default function Home() {
  return <div className="physical-home">
    <section className="physical-hero">
      <WorldArtwork src="/world/enter-the-north.webp" alt="Gastineau Channel, Douglas Island and the mountains of Juneau beneath cold twilight" priority/>
      <div className="physical-hero__veil"/>
      <div className="physical-hero__content"><p className="eyebrow">The surviving record · Juneau, Alaska</p><h1>BILL SWERSKI <span>907</span></h1><p className="physical-hero__subtitle">{league.subtitle}</p><p className="tagline">{league.tagline}</p><Link href="#great-hall" className="button button--solid">Enter the North <span>↓</span></Link></div>
      <div className="physical-hero__coordinates"><span>58.3019° N · 134.4197° W</span><span>Volume I · The Realm Endures</span></div>
    </section>

    <section className="realm-intro"><span className="carved-number">907</span><div><p className="eyebrow">An account of the Realm</p><p>{league.intro}</p></div></section>

    <section className="great-hall" id="great-hall">
      <WorldArtwork src="/world/great-hall.webp" alt="A cold northern stone and timber hall divided into two wings of five weathered banners"/><div className="great-hall__shade"/>
      <header><p className="eyebrow">The permanent order</p><h2>The Great Hall</h2><p>{divisionLore[2]}</p></header>
      <div className="hall-wings">{divisions.map((division) => <section key={division.name} className="hall-wing"><div className="hall-wing__title"><span>Division</span><h3>{division.name}</h3></div><div className="hall-banners">{division.houseSlugs.map((slug) => { const house = houseBySlug(slug)!; return <Link key={slug} href={`/houses/${slug}`} className="hall-banner"><HouseArtwork house={house} kind="banner"/><span><b>{house.name}</b><small>{house.owner}</small></span></Link> })}</div></section>)}</div>
      <Link href="/houses" className="hall-link">Cross the full Hall <span>↗</span></Link>
    </section>

    <section className="reliquary"><header><p className="eyebrow">Objects of consequence</p><h2>The Three Great Relics</h2><p>Victory, ruin, and the law that allegedly governs them both.</p></header><div className="relic-objects">{relics.map((relic, i) => <Link href={relic.slug === "scroll" ? "/scroll" : "/relics"} key={relic.slug} className="relic-object"><div className="relic-object__image"><Image src={relicArt[relic.slug]} alt={`${relic.name}, displayed as a physical northern relic`} fill sizes="(max-width: 760px) 100vw, 33vw"/></div><span className="object-index">0{i + 1}</span><div><p>{relic.meaning}</p><h3>{relic.name}</h3><small>{relic.description}</small></div></Link>)}</div></section>

    <section className="succession-home"><div className="succession-home__title"><p className="eyebrow">The latest succession</p><h2>One Crown.<br/>Twelve campaigns.</h2><Link href="/champions" className="text-link">Read the full lineage ↗</Link></div><div className="succession-inscription">{champions.slice(0, 6).map((champion, i) => <div key={champion.year} className={i === 0 ? "is-current" : ""}><span>{champion.year}</span><strong>{champion.owner}</strong><small>{i === 0 ? "Reigning Champion" : "Inscribed"}</small></div>)}</div></section>

    <section className="physical-chronicles"><header><p className="eyebrow">Recovered testimony</p><h2>From the Chronicles</h2></header><div>{chronicles.slice(0, 4).map((item, i) => <Link href="/chronicles" key={item.slug}><span>{String(i + 1).padStart(2, "0")}</span><div><small>{item.era}</small><h3>{item.title}</h3><p>{item.summary}</p></div><b>Read ↗</b></Link>)}</div></section>

    <section className="campaign-art"><WorldArtwork src="/world/campaign-2026.webp" alt="A northern campaign room overlooking ten distant standards above Juneau"/><div className="campaign-art__shade"/><div><p className="eyebrow">The next campaign · 2026</p><h2>The armies<br/>gather.</h2><p>Ten banners return to the North. The Crown waits. The Sausage also waits.</p><Link href="/season/2026" className="button">Enter the war room →</Link></div></section>
  </div>;
}
