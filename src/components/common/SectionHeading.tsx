type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sage">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl text-brown md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-brown/75 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
