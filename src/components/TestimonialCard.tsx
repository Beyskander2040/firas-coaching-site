import { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({
  testimonial,
  light = false,
}: {
  testimonial: Testimonial;
  light?: boolean;
}) {
  return (
    <figure
      className={`sheen relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 active:-translate-y-0.5 active:scale-[0.99] ${
        light
          ? "border-black/10 bg-gym-surface hover:shadow-xl hover:shadow-black/10 active:shadow-lg active:shadow-black/10"
          : "border-border-subtle bg-surface hover:border-accent/30 hover:shadow-xl hover:shadow-black/30 active:border-accent/30 active:shadow-lg active:shadow-black/30"
      }`}
    >
      <blockquote
        className={`text-base leading-relaxed ${
          light ? "text-gym-foreground/90" : "text-foreground/90"
        }`}
      >
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-4">
        <p className="text-sm font-semibold">{testimonial.name}</p>
        <p className={`text-xs ${light ? "text-gym-muted" : "text-muted"}`}>
          {testimonial.context}
        </p>
      </figcaption>
    </figure>
  );
}
