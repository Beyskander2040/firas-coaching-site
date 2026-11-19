export type Offer = {
  slug: string;
  name: string;
  duration: string;
  description: string;
  includes: string[];
  highlight?: boolean;
};

export type OfferCategory = {
  key: "coaching" | "gym";
  title: string;
  subtitle: string;
  offers: Offer[];
};

export const offerCategories: OfferCategory[] = [
  {
    key: "coaching",
    title: "Private Coaching",
    subtitle: "Accompagnement individuel, programmation et suivi personnalisé.",
    offers: [
      {
        slug: "coaching-individuel",
        name: "Coaching individuel",
        duration: "Séance ou pack de séances",
        description:
          "Accompagnement personnalisé en tête-à-tête, avec suivi de progression régulier.",
        includes: [
          "Bilan initial et définition des objectifs",
          "Séances individuelles en salle",
          "Suivi de progression",
        ],
        highlight: true,
      },
      {
        slug: "programmation",
        name: "Programmation",
        duration: "Mensuel",
        description:
          "Plan d'entraînement sur mesure, adapté à ton objectif et à ton niveau.",
        includes: [
          "Programme d'entraînement personnalisé",
          "Ajustements selon la progression",
          "Conseils techniques",
        ],
      },
      {
        slug: "preparation-physique",
        name: "Préparation physique",
        duration: "Selon objectif",
        description:
          "Développement de la force, de la puissance, de l'endurance et de la mobilité.",
        includes: [
          "Évaluation des qualités physiques",
          "Plan de préparation spécifique",
          "Suivi des performances",
        ],
      },
      {
        slug: "coaching-semi-prive",
        name: "Coaching semi-privé",
        duration: "Petit groupe (2-4 pers.)",
        description: "Accompagnement en petit groupe pour s'entraîner ensemble, à moindre coût.",
        includes: [
          "Groupe restreint",
          "Suivi partagé",
          "Ambiance motivante",
        ],
      },
      {
        slug: "suivi-a-distance",
        name: "Suivi à distance",
        duration: "Mensuel",
        description: "Programmation et accompagnement en ligne, où que tu sois.",
        includes: [
          "Programme envoyé en ligne",
          "Suivi par message / visio",
          "Ajustements réguliers",
        ],
      },
    ],
  },
  {
    key: "gym",
    title: "Gym Membership",
    subtitle: "Abonnements et formules pour s'entraîner en salle.",
    offers: [
      {
        slug: "abonnement-mensuel",
        name: "Abonnement mensuel",
        duration: "1 mois",
        description: "Accès complet à la salle de musculation et à l'entraînement fonctionnel.",
        includes: ["Accès illimité", "Équipements complets", "Vestiaires"],
        highlight: true,
      },
      {
        slug: "abonnement-longue-duree",
        name: "Abonnement longue durée",
        duration: "3 / 6 / 12 mois",
        description: "Formule engagée sur la durée, avantages inclus.",
        includes: ["Tarif préférentiel", "Accès illimité", "Suivi de bienvenue"],
      },
      {
        slug: "cours-collectifs",
        name: "Cours collectifs",
        duration: "Selon planning",
        description: "Activités spécialisées et cours collectifs en groupe.",
        includes: ["Cours variés", "Encadrement par coach", "Ambiance de groupe"],
      },
      {
        slug: "pilates",
        name: "Pilates",
        duration: "Séance ou pack",
        description: "Formule Pilates, seule ou combinée avec la musculation.",
        includes: ["Renforcement postural", "Mobilité", "Combinable avec musculation"],
      },
    ],
  },
];
