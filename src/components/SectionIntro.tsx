type SectionIntroProps = {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  align?: "left" | "center";
};

export function SectionIntro({
  eyebrow,
  title,
  children,
  align = "left",
}: SectionIntroProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 inline-flex rounded-full border border-[#2BB3A3]/20 bg-[#EAF8F6] px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-[#0B1F3A]">
        {eyebrow}
      </p>
      <h2 className="font-display text-balance text-4xl font-semibold leading-[0.98] text-[#0B1F3A] sm:text-5xl">
        {title}
      </h2>
      {children ? <div className="mt-5 text-lg leading-8 text-slate-600 lg:text-xl lg:leading-9">{children}</div> : null}
    </div>
  );
}
