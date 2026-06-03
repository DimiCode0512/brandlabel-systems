import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { BeforeAfterScroll } from "@/components/home/BeforeAfterScroll";
import { HeroAmbience } from "@/components/home/HeroAmbience";
import { HeroDepthColumn } from "@/components/home/HeroDepth";
import { LocalizedLink } from "@/components/LocalizedLink";
import { PageShell } from "@/components/PageShell";
import { SectionIntro } from "@/components/SectionIntro";
import { SystemMockup } from "@/components/SystemMockup";
import { createPageMetadata } from "@/lib/pageMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata("");

const process = [
  "Audit your current workflow",
  "Identify bottlenecks and time loss",
  "Design your custom system",
  "Build",
  "Test",
  "Launch and improve",
];

const caseFeatures = [
  "Projects",
  "Clients",
  "Documents",
  "Approvals",
  "Team tracking",
  "Digital signatures",
  "Client emails",
  "Multilingual interface",
];

const buildExamples = [
  {
    title: "Internal dashboard",
    text: "One place for projects, clients, tasks, documents, and live status.",
    visual: "dashboard",
  },
  {
    title: "Client portal",
    text: "A clean workspace where clients can approve, upload, sign, and follow progress.",
    visual: "portal",
  },
  {
    title: "Document flow",
    text: "Send offers and agreements, track approval, and validate signatures with OTP.",
    visual: "documents",
  },
  {
    title: "Team tracking",
    text: "Clock-in/out, geolocation, scheduling, and job status for managers and field teams.",
    visual: "tracking",
  },
];

const proofItems = [
  "Project and client management",
  "Workflow tracking",
  "Calendar and scheduling",
  "Clock-in/out with geolocation",
  "Document sending",
  "Email templates",
  "OTP-based signatures",
  "Multilingual interface",
];

const comparisonItems = [
  {
    title: "Generic tools",
    text: "Good to start. Harder when work needs to connect across the whole team.",
    icon: "stack",
  },
  {
    title: "Freelance feature builds",
    text: "Useful for one feature. Less useful when the full workflow needs structure.",
    icon: "feature",
  },
  {
    title: "Large agencies",
    text: "Strong teams, but often too heavy for small service businesses.",
    icon: "layers",
  },
  {
    title: "BrandLabel Systems",
    text: "A focused system built around your daily operations, clients, documents, and team.",
    icon: "connected",
  },
];

function ComparisonIcon({ type }: { type: string }) {
  if (type === "connected") {
    return (
      <div className="relative size-12 rounded-xl border border-[#2BB3A3]/30 bg-[#2BB3A3]/12">
        <span className="absolute left-3 top-3 size-2 rounded-full bg-[#2BB3A3]" />
        <span className="absolute right-3 top-3 size-2 rounded-full bg-[#2BB3A3]" />
        <span className="absolute bottom-3 left-1/2 size-2 -translate-x-1/2 rounded-full bg-[#2BB3A3]" />
        <span className="absolute left-[1.05rem] top-[1.15rem] h-px w-5 rotate-[28deg] bg-[#2BB3A3]/70" />
        <span className="absolute right-[1.05rem] top-[1.15rem] h-px w-5 rotate-[-28deg] bg-[#2BB3A3]/70" />
      </div>
    );
  }

  if (type === "layers") {
    return (
      <div className="relative size-12 rounded-xl border border-[#0B1F3A]/10 bg-white">
        <span className="absolute left-3 top-3 h-4 w-6 rounded-sm border border-[#0B1F3A]/20 bg-[#F6FAFA]" />
        <span className="absolute left-4 top-5 h-4 w-6 rounded-sm border border-[#0B1F3A]/20 bg-[#FFF8E7]" />
      </div>
    );
  }

  if (type === "feature") {
    return (
      <div className="grid size-12 grid-cols-2 gap-1 rounded-xl border border-[#0B1F3A]/10 bg-white p-2">
        <span className="rounded-sm bg-[#0B1F3A]/18" />
        <span className="rounded-sm bg-[#C8A96A]/40" />
        <span className="rounded-sm bg-[#2BB3A3]/35" />
        <span className="rounded-sm bg-[#0B1F3A]/10" />
      </div>
    );
  }

  return (
    <div className="flex size-12 flex-col justify-center gap-1 rounded-xl border border-[#0B1F3A]/10 bg-white p-2">
      <span className="h-1.5 rounded-full bg-[#0B1F3A]/16" />
      <span className="h-1.5 rounded-full bg-[#C8A96A]/45" />
      <span className="h-1.5 rounded-full bg-[#2BB3A3]/35" />
    </div>
  );
}

