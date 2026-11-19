import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import OfferCard from "@/components/OfferCard";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import { offerCategories } from "@/data/offers";

export const metadata: Metadata = {
  title: "Offres & formules",
  description: "Toutes les formules de coaching privé et d'abonnement à la salle.",
};

export default function OffersPage() {
  return (
    <>
      <section className="border-b border-border-subtle py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Offres & formules"
              title="Deux univers, une seule plateforme"
              description="Les tarifs ne sont pas affichés sur le site : chaque demande d'information est transmise directement par WhatsApp."
            />
          </Reveal>
        </Container>
      </section>

      {offerCategories.map((category, index) => (
        <section
          key={category.key}
          className={index % 2 === 1 ? "border-t border-border-subtle bg-surface/40 py-16 sm:py-20" : "py-16 sm:py-20"}
        >
          <Container>
            <Reveal>
              <SectionHeading eyebrow={category.key === "coaching" ? "Private Coaching" : "Gym Membership"} title={category.title} description={category.subtitle} />
            </Reveal>
            <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {category.offers.map((offer) => (
                <StaggerItem key={offer.slug}>
                  <OfferCard offer={offer} />
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </section>
      ))}
    </>
  );
}
