import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import OfferCard from "@/components/OfferCard";
import TestimonialCard from "@/components/TestimonialCard";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import { offerCategories } from "@/data/offers";
import { siteConfig } from "@/config/site";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: `${siteConfig.gymName} — Gym / Studios`,
  description: "Espaces, équipements, activités, horaires et accès de la salle.",
};

// TODO: remplacer par les vrais espaces/équipements
const spaces = [
  { title: "Salle de musculation", description: "Équipements complets, machines guidées et zone libre." },
  { title: "Plateau fonctionnel", description: "Espace dédié au cross-training et à la préparation physique." },
  { title: "Studio cours collectifs", description: "Pilates, renforcement et activités encadrées." },
  { title: "Vestiaires & accueil", description: "Espace confort, casiers et accueil personnalisé." },
];

// TODO: remplacer par les vrais horaires
const hours = [
  { day: "Lundi — Vendredi", time: "06h00 – 22h00" },
  { day: "Samedi", time: "08h00 – 20h00" },
  { day: "Dimanche", time: "09h00 – 14h00" },
];

const gym = offerCategories.find((c) => c.key === "gym")!;

export default function GymPage() {
  return (
    <div className="gym-theme">
      <section className="border-b border-black/10 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              light
              eyebrow="Gym Business"
              title={siteConfig.gymName}
              description={siteConfig.gymTagline}
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <h3 className="font-heading text-xl font-semibold">Espaces & équipements</h3>
          </Reveal>
          <Stagger className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {spaces.map((space) => (
              <StaggerItem key={space.title}>
                <div className="h-full rounded-2xl border border-black/10 bg-gym-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
                  <p className="font-semibold">{space.title}</p>
                  <p className="mt-2 text-sm text-gym-muted">{space.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="border-y border-black/10 bg-gym-surface py-16 sm:py-20">
        <Container className="grid gap-10 sm:grid-cols-2">
          <Reveal>
            <h3 className="font-heading text-xl font-semibold">Horaires</h3>
            <ul className="mt-5 space-y-3">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between border-b border-black/10 pb-2 text-sm">
                  <span className="text-gym-foreground/80">{h.day}</span>
                  <span className="font-medium">{h.time}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="font-heading text-xl font-semibold">Accès</h3>
            <p className="mt-5 text-sm text-gym-foreground/80">{siteConfig.contact.address}</p>
            <a
              href={siteConfig.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gym-foreground px-5 py-2.5 text-sm font-semibold text-gym-background transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
            >
              Voir sur la carte
            </a>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading light eyebrow="Formules" title={gym.title} description={gym.subtitle} />
          </Reveal>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {gym.offers.map((offer) => (
              <StaggerItem key={offer.slug}>
                <OfferCard offer={offer} light />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="border-t border-black/10 bg-gym-surface py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading light eyebrow="Ils en parlent" title="L'expérience des adhérents" />
          </Reveal>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-3">
            {testimonials
              .filter((t) => t.context.toLowerCase().includes("studio"))
              .concat(testimonials.slice(0, 2))
              .slice(0, 3)
              .map((t, i) => (
                <StaggerItem key={`${t.id}-${i}`}>
                  <TestimonialCard testimonial={t} light />
                </StaggerItem>
              ))}
          </Stagger>
        </Container>
      </section>
    </div>
  );
}
