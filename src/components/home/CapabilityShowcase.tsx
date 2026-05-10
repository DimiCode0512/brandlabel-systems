"use client";

import { Container } from "@/components/Container";
import { AnimatePresence, motion } from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";

const CAROUSEL_EASE = [0.22, 1, 0.36, 1] as const;

const SHOWCASE_BLOCKS = [
  {
    step: 1,
    title: "From scattered tools",
    text: "Excel files, messages, calendars, and documents all live in different places.",
    visual: "scattered",
  },
  {
    step: 2,
    title: "One operating dashboard",
    text: "Projects, clients, tasks, documents, and approvals become visible in one place.",
    visual: "dashboard",
  },
  {
    step: 3,
    title: "Documents signed online",
    text: "Send agreements, collect approvals, and validate signatures with OTP email verification.",
    visual: "signing",
  },
  {
    step: 4,
    title: "Team activity tracked clearly",
    text: "Clock-in, clock-out, geolocation, and job status help managers see what is happening.",
    visual: "team",
  },
  {
    step: 5,
    title: "Built around your workflow",
    text: "The system follows how your business actually works, not how generic software expects you to work.",
    visual: "workflow",
  },
] as const;

type VisualKey = (typeof SHOWCASE_BLOCKS)[number]["visual"];

/** All decoration and mock content stay inside this frame — aspect locked, overflow clipped */
function VisualMockCard({ children }: { children: ReactNode }) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#0B1F3A]/20 bg-[#050a14] shadow-[0_30px_80px_rgba(11,31,58,0.28)]">
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_50%_0%,rgba(200,169,106,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.32] [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:26px_26px]" />
      <div className="relative z-[1] flex h-full min-h-0 flex-col overflow-hidden p-3 sm:p-4">
        {children}
      </div>
    </div>
  );
}

function VisualScattered() {
  const cards = [
    { label: "Sales.xlsx", sub: "v12 · local", cls: "border-[#C8A96A]/40 bg-[#0B1F3A]/95 text-[#F3DEAA]" },
    { label: "Messages", sub: "42 threads", cls: "border-white/15 bg-[#0a1628]/95 text-slate-200" },
    { label: "Calendar", sub: "Conflicts", cls: "border-white/12 bg-[#142f55]/90 text-slate-100" },
    { label: "Contract.pdf", sub: "Review", cls: "border-[#C8A96A]/35 bg-[#071423]/95 text-[#F3DEAA]" },
    { label: "Notes.doc", sub: "Unknown", cls: "border-white/12 bg-[#0a1628]/95 text-slate-300" },
  ];
  const rotations = [-7, 4, -5, 8, -4];
  const positions = [
    "left-[4%] top-[6%] w-[46%]",
    "right-[5%] top-[10%] w-[44%]",
    "left-[14%] top-[40%] w-[42%]",
    "right-[8%] top-[44%] w-[40%]",
    "left-[24%] bottom-[12%] w-[48%]",
  ];
  return (
    <VisualMockCard>
      <div className="relative h-full min-h-0 w-full flex-1">
        {cards.map((c, i) => (
          <div
            key={c.label}
            className={`absolute rounded-md border px-2 py-1.5 shadow-md sm:px-2.5 sm:py-2 ${positions[i]} ${c.cls}`}
            style={{ transform: `rotate(${rotations[i]}deg)`, zIndex: 10 + i }}
          >
            <p className="text-[10px] font-semibold leading-tight sm:text-[11px]">{c.label}</p>
            <p className="mt-0.5 text-[8px] text-slate-500 sm:text-[9px]">{c.sub}</p>
          </div>
        ))}
        <p className="absolute bottom-1 left-0 right-0 text-center text-[8px] font-medium uppercase tracking-[0.18em] text-[#C8A96A]/75 sm:text-[9px]">
          No single source of truth
        </p>
      </div>
    </VisualMockCard>
  );
}

