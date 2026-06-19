import type { Metadata } from "next";
import { IBM_Plex_Sans, Newsreader, Geist_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Burrows | CTO & Solution Architect",
  description:
    "CTO and Solution Architect with over 20 years' experience building enterprise platforms for PwC, BBC, Pfizer, Toyota, and others. TypeScript, React, Next.js, Drupal, and Laravel.",
  keywords: [
    "Alex Burrows",
    "CTO",
    "Solution Architect",
    "Technical Leadership",
    "TypeScript",
    "React",
    "Next.js",
    "Drupal",
    "Laravel",
    "Enterprise Solutions",
  ],
  authors: [{ name: "Alex Burrows" }],
  openGraph: {
    title: "Alex Burrows | CTO & Solution Architect",
    description:
      "CTO and Solution Architect with over 20 years' experience building enterprise platforms for global organisations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVariables = `${ibmPlexSans.variable} ${newsreader.variable} ${geistMono.variable}`;

  return (
    <html lang="en-GB" className={fontVariables} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
