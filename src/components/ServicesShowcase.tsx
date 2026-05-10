"use client";

import { useState } from "react";

type Service = {
  title: string;
  description: string;
  useCase: string[];
  outcomes: string[];
  visual: "systems" | "apps" | "websites" | "automation" | "maintenance";
};

const services: Service[] = [
  {
    title: "Custom Internal Systems",
    description:
      "We build centralized systems that replace scattered tools and organize your business operations in one place.",
    useCase: ["Team management", "Projects", "Documents", "Scheduling", "Client tracking"],
    outcomes: ["Less admin", "Faster coordination", "Clear visibility", "Better communication"],
    visual: "systems",
  },
  {
    title: "Custom Web Apps",
    description:
      "We create focused web applications for portals, dashboards, booking flows, approvals, and operational workflows.",
    useCase: ["Client portals", "Booking tools", "Approval flows", "Internal dashboards", "Role-based access"],
    outcomes: ["Smoother client experience", "Fewer manual requests", "Cleaner data", "Better team access"],
    visual: "apps",
  },
  {
    title: "Websites for Service Businesses",
    description:
      "We design premium websites that clarify your offer, build trust, and convert visitors into qualified conversations.",
    useCase: ["Service positioning", "Lead capture", "Case study pages", "Contact flows", "Conversion-focused layouts"],
    outcomes: ["Stronger credibility", "Clearer messaging", "Higher quality enquiries", "Premium brand presence"],
    visual: "websites",
  },
  {
    title: "Automation & Workflow Tools",
    description:
      "We connect steps, remove repetitive work, and make handoffs more reliable without creating fragile workarounds.",
    useCase: ["Email templates", "Document routing", "Status updates", "Task triggers", "Approval reminders"],
    outcomes: ["Less duplicated work", "Faster handoffs", "Consistent processes", "Reduced operational friction"],
    visual: "automation",
  },
  {
    title: "Maintenance & Improvements",
    description:
      "We keep your system useful after launch with refinements, bug fixes, workflow updates, and continuous improvements.",
    useCase: ["Feature refinement", "Performance checks", "Workflow changes", "New automations", "Team feedback loops"],
    outcomes: ["Longer system lifespan", "Lower operational risk", "Better adoption", "Continuous business fit"],
    visual: "maintenance",
  },
];

