import type { MetadataRoute } from "next";
import { defaultLocale, locales, localizedUrl, publicRoutes } from "@/lib/seo";

const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: localizedUrl(route, locale),
      lastModified,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: locale === defaultLocale && route === "" ? 1 : 0.8,
    })),
  );
}
