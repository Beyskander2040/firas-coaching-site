// Centralise ici les informations à modifier (téléphone, réseaux, textes clés).
// Tout le contenu du site est en dur (pas d'admin) : pour mettre à jour une offre,
// un média ou un texte, modifie directement les fichiers dans src/data/ et src/config/.

export const siteConfig = {
  name: "Firas",
  role: "Coach • Athlète • Gym Owner",
  tagline: "Transforme ton corps, construis ta discipline.",
  description:
    "Coaching privé, préparation physique et salle de sport par Firas — coach, athlète et gym owner.",
  url: "https://www.firas-coach.com", // TODO: remplacer par le nom de domaine réel une fois choisi
  locale: "fr-TN",

  gymName: "She Studio",
  gymTagline: "La salle pensée pour elles.",

  contact: {
    whatsappNumber: "21625321907",
    whatsappDefaultMessage:
      "Bonjour Firas, je souhaite avoir plus d'informations.",
    instagramHandle: "@firashealthcoach",
    instagramUrl: "https://www.instagram.com/firashealthcoach",
    email: "contact@firas-coach.com", // TODO
    address: "Tunis, Tunisie", // TODO: adresse précise de la salle
    mapsUrl: "https://maps.google.com", // TODO: lien Google Maps de la salle
  },
} as const;

export function buildWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.contact.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
}
