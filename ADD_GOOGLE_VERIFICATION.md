# Add Google Search Console Verification to Wix DNS

## Your Google Verification TXT Record:

```
google-site-verification=AL_dAbT3HMo2JGmN4fEc8t7K_WM8wfIRYQyMJcC0w7w
```

## Step-by-Step Instructions:

### Step 1: Log into Wix
1. Go to [wix.com](https://www.wix.com)
2. Log into your account
3. Go to your site's dashboard

### Step 2: Go to DNS Settings
1. Navigate to **Settings** → **Domains** (or **DNS Settings**)
2. Find **"Manage DNS Records"** or **"DNS Settings"**

### Step 3: Add TXT Record
1. Click **"+ Add Record"** or **"Create record"**
2. Select **"TXT"** as the record type
3. Fill in the fields:
   - **Hostname:** Leave **EMPTY** (or enter `@` if required)
   - **Value:** `google-site-verification=AL_dAbT3HMo2JGmN4fEc8t7K_WM8wfIRYQyMJcC0w7w`
   - **TTL:** 1 Hour (or leave default)
4. Click **"Save"** or **"Create record"**

### Step 4: Verify in Google Search Console
1. Go back to [Google Search Console](https://search.google.com/search-console)
2. Click **"Verify"** button
3. Wait 1-2 minutes for DNS to propagate
4. If it fails, wait 5-10 minutes and try again

## Important Notes:

- **Keep the TXT record:** Don't delete it after verification - keep it permanently
- **DNS propagation:** Can take 5 minutes to 48 hours (usually 5-15 minutes)
- **Exact match:** Make sure the value is exactly as shown above (no extra spaces)

## Troubleshooting:

### If verification fails:
1. **Wait longer:** DNS can take up to 48 hours to fully propagate
2. **Check the record:** Make sure it's exactly: `google-site-verification=AL_dAbT3HMo2JGmN4fEc8t7K_WM8wfIRYQyMJcC0w7w`
3. **Check DNS propagation:** Use [whatsmydns.net](https://www.whatsmydns.net/#TXT/osamamoussa.co.uk) to see if the TXT record is live
4. **Try again:** Sometimes it just needs more time

### Check if TXT record is live:
1. Go to [whatsmydns.net](https://www.whatsmydns.net/#TXT/osamamoussa.co.uk)
2. Enter your domain: `osamamoussa.co.uk`
3. Select "TXT" record type
4. Check if the verification record appears

## After Verification:

Once verified, you can:
1. ✅ Submit your sitemap: `https://www.osamamoussa.co.uk/sitemap.xml`
2. ✅ Request indexing for important pages
3. ✅ Monitor your site's performance

## Quick Checklist:

- [ ] TXT record added to Wix DNS
- [ ] Hostname is empty (or `@`)
- [ ] Value is exactly: `google-site-verification=AL_dAbT3HMo2JGmN4fEc8t7K_WM8wfIRYQyMJcC0w7w`
- [ ] Clicked "Verify" in Google Search Console
- [ ] Verification successful
- [ ] Sitemap submitted
- [ ] Requested indexing for homepage

---

**Your TXT Record Value:**
```
google-site-verification=AL_dAbT3HMo2JGmN4fEc8t7K_WM8wfIRYQyMJcC0w7w
```
