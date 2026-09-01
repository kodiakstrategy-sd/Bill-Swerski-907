import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Bill Swerski 907 — The Houses of the North", template: "%s · Bill Swerski 907" },
  description: "The ancient and mostly accurate history of a Juneau, Alaska fantasy football league.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /></body></html>;
}
