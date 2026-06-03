const workflowItems = [
  { label: "Active projects", value: "24", meta: "+18% this month" },
  { label: "Clients", value: "42", meta: "6 awaiting approval" },
  { label: "Workflow", value: "87%", meta: "on schedule" },
  { label: "Documents", value: "138", meta: "OTP enabled" },
];

export function SystemMockup() {
  return (
    <div
      className="surface mockup-root relative mx-auto w-full max-w-[calc(100vw-2.5rem)] touch-pan-y overflow-visible rounded-md p-3 sm:max-w-xl sm:p-4 lg:max-w-none"
      data-mockup-root
    >
      <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-[#C8A96A]/22 blur-3xl lg:size-64" />
      <div className="pointer-events-none absolute -bottom-16 left-4 size-60 rounded-full bg-[#143963]/28 blur-3xl lg:left-8 lg:size-72" />

      <div className="relative mx-auto max-w-[640px] pb-20 pt-3 sm:max-w-[720px] sm:pb-24 lg:max-w-none lg:scale-[1.18] lg:pb-20 lg:pt-4 xl:scale-[1.22]">
        {/* Main operations dashboard */}
        <div className="relative z-10 overflow-hidden rounded-sm border border-white/10 bg-[#071423] p-4 text-white shadow-[0_40px_100px_rgba(11,31,58,0.32)] sm:p-6 lg:mr-8 lg:mt-5">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A96A] to-transparent opacity-90" />
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 sm:mb-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#C8A96A] sm:text-xs">Operations OS</p>
              <p className="mt-1 text-lg font-semibold sm:text-2xl">BrandLabel control room</p>
            </div>
            <div className="shrink-0 rounded-sm border border-[#C8A96A]/35 bg-[#C8A96A]/15 px-3 py-2 text-xs font-semibold text-[#F3DEAA]">
              Live system
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
            {workflowItems.map((item) => (
              <div
                key={item.label}
                className="rounded-sm border border-white/10 bg-white/[0.07] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-4"
              >
                <p className="text-xs text-slate-400">{item.label}</p>
                <p className="mt-1 text-2xl font-semibold sm:mt-2 sm:text-3xl">{item.value}</p>
                <p className="mt-1 text-[11px] text-[#C8A96A] sm:mt-2 sm:text-xs">{item.meta}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 hidden gap-4 sm:grid lg:grid-cols-[0.62fr_0.38fr] lg:gap-5">
            <div className="rounded-sm border border-white/10 bg-white/[0.07] p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-2">
                <p className="text-base font-medium">Workflow tracker</p>
                <p className="text-[10px] text-slate-400 sm:text-xs">EN / FR / NL / CN</p>
              </div>
              <div className="space-y-3 sm:space-y-3.5">
                {["Lead captured", "Proposal generated", "Client signature", "Team scheduled"].map(
                  (item, index) => (
                    <div key={item} className="flex items-center gap-2 sm:gap-3">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full border border-[#C8A96A]/40 bg-[#C8A96A]/15 text-[11px] font-bold text-[#F3DEAA]">
                        {index + 1}
                      </span>
                      <div className="h-2 flex-1 rounded-full bg-white/10">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-[#C8A96A] to-[#F3DEAA]"
                          style={{ width: `${92 - index * 13}%` }}
                        />
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="rounded-sm border border-white/10 bg-white/[0.07] p-4 sm:p-5">
              <p className="text-base font-medium">Today</p>
              <div className="mt-4 space-y-3">
                {["09:00 Site crew", "11:30 Client call", "15:00 Agreement"].map((item) => (
                  <div key={item} className="border-l border-[#C8A96A]/55 pl-3">
                    <p className="text-xs text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating: website preview */}
        <div className="mockup-float-card absolute -left-2 top-2 z-30 w-[min(13.5rem,46%)] rounded-md border border-white/12 bg-[#0a1628] p-2.5 text-white shadow-[0_26px_60px_rgba(11,31,58,0.48)] sm:-left-3 sm:top-4 sm:w-56 lg:left-0 lg:top-8 lg:w-64">
          <div className="mb-2 flex items-center gap-1.5 rounded-sm bg-[#050d18] px-2 py-1.5">
            <div className="flex gap-1">
              <span className="size-2 rounded-full bg-white/12" />
              <span className="size-2 rounded-full bg-white/12" />
              <span className="size-2 rounded-full bg-white/12" />
            </div>
            <div className="h-5 flex-1 rounded-sm bg-white/[0.06] px-2 text-[9px] leading-5 text-slate-500">
              brandlabel.demo
            </div>
          </div>
          <div className="overflow-hidden rounded-sm border border-white/10 bg-[#071423]">
            <div className="border-b border-white/10 px-3 py-4">
              <div className="mb-2 h-0.5 w-10 bg-[#C8A96A]" />
              <p className="font-display text-sm font-semibold text-white">Operations, clarified.</p>
              <p className="mt-2 text-[10px] leading-relaxed text-slate-400">
                One message. One experience.
              </p>
            </div>
            <div className="flex gap-2 px-3 py-3">
              <div className="h-7 flex-1 rounded-sm bg-[#C8A96A]/25" />
              <div className="h-7 w-16 rounded-sm border border-white/15 bg-white/[0.06]" />
            </div>
          </div>
        </div>

        {/* Floating: document signature */}
        <div className="mockup-float-card absolute -right-1 top-0 z-20 w-[min(12.5rem,50%)] rounded-sm border border-white/12 bg-[#0a1628] p-3.5 text-white shadow-[0_26px_62px_rgba(11,31,58,0.48)] sm:w-56 lg:right-1 lg:top-6 lg:w-60">
          <div className="mb-2 flex items-center justify-between gap-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C8A96A]">
              Signature
            </p>
            <span className="rounded-full bg-[#C8A96A]/20 px-2 py-0.5 text-[9px] font-semibold text-[#F3DEAA]">
              OTP sent
            </span>
          </div>
          <p className="text-sm font-medium leading-snug">Service agreement · Acme Ltd.</p>
          <div className="mt-3 flex items-end gap-2 border-t border-white/10 pt-3">
            <div className="flex-1">
              <p className="text-[9px] uppercase tracking-wider text-slate-500">Signer</p>
              <p className="text-xs text-slate-200">M. Laurent</p>
            </div>
            <div className="rounded-sm border border-[#C8A96A]/40 bg-[#C8A96A]/10 px-2 py-1 font-display text-xs italic text-[#F3DEAA]">
              Signed
            </div>
          </div>
        </div>

        {/* Floating: mobile / team activity */}
        <div className="mockup-float-card absolute -left-3 bottom-10 z-20 w-[min(10.5rem,44%)] rounded-lg border border-white/12 bg-[#050d18] p-2.5 shadow-[0_24px_56px_rgba(11,31,58,0.45)] sm:bottom-12 sm:w-44 lg:-left-4 lg:bottom-14">
          <div className="mb-2 flex items-center justify-between px-0.5">
            <p className="text-[10px] font-semibold text-[#C8A96A]">Team activity</p>
            <span className="size-2 rounded-full border border-[#C8A96A]/50 bg-[#C8A96A]/35 shadow-[0_0_10px_rgba(200,169,106,0.45)]" />
          </div>
          <div className="overflow-hidden rounded-md border border-white/10 bg-[#0B1F3A]/80">
            <div className="flex items-center justify-between border-b border-white/10 px-2.5 py-1.5">
              <span className="text-[10px] text-slate-400">Unit A</span>
              <span className="text-[10px] text-[#C8A96A]">On site</span>
            </div>
            <div className="space-y-1.5 p-2.5">
              <div className="flex items-center gap-1.5 text-[10px] text-slate-300">
                <span className="text-[#C8A96A]">↗</span>
                <span>Clock-in 07:58</span>
              </div>
              <div className="h-14 rounded-sm bg-gradient-to-br from-[#143963]/90 to-[#071423] p-1">
                <div className="relative h-full rounded-[3px] border border-white/5 bg-[#0d2847]/60">
                  <div className="absolute left-2 top-4 size-2.5 rounded-full border border-[#C8A96A]/60 bg-[#C8A96A]/40" />
                  <div className="absolute right-5 top-7 size-1.5 rounded-full bg-white/30" />
                  <p className="absolute bottom-1 left-1 right-1 text-center text-[8px] text-slate-500">
                    Geo fence OK
                  </p>
                </div>
              </div>
              <p className="text-[9px] text-slate-500">Job #2841 · In progress</p>
            </div>
          </div>
        </div>

        {/* Floating: workflow / pipeline */}
        <div className="mockup-float-card absolute bottom-1 right-2 z-20 w-[min(14.5rem,56%)] rounded-sm border border-white/12 bg-[#0a1628] p-3.5 text-white shadow-[0_22px_52px_rgba(11,31,58,0.42)] sm:bottom-3 sm:right-6 lg:bottom-5 lg:right-10 lg:w-64">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C8A96A]">
              Pipeline
            </p>
            <span className="text-[9px] text-slate-500">Live</span>
          </div>
          <div className="space-y-2">
            {[
              { label: "Intake", state: "done" },
              { label: "Proposal", state: "done" },
              { label: "Contract", state: "active" },
              { label: "Kickoff", state: "next" },
            ].map((row) => (
              <div key={row.label} className="flex items-center gap-2">
                <span
                  className={`grid size-5 place-items-center rounded-full border text-[9px] font-bold ${
                    row.state === "done"
                      ? "border-[#C8A96A]/50 bg-[#C8A96A]/20 text-[#F3DEAA]"
                      : row.state === "active"
                        ? "border-[#C8A96A] bg-[#C8A96A]/25 text-white shadow-[0_0_12px_rgba(200,169,106,0.25)]"
                        : "border-white/15 bg-white/5 text-slate-500"
                  }`}
                >
                  {row.state === "done" ? "✓" : row.state === "active" ? "●" : "○"}
                </span>
                <span
                  className={`text-xs ${row.state === "active" ? "font-semibold text-white" : "text-slate-400"}`}
                >
                  {row.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
