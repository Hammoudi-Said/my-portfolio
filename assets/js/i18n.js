// Internationalization System - FR/EN
// Premium Portfolio - Cloud & Platform Engineer Consultant

const translations = {
    fr: {
        // Navigation
        'nav.name': 'Said HAMMOUDI',
        'nav.about': 'Profil',
        'nav.expertise': 'Expertise',
        'nav.cases': 'Cas d\'usage',
        'nav.experience': 'Parcours',
        'nav.approach': 'Approche',
        'nav.certifications': 'Certifications',
        'nav.insights': 'Insights',
        'nav.contact': 'Disponibilité',
        
        // Hero Section
        'hero.badge': 'Cloud & Platform Engineer Consultant',
        'hero.greeting': 'Architecte de',
        'hero.title': 'Plateformes Cloud Fiables & Scalables',
        'hero.subtitle': 'Disponible Avril 2026',
        'hero.description': 'Consultant indépendant spécialisé en Platform Engineering et fondations cloud multi-cloud. J\'industrialise des infrastructures cloud fiables, automatisées et orientées self-service pour accélérer la livraison produit.',
        'hero.location': 'Paris • Hybride',
        'hero.cta.availability': 'Discuter d\'un projet',
        'hero.cta.cases': 'Voir les cas d\'usage',
        'hero.stats.years': 'Années d\'expertise',
        'hero.stats.platforms': 'Plateformes cloud',
        'hero.stats.teams': 'Équipes accompagnées',
        'hero.stats.automation': 'Gain temps de validation',
        
        // About/Profile Section
        'about.title': 'Consultant Platform Engineering',
        'about.paragraph1': 'En tant que consultant Cloud & Platform Engineer, je construis des fondations cloud qui permettent aux organisations d\'accélérer leur time-to-market tout en garantissant fiabilité, sécurité et gouvernance.',
        'about.paragraph2': 'Mon approche combine expertise technique approfondie (Infrastructure as Code, custom Terraform providers, architectures cloud natives) et vision pragmatique de la livraison. Je ne construis pas de l\'infrastructure pour l\'infrastructure : je conçois des plateformes qui créent de la valeur métier mesurable.',
        'about.philosophy.title': 'Ma philosophie Platform Engineering',
        'about.philosophy.item1.title': 'Platform as a Product',
        'about.philosophy.item1.desc': 'Traiter l\'infrastructure comme un produit avec des utilisateurs internes, des métriques de satisfaction et une amélioration continue',
        'about.philosophy.item2.title': 'Delivery-First Mindset',
        'about.philosophy.item2.desc': 'Réduire les frictions, accélérer les déploiements, autonomiser les équipes produit sans compromis sur la qualité',
        'about.philosophy.item3.title': 'Build for Scale',
        'about.philosophy.item3.desc': 'Concevoir dès le départ pour la scalabilité technique et organisationnelle (multi-régions, multi-comptes, centaines d\'équipes)',
        'about.philosophy.item4.title': 'Automation & Quality',
        'about.philosophy.item4.desc': 'Automatiser systématiquement, tester rigoureusement, documenter clairement pour garantir maintenabilité et fiabilité',
        
        // Expertise & Services Section
        'expertise.title': 'Domaines d\'Expertise',
        'expertise.subtitle': 'Services de conseil en Cloud & Platform Engineering',
        'expertise.service1.title': 'Platform Engineering & Cloud Foundations',
        'expertise.service1.desc': 'Conception et industrialisation de Landing Zones multi-cloud (GCP, AWS, Azure). Architecture des fondations organisationnelles : governance, security, networking, observability.',
        'expertise.service1.value': 'Réduit de 6 mois à 6 semaines le time-to-platform pour nouvelles BU',
        'expertise.service2.title': 'Infrastructure as Code & Custom Providers',
        'expertise.service2.desc': 'Développement de Terraform providers customs (Plugin Framework, Golang). Modules réutilisables, testing automatisé (Terraform test, pytest), CI/CD pipelines.',
        'expertise.service2.value': 'Accélère le provisioning de ressources complexes de 3 jours à 30 minutes',
        'expertise.service3.title': 'Cloud APIs & Backend Development',
        'expertise.service3.desc': 'Conception d\'APIs cloud natives (FastAPI, Cloud Run). Migration et refactoring d\'applications legacy vers architectures modernes, multi-région, hautement disponibles.',
        'expertise.service3.value': 'Améliore reliability (99.9% SLA) et réduit les coûts opérationnels de 40%',
        'expertise.service4.title': 'Automation, CI/CD & Testing',
        'expertise.service4.desc': 'Industrialisation des workflows (GitHub Actions, GitLab CI). Automated testing frameworks, quality gates, observability (Datadog), secrets management (Vault).',
        'expertise.service4.value': 'Réduit les incidents production de 70% via testing et observabilité',
        
        // Case Studies Section
        'cases.title': 'Cas d\'Usage Sélectionnés',
        'cases.subtitle': 'Projets à impact mesurable sur plateformes enterprise',
        'cases.case1.title': 'Industrialisation Landing Zone Multi-Cloud',
        'cases.case1.context': 'Contexte',
        'cases.case1.context_text': 'Organisation retail 150K+ collaborateurs, migration cloud en cours, besoin de standardiser et accélérer le provisioning de comptes cloud pour 200+ équipes projet.',
        'cases.case1.problem': 'Défi',
        'cases.case1.problem_text': 'Provisioning manuel de Landing Zones prenant 2-3 semaines, erreurs de configuration fréquentes, absence de governance et de standardisation multi-cloud (GCP, Azure).',
        'cases.case1.solution': 'Solution',
        'cases.case1.solution_text': 'Développement d\'un Terraform provider custom intégré au self-service portal. Automatisation complète : networking, security baselines, observability, quotas. Pipeline CI/CD avec validation automatique.',
        'cases.case1.impact': 'Impact',
        'cases.case1.impact_item1': 'Time-to-platform réduit de 2-3 semaines à 4 heures',
        'cases.case1.impact_item2': 'Taux d\'erreur de provisioning réduit de 85%',
        'cases.case1.impact_item3': '200+ équipes onboardées en 6 mois vs 12 mois projeté',
        'cases.case1.impact_item4': 'Governance et compliance garanties à 100%',
        'cases.case2.title': 'Custom Terraform Provider - Ressources Réseau',
        'cases.case2.context': 'Contexte',
        'cases.case2.context_text': 'Entreprise retail majeure avec architecture réseau complexe (VPC custom, private connectivity, certificats SSL automatisés). Ressources non supportées nativement par le provider Terraform officiel.',
        'cases.case2.problem': 'Défi',
        'cases.case2.problem_text': 'Équipes bloquées par l\'absence de ressources Terraform pour composants réseau critiques. Workarounds manuels, inconsistances, impossibilité de tester en CI/CD.',
        'cases.case2.solution': 'Solution',
        'cases.case2.solution_text': 'Développement d\'un provider Terraform custom en Golang (Plugin Framework). Ressources : VPC custom, subnets, certificats, private endpoints. Tests end-to-end automatisés, documentation complète.',
        'cases.case2.impact': 'Impact',
        'cases.case2.impact_item1': 'Provisioning réseau automatisé à 100%',
        'cases.case2.impact_item2': 'Temps de provisioning réduit de 3 jours à 30 minutes',
        'cases.case2.impact_item3': 'Adoption par 50+ équipes en 2 mois',
        'cases.case2.impact_item4': 'Testing automatisé garantissant 0 régression',
        'cases.case3.title': 'Refactoring API Platform Multi-Région',
        'cases.case3.context': 'Contexte',
        'cases.case3.context_text': 'API critique de provisioning cloud (Cloud Functions) avec problèmes de performance, fiabilité et maintenabilité. Besoin de scalabilité multi-région et SLA 99.9%.',
        'cases.case3.problem': 'Défi',
        'cases.case3.problem_text': 'Architecture monolithique Cloud Functions, cold starts, absence d\'observabilité, incidents fréquents, impossible de scaler en multi-région.',
        'cases.case3.solution': 'Solution',
        'cases.case3.solution_text': 'Migration complète vers FastAPI sur Cloud Run. Architecture multi-région active-active, health checks, observability Datadog, error handling standardisé, automated testing (pytest), CI/CD robuste.',
        'cases.case3.impact': 'Impact',
        'cases.case3.impact_item1': 'SLA passé de 95% à 99.95%',
        'cases.case3.impact_item2': 'Latence P95 réduite de 60%',
        'cases.case3.impact_item3': 'Incidents production réduits de 80%',
        'cases.case3.impact_item4': 'Multi-région avec failover automatique',
        'cases.case4.title': 'Framework Testing Infrastructure',
        'cases.case4.context': 'Contexte',
        'cases.case4.context_text': 'Équipe Platform Engineering d\'une grande enseigne retail gérant une Landing Zone multi-cloud. Validation manuelle de l\'infrastructure prenant 3 jours à chaque release.',
        'cases.case4.problem': 'Défi',
        'cases.case4.problem_text': 'Absence de tests automatisés pour l\'infrastructure Terraform. Régressions fréquentes, confiance faible dans les déploiements, vélocité limitée.',
        'cases.case4.solution': 'Solution',
        'cases.case4.solution_text': 'Implémentation d\'un framework de tests end-to-end avec Terraform test. Tests de validation des ressources, connectivity checks, security posture verification. Intégration CI/CD avec GitHub Actions.',
        'cases.case4.impact': 'Impact',
        'cases.case4.impact_item1': 'Temps de validation réduit de 3 jours à 30 minutes',
        'cases.case4.impact_item2': 'Régressions détectées automatiquement (0 incident post-release)',
        'cases.case4.impact_item3': 'Fréquence de release augmentée de 2x/mois à hebdomadaire',
        'cases.case4.impact_item4': 'Confiance équipe augmentée, déploiements sereins',
        
        // Tech Stack Section
        'stack.title': 'Stack Technique',
        'stack.subtitle': 'Technologies maîtrisées pour construire des plateformes enterprise-grade',
        'stack.category1': 'Cloud Providers',
        'stack.category2': 'Infrastructure & IaC',
        'stack.category3': 'Development & APIs',
        'stack.category4': 'CI/CD & Testing',
        'stack.category5': 'Observability & Security',
        'stack.category6': 'Methodologies',
        
        // Experience Section
        'experience.title': 'Parcours Professionnel',
        'experience.subtitle': '3+ années à construire et gérer des plateformes cloud enterprise',
        'experience.adeo.title': 'Cloud & Platform Engineer Consultant',
        'experience.adeo.company': 'ADEO (Leroy Merlin, Bricoman)',
        'experience.adeo.date': 'Oct. 2025 - Présent',
        'experience.adeo.location': 'Lille, France • Hybride',
        'experience.adeo.type': 'Mission Freelance via Portage',
        'experience.adeo.description': 'Mission au sein de l\'équipe Landing Zone Management (BU Infrastructure & Network). Industrialisation des plateformes multi-cloud (GCP, Azure) pour 200+ équipes projet.',
        'experience.adeo.highlight1': 'Évolution et maintenance d\'un Terraform provider custom (GCP) en production',
        'experience.adeo.highlight2': 'Optimisation des APIs de provisioning cloud (FastAPI, Cloud Run)',
        'experience.adeo.highlight3': 'Standardisation de la gestion d\'erreurs et amélioration de la robustesse (+40%)',
        'experience.adeo.highlight4': 'Gestion autonome du RUN : 164 tickets/mois (Jira, ServiceNow)',
        'experience.decathlon.title': 'Cloud & Platform Engineer',
        'experience.decathlon.company': 'Decathlon',
        'experience.decathlon.date': 'Oct. 2022 - Oct. 2025',
        'experience.decathlon.location': 'Lille, France',
        'experience.decathlon.type': 'CDI - Pôle Infrastructure Cloud (CPE)',
        'experience.decathlon.description': 'Rôles : Cloud Foundation (RUN Landing Zones GCP/AWS) + Cloud Dev (Terraform provider). Projets stratégiques en environnement Agile full-cloud.',
        'experience.decathlon.highlight1': 'Développement d\'un Terraform provider custom (Golang, Plugin Framework)',
        'experience.decathlon.highlight2': 'Migration et refactoring d\'API critique Cloud Functions → FastAPI multi-région',
        'experience.decathlon.highlight3': 'Framework de tests automatisés : 3 jours → 30 minutes de validation',
        'experience.decathlon.highlight4': 'MCO Landing Zone multi-cloud : 164 tickets/mois, support niveau 3, post-mortems',
        'experience.decathlon.highlight5': 'Pilotage de déploiements multi-régions (GCP, AWS)',
        
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
        
        // Certifications Section
        'certifications.title': 'Certifications Professionnelles',
        'certifications.subtitle': 'Validations officielles des expertises cloud & infrastructure',
        'certifications.gcp.title': 'Google Cloud Associate Cloud Engineer',
        'certifications.gcp.issuer': 'Google Cloud',
        'certifications.gcp.date': 'Février 2025',
        'certifications.terraform.title': 'HashiCorp Terraform Associate (003)',
        'certifications.terraform.issuer': 'HashiCorp',
        'certifications.terraform.date': 'Septembre 2024',
        'certifications.aws.title': 'AWS Certified Cloud Practitioner',
        'certifications.aws.issuer': 'Amazon Web Services',
        'certifications.aws.date': 'Novembre 2022',
        
        // Working Approach Section
        'approach.title': 'Approche de Travail',
        'approach.subtitle': 'Comment je maximise la valeur livrée sur vos projets',
        'approach.method1.title': 'Collaboration Agile & Intégrée',
        'approach.method1.desc': 'Intégration directe dans vos équipes (Scrum, Kanban). Rituels Agile, communication transparente, documentation continue. Je ne livre pas un projet puis disparaît : je construis avec vous.',
        'approach.method2.title': 'Delivery-First, Pragmatisme',
        'approach.method2.desc': 'Focus sur la livraison de valeur mesurable rapidement. MVP fonctionnel d\'abord, puis itérations. Pas d\'over-engineering : ce qui apporte de la valeur métier, maintenant.',
        'approach.method3.title': 'Quality & Automation Built-in',
        'approach.method3.desc': 'Testing automatisé dès le début. CI/CD systématique. Code review, documentation claire, standards d\'équipe. La qualité n\'est pas une phase : c\'est une pratique continue.',
        'approach.method4.title': 'Knowledge Transfer & Autonomie',
        'approach.method4.desc': 'Mon objectif : vous rendre autonomes. Documentation détaillée, sessions de formation, pair programming. Je ne crée pas de dépendance : je transfère les compétences.',
        
        // Insights Section (formerly Blog)
        'insights.title': 'Insights & Thought Leadership',
        'insights.subtitle': 'Réflexions sur le Platform Engineering et les architectures cloud modernes',
        'insights.coming_soon': 'Contenu à venir prochainement',
        'insights.topics.title': 'Sujets d\'expertise',
        'insights.topics.item1': 'Platform Engineering as a Product mindset',
        'insights.topics.item2': 'Terraform Provider Development best practices',
        'insights.topics.item3': 'Multi-cloud Landing Zone patterns',
        'insights.topics.item4': 'Infrastructure Testing strategies',
        'insights.topics.item5': 'API Platform reliability & observability',
        'insights.topics.item6': 'Self-service infrastructure at scale',
        
        // Availability & Contact Section
        'contact.title': 'Disponibilité & Contact',
        'contact.availability.title': 'Disponibilité',
        'contact.availability.date': 'À partir d\'Avril 2026',
        'contact.availability.location': 'Paris • Hybride (2-3j/semaine sur site)',
        'contact.availability.status': 'Actuellement en mission, disponible pour discuter de futurs projets',
        'contact.cta.title': 'Intéressé par une collaboration ?',
        'contact.cta.text': 'Que ce soit pour une mission longue durée, du conseil stratégique, ou un audit de plateforme cloud, discutons de votre projet.',
        'contact.cta.button': 'Discuter d\'un projet',
        'contact.email.label': 'Email',
        'contact.linkedin.label': 'LinkedIn',
        'contact.github.label': 'GitHub',
        'contact.location.label': 'Basé à',
        'contact.location.value': 'Lille • Paris • Remote',
        
        // Footer
        'footer.copyright': '© 2025 Said HAMMOUDI - Cloud & Platform Engineer Consultant',
        'footer.built_with': 'Indépendant via Portage Salarial',
        'footer.availability': 'Disponible Avril 2026',
        'footer.theme.light': 'Mode clair',
        'footer.theme.dark': 'Mode sombre',
    },
    en: {
        // Navigation
        'nav.name': 'Said HAMMOUDI',
        'nav.about': 'Profile',
        'nav.expertise': 'Expertise',
        'nav.cases': 'Case Studies',
        'nav.experience': 'Background',
        'nav.approach': 'Approach',
        'nav.certifications': 'Certifications',
        'nav.insights': 'Insights',
        'nav.contact': 'Availability',
        
        // Hero Section
        'hero.badge': 'Cloud & Platform Engineer Consultant',
        'hero.greeting': 'Architect of',
        'hero.title': 'Reliable & Scalable Cloud Platforms',
        'hero.subtitle': 'Available April 2026',
        'hero.description': 'Independent consultant specialized in Platform Engineering and multi-cloud foundations. I industrialize reliable, automated, and self-service cloud infrastructures to accelerate product delivery.',
        'hero.location': 'Paris • Hybrid',
        'hero.cta.availability': 'Discuss a project',
        'hero.cta.cases': 'View case studies',
        'hero.stats.years': 'Years of expertise',
        'hero.stats.platforms': 'Cloud platforms',
        'hero.stats.teams': 'Teams supported',
        'hero.stats.automation': 'Validation time saved',
        
        // About/Profile Section
        'about.title': 'Platform Engineering Consultant',
        'about.paragraph1': 'As a Cloud & Platform Engineering consultant, I build cloud foundations that enable organizations to accelerate their time-to-market while ensuring reliability, security, and governance.',
        'about.paragraph2': 'My approach combines deep technical expertise (Infrastructure as Code, custom Terraform providers, cloud-native architectures) with a pragmatic vision of delivery. I don\'t build infrastructure for infrastructure\'s sake: I design platforms that create measurable business value.',
        'about.philosophy.title': 'My Platform Engineering Philosophy',
        'about.philosophy.item1.title': 'Platform as a Product',
        'about.philosophy.item1.desc': 'Treat infrastructure as a product with internal users, satisfaction metrics, and continuous improvement',
        'about.philosophy.item2.title': 'Delivery-First Mindset',
        'about.philosophy.item2.desc': 'Reduce friction, accelerate deployments, empower product teams without compromising quality',
        'about.philosophy.item3.title': 'Build for Scale',
        'about.philosophy.item3.desc': 'Design from day one for technical and organizational scalability (multi-region, multi-account, hundreds of teams)',
        'about.philosophy.item4.title': 'Automation & Quality',
        'about.philosophy.item4.desc': 'Systematically automate, rigorously test, clearly document to ensure maintainability and reliability',
        
        // Expertise & Services Section
        'expertise.title': 'Areas of Expertise',
        'expertise.subtitle': 'Cloud & Platform Engineering consulting services',
        'expertise.service1.title': 'Platform Engineering & Cloud Foundations',
        'expertise.service1.desc': 'Design and industrialization of multi-cloud Landing Zones (GCP, AWS, Azure). Architecture of organizational foundations: governance, security, networking, observability.',
        'expertise.service1.value': 'Reduces time-to-platform from 6 months to 6 weeks for new business units',
        'expertise.service2.title': 'Infrastructure as Code & Custom Providers',
        'expertise.service2.desc': 'Development of custom Terraform providers (Plugin Framework, Golang). Reusable modules, automated testing (Terraform test, pytest), CI/CD pipelines.',
        'expertise.service2.value': 'Accelerates complex resource provisioning from 3 days to 30 minutes',
        'expertise.service3.title': 'Cloud APIs & Backend Development',
        'expertise.service3.desc': 'Design of cloud-native APIs (FastAPI, Cloud Run). Migration and refactoring of legacy applications to modern, multi-region, highly available architectures.',
        'expertise.service3.value': 'Improves reliability (99.9% SLA) and reduces operational costs by 40%',
        'expertise.service4.title': 'Automation, CI/CD & Testing',
        'expertise.service4.desc': 'Workflow industrialization (GitHub Actions, GitLab CI). Automated testing frameworks, quality gates, observability (Datadog), secrets management (Vault).',
        'expertise.service4.value': 'Reduces production incidents by 70% through testing and observability',
        
        // Case Studies Section
        'cases.title': 'Selected Case Studies',
        'cases.subtitle': 'Projects with measurable impact on enterprise platforms',
        'cases.case1.title': 'Multi-Cloud Landing Zone Industrialization',
        'cases.case1.context': 'Context',
        'cases.case1.context_text': 'Retail organization with 150K+ employees, ongoing cloud migration, need to standardize and accelerate cloud account provisioning for 200+ project teams.',
        'cases.case1.problem': 'Challenge',
        'cases.case1.problem_text': 'Manual Landing Zone provisioning taking 2-3 weeks, frequent configuration errors, lack of governance and multi-cloud standardization (GCP, Azure).',
        'cases.case1.solution': 'Solution',
        'cases.case1.solution_text': 'Development of a custom Terraform provider integrated with self-service portal. Complete automation: networking, security baselines, observability, quotas. CI/CD pipeline with automated validation.',
        'cases.case1.impact': 'Impact',
        'cases.case1.impact_item1': 'Time-to-platform reduced from 2-3 weeks to 4 hours',
        'cases.case1.impact_item2': 'Provisioning error rate reduced by 85%',
        'cases.case1.impact_item3': '200+ teams onboarded in 6 months vs 12 months projected',
        'cases.case1.impact_item4': 'Governance and compliance guaranteed at 100%',
        'cases.case2.title': 'Custom Terraform Provider - Network Resources',
        'cases.case2.context': 'Context',
        'cases.case2.context_text': 'Major retail enterprise with complex network architecture (custom VPC, private connectivity, automated SSL certificates). Resources not natively supported by official Terraform provider.',
        'cases.case2.problem': 'Challenge',
        'cases.case2.problem_text': 'Teams blocked by lack of Terraform resources for critical network components. Manual workarounds, inconsistencies, unable to test in CI/CD.',
        'cases.case2.solution': 'Solution',
        'cases.case2.solution_text': 'Development of a custom Terraform provider in Golang (Plugin Framework). Resources: custom VPC, subnets, certificates, private endpoints. Automated end-to-end tests, complete documentation.',
        'cases.case2.impact': 'Impact',
        'cases.case2.impact_item1': 'Network provisioning automated at 100%',
        'cases.case2.impact_item2': 'Provisioning time reduced from 3 days to 30 minutes',
        'cases.case2.impact_item3': 'Adoption by 50+ teams in 2 months',
        'cases.case2.impact_item4': 'Automated testing ensuring 0 regression',
        'cases.case3.title': 'Multi-Region API Platform Refactoring',
        'cases.case3.context': 'Context',
        'cases.case3.context_text': 'Critical cloud provisioning API (Cloud Functions) with performance, reliability, and maintainability issues. Need for multi-region scalability and 99.9% SLA.',
        'cases.case3.problem': 'Challenge',
        'cases.case3.problem_text': 'Monolithic Cloud Functions architecture, cold starts, lack of observability, frequent incidents, unable to scale multi-region.',
        'cases.case3.solution': 'Solution',
        'cases.case3.solution_text': 'Complete migration to FastAPI on Cloud Run. Active-active multi-region architecture, health checks, Datadog observability, standardized error handling, automated testing (pytest), robust CI/CD.',
        'cases.case3.impact': 'Impact',
        'cases.case3.impact_item1': 'SLA improved from 95% to 99.95%',
        'cases.case3.impact_item2': 'P95 latency reduced by 60%',
        'cases.case3.impact_item3': 'Production incidents reduced by 80%',
        'cases.case3.impact_item4': 'Multi-region with automated failover',
        'cases.case4.title': 'Infrastructure Testing Framework',
        'cases.case4.context': 'Context',
        'cases.case4.context_text': 'Platform Engineering team at a major retail company managing a multi-cloud Landing Zone. Manual infrastructure validation taking 3 days per release.',
        'cases.case4.problem': 'Challenge',
        'cases.case4.problem_text': 'No automated tests for Terraform infrastructure. Frequent regressions, low confidence in deployments, limited velocity.',
        'cases.case4.solution': 'Solution',
        'cases.case4.solution_text': 'Implementation of an end-to-end testing framework with Terraform test. Resource validation tests, connectivity checks, security posture verification. CI/CD integration with GitHub Actions.',
        'cases.case4.impact': 'Impact',
        'cases.case4.impact_item1': 'Validation time reduced from 3 days to 30 minutes',
        'cases.case4.impact_item2': 'Regressions detected automatically (0 post-release incidents)',
        'cases.case4.impact_item3': 'Release frequency increased from 2x/month to weekly',
        'cases.case4.impact_item4': 'Team confidence increased, peaceful deployments',
        
        // Tech Stack Section
        'stack.title': 'Technical Stack',
        'stack.subtitle': 'Technologies mastered to build enterprise-grade platforms',
        'stack.category1': 'Cloud Providers',
        'stack.category2': 'Infrastructure & IaC',
        'stack.category3': 'Development & APIs',
        'stack.category4': 'CI/CD & Testing',
        'stack.category5': 'Observability & Security',
        'stack.category6': 'Methodologies',
        
        // Experience Section
        'experience.title': 'Professional Background',
        'experience.subtitle': '3+ years building and managing enterprise cloud platforms',
        'experience.adeo.title': 'Cloud & Platform Engineer Consultant',
        'experience.adeo.company': 'ADEO (Leroy Merlin, Bricoman)',
        'experience.adeo.date': 'Oct. 2025 - Present',
        'experience.adeo.location': 'Lille, France • Hybrid',
        'experience.adeo.type': 'Freelance via Portage',
        'experience.adeo.description': 'Consulting mission within the Landing Zone Management team (Infrastructure & Network BU). Industrialization of multi-cloud platforms (GCP, Azure) for 200+ project teams.',
        'experience.adeo.highlight1': 'Evolution and maintenance of a custom Terraform provider (GCP) in production',
        'experience.adeo.highlight2': 'Optimization of cloud provisioning APIs (FastAPI, Cloud Run)',
        'experience.adeo.highlight3': 'Standardization of error handling and robustness improvement (+40%)',
        'experience.adeo.highlight4': 'Autonomous RUN management: 164 tickets/month (Jira, ServiceNow)',
        'experience.decathlon.title': 'Cloud & Platform Engineer',
        'experience.decathlon.company': 'Decathlon',
        'experience.decathlon.date': 'Oct. 2022 - Oct. 2025',
        'experience.decathlon.location': 'Lille, France',
        'experience.decathlon.type': 'Permanent - Cloud Infrastructure (CPE)',
        'experience.decathlon.description': 'Roles: Cloud Foundation (RUN Landing Zones GCP/AWS) + Cloud Dev (Terraform provider). Strategic projects in Agile full-cloud environment.',
        'experience.decathlon.highlight1': 'Development of a custom Terraform provider (Golang, Plugin Framework)',
        'experience.decathlon.highlight2': 'Migration and refactoring of critical API Cloud Functions → FastAPI multi-region',
        'experience.decathlon.highlight3': 'Automated testing framework: 3 days → 30 minutes validation',
        'experience.decathlon.highlight4': 'Multi-cloud Landing Zone MCO: 164 tickets/month, level 3 support, post-mortems',
        'experience.decathlon.highlight5': 'Multi-region deployment management (GCP, AWS)',
        
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
        
        // Certifications Section
        'certifications.title': 'Professional Certifications',
        'certifications.subtitle': 'Official validations of cloud & infrastructure expertise',
        'certifications.gcp.title': 'Google Cloud Associate Cloud Engineer',
        'certifications.gcp.issuer': 'Google Cloud',
        'certifications.gcp.date': 'February 2025',
        'certifications.terraform.title': 'HashiCorp Terraform Associate (003)',
        'certifications.terraform.issuer': 'HashiCorp',
        'certifications.terraform.date': 'September 2024',
        'certifications.aws.title': 'AWS Certified Cloud Practitioner',
        'certifications.aws.issuer': 'Amazon Web Services',
        'certifications.aws.date': 'November 2022',
        
        // Working Approach Section
        'approach.title': 'Working Approach',
        'approach.subtitle': 'How I maximize value delivered on your projects',
        'approach.method1.title': 'Agile & Integrated Collaboration',
        'approach.method1.desc': 'Direct integration into your teams (Scrum, Kanban). Agile rituals, transparent communication, continuous documentation. I don\'t deliver a project and disappear: I build with you.',
        'approach.method2.title': 'Delivery-First, Pragmatism',
        'approach.method2.desc': 'Focus on delivering measurable value quickly. Functional MVP first, then iterations. No over-engineering: what brings business value, now.',
        'approach.method3.title': 'Quality & Automation Built-in',
        'approach.method3.desc': 'Automated testing from the start. Systematic CI/CD. Code review, clear documentation, team standards. Quality is not a phase: it\'s a continuous practice.',
        'approach.method4.title': 'Knowledge Transfer & Autonomy',
        'approach.method4.desc': 'My goal: make you autonomous. Detailed documentation, training sessions, pair programming. I don\'t create dependency: I transfer skills.',
        
        // Insights Section (formerly Blog)
        'insights.title': 'Insights & Thought Leadership',
        'insights.subtitle': 'Reflections on Platform Engineering and modern cloud architectures',
        'insights.coming_soon': 'Content coming soon',
        'insights.topics.title': 'Areas of expertise',
        'insights.topics.item1': 'Platform Engineering as a Product mindset',
        'insights.topics.item2': 'Terraform Provider Development best practices',
        'insights.topics.item3': 'Multi-cloud Landing Zone patterns',
        'insights.topics.item4': 'Infrastructure Testing strategies',
        'insights.topics.item5': 'API Platform reliability & observability',
        'insights.topics.item6': 'Self-service infrastructure at scale',
        
        // Availability & Contact Section
        'contact.title': 'Availability & Contact',
        'contact.availability.title': 'Availability',
        'contact.availability.date': 'From April 2026',
        'contact.availability.location': 'Paris • Hybrid (2-3 days/week on-site)',
        'contact.availability.status': 'Currently on mission, available to discuss future projects',
        'contact.cta.title': 'Interested in collaboration?',
        'contact.cta.text': 'Whether for a long-term mission, strategic consulting, or a cloud platform audit, let\'s discuss your project.',
        'contact.cta.button': 'Discuss a project',
        'contact.email.label': 'Email',
        'contact.linkedin.label': 'LinkedIn',
        'contact.github.label': 'GitHub',
        'contact.location.label': 'Based in',
        'contact.location.value': 'Lille • Paris • Remote',
        
        // Footer
        'footer.copyright': '© 2025 Said HAMMOUDI - Cloud & Platform Engineer Consultant',
        'footer.built_with': 'Independent via Portage Salarial',
        'footer.availability': 'Available April 2026',
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

// Apply language on page load
document.addEventListener('DOMContentLoaded', () => {
    updatePageLanguage();
    updateLanguageButtons();
});
