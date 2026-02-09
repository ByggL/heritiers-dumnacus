# Les Héritiers de Dumnacus — Site web

Site officiel de l'association **Les Héritiers de Dumnacus**, club de jeux de rôle sur table basé à Angers.

## Objectif du projet

Ce dépôt contient le site public de l'association :

- présentation du club ;
- informations pratiques pour rejoindre les tables ;
- pages éditoriales autour des jeux de rôle ;
- flux RSS et métadonnées SEO.

## Stack technique

- [Astro 5](https://astro.build/) (SSG)
- [Tailwind CSS](https://tailwindcss.com/)
- `@astrojs/cloudflare` pour le build/déploiement Cloudflare
- `@astrojs/sitemap` et `@astrojs/rss` pour le SEO et la syndication

## Structure utile du projet

```text
.
├── public/               # assets statiques (images, polices, etc.)
├── src/
│   ├── components/       # composants Astro réutilisables
│   ├── layouts/          # layouts de pages/articles
│   ├── pages/            # routes Astro
│   ├── styles/           # styles globaux
│   └── content.config.ts # config des collections de contenu
├── docs/                 # documentation interne (audit, notes)
├── astro.config.mjs
├── wrangler.jsonc
└── package.json
```

## Scripts npm

Commandes principales :

- `npm run dev` : lance le serveur local sur `localhost:4321`
- `npm run build` : build de production Astro (`dist/`)
- `npm run preview` : prévisualisation locale du build
- `npm run astro -- check` : vérifications Astro (types/routes/contenu)

## Développement local

1. Installer les dépendances :
   ```bash
   npm install
   ```
2. Lancer le serveur de dev :
   ```bash
   npm run dev
   ```
3. Ouvrir : `http://localhost:4321`

## Déploiement Cloudflare

Le projet est configuré pour un build Astro compatible Cloudflare via `@astrojs/cloudflare`.

### Option A — Cloudflare Pages (recommandé)

- Build command : `npm run build`
- Build output directory : `dist`
- Configuration déjà alignée avec `wrangler.jsonc` (`pages_build_output_dir: "./dist"`).

### Option B — Wrangler (CI/CD scriptée)

Exemple de publication Pages :

```bash
npx wrangler pages deploy dist --project-name heritiers-dumnacus
```

> Prérequis : variable `CLOUDFLARE_API_TOKEN` et authentification Wrangler configurée.

## Conventions de travail

- Garder une cohérence visuelle avec le thème actuel (bois/parchemin/typographies).
- Préférer les composants existants dans `src/components/` avant d'en créer de nouveaux.
- Vérifier les liens canoniques/SEO lors de l'ajout d'une nouvelle page.
- Éviter les assets orphelins dans `public/`.

## Checklist de release

Avant mise en production :

1. `npm run build`
2. `npm run astro -- check`
3. Vérifier manuellement les pages clés :
   - `/`
   - `/nousrejoindre`
   - `/jeuxderole`
4. Vérifier sitemap et flux RSS générés.
5. Déployer sur Cloudflare Pages.

## Notes

- La page `/about` existe mais reste volontairement non accessible publiquement tant que la variable
  d'environnement `PUBLIC_ENABLE_ABOUT_PAGE` n'est pas définie à `true`.
