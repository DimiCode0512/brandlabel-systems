"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

type HeroDepthColumnProps = {
  children: ReactNode;
  className?: string;
  factor: number;
  style?: CSSProperties;
};

export function HeroDepthColumn({
  children,
  className = "",
  factor,
  style,
}: HeroDepthColumnProps) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const update = () => {
      if (motionQuery.matches || !desktopQuery.matches) {
        setOffsetY(0);
        return;
      }

      const root = document.querySelector("[data-hero-depth-root]");
      if (!root) return;
      const rect = root.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = rect.top + rect.height / 2;
      const dist = vh / 2 - center;
      setOffsetY(dist * factor);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    motionQuery.addEventListener("change", update);
    desktopQuery.addEventListener("change", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      motionQuery.removeEventListener("change", update);
      desktopQuery.removeEventListener("change", update);
    };
  }, [factor]);

  const motionStyle: CSSProperties = {
    transform: `translate3d(0, ${offsetY}px, 0)`,
    willChange: offsetY !== 0 ? "transform" : undefined,
    ...style,
  };

  return (
    <div className={className} style={motionStyle}>
      {children}
    </div>
  );
}
