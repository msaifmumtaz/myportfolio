import type { Metadata } from "next";
import { Space_Grotesk, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/config";
import { siteUrl } from "@/lib/seo";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/next"
import { CookieConsent } from "@/components/cookie-consent";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  preload: false,
});

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.home_title,
    template: `%s | ${siteConfig.brand}`,
  },
  description: siteConfig.meta_description,
  keywords: siteConfig.seo_keywords,
  authors: [{ name: siteConfig.author, url: siteUrl }],
  creator: siteConfig.author,
  openGraph: { type: "website", siteName: siteConfig.brand, locale: "en_US" },
  twitter: { card: "summary_large_image", creator: siteConfig.twitter_handle },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${geist.variable} ${geistMono.variable} antialiased bg-bg-core text-text-main font-body min-h-[100dvh]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-[70dvh]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics/>
        <CookieConsent />
      </body>
    </html>
  );
}
