// Internationalization System - FR/EN

const translations = {
    fr: {
        // Navigation
        'nav.name': 'Said HAMMOUDI',
        'nav.about': 'À propos',
        'nav.skills': 'Compétences',
        'nav.experience': 'Expérience',
        'nav.education': 'Formation',
        'nav.projects': 'Projets',
        'nav.certifications': 'Certifications',
        'nav.blog': 'Articles',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.greeting': 'Bonjour, je suis',
        'hero.title': 'Cloud & Platform Engineer',
        'hero.description': "Ingénieur Cloud & Platform Engineering avec 3 ans d'expérience, spécialisé dans la conception et l'industrialisation de plateformes cloud fiables, sécurisées et orientées self-service sur GCP, AWS et Azure.",
        'hero.cta.contact': 'Me contacter',
        'hero.cta.projects': 'Voir mes projets',
        'hero.cta.download_cv': 'Télécharger mon CV',
        'hero.stats.years': "Années d'expérience",
        'hero.stats.clouds': 'Cloud Providers',
        'hero.stats.certs': 'Certifications',
        'hero.stats.tickets': 'Tickets/mois gérés',
        
        // About Section
        'about.title': 'À propos',
        'about.paragraph1': "Passionné par le Cloud et le Platform Engineering, je me spécialise dans la conception d'infrastructures cloud modernes, automatisées et évolutives. Mon expertise couvre l'ensemble du cycle de vie des plateformes : de la conception architecturale à l'industrialisation, en passant par l'automatisation et l'observabilité.",
        'about.paragraph2': "Expert en Infrastructure as Code (Terraform) et développement de Terraform providers, avec une solide maîtrise du développement d'API (FastAPI). Approche pragmatique, orientée qualité, standardisation et livraison rapide.",
        'about.values.title': 'Valeurs & Mindset',
        'about.values.automation': 'Automation-first : automatiser pour gagner en fiabilité et rapidité',
        'about.values.self_service': 'Self-service : autonomiser les équipes produit',
        'about.values.reliability': 'Reliability : construire des systèmes robustes et résilients',
        'about.values.quality': 'Quality & Standards : code de qualité, documentation claire',
        'about.values.collaboration': 'Collaboration : travail d\'équipe et partage de connaissances',
        
        // Skills Section
        'skills.title': 'Compétences & Stack',
        'skills.cloud.title': 'Cloud Providers',
        'skills.platform.title': 'Platform Engineering',
        'skills.devops.title': 'DevOps & Tools',
        'skills.development.title': 'Development',
        
        // Experience Section
        'experience.title': 'Expérience Professionnelle',
        'experience.adeo.title': 'Ingénieur Cloud',
        'experience.adeo.date': 'Oct. 2025 - Présent',
        'experience.adeo.location': 'Ronchin, France',
        'experience.adeo.description': "Intégré au sein de la BU Infrastructure & Network, au sein de l'équipe Landing Zone Management. Travaille dans un environnement multi-cloud (GCP et Azure) dédié au provisioning et à la gouvernance des Landing Zones pour les équipes projet.",
        'experience.adeo.highlight1': 'Gestion autonome des tickets RUN via Jira et ServiceNow (SNOW)',
        'experience.adeo.highlight2': 'Développement et évolution d\'un Terraform provider (GCP)',
        'experience.adeo.highlight3': 'Conception et optimisation d\'APIs de provisioning cloud',
        'experience.adeo.highlight4': 'Standardisation de la gestion d\'erreurs API et amélioration de la robustesse',
        'experience.decathlon.title': 'Ingénieur Cloud',
        'experience.decathlon.date': 'Oct. 2022 - Oct. 2025',
        'experience.decathlon.location': 'Lille, France',
        'experience.decathlon.description': "Au sein de la BU CPE (Pôle Infrastructure), intégré aux équipes Cloud Foundation (RUN & MCO des Landing Zones GCP/AWS) et Cloud Dev (développement d'un provider Terraform). Impliqué dans des projets stratégiques dans un environnement Agile et Full Cloud.",
        'experience.decathlon.highlight1': 'Gestion RUN et MCO de la Landing Zone multi-cloud (GCP, AWS) - 164 tickets/mois',
        'experience.decathlon.highlight2': 'Conception et développement d\'un Terraform provider custom (Golang)',
        'experience.decathlon.highlight3': 'Développement d\'APIs backend en Python (FastAPI)',
        'experience.decathlon.highlight4': 'Implémentation de tests automatisés end-to-end : 3 jours → 30 minutes',
        'experience.decathlon.highlight5': 'Pilotage de déploiements multi-régions de plateforme cloud',
        
        // Education Section
        'education.title': 'Formation',
        'education.master2.degree': 'Master 2 Génie Logiciel',
        'education.master2.date': 'Sept. 2021 - Juin 2022',
        'education.master2.school': 'Université de Lille',
        'education.master1.degree': 'Master 1 Génie Logiciel',
        'education.master1.date': 'Sept. 2020 - Juin 2021',
        'education.master1.school': 'Université de Lille',
        'education.license.degree': 'Licence Informatique',
        'education.license.date': 'Sept. 2016 - Juin 2020',
        'education.license.school': 'Université de Lille',
        
        // Projects Section
        'projects.title': 'Projets & Réalisations',
        'projects.terraform_provider.title': 'Terraform Provider Custom',
        'projects.terraform_provider.type': 'Platform Engineering',
        'projects.terraform_provider.description': "Conception et développement d'un Terraform provider custom utilisant le Terraform Plugin Framework en Golang pour l'industrialisation des ressources réseau (VPC, subnets, certificats). Intégration complète avec le workflow CI/CD et tests automatisés.",
        'projects.fastapi_platform.title': 'Plateforme API Multi-région',
        'projects.fastapi_platform.type': 'Cloud Architecture',
        'projects.fastapi_platform.description': "Conception et déploiement d'une plateforme API FastAPI sur Cloud Run avec architecture multi-région. Refactoring d'une application critique (migration Cloud Functions → FastAPI), optimisation des performances et mise en place de l'observabilité.",
        'projects.landing_zone.title': 'Landing Zone Multi-Cloud',
        'projects.landing_zone.type': 'Cloud Foundation',
        'projects.landing_zone.description': "Gestion et MCO d'une Landing Zone multi-cloud (GCP, AWS, Azure) pour des centaines d'équipes. Automatisation des tâches récurrentes, support niveau 3, gestion d'incidents critiques avec post-mortems, et amélioration continue de la fiabilité.",
        'projects.testing_framework.title': 'Framework de Tests Automatisés',
        'projects.testing_framework.type': 'DevOps & Quality',
        'projects.testing_framework.description': "Implémentation de tests automatisés end-to-end avec Terraform test, réduisant drastiquement les temps de validation de 3 jours à 30 minutes. Amélioration de la qualité et de la vélocité des déploiements infrastructure.",
        
        // Certifications Section
        'certifications.title': 'Certifications',
        'certifications.gcp.title': 'GCP Associate Cloud Engineer',
        'certifications.gcp.issuer': 'Google Cloud Platform',
        'certifications.gcp.date': 'Février 2025',
        'certifications.terraform.title': 'Terraform Associate (003)',
        'certifications.terraform.issuer': 'HashiCorp',
        'certifications.terraform.date': 'Septembre 2024',
        'certifications.aws.title': 'AWS Cloud Practitioner',
        'certifications.aws.issuer': 'Amazon Web Services',
        'certifications.aws.date': 'Novembre 2022',
        
        // Blog Section
        'blog.title': 'Articles & Blog',
        'blog.subtitle': 'Partage de connaissances et retours d\'expérience',
        'blog.coming_soon': 'Articles à venir prochainement...',
        'blog.topics': 'Sujets couverts : Platform Engineering, Terraform, Cloud Architecture, DevOps Best Practices',
        
        // Contact Section
        'contact.title': 'Contact',
        'contact.intro': "Intéressé par une collaboration ou simplement envie d'échanger sur le Cloud et le Platform Engineering ? N'hésitez pas à me contacter !",
        'contact.email.label': 'Email',
        'contact.linkedin.label': 'LinkedIn',
        'contact.github.label': 'GitHub',
        'contact.location.label': 'Localisation',
        'contact.location.value': 'Lens (62300), Île-de-France',
        
        // Footer
        'footer.copyright': '© 2025 Said HAMMOUDI. Tous droits réservés.',
        'footer.built_with': 'Conçu avec HTML, Tailwind CSS & JavaScript',
        'footer.theme.light': 'Mode clair',
        'footer.theme.dark': 'Mode sombre',
    },
    en: {
        // Navigation
        'nav.name': 'Said HAMMOUDI',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.experience': 'Experience',
        'nav.education': 'Education',
        'nav.projects': 'Projects',
        'nav.certifications': 'Certifications',
        'nav.blog': 'Blog',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.greeting': 'Hello, I\'m',
        'hero.title': 'Cloud & Platform Engineer',
        'hero.description': '3+ years experienced Cloud & Platform Engineer, specialized in designing and industrializing reliable, secure, and self-service oriented cloud platforms on GCP, AWS, and Azure.',
        'hero.cta.contact': 'Contact me',
        'hero.cta.projects': 'View my projects',
        'hero.cta.download_cv': 'Download my CV',
        'hero.stats.years': 'Years of experience',
        'hero.stats.clouds': 'Cloud Providers',
        'hero.stats.certs': 'Certifications',
        'hero.stats.tickets': 'Tickets/month managed',
        
        // About Section
        'about.title': 'About',
        'about.paragraph1': 'Passionate about Cloud and Platform Engineering, I specialize in designing modern, automated, and scalable cloud infrastructures. My expertise covers the entire platform lifecycle: from architectural design to industrialization, including automation and observability.',
        'about.paragraph2': 'Expert in Infrastructure as Code (Terraform) and Terraform provider development, with strong API development skills (FastAPI). Pragmatic approach, quality-oriented, focused on standardization and rapid delivery.',
        'about.values.title': 'Values & Mindset',
        'about.values.automation': 'Automation-first: automate for reliability and speed',
        'about.values.self_service': 'Self-service: empower product teams',
        'about.values.reliability': 'Reliability: build robust and resilient systems',
        'about.values.quality': 'Quality & Standards: quality code, clear documentation',
        'about.values.collaboration': 'Collaboration: teamwork and knowledge sharing',
        
        // Skills Section
        'skills.title': 'Skills & Stack',
        'skills.cloud.title': 'Cloud Providers',
        'skills.platform.title': 'Platform Engineering',
        'skills.devops.title': 'DevOps & Tools',
        'skills.development.title': 'Development',
        
        // Experience Section
        'experience.title': 'Professional Experience',
        'experience.adeo.title': 'Cloud Engineer',
        'experience.adeo.date': 'Oct. 2025 - Present',
        'experience.adeo.location': 'Ronchin, France',
        'experience.adeo.description': 'Integrated within the Infrastructure & Network BU, in the Landing Zone Management team. Working in a multi-cloud environment (GCP and Azure) dedicated to provisioning and governance of Landing Zones for project teams.',
        'experience.adeo.highlight1': 'Autonomous management of RUN tickets via Jira and ServiceNow (SNOW)',
        'experience.adeo.highlight2': 'Development and evolution of a Terraform provider (GCP)',
        'experience.adeo.highlight3': 'Design and optimization of cloud provisioning APIs',
        'experience.adeo.highlight4': 'Standardization of API error management and robustness improvement',
        'experience.decathlon.title': 'Cloud Engineer',
        'experience.decathlon.date': 'Oct. 2022 - Oct. 2025',
        'experience.decathlon.location': 'Lille, France',
        'experience.decathlon.description': 'Within the CPE BU (Infrastructure Pole), integrated into Cloud Foundation teams (RUN & MCO of GCP/AWS Landing Zones) and Cloud Dev (Terraform provider development). Involved in strategic projects in an Agile and Full Cloud environment.',
        'experience.decathlon.highlight1': 'RUN and MCO management of multi-cloud Landing Zone (GCP, AWS) - 164 tickets/month',
        'experience.decathlon.highlight2': 'Design and development of a custom Terraform provider (Golang)',
        'experience.decathlon.highlight3': 'Backend API development in Python (FastAPI)',
        'experience.decathlon.highlight4': 'Implementation of automated end-to-end tests: 3 days → 30 minutes',
        'experience.decathlon.highlight5': 'Management of multi-region cloud platform deployments',
        
        // Education Section
        'education.title': 'Education',
        'education.master2.degree': 'Master 2 Software Engineering',
        'education.master2.date': 'Sept. 2021 - June 2022',
        'education.master2.school': 'University of Lille',
        'education.master1.degree': 'Master 1 Software Engineering',
        'education.master1.date': 'Sept. 2020 - June 2021',
        'education.master1.school': 'University of Lille',
        'education.license.degree': 'Bachelor in Computer Science',
        'education.license.date': 'Sept. 2016 - June 2020',
        'education.license.school': 'University of Lille',
        
        // Projects Section
        'projects.title': 'Projects & Achievements',
        'projects.terraform_provider.title': 'Custom Terraform Provider',
        'projects.terraform_provider.type': 'Platform Engineering',
        'projects.terraform_provider.description': 'Design and development of a custom Terraform provider using the Terraform Plugin Framework in Golang for network resource industrialization (VPC, subnets, certificates). Full integration with CI/CD workflow and automated testing.',
        'projects.fastapi_platform.title': 'Multi-region API Platform',
        'projects.fastapi_platform.type': 'Cloud Architecture',
        'projects.fastapi_platform.description': 'Design and deployment of a FastAPI platform on Cloud Run with multi-region architecture. Refactoring of a critical application (Cloud Functions → FastAPI migration), performance optimization and observability implementation.',
        'projects.landing_zone.title': 'Multi-Cloud Landing Zone',
        'projects.landing_zone.type': 'Cloud Foundation',
        'projects.landing_zone.description': 'Management and MCO of a multi-cloud Landing Zone (GCP, AWS, Azure) for hundreds of teams. Automation of recurring tasks, level 3 support, critical incident management with post-mortems, and continuous reliability improvement.',
        'projects.testing_framework.title': 'Automated Testing Framework',
        'projects.testing_framework.type': 'DevOps & Quality',
        'projects.testing_framework.description': 'Implementation of automated end-to-end tests with Terraform test, drastically reducing validation times from 3 days to 30 minutes. Improved quality and velocity of infrastructure deployments.',
        
        // Certifications Section
        'certifications.title': 'Certifications',
        'certifications.gcp.title': 'GCP Associate Cloud Engineer',
        'certifications.gcp.issuer': 'Google Cloud Platform',
        'certifications.gcp.date': 'February 2025',
        'certifications.terraform.title': 'Terraform Associate (003)',
        'certifications.terraform.issuer': 'HashiCorp',
        'certifications.terraform.date': 'September 2024',
        'certifications.aws.title': 'AWS Cloud Practitioner',
        'certifications.aws.issuer': 'Amazon Web Services',
        'certifications.aws.date': 'November 2022',
        
        // Blog Section
        'blog.title': 'Articles & Blog',
        'blog.subtitle': 'Knowledge sharing and experience feedback',
        'blog.coming_soon': 'Articles coming soon...',
        'blog.topics': 'Topics covered: Platform Engineering, Terraform, Cloud Architecture, DevOps Best Practices',
        
        // Contact Section
        'contact.title': 'Contact',
        'contact.intro': 'Interested in a collaboration or just want to discuss Cloud and Platform Engineering? Feel free to contact me!',
        'contact.email.label': 'Email',
        'contact.linkedin.label': 'LinkedIn',
        'contact.github.label': 'GitHub',
        'contact.location.label': 'Location',
        'contact.location.value': 'Lens (62300), Île-de-France',
        
        // Footer
        'footer.copyright': '© 2025 Said HAMMOUDI. All rights reserved.',
        'footer.built_with': 'Built with HTML, Tailwind CSS & JavaScript',
        'footer.theme.light': 'Light mode',
        'footer.theme.dark': 'Dark mode',
    }
};

