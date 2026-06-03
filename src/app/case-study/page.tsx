import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { PageShell } from "@/components/PageShell";
import { SystemMockup } from "@/components/SystemMockup";
import { createPageMetadata } from "@/lib/pageMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata("/case-study");

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
  {
    title: "Centralized dashboard",
    text: "Projects, clients, tasks, documents, and field activity were brought into one operating view.",
  },
  {
    title: "Email templates",
    text: "Repeated client messages became reusable templates, so communication stayed consistent.",
  },
  {
    title: "Online document sending",
    text: "Offers, agreements, and operational documents could be sent and followed from the same place.",
  },
  {
    title: "OTP-based signature validation via email",
    text: "Important signatures were validated through an email OTP step before approval.",
  },
  {
    title: "Read and approved confirmation",
    text: "Clients confirmed they had read and approved key documents before the workflow moved forward.",
  },
  {
    title: "Multilingual interface: EN, FR, NL, CN",
    text: "The system supported multiple languages for users working across different language needs.",
  },
];

const operatingAreas = [
  "Project status",
  "Client records",
  "Document flow",
  "Scheduling",
  "Team tracking",
  "Approvals",
];

export default function CaseStudyPage() {
  return (
    <PageShell>
      <section className="hero-premium overflow-hidden border-b border-[#0B1F3A]/10 py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <h1 className="font-display text-balance text-5xl font-semibold leading-[0.94] text-[#0B1F3A] sm:text-7xl">
              One completed system for a field service team.
            </h1>
            <p className="mt-7 max-w-2xl text-2xl leading-10 text-slate-700">
              This was a real completed project. Client details, screens, names, and
              operational numbers are not shown because of confidentiality.
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
          <div>
            <h2 className="font-display max-w-xl text-balance text-4xl font-semibold leading-[1.02] text-[#0B1F3A] sm:text-5xl">
              The team had work moving faster than their tools.
            </h2>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-700 lg:text-2xl lg:leading-10">
              The client needed one structured way to manage field service work:
              requests, clients, projects, scheduling, documents, signatures, and team
              activity. Before the system, these steps were spread across different
              tools and manual follow-up.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {requirements.map((item) => (
              <div key={item} className="premium-card rounded-md p-6">
                <p className="relative text-xl font-medium leading-8 text-[#0B1F3A]">{item}</p>
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
            <h2 className="font-display text-balance text-4xl font-semibold leading-[0.98] sm:text-5xl">
              The system became the daily operating layer.
            </h2>
            <p className="mt-6 text-xl leading-9 text-slate-300 lg:text-2xl lg:leading-10">
              The custom platform connected the work from first client request to
              document approval and team execution. Managers could see what was
              happening, what needed attention, and what was ready to move forward.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-md border border-white/10 bg-white/[0.07] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:-translate-y-1 hover:border-[#2BB3A3]/45">
                <p className="text-2xl font-semibold leading-8 text-white">{feature.title}</p>
                <p className="mt-4 text-lg leading-8 text-slate-300 lg:text-xl lg:leading-9">
                  {feature.text}
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
              {operatingAreas.map((label) => (
                <div key={label} className="rounded-sm border border-white/10 bg-white/[0.07] p-6">
                  <p className="text-xl font-semibold leading-8 text-white">{label}</p>
                  <p className="mt-3 text-lg leading-8 text-slate-300">
                    Connected inside one workflow.
                  </p>
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
            <div>
              <h2 className="font-display text-balance text-4xl font-semibold leading-[1.02] text-[#0B1F3A] sm:text-5xl">
                Less searching, fewer handoffs, clearer ownership.
              </h2>
              <p className="mt-6 text-xl leading-9 text-slate-700 lg:text-2xl lg:leading-10">
                The result was a structured operating layer for the business. Client
                work, project status, documents, approvals, calendar activity, and
                team tracking became easier to manage from one place.
              </p>
              <ButtonLink href="/contact" variant="gold" className="mt-8">
                Request a Free Audit
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </PageShell>
  );
}
