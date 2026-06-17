interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl mb-12 md:mb-16 ${alignClass}`}>
      {label && (
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
          {label}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
