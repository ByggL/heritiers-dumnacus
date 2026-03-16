# Les Héritiers de Dumnacus

Ce document définit les standards techniques, esthétiques et opérationnels pour le développement du site de l'association.

## Identité & Vision
Le site est le portail numérique d'un club de jeux de rôle (JDR) à Angers. L'expérience doit évoquer l'aventure, l'immersion et la convivialité médiévale-fantastique.

- **Thème :** "Wood & Parchment" (Bois et Parchemin).
- **Public :** Rôlistes débutants ou confirmés et curieux souhaitant rejoindre l'association.
- **Ton :** Accueillant et informatif.

---

## Stack Technique & Mandats
Le projet repose sur **Astro 5** en mode **SSG** (Rendu Statique), optimisé pour la performance et le SEO.

- **Framework :** Astro 5 (Utilisation du Content Layer via `src/content.config.ts`).
- **Styling :** Tailwind CSS. Ne pas introduire de bibliothèques UI externes sans demande explicite.
- **Types :** TypeScript strict. Chaque composant ou fonction doit être typé.
- **Déploiement :** Cloudflare Pages. Respecter la configuration `wrangler.jsonc` et `astro.config.mjs`.

---

## Design & Esthétique (Règles d'Or)
L'esthétique est cruciale. Tout ajout doit respecter la charte visuelle établie :
- **Textures :** Utiliser les assets de `public/textures/` (parchemin, bois) et `public/*.svg` (cadres art déco).
- **Typographie :** 
  - Titres : `Pandion` ou `Poor Richard` (voir `public/fonts/`).
  - Corps : `Atkinson Hyperlegible` ou `Droid Sans` pour l'accessibilité.
- **Composants :** Favoriser les composants atomiques (`HeadingBox`, `InfoCard`, `Separator`).
- **Zero-JS :** Privilégier les solutions CSS/Astro pures. L'interactivité (Islands) doit rester minimale et justifiée.

---

## Structure & Conventions
- **Pages :** Situées dans `src/pages/`. Utiliser des noms de fichiers explicites en français (ex: `nousrejoindre.astro`).
- **Contenu :** Géré via Astro Content Layer dans `src/content/`. Le schéma est défini dans `src/content.config.ts`.
- **Assets :** 
  - Images de jeux : `public/rpg/`.
  - Éléments de design : `public/`.
- **Styles :** Modifier `src/styles/global.css` pour les variables thématiques globales.
- **Constantes :** Centraliser les métadonnées et titres dans `src/consts.ts`.

---

## Workflows de l'Agent
1. **Évolution du Contenu :** Lors de l'ajout d'un nouveau jeu, créer un fichier Markdown dans `src/content/jeuxderole/` en respectant le schéma de frontmatter.
2. **Nouveaux Composants :** Toujours vérifier si un composant existant (`src/components/`) peut être étendu ou réutilisé avant d'en créer un nouveau.
3. **Validation :**
   - Lancer `npm run build` pour vérifier l'intégrité du site.
   - Utiliser `prettier` pour le formatage (configuré via `.prettierrc`).
4. **Modifications de Design :** Toujours expliquer comment le changement s'intègre dans le thème "Médiéval-Fantastique".

---

## 🗝️ Sécurité
- Ne jamais inclure de clés API ou secrets dans le code (utiliser `.env` localement, secrets Cloudflare en prod).
- Ne pas modifier `.gitignore` pour exposer des fichiers sensibles.
