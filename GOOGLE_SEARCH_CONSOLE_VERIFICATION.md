# Google Search Console Verification - Step by Step

## You're Seeing Two Options: "Domain" vs "URL Prefix"

Google Search Console gives you two verification options. Here's which one to choose:

---

## Option 1: Domain (Recommended for You)

**Choose this if:**
- ✅ You want to verify the entire domain (www and non-www)
- ✅ You have access to DNS settings (you do - in Wix)
- ✅ You want the simplest setup

**What it verifies:**
- `osamamoussa.co.uk`
- `www.osamamoussa.co.uk`
- `https://osamamoussa.co.uk`
- `http://osamamoussa.co.uk`

**How to verify:**
1. Select **"Domain"** option
2. Enter: `osamamoussa.co.uk` (without www or https)
3. Click "Continue"
4. Google will show you a **TXT record** to add to your DNS
5. Go to **Wix DNS settings** (since your nameservers are on Wix)
6. Add the TXT record Google provides
7. Click "Verify" in Google Search Console
8. Wait a few minutes for DNS to propagate

---

## Option 2: URL Prefix

**Choose this if:**
- You only want to verify one specific URL
- You prefer HTML file or meta tag verification
- You don't have DNS access (but you do, so this isn't needed)

**What it verifies:**
- Only the exact URL you enter (e.g., `https://www.osamamoussa.co.uk`)

**How to verify:**
1. Select **"URL prefix"** option
2. Enter: `https://www.osamamoussa.co.uk` (exact URL with https)
3. Choose verification method:
   - HTML file upload
   - HTML tag (add to your site)
   - DNS record (same as Domain option)

---

## ✅ RECOMMENDED: Use "Domain" Option

**Why?**
- Verifies your entire domain (all variations)
- One verification covers everything
- Uses DNS (which you have access to in Wix)
- Most comprehensive

---

## Step-by-Step: Domain Verification

### Step 1: In Google Search Console
1. Click **"Add Property"**
2. Select **"Domain"** (not URL prefix)
3. Enter: `osamamoussa.co.uk` (just the domain, no www, no https)
4. Click **"Continue"**

### Step 2: Get DNS Record
1. Google will show you a **TXT record** like:
   ```
   google-site-verification=abc123xyz789...
   ```
2. Copy this entire record

### Step 3: Add to Wix DNS
1. Log into **Wix**
2. Go to **DNS Settings** (Manage DNS Records)
3. Click **"+ Add Record"**
4. Select **"TXT"** record type
5. **Hostname:** Leave empty (or enter `@` if required)
6. **Value:** Paste the entire TXT record from Google
7. **TTL:** 1 Hour (or default)
8. Click **"Save"**

### Step 4: Verify
1. Go back to **Google Search Console**
2. Click **"Verify"**
3. Wait 1-2 minutes (DNS propagation)
4. If it fails, wait 5-10 minutes and try again

---

## Important Notes:

- **DNS propagation takes time:** Can take 5 minutes to 48 hours (usually 5-15 minutes)
- **Don't delete the TXT record:** Keep it in your DNS permanently
- **One verification covers all:** Domain verification covers www, non-www, http, and https

---

## Troubleshooting:

### If verification fails:
1. **Wait longer:** DNS can take up to 48 hours
2. **Check the TXT record:** Make sure it's exactly as Google provided
3. **Check DNS propagation:** Use [whatsmydns.net](https://www.whatsmydns.net) to see if the TXT record is live
4. **Try again:** Sometimes it just needs more time

### If you can't add TXT record in Wix:
- Contact Wix support
- Or use "URL prefix" option with HTML file upload instead

---

## After Verification:

Once verified, you can:
1. Submit your sitemap: `https://www.osamamoussa.co.uk/sitemap.xml`
2. Request indexing for important pages
3. Monitor your site's performance

---

## Quick Summary:

✅ **Choose:** "Domain" option  
✅ **Enter:** `osamamoussa.co.uk` (no www, no https)  
✅ **Add TXT record** to Wix DNS  
✅ **Wait 5-15 minutes**  
✅ **Click Verify** in Google Search Console  

That's it! 🎉
