import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CouncilOracle } from "@/components/CouncilOracle";
import "./globals.css";
import "@/components/oracle.css";

export const metadata: Metadata = {
  title: { default: "Bill Swerski 907 — The Houses of the North", template: "%s · Bill Swerski 907" },
  description: "The ancient and mostly accurate history of a Juneau, Alaska fantasy football league.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /><CouncilOracle /></body></html>;
}
