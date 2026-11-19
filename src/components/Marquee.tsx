export default function Marquee({
  items,
  light = false,
}: {
  items: string[];
  light?: boolean;
}) {
  const track = [...items, ...items];

  return (
    <div
      className={`overflow-hidden border-y ${
        light ? "border-black/10 bg-gym-surface" : "border-border-subtle bg-surface"
      }`}
    >
      <div className="marquee-track flex w-max items-center gap-10 py-4">
        {track.map((text, i) => (
          <span
            key={`${text}-${i}`}
            className={`font-heading text-sm font-semibold uppercase tracking-[0.3em] ${
              light ? "text-gym-muted" : "text-muted"
            }`}
          >
            {text}
            <span className={light ? "ml-10 text-gym-accent" : "ml-10 text-accent"}>•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
