# Specific DNS Instructions for one.com → Vercel Migration

## Your Vercel DNS Values:
- **A Record (IP):** `216.198.79.1`
- **CNAME Target:** `037b3e5980f62d2a.vercel-dns-017.com`

## Current DNS Records (DO NOT TOUCH THESE):
✅ **KEEP ALL OF THESE UNCHANGED:**
- `ed1._domainkey` (CNAME) - Email authentication
- `ed2._domainkey` (CNAME) - Email authentication  
- `rsa1._domainkey` (CNAME) - Email authentication
- `rsa2._domainkey` (CNAME) - Email authentication
- `MX` record for `osamamoussa.co.uk` - Email delivery
- Any other email-related records

## Records to MODIFY:

### 1. Root Domain A Record
**Current:**
- Type: `A`
- Hostname: (empty/blank - this is the root domain)
- Value: `osamamoussa.co.uk`

**Change to:**
- Type: `A`
- Hostname: (empty/blank)
- Value: `216.198.79.1` ← **Change this to Vercel's IP**

### 2. WWW Subdomain
**Current:**
- Type: `A`
- Hostname: `www`
- Value: `www.osamamoussa.co.uk`

**Change to (Option A - Recommended):**
- Type: `CNAME` ← **Change type from A to CNAME**
- Hostname: `www`
- Value: `037b3e5980f62d2a.vercel-dns-017.com` ← **Change to Vercel's CNAME**

**OR Option B (if one.com doesn't allow CNAME for www):**
- Type: `A`
- Hostname: `www`
- Value: `216.198.79.1` ← **Change to Vercel's IP**

---

## Step-by-Step in one.com:

### Step 1: Edit Root Domain A Record
1. Find the A record with **empty hostname** (root domain)
2. Click on it or the edit button
3. Change the value from `osamamoussa.co.uk` to `216.198.79.1`
4. Save

### Step 2: Edit WWW Subdomain
1. Find the A record with hostname `www`
2. Click on it or the edit button
3. **Change the type from `A` to `CNAME`** (if possible)
4. Change the value from `www.osamamoussa.co.uk` to `037b3e5980f62d2a.vercel-dns-017.com`
5. Save

**If one.com doesn't let you change A to CNAME:**
- Delete the A record for `www`
- Click "Create record"
- Select type: `CNAME`
- Hostname: `www`
- Value: `037b3e5980f62d2a.vercel-dns-017.com`
- Save

### Step 3: Verify Email Records Still Exist
After making changes, verify these are still present and active:
- ✅ All `_domainkey` CNAME records (ed1, ed2, rsa1, rsa2)
- ✅ MX record for root domain
- ✅ Any TXT records for SPF/DKIM/DMARC (if visible)

---

## Final DNS Configuration Should Look Like:

```
Type    Hostname    Value                                    Status
A       (empty)     216.198.79.1                             ✅ Active
CNAME   www         037b3e5980f62d2a.vercel-dns-017.com      ✅ Active
CNAME   ed1._domainkey  ed1._domainkey.osamamoussa.co.uk     ✅ Active (KEEP)
CNAME   ed2._domainkey  ed2._domainkey.osamamoussa.co.uk     ✅ Active (KEEP)
CNAME   rsa1._domainkey rsa1._domainkey.osamamoussa.co.uk   ✅ Active (KEEP)
CNAME   rsa2._domainkey rsa2._domainkey.osamamoussa.co.uk   ✅ Active (KEEP)
MX      (empty)     osamamoussa.co.uk                        ✅ Active (KEEP)
```

---

## Important Notes:

1. **The `_domainkey` CNAME records are for email authentication (DKIM)** - These MUST stay exactly as they are
2. **The MX record is for email delivery** - This MUST stay exactly as it is
3. **Only change the root A record and www record** - Everything else stays untouched
4. **DNS propagation takes 24-48 hours** - Be patient
5. **Test email after changes** - Send/receive test emails to ensure email still works

---

## After Making Changes:

1. **Wait 15-30 minutes** for initial propagation
2. **Test the website:**
   - Visit `http://osamamoussa.co.uk` (should redirect to HTTPS)
   - Visit `https://www.osamamoussa.co.uk`
3. **Test email:**
   - Send a test email TO an email address on the domain
   - Send a test email FROM an email address on the domain
4. **Check DNS propagation:**
   - Use [whatsmydns.net](https://www.whatsmydns.net)
   - Enter `osamamoussa.co.uk` and check A record
   - Should show `216.198.79.1` after propagation

---

## Troubleshooting:

### If website doesn't load:
- Wait longer (DNS can take 24-48 hours)
- Clear browser cache
- Try incognito mode
- Check [whatsmydns.net](https://www.whatsmydns.net) to see if DNS has propagated

### If email stops working:
- **IMMEDIATELY check** that all `_domainkey` CNAME records are still present
- **IMMEDIATELY check** that MX record is still present
- If missing, restore them from backup
- Contact one.com support if needed

### If one.com won't let you change A to CNAME:
- Use Option B: Keep www as A record pointing to `216.198.79.1`
- This will work fine, CNAME is just preferred

---

## Quick Checklist:

- [ ] Root domain A record changed to `216.198.79.1`
- [ ] WWW record changed to CNAME `037b3e5980f62d2a.vercel-dns-017.com` (or A record `216.198.79.1`)
- [ ] All `_domainkey` CNAME records still present and active
- [ ] MX record still present and active
- [ ] Website loads on both root and www domains
- [ ] Email sending works
- [ ] Email receiving works

---

**Domain:** osamamoussa.co.uk  
**Vercel IP:** 216.198.79.1  
**Vercel CNAME:** 037b3e5980f62d2a.vercel-dns-017.com
