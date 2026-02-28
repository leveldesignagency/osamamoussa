# SEO Domination Plan – Mr Osama Moussa

**Goal:** Dominate Google for Upper GI consultant/surgeon, acid reflux, robotic surgery, minimally invasive surgery, and West London (and related locations).

**Current strengths:** Strong root metadata, JSON-LD (MedicalBusiness, Physician, Organization), location keywords, procedures hub, research, reviews, contact. **Gap:** No dedicated pages per procedure/condition or per location, so Google has only one page per “topic” and you’re not capturing long-tail and local queries.

---

## 1. Pages to Create (Priority Order)

### Tier 1 – Highest impact (create first)

| Page | URL | Target keywords | Why |
|------|-----|-----------------|-----|
| **Robotic surgery** | `/procedures/robotic-surgery` | Robotic surgery London, robotic surgery West London, robotic surgeon London, minimally invasive robotic surgery | Core differentiator, high intent |
| **Acid reflux / GORD** | `/procedures/acid-reflux-gord` | Acid reflux doctor London, acid reflux surgeon West London, GORD specialist London, GERD surgery London | Huge search volume, aligns with expertise |
| **West London** | `/area/west-london` | Upper GI surgeon West London, acid reflux doctor West London, robotic surgery West London, consultant surgeon West London | Geographic domination |
| **Fundoplication** | `/procedures/fundoplication` | Fundoplication London, anti-reflux surgery, Nissen fundoplication | Key procedure for GORD |
| **LINX** | `/procedures/linx-gord` | LINX device London, LINX GORD, LINX reflux | Distinct procedure, less competition |

### Tier 2 – Strong procedure/location pages

| Page | URL | Target keywords |
|------|-----|-----------------|
| **Minimally invasive surgery** | `/procedures/minimally-invasive-surgery` | Minimally invasive surgery London, keyhole surgery London, laparoscopic surgeon West London |
| **Hernia repair** | `/procedures/hernia-repair` | Hernia surgeon London, hernia repair West London, inguinal hernia surgery London |
| **Gallbladder surgery** | `/procedures/gallbladder-surgery` | Gallbladder surgery London, cholecystectomy London, gallbladder surgeon West London |
| **Hiatal hernia** | `/procedures/hiatal-hernia` | Hiatal hernia repair London, hiatus hernia surgery |
| **Inguinal hernia** | `/procedures/inguinal-hernia` | Inguinal hernia surgery London, groin hernia surgeon |
| **Laparoscopic surgery** | `/procedures/laparoscopic-surgery` | Laparoscopic surgery London, laparoscopic surgeon West London |

### Tier 3 – More locations + supporting procedures

| Page | URL | Target keywords |
|------|-----|-----------------|
| **Chelsea** | `/area/chelsea` | Upper GI surgeon Chelsea, acid reflux doctor Chelsea |
| **Hertfordshire** | `/area/hertfordshire` | Upper GI surgeon Hertfordshire, robotic surgery Hertfordshire, Watford surgeon |
| **Watford / Bushey** | `/area/watford-bushey` | Surgeon Watford, Spire Bushey surgeon, West Hertfordshire surgeon |
| **Cholecystectomy** | `/procedures/cholecystectomy` | Cholecystectomy London (can redirect to gallbladder-surgery or be same page) |
| **TAPP hernia** | `/procedures/tapp-hernia` | TAPP hernia surgery London |
| **Ventral / umbilical hernia** | `/procedures/ventral-umbilical-hernia` | Ventral hernia surgery, umbilical hernia repair London |

**Recommendation:** Start with Tier 1 (5 pages). Add Tier 2 next, then Tier 3. Each page = unique H1, 400–800+ words, meta title/description, internal links to Contact, About, and related procedures.

---

## 2. On-Page SEO (Every New Page)

- **Title:** `[Primary keyword] | Mr Osama Moussa - Consultant General Surgeon` (e.g. *Robotic Surgery London & West London | Mr Osama Moussa*).
- **Meta description:** 150–160 chars, include primary keyword, location (London/West London/Hertfordshire), one benefit, CTA (e.g. “Book a consultation”).
- **H1:** One per page, include main keyword (e.g. “Robotic Surgery in London & West London”).
- **H2/H3:** Structure content with 2–4 subheadings; use variations of target keywords where natural.
- **Body:** 400–800+ words for procedure/condition pages; 300–500 for location pages. Use “West London”, “minimally invasive”, “robotic”, “acid reflux”, “upper GI” naturally.
- **Internal links:** To contact, about, procedures hub, and 2–3 related procedure/area pages.
- **Canonical:** Set `alternates.canonical` to the page URL.
- **Images:** Relevant images with descriptive `alt` (e.g. “Mr Osama Moussa robotic surgery West London”).

---

## 3. Technical SEO (Already Good – Add These)

- **Sitemap:** Add all new URLs to `app/sitemap.ts` (or generate dynamically for `/procedures/[slug]` and `/area/[slug]`). Priority: homepage 1, area/procedure pages 0.8–0.9, rest as now.
- **Publication URLs:** Ensure `/research/publications/[slug]` are in the sitemap (dynamic generation).
- **Schema per page:**  
  - Procedure pages: `MedicalProcedure` or `MedicalWebPage` with `about` pointing to condition/procedure.  
  - Area pages: `MedicalBusiness` or `WebPage` with `about` = service area.  
  - Keep existing Physician/MedicalBusiness in layout; add page-specific JSON-LD where it adds value.
