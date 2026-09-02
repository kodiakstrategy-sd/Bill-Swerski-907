import { PageHero } from "@/components/PageHero";
import { GreatScroll } from "@/components/GreatScroll";

const articles = ["THE DRAFT", "ROSTERS", "WAIVERS", "TRADES", "SCORING", "THE SACRED SAUSAGE", "COMMISSIONER AUTHORITY", "AMENDMENTS"];

export const metadata = { title: "The Great Scroll of Swerski" };

export default function ScrollPage() {
  return <div className="page-wrap scroll-page leather-scroll-page"><PageHero eyebrow="The laws and customs of the 907" title="The Great Scroll of Swerski" intro="When disputes arise, the Lords demand the Scroll. Its authority is absolute. Its location is unknown." />
    <GreatScroll articles={articles}/>
    <section className="amendment-note"><p className="eyebrow">Future amendment record</p><p>Date · Article · Amendment · Ruling · Commissioner note</p><strong>No amendment shall be invented before the Council speaks.</strong></section>
  </div>;
}
