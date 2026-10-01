# Said HAMMOUDI — Freelance Cloud & Platform Engineer Portfolio

A modern, high-converting portfolio designed for **Said HAMMOUDI** (Freelance Senior Cloud & Platform Engineer — ex-ADEO, ex-Decathlon, Master 2 Software Engineering, GCP & Terraform Certified).

---

## 🚀 Key Features

1. **Interactive Cloud Terminal (`SaidShell`)**:
   - In-browser interactive CLI allowing prospective clients to execute commands: `help`, `said bio`, `said certs`, `said landing-zone`, `said terraform plan`, `said hire`.
2. **Multi-Cloud Landing Zone Visualizer**:
   - Interactive architecture canvas comparing **GCP (Primary)** and **AWS** topologies with clickable nodes revealing Architecture Decision Records (ADRs), security guardrails, and production Terraform snippets.
3. **Quantifiable Impact Sliders & Counters**:
   - Interactive slider demonstrating the **Decathlon E2E validation time reduction** (3 Days ➔ 30 Minutes, -98% time saved).
   - High-impact operational metrics (164 tickets/month handled autonomously, -85% security alerts at ADEO, 99.99% platform SLA).
4. **Verified Client Feedback & Testimonial Engine**:
   - Displays real endorsements from ADEO & Decathlon leads.
   - Interactive modal allowing clients/collaborators to submit reviews with ratings and mission scope, validated and handled via `/api/testimonials`.
5. **POC Lab & Technical Knowledge Hub**:
   - Showcases real architecture prototypes: Custom Go Terraform Provider, Multi-Region Cloud Run, FastAPI Provisioning Engine.
6. **Digital Business Card (`/card`)**:
   - NFC & QR ready digital visit card with one-click **vCard (`.vcf`)** download saving Said's contact info directly into smartphone address books.

---

## 🛠️ Tech Stack & Philosophy

- **Framework**: Next.js 15 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS with Cyber-Cloud theme (GCP Blue, Terraform Purple, AWS Amber, Golang Cyan)
- **Icons & Animation**: Lucide React + Canvas Confetti
- **Hosting Strategy**: 100% Turnkey on **Vercel** ($0/month, zero infrastructure maintenance, automatic Edge CDN, free SSL)
- **Task Runner**: `mise` (`mise run dev`, `mise run build`, `mise run lint`)

---

## 💻 Local Development

### Prerequisites
- Node.js >= 20.x
- npm >= 10.x
- (Optional) `mise`

### Quick Start
```bash
# 1. Install dependencies
npm install

# 2. Run local dev server (Turbopack)
npm run dev
# or with mise:
mise run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploy to Vercel (100% Free & Zero-Maintenance)

1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "feat: initial freelance cloud portfolio with interactive terminal and visualizer"
   git remote add origin https://github.com/Hammoudi-Said/my-portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New Project"** and select `my-portfolio`.
4. Click **"Deploy"** (Vercel automatically detects Next.js).
5. In ~45 seconds, your site is live with a free global URL: `said-hammoudi.vercel.app`.

### Adding a Free or Budget Custom Domain
- **Free option (`is-a.dev`)**: You can claim `said.is-a.dev` or `hammoudi.is-a.dev` for $0 via the [is-a.dev GitHub registry](https://is-a.dev).
- **Budget custom domain (`.fr` or `.dev`)**: Add `hammoudi.fr` (~6€/yr) or `saidhammoudi.dev` (~12€/yr) in Vercel **Settings ➔ Domains**. Vercel automatically generates and renews your SSL certificate.

---

## 📝 How to Add New Blogs or POCs

All portfolio data is cleanly decoupled in [`src/lib/data.ts`](file:///Users/mohamed-saidhammoudi/Documents/Github/my-portfolio/src/lib/data.ts):
- To add a new POC: Append an object to the `POCS` array.
- To add a new article: Append an object to the `BLOGS` array.
- To update metrics or experiences: Edit `EXPERIENCES` or `PROFILE.metrics`.

---

## 📱 Digital Visit Card Usage (`/card`)
- Direct URL: `https://said-hammoudi.vercel.app/card`
- Perfect for adding to your LinkedIn bio, email signature, or programming onto a physical NFC card.
