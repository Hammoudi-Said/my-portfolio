export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  highlightMetric?: string;
  description: string;
  achievements: string[];
  skills: string[];
  clientLogo?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  badgeUrl?: string;
  verificationId?: string;
  color: string;
}

export interface ServiceOffer {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  iconName: string;
  badge: string;
}

export interface Testimonial {
  id: string;
  authorName: string;
  authorTitle: string;
  authorCompany: string;
  rating: number;
  missionScope: string;
  content: string;
  date: string;
  avatar?: string;
  verified: boolean;
}

export interface ProjectPoc {
  slug: string;
  title: string;
  category: "Terraform" | "GCP" | "Platform Engineering" | "Golang" | "FastAPI";
  description: string;
  impact: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export const PROFILE = {
  name: "Said HAMMOUDI",
  legalName: "Mohamed-Said HAMMOUDI",
  role: "Freelance Senior Cloud & Platform Engineer",
  tagline: "Architecting Resilient Multi-Cloud Foundations & Self-Service Developer Platforms",
  summary:
    "Senior Cloud & Platform Engineer with 3+ years of enterprise experience (ADEO, Decathlon). Specialized in Multi-Cloud Landing Zones (GCP, AWS, Azure), custom Terraform Provider development (Golang), and internal cloud provisioning APIs (Python / FastAPI). Passionate about turning complex infrastructure into streamlined, self-service developer platforms.",
  email: "hammoudi.pro6@gmail.com",
  phone: "+33 7 69 30 48 84",
  phoneDisplay: "07 69 30 48 84",
  location: "Lens (62300) / Île-de-France / Remote",
  availability: "Available for Freelance Missions (Remote / Paris / Lille)",
  calendarLink: "https://cal.com/said-hammoudi/30min",
  socials: {
    github: "https://github.com/Hammoudi-Said",
    linkedin: "https://linkedin.com/in/mohamed-said-hammoudi",
    email: "mailto:hammoudi.pro6@gmail.com",
  },
  metrics: [
    { label: "Validation Time", value: "30 min", previous: "3 days", change: "-98%", context: "Decathlon automated E2E testing" },
    { label: "RUN Operations", value: "164/mo", previous: "manual", change: "100%", context: "Tickets handled autonomously" },
    { label: "Security Alerts", value: "-85%", previous: "high", change: "resolved", context: "GitHub Code Scanning & Dependabot at ADEO" },
    { label: "Platform SLA", value: "99.99%", previous: "99.5%", change: "+0.49%", context: "Multi-cloud Landing Zone uptime" },
  ],
  skills: {
    cloud: ["Google Cloud Platform (GCP)", "Amazon Web Services (AWS)", "Microsoft Azure"],
    infrastructure: ["Terraform", "Custom Terraform Providers (Go)", "Terragrunt", "Landing Zones", "Docker", "Linux"],
    backend: ["Python (3.13+)", "FastAPI", "Golang", "Bash", "Java", "Pydantic"],
    devops: ["CI/CD (GitHub Actions)", "Datadog", "HashiCorp Vault", "pytest", "Terraform Test", "SRE"],
    practices: ["Platform Engineering", "Infrastructure as Code", "FinOps", "Agile / Scrum", "Security Scanning"],
  },
};

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Associate Cloud Engineer (ACE)",
    issuer: "Google Cloud (GCP)",
    date: "Feb 2025",
    color: "from-blue-500/20 to-sky-500/10 text-sky-400 border-sky-500/30",
  },
  {
    name: "HashiCorp Certified: Terraform Associate (003)",
    issuer: "HashiCorp",
    date: "Sept 2024",
    color: "from-purple-500/20 to-indigo-500/10 text-purple-400 border-purple-500/30",
  },
  {
    name: "AWS Certified Cloud Practitioner (Foundational)",
    issuer: "Amazon Web Services (AWS)",
    date: "Nov 2022",
    color: "from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/30",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "ADEO",
    role: "Ingénieur Cloud / Platform Engineer",
    location: "Ronchin (Lille), France",
    period: "Oct. 2025 - Present",
    current: true,
    highlightMetric: "-85% Security Alerts",
    description:
      "Mission au sein du produit Landing Zone, plateforme interne de provisioning cloud self-service permettant aux équipes Adeo de déployer des environnements sécurisés et managés sur GCP et Azure.",
    achievements: [
      "Conception et optimisation d'APIs et SDK internes de provisioning cloud en Python & FastAPI.",
      "Mise en place et maintenance de suites de tests automatisés (pytest) pour sécuriser les flux de déploiement.",
      "Standardisation de la gestion des erreurs et amélioration de l'observabilité des microservices de provisioning.",
      "Prise en charge autonome du RUN et de la gestion des incidents de production (Jira, ServiceNow).",
      "Correction proactive des alertes de sécurité GitHub (Dependabot, Code Scanning), réduisant significativement la surface de vulnérabilité.",
    ],
    skills: ["Google Cloud Platform", "Microsoft Azure", "Python", "FastAPI", "pytest", "GitHub Actions", "ServiceNow"],
  },
  {
    company: "Decathlon",
    role: "Ingénieur Cloud & Platform Foundation",
    location: "Lille, France",
    period: "Oct. 2022 - Oct. 2025",
    highlightMetric: "3 Days ➔ 30 Min Validation",
    description:
      "Intégré aux équipes Cloud Foundation (RUN & MCO Landing Zones GCP/AWS) et Cloud Dev (industrialisation des ressources réseau) au sein de la BU CPE (Pôle Infrastructure).",
    achievements: [
      "Conception et développement d'un provider Terraform custom en Golang (Terraform Plugin Framework) pour industrialiser les ressources réseau (VPCs, subnets, certificats).",
      "Mise en place de tests end-to-end automatisés avec `terraform test` et `pytest`, réduisant la validation de 3 jours à 30 minutes.",
      "Conception et développement d'APIs backend en Python (FastAPI) et refonte critique d'applications (migration Cloud Functions → FastAPI).",
      "Déploiement multi-régions sur Cloud Run avec rédaction d'ADR et coordination inter-équipes.",
      "Assurance du RUN et MCO multi-cloud avec traitement autonome d'une moyenne de 164 tickets/mois et astreintes L3.",
    ],
    skills: ["GCP", "AWS", "Terraform", "Golang", "Python", "FastAPI", "Datadog", "Vault", "Cloud Run"],
  },
  {
    company: "EDF",
    role: "Concepteur Développeur (Stage)",
    location: "Lille, France",
    period: "Mar. 2022 - Sept. 2022",
    description:
      "Développement et optimisation de 3 applications critiques pour la gestion des flux de données comptables, trésorerie et trading financier.",
    achievements: [
      "Analyse des spécifications fonctionnelles et techniques et conception d'architectures résilientes.",
      "Automatisation des flux de données financiers et amélioration de la fiabilité des traitements batch.",
      "Maintenance continue garantissant zéro interruption sur les opérations financières sensibles.",
    ],
    skills: ["Java", "SQL", "Linux", "Data Processing", "Batch Automation"],
  },
  {
    company: "EquensWorldline",
    role: "DevOps Junior (Stage)",
    location: "Lille, France",
    period: "Mai 2020 - Août 2020",
    description:
      "Amélioration des processus de déploiement continu et conteneurisation pour une application critique de paiement.",
    achievements: [
      "Création et orchestration d'images Docker standardisées pour les environnements de test et production.",
      "Optimisation des pipelines CI/CD réduisant le temps de release.",
    ],
    skills: ["Docker", "CI/CD", "Linux", "Bash", "Testing"],
  },
];

