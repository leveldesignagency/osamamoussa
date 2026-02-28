# SEO Currently in Place – and How It Helps

A list of every SEO element on the site and what it does for search and visibility.

---

## 1. Page titles and descriptions

**What’s in place**
- **Site-wide default:** “Mr Osama Moussa | Consultant General Surgeon | Upper GI & Robotic Surgery | London & Hertfordshire” with a long description that includes procedures (robotic surgery, laparoscopic, hernia, gallbladder, GORD, fundoplication, LINX) and locations (London, Chelsea, Belgravia, Fitzrovia, Holland Park, West London, Hertfordshire, Watford, Hemel Hempstead) and hospitals (Spire Bushey, Circle Health Group, West Hertfordshire NHS Trust).
- **Title template:** Every inner page uses “Page title | Mr Osama Moussa - Consultant General Surgeon”.
- **Homepage:** Custom title “Osama Moussa” and description focused on London, Hertfordshire, procedures, and “Book your consultation today”.
- **Procedures:** “Surgical Procedures & Robotic Surgery” and a description listing all procedure types and London/Hertfordshire.
- **Contact:** “Contact & Book Appointment” and a description with all locations and hospitals and booking-focused wording.
- **Research:** “Research & Publications” and a description about publications and Upper GI surgery.
- **Reviews:** “Patient Reviews & Resources” and a description about reviews and resources in London and Hertfordshire.
- **Publication pages:** Each article gets a title (shortened if long) and description from its abstract.

**How it helps**
- The text under your link in Google (the “snippet”) comes from these. Clear, relevant titles and descriptions improve click-through and tell Google what each page is about.
- Including “Upper GI”, “robotic surgery”, “acid reflux”, “London”, “West London”, “Hertfordshire”, and procedure names helps you show up for those search terms.

---

## 2. Keywords (meta keywords)

**What’s in place**
- **Layout:** A long list of 60+ keywords including name, specialty (Upper GI, robotic, laparoscopic, hernia, gallbladder, GORD, acid reflux, LINX, fundoplication), and locations (London, West London, Chelsea, Belgravia, Fitzrovia, Holland Park, Hertfordshire, Watford, Hemel Hempstead).
- **Contact page:** Extra keywords for booking, consultation, contact, and locations.

**How it helps**
- Google largely ignores the meta keywords tag for ranking, but some other systems still use it. It also acts as a checklist that the site is targeting the right themes (procedures + locations).

---

## 3. Canonical URLs

**What’s in place**
- **Layout:** Canonical set to `https://www.osamamoussa.co.uk` for the default/home.
- **Contact:** Canonical set to `https://www.osamamoussa.co.uk/procedures/contact`.

**How it helps**
- Tells Google which URL is the “main” one for that content, so duplicate or alternate URLs don’t split signals. Keeps link and ranking signals focused on the right page.

---

## 4. Open Graph and Twitter cards

**What’s in place**
- **Layout:** Open Graph (OG) and Twitter card with title, description, image (`/Osama Moussa Social Share.png` 1200×630), `en_GB` locale, site name, type “website”.
- **Contact:** OG title, description, and URL for the contact page.

**How it helps**
- When someone shares your site on Facebook, LinkedIn, X/Twitter, or similar, the link shows the right title, description, and image. That improves branding and click-through from social, and can indirectly support visibility (e.g. if links from social are indexed).

---

## 5. Structured data (JSON-LD)

**What’s in place**
- **MedicalBusiness:** Name, description, URL, logo, image, phone, email, address (Watford, Hertfordshire), areas served (London, Chelsea, Belgravia, Fitzrovia, Holland Park, West London, Hertfordshire, Watford, Hemel Hempstead, Bushey, Northwood), long list of medical specialties (Upper GI, robotic, laparoscopic, hernia, gallbladder, GORD, acid reflux, LINX, fundoplication, etc.), price range.
- **Physician:** Name, job title, description, URL, image, contact, address, hospitals (West Hertfordshire NHS Trust, Spire Bushey, Bishops Wood, Wellington) with full addresses, medical specialties, and alumni (Imperial College London).
- **Organization:** Name, URL, logo, and “sameAs” links (ResearchGate, ScholargPS, I want great care, Top Doctors).

**How it helps**
- Google uses this to understand “who you are” and “what you do”. It can power Knowledge panels, rich results, and local/search features. Clear practice name, locations, hospitals, and specialties improve the chance you appear for “Upper GI surgeon London”, “robotic surgery”, “acid reflux doctor”, etc., and for Google’s AI-style answers that cite trusted, structured sources.

---

## 6. Sitemap

**What’s in place**
- XML sitemap at `/sitemap.xml` with: homepage (priority 1), About, Procedures, Contact, Research, Reviews (priorities 0.7–0.9), Terms and Conditions, Privacy Policy (priority 0.3). Each entry has `lastModified` and `changeFrequency` (monthly/weekly/yearly).

**How it helps**
- Gives Google a full list of important pages so they can be discovered and recrawled. Priorities and change frequency hint which URLs matter most and how often to check them. Submission in Search Console speeds up discovery.

