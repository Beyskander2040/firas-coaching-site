export type MediaCategory =
  | "demonstrations"
  | "conseils"
  | "preparation"
  | "publicite"
  | "coaching"
  | "espaces"
  | "evenements"
  | "transformations";

export const mediaCategoryLabels: Record<MediaCategory, string> = {
  demonstrations: "Démonstrations & exercices",
  conseils: "Conseils pédagogiques",
  preparation: "Préparation physique",
  publicite: "Présentations & publicité",
  coaching: "Portraits & coaching",
  espaces: "Espaces & équipements",
  evenements: "Événements sportifs",
  transformations: "Témoignages & transformations",
};

export type VideoItem = {
  id: string;
  title: string;
  category: MediaCategory;
  src?: string;
  poster?: string;
  // Lien vers le Reel Instagram d'origine, une fois publié (optionnel, en plus de la vidéo hébergée).
  instagramUrl?: string;
};

export type PhotoItem = {
  id: string;
  title: string;
  category: MediaCategory;
  src: string;
};

// Vidéos du shooting, compressées pour le web (voir public/videos — fichiers .mov bruts non versionnés).
export const videoLibrary: VideoItem[] = [
  {
    id: "C3744",
    title: "Soulevé de terre — technique",
    category: "demonstrations",
    src: "/videos/C3744.mp4",
    poster: "/videos/posters/C3744.jpg",
  },
  {
    id: "C3743",
    title: "Traction — prise en main",
    category: "demonstrations",
    src: "/videos/C3743.mp4",
    poster: "/videos/posters/C3743.jpg",
  },
  {
    id: "C3745",
    title: "Traction — exécution complète",
    category: "demonstrations",
    src: "/videos/C3745.mp4",
    poster: "/videos/posters/C3745.jpg",
  },
  {
    id: "C3722",
    title: "Tirage poulie — dos",
    category: "demonstrations",
    src: "/videos/C3722.mp4",
    poster: "/videos/posters/C3722.jpg",
  },
  {
    id: "C3724",
    title: "Correction technique en direct",
    category: "coaching",
    src: "/videos/C3724.mp4",
    poster: "/videos/posters/C3724.jpg",
  },
  {
    id: "C3725",
    title: "Conseil pédagogique",
    category: "conseils",
    src: "/videos/C3725.mp4",
    poster: "/videos/posters/C3725.jpg",
  },
];

// Shooting photo de Firas (salle de sport) — toutes classées "Portraits & coaching".
const photoFiles = [
  "IMG_0497",
  "IMG_0504",
  "IMG_0507",
  "IMG_0544",
  "IMG_0551",
  "IMG_0555",
  "IMG_0557",
  "IMG_0575",
  "IMG_0581",
  "IMG_0596",
  "IMG_0620",
  "IMG_0640",
  "IMG_0647",
  "IMG_0652",
  "IMG_0658",
  "IMG_0665",
  "IMG_0667",
  "IMG_0689",
  "IMG_0699",
  "IMG_0707",
  "IMG_0714",
  "IMG_0805",
  "IMG_0808",
  "IMG_0828",
  "IMG_0841",
  "IMG_0861",
  "IMG_0867",
  "IMG_0875",
  "IMG_0881",
  "IMG_0891",
  "IMG_0911",
];

export const photoLibrary: PhotoItem[] = photoFiles.map((file, i) => ({
  id: file,
  title: `Firas — séance photo (${i + 1}/${photoFiles.length})`,
  category: "coaching",
  src: `/images/${file}.jpeg`,
}));

// Sélection mise en avant sur Accueil / À propos / Coaching.
export const featuredPhotos = {
  hero: "/images/IMG_0808.jpeg",
  aboutPortrait: "/images/IMG_0658.jpeg",
  coachingAction: "/images/IMG_0891.jpeg",
  duo: "/images/IMG_0689.jpeg",
};

// Vidéo de présentation (extraits des 6 vidéos, montage avec transitions).
export const showreel = {
  src: "/videos/showreel.mp4",
  poster: "/videos/posters/showreel.jpg",
};