- **Breadcrumbs:** Add `BreadcrumbList` JSON-LD and visible breadcrumbs on procedure and area pages (e.g. Home > Procedures > Robotic Surgery).

---

## 4. Content Angles That Get Rewarded by Google

- **E-E-A-T:** Google rewards Experience, Expertise, Authoritativeness, Trust. Use: “Mr Osama Moussa”, “consultant”, “trained in Versius and Intuitive”, “West Hertfordshire NHS Trust”, “Spire Bushey”, “Circle Health Group”, links to Research and Reviews.
- **Location:** Repeat “West London”, “Chelsea”, “Hertfordshire”, “Watford” in titles, H1s, and body (naturally). Area pages should list hospitals and how patients in that area can access care.
- **Intent:**  
  - **Informational:** “What is robotic surgery?”, “When is fundoplication recommended?” – answer clearly, then lead to “Book a consultation”.  
  - **Transactional:** “Acid reflux surgeon London”, “Book consultation” – clear CTAs and contact/booking links above the fold and after content.
- **Featured snippets:** Use short paragraphs, bullet lists, and clear H2s for “What is…?”, “How does…?”, “What are the benefits of…?” so Google can pull answers.

---

## 5. Internal Linking Strategy

- **Homepage:** Add a “Key treatments” or “What we offer” block with links to Tier 1 procedure pages + West London area page.
- **Procedures hub:** For each procedure card, link to the new dedicated page (e.g. “Robotic Surgery” → `/procedures/robotic-surgery`). Keep hub as the main “Procedures” index.
- **Procedure pages:** Link to 2–3 related procedures (e.g. Acid reflux → Fundoplication, LINX, Hiatal hernia), Contact, About.
- **Area pages:** Link to procedures offered there, Contact, About.
- **Footer/Header:** Consider “Areas we serve” with West London, Chelsea, Hertfordshire, Watford.

---

## 6. Local SEO (Off-Site)

- **Google Business Profile:** If applicable, create/claim and fully optimise: name, category (e.g. “General surgeon”), areas served, description (keywords: Upper GI, robotic surgery, acid reflux, West London), photos, posts, Q&A. Get reviews there and on Doctify.
- **Citations:** Ensure NAP (name, address, phone) is consistent on Doctify, Top Doctors, IWGTC, Bupa, Nuffield, hospital pages, and any directories you use.
- **Reviews:** Encourage Doctify and Google reviews; embed/surface reviews on site (you already have reviews section).

---

## 7. Quick Wins (No New Pages)

- **Homepage hero/intro:** Ensure “West London” and “minimally invasive surgery” appear in the first 1–2 sentences or subheadings.
- **About page:** Add a short “Areas we serve” paragraph (West London, Chelsea, Hertfordshire, Watford) with keywords.
- **Contact page:** Repeat “West London”, “Hertfordshire”, and key procedures in meta and first paragraph.
- **Procedures hub:** Add a 1–2 sentence intro above the grid that includes “robotic surgery”, “acid reflux”, “minimally invasive”, “West London”.
- **Root keywords:** In layout or homepage, keep “acid reflux”, “robotic surgery”, “minimally invasive surgery”, “West London” in meta and visible content.

---

## 8. Implementation Order

1. **Phase 1 (Weeks 1–2)**  
   - Add Tier 1 pages: `/procedures/robotic-surgery`, `/procedures/acid-reflux-gord`, `/area/west-london`, `/procedures/fundoplication`, `/procedures/linx-gord`.  
   - Implement dynamic sitemap for `/procedures/[slug]` and `/area/[slug]`.  
   - Add breadcrumbs + BreadcrumbList on new pages.  
   - Internal links from homepage and procedures hub to these five pages.

2. **Phase 2 (Weeks 3–4)**  
   - Add Tier 2 procedure and area pages.  
   - Add procedure-specific schema (MedicalWebPage/MedicalProcedure) where useful.  
   - Quick wins: hero, about, contact, procedures intro copy tweaks.

3. **Phase 3 (Ongoing)**  
   - Tier 3 pages.  
   - Optional: simple blog/resources (“What is robotic surgery?”, “When to see a surgeon for acid reflux”) for long-tail and snippets.  
   - Monitor Search Console: which pages/keywords grow; double down with more content or internal links.

---

## 9. How Google Will Reward You

- **More pages** = more chances to rank for “upper GI surgeon West London”, “acid reflux doctor London”, “robotic surgery London”, “fundoplication”, “LINX”, “minimally invasive surgery”, etc.
- **Dedicated URLs** = clear relevance per topic; better rankings than one hub page for all terms.
- **Location pages** = strong relevance for “[specialty] + [location]” queries.
- **Internal linking** = passes authority to key pages and spreads relevance.
- **Schema + breadcrumbs** = richer results and clearer crawlability.
- **E-E-A-T and local signals** = trust and local pack visibility.

If you tell me which tier you want to build first (e.g. “Tier 1 only” or “Tier 1 + Tier 2”), I can outline the exact file structure (e.g. `app/procedures/[slug]/page.tsx`, `app/area/[slug]/page.tsx`) and the content/data shape for each page so you can implement or hand to a dev.
