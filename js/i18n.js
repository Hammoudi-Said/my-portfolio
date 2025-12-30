// i18n Data
const translations = {
    fr: {
        nav: {
            name: "Said HAMMOUDI",
            about: "À propos",
            skills: "Compétences",
            experience: "Expérience",
            projects: "Projets",
            certifications: "Certifications",
            contact: "Contact"
        },
        hero: {
            greeting: "Bonjour, je suis",
            title: "Cloud & Platform Engineer",
            description: "Ingénieur Cloud & Platform Engineering avec 3 ans d'expérience, spécialisé dans la conception et l'industrialisation de plateformes cloud fiables, sécurisées et orientées self-service sur GCP, AWS et Azure.",
            cta: {
                contact: "Me contacter",
                projects: "Voir mes projets"
            },
            stats: {
                years: "Années d'expérience",
                clouds: "Cloud Providers",
                certs: "Certifications"
            }
        },
        about: {
            title: "À propos",
            paragraph1: "Passionné par le Cloud et le Platform Engineering, je me spécialise dans la conception d'infrastructures cloud modernes, automatisées et évolutives. Mon expertise couvre l'ensemble du cycle de vie des plateformes : de la conception architecturale à l'industrialisation, en passant par l'automatisation et l'observabilité.",
            paragraph2: "Expert en Infrastructure as Code (Terraform) et développement de Terraform providers, avec une solide maîtrise du développement d'API (FastAPI). Approche pragmatique, orientée qualité, standardisation et livraison rapide.",
            values: {
                title: "Valeurs & Mindset",
                automation: "🚀 Automation-first : automatiser pour gagner en fiabilité et rapidité",
                self_service: "🎯 Self-service : autonomiser les équipes produit",
                reliability: "⚡ Reliability : construire des systèmes robustes et résilients",
                quality: "✨ Quality & Standards : code de qualité, documentation claire",
                collaboration: "🤝 Collaboration : travail d'équipe et partage de connaissances"
            }
        },
        skills: {
            title: "Compétences & Stack",
            cloud: {
                title: "Cloud Providers"
            },
            platform: {
                title: "Platform Engineering"
            },
            devops: {
                title: "DevOps & Tools"
            },
            development: {
                title: "Development"
            }
        },
        experience: {
            title: "Expérience Professionnelle",
            adeo: {
                title: "Ingénieur Cloud",
                date: "Oct. 2025 - Présent",
                location: "Ronchin, France",
                description: "Intégré au sein de la BU Infrastructure & Network, au sein de l'équipe Landing Zone Management. Travaille dans un environnement multi-cloud (GCP et Azure) dédié au provisioning et à la gouvernance des Landing Zones pour les équipes projet.",
                highlight1: "Gestion autonome des tickets RUN via Jira et ServiceNow (SNOW)",
                highlight2: "Développement et évolution d'un Terraform provider (GCP)",
                highlight3: "Conception et optimisation d'APIs de provisioning cloud",
                highlight4: "Standardisation de la gestion d'erreurs API et amélioration de la robustesse"
            },
            decathlon: {
                title: "Ingénieur Cloud",
                date: "Oct. 2022 - Oct. 2025",
                location: "Lille, France",
                description: "Au sein de la BU CPE (Pôle Infrastructure), intégré aux équipes Cloud Foundation (RUN & MCO des Landing Zones GCP/AWS) et Cloud Dev (développement d'un provider Terraform). Impliqué dans des projets stratégiques dans un environnement Agile et Full Cloud.",
                highlight1: "Gestion RUN et MCO de la Landing Zone multi-cloud (GCP, AWS) - 164 tickets/mois",
                highlight2: "Conception et développement d'un Terraform provider custom (Golang)",
                highlight3: "Développement d'APIs backend en Python (FastAPI)",
                highlight4: "Implémentation de tests automatisés end-to-end : 3 jours → 30 minutes",
                highlight5: "Pilotage de déploiements multi-régions de plateforme cloud"
            }
        },
        projects: {
            title: "Projets & Réalisations",
            terraform_provider: {
                title: "Terraform Provider Custom",
                type: "Platform Engineering",
                description: "Conception et développement d'un Terraform provider custom utilisant le Terraform Plugin Framework en Golang pour l'industrialisation des ressources réseau (VPC, subnets, certificats). Intégration complète avec le workflow CI/CD et tests automatisés."
            },
            fastapi_platform: {
                title: "Plateforme API Multi-région",
                type: "Cloud Architecture",
                description: "Conception et déploiement d'une plateforme API FastAPI sur Cloud Run avec architecture multi-région. Refactoring d'une application critique (migration Cloud Functions → FastAPI), optimisation des performances et mise en place de l'observabilité."
            },
            landing_zone: {
                title: "Landing Zone Multi-Cloud",
                type: "Cloud Foundation",
                description: "Gestion et MCO d'une Landing Zone multi-cloud (GCP, AWS, Azure) pour des centaines d'équipes. Automatisation des tâches récurrentes, support niveau 3, gestion d'incidents critiques avec post-mortems, et amélioration continue de la fiabilité."
            },
            testing_framework: {
                title: "Framework de Tests Automatisés",
                type: "DevOps & Quality",
                description: "Implémentation de tests automatisés end-to-end avec Terraform test, réduisant drastiquement les temps de validation de 3 jours à 30 minutes. Amélioration de la qualité et de la vélocité des déploiements infrastructure."
            }
        },
        certifications: {
            title: "Certifications",
            gcp: {
                title: "GCP Associate Cloud Engineer",
                issuer: "Google Cloud Platform",
                date: "Février 2025"
            },
            terraform: {
                title: "Terraform Associate (003)",
                issuer: "HashiCorp",
                date: "Septembre 2024"
            },
            aws: {
                title: "AWS Cloud Practitioner",
                issuer: "Amazon Web Services",
                date: "Novembre 2022"
            }
        },
        contact: {
            title: "Contact",
            intro: "Intéressé par une collaboration ou simplement envie d'échanger sur le Cloud et le Platform Engineering ? N'hésitez pas à me contacter !",
            email: {
                label: "Email"
            },
            linkedin: {
                label: "LinkedIn"
            },
            github: {
                label: "GitHub"
            },
            location: {
                label: "Localisation",
                value: "Lens (62300), Île-de-France"
            }
        },
        footer: {
            copyright: "© 2025 Said HAMMOUDI. Tous droits réservés.",
            built_with: "Conçu avec HTML, CSS & JavaScript"
        }
    },
    en: {
        nav: {
            name: "Said HAMMOUDI",
            about: "About",
            skills: "Skills",
            experience: "Experience",
            projects: "Projects",
            certifications: "Certifications",
            contact: "Contact"
        },
        hero: {
            greeting: "Hi, I'm",
            title: "Cloud & Platform Engineer",
            description: "Cloud & Platform Engineer with 3 years of experience, specializing in designing and industrializing reliable, secure, self-service oriented cloud platforms on GCP, AWS, and Azure.",
            cta: {
                contact: "Contact me",
                projects: "View my projects"
            },
            stats: {
                years: "Years of experience",
                clouds: "Cloud Providers",
                certs: "Certifications"
            }
        },
        about: {
            title: "About Me",
            paragraph1: "Passionate about Cloud and Platform Engineering, I specialize in designing modern, automated, and scalable cloud infrastructures. My expertise covers the entire platform lifecycle: from architectural design to industrialization, including automation and observability.",
            paragraph2: "Expert in Infrastructure as Code (Terraform) and Terraform provider development, with solid mastery of API development (FastAPI). Pragmatic approach, focused on quality, standardization, and rapid delivery.",
            values: {
                title: "Values & Mindset",
                automation: "🚀 Automation-first: automate for reliability and speed",
                self_service: "🎯 Self-service: empower product teams",
                reliability: "⚡ Reliability: build robust and resilient systems",
                quality: "✨ Quality & Standards: quality code, clear documentation",
                collaboration: "🤝 Collaboration: teamwork and knowledge sharing"
            }
        },
        skills: {
            title: "Skills & Stack",
            cloud: {
                title: "Cloud Providers"
            },
            platform: {
                title: "Platform Engineering"
            },
            devops: {
                title: "DevOps & Tools"
            },
            development: {
                title: "Development"
            }
        },
        experience: {
            title: "Professional Experience",
            adeo: {
                title: "Cloud Engineer",
                date: "Oct. 2025 - Present",
                location: "Ronchin, France",
                description: "Integrated into the Infrastructure & Network BU, within the Landing Zone Management team. Working in a multi-cloud environment (GCP and Azure) dedicated to provisioning and governance of Landing Zones for project teams.",
                highlight1: "Autonomous management of RUN tickets via Jira and ServiceNow (SNOW)",
                highlight2: "Development and evolution of a Terraform provider (GCP)",
                highlight3: "Design and optimization of cloud provisioning APIs",
                highlight4: "Standardization of API error management and robustness improvement"
            },
            decathlon: {
                title: "Cloud Engineer",
                date: "Oct. 2022 - Oct. 2025",
                location: "Lille, France",
                description: "Within the CPE BU (Infrastructure Pole), integrated into Cloud Foundation teams (RUN & MCO of GCP/AWS Landing Zones) and Cloud Dev (development of a Terraform provider). Involved in strategic projects in an Agile and Full Cloud environment.",
                highlight1: "RUN and MCO management of multi-cloud Landing Zone (GCP, AWS) - 164 tickets/month",
                highlight2: "Design and development of a custom Terraform provider (Golang)",
                highlight3: "Backend API development in Python (FastAPI)",
                highlight4: "Implementation of automated end-to-end tests: 3 days → 30 minutes",
                highlight5: "Leadership of multi-region cloud platform deployments"
            }
        },
        projects: {
            title: "Projects & Achievements",
            terraform_provider: {
                title: "Custom Terraform Provider",
                type: "Platform Engineering",
                description: "Design and development of a custom Terraform provider using the Terraform Plugin Framework in Golang for industrialization of network resources (VPC, subnets, certificates). Full integration with CI/CD workflow and automated tests."
            },
            fastapi_platform: {
                title: "Multi-Region API Platform",
                type: "Cloud Architecture",
                description: "Design and deployment of a FastAPI platform on Cloud Run with multi-region architecture. Refactoring of a critical application (Cloud Functions → FastAPI migration), performance optimization and observability implementation."
            },
            landing_zone: {
                title: "Multi-Cloud Landing Zone",
                type: "Cloud Foundation",
                description: "Management and MCO of a multi-cloud Landing Zone (GCP, AWS, Azure) for hundreds of teams. Automation of recurring tasks, level 3 support, critical incident management with post-mortems, and continuous reliability improvement."
            },
            testing_framework: {
                title: "Automated Testing Framework",
                type: "DevOps & Quality",
                description: "Implementation of end-to-end automated tests with Terraform test, drastically reducing validation times from 3 days to 30 minutes. Improvement of quality and velocity of infrastructure deployments."
            }
        },
        certifications: {
            title: "Certifications",
            gcp: {
                title: "GCP Associate Cloud Engineer",
                issuer: "Google Cloud Platform",
                date: "February 2025"
            },
            terraform: {
                title: "Terraform Associate (003)",
                issuer: "HashiCorp",
                date: "September 2024"
            },
            aws: {
                title: "AWS Cloud Practitioner",
                issuer: "Amazon Web Services",
                date: "November 2022"
            }
        },
        contact: {
            title: "Contact",
            intro: "Interested in a collaboration or simply want to discuss Cloud and Platform Engineering? Feel free to contact me!",
            email: {
                label: "Email"
            },
            linkedin: {
                label: "LinkedIn"
            },
            github: {
                label: "GitHub"
            },
            location: {
                label: "Location",
                value: "Lens (62300), Île-de-France"
            }
        },
        footer: {
            copyright: "© 2025 Said HAMMOUDI. All rights reserved.",
            built_with: "Built with HTML, CSS & JavaScript"
        }
    }
};

// Current language
let currentLanguage = localStorage.getItem('language') || 'fr';

// Update content based on language
function updateContent(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    const data = translations[lang];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = data;
        
        for (const k of keys) {
            value = value[k];
        }
        
        if (value) {
            element.textContent = value;
        }
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

// Initialize i18n on page load
document.addEventListener('DOMContentLoaded', () => {
    updateContent(currentLanguage);
    
    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            updateContent(btn.getAttribute('data-lang'));
        });
    });
});