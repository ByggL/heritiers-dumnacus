# Audit technique rapide — héritiers-dumnacus

Date: 2026-02-09

## Méthode
- Revue statique des pages, composants et config Astro.
- Exécution des checks disponibles (`npm run build`, `npm run astro check`).

## Problèmes identifiés et tâches proposées

### 1) Collection de contenu inexistante (warning build/check)
**Constat**
- La collection `blog` pointe vers `./src/content/jeuxderole`, mais ce dossier n'existe pas.
- Le build et `astro check` remontent un warning `glob-loader`.

**Impact**
- Bruit dans la CI/CD et risque de masquer de vrais problèmes.
- Les pages dynamiques et le flux RSS liés à cette collection deviennent fragiles.

**Tâche proposée**
- Créer `src/content/jeuxderole/` avec au moins un contenu d'exemple **ou** retirer temporairement la collection et les pages associées.
- Ajouter un contrôle CI qui échoue si un warning critique de contenu apparaît.

**Priorité**: Haute

---

### 2) Flux RSS avec un chemin incohérent
**Constat**
- Le RSS génère des liens en `/jeux/<slug>/` alors que les pages sont servies sous `/jeuxderole/<slug>/`.

**Impact**
- Liens cassés dans le flux RSS.
- Dégradation SEO et mauvaise UX pour les abonnés.

**Tâche proposée**
- Corriger le lien RSS vers `/jeuxderole/<slug>/`.
- Ajouter un test d'intégration simple qui valide le préfixe des URLs RSS.

**Priorité**: Haute

---

### 3) Route dynamique de JdR ne rend pas le contenu
**Constat**
- La page `[...slug].astro` ne rend que le layout ; le rendu du contenu Markdown est commenté.

**Impact**
- Les futures fiches JdR publiées en markdown ne s'afficheront pas.

**Tâche proposée**
- Réactiver `render(post)` et afficher `<Content />` dans le layout.
- Prévoir un fallback 404 propre si un slug est absent.

**Priorité**: Haute

---

### 4) Dette de code (imports/variables non utilisés)
**Constat**
- `Header.astro`: imports non utilisés (`Image`, `bouclierImage`).
- `BlogPost.astro`: imports non utilisés (`Header`, `Footer`).
- `jeuxderole/index.astro`: variable `posts` inutilisée.

**Impact**
- Dette technique et bruit dans les diagnostics.

**Tâche proposée**
- Supprimer les imports/variables non utilisés.
- Activer une règle linter/CI bloquante sur le code mort dans les fichiers Astro/TS.

**Priorité**: Moyenne

---

### 5) HTML invalide sur la page d'accueil
**Constat**
- L'image principale de la homepage déclare deux attributs `alt`.

**Impact**
- HTML invalide, comportement dépendant du navigateur et accessibilité possiblement ambiguë.

**Tâche proposée**
- Conserver un seul `alt`, descriptif et concis.
- Ajouter un check accessibilité (ex: audit Lighthouse CI minimal).

**Priorité**: Moyenne

---

### 6) Page `about` de template encore présente
**Constat**
- `src/pages/about.astro` contient le contenu lorem ipsum du starter Astro.

**Impact**
- Risque de contenu hors-sujet exposé en production.
- Image référencée potentiellement inexistante.

**Tâche proposée**
- Soit supprimer la page, soit la remplacer par une vraie page “À propos”.
- Vérifier les assets référencés par cette page.

**Priorité**: Moyenne

---

### 7) README non adapté au projet
**Constat**
- Le README est encore celui du starter kit Astro.

**Impact**
- Onboarding plus lent (runbook, scripts, déploiement Cloudflare non documentés).

**Tâche proposée**
- Réécrire le README avec : objectif du site, stack, scripts, conventions, procédure de déploiement, check-list release.

**Priorité**: Basse

## Proposition de plan d'exécution (sprint court)
1. **Stabilisation contenu** (points 1, 2, 3).
2. **Hygiène code & accessibilité** (points 4, 5).
3. **Documentation & contenu éditorial** (points 6, 7).

## Critères d'acceptation globaux
- `npm run build` sans warning de collection manquante.
- `npm run astro check` sans hints de code mort.
- RSS valide avec URLs cohérentes.
- Une page dynamique JdR markdown rendue de bout en bout.
- README aligné avec le contexte réel du projet.
