import Link from "next/link";

const links = [
  ["Houses", "/houses"], ["Champions", "/champions"], ["Relics", "/relics"],
  ["Chronicles", "/chronicles"], ["Artifacts", "/artifacts"], ["2026", "/season/2026"],
];

export function Header() {
  return <header className="site-header">
    <Link href="/" className="brand" aria-label="Bill Swerski 907 home"><span>BS</span><b>907</b></Link>
    <nav aria-label="Primary navigation">
      {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
    </nav>
    <Link href="/about" className="about-link">About</Link>
  </header>;
}
