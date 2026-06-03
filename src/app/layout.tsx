import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { absoluteUrl, SITE_NAME, siteUrl } from "@/lib/seo";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  metadataBase: siteUrl,
  title: {
    default: `${SITE_NAME} | Custom Systems Agency`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Custom internal systems, workflow automation, client portals, web apps, and websites for service businesses and field teams that need cleaner operations.",
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
    "field service workflow software",
    "custom systems Belgium",
    "workflow automation Belgium",
  ],
  alternates: {
    canonical: absoluteUrl("/"),
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: ["/favicon-32x32.png"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/"),
    siteName: SITE_NAME,
    locale: "en_GB",
    title: `${SITE_NAME} | Custom Systems Agency`,
    description:
      "Custom internal systems, workflow automation, client portals, web apps, and websites for service businesses and field teams that need cleaner operations.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BrandLabel Systems custom operations dashboard preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Custom Systems Agency`,
    description:
      "Custom internal systems, workflow automation, client portals, web apps, and websites for service businesses and field teams that need cleaner operations.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl.toString()}#business`,
    name: SITE_NAME,
    alternateName: "BL",
    url: siteUrl.toString(),
    image: new URL("/og-image.png", siteUrl).toString(),
    description:
      "Custom internal systems, workflow automation, client portals, web apps, and websites for service businesses, event agencies, and field service teams.",
    slogan: "Custom systems for clearer operations.",
    areaServed: ["Belgium", "Europe", "Worldwide"],
    sameAs: [siteUrl.toString()],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl.toString()}#professional-service`,
    name: SITE_NAME,
    url: siteUrl.toString(),
    image: new URL("/og-image.png", siteUrl).toString(),
    description:
      "Custom internal systems, workflow automation, client portals, web apps, and websites for service businesses, event agencies, and field service teams.",
    areaServed: ["Belgium", "Europe", "Worldwide"],
    serviceType: [
      "Custom internal systems",
      "Custom web applications",
      "Workflow automation",
      "Client portals",
      "Business websites",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Custom systems services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Internal Systems",
            provider: {
              "@id": `${siteUrl.toString()}#business`,
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Web Apps",
            provider: {
              "@id": `${siteUrl.toString()}#business`,
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Workflow Automation",
            provider: {
              "@id": `${siteUrl.toString()}#business`,
            },
          },
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl.toString()}#website`,
    name: SITE_NAME,
    url: siteUrl.toString(),
    publisher: {
      "@id": `${siteUrl.toString()}#business`,
    },
    inLanguage: "en",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
