"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Order = { slot: number; owner: string; houseSlug: string; currentBanner: string };
type Pick = { pick: number; round: number; roundPick: number; draftSlot: number; owner: string; houseSlug: string; currentBanner: string; player: string; team: string };
type View = "board" | "round" | "house";

export function CampaignDraft({ draftOrder, picks }: { draftOrder: Order[]; picks: Pick[] }) {
  const [view, setView] = useState<View>("round");
  const [round, setRound] = useState(1);
  const [house, setHouse] = useState(draftOrder[0].houseSlug);
  const rounds = Array.from({ length: 16 }, (_, index) => index + 1);
  const housePicks = picks.filter((pick) => pick.houseSlug === house);
  return <section className="campaign-ledger"><header><p className="eyebrow">The campaign ledger</p><h2>Draft Record</h2></header>
    <div className="draft-tabs" aria-label="Draft views">{(["board", "round", "house"] as View[]).map((item) => <button type="button" key={item} className={view === item ? "active" : ""} onClick={() => setView(item)}>{item === "board" ? "Board" : item === "round" ? "By Round" : "By House"}</button>)}</div>
    {view === "round" && <><div className="round-filter" aria-label="Round filter">{rounds.map((value) => <button type="button" key={value} className={round === value ? "active" : ""} onClick={() => setRound(value)}>{value}</button>)}</div><div className="round-ledger"><h3>Round {round}</h3>{picks.filter((pick) => pick.round === round).map((pick) => <PickRow key={pick.pick} pick={pick}/>)}</div></>}
    {view === "house" && <><div className="house-filter" aria-label="House filter">{draftOrder.map((entry) => <button type="button" key={entry.houseSlug} className={house === entry.houseSlug ? "active" : ""} onClick={() => setHouse(entry.houseSlug)} aria-label={`Show ${entry.owner}'s roster`}><Image src={`/houses/${entry.houseSlug}/crest.webp`} alt="" width={56} height={70}/><span>{entry.owner.split(" ").at(-1)}</span></button>)}</div><div className="house-roster"><header><Image src={`/houses/${house}/crest.webp`} alt="" width={90} height={112}/><div><p className="eyebrow">Complete drafted roster</p><h3>{draftOrder.find((entry) => entry.houseSlug === house)?.owner}</h3></div></header><ol>{housePicks.map((pick) => <li key={pick.pick}><span>R{pick.round}</span><strong>{pick.player}</strong><small>{pick.team}</small><b>#{pick.pick}</b></li>)}</ol><Link href={`/houses/${house}`}>Enter the House ↗</Link></div></>}
    {view === "board" && <div className="draft-board-wrap"><div className="draft-board">{draftOrder.map((entry) => <div className="draft-board__column" key={entry.houseSlug}><header><Image src={`/houses/${entry.houseSlug}/crest.webp`} alt="" width={40} height={50}/><strong>{entry.owner.split(" ").at(-1)}</strong><small>Slot {entry.slot}</small></header>{picks.filter((pick) => pick.houseSlug === entry.houseSlug).map((pick) => <article key={pick.pick}><span>R{pick.round} · #{pick.pick}</span><b>{pick.player}</b><small>{pick.team}</small></article>)}</div>)}</div></div>}
  </section>;
}

function PickRow({ pick }: { pick: Pick }) {
  return <article className="pick-row"><span>{String(pick.pick).padStart(3, "0")}</span><Image src={`/houses/${pick.houseSlug}/crest.webp`} alt="" width={44} height={55}/><div><strong>{pick.player}</strong><small>{pick.team}</small></div><Link href={`/houses/${pick.houseSlug}`}>{pick.owner}<small>{pick.currentBanner}</small></Link></article>;
}
