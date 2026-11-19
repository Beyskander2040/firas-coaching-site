export type Testimonial = {
  id: string;
  name: string;
  context: string;
  quote: string;
};

// TODO: remplacer par de vrais témoignages (avec autorisation des adhérents)
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sana B.",
    context: "Coaching individuel — 6 mois",
    quote:
      "Un suivi exigeant mais à l'écoute. J'ai progressé plus en 6 mois qu'en 3 ans toute seule.",
  },
  {
    id: "t2",
    name: "Walid T.",
    context: "Préparation physique",
    quote:
      "Programmation claire, résultats concrets. Firas adapte vraiment chaque séance à l'objectif.",
  },
  {
    id: "t3",
    name: "Rania M.",
    context: "Membre She Studio",
    quote: "Une salle lumineuse, un cadre motivant et une équipe toujours disponible.",
  },
];
