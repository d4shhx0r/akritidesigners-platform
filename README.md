# AKRITIDESIGNERS — Studio & Technical Consultancy Platform

> **Designing Spaces. Engineering Possibilities.**
> A production-grade web platform for Akritidesigners: multidisciplinary architectural planning, interior and exterior design, AutoCAD drafting & detailing, 3D visualization, SketchUp modeling, and construction BOQ estimation.

---

## Brand Positioning & Overview

Akritidesigners unites architectural creativity with structural and documentation rigor. Built to eliminate the traditional divide between aesthetic concept and on-site constructability, the platform provides clients, developers, and contractors with complete clarity through:

- **2D Floor Planning & Layouts**: Vastu-aligned, circulation-optimized spatial masterplans.
- **AutoCAD Working Drawings**: 23 plan sheets and 8 detailing sheets adhering to strict AIA/ISO layer conventions.
- **3D Visualization & SketchUp Modeling**: Physically based daylight and dusk rendering simulations.
- **Interactive Plan-to-Render Analysis**: Real-time slider demonstrating CAD drawing translation to photorealistic architecture.
- **Itemized BOQ Cost Estimation**: Complete Bill of Quantities ensuring financial control.

---

## Tech Stack & Architecture

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components by default)
- **Language**: TypeScript (Strict type checks)
- **Styling**: Tailwind CSS with custom architectural theme (Obsidian Slate, Blueprint Cyan, Structural Bronze)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Validation**: [Zod](https://zod.dev/) schema validation for API and form security
- **Media Optimization**: Next.js Image Optimization with WebP/AVIF format transcoding
- **Security Hardening**: Strict HTTP security headers (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy), anti-bot honeypot protection, server-side payload validation

---

## Directory Structure

```text
├── app/
│   ├── api/
│   │   └── inquiry/route.ts       # Secure inquiry API endpoint with Zod validation
│   ├── layout.tsx                 # Root layout with SEO metadata & JSON-LD
│   ├── page.tsx                   # Homepage (10 architectural sections)
│   ├── services/page.tsx          # 12 disciplines & specifications
│   ├── projects/                  # Portfolio filter and showcase
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx        # Dynamic case study detail pages
│   ├── process/page.tsx           # 6-stage engineering methodology
│   ├── about/page.tsx             # Studio philosophy & standards
│   ├── contact/page.tsx           # Consultation intake & office contacts
│   ├── not-found.tsx              # Custom architectural 404 page
│   ├── privacy/page.tsx           # Data confidentiality policy
│   ├── terms/page.tsx             # Professional terms of engagement
│   ├── sitemap.ts                 # Dynamic XML sitemap generator
│   └── robots.ts                  # Search engine crawling directives
├── components/
│   ├── layout/                    # Navbar & Footer
│   ├── projects/                  # ProjectCard, PortfolioFilter
│   ├── services/                  # ServiceCard
│   ├── sections/                  # Homepage hero, ticker, process, etc.
│   └── ui/                        # PlanToRenderSlider, Button, SectionHeader
├── lib/
│   └── data/                      # site-config.ts, services.ts, projects.ts, process.ts
├── public/
│   ├── branding/                  # Vector SVG monogram & logo
│   ├── projects/m2/               # Authentic project renders
│   └── cad/                       # Architectural blueprints & detailing sheets
└── types/                         # TypeScript interfaces
```

---

## Authentic Asset Pipeline

All project imagery, blueprints, and drawings are sourced directly from the project's authentic Google Drive repository (`M 2 PROJECT`):
- **Exterior Facades**: Front, side, and dusk elevations (`/projects/m2/exterior-*.png`)
- **Interior Spaces**: Living room lounge, modular kitchen, and master bedroom suite (`/projects/m2/*`)
- **Architectural Plans**: 23 sheets extracted and rendered from `PLAN.pdf` (`/cad/architectural-plan-*.png`)
- **Detailing Plates**: 8 sheets extracted from `DETAILING.pdf` (`/cad/cad-detailing-*.png`)

---

## Getting Started Locally

### 1. Prerequisites
- Node.js `v18.17+` or `v20+` (tested on Node v24)
- npm or pnpm

### 2. Installation
```bash
npm install
```

### 3. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Code Quality & Type Checks
```bash
npm run lint
```

### 5. Production Build
```bash
npm run build
npm run start
```

---

## Deployment to Vercel

1. Push your repository to **GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete production-ready Akritidesigners platform"
   git push origin main
   ```
2. Import the repository in [Vercel Dashboard](https://vercel.com).
3. The framework will automatically detect **Next.js**.
4. Configure optional environment variables in Vercel Project Settings (refer to `.env.example`).
5. Deploy.

---

## Editable Placeholders to Customize

Per the strict no-fake-information policy, all contact items not yet confirmed by your team are centralized in `lib/data/site-config.ts`:

- `[ADD PHONE NUMBER]` → Primary studio telephone or WhatsApp
- `[ADD EMAIL]` → Official business inquiry email
- `[ADD OFFICE ADDRESS]` → Physical office address / studio location
- `[ADD INSTAGRAM]` / `[ADD LINKEDIN]` → Official social media profiles

---

## License & Intellectual Property

© 2026 Akritidesigners. All architectural drawings, renderings, and documentation are proprietary.
