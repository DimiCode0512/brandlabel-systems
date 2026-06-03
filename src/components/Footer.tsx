"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getLanguageFromPathname,
  localizedPathname,
  useLanguage,
} from "@/lib/i18n";
import { Container } from "./Container";
import { CookieSettingsButton } from "./CookieSettingsButton";

export function Footer() {
  const { language } = useLanguage();
  const pathname = usePathname();
  const activeLanguage = getLanguageFromPathname(pathname) ?? language;

  return (
    <footer className="dark-premium border-t border-white/10 text-white">
      <Container className="grid gap-12 py-14 md:grid-cols-[1.15fr_0.85fr_0.95fr] lg:gap-16 lg:py-16">
        <div>
          <div className="mb-6 inline-flex rounded-sm bg-[#fffdf8] px-3 py-2">
            <Image
              src="/brandlabel-agency-logo.png"
              alt="BrandLabel Agency"
              width={520}
              height={160}
              className="h-14 w-auto max-w-[13rem] object-contain sm:max-w-[15rem]"
            />
          </div>
          <p className="max-w-xl text-xl leading-9 text-neutral-300 lg:text-2xl lg:leading-10">
            BrandLabel Systems builds custom internal systems, web apps, and websites for
            service businesses that need better structure, automation, and control.
          </p>
        </div>
        <div>
          <p className="mb-5 text-xl font-semibold lg:text-2xl">Pages</p>
          <div className="grid gap-4 text-xl text-neutral-300 lg:text-2xl">
            <Link href={localizedPathname("/services", activeLanguage)} className="touch-manipulation hover:text-white active:opacity-70">Services</Link>
            <Link href={localizedPathname("/case-study", activeLanguage)} className="touch-manipulation hover:text-white active:opacity-70">Case Study</Link>
            <Link href={localizedPathname("/contact", activeLanguage)} className="touch-manipulation hover:text-white active:opacity-70">Contact</Link>
            <Link href={localizedPathname("/privacy", activeLanguage)} className="touch-manipulation hover:text-white active:opacity-70">Privacy Policy</Link>
            <CookieSettingsButton />
          </div>
        </div>
        <div>
          <p className="mb-5 text-xl font-semibold lg:text-2xl">Project approach</p>
          <p className="text-xl leading-9 text-neutral-300 lg:text-2xl lg:leading-10">
            Custom quote based on your needs. No fixed packages, no unnecessary software,
            no template thinking.
          </p>
        </div>
      </Container>
    </footer>
  );
}
