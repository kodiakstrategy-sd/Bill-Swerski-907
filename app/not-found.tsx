import Link from "next/link";

export default function NotFound() { return <div className="not-found"><p className="eyebrow">Lost beyond the mapped Realm</p><h1>404</h1><p>No chronicler has recorded this place.</p><Link href="/" className="button">Return North</Link></div>; }
