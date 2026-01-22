# Safe DNS Update Approach - Wix

## ✅ Safer Method: Add First, Then Delete

Instead of deleting first, we'll **add the new record first**, then delete the old ones. This is safer!

---

## Step-by-Step Safe Approach:

### Step 1: Add NEW A Record First (Safest!)

1. **Go to "Manage DNS Records" in Wix**
2. **Click "+ Add Record"**
3. **Select "A (Host)"**
4. **Fill in:**
   - **Host name:** `osamamoussa.co.uk` (or leave empty if it auto-fills)
   - **Value:** `216.198.79.1` (Vercel's IP)
   - **TTL:** 1 Hour (or leave default)
5. **Click "Save" or "Add"**

**Result:** You'll now have **4 A records** (3 old Wix ones + 1 new Vercel one)

**This is safe because:**
- ✅ Your site won't go offline (old records still work)
- ✅ New record is added and working
- ✅ You can test before deleting old ones

---

### Step 2: Edit CNAME Record

1. **Find the CNAME record** with value `cdn1.wixdns.net`
2. **Click the "..." menu** → **"Edit"**
3. **Change the Value** from `cdn1.wixdns.net` to: `037b3e5980f62d2a.vercel-dns-017.com`
4. **Keep Host name as:** `www.osamamoussa.co.uk` (or whatever it shows)
5. **Click "Save"**

**This is safe because:**
- ✅ You're just editing, not deleting
- ✅ Wix allows editing CNAME records
- ✅ No risk of going offline

---

### Step 3: Wait and Test (15-30 minutes)

1. **Wait 15-30 minutes** for DNS to propagate
2. **Test your site:**
   - Visit `https://osamamoussa.co.uk`
   - Visit `https://www.osamamoussa.co.uk`
   - Check if they load (might be slow or inconsistent with 4 A records, but should work)
3. **Check Vercel:**
   - Go to Vercel dashboard → Settings → Domains
   - Click "Refresh" on each domain
   - See if status improves

---

### Step 4: Delete Old A Records (After Testing)

**Only after confirming the new A record is working:**

1. **Delete the 3 old A records:**
   - `185.230.63.171`
   - `185.230.63.186`
   - `185.230.63.107`
   - Click "..." → "Delete" on each one

2. **Verify you now have only 1 A record:**
   - Should be: `osamamoussa.co.uk` → `216.198.79.1`

**This is safe because:**
- ✅ New record is already working
- ✅ You've tested it
- ✅ Site won't go offline (new record is active)

---

## Alternative: Edit Instead of Delete

**If Wix allows editing A records** (check if there's an "Edit" option):

1. **Click "..." on one of the 3 A records**
2. **If "Edit" is available:**
   - Click "Edit"
   - Change Value from `185.230.63.171` (or whichever) to `216.198.79.1`
   - Save
3. **Delete the other 2 A records**

**This is even safer** because you're replacing one record at a time!

---

## Final Configuration Should Be:

```
A Records:
- osamamoussa.co.uk → 216.198.79.1 ✅ (1 record only)

CNAME Records:
- www.osamamoussa.co.uk → 037b3e5980f62d2a.vercel-dns-017.com ✅

MX Records (UNCHANGED):
- All 5 Google MX records ✅

TXT Records (UNCHANGED):
- SPF record for Google ✅
```

---

## Why This Approach is Safer:

1. ✅ **Add first** - New record is active before deleting old ones
2. ✅ **Test before deleting** - Verify it works before removing old records
3. ✅ **No downtime** - Site stays online throughout the process
4. ✅ **Easy rollback** - If something goes wrong, old records are still there

---

## Timeline:

1. **Now:** Add new A record + Edit CNAME
2. **Wait 15-30 minutes:** DNS propagation
3. **Test:** Check if site loads and Vercel recognizes it
4. **Then:** Delete old A records (only after confirming it works)

---

## If Something Goes Wrong:

- **If site goes offline:** The old A records are still there, so you can wait for DNS to propagate back
- **If Vercel doesn't recognize:** Wait longer (DNS can take up to 48 hours)
- **If email stops working:** Check MX records are still there (they should be)

---

## Summary:

**Safest approach:**
1. ✅ Add new A record first (don't delete old ones yet)
2. ✅ Edit CNAME record
3. ✅ Wait 15-30 minutes and test
4. ✅ Then delete old A records

**This way your site stays online the whole time!**
