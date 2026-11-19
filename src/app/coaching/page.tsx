import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import OfferCard from "@/components/OfferCard";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import GlowCard from "@/components/GlowCard";
import { Stagger, StaggerItem } from "@/components/Stagger";
import { offerCategories } from "@/data/offers";
import { buildWhatsAppUrl, siteConfig } from "@/config/site";
import { featuredPhotos } from "@/data/media";

export const metadata: Metadata = {
  title: "Coaching",
  description: "Coaching individuel, programmation, préparation physique et suivi à distance.",
};

const steps = [
  { title: "Bilan initial", description: "Objectifs, niveau, contraintes et disponibilités." },
  { title: "Programmation", description: "Un plan d'entraînement adapté, évolutif dans le temps." },
  { title: "Accompagnement", description: "Séances encadrées et corrections techniques." },
  { title: "Suivi de progression", description: "Ajustements réguliers selon les résultats." },
];

const coaching = offerCategories.find((c) => c.key === "coaching")!;

export default function CoachingPage() {
  return (
    <>
      <section className="border-b border-border-subtle py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Private Coaching"
              title="Un accompagnement sur mesure, pas une méthode standard"
              description={`${siteConfig.name} construit chaque programme autour de ton objectif réel — perte de poids, performance, remise en forme ou préparation spécifique.`}
            />
          </Reveal>

          <Reveal delay={0.1}>
            <GlowCard>
              <Image
                src={featuredPhotos.coachingAction}
                alt="Séance de coaching et préparation physique"
                fill
                sizes="(min-width: 1024px) 35vw, 80vw"
                className="object-cover"
              />
            </GlowCard>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="h-full rounded-2xl border border-border-subtle bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/30">
                  <span className="font-heading text-2xl font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 font-semibold">{step.title}</p>
                  <p className="mt-2 text-sm text-muted">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="border-t border-border-subtle bg-surface/40 py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Formules" title={coaching.title} description={coaching.subtitle} />
          </Reveal>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coaching.offers.map((offer) => (
              <StaggerItem key={offer.slug}>
                <OfferCard offer={offer} />
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-wrap gap-3">
              <Button href={buildWhatsAppUrl()} external>
                Démarrer un bilan gratuit sur WhatsApp
              </Button>
              <Button href="/offres" variant="secondary">
                Voir toutes les offres & formules
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
