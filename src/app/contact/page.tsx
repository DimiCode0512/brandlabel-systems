"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { LocalizedLink } from "@/components/LocalizedLink";
import { PageShell } from "@/components/PageShell";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Your request could not be sent.");
      }

      setStatus("sent");
      form.reset();
    } catch (submissionError) {
      setStatus("error");
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Your request could not be sent.",
      );
    }
  }

  return (
    <PageShell>
      <section className="hero-premium relative overflow-hidden py-20 sm:py-28">
        <Container className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h1 className="font-display text-balance text-5xl font-semibold leading-[0.94] text-[#0B1F3A] sm:text-7xl">
              Request your free systems audit.
            </h1>
            <p className="mt-7 max-w-2xl text-2xl leading-10 text-slate-700">
              Tell us how your business currently works. We&apos;ll show you where
              time is being lost and what kind of system would simplify it.
            </p>
            <div className="premium-card mt-10 rounded-md p-7">
              <p className="relative text-2xl font-semibold leading-8 text-[#0B1F3A]">Your free audit includes:</p>
              <ul className="relative mt-4 list-disc space-y-2 pl-5 text-xl leading-9 text-slate-600">
                <li>Workflow review</li>
                <li>Tool analysis</li>
                <li>System recommendation</li>
              </ul>
              <p className="relative mt-6 text-xl leading-8 text-slate-600">
                No commitment required. We respond within 24 hours.
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Subtle ambient depth behind the form */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-4 rounded-xl bg-[radial-gradient(ellipse_at_18%_10%,rgba(200,169,106,0.18),transparent_55%),radial-gradient(ellipse_at_85%_90%,rgba(11,31,58,0.1),transparent_60%)] blur-2xl"
            />

            {status === "sent" ? (
              <div className="surface relative flex min-h-[420px] flex-col items-center justify-center rounded-md p-8 text-center shadow-[0_30px_70px_rgba(11,31,58,0.12)]">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A96A]/60 to-transparent"
                />
                <div className="mb-6 grid size-14 place-items-center rounded-full bg-[#C8A96A]/15 text-[#C8A96A]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-display text-4xl font-semibold text-[#0B1F3A]">
                  We received your request.
                </p>
                <p className="mx-auto mt-5 max-w-md text-xl leading-9 text-slate-600">
                  We&apos;ll be in touch within 24 hours to schedule your free audit.
                </p>
                <ButtonLink href="/" variant="outline" className="mt-8">
                  Back to home
                </ButtonLink>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="surface relative rounded-md p-6 shadow-[0_30px_70px_rgba(11,31,58,0.12)] sm:p-8"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A96A]/60 to-transparent"
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-xl font-medium text-[#0B1F3A]">
                    Name
                    <input
                      name="name"
                      type="text"
                      required
                      className="min-h-14 rounded-sm border border-[#0B1F3A]/15 bg-white px-4 text-lg outline-none transition focus:border-[#C8A96A] focus:shadow-[0_0_0_4px_rgba(200,169,106,0.16)]"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="grid gap-2 text-xl font-medium text-[#0B1F3A]">
                    Company
                    <input
                      name="company"
                      type="text"
                      className="min-h-14 rounded-sm border border-[#0B1F3A]/15 bg-white px-4 text-lg outline-none transition focus:border-[#C8A96A] focus:shadow-[0_0_0_4px_rgba(200,169,106,0.16)]"
                      placeholder="Company name"
                    />
                  </label>
                </div>
                <label className="mt-5 grid gap-2 text-xl font-medium text-[#0B1F3A]">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    className="min-h-14 rounded-sm border border-[#0B1F3A]/15 bg-white px-4 text-lg outline-none transition focus:border-[#C8A96A] focus:shadow-[0_0_0_4px_rgba(200,169,106,0.16)]"
                    placeholder="you@company.com"
                  />
                </label>
                <label className="mt-5 grid gap-2 text-xl font-medium text-[#0B1F3A]">
                  Message
                  <textarea
                    name="message"
                    rows={6}
                    className="resize-none rounded-sm border border-[#0B1F3A]/15 bg-white px-4 py-3 text-lg leading-8 outline-none transition focus:border-[#C8A96A] focus:shadow-[0_0_0_4px_rgba(200,169,106,0.16)]"
                    placeholder="What tools, workflows, or client processes need to be cleaned up?"
                />
              </label>
                <label className="hidden">
                  Website
                  <input
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
                <div className="mt-6">
                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileTap={{ scale: 0.97, opacity: 0.88 }}
                    transition={{ duration: 0.12 }}
                    className="inline-flex min-h-14 w-full touch-manipulation items-center justify-center rounded-sm bg-[#C8A96A] px-8 text-xl font-semibold tracking-[0.02em] text-[#0B1F3A] shadow-[0_22px_50px_rgba(200,169,106,0.42)] ring-1 ring-[#C8A96A]/45 [box-shadow:inset_0_1px_0_rgba(255,255,255,0.4),0_22px_50px_rgba(200,169,106,0.42)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#D6BA7D] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {status === "sending" ? "Sending request..." : "Request My Free Audit"}
                  </motion.button>
                </div>
                {status === "error" ? (
                  <p className="mt-4 rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-lg leading-7 text-red-700">
                    {error}
                  </p>
                ) : null}
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Custom offers start from €1,000. Final quote depends on scope,
                  workflow complexity, and integrations.
                </p>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  We will get back to you within 24 hours. By submitting this form, you
                  agree that we can use your details to respond to your request. Read the{" "}
                  <LocalizedLink
                    href="/privacy"
                    className="font-semibold text-[#0B1F3A] underline decoration-[#C8A96A]/60 underline-offset-4"
                  >
                    Privacy Policy
                  </LocalizedLink>
                  .
                </p>
              </form>
            )}
          </div>
        </Container>
        {/* Smooth visual handoff into the dark footer */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-[#0B1F3A]/[0.04] to-[#0B1F3A]/15"
        />
      </section>
    </PageShell>
  );
}
