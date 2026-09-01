import { PageHero } from "@/components/PageHero";

const articles = ["THE DRAFT", "ROSTERS", "WAIVERS", "TRADES", "SCORING", "THE SACRED SAUSAGE", "COMMISSIONER AUTHORITY", "AMENDMENTS"];

export const metadata = { title: "The Great Scroll of Swerski" };

export default function ScrollPage() {
  return <div className="page-wrap scroll-page"><PageHero eyebrow="The laws and customs of the 907" title="The Great Scroll of Swerski" intro="When disputes arise, the Lords demand the Scroll. Its authority is absolute. Its location is unknown." />
    <section className="scroll-sheet"><div className="scroll-seal">907</div>{articles.map((article, i) => <article key={article}><span>Article {toRoman(i + 1)}</span><h2>{article}</h2><p>Awaiting Inscription</p></article>)}</section>
    <section className="amendment-note"><p className="eyebrow">Future amendment record</p><p>Date · Article · Amendment · Ruling · Commissioner note</p><strong>No amendment shall be invented before the Council speaks.</strong></section>
  </div>;
}

function toRoman(n: number) { return ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"][n - 1]; }
