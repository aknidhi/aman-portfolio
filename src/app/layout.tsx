
import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aman Nidhi | Data Analytics & ML Developer",
  description:
    "Portfolio of Aman Nidhi — Data Analytics and Machine Learning Developer building intelligent applications and practical AI solutions.",
  keywords: [
    "Aman Nidhi",
    "Data Analytics",
    "Machine Learning",
    "AI Developer",
    "Portfolio",
  ],
  authors: [{ name: "Aman Nidhi" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
