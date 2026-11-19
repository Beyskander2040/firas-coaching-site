import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import TestimonialCard from "@/components/TestimonialCard";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import GlowCard from "@/components/GlowCard";
import { Stagger, StaggerItem } from "@/components/Stagger";
import { siteConfig, buildWhatsAppUrl } from "@/config/site";
import { testimonials } from "@/data/testimonials";
import { featuredPhotos, showreel } from "@/data/media";

const pillars = [
  {
    title: "Personal Branding",
    description:
      "Parcours, expertise, philosophie d'entraînement, réalisations et présence sur les réseaux sociaux.",
    href: "/a-propos",
  },
  {
    title: "Private Coaching",
    description:
      "Accompagnements individuels, programmation, suivi et préparation physique sur mesure.",
    href: "/coaching",
  },
  {
    title: "Gym Business",
    description: "Espaces, équipements, activités, abonnements et promotions des salles.",
    href: "/gym",
  },
  {
    title: "Media Hub",
    description: "Bibliothèque organisée de vidéos, photos professionnelles et contenus pédagogiques.",
    href: "/media",
  },
];

const stats = [
  { label: "années d'expérience", value: "10+" },
  { label: "athlètes accompagnés", value: "500+" },
  { label: "formules disponibles", value: "9" },
];

const marqueeItems = [
  "Personal Brand",
  "Private Coaching",
  "Gym Business",
  "Media Hub",
  siteConfig.gymName,
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div
          aria-hidden
          className="animate-float-slow pointer-events-none absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-accent/25 blur-3xl"
        />
        <div
          aria-hidden
          className="animate-float-slower pointer-events-none absolute -bottom-40 left-[-10%] h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-3xl"
        />

        <Container className="relative py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                  Personal Brand + Fitness Business + Media Hub
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="mt-6 font-heading text-[clamp(2.75rem,1.6rem+4.5vw,5.5rem)] font-bold leading-[1.02] tracking-tight">
                  {siteConfig.name.toUpperCase()}
                </h1>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="mt-3 text-lg font-medium text-foreground/80 sm:text-xl">
                  {siteConfig.role}
                </p>
                <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">
                  {siteConfig.tagline}
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button href={buildWhatsAppUrl()} external>
                    Contacter sur WhatsApp
                  </Button>
                  <Button href="/offres" variant="secondary">
                    Voir les offres & formules
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.26}>
                <dl className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-border-subtle pt-8">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="sr-only">{stat.label}</dt>
                      <dd className="font-heading text-3xl font-bold text-accent">
                        {stat.value}
                      </dd>
                      <p className="mt-1 text-xs text-muted">{stat.label}</p>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <GlowCard
                badge={
                  <div
                    aria-hidden
                    className="absolute -bottom-5 -right-5 hidden rounded-2xl border border-border-subtle bg-surface/90 px-5 py-4 backdrop-blur sm:block"
                  >
                    <p className="font-heading text-2xl font-bold text-accent">10+</p>
                    <p className="text-xs text-muted">années d&apos;expérience</p>
                  </div>
                }
              >
                <Image
                  src={featuredPhotos.hero}
                  alt={`${siteConfig.name} — ${siteConfig.role}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  className="object-cover"
                />
              </GlowCard>
            </Reveal>
          </div>
        </Container>
      </section>

      <Marquee items={marqueeItems} />

      {/* Showreel vidéo */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal className="order-2 lg:order-1">
              <GlowCard
                badge={
                  <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                    Showreel
                  </span>
                }
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={showreel.poster}
                  className="h-full w-full object-cover"
                >
                  <source src={showreel.src} type="video/mp4" />
                </video>
              </GlowCard>
            </Reveal>

            <div className="order-1 lg:order-2">
              <Reveal>
                <SectionHeading
                  eyebrow="En mouvement"
                  title="Un aperçu en vidéo"
                  description="Technique, préparation physique et coaching en direct — un montage d'extraits de séances réelles."
                />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-8">
                  <Button href="/media" variant="secondary">
                    Voir toute la bibliothèque
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Les 4 piliers */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Écosystème digital"
              title="Une plateforme, quatre univers"
              description="Une vitrine de confiance, un portfolio et un outil commercial réunis au même endroit."
            />
          </Reveal>

          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <Link
                  href={pillar.href}
                  className="sheen group relative block h-full overflow-hidden rounded-2xl border border-border-subtle bg-surface p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-xl hover:shadow-black/30"
                >
                  <h3 className="font-heading text-xl font-semibold">{pillar.title}</h3>
                  <p className="mt-3 text-sm text-muted">{pillar.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Découvrir
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Témoignages */}
      <section className="border-y border-border-subtle bg-surface/40 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Ils en parlent"
              title="La confiance de ceux qui s'entraînent avec Firas"
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-3">
            {testimonials.map((t) => (
              <StaggerItem key={t.id}>
                <TestimonialCard testimonial={t} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* CTA final */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start gap-6 rounded-3xl border border-border-subtle bg-surface p-10 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
                  Prêt(e) à passer à l&apos;étape suivante ?
                </h2>
                <p className="mt-2 max-w-md text-sm text-muted">
                  Parle directement à Firas pour trouver la formule adaptée à ton objectif.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href={buildWhatsAppUrl()} external>
                  WhatsApp
                </Button>
                <Button href="/contact" variant="secondary">
                  Formulaire de contact
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
