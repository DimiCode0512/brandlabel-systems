"use client";

import { useEffect, useState } from "react";

export function useIsDesktop(breakpoint = 1024) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const m = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const sync = () => setIsDesktop(m.matches);
    m.addEventListener("change", sync);
    const id = window.requestAnimationFrame(sync);
    return () => {
      m.removeEventListener("change", sync);
      window.cancelAnimationFrame(id);
    };
  }, [breakpoint]);

  return isDesktop;
}
