import type { Metadata } from "next";
import {
  localizedAlternates,
  localizedUrl,
  type Locale,
  type PublicRoute,
} from "@/lib/seo";

type PageSeo = {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
};

const pageSeo: Record<PublicRoute, PageSeo> = {
  "": {
    title: "Custom Internal Systems & Workflow Automation for Service Businesses",
    description:
      "BrandLabel Systems builds custom internal systems, client portals, workflow automation, and web apps for service businesses and field teams that need clearer operations.",
    keywords: [
      "custom internal systems",
      "workflow automation for service businesses",
      "client portal development",
      "field service operations system",
      "custom web apps",
      "operations dashboard",
      "service business software",
      "BrandLabel Systems",
    ],
    ogTitle: "Custom Internal Systems & Workflow Automation for Service Businesses",
    ogDescription:
      "Replace scattered tools with custom internal systems, web apps, client portals, websites, and workflow automation built around your business.",
  },
  "/services": {
    title: "Services: Custom Systems, Web Apps & Automation",
    description:
      "Custom internal systems, client portals, web apps, workflow automation, service business websites, and ongoing improvements for teams that need cleaner operations.",
    keywords: [
      "custom internal systems services",
      "custom web app development",
      "client portal development",
      "workflow automation services",
      "service business websites",
      "business process automation",
      "maintenance and improvements",
    ],
    ogTitle: "Services: Custom Systems, Web Apps & Automation",
    ogDescription:
      "Explore custom internal systems, client portals, web apps, service websites, workflow automation, maintenance, and improvement services.",
  },
  "/case-study": {
    title: "Confidential Case Study: Field Service Operations System",
    description:
      "A confidential completed project showing how a custom internal system helped a field service team centralize projects, clients, scheduling, documents, approvals, and team tracking.",
    keywords: [
      "field service operations system",
      "custom internal system case study",
      "workflow automation case study",
      "document approval system",
      "team tracking system",
      "client management system",
    ],
    ogTitle: "Confidential Case Study: Field Service Operations System",
    ogDescription:
      "See how a field service team manages projects, clients, workflows, documents, approvals, and team activity in one custom system.",
  },
  "/contact": {
    title: "Contact BrandLabel Systems: Free Systems Audit",
    description:
      "Request a free systems audit from BrandLabel Systems and get a clear recommendation for your workflows, tools, client processes, and operations.",
    keywords: [
      "free systems audit",
      "custom system quote",
      "workflow audit",
      "operations audit",
      "custom internal system consultation",
      "BrandLabel Systems contact",
    ],
    ogTitle: "Contact BrandLabel Systems: Free Systems Audit",
    ogDescription:
      "Tell BrandLabel Systems how your business currently works and request a free systems audit for your workflows, tools, and operations.",
  },
  "/privacy": {
    title: "Privacy Policy",
    description:
      "How BrandLabel Systems collects, uses, stores, protects, and discloses personal information.",
    keywords: [
      "BrandLabel Systems privacy policy",
      "privacy policy",
      "cookie policy",
      "analytics cookies",
      "personal data",
    ],
    ogTitle: "Privacy Policy",
    ogDescription:
      "How BrandLabel Systems handles personal information, cookies, analytics, service providers, retention, security, and privacy rights.",
  },
};

export function createPageMetadata(
  route: PublicRoute,
  locale: Locale = "en",
): Metadata {
  const seo = pageSeo[route];
  const url = localizedUrl(route, locale);

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: url,
      languages: localizedAlternates(route),
    },
    openGraph: {
      title: seo.ogTitle ?? seo.title,
      description: seo.ogDescription ?? seo.description,
      url,
      locale: locale === "fr" ? "fr_FR" : locale === "nl" ? "nl_NL" : "en_GB",
    },
  };
}
