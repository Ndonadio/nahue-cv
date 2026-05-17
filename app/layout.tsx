import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cv } from "@/lib/cv-data";
import { Analytics } from "@vercel/analytics/next";

// Load the two fonts via next/font for zero CLS and optimal loading.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${cv.hero.name} — ${cv.hero.title}`,
  description: cv.hero.tagline,
  metadataBase: new URL("https://nahue-cv.vercel.app"),
  openGraph: {
    title: `${cv.hero.name} — ${cv.hero.title}`,
    description: cv.hero.tagline,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${cv.hero.name} — ${cv.hero.title}`,
    description: cv.hero.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} dark`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
