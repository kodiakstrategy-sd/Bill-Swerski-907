import Link from "next/link";
import type { House } from "@/data/types";
import { Sigil } from "./Sigil";

export function HouseCard({ house, index }: { house: House; index: number }) {
  return <Link href={`/houses/${house.slug}`} className="house-row" style={{ "--accent": house.colors[1] } as React.CSSProperties}>
    <span className="house-number">{String(index + 1).padStart(2, "0")}</span>
    <Sigil kind={house.sigil} label={house.name} />
    <span className="house-row__main"><span className="eyebrow">{house.subtitle}</span><strong>{house.name}</strong><small>{house.owner} · {house.primaryTitle}</small></span>
    <span className="arrow" aria-hidden="true">↗</span>
  </Link>;
}
