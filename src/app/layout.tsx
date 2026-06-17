import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "DevelopersValhalla | Custom Software Development",
  description:
    "We build custom software, AI-powered solutions, and scalable digital products that help businesses grow.",
  keywords:
    "custom software development, AI solutions, business automation, cloud architecture, DevelopersValhalla",
  authors: [{ name: "DevelopersValhalla" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "DevelopersValhalla | Custom Software. Built for Your Vision.",
    description:
      "We build custom software, AI-powered solutions, and scalable digital products.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevelopersValhalla",
    description: "Custom software. Built for your vision.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#030005] text-foreground flex flex-col min-h-screen`}
      >
        <LanguageProvider>
          <div className="flex-1">{children}</div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
