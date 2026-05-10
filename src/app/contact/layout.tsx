import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free systems audit from BrandLabel Systems and get a clear recommendation for your workflow, tools, and operations.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact",
    description:
      "Tell BrandLabel Systems how your business currently works and request a free systems audit.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
