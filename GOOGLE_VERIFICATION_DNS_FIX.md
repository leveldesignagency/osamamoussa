# Google Search Console Verification - DNS Fix

## The Problem:
Google is trying to verify via **DNS TXT record** (because you selected "Domain" verification), but it can't find the verification token. It only found your SPF record for email.

## Solution: Add TXT Record to Wix DNS

Since your nameservers are still pointing to Wix (for email), you need to add the verification TXT record there.

### Step 1: Get Your Verification Token
Your Google verification token is:
```
google-site-verification=AL_dAbT3HMo2JGmN4fEc8t7K_WM8wfIRYQyMJcC0w7w
```

### Step 2: Add to Wix DNS
1. **Log into Wix**
2. **Go to DNS Settings** (Manage DNS Records)
3. **Click "+ Add Record"**
4. **Select "TXT" record type**
5. **Fill in:**
   - **Hostname:** Leave **EMPTY** (or enter `@` if required)
   - **Value:** `google-site-verification=AL_dAbT3HMo2JGmN4fEc8t7K_WM8wfIRYQyMJcC0w7w`
   - **TTL:** 1 Hour (or default)
6. **Click "Save"**

### Step 3: Wait and Verify
1. **Wait 5-15 minutes** for DNS propagation
2. **Go back to Google Search Console**
3. **Click "Verify" again**
4. It should work now!

## Important Notes:

- ✅ **Keep the SPF record** - Don't delete it (it's for email)
- ✅ **Add the Google verification record** - It's separate from SPF
- ✅ **You can have multiple TXT records** - Both can exist together
- ⏰ **DNS propagation takes time** - Be patient (5-15 minutes usually)

## Alternative: Use URL Prefix Instead

If DNS is too complicated, you can:
1. **Delete the Domain property** in Google Search Console
2. **Add a new property** using **"URL prefix"** instead
3. **Choose "HTML tag" verification**
4. **Use the meta tag** we already added to your code

The meta tag is already in your `app/layout.tsx`, so URL prefix verification would work immediately!

## Which Method to Use?

**DNS (Domain):** 
- ✅ Verifies entire domain (www and non-www)
- ❌ Requires DNS access (you have it in Wix)
- ⏰ Takes 5-15 minutes

**URL Prefix (HTML tag):**
- ✅ Works immediately (meta tag already in code)
- ✅ No DNS changes needed
- ❌ Only verifies the exact URL you enter

**Recommendation:** Try DNS first (add TXT record to Wix). If it's too complicated, switch to URL prefix method.
