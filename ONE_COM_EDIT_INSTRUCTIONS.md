# How to Edit DNS Records in one.com

## ⚠️ IMPORTANT: EDIT Existing Records, Don't Create New Ones!

Looking at your screenshot, you need to **EDIT** the two A records that are already there.

---

## Step 1: Edit the Root Domain A Record

1. **Find the A record** with value `osamamoussa.co.uk` (the first one in your list)
2. **Click on it** or look for an **Edit** button/icon on that row
3. **Change the value** from `osamamoussa.co.uk` to: `216.198.79.1`
4. **Save** the changes

**What you're changing:**
- Type: `A` (keep as A)
- Value: `osamamoussa.co.uk` → **Change to:** `216.198.79.1`

---

## Step 2: Edit the WWW A Record

1. **Find the A record** with value `www.osamamoussa.co.uk` (the second one in your list)
2. **Click on it** or look for an **Edit** button/icon on that row
3. **You have two options:**

### Option A: Change to CNAME (Recommended)
- **Change the Type** from `A` to `CNAME`
- **Change the value** from `www.osamamoussa.co.uk` to: `037b3e5980f62d2a.vercel-dns-017.com`
- **Save**

### Option B: Keep as A Record (If CNAME not allowed)
- **Keep Type as:** `A`
- **Change the value** from `www.osamamoussa.co.uk` to: `216.198.79.1`
- **Save**

---

## What NOT to Touch (Keep These Exactly As They Are):

✅ **DO NOT EDIT these records:**
- `ed1._domainkey.osamamoussa.co.uk` (CNAME) - Email authentication
- `ed2._domainkey.osamamoussa.co.uk` (CNAME) - Email authentication
- `rsa1._domainkey.osamamoussa.co.uk` (CNAME) - Email authentication
- `rsa2._domainkey.osamamoussa.co.uk` (CNAME) - Email authentication
- `osamamoussa.co.uk` (MX) - Email delivery

**Just leave these alone - don't click on them at all!**

---

## How to Find the Edit Button

In one.com's interface:
- Look for a **pencil icon** ✏️ or **edit icon** on each row
- Or **click directly on the record** - it might open an edit dialog
- Or look for a **three-dot menu** (⋯) on the right side of each row
- The green toggle switch is just to enable/disable - you need to find the edit option

---

## After Editing:

1. **Verify the changes:**
   - First A record should show: `216.198.79.1`
   - Second record (www) should show: `037b3e5980f62d2a.vercel-dns-017.com` (if CNAME) or `216.198.79.1` (if A)

2. **Make sure all email records are still there:**
   - All 4 `_domainkey` CNAME records should still be visible
   - The MX record should still be visible
   - All should have green toggles (active)

3. **Wait 15-30 minutes** for DNS to propagate

4. **Test:**
   - Visit `https://osamamoussa.co.uk`
   - Visit `https://www.osamamoussa.co.uk`
   - Send a test email to verify email still works

---

## If You Can't Find Edit Button:

1. **Try clicking directly on the record row** - it might open an edit modal
2. **Look for a menu icon** (three dots or hamburger menu) on the right
3. **Check if there's a "Edit" link** below or next to the record
4. **Try right-clicking** on the record (if supported)

If you still can't find how to edit, you might need to:
- **Delete the old A record** and **create a new one** with the correct value
- But be VERY careful - only delete the two A records, never touch the CNAME or MX records!

---

## Summary:

**EDIT these 2 records:**
1. A record: `osamamoussa.co.uk` → Change value to `216.198.79.1`
2. A record: `www.osamamoussa.co.uk` → Change to CNAME `037b3e5980f62d2a.vercel-dns-017.com` (or A record `216.198.79.1`)

**LEAVE ALONE:**
- All 4 `_domainkey` CNAME records
- The MX record

---

**Need help finding the edit button?** Take another screenshot of what happens when you click on one of the A records, and I can guide you further!
