"use client";

import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import Script from "next/script";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getLanguageFromPathname, localizedPathname } from "@/lib/i18n";

const CONSENT_KEY = "brandlabel_cookie_consent";

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const pathname = usePathname();
  const language = getLanguageFromPathname(pathname) ?? "en";
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedConsent = window.localStorage.getItem(CONSENT_KEY);
      if (savedConsent === "accepted" || savedConsent === "declined") {
        setConsent(savedConsent);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const saveConsent = (value: "accepted" | "declined") => {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  };

  return (
    <>
      <VercelAnalytics />

      {gaId && consent === "accepted" ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      ) : null}

      {consent === null ? (
        <div className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-4xl rounded-xl border border-[#0B1F3A]/12 bg-[#fffdf8]/95 p-4 text-[#0B1F3A] shadow-[0_24px_70px_rgba(11,31,58,0.22)] backdrop-blur md:bottom-6 md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-6 md:p-5">
          <div>
            <p className="text-lg font-semibold leading-tight md:text-xl">
              Cookies and analytics
            </p>
            <p className="mt-2 text-base leading-6 text-slate-700 md:text-lg md:leading-7">
              We use analytics cookies to understand how visitors use this website and improve it.
              You can accept or decline non-essential analytics. Read the{" "}
              <Link href={localizedPathname("/privacy", language)} className="font-semibold text-[#0B1F3A] underline decoration-[#C8A96A]/60 underline-offset-4">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 md:mt-0 md:flex md:items-center">
            <button
              type="button"
              onClick={() => saveConsent("declined")}
              className="min-h-12 rounded-sm border border-[#0B1F3A]/15 bg-white px-5 text-base font-semibold text-[#0B1F3A] transition hover:border-[#C8A96A]/60 hover:bg-[#f7f3ea] md:text-lg"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => saveConsent("accepted")}
              className="min-h-12 rounded-sm bg-[#C8A96A] px-5 text-base font-semibold text-[#0B1F3A] shadow-[0_12px_30px_rgba(200,169,106,0.26)] transition hover:bg-[#D6BA7D] md:text-lg"
            >
              Accept
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