---

## 7. Robots and crawling

**What’s in place**
- **robots.txt:** Allows all user agents on the site; disallows `/api/` and `/_next/`. Points to `https://www.osamamoussa.co.uk/sitemap.xml`.
- **Meta robots (layout):** `index, follow` for all; for Googlebot, `max-video-preview: -1`, `max-image-preview: large`, `max-snippet: -1` so Google can show full snippets and images.

**How it helps**
- Ensures search engines are allowed to crawl the whole public site and use the sitemap, while keeping internal/technical paths out of the index. Full snippet and image permissions can help your pages compete for space in results.

---

## 8. Google Search Console

**What’s in place**
- Meta tag: `google-site-verification` with value `AL_dAbT3HMo2JGmN4fEc8t7K_WM8wfIRYQyMJcC0w7w`.

**How it helps**
- Verifies ownership so you can use Search Console to submit the sitemap, see which queries and pages get impressions/clicks, and fix indexing or coverage issues. Essential for monitoring and improving search performance.

---

## 9. Favicon and Apple touch icon

**What’s in place**
- Favicon: `/favicon.png` (32×32).
- Apple touch icon: `/Logo_Osama_Moussa_Compartment-02.png`.

**How it helps**
- Branding in browser tabs and bookmarks. Minor direct SEO effect, but improves trust and recognition when your site appears in history or bookmarks next to search results.

---

## 10. Language and base URL

**What’s in place**
- `<html lang="en">`.
- `metadataBase: new URL("https://www.osamamoussa.co.uk")` so all relative URLs (e.g. images) resolve to the live site.

**How it helps**
- Tells Google the site is in English and what the canonical domain is. Avoids broken or wrong URLs when content is shared or when Google resolves links.

---

## 11. Authors, creator, publisher, category

**What’s in place**
- **Layout:** `authors: [{ name: "Mr Osama Moussa" }]`, `creator`, `publisher` set to “Mr Osama Moussa”, `category: "Medical"`, `classification: "Medical Practice"`.

**How it helps**
- Signals who is responsible for the content and that it’s medical/practice content. Supports E-E-A-T (experience, expertise, authoritativeness, trust) and can help with topical relevance.

---

## 12. Publication pages (Research)

**What’s in place**
- Each publication has `generateMetadata`: title from the article (truncated if needed), description from the abstract (or fallback).
- Static params so every publication has a stable URL and can be indexed.

**How it helps**
- Each publication can rank on its own for the paper title or topic. Unique titles and descriptions reduce duplicate-content issues and help Google show the right article for academic or procedure-related searches.

---

## 13. About page (client-side meta)

**What’s in place**
- About page is a client component that sets `document.title` and the meta description via `useEffect` to an About-focused title and description (Imperial, Royal Marsden, UCL, Chelsea & Westminster, laparoscopic, robotic).

**How it helps**
- Improves the tab title and can update the description for users after load. For crawlers, the server-rendered layout default may still apply first; for maximum SEO benefit, moving this to server-side metadata (e.g. in a layout or server component) would be stronger.

---

## Summary table

| SEO element              | Where it lives        | Main benefit |
|--------------------------|------------------------|--------------|
| Default title/description| `app/layout.tsx`      | Strong snippet and relevance for core terms (Upper GI, robotic, London, etc.) |
| Page-specific metadata   | Home, Procedures, Contact, Research, Reviews, layout | Each section targets the right searches and has a clear snippet |
| Meta keywords            | Layout, Contact       | Thematic targeting; minor for Google, useful elsewhere |
| Canonical URLs           | Layout, Contact       | Consolidates signals on the correct URL |
| Open Graph / Twitter     | Layout, Contact       | Good-looking, on-brand links when shared |
| MedicalBusiness schema   | Layout (JSON-LD)      | Tells Google about practice, areas, specialties |
| Physician schema         | Layout (JSON-LD)      | Tells Google about the surgeon and hospitals |
| Organization schema      | Layout (JSON-LD)      | Links profile to external authority (ResearchGate, Top Doctors, etc.) |
| Sitemap                 | `app/sitemap.ts`     | Helps Google find and prioritise all main pages |
| robots.txt              | `app/robots.ts`      | Allows crawling, points to sitemap, blocks tech paths |
| Meta robots              | Layout                | Index and follow; full snippets and images for Googlebot |
| GSC verification        | Layout `<head>`       | Enables Search Console and sitemap submission |
| Favicon / Apple icon    | Layout                | Branding and trust in browser |
| lang + metadataBase     | Layout                | Correct language and domain for indexing |
| Publication metadata     | `research/publications/[slug]` | Each publication can rank with a unique title/description |
| About title/description | About page (client)   | Better About snippet; server-side meta would be stronger |

---

## What’s not in the sitemap yet

- **Publication URLs** (`/research/publications/[slug]`) are not currently added to the sitemap. Adding them (e.g. by generating entries from your publications data) would help Google discover and index each article.

---

This is the full set of SEO currently in place and how each part supports being found on Google and other platforms.
