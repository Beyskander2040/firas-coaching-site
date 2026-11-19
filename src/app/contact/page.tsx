import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import QrCode from "@/components/QrCode";
import Reveal from "@/components/Reveal";
import { buildWhatsAppUrl, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "WhatsApp, Instagram, formulaire de demande et localisation.",
};

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Parlons de ton objectif"
            description="Réponse rapide par WhatsApp, ou passe par le formulaire ci-dessous."
          />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-2xl border border-border-subtle bg-surface p-7">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="rounded-2xl border border-border-subtle bg-surface p-7 transition-all duration-300 hover:border-accent/30">
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  Contact direct
                </p>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                      WhatsApp — réponse rapide
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent"
                    >
                      {siteConfig.contact.instagramHandle} sur Instagram
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-accent">
                      {siteConfig.contact.email}
                    </a>
                  </li>
                  <li className="text-muted">{siteConfig.contact.address}</li>
                </ul>
                <a
                  href={siteConfig.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-semibold text-accent"
                >
                  Voir la localisation →
                </a>
              </div>

              <div className="rounded-2xl border border-border-subtle bg-surface p-7 transition-all duration-300 hover:border-accent/30">
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">QR Code</p>
                <p className="mt-2 text-sm text-muted">
                  À utiliser sur les flyers, affiches et cartes de visite pour rediriger vers le
                  site.
                </p>
                <div className="mt-4 inline-block rounded-xl bg-[#f5f5f4] p-3">
                  <QrCode value={siteConfig.url} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
