import { PageHero } from "@/components/PageHero";
import { chronicles } from "@/data/chronicles";

export const metadata = { title: "The Chronicles" };

export default function ChroniclesPage() {
  return <div className="page-wrap"><PageHero eyebrow="An editorial history" title="The Chronicles" intro="Events remembered with greater confidence than evidence, arranged for future scholars of the 907." />
    <section className="archive-list">{chronicles.map((item, i) => <article key={item.slug}><span>{String(i + 1).padStart(2, "0")}</span><div><p className="eyebrow">{item.era}</p><h2>{item.title}</h2><p>{item.summary}</p></div><b>Filed</b></article>)}</section>
  </div>;
}
