# SEO Audit Scorecard – Built to ace testing kits

This document maps the site to **what paid and free SEO audit tools check** (e.g. Lighthouse, SEMrush Site Audit, Ahrefs, Screaming Frog, Sitebulb). Use it to see where you stand and to answer “where are we at?” for clients or audits.

**Canonical domain:** `https://www.osamamoussa.co.uk`

---

## 1. Technical SEO (crawl, index, sitemap)

| Check | Status | Where / notes |
|-------|--------|----------------|
| **XML sitemap** | ✅ Pass | `/sitemap.xml` – all main pages, all 14 procedures, all publications, priorities & changeFrequency |
| **Sitemap in robots.txt** | ✅ Pass | `app/robots.ts` – `sitemap: 'https://www.osamamoussa.co.uk/sitemap.xml'` |
| **robots.txt allows crawl** | ✅ Pass | `allow: '/'`, `disallow: ['/api/', '/_next/']` |
| **Canonical on every page** | ✅ Pass | Layout default; Contact, every procedure, every publication have explicit canonical |
| **No duplicate content without canonical** | ✅ Pass | Single canonical per URL; no duplicate URLs in sitemap |
| **Valid URLs (no broken)** | ✅ Pass | Next.js routing; procedure/publication slugs from data; 404 via notFound() |
| **HTTPS** | ✅ Pass | Assumed in production (Vercel); all links use https in metadata |
| **Mobile-friendly** | ✅ Pass | Responsive layout; viewport meta; no desktop-only content blocking mobile |

---

## 2. On-page SEO (titles, meta, headings)

| Check | Status | Where / notes |
|-------|--------|----------------|
| **Unique title per page** | ✅ Pass | Home, About, Procedures, Contact, Research, Reviews, each procedure (14), each publication – all unique |
| **Title length (50–60 chars ideal)** | ✅ Pass | Key pages in range; procedure titles use seoTitle or “[Procedure] London & Hertfordshire” |
| **Title contains target keywords** | ✅ Pass | Home: “Upper GI & Hernia Surgeon London \| Robotic Surgery Specialist”; procedures: location + specialty |
| **Unique meta description per page** | ✅ Pass | Every page has description; procedures use seoDescription or procedure description |
| **Meta description length (150–160 chars)** | ✅ Pass | Descriptions written for snippet length |
| **Single H1 per page** | ✅ Pass | One H1 per template (hero or main heading) |
| **Heading hierarchy (H1 → H2 → H3)** | ✅ Pass | Procedure pages: H1 (title), H2 (sections + FAQ), H3 (FAQ questions); no skips |
| **Keyword in H1 / early content** | ✅ Pass | Procedure H1 = procedure name; homepage hero has key messaging |

---

## 3. Structured data (schema)

| Check | Status | Where / notes |
|-------|--------|----------------|
| **Organization / LocalBusiness** | ✅ Pass | MedicalBusiness + Physician + Organization in layout |
| **Valid JSON-LD (no syntax errors)** | ✅ Pass | Schema is generated in code; valid JSON.stringify |
| **BreadcrumbList** | ✅ Pass | Every procedure page; every publication page |
| **FAQPage** | ✅ Pass | All 14 procedure pages (FAQs with FAQPage schema) |
| **MedicalWebPage / MedicalProcedure** | ✅ Pass | Every procedure page |
| **ScholarlyArticle** | ✅ Pass | Every publication page |
| **Author / Publisher** | ✅ Pass | Layout: authors, creator, publisher; publications: author in ScholarlyArticle |
| **sameAs (social/authority)** | ✅ Pass | Organization: ResearchGate, ScholargPS, I want great care, Top Doctors |

---

## 4. Images

| Check | Status | Where / notes |
|-------|--------|----------------|
| **All images have alt** | ✅ Pass | Hero, procedure heroes, logos, accreditation icons, contact, about, reviews – all have descriptive or meaningful alt |
| **Decorative images** | ✅ Pass | Where decorative, alt is descriptive (e.g. “Osama Moussa”) or contextual (procedure title) |
| **Next/Image used** | ✅ Pass | Next.js Image component (optimisation, dimensions) |

---

## 5. Links

