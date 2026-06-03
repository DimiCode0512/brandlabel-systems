"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getLanguageFromPathname,
  localizedPathname,
  useLanguage,
} from "@/lib/i18n";

type LocalizedLinkProps = React.ComponentProps<typeof Link>;

export function LocalizedLink({ href, ...props }: LocalizedLinkProps) {
  const { language } = useLanguage();
  const pathname = usePathname();
  const activeLanguage = getLanguageFromPathname(pathname) ?? language;
  const nextHref =
    typeof href === "string" && href.startsWith("/")
      ? localizedPathname(href, activeLanguage)
      : href;

  return <Link href={nextHref} {...props} />;
}