export const EDUCATION = [
  {
    degree: "Master 2 Génie Logiciel",
    school: "Université de Lille",
    period: "2021 - 2022",
    description: "Architectures logicielles distribuées, génie logiciel avancé, qualité et tests.",
  },
  {
    degree: "Master 1 Génie Logiciel",
    school: "Université de Lille",
    period: "2020 - 2021",
    description: "Systèmes concurrents, bases de données avancées, devops et méthodologies agiles.",
  },
  {
    degree: "Licence Informatique",
    school: "Université de Lille",
    period: "2016 - 2020",
    description: "Algorithmique fondamentale, structures de données, architecture des ordinateurs et réseaux.",
  },
];

export const SERVICES: ServiceOffer[] = [
  {
    id: "landing-zone",
    title: "Multi-Cloud Landing Zone Architecture",
    tagline: "Secure, compliant, and automated cloud foundations on GCP, AWS & Azure.",
    description:
      "Design and automated provisioning of enterprise-grade landing zones with zero-trust networking, centralized IAM governance, audit logging, and guardrails.",
    deliverables: [
      "Hub & Spoke / Shared VPC network topologies",
      "Centralized IAM least-privilege policies & Service Accounts",
      "Automated organizational guardrails (GCP Org Policies, AWS SCPs)",
      "Ready-to-use Terraform modular codebase with CI/CD deployment",
    ],
    iconName: "Cloud",
    badge: "Core Expertise",
  },
  {
    id: "terraform-provider",
    title: "Custom Terraform Providers & Modules",
    tagline: "Industrialize your internal APIs and cloud resources with custom Go providers.",
    description:
      "Build production-grade Terraform Providers using the HashiCorp Terraform Plugin Framework in Golang to expose internal APIs as declarable IaC resources.",
    deliverables: [
      "Custom Golang Terraform Provider development",
      "CRUD operations, schema validation, and state migration handlers",
      "Automated testing suite (`terraform test` + acceptance tests)",
      "Public / Private Terraform Registry packaging & documentation",
    ],
    iconName: "Cpu",
    badge: "Specialized (Go)",
  },
  {
    id: "internal-developer-platform",
    title: "Internal Developer Platforms & Provisioning APIs",
    tagline: "Empower feature teams with self-service cloud deployment APIs.",
    description:
      "Conceive and build modern self-service provisioning APIs using FastAPI (Python 3.13) to eliminate operational bottlenecks and enable autonomous dev workflows.",
    deliverables: [
      "High-performance async FastAPI backend with Pydantic v2 schemas",
      "Interactive OpenAPI / Swagger documentation for developers",
      "Secure integrations with GCP Cloud Run, Vault, and cloud APIs",
      "Automated pytest suites with comprehensive test coverage",
    ],
    iconName: "Terminal",
    badge: "High ROI",
  },
  {
    id: "e2e-testing-cicd",
    title: "CI/CD & Automated Infrastructure Testing",
    tagline: "Cut validation times from days to minutes with automated test pipelines.",
    description:
      "Transform fragile manual infrastructure deployments into bulletproof, automated delivery pipelines using GitHub Actions, `terraform test`, and pytest.",
    deliverables: [
      "Multi-environment deployment workflows (Dev / Staging / Prod)",
      "Automated security scans (Dependabot, Trivy, CodeQL, Checkov)",
      "End-to-end integration test harnesses with ephemeral cloud testing",
      "Automated rollback and zero-downtime release strategies",
    ],
    iconName: "Zap",
    badge: "98% Faster Validation",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "adeo-1",
    authorName: "Julien V.",
    authorTitle: "Tech Lead / Cloud Foundation",
    authorCompany: "ADEO",
    rating: 5,
    missionScope: "Landing Zone GCP/Azure & FastAPI Provisioning APIs",
    content:
      "Said a apporté une rigueur exceptionnelle sur notre plateforme Landing Zone. Sa maîtrise de FastAPI et de GCP a permis d'industrialiser nos APIs internes de provisioning tout en élevant considérablement nos standards de test et de sécurité.",
    date: "Février 2026",
    verified: true,
  },
  {
    id: "decathlon-1",
    authorName: "Thomas M.",
    authorTitle: "Head of Cloud Infrastructure",
    authorCompany: "Decathlon",
    rating: 5,
    missionScope: "Custom Terraform Provider (Go) & Network Industrialization",
    content:
      "Le travail de Said sur notre provider Terraform en Go a été un tournant pour notre équipe réseau. Passer de 3 jours à 30 minutes sur les tests d'infrastructure a complètement débloqué la vitesse de livraison de nos projets.",
    date: "Octobre 2025",
    verified: true,
  },
  {
    id: "decathlon-2",
    authorName: "Alexandre D.",
    authorTitle: "Staff DevOps Engineer",
    authorCompany: "Decathlon",
    rating: 5,
    missionScope: "Multi-Cloud Landing Zone RUN & L3 Support",
    content:
      "Une autonomie rare et un vrai sens du service. Said a géré plus de 160 tickets par mois en RUN avec un calme et une précision technique remarquables, tout en automatisant systématiquement les tâches récurrentes.",
    date: "Septembre 2025",
    verified: true,
  },
];

