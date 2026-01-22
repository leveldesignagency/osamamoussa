# Update DNS Records in Wix (Correct Location)

## ✅ Important: Edit DNS in Wix, NOT one.com!

Since your nameservers are pointing to Wix (`ns8.wixdns.net` and `ns9.wixdns.net`), **all DNS changes must be made in Wix**. Changes in one.com are being ignored.

---

## Step-by-Step: Update DNS in Wix

### Step 1: Update A Records (Root Domain)

1. **Go to Wix DNS settings** (the "Manage DNS Records" page you showed me)
2. **Find the A records** with hostname `osamamoussa.co.uk`
3. **You have 3 A records** - you need to **DELETE all 3** and create 1 new one:
   - Click the "..." menu on each of the 3 A records
   - Click "Delete" on each one
   - Delete all 3: `185.230.63.171`, `185.230.63.186`, `185.230.63.107`

4. **Create NEW A record:**
   - Click "+ Add Record"
   - Select "A (Host)"
   - **Host name:** `osamamoussa.co.uk` (or just leave empty if it auto-fills)
   - **Value:** `216.198.79.1` (Vercel's IP)
   - **TTL:** 1 Hour (or leave default)
   - Click "Save" or "Add"

**Result:** You should have **1 A record** pointing to `216.198.79.1`

---

### Step 2: Update CNAME Record (WWW)

1. **Find the existing CNAME record** with hostname `www.osamamoussa.co.uk`
2. **Click the "..." menu** on that record
3. **Click "Edit"**
4. **Change the Value** from `cdn1.wixdns.net` to: `037b3e5980f62d2a.vercel-dns-017.com`
5. **Keep Host name as:** `www.osamamoussa.co.uk` (or just `www` if that's what it shows)
6. Click "Save"

**OR if you prefer to delete and recreate:**
1. Delete the existing CNAME (`cdn1.wixdns.net`)
2. Click "+ Add Record"
3. Select "CNAME (Aliases)"
4. **Host name:** `www.osamamoussa.co.uk` (or just `www`)
5. **Value:** `037b3e5980f62d2a.vercel-dns-017.com`
6. Click "Save"

**Result:** You should have **1 CNAME record** pointing to Vercel

---

### Step 3: Verify MX Records (DO NOT TOUCH!)

✅ **Check that MX records are still there:**
- `aspmx.l.google.com` (Priority 10)
- `alt1.aspmx.l.google.com` (Priority 20)
- `alt2.aspmx.l.google.com` (Priority 30)
- `alt3.aspmx.l.google.com` (Priority 40)
- `alt4.aspmx.l.google.com` (Priority 50)

**DO NOT DELETE OR MODIFY THESE!** They're for Google Workspace email.

---

### Step 4: Verify TXT Records (DO NOT TOUCH!)

✅ **Check that SPF record is still there:**
- `v=spf1 include:spf.google.com...`

**DO NOT DELETE OR MODIFY THIS!** It's for email authentication.

---

## Final DNS Configuration in Wix Should Be:

```
A Records:
- osamamoussa.co.uk → 216.198.79.1 ✅

CNAME Records:
- www.osamamoussa.co.uk → 037b3e5980f62d2a.vercel-dns-017.com ✅

MX Records (KEEP AS IS):
- aspmx.l.google.com (Priority 10) ✅
- alt1.aspmx.l.google.com (Priority 20) ✅
- alt2.aspmx.l.google.com (Priority 30) ✅
- alt3.aspmx.l.google.com (Priority 40) ✅
- alt4.aspmx.l.google.com (Priority 50) ✅

TXT Records (KEEP AS IS):
- v=spf1 include:spf.google.com... ✅
```

---

## After Making Changes:

1. **Wait 15-30 minutes** for DNS propagation
2. **Go to Vercel dashboard** → Settings → Domains
3. **Click "Refresh"** button next to each domain
4. **Check status** - should show "Valid Configuration"

---

## Why This Will Work:

- ✅ Nameservers are already on Wix (no need to change)
- ✅ DNS changes in Wix will actually take effect
- ✅ Email will continue working (MX records stay the same)
- ✅ Website will point to Vercel (new A and CNAME records)

---

## Important Notes:

1. **Don't edit DNS in one.com** - it won't work because nameservers are on Wix
2. **Don't change nameservers** - they're already correct for Wix
3. **Don't touch MX or TXT records** - they're for Google email
4. **Wait for propagation** - DNS changes take 15-30 minutes (sometimes up to 48 hours)

---

## Troubleshooting:

### If Vercel still shows "Invalid Configuration" after 30 minutes:
1. **Double-check** A record points to `216.198.79.1`
2. **Double-check** CNAME points to `037b3e5980f62d2a.vercel-dns-017.com`
3. **Verify** you only have 1 A record (not 3)
4. **Check DNS propagation:** [whatsmydns.net](https://www.whatsmydns.net)
   - A record for `osamamoussa.co.uk` should show `216.198.79.1`
   - CNAME for `www.osamamoussa.co.uk` should show the Vercel CNAME

### If email stops working:
- **IMMEDIATELY check** MX records are still present in Wix
- **IMMEDIATELY check** TXT/SPF record is still present
- If missing, restore them from backup or contact support

---

## Summary:

**Edit DNS in Wix:**
1. Delete 3 old A records, create 1 new A record → `216.198.79.1`
2. Edit CNAME record → `037b3e5980f62d2a.vercel-dns-017.com`
3. Keep all MX and TXT records unchanged
4. Wait 15-30 minutes
5. Check Vercel dashboard

**Don't touch:**
- Nameservers (already correct)
- MX records (for Google email)
- TXT records (for email authentication)
- one.com DNS (being ignored anyway)
