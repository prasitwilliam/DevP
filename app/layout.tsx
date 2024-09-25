import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-nv2t.vercel.app/"),
  title: "Smart Portfolio",
  description: "Full-Stack Engineer.",
  generator: "Next.js",
  applicationName: "Dave Portfolio",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "nextjs",
    "astro",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "canada",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
    "creative engineer portfolio",
    "software developer portfolio",
    "frontend engineer portfolio",
    "mobile developer portfolio",
    "AI developer portfolio",
    "GPT-4 API"
  ],
  openGraph: {
    title: "Full-Stack Developer",
    description: "Full-Stack Developer with Powerful AI experience.",
    url: "https://my-portfolio-nv2t.vercel.app/",
    siteName: "Vaclav Plachejda Portfolio",
    images: [
      {
        url: "./public/metadata.png",
        width: 1200,
        height: 630,
        alt: "Vaclav Plachejda Portfolio",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaclav Plachejda Portfolio",
    description: "Senior Full-Stack Engineer.",
    creator: "Vaclav Plachejda",
    creatorId: "0000000000",
    images: ["./public/metadata.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: "no",
  colorScheme: "dark",  // Move the colorScheme here
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
      </body>
    </html>
  );
}
