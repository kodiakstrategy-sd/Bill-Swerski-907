import { PageHero } from "@/components/PageHero";
import { HouseCard } from "@/components/HouseCard";
import { divisionLore, divisions } from "@/data/divisions";
import { houseBySlug } from "@/data/houses";
import { CouncilEasterEgg } from "@/components/CouncilEasterEgg";

export const metadata = { title: "The Ten Houses" };

export default function HousesPage() {
  return <div className="page-wrap houses-commune"><div className="commune-foyer"><PageHero eyebrow="The Council of the 907" title="The House Commune" intro="Ten banners. Two ancient divisions. An unreasonable quantity of documented grievance." /><CouncilEasterEgg/></div>
    <section className="lore-panel"><p>{divisionLore[0]}</p><strong>{divisionLore[2]}</strong></section>
    {divisions.map((division) => <section key={division.name} className="house-division"><div className="division-label"><span>Division</span><h2>{division.name}</h2><p>Five permanent seats</p></div><div>{division.houseSlugs.map((slug, i) => <HouseCard key={slug} house={houseBySlug(slug)!} index={i}/>)}</div></section>)}
  </div>;
}