export function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid gap-4">
      {services.map((service, index) => {
        const isActive = activeIndex === index;

        return (
          <article
            key={service.title}
            className={`overflow-hidden rounded-md border transition-all duration-300 ${
              isActive
                ? "border-[#C8A96A]/55 bg-white shadow-[0_30px_90px_rgba(11,31,58,0.14)]"
                : "border-[#0B1F3A]/10 bg-white/65 shadow-[0_14px_36px_rgba(11,31,58,0.06)] hover:-translate-y-1 hover:border-[#C8A96A]/35 hover:bg-white"
            }`}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="grid w-full gap-5 p-6 text-left md:grid-cols-[0.12fr_0.68fr_0.2fr] md:items-center md:p-7"
              aria-expanded={isActive}
            >
              <span className="text-sm font-semibold text-[#C8A96A]">0{index + 1}</span>
              <span>
                <span className="block font-display text-3xl font-semibold leading-none text-[#0B1F3A] sm:text-4xl">
                  {service.title}
                </span>
                <span className="mt-3 block max-w-2xl text-sm leading-6 text-slate-600">
                  {service.description}
                </span>
              </span>
              <span className="flex items-center gap-3 text-sm font-semibold text-[#0B1F3A] md:justify-end">
                {isActive ? "Open" : "View details"}
                <span
                  className={`grid size-9 place-items-center rounded-full border border-[#0B1F3A]/15 transition ${
                    isActive ? "rotate-45 bg-[#C8A96A] text-[#0B1F3A]" : "bg-white"
                  }`}
                >
                  +
                </span>
              </span>
            </button>

            <div
              className={`grid transition-all duration-500 ease-out ${
                isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid gap-8 border-t border-[#0B1F3A]/10 p-6 pt-7 md:p-7 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="grid content-start gap-6">
                    <DetailBlock title="Real-world use case" items={service.useCase} />
                    <DetailBlock title="Outcomes" items={service.outcomes} accent />
                  </div>
                  <ServiceVisual type={service.visual} />
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function DetailBlock({
  title,
  items,
  accent = false,
}: {
  title: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
        {title}
      </p>
      <div className="grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item}
            className={`rounded-sm border px-4 py-3 text-sm ${
              accent
                ? "border-[#C8A96A]/30 bg-[#C8A96A]/10 text-[#0B1F3A]"
                : "border-[#0B1F3A]/10 bg-[#F8F6F0] text-slate-700"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceVisual({ type }: { type: Service["visual"] }) {
  const visuals = {
    systems: <OperationsDashboard />,
    apps: <ClientPortal />,
    websites: <WebsitePreview />,
    automation: <WorkflowVisual />,
    maintenance: <MonitoringDashboard />,
  };

  return (
    <div className="relative overflow-hidden rounded-md border border-[#0B1F3A]/10 bg-[#081728] p-4 text-white shadow-[0_24px_70px_rgba(11,31,58,0.22)]">
      <div className="absolute -right-16 -top-16 size-44 rounded-full bg-[#C8A96A]/20 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A96A] to-transparent" />
      <div className="relative">{visuals[type]}</div>
    </div>
  );
}

function OperationsDashboard() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold">Operations dashboard</p>
        <p className="rounded-sm bg-[#C8A96A]/15 px-3 py-1 text-xs text-[#F3DEAA]">Live</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ["Projects", "24"],
          ["Clients", "42"],
          ["Tasks today", "18"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-sm border border-white/10 bg-white/[0.07] p-4">
            <p className="text-xs text-slate-400">{label}</p>
            <p className="mt-3 text-2xl font-semibold">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 space-y-3 rounded-sm border border-white/10 bg-white/[0.07] p-4">
        {["Planning", "In progress", "Client approval"].map((item, index) => (
          <div key={item} className="flex items-center gap-3">
            <span className="w-28 text-xs text-slate-300">{item}</span>
            <div className="h-2 flex-1 rounded-full bg-white/10">
              <div className="h-2 rounded-full bg-[#C8A96A]" style={{ width: `${88 - index * 18}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClientPortal() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold">Client portal</p>
        <p className="text-xs text-[#C8A96A]">Secure access</p>
      </div>
      <div className="grid gap-3 lg:grid-cols-[0.38fr_0.62fr]">
        <div className="rounded-sm border border-white/10 bg-white/[0.07] p-4">
          <p className="text-xs text-slate-400">Client</p>
          <p className="mt-3 text-lg font-semibold">Maison Studio</p>
          <p className="mt-4 rounded-sm bg-[#C8A96A]/15 px-3 py-2 text-xs text-[#F3DEAA]">Proposal ready</p>
        </div>
        <div className="rounded-sm border border-white/10 bg-white/[0.07] p-4">
          {["Review brief", "Approve estimate", "Upload documents"].map((item) => (
            <div key={item} className="mb-3 flex items-center justify-between border-b border-white/10 pb-3 last:mb-0 last:border-0 last:pb-0">
              <span className="text-xs text-slate-300">{item}</span>
              <span className="size-2 rounded-full bg-[#C8A96A]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WebsitePreview() {
  return (
    <div className="rounded-sm border border-white/10 bg-white/[0.06] p-3">
      <div className="mb-3 flex gap-1.5">
        <span className="size-2 rounded-full bg-[#C8A96A]" />
        <span className="size-2 rounded-full bg-white/30" />
        <span className="size-2 rounded-full bg-white/30" />
      </div>
      <div className="rounded-sm bg-[#F8F6F0] p-4 text-[#0B1F3A]">
        <div className="mb-8 h-2 w-24 rounded-full bg-[#0B1F3A]/15" />
        <div className="max-w-xs">
          <div className="h-7 rounded-full bg-[#0B1F3A]" />
          <div className="mt-2 h-7 w-4/5 rounded-full bg-[#0B1F3A]" />
          <div className="mt-5 h-2 w-full rounded-full bg-[#0B1F3A]/14" />
          <div className="mt-2 h-2 w-2/3 rounded-full bg-[#0B1F3A]/14" />
        </div>
        <div className="mt-8 grid gap-2 sm:grid-cols-3">
          <div className="h-20 rounded-sm bg-[#0B1F3A]/10" />
          <div className="h-20 rounded-sm bg-[#C8A96A]/35" />
          <div className="h-20 rounded-sm bg-[#0B1F3A]/10" />
        </div>
      </div>
    </div>
  );
}

function WorkflowVisual() {
  return (
    <div>
      <p className="mb-4 text-sm font-semibold">Automation pipeline</p>
      <div className="grid gap-3">
        {[
          ["New request", "Trigger"],
          ["Generate offer", "Template"],
          ["Send approval", "Email"],
          ["Create task", "System"],
        ].map(([step, tag], index) => (
          <div key={step} className="grid grid-cols-[2rem_1fr_auto] items-center gap-3">
            <span className="grid size-8 place-items-center rounded-full border border-[#C8A96A]/40 bg-[#C8A96A]/15 text-xs text-[#F3DEAA]">
              {index + 1}
            </span>
            <div className="rounded-sm border border-white/10 bg-white/[0.07] px-4 py-3 text-sm">
              {step}
            </div>
            <span className="rounded-sm bg-white/10 px-3 py-2 text-xs text-slate-300">{tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MonitoringDashboard() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold">System health</p>
        <p className="text-xs text-[#C8A96A]">Improving</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          ["Uptime", "99.9%"],
          ["Open requests", "7"],
          ["Feature ideas", "12"],
          ["Response time", "Fast"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-sm border border-white/10 bg-white/[0.07] p-4">
            <p className="text-xs text-slate-400">{label}</p>
            <p className="mt-3 text-xl font-semibold">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-sm border border-white/10 bg-white/[0.07] p-4">
        <div className="flex h-24 items-end gap-2">
          {[42, 64, 52, 78, 70, 88, 82].map((height, index) => (
            <div key={index} className="flex-1 rounded-t-sm bg-[#C8A96A]/80" style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
