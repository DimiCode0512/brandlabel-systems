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
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A96A]">
        {eyebrow}
      </p>
      <h2 className="font-display text-balance text-4xl font-semibold leading-[0.98] text-[#0B1F3A] sm:text-5xl">
        {title}
      </h2>
      {children ? <div className="mt-5 text-base leading-8 text-slate-600">{children}</div> : null}
    </div>
  );
}
