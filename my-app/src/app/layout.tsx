import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devs Valhalla | Premium Software Development | Colombia & USA",
  description: "Elite software development company from Colombia serving global clients. Premium custom software solutions, enterprise applications, and cutting-edge technology for businesses worldwide, especially USA.",
  keywords: "software development Colombia, custom software USA, enterprise applications, premium software solutions, web development, mobile apps, Colombia developers, USA software company",
  authors: [{ name: "Devs Valhalla" }],
  openGraph: {
    title: "Devs Valhalla | Premium Software Development",
    description: "Elite software development from Colombia. Premium custom software for global businesses.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devs Valhalla | Premium Software Development",
    description: "Elite software development from Colombia. Premium custom software for global businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-text-DEFAULT flex flex-col min-h-screen`}
      >
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
