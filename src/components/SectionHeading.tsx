export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold tracking-[0.2em] uppercase ${
            light ? "text-gym-accent" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-[clamp(1.75rem,1.2rem+2.2vw,2.75rem)] font-semibold tracking-tight">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-gym-muted" : "text-muted"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
