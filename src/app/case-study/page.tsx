import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { PageShell } from "@/components/PageShell";
import { SectionIntro } from "@/components/SectionIntro";
import { SystemMockup } from "@/components/SystemMockup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study",
  description:
    "A demo case study showing how a custom internal system can replace scattered tools with one centralized operating platform.",
  alternates: {
    canonical: "/case-study",
  },
  openGraph: {
    title: "Case Study",
    description:
      "See how a service team can manage projects, clients, workflows, documents, approvals, and team activity in one custom system.",
    url: "/case-study",
  },
};

const requirements = [
  "Projects",
  "Clients",
  "Workflows",
  "Calendar",
  "Team tracking",
  "Documents, offers, agreements",
  "Client communication",
];

const features = [
  "Centralized dashboard",
  "Email templates",
  "Online document sending",
  "OTP-based signature validation via email",
  "Read and approved confirmation",
  "Multilingual interface: EN, FR, NL, CN",
];

export default function CaseStudyPage() {
  return (
    <PageShell>
      <section className="hero-premium overflow-hidden border-b border-[#0B1F3A]/10 py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A96A]">
              Case study
            </p>
            <h1 className="font-display text-balance text-5xl font-semibold leading-[0.94] text-[#0B1F3A] sm:text-7xl">
              One custom platform for a growing service team.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700">
              This demo case study shows how a team of around 10 people could replace
              scattered operational tools with one custom internal system. No real client
              data is included.
            </p>
          </div>
          <SystemMockup />
        </Container>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        {/* Subtle premium depth */}
        <div
          aria-hidden
          className="subtle-grid pointer-events-none absolute inset-0 opacity-40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-10 size-[28rem] rounded-full bg-[#C8A96A]/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 bottom-0 size-[26rem] rounded-full bg-[#0B1F3A]/[0.06] blur-3xl"
        />
        <Container className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro eyebrow="Context" title="The team had work moving faster than their tools.">
            <p>
              A service team needed a clearer way to manage client work from first request
              to signed agreement, team scheduling, document delivery, and project tracking.
              The work was possible, but the operating model depended on too many places.
            </p>
          </SectionIntro>
          <div className="grid gap-3 sm:grid-cols-2">
            {requirements.map((item) => (
              <div key={item} className="premium-card rounded-md p-5">
                <p className="relative text-sm font-medium text-[#0B1F3A]">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="dark-premium relative overflow-hidden py-20 text-white sm:py-28">
        {/* Slow drifting glows + faint grid for cinematic depth */}
        <div
          aria-hidden
          className="hero-glow-drift pointer-events-none absolute -left-1/4 top-12 size-[30rem] rounded-full bg-[#C8A96A]/14 blur-3xl"
        />
        <div
          aria-hidden
          className="hero-glow-drift-alt pointer-events-none absolute -right-1/4 bottom-10 size-[28rem] rounded-full bg-[#0B1F3A]/35 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.32] [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:56px_56px]"
        />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A96A]">
              System
            </p>
            <h2 className="font-display text-balance text-4xl font-semibold leading-[0.98] sm:text-5xl">
              A centralized dashboard with the full operating flow.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              The custom system gave leadership, operations, and the team a shared view of
              what was happening, what needed approval, and what was ready for the next step.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature} className="rounded-md border border-white/10 bg-white/[0.07] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:-translate-y-1 hover:border-[#C8A96A]/45">
                <p className="text-base font-semibold leading-6 text-white">{feature}</p>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  Designed to reduce manual follow-up and make progress visible without
                  adding another generic tool to the stack.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        {/* Subtle premium depth */}
        <div
          aria-hidden
          className="subtle-grid pointer-events-none absolute inset-0 opacity-35"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-8 size-[28rem] rounded-full bg-[#C8A96A]/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 bottom-0 size-[26rem] rounded-full bg-[#0B1F3A]/[0.06] blur-3xl"
        />
        <Container className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="dark-premium relative rounded-md p-6 text-white shadow-[0_30px_80px_rgba(11,31,58,0.18)] sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Open projects", "24"],
                ["Documents sent", "138"],
                ["Languages", "4"],
                ["Team members", "10"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-sm border border-white/10 bg-white/[0.07] p-5">
                  <p className="text-xs text-neutral-400">{label}</p>
                  <p className="mt-4 font-display text-5xl font-semibold text-[#C8A96A]">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-md border border-[#0B1F3A]/12 bg-white/95 p-6 shadow-[0_30px_70px_rgba(11,31,58,0.12)] sm:p-8 lg:bg-white/65 lg:backdrop-blur-xl">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A96A]/55 to-transparent"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 size-56 rounded-full bg-[#C8A96A]/12 blur-3xl"
            />
            <SectionIntro eyebrow="Outcome" title="Less searching, fewer handoffs, clearer ownership.">
              <p>
                The result is a more structured operating layer: clients, projects, documents,
                calendar activity, signatures, approvals, and team tracking all live in one
                place. Leadership gets visibility, the team gets clarity, and clients get a
                cleaner experience.
              </p>
              <ButtonLink href="/contact" variant="gold" className="mt-8">
                Request a Free Audit
              </ButtonLink>
            </SectionIntro>
          </div>
        </Container>
      </section>

      <CTASection />
    </PageShell>
  );
}
