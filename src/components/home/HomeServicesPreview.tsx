import { ButtonLink } from "@/components/ButtonLink";
import Link from "next/link";

const offerings = [
  {
    title: "Custom Systems",
    description:
      "Centralized internal systems built around your real workflow — projects, clients, tasks, documents, and reporting in one place.",
    outcome: "Less admin. More control.",
    visual: (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-white/12 bg-[#071423] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-black/20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A96A]/85 to-transparent" />
        <div className="flex h-full gap-3 p-3 sm:p-3.5">
          {/* Sidebar */}
          <div className="flex w-[26%] shrink-0 flex-col gap-1.5 border-r border-white/10 pr-2.5">
            <div className="mb-1 flex items-center gap-1.5">
              <span className="size-2 rounded-sm bg-[#C8A96A]" />
              <span className="h-1.5 w-10 rounded-full bg-white/35" />
            </div>
            {[
              { name: "Overview", active: true },
              { name: "Clients", active: false },
              { name: "Projects", active: false },
              { name: "Docs", active: false },
              { name: "Reports", active: false },
            ].map((x) => (
              <div
                key={x.name}
                className={`flex items-center gap-1.5 rounded-sm px-1.5 py-1 text-[9px] font-medium leading-tight ${x.active ? "border border-[#C8A96A]/40 bg-[#C8A96A]/14 text-[#F3DEAA]" : "text-slate-400"}`}
              >
                <span className={`size-1 rounded-full ${x.active ? "bg-[#C8A96A]" : "bg-white/25"}`} />
                {x.name}
              </div>
            ))}
          </div>
          {/* Main */}
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
              <div className="min-w-0">
                <p className="text-[8px] uppercase tracking-[0.18em] text-[#C8A96A]">Operations</p>
                <p className="font-display text-[11px] font-semibold text-white">Overview</p>
              </div>
              <span className="rounded-sm border border-[#C8A96A]/35 bg-[#C8A96A]/15 px-1.5 py-0.5 text-[8px] text-[#F3DEAA]">
                Live
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { k: "Projects", v: "24" },
                { k: "Clients", v: "42" },
                { k: "Tasks", v: "118" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-sm border border-white/10 bg-gradient-to-b from-white/[0.09] to-white/[0.03] px-1.5 py-1.5 shadow-inner"
                >
                  <p className="text-[8px] uppercase tracking-wider text-slate-400">{s.k}</p>
                  <p className="mt-0.5 text-sm font-semibold tabular-nums text-white">{s.v}</p>
                </div>
              ))}
            </div>
            <div className="flex h-[3rem] items-end gap-1 rounded-sm border border-white/10 bg-black/25 p-1.5 sm:h-[3.25rem]">
              {[38, 55, 47, 70, 60, 75, 68, 82].map((h, i) => (
                <div key={i} className="flex h-full flex-1 flex-col justify-end">
                  <div
                    className="w-full rounded-t-sm bg-gradient-to-t from-[#0B1F3A] to-[#C8A96A]/70"
                    style={{ height: `${h}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="space-y-1 rounded-sm border border-white/10 bg-black/25 p-1.5">
              {[
                "Invoice approved · Meridian",
                "Visit scheduled · 14:00",
                "Contract viewed · v3",
              ].map((line) => (
                <div key={line} className="flex items-center gap-1.5 text-[9px] text-slate-300">
                  <span className="size-1 shrink-0 rounded-full bg-[#C8A96A]" />
                  <span className="truncate leading-snug">{line}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Web Apps",
    description:
      "Custom web applications, portals, and dashboards designed for the way your users actually work.",
    outcome: "Built around real workflows, not generic templates.",
    visual: (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-white/12 bg-[#071423] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-black/20">
        {/* Browser bar */}
        <div className="flex items-center gap-2 border-b border-white/10 px-2.5 py-2">
          <div className="flex gap-1">
            <span className="size-2 rounded-full bg-white/25" />
            <span className="size-2 rounded-full bg-white/25" />
            <span className="size-2 rounded-full bg-white/25" />
          </div>
          <div className="flex h-5 flex-1 items-center rounded-sm bg-white/[0.08] px-2 text-[9px] text-slate-400">
            portal.example.app
          </div>
        </div>
        <div className="flex h-[calc(100%-2.25rem)] gap-2 p-2.5">
          {/* Left menu */}
          <div className="flex w-[24%] shrink-0 flex-col gap-1">
            {[
              { name: "Inbox", count: "12", active: true },
              { name: "Projects", count: "6", active: false },
              { name: "Files", count: "48", active: false },
              { name: "Billing", count: "—", active: false },
              { name: "Team", count: "9", active: false },
            ].map((it) => (
              <div
                key={it.name}
                className={`flex items-center justify-between rounded-sm px-1.5 py-1 text-[9px] font-medium ${it.active ? "border border-[#C8A96A]/35 bg-[#C8A96A]/12 text-[#F3DEAA]" : "text-slate-400"}`}
              >
                <span>{it.name}</span>
                <span className={`rounded-sm px-1 text-[8px] ${it.active ? "bg-[#C8A96A]/20 text-[#F3DEAA]" : "bg-white/[0.06] text-slate-500"}`}>
                  {it.count}
                </span>
              </div>
            ))}
          </div>
          {/* Main content */}
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[8px] uppercase tracking-[0.18em] text-[#C8A96A]">Inbox</p>
                <div className="mt-0.5 h-2 w-20 rounded-full bg-white/30" />
              </div>
              <div className="flex gap-1">
                <span className="h-4 w-8 rounded-sm bg-white/[0.08]" />
                <span className="h-4 w-4 rounded-sm bg-white/[0.08]" />
              </div>
            </div>
            <div className="grid min-h-0 flex-1 grid-cols-2 gap-1.5">
              {[
                { tone: "white", title: "Onboarding kit", meta: "Updated 2h" },
                { tone: "gold", title: "Quote · Meridian", meta: "Awaiting reply" },
                { tone: "white", title: "Field report #214", meta: "Draft" },
                { tone: "white", title: "Invoice INV-0421", meta: "Paid" },
              ].map((c, i) => (
                <div
                  key={i}
                  className={`rounded-sm border p-1.5 shadow-inner ${c.tone === "gold" ? "border-[#C8A96A]/30 bg-[#C8A96A]/10" : "border-white/10 bg-white/[0.05]"}`}
                >
                  <div className="flex items-center gap-1">
                    <span className={`size-1.5 rounded-full ${c.tone === "gold" ? "bg-[#C8A96A]" : "bg-white/35"}`} />
                    <p className="truncate text-[9px] font-medium text-slate-100">{c.title}</p>
                  </div>
                  <p className="mt-1 text-[8px] text-slate-400">{c.meta}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Websites",
    description:
      "Premium websites that explain what you do clearly, build trust, and turn visitors into qualified conversations.",
    outcome: "Clear message. Strong first impression.",
    visual: (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-[#0B1F3A]/18 bg-[#fffdf8] text-[#0B1F3A] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] ring-1 ring-[#0B1F3A]/08">
        {/* Nav */}
        <div className="flex items-center justify-between border-b border-[#0B1F3A]/10 bg-white/80 px-3 py-1.5">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-sm bg-[#C8A96A]" />
            <span className="font-display text-[9px] font-semibold tracking-[0.18em] text-[#0B1F3A]">
              MERIDIAN
            </span>
          </div>
          <div className="flex items-center gap-2.5 text-[7px] font-medium uppercase tracking-[0.16em] text-[#0B1F3A]/65">
            <span>Work</span>
            <span>About</span>
            <span>Services</span>
            <span className="rounded-sm bg-[#0B1F3A] px-1.5 py-[3px] text-[7px] font-semibold tracking-[0.14em] text-[#F3DEAA]">
              CONTACT
            </span>
          </div>
        </div>
        <div className="flex h-[calc(100%-1.85rem)] flex-col p-3">
          {/* Hero — two columns */}
          <div className="grid flex-1 grid-cols-[1.15fr_0.85fr] gap-3">
            {/* Hero text + CTA */}
            <div className="flex flex-col">
              <p className="text-[7px] font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
                Premium studio
              </p>
              <p className="font-display mt-1 text-[12px] font-semibold leading-[1.05] text-[#0B1F3A] sm:text-[13px]">
                Websites that earn trust at first glance.
              </p>
              <p className="mt-1.5 text-[7px] leading-[1.35] text-[#0B1F3A]/70">
                Strategy, design, and build for businesses that need a sharper, more
                premium presence online.
              </p>
              <div className="mt-auto flex items-center gap-1.5 pt-2">
                <span className="rounded-sm bg-[#0B1F3A] px-2 py-1 text-[7px] font-semibold uppercase tracking-[0.14em] text-[#F3DEAA] shadow-sm">
                  Get a quote
                </span>
                <span className="rounded-sm border border-[#0B1F3A]/25 bg-white px-2 py-1 text-[7px] font-semibold uppercase tracking-[0.14em] text-[#0B1F3A]">
                  Our work
                </span>
              </div>
            </div>
            {/* Hero "image" panel */}
            <div className="relative overflow-hidden rounded-sm bg-gradient-to-br from-[#0B1F3A] via-[#142f55] to-[#0B1F3A] ring-1 ring-[#0B1F3A]/15 shadow-inner">
              <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_25%,rgba(200,169,106,0.35),transparent_60%)]" />
              <span className="absolute right-1.5 top-1.5 rounded-full border border-[#C8A96A]/55 bg-[#C8A96A]/20 px-1.5 py-[2px] text-[6px] font-semibold uppercase tracking-[0.16em] text-[#F3DEAA]">
                Featured
              </span>
              <div className="absolute bottom-1.5 left-1.5 right-1.5">
                <p className="text-[7px] font-semibold uppercase tracking-[0.16em] text-[#F3DEAA]/85">
                  Case study
                </p>
                <p className="font-display text-[8px] font-semibold leading-tight text-white">
                  Meridian · Brand & Site
                </p>
              </div>
            </div>
          </div>
          {/* Services strip */}
          <div className="mt-2.5 grid grid-cols-3 gap-1.5">
            {[
              { label: "Strategy", sub: "Positioning", iconBg: "bg-[#0B1F3A]", iconShape: "rounded-full" },
              { label: "Design", sub: "Brand & UI", iconBg: "bg-[#C8A96A]", iconShape: "rounded-sm" },
              { label: "Development", sub: "Web & CMS", iconBg: "bg-[#0B1F3A]/70", iconShape: "rounded-sm rotate-45" },
            ].map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-1.5 rounded-sm border border-[#0B1F3A]/10 bg-white px-1.5 py-1 shadow-sm"
              >
                <span className={`size-2.5 shrink-0 ${t.iconShape} ${t.iconBg}`} />
                <div className="flex min-w-0 flex-col leading-tight">
                  <span className="truncate text-[7px] font-semibold text-[#0B1F3A]">
                    {t.label}
                  </span>
                  <span className="truncate text-[6px] text-[#0B1F3A]/55">
                    {t.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export function HomeServicesPreview() {
  return (
    <>
      <div className="mt-8 grid gap-7 sm:mt-9 lg:grid-cols-3 lg:gap-8">
        {offerings.map((item) => (
          <Link
            key={item.title}
            href="/services"
            className="group flex min-h-0 touch-manipulation flex-col overflow-hidden rounded-xl border border-[#0B1F3A]/12 bg-[linear-gradient(180deg,rgba(255,253,248,1)_0%,rgba(250,248,242,1)_100%)] p-0 no-underline shadow-[0_18px_50px_rgba(11,31,58,0.07)] transition-[transform,box-shadow,border-color,opacity] duration-300 hover:-translate-y-1.5 hover:border-[#C8A96A]/45 hover:shadow-[0_28px_70px_rgba(11,31,58,0.12)] active:opacity-90 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8A96A]"
          >
            <div className="relative border-b border-[#0B1F3A]/10 bg-[#f4f1ea]/50 p-5 sm:p-6">
              <div className="pointer-events-none absolute inset-x-6 top-5 h-px bg-gradient-to-r from-transparent via-[#C8A96A]/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              {item.visual}
            </div>
            <div className="flex flex-1 flex-col px-6 pb-7 pt-6 sm:px-7 sm:pb-8 sm:pt-7">
              <h3 className="font-display text-xl font-semibold tracking-tight text-[#0B1F3A] sm:text-[1.35rem]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              <div className="mt-6 border-t border-[#0B1F3A]/10 pt-5">
                <p className="font-display text-[15px] font-medium leading-snug text-[#0B1F3A]">
                  <span className="mr-2 inline-block text-[#C8A96A]">→</span>
                  {item.outcome}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#0B1F3A] transition-colors group-hover:text-[#C8A96A]">
                Learn more
                <span className="text-base transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                  →
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-11 flex justify-center sm:mt-12">
        <ButtonLink href="/services" variant="outline" className="min-h-12 px-8">
          View all services
        </ButtonLink>
      </div>
    </>
  );
}