function ExampleVisual({ visual }: { visual: string }) {
  if (visual === "portal") {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-[#0B1F3A]/10 bg-[linear-gradient(135deg,#f6fbff_0%,#fff8e7_100%)] p-3 shadow-[0_16px_38px_rgba(11,31,58,0.08)]">
        <div className="flex h-full flex-col rounded-md border border-[#0B1F3A]/10 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-[#0B1F3A]/8 px-3 py-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B1F3A]">Client portal</span>
            <span className="rounded-full bg-[#2BB3A3]/14 px-2 py-1 text-[9px] font-semibold text-[#087E74]">Active</span>
          </div>
          <div className="grid flex-1 grid-cols-[0.85fr_1.15fr] gap-2 p-3">
            <div className="space-y-2">
              {["Agreement ready", "Upload required", "Approve offer"].map((item, index) => (
                <div key={item} className="rounded-md border border-[#0B1F3A]/8 bg-[#F6FAFA] p-2">
                  <p className="text-[10px] font-semibold text-[#0B1F3A]">{item}</p>
                  <div className={`mt-2 h-1.5 rounded-full ${index === 0 ? "bg-[#C8A96A]" : "bg-[#2BB3A3]/45"}`} />
                </div>
              ))}
            </div>
            <div className="rounded-md bg-[#0B1F3A] p-3 text-white">
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#F3DEAA]">Project status</p>
              <div className="mt-3 space-y-2">
                {["Brief received", "Offer sent", "Signature pending"].map((item, index) => (
                  <div key={item} className="flex items-center gap-2 text-[10px] text-slate-200">
                    <span className={`size-2 rounded-full ${index < 2 ? "bg-[#2BB3A3]" : "bg-[#C8A96A]"}`} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (visual === "documents") {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-[#0B1F3A]/10 bg-[#f8fbfa] p-3 shadow-[0_16px_38px_rgba(11,31,58,0.08)]">
        <div className="absolute right-4 top-4 h-24 w-20 rotate-3 rounded-md border border-[#0B1F3A]/12 bg-white p-2 shadow-[0_14px_30px_rgba(11,31,58,0.14)]">
          <p className="text-[9px] font-bold text-[#0B1F3A]">Offer.pdf</p>
          <div className="mt-2 space-y-1">
            <span className="block h-1 rounded-full bg-[#0B1F3A]/18" />
            <span className="block h-1 rounded-full bg-[#0B1F3A]/14" />
            <span className="block h-1 w-2/3 rounded-full bg-[#0B1F3A]/14" />
          </div>
          <div className="mt-3 rounded-sm bg-[#C8A96A]/18 px-1 py-1 text-[8px] font-semibold text-[#8F6B24]">OTP sent</div>
        </div>
        <div className="absolute bottom-5 left-5 w-36 rounded-lg border border-[#0B1F3A]/10 bg-white p-3 shadow-[0_18px_34px_rgba(11,31,58,0.12)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0B1F3A]">Signature flow</p>
          <div className="mt-3 grid gap-2">
            {["Send", "Verify email", "Signed"].map((item, index) => (
              <div key={item} className="flex items-center gap-2 text-[10px] font-semibold text-[#0B1F3A]">
                <span className={`grid size-5 place-items-center rounded-full text-[9px] ${index === 2 ? "bg-[#2BB3A3] text-white" : "bg-[#EAF8F6] text-[#087E74]"}`}>{index + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute left-16 top-5 h-px w-32 rotate-[26deg] bg-[#2BB3A3]/45" />
        <div className="absolute bottom-16 right-16 h-px w-24 rotate-[-24deg] bg-[#C8A96A]/55" />
      </div>
    );
  }

  if (visual === "tracking") {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-[#0B1F3A]/10 bg-[linear-gradient(135deg,#eef7f6_0%,#ffffff_100%)] p-3 shadow-[0_16px_38px_rgba(11,31,58,0.08)]">
        <div className="absolute left-4 top-4 h-[82%] w-24 rounded-[1.1rem] border border-[#0B1F3A]/14 bg-[#0B1F3A] p-2 text-white shadow-[0_20px_38px_rgba(11,31,58,0.2)]">
          <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-white/25" />
          <p className="text-[9px] uppercase tracking-[0.16em] text-[#F3DEAA]">Team app</p>
          <div className="mt-3 rounded-md bg-white/10 p-2">
            <p className="text-[10px] font-semibold">Unit A</p>
            <p className="mt-1 text-[9px] text-[#8AE3D8]">On site</p>
          </div>
          <div className="mt-2 rounded-md bg-[#2BB3A3] px-2 py-1 text-[9px] font-bold text-[#06231F]">Clock-in 07:58</div>
        </div>
        <div className="ml-28 grid h-full gap-2">
          {["Site visit", "Install team", "Manager check"].map((item, index) => (
            <div key={item} className="rounded-md border border-[#0B1F3A]/8 bg-white p-2 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold text-[#0B1F3A]">{item}</p>
                <span className={`rounded-full px-2 py-0.5 text-[8px] font-semibold ${index === 0 ? "bg-[#2BB3A3]/14 text-[#087E74]" : "bg-[#C8A96A]/18 text-[#8F6B24]"}`}>{index === 0 ? "Live" : "Queued"}</span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-[#0B1F3A]/10">
                <div className={`h-full rounded-full ${index === 0 ? "w-3/4 bg-[#2BB3A3]" : "w-1/2 bg-[#C8A96A]"}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-[#0B1F3A]/10 bg-[linear-gradient(135deg,#ffffff_0%,#eaf8f6_100%)] p-3 shadow-[0_16px_38px_rgba(11,31,58,0.08)]">
      <div className="grid h-full grid-cols-[0.38fr_0.62fr] gap-3">
        <div className="rounded-md bg-[#0B1F3A] p-3 text-white">
          <p className="text-[10px] uppercase tracking-[0.16em] text-[#F3DEAA]">Operations dashboard</p>
          <div className="mt-3 space-y-2">
            {["Projects active", "Clients", "Pending approvals"].map((item, index) => (
              <div key={item} className="rounded-md bg-white/10 p-2">
                <p className="text-[9px] text-slate-300">{item}</p>
                <p className="mt-1 font-display text-lg font-semibold">{index === 0 ? "18" : index === 1 ? "42" : "6"}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-2">
          <div className="rounded-md border border-[#0B1F3A]/8 bg-white p-3">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-bold text-[#0B1F3A]">Live pipeline</p>
              <span className="rounded-full bg-[#2BB3A3]/14 px-2 py-0.5 text-[8px] font-semibold text-[#087E74]">On track</span>
            </div>
            <div className="mt-3 flex items-end gap-2">
              {[68, 42, 76, 54].map((height, index) => (
                <span key={index} className="flex-1 rounded-t-sm bg-[#2BB3A3]" style={{ height }} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {["Today", "Documents"].map((item, index) => (
              <div key={item} className="rounded-md border border-[#0B1F3A]/8 bg-white p-2">
                <p className="text-[10px] font-semibold text-[#0B1F3A]">{item}</p>
                <div className={`mt-2 h-2 rounded-full ${index === 0 ? "bg-[#C8A96A]" : "bg-[#0B1F3A]"}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function WhatWeBuildSection() {
  return (
    <section className="bg-[#fffdf8] py-12 sm:py-18">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <div>
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.02] text-[#0B1F3A] sm:text-5xl">
              Custom systems that organize daily work.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 lg:text-xl lg:leading-9">
              Dashboards, portals, documents, schedules, and workflows connected into one practical system.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {buildExamples.map((item) => (
              <article key={item.title} className="rounded-xl border border-[#0B1F3A]/10 bg-white p-4 shadow-[0_18px_46px_rgba(11,31,58,0.07)]">
                <ExampleVisual visual={item.visual} />
                <h3 className="font-display mt-4 text-2xl font-semibold leading-tight text-[#0B1F3A]">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-slate-600 lg:text-lg lg:leading-8">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProofSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#eef7f6_0%,#fffdf8_100%)] py-12 sm:py-18">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
          <div>
            <h2 className="font-display text-balance text-3xl font-semibold leading-[1.02] text-[#0B1F3A] sm:text-5xl">
              Practical modules your system can include.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 lg:text-xl lg:leading-9">
              These are the building blocks we use to organize service work, client communication, documents, and team activity.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {proofItems.map((item, index) => (
              <div key={item} className="rounded-lg border border-[#0B1F3A]/10 bg-white/88 px-4 py-3 shadow-[0_12px_30px_rgba(11,31,58,0.05)]">
                <span className="mr-3 inline-grid size-6 place-items-center rounded-full bg-[#2BB3A3]/12 text-xs font-semibold text-[#087E74]">
                  {index + 1}
                </span>
                <span className="text-base font-semibold text-[#0B1F3A] lg:text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function DifferentiationSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-balance text-3xl font-semibold leading-[1.02] text-[#0B1F3A] sm:text-5xl">
            Not another disconnected tool.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600 lg:text-xl lg:leading-9">
            One custom system that keeps the important work connected.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {comparisonItems.map((item) => (
            <article
              key={item.title}
              className={`rounded-xl border p-5 shadow-[0_16px_40px_rgba(11,31,58,0.06)] ${
                item.title === "BrandLabel Systems"
                  ? "border-[#2BB3A3]/30 bg-[#EAF8F6]"
                  : "border-[#0B1F3A]/10 bg-[#fffdf8]"
              }`}
            >
              <ComparisonIcon type={item.icon} />
              <h3 className="font-display mt-5 text-2xl font-semibold text-[#0B1F3A]">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600 lg:text-lg lg:leading-8">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function MessyOperationsVisual() {
  return (
    <div className="relative min-h-[19rem] overflow-hidden rounded-xl border border-[#0B1F3A]/10 bg-[#fbfaf7] p-4 shadow-[0_20px_55px_rgba(11,31,58,0.08)]">
      <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(11,31,58,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(11,31,58,0.06)_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="pointer-events-none absolute -right-10 top-10 size-28 rounded-full bg-red-200/35 blur-3xl" />
      <div className="pointer-events-none absolute -left-12 bottom-0 size-32 rounded-full bg-[#C8A96A]/18 blur-3xl" />
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <p className="inline-flex rounded-full border border-[#0B1F3A]/10 bg-white px-3 py-1 text-sm font-bold uppercase tracking-[0.14em] text-[#0B1F3A] shadow-sm">
            Before
          </p>
          <h3 className="font-display mt-2 text-2xl font-semibold leading-tight text-[#0B1F3A]">
            Messy operations
          </h3>
        </div>
        <span className="rounded-full border border-[#0B1F3A]/10 bg-white px-3 py-1 text-xs font-semibold text-slate-500">
          scattered
        </span>
      </div>
      <div className="relative z-10 mt-5 h-48">
        {[
          ["Offer draft", "left-[5%] top-[0.8rem] w-28 rotate-[-10deg] z-[7]"],
          ["Invoice overdue", "right-[8%] top-[1.5rem] w-32 rotate-[8deg] z-[8]"],
          ["Schedule moved", "left-[26%] top-[4.5rem] w-36 rotate-[11deg] z-[6]"],
          ["Deadline today", "right-[20%] top-[7.8rem] w-32 rotate-[-13deg] z-[9]"],
        ].map(([label, position]) => (
          <div
            key={label}
            className={`absolute rounded-md border border-[#0B1F3A]/10 bg-white/72 p-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400 shadow-[0_16px_32px_rgba(11,31,58,0.1)] ${position}`}
          >
            <span>{label}</span>
            <div className="mt-2 h-1.5 rounded-full bg-slate-200" />
            <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-[#C8A96A]/30" />
          </div>
        ))}
        {[
          ["Excel", "left-1 top-3 rotate-[-10deg] z-[16]"],
          ["Offers", "left-[22%] top-1 rotate-[8deg] z-[21]"],
          ["Invoices", "right-1 top-4 rotate-[-8deg] z-[17]"],
          ["Scheduling", "left-[4%] top-[4.4rem] rotate-[7deg] z-[20]"],
          ["WhatsApp", "right-[8%] top-[4.1rem] rotate-[10deg] z-[23]"],
          ["Deadlines", "left-[32%] top-[6.9rem] rotate-[-9deg] z-[26] border-red-200/70 bg-red-50"],
          ["Follow-ups", "right-[1%] top-[8.3rem] rotate-[6deg] z-[22]"],
          ["Approvals", "left-[2%] top-[10rem] rotate-[-6deg] z-[19]"],
          ["Missing info", "left-[27%] top-[10.4rem] rotate-[9deg] z-[25]"],
        ].map(([label, position]) => (
          <div
            key={label}
            className={`font-display absolute rounded-md border border-[#0B1F3A]/10 bg-white px-3 py-2 text-base font-semibold leading-none text-[#0B1F3A] shadow-[0_14px_30px_rgba(11,31,58,0.18)] sm:text-lg ${position}`}
          >
            {label}
          </div>
        ))}
        <div className="absolute left-[48%] top-[2.8rem] h-24 w-px rotate-[26deg] bg-[#0B1F3A]/14" />
        <div className="absolute left-[22%] top-[5rem] h-24 w-px rotate-[-40deg] bg-[#0B1F3A]/14" />
        <div className="absolute right-[24%] top-[5.7rem] h-24 w-px rotate-[44deg] bg-[#0B1F3A]/14" />
        <div className="absolute left-[40%] top-[4.8rem] h-28 w-px rotate-[8deg] bg-red-300/45" />
      </div>
    </div>
  );
}

function ConnectedSystemVisual() {
  return (
    <div className="relative min-h-[15rem] overflow-hidden rounded-xl border border-[#C8A96A]/24 bg-[linear-gradient(145deg,#fffdf7_0%,#eef3f8_100%)] p-4 shadow-[0_20px_55px_rgba(11,31,58,0.1)]">
      <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[#C8A96A]/18 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 size-48 rounded-full bg-[#0B1F3A]/10 blur-3xl" />
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <p className="inline-flex rounded-full border border-[#2BB3A3]/20 bg-white px-3 py-1 text-sm font-bold uppercase tracking-[0.14em] text-[#0B1F3A] shadow-sm">
            After
          </p>
          <h3 className="font-display mt-2 text-2xl font-semibold leading-tight text-[#0B1F3A]">
            One clear system
          </h3>
        </div>
        <span className="rounded-full border border-[#C8A96A]/35 bg-[#C8A96A]/12 px-3 py-1 text-xs font-semibold text-[#0B1F3A]">
          connected
        </span>
      </div>
      <div className="relative z-10 mt-6 grid grid-cols-[0.9fr_1.1fr] gap-3">
        <div className="rounded-lg border border-[#0B1F3A]/10 bg-white/80 p-3 shadow-sm">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0B1F3A]">
            Dashboard
          </p>
          <div className="mt-3 grid gap-2">
            {["Clients", "Projects", "Documents"].map((item) => (
              <div key={item} className="rounded-md border border-[#0B1F3A]/8 bg-[#F7F3EA] px-3 py-2 text-xs font-semibold text-[#0B1F3A]">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-[#0B1F3A]/10 bg-[#0B1F3A] p-3 text-white shadow-[0_18px_40px_rgba(11,31,58,0.2)]">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8A96A]">
              Workflow
            </p>
            <span className="rounded-sm border border-[#C8A96A]/35 bg-[#C8A96A]/15 px-2 py-1 text-[9px] text-[#F3DEAA]">
              Live
            </span>
          </div>
          <div className="mt-4 space-y-2">
            {["Request", "Quote", "Approve", "Deliver"].map((item, index) => (
              <div key={item} className="flex items-center gap-2 text-xs text-slate-200">
                <span className={`grid size-5 place-items-center rounded-full border ${index < 3 ? "border-[#C8A96A] bg-[#C8A96A]/20" : "border-white/20"}`}>
                  {index + 1}
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <PageShell>
      <section
        className="hero-premium subtle-grid home-hero-base relative touch-pan-y overflow-x-hidden border-b border-[#0B1F3A]/10"
        data-hero-depth-root
      >
        <HeroAmbience />
        <Container className="relative z-10 grid min-w-0 items-center gap-8 py-10 lg:min-h-[calc(100vh-80px)] lg:grid-cols-[1.02fr_0.98fr] lg:gap-11 lg:py-14">
          <HeroDepthColumn factor={-0.072} className="min-w-0">
            <div className="reveal">
              <p className="mb-5 max-w-fit text-sm font-semibold uppercase tracking-[0.22em] text-[#0B1F3A]/75 sm:text-base">
                Custom systems, web apps, and websites
              </p>
              <h1 className="font-display text-balance max-w-[11ch] text-[2.95rem] font-semibold leading-[0.96] text-[#0B1F3A] sm:max-w-4xl sm:text-6xl sm:leading-[0.94] lg:text-7xl">
                Messy tools? Let us build the clear answer.
              </h1>
              <p className="mt-6 max-w-[calc(100vw-2.5rem)] text-xl leading-9 text-slate-700 sm:mt-7 sm:max-w-xl lg:text-2xl lg:leading-10">
                We build custom dashboards, portals, automations, and websites that put your operations in one
                clear place.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
                <ButtonLink href="/contact" variant="gold">Request a Free Audit</ButtonLink>
              </div>
            </div>
          </HeroDepthColumn>
          <HeroDepthColumn factor={0.085} className="min-w-0 lg:pl-2 xl:pl-4">
            <div className="reveal" style={{ animationDelay: "120ms" }}>
              <SystemMockup />
            </div>
          </HeroDepthColumn>
        </Container>
      </section>

      <WhatWeBuildSection />

      <section className="bg-white py-12 sm:py-18">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-balance text-3xl font-semibold leading-[1.02] text-[#0B1F3A] sm:text-5xl">
              From scattered tools to one clear system.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-600 lg:text-xl lg:leading-9">
              A simple custom system can bring clients, projects, documents, and workflows together.
            </p>
          </div>
          <BeforeAfterScroll
            before={<MessyOperationsVisual />}
            after={<ConnectedSystemVisual />}
          />
        </Container>
      </section>

      <ProofSection />

      <section className="dark-premium relative hidden overflow-hidden py-14 text-white sm:py-19 lg:block">
        <div className="gold-line absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2" />
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-11">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Case study
            </p>
            <h2 className="font-display text-balance text-4xl font-semibold leading-none sm:text-5xl">
              Real field service system, anonymized for privacy
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-300 lg:text-xl lg:leading-9">
              A field service team replaced scattered operations with one custom platform. Screens are recreated to protect private client data.
            </p>
            <LocalizedLink href="/case-study" className="mt-7 inline-flex text-sm font-semibold text-[#C8A96A] hover:text-white">
              Read the case study
            </LocalizedLink>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {caseFeatures.map((feature) => (
              <div
                key={feature}
                className="rounded-sm border border-white/10 bg-white/[0.07] px-4 py-3 text-base text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:-translate-y-1 hover:border-[#C8A96A]/45 hover:bg-white/[0.1] lg:text-lg"
              >
                <span className="mr-3 text-[#C8A96A]">/</span>
                {feature}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <DifferentiationSection />

      <section className="hidden py-14 sm:py-20 lg:block">
        <Container>
          <SectionIntro eyebrow="Process" title="Simple process. Clear outcome." align="center">
            <p>
              First we understand the workflow. Then we design, build, test, and improve the system.
            </p>
          </SectionIntro>
          <div className="relative mt-8 grid gap-3 md:grid-cols-6 md:mt-9">
            <div className="absolute left-[8%] right-[8%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#C8A96A]/60 to-transparent md:block" />
            {process.map((step, index) => (
              <div key={step} className="premium-card z-10 rounded-md p-5">
                <p className="relative text-xs text-[#C8A96A]">0{index + 1}</p>
                <p className="relative mt-8 text-base font-semibold text-[#0B1F3A] lg:text-lg">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </PageShell>
  );
}
