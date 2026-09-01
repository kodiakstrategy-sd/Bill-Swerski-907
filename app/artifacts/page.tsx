import { PageHero } from "@/components/PageHero";
import { artifacts, artifactCategories } from "@/data/artifacts";

export const metadata = { title: "Artifact Archive" };

export default function ArtifactsPage() {
  return <div className="page-wrap"><PageHero eyebrow="Historical evidence · Intake active" title="Artifact Archive" intro="Objects, photographs and forbidden documents recovered from the Realm. Empty frames await authenticated evidence; no false images have been manufactured." />
    <div className="category-strip" aria-label="Artifact categories">{artifactCategories.map(c => <span key={c}>{c}</span>)}</div>
    <section className="artifact-grid">{artifacts.map((artifact, i) => <article key={artifact.title}><div className="artifact-placeholder"><span>{String(i + 1).padStart(2, "0")}</span><b>Evidence pending</b></div><p className="eyebrow">{artifact.category} · {artifact.date}</p><h2>{artifact.title}</h2><p>{artifact.caption}</p><small>{artifact.note}</small></article>)}</section>
  </div>;
}
