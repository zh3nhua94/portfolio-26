import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zen Wong | Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer portfolio featuring React-focused product delivery, frontend engineering craft, and project case studies by Zen Wong.",
  keywords: [
    "Zen Wong",
    "Senior Frontend Engineer",
    "React Engineer",
    "Frontend Engineer",
    "Web Developer Malaysia",
  ],
  metadataBase: new URL("https://zenwongdev.com"),
  openGraph: {
    title: "Zen Wong | Senior Frontend Engineer",
    description:
      "Portfolio website showcasing React projects, frontend engineering strengths, and contact details.",
    url: "https://zenwongdev.com",
    siteName: "Zen Wong Portfolio",
    type: "website",
    images: [
      {
        url: "/react/food/food.jpg",
        width: 1200,
        height: 630,
        alt: "Zen Wong portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zen Wong | Senior Frontend Engineer",
    description:
      "Explore Zen Wong's React portfolio projects and senior frontend engineering work.",
    images: ["/react/food/food.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
