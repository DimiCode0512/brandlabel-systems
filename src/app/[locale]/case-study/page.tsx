import CaseStudyPage from "@/app/case-study/page";
import { createPageMetadata } from "@/lib/pageMetadata";
import { isLocale, type Locale } from "@/lib/seo";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "nl" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return createPageMetadata("/case-study", locale as Locale);
}

export default async function LocalizedCaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <CaseStudyPage />;
}