// Get current language from localStorage or default to French
let currentLanguage = localStorage.getItem('language') || 'fr';

// Function to switch language
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageLanguage();
    updateLanguageButtons();
}

// Function to update all translatable elements
function updatePageLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

// Function to update language button states
function updateLanguageButtons() {
    // Desktop buttons
    const frBtn = document.getElementById('lang-fr');
    const enBtn = document.getElementById('lang-en');
    
    // Mobile buttons
    const frBtnMobile = document.getElementById('lang-fr-mobile');
    const enBtnMobile = document.getElementById('lang-en-mobile');
    
    if (currentLanguage === 'fr') {
        frBtn?.classList.add('bg-primary', 'text-white');
        frBtn?.classList.remove('hover:bg-gray-100', 'dark:hover:bg-gray-700');
        enBtn?.classList.remove('bg-primary', 'text-white');
        enBtn?.classList.add('hover:bg-gray-100', 'dark:hover:bg-gray-700');
        
        frBtnMobile?.classList.add('bg-primary', 'text-white');
        frBtnMobile?.classList.remove('bg-gray-100', 'dark:bg-gray-700');
        enBtnMobile?.classList.remove('bg-primary', 'text-white');
        enBtnMobile?.classList.add('bg-gray-100', 'dark:bg-gray-700');
    } else {
        enBtn?.classList.add('bg-primary', 'text-white');
        enBtn?.classList.remove('hover:bg-gray-100', 'dark:hover:bg-gray-700');
        frBtn?.classList.remove('bg-primary', 'text-white');
        frBtn?.classList.add('hover:bg-gray-100', 'dark:hover:bg-gray-700');
        
        enBtnMobile?.classList.add('bg-primary', 'text-white');
        enBtnMobile?.classList.remove('bg-gray-100', 'dark:bg-gray-700');
        frBtnMobile?.classList.remove('bg-primary', 'text-white');
        frBtnMobile?.classList.add('bg-gray-100', 'dark:bg-gray-700');
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    updatePageLanguage();
    updateLanguageButtons();
});
