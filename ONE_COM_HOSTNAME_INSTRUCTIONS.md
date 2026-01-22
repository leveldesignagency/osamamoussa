# Hostname Field Instructions for one.com

## Understanding the Hostname Field

The hostname field determines **which subdomain** the record applies to:
- **Empty/Blank** = Root domain (`osamamoussa.co.uk`)
- **`www`** = WWW subdomain (`www.osamamoussa.co.uk`)
- **`mail`** = Mail subdomain (`mail.osamamoussa.co.uk`)
- etc.

---

## For Root Domain A Record

**Hostname field:** Leave it **EMPTY** or **BLANK**
- Don't enter anything
- Don't enter "A" (that's just the tab name)
- Just leave it empty

**Will point to:** `216.198.79.1`

**Result:** This will point `osamamoussa.co.uk` to Vercel

---

## For WWW Subdomain

**Option A: Create CNAME (Recommended)**
1. Click the **"CNAME"** tab (not A tab)
2. **Hostname field:** Enter `www` (just the letters "www", nothing else)
3. **Will point to:** `037b3e5980f62d2a.vercel-dns-017.com`

**Option B: Create A Record (If CNAME not working)**
1. Stay on **"A"** tab
2. **Hostname field:** Enter `www` (just the letters "www", nothing else)
3. **Will point to:** `216.198.79.1`

**Result:** This will point `www.osamamoussa.co.uk` to Vercel

---

## Step-by-Step Process

### Step 1: Delete Old Root Domain A Record
1. Find the existing A record with value `osamamoussa.co.uk`
2. Turn off the green toggle switch (disable it)
3. Or delete it if there's a delete option

### Step 2: Create New Root Domain A Record
1. Make sure you're on the **"A"** tab
2. **Hostname:** Leave completely **EMPTY** (don't type anything)
3. **Will point to:** `216.198.79.1`
4. Click **"Create record"**

### Step 3: Delete Old WWW A Record
1. Find the existing A record with value `www.osamamoussa.co.uk`
2. Turn off the green toggle switch (disable it)
3. Or delete it if there's a delete option

### Step 4: Create New WWW Record
**Try CNAME first (Recommended):**
1. Click the **"CNAME"** tab
2. **Hostname:** Type `www` (just "www", no quotes, no dots)
3. **Will point to:** `037b3e5980f62d2a.vercel-dns-017.com`
4. Click **"Create record"**

**If CNAME doesn't work, use A:**
1. Stay on **"A"** tab
2. **Hostname:** Type `www` (just "www", no quotes, no dots)
3. **Will point to:** `216.198.79.1`
4. Click **"Create record"**

---

## Visual Guide

### Root Domain Record:
```
Tab: A
Hostname: [LEAVE EMPTY - DON'T TYPE ANYTHING]
Will point to: 216.198.79.1
```

### WWW Record:
```
Tab: CNAME (preferred) or A
Hostname: www
Will point to: 037b3e5980f62d2a.vercel-dns-017.com (if CNAME)
              OR
              216.198.79.1 (if A)
```

---

## Common Mistakes to Avoid

❌ **DON'T enter:** `A` in hostname (that's the tab name, not the hostname)
❌ **DON'T enter:** `osamamoussa.co.uk` in hostname (that's the full domain)
❌ **DON'T enter:** `.osamamoussa.co.uk` in hostname (don't include the domain part)
❌ **DON'T enter:** `@` in hostname (some systems use this, but one.com uses empty)

✅ **DO enter:** Nothing (empty) for root domain
✅ **DO enter:** `www` (just the subdomain name) for www

---

## Summary

- **Root domain:** Hostname = EMPTY, IP = `216.198.79.1`
- **WWW subdomain:** Hostname = `www`, Target = `037b3e5980f62d2a.vercel-dns-017.com` (CNAME) or `216.198.79.1` (A)

The "A" you see is just indicating you're on the A record tab. Clear the hostname field completely for the root domain record!