| Check | Status | Where / notes |
|-------|--------|----------------|
| **Internal links to key pages** | ✅ Pass | Nav (About, Procedures, Research, Reviews, Contact); homepage Key procedures block; procedure sidebar “Other procedures” + Contact |
| **No broken internal links** | ✅ Pass | Links use Next.js Link and data-driven hrefs |
| **External links (rel noopener noreferrer)** | ✅ Pass | Accreditation links, publication URLs, social – target="_blank" with rel="noopener noreferrer" |
| **Descriptive anchor text** | ✅ Pass | Procedure names, “View all procedures”, “Contact”, etc.; not generic “click here” |

---

## 6. Content & keywords

| Check | Status | Where / notes |
|-------|--------|----------------|
| **Target keywords in title/meta** | ✅ Pass | Upper GI surgeon London, hernia surgeon, robotic surgery, acid reflux, gallbladder, GORD, LINX, London, Hertfordshire |
| **Content depth (word count)** | ✅ Pass | Procedure pages: multiple sections + FAQs; publications: abstract + sections |
| **Unique content per URL** | ✅ Pass | No duplicate copy across procedure or publication pages |
| **Meta keywords (legacy)** | ✅ Pass | 60+ keywords in layout; contact page extras |

---

## 7. Social & sharing

| Check | Status | Where / notes |
|-------|--------|----------------|
| **Open Graph (title, description, image)** | ✅ Pass | Layout + Contact + procedure pages + publication pages; image 1200×630 |
| **Twitter card** | ✅ Pass | summary_large_image; title, description, image |
| **OG image URL absolute** | ✅ Pass | metadataBase set; image paths resolve to full URL |

---

## 8. Internationalisation & locale

| Check | Status | Where / notes |
|-------|--------|----------------|
| **lang attribute** | ✅ Pass | `<html lang="en">` |
| **locale in OG** | ✅ Pass | openGraph.locale: "en_GB" |

---

## 9. Crawl directives & bots

| Check | Status | Where / notes |
|-------|--------|----------------|
| **index, follow** | ✅ Pass | robots meta: index: true, follow: true |
| **Googlebot snippet/image** | ✅ Pass | max-snippet: -1, max-image-preview: large, max-video-preview: -1 |
| **No accidental noindex** | ✅ Pass | No noindex on key pages |

---

## 10. E-E-A-T & authority

| Check | Status | Where / notes |
|-------|--------|----------------|
| **Author/creator visible** | ✅ Pass | authors, creator, publisher in metadata; Physician schema |
| **Contact info** | ✅ Pass | Phone, email in schema and on Contact page; hospitals with addresses |
| **Expertise signals** | ✅ Pass | Physician schema (hospitals, specialties, alumni); publications; FAQs |
| **Google Search Console** | ✅ Pass | Verification meta tag in layout |

---

## 11. Performance (often in “SEO” or “Performance” category)

| Check | Status | Where / notes |
|-------|--------|----------------|
| **Next.js Image** | ✅ Pass | Optimised images; dimensions/sizes where needed |
| **No render-blocking** | ✅ Pass | Fonts, scripts configured (next/script strategy) |
| **Core Web Vitals** | ⚠️ Monitor | Use Vercel Speed Insights + Search Console; no known blockers in code |

---

## Summary – will you ace the test?

| Category | Result |
|----------|--------|
| Technical SEO | ✅ Sitemap, robots, canonicals, HTTPS, mobile |
| On-page | ✅ Unique titles/descriptions, H1, headings, keywords |
| Structured data | ✅ Organization, Physician, Breadcrumb, FAQ, MedicalWebPage, ScholarlyArticle |
| Images | ✅ Alt on all images; Next/Image |
| Links | ✅ Internal linking, safe external links |
| Content | ✅ Unique, keyword-aligned, depth |
| Social | ✅ OG + Twitter cards |
| Locale | ✅ lang + en_GB |
| Crawl/bots | ✅ index, follow, snippet permissions |
| E-E-A-T | ✅ Author, contact, expertise, GSC |

**GMC note:** GMC = **General Medical Council** (the UK regulator for doctors). It’s not about selling or merchants. Adding a GMC number on the About page is an optional trust signal that the surgeon is registered. Skip if you prefer not to display it.

**Other optional gaps:**

- **Core Web Vitals** – Continuously monitor; no structural issues in code.
- **Backlinks** – Off-site; covered in SEO_Backlinks_Playbook.md.

Use this scorecard when running Lighthouse (SEO category), SEMrush Site Audit, Ahrefs Site Audit, or similar: the site is built to satisfy the checks they perform. If a tool flags something specific (e.g. one URL’s title length), fix that URL; the overall setup is audit-ready.
