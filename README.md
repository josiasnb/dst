# Site Web Multilingue

Site web statique multilingue (français/anglais) avec pages Service, Réalisations, Équipe et Contact.

## 🎨 Design

Le site utilise un design minimaliste moderne avec :
- Palette de couleurs épurée : blanc, gris et bleu électrique (#0066FF)
- Typographie : Outfit pour les titres, Poppins pour le corps
- Asymétrie équilibrée et espaces généreux
- Transitions fluides (300ms ease-out)

## 🌍 Langues Supportées

- 🇫🇷 Français
- 🇬🇧 Anglais

La langue est détectée automatiquement selon les préférences du navigateur et peut être changée via les boutons FR/EN dans l'en-tête.

## 📄 Pages

- **Accueil** : Présentation générale avec appel à l'action
- **Services** : Description des services offerts avec processus
- **Réalisations** : Portfolio des projets réalisés avec statistiques
- **Équipe** : Présentation de l'équipe et des valeurs
- **Contact** : Formulaire de contact et informations de localisation

## 🚀 Installation et Développement

### Prérequis
- Node.js 22+
- pnpm 10+

### Installation

```bash
# Cloner le repository
git clone <votre-repo>
cd multilingual-website

# Installer les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm run dev
```

Le site sera accessible à `http://localhost:3000`

## 🏗️ Build et Déploiement

### Build pour la production

```bash
pnpm run build
```

Les fichiers générés seront dans le dossier `dist/public`.

### Déploiement sur GitHub Pages

1. **Créer un repository GitHub** avec le nom `multilingual-website`

2. **Pousser le code** :
```bash
git remote add origin https://github.com/votre-username/multilingual-website.git
git branch -M main
git push -u origin main
```

3. **Configurer GitHub Pages** :
   - Allez dans Settings → Pages
   - Source : Deploy from a branch
   - Branch : main, /root
   - Cliquez sur Save

4. **Activer GitHub Actions** :
   - Allez dans Actions
   - Acceptez les conditions d'utilisation
   - Le workflow `Deploy to GitHub Pages` se lancera automatiquement

5. **Accéder au site** :
   - URL : `https://votre-username.github.io/multilingual-website`
   - Ou utilisez un domaine personnalisé (voir Settings → Pages)

## 📁 Structure du Projet

```
client/
├── public/           # Fichiers statiques (favicon, robots.txt)
├── src/
│   ├── pages/       # Pages du site
│   ├── components/  # Composants réutilisables
│   ├── contexts/    # Contextes React (Langue, Thème)
│   ├── hooks/       # Hooks personnalisés
│   ├── lib/         # Utilitaires (traductions)
│   ├── App.tsx      # Composant principal
│   ├── main.tsx     # Point d'entrée
│   └── index.css    # Styles globaux
├── index.html       # Template HTML
└── package.json
```

## 🎯 Fonctionnalités

- ✅ Multilingue (FR/EN)
- ✅ Responsive design
- ✅ Navigation fluide
- ✅ Formulaire de contact
- ✅ Optimisé pour SEO
- ✅ Déploiement automatique GitHub Pages
- ✅ Design minimaliste moderne

## 🛠️ Technologies

- **React 19** : Framework UI
- **Vite** : Build tool
- **Tailwind CSS 4** : Styling
- **Wouter** : Routing
- **shadcn/ui** : Composants UI

## 📝 Personnalisation

### Ajouter une nouvelle page

1. Créer un fichier dans `client/src/pages/`
2. Ajouter la route dans `App.tsx`
3. Ajouter les traductions dans `client/src/lib/i18n.ts`

### Modifier les traductions

Éditez le fichier `client/src/lib/i18n.ts` et ajoutez vos traductions dans les objets `fr` et `en`.

### Changer les couleurs

Modifiez les variables CSS dans `client/src/index.css` (section `:root`).

## 📧 Support

Pour toute question ou problème, veuillez ouvrir une issue sur GitHub.

## 📄 Licence

MIT
