import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Burrows | CTO & Solution Architect",
  description: "CTO and Solution Architect specializing in TypeScript, React, Next.js, and Drupal. Delivering enterprise solutions for PwC, BBC, Pfizer, Toyota, and more.",
  keywords: ["Alex Burrows", "CTO", "Solution Architect", "Technical Leadership", "TypeScript", "React", "Next.js", "Drupal", "Enterprise Solutions", "Web Development"],
  authors: [{ name: "Alex Burrows" }],
  openGraph: {
    title: "Alex Burrows | CTO & Solution Architect",
    description: "CTO and Solution Architect delivering enterprise solutions for global brands including PwC, BBC, Pfizer, and Toyota.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
