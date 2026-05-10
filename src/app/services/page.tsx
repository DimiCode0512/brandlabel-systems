import { PageShell } from "@/components/PageShell";
import { ServicesExperience } from "@/components/services/ServicesExperience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom systems, web apps, websites, automation tools, and long-term improvements for service businesses that need better workflows.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services",
    description:
      "Explore custom internal systems, web apps, client portals, websites, workflow automation, maintenance, and improvement services.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <ServicesExperience />
    </PageShell>
  );
}