function VisualDashboard() {
  return (
    <VisualMockCard>
      <div className="flex min-h-0 flex-1 gap-2 overflow-hidden sm:gap-3">
        <aside className="flex w-[5.5rem] shrink-0 flex-col gap-1 sm:w-[6.5rem]">
          {["Overview", "Clients", "Projects", "Docs"].map((item, i) => (
            <div
              key={item}
              className={`rounded-md px-1.5 py-1 text-[9px] sm:px-2 sm:py-1.5 sm:text-[10px] ${i === 0 ? "border border-[#C8A96A]/30 bg-[#C8A96A]/10 text-[#F3DEAA]" : "border border-white/10 text-slate-500"}`}
            >
              {item}
            </div>
          ))}
        </aside>
        <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-1.5 overflow-hidden">
          <div className="flex items-start justify-between gap-2 border-b border-white/10 pb-1.5">
            <div className="min-w-0">
              <p className="text-[9px] uppercase tracking-[0.15em] text-[#C8A96A] sm:text-[10px]">Operations OS</p>
              <p className="truncate font-display text-xs font-semibold text-white sm:text-sm">Overview</p>
            </div>
            <span className="shrink-0 rounded border border-[#C8A96A]/35 bg-[#C8A96A]/15 px-1.5 py-0.5 text-[9px] text-[#F3DEAA]">
              Synced
            </span>
          </div>
          <div className="grid grid-cols-2 gap-1 sm:grid-cols-4 sm:gap-1.5">
            {[
              { k: "Projects", v: "24" },
              { k: "Clients", v: "42" },
              { k: "Tasks", v: "118" },
              { k: "Docs", v: "138" },
            ].map((s) => (
              <div key={s.k} className="rounded-md border border-white/10 bg-white/[0.06] p-1.5 sm:p-2">
                <p className="text-[8px] text-slate-400 sm:text-[9px]">{s.k}</p>
                <p className="text-sm font-semibold tabular-nums text-white sm:text-base">{s.v}</p>
              </div>
            ))}
          </div>
          <div className="grid min-h-0 flex-1 gap-1.5 overflow-hidden lg:grid-cols-5">
            <div className="flex min-h-0 flex-col overflow-hidden rounded-md border border-white/10 bg-white/[0.05] p-2 lg:col-span-3">
              <p className="text-[10px] font-medium text-white">Volume</p>
              <div className="mt-1.5 flex h-12 flex-1 items-end gap-0.5 sm:h-14 sm:gap-1">
                {[40, 55, 48, 70, 62, 78, 68].map((h, i) => (
                  <div key={i} className="flex h-full flex-1 flex-col justify-end">
                    <div
                      className="w-full rounded-t-sm bg-gradient-to-t from-[#0B1F3A] to-[#C8A96A]/65"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex min-h-0 flex-col overflow-hidden rounded-md border border-white/10 bg-white/[0.05] p-2 lg:col-span-2">
              <p className="text-[10px] font-medium text-white">Activity</p>
              <div className="mt-1.5 space-y-1 overflow-hidden">
                {["Invoice approved", "Visit scheduled", "Contract viewed"].map((line) => (
                  <div key={line} className="flex gap-1 text-[8px] text-slate-300 sm:text-[9px]">
                    <span className="mt-0.5 size-1 shrink-0 rounded-full bg-[#C8A96A]" />
                    <span className="line-clamp-2 leading-snug">{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </VisualMockCard>
  );
}

function VisualSigning() {
  return (
    <VisualMockCard>
      <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden sm:flex-row sm:gap-3">
        <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-lg border border-white/10 bg-[#0B1F3A]/45 p-2.5 sm:p-3">
          <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="text-[9px] uppercase tracking-[0.15em] text-[#C8A96A]">Agreement</p>
              <p className="font-display text-xs font-semibold text-white sm:text-sm">Master services · v3</p>
            </div>
            <div className="shrink-0 rounded border border-[#C8A96A]/40 bg-[#C8A96A]/15 px-2 py-1 text-center">
              <p className="text-[8px] uppercase text-[#F3DEAA]">OTP</p>
              <p className="text-[10px] font-semibold text-white">Verified</p>
            </div>
          </div>
          <div className="min-h-0 flex-1 rounded-md border border-dashed border-white/15 bg-[#050d18]/75 p-2">
            <div className="space-y-1.5">
              <div className="h-1.5 w-[70%] rounded-full bg-white/10" />
              <div className="h-1.5 w-full rounded-full bg-white/[0.07]" />
              <div className="h-1.5 w-[85%] rounded-full bg-white/[0.07]" />
            </div>
            <div className="mt-2 flex justify-between border-t border-white/10 pt-2 text-[8px] sm:text-[9px]">
              <span className="text-slate-400">Signer</span>
              <span className="truncate text-slate-200">ops@demo.test</span>
            </div>
            <div className="mt-1 flex justify-between text-[8px] sm:text-[9px]">
              <span className="text-slate-400">Audit trail</span>
              <span className="text-slate-200">3 events</span>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between rounded-md border border-[#C8A96A]/28 bg-[#C8A96A]/10 px-2 py-1.5">
            <span className="text-[9px] text-[#F3DEAA] sm:text-[10px]">Signature status</span>
            <span className="font-display text-xs italic text-white">Signed</span>
          </div>
        </div>
        <div className="flex w-full shrink-0 flex-col justify-center rounded-lg border border-white/10 bg-[#071423]/90 p-2.5 sm:w-[7rem] sm:p-3">
          <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[#C8A96A]">OTP code</p>
          <p className="mt-1 font-display text-xl font-semibold tracking-wider text-white sm:text-2xl">628 014</p>
          <p className="mt-1 text-[8px] leading-snug text-slate-400">Email verified</p>
        </div>
      </div>
    </VisualMockCard>
  );
}

function VisualTeam() {
  return (
    <VisualMockCard>
      <div className="grid min-h-0 flex-1 gap-2 overflow-hidden sm:grid-cols-2 sm:gap-3">
        <div className="flex min-h-0 flex-col overflow-hidden rounded-lg border border-white/10 bg-[#050d18] p-2 sm:p-2.5">
          <div className="mb-1.5 flex items-center justify-between">
            <p className="text-[8px] font-semibold uppercase tracking-[0.1em] text-[#C8A96A] sm:text-[9px]">Mobile worker</p>
            <span className="rounded-full border border-[#C8A96A]/40 bg-[#C8A96A]/20 px-1.5 py-0.5 text-[8px] text-[#F3DEAA]">
              Live
            </span>
          </div>
          <div className="relative min-h-[5.5rem] flex-1 overflow-hidden rounded-md border border-white/10 bg-gradient-to-br from-[#143963] to-[#050a14] sm:min-h-[6.5rem]">
            <div className="absolute left-[22%] top-[32%] grid size-7 place-items-center rounded-full border-2 border-[#C8A96A] bg-[#C8A96A]/25">
              <span className="size-2 rounded-full bg-white" />
            </div>
            <div className="absolute bottom-1.5 left-1.5 right-1.5 rounded bg-[#050d18]/92 px-1.5 py-1 text-[8px] text-slate-300">
              Geofence OK · on site
            </div>
          </div>
          <p className="mt-1.5 text-[8px] text-slate-400">Clock-in 07:58 · Clock-out 16:14</p>
        </div>
        <div className="flex min-h-0 flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-[#071423]/85 p-2 sm:p-2.5">
          <p className="text-[9px] uppercase tracking-[0.12em] text-[#C8A96A]">Job list</p>
          <div className="mt-1.5 space-y-1.5 overflow-hidden">
            {[
              { j: "Site work · North", s: "On site · 2h 14m" },
              { j: "Handoff · Meridian", s: "En route" },
              { j: "Inspection · Dock 4", s: "Scheduled 14:00" },
            ].map((row) => (
              <div key={row.j} className="rounded-md border border-white/10 bg-white/[0.06] px-2 py-1.5">
                <p className="truncate text-[9px] font-medium text-slate-100">{row.j}</p>
                <p className="text-[8px] text-slate-400">{row.s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </VisualMockCard>
  );
}

function VisualWorkflow() {
  const stages = ["Lead", "Quote", "Approve", "Deliver", "Archive"];
  return (
    <VisualMockCard>
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[9px] uppercase tracking-[0.15em] text-[#C8A96A]">Pipeline</p>
            <p className="font-display text-xs font-semibold text-white sm:text-sm">Your workflow</p>
          </div>
          <div className="shrink-0 rounded border border-white/10 bg-white/[0.06] px-2 py-1 text-[8px] text-slate-300">
            Automation rules
          </div>
        </div>
        <div className="mb-2 flex flex-wrap gap-1">
          {stages.map((name, i) => (
            <div key={name} className="flex items-center gap-1">
              <div
                className={`rounded-md border px-1.5 py-1 text-[9px] font-semibold sm:px-2 sm:text-[10px] ${i <= 2 ? "border-[#C8A96A]/45 bg-[#C8A96A]/15 text-[#F3DEAA]" : i === 3 ? "border-[#C8A96A] bg-[#C8A96A]/25 text-white" : "border-white/12 text-slate-500"}`}
              >
                {name}
              </div>
              {i < stages.length - 1 && (
                <span className="text-[8px] text-slate-600" aria-hidden>
                  →
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="grid min-h-0 flex-1 gap-1.5 overflow-hidden lg:grid-cols-3">
          <div className="rounded-md border border-white/10 bg-[#071423]/90 p-2 lg:col-span-2">
            <p className="text-[10px] font-medium text-white">Automation rules</p>
            <div className="mt-1.5 grid gap-1.5 sm:grid-cols-2">
              <div className="rounded border border-[#C8A96A]/20 bg-[#0B1F3A]/55 p-1.5">
                <p className="text-[8px] uppercase text-[#C8A96A]">Branch</p>
                <p className="mt-0.5 text-[9px] text-slate-200">By region · owner</p>
              </div>
              <div className="rounded border border-[#C8A96A]/20 bg-[#0B1F3A]/55 p-1.5">
                <p className="text-[8px] uppercase text-[#C8A96A]">Approval gate</p>
                <p className="mt-0.5 text-[9px] text-slate-200">Manager sign-off</p>
              </div>
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.05] p-2">
            <p className="text-[8px] uppercase text-slate-400">Pipeline health</p>
            <p className="mt-1 font-display text-2xl font-semibold text-white">94%</p>
            <p className="text-[9px] text-[#C8A96A]">On track</p>
          </div>
        </div>
      </div>
    </VisualMockCard>
  );
}

const VISUALS: Record<VisualKey, () => ReactElement> = {
  scattered: VisualScattered,
  dashboard: VisualDashboard,
  signing: VisualSigning,
  team: VisualTeam,
  workflow: VisualWorkflow,
};

const STEP_COUNT = SHOWCASE_BLOCKS.length;

function MobileShowcaseCarousel({ reduceMotion }: { reduceMotion: boolean }) {
  const [step, setStep] = useState(0);
  const block = SHOWCASE_BLOCKS[step];
  const Visual = VISUALS[block.visual];
  const goPrev = () => setStep((s) => Math.max(0, s - 1));
  const goNext = () => setStep((s) => Math.min(STEP_COUNT - 1, s + 1));

  return (
    <div className="mt-10">
      <div className="relative">
        <AnimatePresence initial={false}>
          <motion.div
            key={step}
            initial={
              reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={
              reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }
            }
            transition={{ duration: 0.42, ease: CAROUSEL_EASE }}
            className="flex flex-col gap-5"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A96A]">
                Step {String(block.step).padStart(2, "0")} /{" "}
                {String(STEP_COUNT).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-2 text-2xl font-semibold text-[#0B1F3A]">
                {block.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {block.text}
              </p>
            </div>
            <div className="relative w-full">
              <Visual />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-7 flex items-center justify-between gap-4">
        <motion.button
          type="button"
          onClick={goPrev}
          disabled={step === 0}
          whileTap={step === 0 ? {} : { scale: 0.95 }}
          transition={{ duration: 0.1 }}
          className="inline-flex min-h-11 touch-manipulation items-center gap-1.5 rounded-sm border border-[#0B1F3A]/15 bg-white/70 px-4 text-sm font-semibold text-[#0B1F3A] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Previous step"
        >
          <span aria-hidden>←</span> Prev
        </motion.button>
        <div
          className="flex items-center gap-2"
          role="tablist"
          aria-label="Step indicators"
        >
          {SHOWCASE_BLOCKS.map((b, i) => {
            const active = i === step;
            return (
              <motion.button
                key={b.step}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Go to step ${b.step}: ${b.title}`}
                onClick={() => setStep(i)}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.1 }}
                className="touch-manipulation grid min-h-[28px] min-w-[16px] place-items-center"
              >
                <span
                  className={`block h-2 rounded-full transition-[width,background-color] duration-300 ${
                    active ? "w-8 bg-[#C8A96A]" : "w-2 bg-[#0B1F3A]/20"
                  }`}
                />
              </motion.button>
            );
          })}
        </div>
        <motion.button
          type="button"
          onClick={goNext}
          disabled={step === STEP_COUNT - 1}
          whileTap={step === STEP_COUNT - 1 ? {} : { scale: 0.95 }}
          transition={{ duration: 0.1 }}
          className="inline-flex min-h-11 touch-manipulation items-center gap-1.5 rounded-sm border border-[#0B1F3A]/15 bg-white/70 px-4 text-sm font-semibold text-[#0B1F3A] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Next step"
        >
          Next <span aria-hidden>→</span>
        </motion.button>
      </div>
      <p className="mt-3 text-center text-xs text-slate-500">
        {step + 1} / {STEP_COUNT}
      </p>
    </div>
  );
}

export function CapabilityShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopQuery = window.matchMedia("(min-width: 900px)");

    const handleMotion = () => setReduceMotion(motionQuery.matches);
    const handleDesktop = () => setIsDesktop(desktopQuery.matches);

    motionQuery.addEventListener("change", handleMotion);
    desktopQuery.addEventListener("change", handleDesktop);

    // Defer initial sync past the commit phase so we never call setState
    // synchronously inside the effect body. Prevents iOS Safari hydration
    // races on mount.
    const id = window.requestAnimationFrame(() => {
      handleMotion();
      handleDesktop();
    });

    return () => {
      window.cancelAnimationFrame(id);
      motionQuery.removeEventListener("change", handleMotion);
      desktopQuery.removeEventListener("change", handleDesktop);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      // The mobile branch doesn't read activeStep/progress, so nothing to track.
      return;
    }

    const node = sectionRef.current;
    if (!node) return;

    let frame = 0;
    const compute = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      // Section is 500vh; sticky frame is 100vh.
      // Scrollable distance inside section = rect.height - vh.
      const scrollable = rect.height - vh;
      if (scrollable <= 0) {
        setActiveStep(0);
        setProgress(0);
        return;
      }
      const traveled = Math.min(Math.max(-rect.top, 0), scrollable);
      const p = traveled / scrollable;
      setProgress(p);
      const idx = Math.min(STEP_COUNT - 1, Math.floor(p * STEP_COUNT));
      setActiveStep(idx);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", compute);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [isDesktop]);

  const useSticky = isDesktop && !reduceMotion;
  const active = SHOWCASE_BLOCKS[activeStep];

  return (
    <section
      ref={sectionRef}
      className="relative border-y border-[#0B1F3A]/10 bg-[linear-gradient(180deg,#fffdf8_0%,#eef2f7_100%)]"
      style={useSticky ? { height: `${STEP_COUNT * 100}vh` } : undefined}
      aria-labelledby="capability-showcase-heading"
    >
      {/* Mobile / reduced-motion: step carousel */}
      {!useSticky && (
        <Container className="py-14 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A96A]">
            How it comes together
          </p>
          <h2
            id="capability-showcase-heading"
            className="font-display mt-3 max-w-3xl text-3xl font-semibold text-[#0B1F3A] sm:text-4xl"
          >
            From chaos to a system that fits
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Watch scattered tools become one structured operating system.
          </p>
          <MobileShowcaseCarousel reduceMotion={reduceMotion} />
        </Container>
      )}

      {/* Desktop: sticky scroll storytelling */}
      {useSticky && (
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Subtle parallax background glow that drifts as the user scrolls */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(40rem 28rem at ${20 + progress * 60}% ${30 + progress * 20}%, rgba(200,169,106,0.13), transparent 60%), radial-gradient(34rem 26rem at ${80 - progress * 40}% ${70 - progress * 20}%, rgba(11,31,58,0.12), transparent 60%)`,
              transition: "background 600ms ease",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:linear-gradient(rgba(11,31,58,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(11,31,58,0.05)_1px,transparent_1px)] [background-size:44px_44px]"
          />

          <Container className="relative grid h-full items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Text panel */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A96A]">
                How it comes together
              </p>
              <h2
                id="capability-showcase-heading"
                className="font-display mt-3 text-4xl font-semibold leading-[1.05] text-[#0B1F3A] sm:text-5xl"
              >
                From chaos to a system that fits
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
                Watch scattered tools become one structured operating system.
              </p>

              <div className="mt-9">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A96A]">
                  Step {String(active.step).padStart(2, "0")} /{" "}
                  {String(STEP_COUNT).padStart(2, "0")}
                </p>
                <div className="relative mt-3 grid">
                  {SHOWCASE_BLOCKS.map((block, i) => (
                    <div
                      key={block.step}
                      aria-hidden={i !== activeStep}
                      className="col-start-1 row-start-1 max-w-md transition-[opacity,transform] duration-500 ease-out"
                      style={{
                        opacity: i === activeStep ? 1 : 0,
                        transform:
                          i === activeStep
                            ? "translateY(0)"
                            : i < activeStep
                              ? "translateY(-12px)"
                              : "translateY(12px)",
                        pointerEvents: i === activeStep ? "auto" : "none",
                      }}
                    >
                      <h3 className="font-display text-3xl font-semibold leading-tight text-[#0B1F3A] sm:text-[2.25rem]">
                        {block.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-slate-600">
                        {block.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress indicators */}
              <div className="mt-10 flex items-center gap-3">
                {SHOWCASE_BLOCKS.map((block, i) => (
                  <div
                    key={block.step}
                    className="relative h-[3px] w-10 overflow-hidden rounded-full bg-[#0B1F3A]/12"
                  >
                    <span
                      className="absolute inset-y-0 left-0 rounded-full bg-[#C8A96A] transition-[width] duration-500 ease-out"
                      style={{
                        width:
                          i < activeStep
                            ? "100%"
                            : i === activeStep
                              ? "100%"
                              : "0%",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Visual panel */}
            <div className="mx-auto w-full max-w-[720px]">
              <div className="relative grid w-full" style={{ maxHeight: "70vh" }}>
                {SHOWCASE_BLOCKS.map((block, i) => {
                  const Visual = VISUALS[block.visual];
                  const isActive = i === activeStep;
                  return (
                    <div
                      key={block.step}
                      aria-hidden={!isActive}
                      className="col-start-1 row-start-1 transition-[opacity,transform] duration-500 ease-out"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive
                          ? "translateY(0) scale(1)"
                          : i < activeStep
                            ? "translateY(-14px) scale(0.985)"
                            : "translateY(14px) scale(0.985)",
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                    >
                      <Visual />
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </div>
      )}
    </section>
  );
}
