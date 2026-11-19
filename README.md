# Site Firas — Personal Branding, Coaching & Gym

Site Next.js (TypeScript + Tailwind CSS) pour Firas, coach / athlète / gym owner.
Contenu actuellement en dur (pas d'espace admin) — voir la section "À personnaliser" ci-dessous.

## Démarrer

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Pages

- `/` Accueil
- `/a-propos` Parcours, certifications, philosophie, valeurs
- `/coaching` Private Coaching (offres + process)
- `/gym` Gym / Studios (identité visuelle distincte, plus lumineuse)
- `/offres` Toutes les formules (coaching + salle)
- `/media` Media Hub (bibliothèque vidéo/photo filtrable par catégorie)
- `/contact` Formulaire → WhatsApp, Instagram, QR code

## À personnaliser

Tout se modifie dans `src/config/` et `src/data/`, sans toucher au reste du code :

- `src/config/site.ts` — numéro WhatsApp, Instagram, email, adresse, lien Maps, nom de domaine.
- `src/data/offers.ts` — formules de coaching et d'abonnement salle.
- `src/data/media.ts` — bibliothèque vidéos/photos et catégories.
- `src/data/testimonials.ts` — témoignages clients.
- `src/app/a-propos/page.tsx` — parcours, certifications, texte de philosophie.
- `src/app/gym/page.tsx` — espaces, équipements, horaires.

Les photos du Media Hub (et les images mises en avant sur Accueil/À propos/Coaching) sont les
vraies photos de Firas, dans `public/images/`. Les vidéos ne sont **pas** hébergées sur le site
(fichiers bruts bien trop volumineux pour le web) : elles sont publiées en Reels sur Instagram et
le site pointe simplement vers le post via `instagramUrl` dans `src/data/media.ts`. Pour ajouter
une vidéo : publier le Reel, puis renseigner son URL sur l'entrée correspondante.

## Prochaines évolutions possibles

- Espace administrateur (CMS) pour gérer offres/médias sans toucher au code.
- Hébergement média dédié pour les vidéos originales (l'intégration Instagram ne remplace pas une sauvegarde des fichiers).
- Formulaire de contact relié à un service d'email en plus du lien WhatsApp.
- Statistiques de visite (ex. Plausible, Google Analytics) une fois le domaine en ligne.
