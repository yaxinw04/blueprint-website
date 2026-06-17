import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blueprint | University Admissions Coaching",
  description:
    "Personalized coaching to help high school students build strong university applications, write meaningful essays, and stay organized from start to submit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${sourceSans.variable} scroll-smooth scroll-pt-16 md:scroll-pt-[4.5rem]`}
    >
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