export const POCS: ProjectPoc[] = [
  {
    slug: "custom-terraform-provider-go",
    title: "Custom Network Terraform Provider in Golang",
    category: "Golang",
    description:
      "Open-source implementation blueprint of a custom Terraform Provider built with the Terraform Plugin Framework in Go to manage dynamic cloud network resources.",
    impact: "Reduced manual network provisioning tickets by 75% with automated state validation.",
    techStack: ["Golang", "Terraform Plugin Framework", "GCP APIs", "GitHub Actions"],
    githubUrl: "https://github.com/Hammoudi-Said",
    featured: true,
  },
  {
    slug: "gcp-multi-region-cloud-run",
    title: "Multi-Region Cloud Run Architecture with Terraform",
    category: "GCP",
    description:
      "Complete IaC boilerplate demonstrating a geo-distributed FastAPI microservice running on Google Cloud Run with Cloud Load Balancing, Cloud Armor, and zero-downtime blue/green releases.",
    impact: "99.99% availability with automated failover and sub-50ms latency across Europe.",
    techStack: ["Google Cloud Run", "Terraform", "FastAPI", "Cloud Armor", "Cloud DNS"],
    githubUrl: "https://github.com/Hammoudi-Said",
    featured: true,
  },
  {
    slug: "fastapi-cloud-provisioning-engine",
    title: "Cloud Provisioning Engine & Self-Service SDK",
    category: "FastAPI",
    description:
      "A lightweight, enterprise-ready Python 3.13 FastAPI microservice providing guarded self-service endpoints for dev teams to provision isolated cloud namespaces.",
    impact: "Instant self-service onboarding for product developers without cloud console access.",
    techStack: ["Python 3.13", "FastAPI", "Pydantic v2", "pytest", "Docker"],
    githubUrl: "https://github.com/Hammoudi-Said",
    featured: true,
  },
];

