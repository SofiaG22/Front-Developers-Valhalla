import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = savedTheme === 'dark' || savedTheme === 'light' 
                  ? savedTheme 
                  : prefersDark ? 'dark' : 'light';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background dark:bg-gray-900 text-text-DEFAULT dark:text-gray-100 flex flex-col min-h-screen transition-colors duration-300`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
