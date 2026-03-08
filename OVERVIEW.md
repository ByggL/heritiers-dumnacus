# Projet : Les Héritiers de Dumnacus — Site Web

## 1. Vue d'ensemble du projet
Ce projet est le site officiel de l'association **Les Héritiers de Dumnacus**, un club de jeux de rôle (JDR) sur table basé à Angers, France. Le site sert de portail d'information pour les membres actuels et potentiels, présentant les activités du club, les jeux pratiqués et les modalités d'inscription.

## 2. Stack Technique
Le projet utilise une stack moderne et performante, optimisée pour le rendu statique (SSG) :
- **Framework :** [Astro 5](https://astro.build/) (utilisant les dernières fonctionnalités comme le `content.config.ts`).
- **Styling :** [Tailwind CSS](https://tailwindcss.com/) pour le design utilitaire.
- **Déploiement :** [Cloudflare Pages](https://pages.cloudflare.com/) (configuré via `@astrojs/cloudflare`).
- **Langage :** [TypeScript](https://www.typescriptlang.org/) pour la sécurité des types.
- **SEO/Syndication :** `@astrojs/sitemap`, `@astrojs/rss`, et métadonnées optimisées.

## 3. Structure du Codebase
- **`src/pages/` :** Définit les routes du site.
    - `index.astro` : Page d'accueil.
    - `nousrejoindre.astro` : Informations pratiques pour les nouveaux membres.
    - `jeuxderole/` : Section dédiée aux jeux pratiqués, incluant une route dynamique `[...slug].astro` pour le contenu futur.
- **`src/components/` :** Contient les composants modulaires réutilisables.
    - `navigation/` : Header, Footer et structures de base.
    - Composants thématiques : `ImageCard`, `InfoCard`, `HeadingBox`, etc.
- **`src/layouts/` :** Modèles de mise en page, notamment `BlogPost.astro` pour les articles détaillés.
- **`src/styles/` :** Styles globaux, incluant l'intégration des variables CSS pour le thème.
- **`public/` :** Actifs statiques volumineux.
    - `fonts/` : Polices de caractères spécifiques (Pandion, Poor Richard) renforçant l'identité visuelle.
    - `rpg/` : Illustrations des différents jeux.
    - Textures (parchemin, bois) pour l'esthétique médiévale.

## 4. Design & Esthétique
Le site adopte un design immersif lié à l'univers du JDR :
- **Thématique :** Médiéval-fantastique ("Wood & Parchment").
- **Éléments visuels :** Utilisation intensive de textures de vieux papier, de cadres art déco et de textures boisées.
- **Typographie :** Choix de polices de caractères qui évoquent les manuscrits anciens ou les manuels de JDR classiques.

## 5. Patterns & Conventions
- **Composants atomiques :** Grande modularité des éléments d'interface pour assurer la cohérence visuelle.
- **Content Layer (Astro 5) :** Préparation pour une gestion de contenu via Markdown/MDX (défini dans `src/content.config.ts`), bien que le contenu soit actuellement en phase de transition.
- **Performance :** Approche "Zero-JS" par défaut d'Astro, privilégiant la vitesse de chargement et l'accessibilité.
- **Configuration Centralisée :** Les constantes globales (titres, descriptions) sont regroupées dans `src/consts.ts`.

## 6. Maintenance & Évolution
- Le projet inclut un audit technique (`docs/audit-technique.md`) et des règles de formatage strictes via `.prettierrc`.
- Le déploiement est automatisé via Cloudflare Pages, aligné sur la configuration `wrangler.jsonc`.