export const BLOGS = [
  {
    slug: "custom-terraform-provider-golang",
    title: "How We Cut Cloud Provisioning Friction: Building a Custom Terraform Provider in Go",
    date: "2026-01-15",
    readTime: "7 min read",
    tags: ["Terraform", "Golang", "Platform Engineering", "Decathlon"],
    excerpt:
      "Deep dive into architecting a custom Terraform Provider using the Terraform Plugin Framework: schema design, resource lifecycles, and reducing testing friction.",
  },
  {
    slug: "cutting-cloud-e2e-tests-30-mins",
    title: "From 3 Days to 30 Minutes: Automating Multi-Cloud E2E Infrastructure Validation",
    date: "2025-11-20",
    readTime: "5 min read",
    tags: ["Terraform Test", "pytest", "CI/CD", "Quality"],
    excerpt:
      "Step-by-step methodology to replace slow, error-prone manual infrastructure checklists with automated, parallelized test suites using `terraform test` and `pytest`.",
  },
  {
    slug: "fastapi-internal-developer-platforms",
    title: "Why FastAPI is the Secret Weapon for Enterprise Cloud Provisioning APIs",
    date: "2025-09-08",
    readTime: "6 min read",
    tags: ["FastAPI", "Python", "Cloud Architecture", "ADEO"],
    excerpt:
      "How to leverage Python's async ecosystem and Pydantic v2 validation to build rock-solid internal cloud provisioning services that developers actually love using.",
  },
];
