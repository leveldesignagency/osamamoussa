# Submit Sitemap to Google Search Console

## Your Sitemap URL

Your Next.js sitemap is automatically generated at:
```
https://www.osamamoussa.co.uk/sitemap.xml
```

## How to Submit in Google Search Console

1. **Go to Google Search Console**
   - Navigate to: https://search.google.com/search-console
   - Make sure you're on the `osamamoussa.co.uk` property

2. **Open the Sitemaps Section**
   - In the left sidebar, click **"Indexing"** (it should expand)
   - Click **"Sitemaps"** under Indexing

3. **Add Your Sitemap**
   - You'll see a text input field that says "Add a new sitemap"
   - Enter: `sitemap.xml`
   - **Important:** Only enter `sitemap.xml` (NOT the full URL)
   - Click **"Submit"**

4. **Verify It's Working**
   - After submission, you should see your sitemap listed
   - It will show status: "Success" (may take a few minutes)
   - Google will show how many URLs were discovered

## What's in Your Sitemap?

Your sitemap (`app/sitemap.ts`) includes:
- `/` (Homepage) - Priority: 1.0
- `/about` - Priority: 0.8
- `/procedures` - Priority: 0.9
- `/procedures/contact` - Priority: 0.9
- `/research` - Priority: 0.7
- `/reviews` - Priority: 0.8
- `/terms-and-conditions` - Priority: 0.3
- `/privacy-policy` - Priority: 0.3

## Next Steps After Submission

1. **Wait for Processing** (24-48 hours)
   - Google will crawl your sitemap
   - You'll see indexing status update

2. **Check Indexing Status**
   - Go to **Indexing > Pages** in Search Console
   - See which pages are indexed

3. **Request Indexing for Important Pages** (Optional)
   - Go to **URL Inspection** in Search Console
   - Enter important URLs (homepage, contact page)
   - Click **"Request Indexing"**

## Troubleshooting

**If sitemap shows "Couldn't fetch":**
- Wait 5-10 minutes and try again
- Make sure your site is live and accessible
- Check that `https://www.osamamoussa.co.uk/sitemap.xml` loads in your browser

**If URLs aren't being indexed:**
- This is normal - Google takes time to crawl
- Make sure your pages have good content
- Check for any "noindex" tags (you don't have any)
- Wait 1-2 weeks for full indexing

## Pro Tip

After submitting the sitemap, you can also:
- Submit individual important pages via **URL Inspection**
- Check **Indexing > Pages** to see indexing status
- Monitor **Performance** tab for search impressions (takes a few days)

Your sitemap is ready to go! 🚀
