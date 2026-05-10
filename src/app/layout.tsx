import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://brandlabelagency.com",
);

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "BrandLabel Systems | Custom Systems Agency",
    template: "%s | BrandLabel Systems",
  },
  description:
    "Custom internal systems, web apps, websites, and workflow automation for businesses that need cleaner operations.",
  keywords: [
    "custom systems agency",
    "custom internal systems",
    "custom web apps",
    "workflow automation",
    "client portals",
    "operations dashboard",
    "business process automation",
    "service business software",
    "custom websites",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "BrandLabel Systems",
    title: "BrandLabel Systems | Custom Systems Agency",
    description:
      "Custom internal systems, web apps, websites, and workflow automation for businesses that need cleaner operations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrandLabel Systems | Custom Systems Agency",
    description:
      "Custom internal systems, web apps, websites, and workflow automation for businesses that need cleaner operations.",
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
    <html lang="en">
      <body className={`${inter.variable} ${display.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
