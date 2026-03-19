# Other SEO Deployed (Beyond Titles, FAQs, Backlinks)

This document lists **additional SEO** implemented so the site is as complete as possible. Use it as a checklist of what’s live and what’s optional next.

---

## Deployed in this round

### 1. Publication pages in sitemap

- **What:** All research publication URLs (`/research/publications/[slug]`) are now in the XML sitemap.
- **Why:** Google can discover and recrawl each publication; better indexing for long-tail and academic-style queries.
- **Where:** `app/sitemap.ts` – imports `getPublicationSlugs()` and adds one sitemap entry per publication (priority 0.6, changeFrequency yearly).

### 2. ScholarlyArticle schema on publication pages

- **What:** Each publication page outputs a `ScholarlyArticle` JSON-LD block with headline, description, url, author, publisher, mainEntityOfPage.
- **Why:** Tells Google the page is a scholarly article; supports E-E-A-T and rich results where applicable.
- **Where:** `app/research/publications/[slug]/page.tsx` – script tag with `scholarlySchema`.

### 3. Canonical + Open Graph on publication pages

- **What:** Each publication page has a canonical URL and Open Graph (title, description, url, type: article).
- **Why:** Consolidates signals to the correct URL; better sharing and indexing.
- **Where:** `app/research/publications/[slug]/page.tsx` – `generateMetadata` returns `alternates.canonical` and `openGraph`.

### 4. Hardcore backlinks playbook

- **What:** Backlinks playbook expanded with: Tier 1/2/3 prioritisation, outreach email templates (hospital, body, directory, press), extended UK and medical source list, tracking table, NAP+URL rules, deep-link targets.
- **Where:** `SEO_Backlinks_Playbook.md`.

---

## Already in place (recap)

- Homepage and procedure page title tags and meta descriptions (keyword-rich).
- FAQ sections + FAQPage schema on all 14 procedure pages.
- MedicalBusiness, Physician, Organization schema (layout).
- MedicalWebPage, MedicalProcedure, BreadcrumbList on every procedure page.
- Sitemap: homepage, about, procedures hub, all procedure URLs, contact, research, **publication URLs**, reviews, terms, privacy.
- robots.txt: allow /, disallow /api/ and /_next/, sitemap URL.
- Google Search Console verification tag.
- Meta robots: index, follow; full snippet/image for Googlebot.
- Canonical URLs on layout, contact, every procedure page, every publication page.

---

## Optional next (not blocking “complete” SEO)

| Item | Effort | Notes |
|------|--------|--------|
| **GMC number on About + in Physician schema** | Optional | GMC = General Medical Council (UK doctor regulator), not e‑commerce. Adding it is a trust signal that the surgeon is registered; skip if you prefer not to show it. |
| **Image alt text audit** | Medium | Ensure key images (hero, procedure images) have descriptive alt; decorative images can use alt="". |
| **Blog / articles section** | Higher | For ongoing content and natural backlink/citation opportunities; structure can be added later. |
| **BreadcrumbList on publication pages** | Done | Home → Research → [Publication title] added; matches procedure pages. |
| **Homepage “Key procedures” block** | Done | Section with links to Robotic surgery, Acid reflux/GORD, Hernia, Gallbladder, LINX + “View all procedures”. |
| **Core Web Vitals** | Ongoing | Already using Next.js Image, semantic HTML; monitor in Search Console and Vercel Speed Insights. |

---

## Summary

- **Sitemap:** Includes all publication URLs.
- **Publications:** Canonical, OG, and ScholarlyArticle schema on every publication page.
- **Backlinks:** Playbook is execution-ready with tiers, templates, UK sources, and tracking.

Together with the existing on-page and technical SEO, the site is in a “fully complete” SEO position; the rest is optional refinement and ongoing backlink execution.
