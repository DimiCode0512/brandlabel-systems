import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { CapabilityShowcase } from "@/components/home/CapabilityShowcase";
import { HeroAmbience } from "@/components/home/HeroAmbience";
import { HeroDepthColumn } from "@/components/home/HeroDepth";
import { HomeServicesPreview } from "@/components/home/HomeServicesPreview";
import { PageShell } from "@/components/PageShell";
import { SectionIntro } from "@/components/SectionIntro";
import { SystemMockup } from "@/components/SystemMockup";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Systems, Web Apps & Workflow Automation",
  description:
    "BrandLabel Systems builds custom internal systems, web apps, websites, client portals, and workflow automation for businesses that need cleaner operations.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Custom Systems, Web Apps & Workflow Automation",
    description:
      "Replace scattered tools with custom systems, web apps, client portals, websites, and workflow automation built around your business.",
    url: "/",
  },
};

const problems = [
  { title: "Tool sprawl", copy: "Too many tools for one simple process." },
  { title: "Spreadsheet risk", copy: "Excel files that only one person understands." },
  { title: "Hidden decisions", copy: "Messages hiding important decisions." },
  { title: "Manual admin", copy: "Hours lost copying data between platforms." },
  { title: "No structure", copy: "No clear structure for projects, clients, or documents." },
];

const process = [
  "Audit your current workflow",
  "Identify bottlenecks and time loss",
  "Design your custom system",
  "Build",
  "Test",
  "Launch and improve",
];

const caseFeatures = [
  "Project management",
  "Client management",
  "Workflow tracking",
  "Calendar",
  "Clock-in / clock-out",
  "Geolocation",
  "Document sending",
  "Email templates",
  "OTP-based digital signatures",
  "Read and approved confirmation",
  "Multilingual support",
];

export default function Home() {
  return (
    <PageShell>
      <section
        className="hero-premium subtle-grid home-hero-base relative overflow-x-hidden border-b border-[#0B1F3A]/10"
        data-hero-depth-root
      >
        <HeroAmbience />
        <Container className="relative z-10 grid min-h-[calc(100svh-80px)] items-center gap-10 py-12 lg:min-h-[calc(100vh-80px)] lg:grid-cols-[1.02fr_0.98fr] lg:gap-11 lg:py-14">
          <HeroDepthColumn factor={-0.072}>
            <div className="reveal">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A96A]">
                Custom systems agency
              </p>
              <h1 className="font-display text-balance max-w-4xl text-[2.5rem] font-semibold leading-[1.04] text-[#0B1F3A] sm:text-7xl sm:leading-[0.92] lg:text-8xl">
                Stop juggling scattered tools to run your business.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:mt-7 sm:text-lg sm:leading-8">
                We design and build custom systems, web apps, and websites that replace disconnected tools —
                so your business can manage clients, projects, documents, workflows, and operations in one
                place.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
                <ButtonLink href="/contact" variant="gold">Request a Free Audit</ButtonLink>
              </div>
              <p className="mt-5 text-sm text-slate-600">
                Built for businesses that need better structure, automation, and control.
              </p>
            </div>
          </HeroDepthColumn>
          <HeroDepthColumn factor={0.085} className="lg:pl-2 xl:pl-4">
            <div className="reveal" style={{ animationDelay: "120ms" }}>
              <SystemMockup />
            </div>
          </HeroDepthColumn>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <SectionIntro eyebrow="The problem" title="Your business is organized, but your tools are not.">
            <p>
              Every process lives in a different tab, inbox, spreadsheet, or chat thread.
              The result is more admin, slower decisions, and teams spending too much time looking for the
              latest version.
            </p>
          </SectionIntro>
          <div className="mt-8 grid gap-3 md:grid-cols-5 md:mt-9">
            {problems.map((problem) => (
              <div key={problem.title} className="group border-t border-[#0B1F3A]/15 pt-5">
                <div className="mb-5 grid size-10 place-items-center rounded-sm border border-[#0B1F3A]/10 bg-white text-[#C8A96A] shadow-sm transition group-hover:-translate-y-1 group-hover:border-[#C8A96A]/50">
                  <span className="block size-4 rounded-[2px] border border-current" />
                </div>
                <p className="text-sm font-semibold text-[#0B1F3A]">{problem.title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{problem.copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-10">
          <SectionIntro eyebrow="The solution" title="One system designed around how your business actually works.">
            <p>
              We don’t force you into generic software. We build a system tailored to your workflow, your
              team, and how you serve clients.
            </p>
            <p className="mt-6 font-display text-xl font-semibold leading-snug text-[#0B1F3A] sm:text-2xl">
              Build the system your business actually needs.
            </p>
          </SectionIntro>
          <div className="grid gap-4 sm:grid-cols-2 lg:gap-4">
            {[
              {
                title: "Operations dashboard",
                copy: "Track projects, clients, and workflows in one centralized system.",
              },
              {
                title: "Client portal",
                copy: "Give clients one place to see status, documents, and approvals.",
              },
              {
                title: "Document workflow",
                copy: "Send, sign, and track agreements with OTP-secured digital signatures.",
              },
              {
                title: "Team visibility",
                copy: "See who is working, where, and on what — with clarity for managers.",
              },
            ].map((item) => (
              <div key={item.title} className="premium-card rounded-md p-6">
                <p className="relative text-lg font-semibold text-[#0B1F3A]">{item.title}</p>
                <p className="relative mt-3 text-sm leading-6 text-slate-600">{item.copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CapabilityShowcase />

      <section className="py-14 sm:py-20">
        <Container>
          <SectionIntro
            eyebrow="Services"
            title="Systems, web apps, and websites — shaped around your workflows."
            align="center"
          >
            <p className="mx-auto max-w-2xl">
              From internal operations to customer-facing experiences — built with the same disciplined,
              premium execution.
            </p>
          </SectionIntro>
          <HomeServicesPreview />
        </Container>
      </section>

      <section className="dark-premium relative hidden overflow-hidden py-14 text-white sm:py-19 lg:block">
        <div className="gold-line absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2" />
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-11">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A96A]">
              Case study
            </p>
            <h2 className="font-display text-balance text-4xl font-semibold leading-none sm:text-5xl">
              One custom system replacing scattered tools
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-300">
              This build replaced spreadsheets, messaging threads, and manual handoffs with one centralized
              platform for projects, clients, documents, approvals, and team activity.
            </p>
            <Link href="/case-study" className="mt-7 inline-flex text-sm font-semibold text-[#C8A96A] hover:text-white">
              Read the case study
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {caseFeatures.map((feature) => (
              <div
                key={feature}
                className="rounded-sm border border-white/10 bg-white/[0.07] px-4 py-3 text-sm text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:-translate-y-1 hover:border-[#C8A96A]/45 hover:bg-white/[0.1]"
              >
                <span className="mr-3 text-[#C8A96A]">/</span>
                {feature}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="hidden py-14 sm:py-20 lg:block">
        <Container>
          <SectionIntro eyebrow="Process" title="A simple process from chaos to control." align="center">
            <p>
              Structured enough to keep momentum, flexible enough to reflect how your company actually
              operates.
            </p>
          </SectionIntro>
          <div className="relative mt-8 grid gap-3 md:grid-cols-6 md:mt-9">
            <div className="absolute left-[8%] right-[8%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#C8A96A]/60 to-transparent md:block" />
            {process.map((step, index) => (
              <div key={step} className="premium-card z-10 rounded-md p-5">
                <p className="relative text-xs text-[#C8A96A]">0{index + 1}</p>
                <p className="relative mt-8 text-sm font-semibold text-[#0B1F3A]">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </PageShell>
  );
}
