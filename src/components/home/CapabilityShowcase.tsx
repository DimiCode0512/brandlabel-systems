"use client";

import { Container } from "@/components/Container";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
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
    title: "The problem",
    text: "Work is split across Excel, WhatsApp, email, and folders.",
    visual: "scattered",
  },
  {
    step: 2,
    title: "One clear hub",
    text: "Projects, clients, tasks, and documents move into one place.",
    visual: "dashboard",
  },
  {
    step: 3,
    title: "Client approvals",
    text: "Send documents, collect approvals, and track signatures online.",
    visual: "signing",
  },
  {
    step: 4,
    title: "Team visibility",
    text: "See who is working, where things stand, and what needs attention.",
    visual: "team",
  },
  {
    step: 5,
    title: "Your system",
    text: "A custom workflow that fits how your business actually runs.",
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

function MobileParallaxShowcase() {
  const parallaxRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [78, -128]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.02]);
  const gridY = useTransform(scrollYProgress, [0, 1], [42, -42]);
  const dashboardY = useTransform(scrollYProgress, [0, 1], [82, -56]);
  const dashboardRotate = useTransform(scrollYProgress, [0, 1], [-1.4, 1.2]);
  const chaosY = useTransform(scrollYProgress, [0, 1], [138, -92]);
  const chaosX = useTransform(scrollYProgress, [0, 1], [-18, 12]);
  const workflowY = useTransform(scrollYProgress, [0, 1], [68, -132]);
  const workflowX = useTransform(scrollYProgress, [0, 1], [18, -14]);
  const portalY = useTransform(scrollYProgress, [0, 1], [156, -72]);

  return (
    <div
      ref={parallaxRef}
      className="relative mt-6 h-[35rem] overflow-hidden rounded-2xl border border-[#C8A96A]/20 bg-[#050a14] shadow-[0_30px_80px_rgba(11,31,58,0.28)] lg:h-[34rem]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="pointer-events-none absolute -inset-x-16 -inset-y-24 bg-cover bg-center opacity-48"
          style={{
            y: backgroundY,
            scale: backgroundScale,
            backgroundImage: "url('/system-parallax-bg.svg')",
          }}
        />
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:34px_34px]"
          style={{ y: gridY }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(200,169,106,0.2),transparent_34%),linear-gradient(180deg,rgba(5,10,20,0.72)_0%,rgba(5,10,20,0.2)_46%,rgba(5,10,20,0.7)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#050a14] via-[#050a14]/82 to-transparent" />

        <div className="relative z-10 flex h-full flex-col p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="font-display text-2xl font-semibold leading-tight text-white">
                Live system map
              </h3>
            </div>
            <div className="rounded-full border border-[#C8A96A]/35 bg-[#C8A96A]/14 px-3 py-1 text-[10px] font-semibold text-[#F3DEAA]">
              Mobile OS
            </div>
          </div>

          <div className="relative mx-auto mt-3 h-[25rem] w-full max-w-sm flex-1 lg:h-[25.5rem] lg:max-w-5xl">
            <motion.div
              className="absolute left-2 right-2 top-[6.1rem] rounded-2xl border border-white/12 bg-[#071423]/95 p-3 text-white shadow-[0_28px_70px_rgba(0,0,0,0.42)] backdrop-blur lg:left-[25%] lg:right-[25%] lg:top-[6.4rem] lg:p-4"
              style={{ y: dashboardY, rotate: dashboardRotate }}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8A96A]">
                    BrandLabel OS
                  </p>
                  <p className="font-display text-xl font-semibold">
                    Operating dashboard
                  </p>
                </div>
                <span className="rounded-sm border border-[#C8A96A]/35 bg-[#C8A96A]/15 px-2 py-1 text-[10px] font-semibold text-[#F3DEAA]">
                  Live
                </span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  ["Projects", "24"],
                  ["Clients", "42"],
                  ["Tasks", "118"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-md border border-white/10 bg-white/[0.06] p-2">
                    <p className="text-[10px] text-slate-400">{label}</p>
                    <p className="text-lg font-semibold tabular-nums">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 space-y-1.5">
                {["Quote approved", "Visit assigned", "Agreement signed"].map((item, index) => (
                  <div key={item} className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.05] px-2 py-1.5">
                    <span className={`size-1.5 rounded-full ${index === 0 ? "bg-[#C8A96A]" : "bg-slate-500"}`} />
                    <span className="text-xs text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="absolute left-0 top-2 w-[11rem] rounded-xl border border-white/12 bg-white/[0.92] p-3 shadow-[0_20px_45px_rgba(0,0,0,0.22)] backdrop-blur lg:left-[7%] lg:top-5 lg:w-[15rem]"
              style={{ x: chaosX, y: chaosY }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0B1F3A]">
                Input chaos
              </p>
              <div className="mt-2 space-y-1">
                {["Excel", "Messages", "Docs"].map((item) => (
                  <div key={item} className="rounded-md border border-[#0B1F3A]/10 bg-[#F7F3EA] px-2 py-1 text-xs font-medium text-[#0B1F3A]">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="absolute right-0 top-[2.7rem] w-[10.5rem] rounded-xl border border-[#C8A96A]/28 bg-[#08192E]/92 p-3 text-white shadow-[0_20px_50px_rgba(0,0,0,0.32)] backdrop-blur lg:right-[7%] lg:top-10 lg:w-[16rem]"
              style={{ x: workflowX, y: workflowY }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C8A96A]">
                Workflow engine
              </p>
              <div className="mt-2 flex flex-wrap gap-1">
                {["Lead", "Quote", "Sign", "Deliver"].map((item, index) => (
                  <span
                    key={item}
                    className={`rounded-sm border px-1.5 py-1 text-[10px] ${
                      index < 3
                        ? "border-[#C8A96A]/35 bg-[#C8A96A]/14 text-[#F3DEAA]"
                        : "border-white/12 text-slate-400"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="absolute inset-x-5 bottom-8 rounded-xl border border-white/12 bg-white/[0.92] p-3 shadow-[0_22px_50px_rgba(0,0,0,0.24)] backdrop-blur lg:inset-x-[22%] lg:bottom-4"
              style={{ y: portalY }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0B1F3A]">
                    Client portal
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Approvals, OTP signatures, document status.
                  </p>
                </div>
                <div className="rounded-md border border-[#C8A96A]/35 bg-[#C8A96A]/14 px-2 py-1 text-[10px] font-semibold text-[#0B1F3A]">
                  OTP
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileShowcaseStepList() {
  return (
    <div className="mt-4 grid gap-3 lg:grid-cols-5">
      {SHOWCASE_BLOCKS.map((block) => (
        <div
          key={block.step}
          className="rounded-lg border border-[#0B1F3A]/10 bg-white/82 px-4 py-3 shadow-[0_10px_24px_rgba(11,31,58,0.05)] lg:min-h-32"
        >
          <div className="flex items-center gap-3 lg:flex-col lg:items-start">
            <span className="grid size-8 shrink-0 place-items-center rounded-full border border-[#C8A96A]/45 bg-[#C8A96A]/12 text-sm font-semibold text-[#0B1F3A]">
              {block.step}
            </span>
            <h3 className="text-base font-semibold leading-tight text-[#0B1F3A] lg:text-lg">
              {block.title}
            </h3>
            <p className="ml-auto max-w-[11rem] text-right text-sm leading-5 text-slate-500 lg:ml-0 lg:max-w-none lg:text-left lg:text-base lg:leading-6">
              {block.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function MobileShowcaseCarousel({ reduceMotion }: { reduceMotion: boolean }) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const block = SHOWCASE_BLOCKS[step];
  const Visual = VISUALS[block.visual];

  const goToStep = (nextStep: number) => {
    const next = Math.min(STEP_COUNT - 1, Math.max(0, nextStep));
    if (next === step) return;
    setDirection(next > step ? 1 : -1);
    setStep(next);
  };

  const goPrev = () => goToStep(step - 1);
  const goNext = () => goToStep(step + 1);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number } }) => {
    const swipeDistance = info.offset.x;
    const threshold = 48;

    if (swipeDistance <= -threshold) {
      goNext();
    }

    if (swipeDistance >= threshold) {
      goPrev();
    }
  };

  return (
    <div className="mt-10">
      <div className="relative min-h-[30rem] overflow-hidden sm:min-h-[32rem]">
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            initial={
              reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * 28 }
            }
            animate={{ opacity: 1, x: 0 }}
            exit={
              reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * -22 }
            }
            drag={reduceMotion ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.16}
            onDragEnd={handleDragEnd}
            transition={{ duration: 0.32, ease: CAROUSEL_EASE }}
            className="absolute inset-x-0 top-0 flex cursor-grab touch-pan-y select-none flex-col gap-5 active:cursor-grabbing"
          >
            <div className="min-h-[10.5rem]">
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
                onClick={() => goToStep(i)}
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
      <p key={`mobile-step-count-${block.step}`} className="mt-3 text-center text-xs text-slate-500" aria-live="polite">
        {block.step} / {STEP_COUNT}
      </p>
    </div>
  );
}

export function CapabilityShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleMotion = () => setReduceMotion(motionQuery.matches);

    motionQuery.addEventListener("change", handleMotion);

    // Defer initial sync past the commit phase so we never call setState
    // synchronously inside the effect body. Prevents iOS Safari hydration
    // races on mount.
    const id = window.requestAnimationFrame(() => {
      handleMotion();
    });

    return () => {
      window.cancelAnimationFrame(id);
      motionQuery.removeEventListener("change", handleMotion);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative border-y border-[#0B1F3A]/10 bg-[linear-gradient(180deg,#fffdf8_0%,#eef2f7_100%)]"
      aria-labelledby="capability-showcase-heading"
    >
      <Container className="py-8 sm:py-14">
        <h2
          id="capability-showcase-heading"
          className="font-display max-w-3xl text-3xl font-semibold leading-tight text-[#0B1F3A] sm:text-4xl lg:text-5xl"
        >
          From messy to clear
        </h2>
        <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-600 lg:text-xl lg:leading-9">
          A simple example of how scattered work becomes one system.
        </p>
        {reduceMotion ? (
          <MobileShowcaseCarousel reduceMotion />
        ) : (
          <>
            <MobileParallaxShowcase />
            <MobileShowcaseStepList />
          </>
        )}
      </Container>
    </section>
  );
}
