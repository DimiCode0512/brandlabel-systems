"use client";

/**
 * Decorative layers for the hero; motion is CSS-driven. Reduced on mobile via globals.
 */
export function HeroAmbience() {
  return (
    <>
      <div
        className="pointer-events-none absolute -left-1/4 top-1/4 size-[min(560px,72vw)] rounded-full bg-[#C8A96A]/19 blur-3xl hero-glow-drift lg:size-[min(620px,58vw)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/5 bottom-0 size-[min(520px,68vw)] rounded-full bg-[#0B1F3A]/22 blur-3xl hero-glow-drift-alt lg:size-[min(580px,52vw)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.62] hero-grid-parallax [background-image:linear-gradient(rgba(11,31,58,0.065)_1px,transparent_1px),linear-gradient(90deg,rgba(11,31,58,0.065)_1px,transparent_1px)] [background-size:44px_44px] lg:opacity-[0.72]"
        aria-hidden
      />
    </>
  );
}
