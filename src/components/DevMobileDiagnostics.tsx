"use client";

import { useEffect, useMemo, useState } from "react";

type TapDetails = {
  target: string;
  elementFromPoint: string;
};

function trimClassName(value: string) {
  const normalized = value.replace(/\s+/g, " ").trim();
  return normalized.length > 80 ? `${normalized.slice(0, 80)}...` : normalized;
}

function describeElement(el: Element | null) {
  if (!el) return "none";
  const id = el.id ? `#${el.id}` : "";
  const cls =
    "className" in el && typeof (el as HTMLElement).className === "string"
      ? trimClassName((el as HTMLElement).className)
      : "";
  return `${el.tagName.toLowerCase()}${id}${cls ? ` .${cls}` : ""}`;
}

export function DevMobileDiagnostics() {
  const [hydrated, setHydrated] = useState(false);
  const [width] = useState<number | null>(
    typeof window === "undefined" ? null : window.innerWidth,
  );
  const [uaFlags] = useState(() => {
    if (typeof window === "undefined") return "none";
    const ua = window.navigator.userAgent;
    const flags = [
      /Mobile/i.test(ua) ? "Mobile" : "",
      /Safari/i.test(ua) ? "Safari" : "",
      /iPhone/i.test(ua) ? "iPhone" : "",
    ]
      .filter(Boolean)
      .join(",");
    return flags || "none";
  });
  const [tapDetails, setTapDetails] = useState<TapDetails>({
    target: "none",
    elementFromPoint: "none",
  });
  const [tapCount, setTapCount] = useState(0);
  const [lastError, setLastError] = useState("none");

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => setHydrated(true));

    const readTap = (event: Event) => {
      const target = event.target instanceof Element ? describeElement(event.target) : "none";

      let x = 0;
      let y = 0;
      if (event instanceof PointerEvent || event instanceof MouseEvent) {
        x = event.clientX;
        y = event.clientY;
      } else if (event instanceof TouchEvent && event.touches.length > 0) {
        x = event.touches[0].clientX;
        y = event.touches[0].clientY;
      }

      const underFinger = describeElement(document.elementFromPoint(x, y));
      setTapDetails({ target, elementFromPoint: underFinger });
    };

    const onError = (event: ErrorEvent) => {
      setLastError(event.message || "window.onerror fired");
    };

    const onRejection = (event: PromiseRejectionEvent) => {
      const message =
        typeof event.reason === "string"
          ? event.reason
          : event.reason?.message || "unhandled rejection";
      setLastError(message);
    };

    window.addEventListener("pointerdown", readTap, true);
    window.addEventListener("click", readTap, true);
    window.addEventListener("touchstart", readTap, true);
    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("pointerdown", readTap, true);
      window.removeEventListener("click", readTap, true);
      window.removeEventListener("touchstart", readTap, true);
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  const hydrationText = hydrated ? "React hydrated: yes" : "React hydrated";
  const headerText = useMemo(() => `${hydrationText} | width: ${width ?? "?"}`, [hydrationText, width]);

  return (
    <>
      <div className="pointer-events-none fixed bottom-4 left-4 z-[999999] max-h-[42svh] max-w-[min(92vw,30rem)] overflow-auto rounded-md border border-red-500/80 bg-red-900/45 p-3 text-[11px] leading-relaxed text-white shadow-lg">
        <p className="font-semibold text-emerald-300">{headerText}</p>
        <p className="mt-1">ua flags: {uaFlags}</p>
        <p className="mt-1 break-all">last tap target: {tapDetails.target}</p>
        <p className="mt-1 break-all">elementFromPoint: {tapDetails.elementFromPoint}</p>
        <p className="mt-1 break-all text-rose-300">last error: {lastError}</p>
      </div>

      <button
        type="button"
        className="pointer-events-auto fixed bottom-4 right-4 z-[999999] min-h-14 min-w-28 rounded-md bg-fuchsia-600 px-4 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
        onClick={() => setTapCount((n) => n + 1)}
      >
        TEST TAP {tapCount}
      </button>
    </>
  );
}
