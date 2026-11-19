import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import GlowCard from "@/components/GlowCard";
import { Stagger, StaggerItem } from "@/components/Stagger";
import { buildWhatsAppUrl, siteConfig } from "@/config/site";
import { featuredPhotos } from "@/data/media";

export const metadata: Metadata = {
  title: "À propos",
  description: `Parcours, certifications, philosophie et valeurs de ${siteConfig.name}.`,
};

// TODO: remplacer par le vrai parcours de Firas
const timeline = [
  { year: "2014", label: "Début de la pratique sportive en compétition" },
  { year: "2017", label: "Certification coaching & préparation physique" },
  { year: "2020", label: "Lancement de l'activité de coaching privé" },
  { year: "2023", label: "Ouverture de la salle / studio" },
];

// TODO: remplacer par les vraies certifications
const certifications = [
  "Certification Coach Sportif",
  "Préparation Physique & Performance",
  "Nutrition appliquée au sport",
  "Premiers secours (PSC1)",
];

const values = [
  {
    title: "Exigence",
    description: "Des programmes structurés, pensés pour des résultats durables.",
  },
  {
    title: "Écoute",
    description: "Chaque accompagnement part d'un objectif et d'un niveau réels.",
  },
  {
    title: "Transparence",
    description: "Un suivi clair, des progrès mesurés, aucune promesse en l'air.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border-subtle py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="À propos"
              title="Coach, athlète, entrepreneur"
              description="Le parcours, la philosophie et les valeurs qui guident chaque accompagnement."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <GlowCard>
              <Image
                src={featuredPhotos.aboutPortrait}
                alt={siteConfig.name}
                fill
                sizes="(min-width: 1024px) 35vw, 80vw"
                className="object-cover"
              />
            </GlowCard>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h3 className="font-heading text-xl font-semibold">Parcours</h3>
            <ol className="mt-6 space-y-6 border-l border-border-subtle pl-6">
              {timeline.map((item) => (
                <li key={item.year} className="relative">
                  <span className="absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full bg-accent" />
                  <p className="text-sm font-semibold text-accent">{item.year}</p>
                  <p className="mt-1 text-sm text-foreground/80">{item.label}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-heading text-xl font-semibold">Certifications</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="rounded-xl border border-border-subtle bg-surface px-4 py-3 text-sm text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-surface/40 py-16 sm:py-20">
        <Container>
          <Reveal>
            <h3 className="font-heading text-xl font-semibold">Philosophie d&apos;entraînement</h3>
            <p className="mt-4 max-w-3xl text-base text-foreground/80 sm:text-lg">
              {/* TODO: remplacer par le vrai texte de philosophie de Firas */}
              Chaque corps, chaque objectif et chaque emploi du temps est différent. La méthode
              repose sur une évaluation honnête du point de départ, une programmation progressive
              et un suivi régulier — pour transformer la discipline en résultats visibles, sans
              raccourcis ni promesses irréalistes.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <h3 className="font-heading text-xl font-semibold">Valeurs</h3>
          </Reveal>
          <Stagger className="mt-6 grid gap-5 sm:grid-cols-3">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="h-full rounded-2xl border border-border-subtle bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/30">
                  <p className="font-heading text-lg font-semibold text-accent">{value.title}</p>
                  <p className="mt-2 text-sm text-muted">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <div className="mt-14 flex flex-wrap gap-3">
              <Button href={buildWhatsAppUrl()} external>
                Échanger sur WhatsApp
              </Button>
              <Button href="/coaching" variant="secondary">
                Voir les offres de coaching
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
