import type { Metadata } from "next";
import { IBM_Plex_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-ibm",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.shortName} | ${site.role}`,
  description: site.headline,
  openGraph: {
    title: `${site.shortName} | ${site.role}`,
    description: site.headline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${ibmPlex.variable}`}>
      <body
        className="font-body"
        style={
          {
            "--font-display": "var(--font-outfit), ui-sans-serif, system-ui, sans-serif",
            "--font-body": "var(--font-ibm), ui-sans-serif, system-ui, sans-serif",
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
