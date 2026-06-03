import { PageShell } from "@/components/PageShell";
import { ServicesExperience } from "@/components/services/ServicesExperience";
import { createPageMetadata } from "@/lib/pageMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata("/services");

export default function ServicesPage() {
  return (
    <PageShell>
      <ServicesExperience />
    </PageShell>
  );
}
