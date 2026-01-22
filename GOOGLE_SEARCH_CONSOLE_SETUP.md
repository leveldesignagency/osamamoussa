# Google Search Console Setup Guide

## Step 1: Verify Your Site Ownership

1. **Go to Google Search Console:**
   - Visit [https://search.google.com/search-console](https://search.google.com/search-console)
   - Sign in with your Google account

2. **Add Property:**
   - Click "Add Property"
   - Enter your domain: `osamamoussa.co.uk`
   - Choose "Domain" verification method (recommended)

3. **Verify Ownership:**
   - **Option A: DNS Verification (Recommended)**
     - Google will provide a TXT record to add to your DNS
     - Go to Wix DNS settings (since nameservers are on Wix)
     - Add the TXT record provided by Google
     - Click "Verify" in Google Search Console
   
   - **Option B: HTML File Upload**
     - Download the HTML file Google provides
     - Upload it to your website's root directory (`/public` folder)
     - Click "Verify"

   - **Option C: HTML Tag**
     - Copy the meta tag Google provides
     - Add it to your `app/layout.tsx` in the `<head>` section
     - Click "Verify"

## Step 2: Submit Your Sitemap

1. **Once verified, go to "Sitemaps" in the left sidebar**

2. **Submit your sitemap:**
   - Enter: `https://www.osamamoussa.co.uk/sitemap.xml`
   - Click "Submit"

3. **Google will automatically discover and index your pages**

## Step 3: Request Indexing (Optional but Recommended)

1. **Go to "URL Inspection" in the left sidebar**

2. **Enter your homepage URL:**
   - `https://www.osamamoussa.co.uk`
   - Click "Request Indexing"

3. **Repeat for important pages:**
   - `https://www.osamamoussa.co.uk/about`
   - `https://www.osamamoussa.co.uk/procedures`
   - `https://www.osamamoussa.co.uk/procedures/contact`
   - `https://www.osamamoussa.co.uk/reviews`

## Step 4: Monitor Your Site

1. **Check "Performance" tab:**
   - See which keywords are bringing traffic
   - Monitor click-through rates
   - Track impressions and clicks

2. **Check "Coverage" tab:**
   - See which pages are indexed
   - Fix any errors or warnings

3. **Check "Enhancements" tab:**
   - Verify structured data is working correctly
   - Check mobile usability

## Step 5: Optimize Based on Data

1. **Review search queries:**
   - See what people are searching for
   - Optimize content for high-performing keywords

2. **Fix any issues:**
   - Address crawl errors
   - Fix mobile usability issues
   - Improve page speed if needed

## Important Notes:

- **Indexing takes time:** It can take days or weeks for Google to fully index your site
- **Be patient:** SEO results take 3-6 months to show significant improvements
- **Keep content fresh:** Regularly update your site with new content
- **Monitor regularly:** Check Search Console weekly for issues

## Quick Checklist:

- [ ] Site verified in Google Search Console
- [ ] Sitemap submitted
- [ ] Homepage requested for indexing
- [ ] Important pages requested for indexing
- [ ] Structured data validated (check "Enhancements")
- [ ] Mobile usability checked
- [ ] No critical errors in "Coverage"

## Additional Resources:

- [Google Search Console Help](https://support.google.com/webmasters)
- [Google Search Central](https://developers.google.com/search)
- [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
