import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import MediaLibrary from "@/components/MediaLibrary";
import TestimonialCard from "@/components/TestimonialCard";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import { videoLibrary, photoLibrary } from "@/data/media";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Media Hub",
  description: "Bibliothèque de vidéos, albums photo et témoignages.",
};

export default function MediaPage() {
  return (
    <>
      <section className="border-b border-border-subtle py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Media Hub"
              title="Le patrimoine photo & vidéo, organisé"
              description="Reels Instagram, démonstrations techniques, conseils pédagogiques et albums photo classés par catégorie."
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <MediaLibrary videos={videoLibrary} photos={photoLibrary} />
          </Reveal>

          <p className="mt-6 text-xs text-muted">
            Les vidéos sont lues directement sur le site.{" "}
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              Suivre {siteConfig.name} sur Instagram
            </a>{" "}
            pour le reste des contenus publiés.
          </p>
        </Container>
      </section>

      <section className="border-t border-border-subtle bg-surface/40 py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Témoignages" title="Transformations & retours d'expérience" />
          </Reveal>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-3">
            {testimonials.map((t) => (
              <StaggerItem key={t.id}>
                <TestimonialCard testimonial={t} />
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <div className="mt-12">
              <Button href="/contact" variant="secondary">
                Partager ton témoignage
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
