import Image from "next/image";
import type { CSSProperties } from "react";
import { divisions } from "@/data/divisions";
import { houseBySlug } from "@/data/houses";

const campaignHouses = divisions.flatMap(({ houseSlugs }) => houseSlugs);

export function CampaignStandards() {
  return <div className="campaign-standards" aria-hidden="true">
    {campaignHouses.map((slug, index) => {
      const house = houseBySlug(slug)!;
      return <div className="campaign-standard" key={slug} style={{ "--standard-index": index } as CSSProperties}>
        <Image src={`/houses/${slug}/crest.webp`} alt="" width={112} height={140} sizes="(max-width: 760px) 42px, 72px" unoptimized/>
        <span>{house.name.replace("HOUSE ", "")}</span>
      </div>;
    })}
  </div>;
}
