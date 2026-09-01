import Link from "next/link";

export function Footer() {
  return <footer className="site-footer">
    <div><p className="eyebrow">Recorded in the North</p><p className="footer-mark">BILL SWERSKI <span>907</span></p></div>
    <div className="footer-links"><Link href="/scroll">The Great Scroll</Link><Link href="/about">About the Archive</Link></div>
    <p className="footer-note">Juneau, Alaska · Ten Houses · One deeply disputed civilization</p>
  </footer>;
}
