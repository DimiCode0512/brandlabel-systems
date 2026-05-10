import { ButtonLink } from "./ButtonLink";
import { Container } from "./Container";

export function CTASection() {
  return (
    <section className="dark-premium relative overflow-hidden py-20 text-white sm:py-28">
      <div className="gold-line absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2" />
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A96A]">
            Next step
          </p>
          <h2 className="font-display text-balance text-4xl font-semibold leading-none sm:text-6xl">
            Start with a free audit.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-300">
            We’ll map your workflow, identify where you’re losing time, and design the
            system your business actually needs.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="gold">
              Request a Free Audit
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
