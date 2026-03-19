# Get Google to index the site and submit the sitemap

The sitemap is **already built** and live. You just need to tell Google about it in Search Console.

---

## 1. Sitemap is already done (on the site)

- **URL:** `https://www.osamamoussa.co.uk/sitemap.xml`
- **Contents:** Homepage, About, Procedures hub, all 14 procedure pages, Contact, Research, all publication pages, Reviews, Terms, Privacy. Each has priority and change frequency.
- **robots.txt** already points Google to it: `sitemap: https://www.osamamoussa.co.uk/sitemap.xml`

So the sitemap is “done” on your side. The remaining step is **submitting it in Google Search Console** so Google crawls and indexes the site.

---

## 2. Get Google to index the site – steps

### Step 1: Open Google Search Console

- Go to [search.google.com/search-console](https://search.google.com/search-console).
- Sign in with the Google account that owns or will own the property.

### Step 2: Add the property (if not already added)

- Click **Add property**.
- Choose **URL prefix** and enter: `https://www.osamamoussa.co.uk`
- Click **Continue**.

### Step 3: Verify ownership

- The site already has the **HTML tag** method in place (meta tag in the layout).
- In Search Console, pick **HTML tag** and copy the tag they show.
- **If it matches** what’s in your site (`content="AL_dAbT3HMo2JGmN4fEc8t7K_WM8wfIRYQyMJcC0w7w"` or similar), click **Verify**.
- **If they give a different tag**, update the meta tag in `app/layout.tsx` (search for `google-site-verification`) with the new `content` value, deploy, then click **Verify**.

### Step 4: Submit the sitemap

- In the left menu, go to **Sitemaps**.
- Under **Add a new sitemap**, enter: `sitemap.xml`  
  (so the full URL is `https://www.osamamoussa.co.uk/sitemap.xml`).
- Click **Submit**.

Google will then crawl the sitemap and start indexing the URLs. This can take a few hours to a few days.

### Step 5 (optional): Ask for indexing of key pages

- Go to **URL Inspection** (left menu).
- Paste a URL, e.g. `https://www.osamamoussa.co.uk` or `https://www.osamamoussa.co.uk/procedures/robotic-surgery`.
- Click **Request indexing** if you want that page prioritised.

---

## 3. Check that it’s working

- **Sitemaps:** In Search Console → Sitemaps, you should see `sitemap.xml` with status “Success” and a count of discovered URLs.
- **Coverage / Pages:** After a while, **Coverage** (or **Pages**) will show how many URLs are indexed.
- **Search:** In Google, try `site:www.osamamoussa.co.uk` to see which pages are in the index.

---

## Summary

| What | Status |
|------|--------|
| Sitemap built and live | Done – `https://www.osamamoussa.co.uk/sitemap.xml` |
| robots.txt points to sitemap | Done |
| You need to do | Add property in Search Console (if needed), verify, then submit `sitemap.xml` under Sitemaps |

You’re not selling a merchant; this is a consultant surgeon site. GMC = **General Medical Council** (UK doctor regulator). Adding a GMC number is optional for extra trust and can be skipped if you prefer.
