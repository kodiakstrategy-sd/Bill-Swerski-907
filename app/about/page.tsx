import { PageHero } from "@/components/PageHero";

export const metadata = { title: "About the Archive" };

export default function AboutPage() {
  return <div className="page-wrap about-page"><PageHero eyebrow="A note from beyond the Council" title="It got a little out of hand." intro="I gave years of Bill Swerski 907 league history, group-chat lore, running jokes, rivalries and whatever evidence could be recovered to AI and asked it to analyze the league as if it were an actual civilization." /><p>No prophecy was required. Only structured data, several disputed memories and a willingness to treat fantasy football with completely unwarranted historical gravity.</p></div>;
}
