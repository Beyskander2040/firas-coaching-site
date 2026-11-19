import Link from "next/link";
import Container from "./Container";
import { siteConfig } from "@/config/site";

const currentYear = new Date().getFullYear();

const links = [
  { href: "/a-propos", label: "À propos" },
  { href: "/coaching", label: "Coaching" },
  { href: "/gym", label: "Gym / Studios" },
  { href: "/offres", label: "Offres & formules" },
  { href: "/media", label: "Media Hub" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface">
      <Container className="grid gap-10 py-14 sm:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-bold">{siteConfig.name.toUpperCase()}</p>
          <p className="mt-2 text-sm text-muted">{siteConfig.role}</p>
          <p className="mt-4 max-w-xs text-sm text-muted">{siteConfig.description}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Navigation
          </p>
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>{siteConfig.contact.address}</li>
            <li>
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                {siteConfig.contact.instagramHandle} (Instagram)
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-foreground">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border-subtle py-6">
        <Container>
          <p className="text-xs text-muted">
            © {currentYear} {siteConfig.name}. Tous droits réservés.
          </p>
        </Container>
      </div>
    </footer>
  );
}
