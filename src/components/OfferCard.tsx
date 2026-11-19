import { Offer } from "@/data/offers";
import { buildWhatsAppUrl } from "@/config/site";

export default function OfferCard({ offer, light = false }: { offer: Offer; light?: boolean }) {
  const message = `Bonjour Firas, je souhaite avoir plus d'informations sur l'offre "${offer.name}".`;

  return (
    <div
      className={`sheen relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5 ${
        light
          ? `border-black/10 bg-gym-surface hover:shadow-xl hover:shadow-black/10 ${offer.highlight ? "ring-2 ring-gym-accent" : ""}`
          : `border-border-subtle bg-surface hover:border-accent/40 hover:shadow-xl hover:shadow-black/30 ${offer.highlight ? "ring-2 ring-accent" : ""}`
      }`}
    >
      {offer.highlight && (
        <span
          className={`mb-3 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
            light ? "bg-gym-accent/15 text-gym-accent" : "bg-accent/15 text-accent"
          }`}
        >
          Populaire
        </span>
      )}
      <h3 className="font-heading text-xl font-semibold">{offer.name}</h3>
      <p className={`mt-1 text-sm font-medium ${light ? "text-gym-muted" : "text-muted"}`}>
        {offer.duration}
      </p>
      <p className={`mt-4 text-sm ${light ? "text-gym-foreground/80" : "text-foreground/80"}`}>
        {offer.description}
      </p>

      <ul className="mt-5 flex-1 space-y-2">
        {offer.includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            <span className={light ? "text-gym-accent" : "text-accent"}>✓</span>
            <span className={light ? "text-gym-foreground/80" : "text-foreground/80"}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={buildWhatsAppUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] ${
          light
            ? "bg-gym-foreground text-gym-background hover:bg-gym-foreground/90"
            : "bg-accent text-accent-foreground hover:bg-accent/90"
        }`}
      >
        Demander les informations
      </a>
    </div>
  );
}
