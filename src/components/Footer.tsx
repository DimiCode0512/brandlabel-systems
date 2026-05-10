import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="dark-premium border-t border-white/10 text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="mb-5 grid size-11 place-items-center rounded-sm bg-white text-sm font-semibold text-[#0B1F3A]">
            BL
          </div>
          <p className="max-w-md text-sm leading-6 text-neutral-300">
            BrandLabel Systems builds custom internal systems, web apps, and websites for
            service businesses that need better structure, automation, and control.
          </p>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold">Pages</p>
          <div className="grid gap-3 text-sm text-neutral-300">
            <Link href="/services" className="touch-manipulation hover:text-white active:opacity-70">Services</Link>
            <Link href="/case-study" className="touch-manipulation hover:text-white active:opacity-70">Case Study</Link>
            <Link href="/contact" className="touch-manipulation hover:text-white active:opacity-70">Contact</Link>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold">Engagements</p>
          <p className="text-sm leading-6 text-neutral-300">
            Custom quote based on your needs. No fixed packages, no unnecessary software,
            no template thinking.
          </p>
        </div>
      </Container>
    </footer>
  );
}
