# 🎨 Guide de Personnalisation - Portfolio

Ce guide vous aide à personnaliser rapidement votre portfolio selon vos besoins.

---

## 📝 Modifier le Contenu

### 1. Informations Personnelles

**Fichier**: `/app/assets/js/i18n.js`

```javascript
// Modifier dans les sections fr et en
'nav.name': 'Votre Nom',
'hero.greeting': 'Bonjour, je suis',
'hero.title': 'Votre Titre Professionnel',
'hero.description': 'Votre description...',
```

### 2. Contact

**Fichier**: `/app/index.html`

Chercher les liens de contact (lignes ~463-487):
```html
<!-- Email -->
<a href="mailto:votre.email@example.com">

<!-- LinkedIn -->
<a href="https://linkedin.com/in/votre-profil">

<!-- GitHub -->
<a href="https://github.com/votre-username">
```

### 3. Expérience & Projets

**Fichier**: `/app/assets/js/i18n.js`

Modifier toutes les clés commençant par:
- `experience.*` pour l'expérience
- `projects.*` pour les projets
- `education.*` pour la formation
- `certifications.*` pour les certifications

---

## 🎨 Modifier le Design

### 1. Couleurs Principales

**Fichier**: `/app/index.html` (dans la balise `<script>` Tailwind config)

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#635BFF',        // Votre couleur principale
                'primary-dark': '#4F46E5', // Version plus foncée
                secondary: '#00D4FF',      // Couleur secondaire
                accent: '#7C3AED',         // Accent pour gradients
            }
        }
    }
}
```

**Exemples de palettes:**

**Tech Blue (style Vercel)**
```javascript
primary: '#0070F3',
'primary-dark': '#0051CC',
secondary: '#00D1FF',
accent: '#7928CA',
```

**Purple Power (style Twitch)**
```javascript
primary: '#9146FF',
'primary-dark': '#772CE8',
secondary: '#B24BF3',
accent: '#E94AFF',
```

**Green Energy (style Stripe)**
```javascript
primary: '#00D924',
'primary-dark': '#00B81E',
secondary: '#00FFD1',
accent: '#00E676',
```

### 2. Police de Caractères

**Fichier**: `/app/index.html`

Modifier la ligne Google Fonts (~38-40):
```html
<link href="https://fonts.googleapis.com/css2?family=VotrePolice:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

Puis dans la config Tailwind:
```javascript
fontFamily: {
    sans: ['VotrePolice', 'system-ui', 'sans-serif'],
},
```

**Polices recommandées:**
- **Inter** (actuelle) - Moderne, clean, très lisible
- **Poppins** - Moderne, arrondie, friendly
- **Roboto** - Classique Google, très versatile
- **Space Grotesk** - Tech, moderne, distinctive
- **DM Sans** - Élégante, professionnelle

---

## 📥 Ajouter le CV en PDF

### 1. Créer le dossier
```bash
mkdir -p /app/assets/cv
```

### 2. Ajouter votre CV
```bash
cp votre-cv.pdf /app/assets/cv/Said_HAMMOUDI_CV.pdf
```

### 3. Modifier le bouton download
**Fichier**: `/app/assets/js/main.js` (ligne ~91)

```javascript
function downloadCV() {
    // Remplacer l'alert par:
    window.open('/assets/cv/Said_HAMMOUDI_CV.pdf', '_blank');
}
```

---

## 💬 Support

Besoin d'aide ? Contactez-moi:
- 📧 Email: hammoudi.pro6@gmail.com
- 💼 LinkedIn: [mohamed-said-hammoudi](https://linkedin.com/in/mohamed-said-hammoudi)

---

Bon développement ! 🚀
