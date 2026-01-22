# Domain Migration Guide: Wix → Vercel (Keep Email on one.com)

## ⚠️ CRITICAL: Email Must Stay on one.com

**DO NOT DELETE OR MODIFY:**
- ❌ MX records (these handle email)
- ❌ TXT records for SPF, DKIM, DMARC (email authentication)
- ❌ Any other email-related records

**ONLY MODIFY:**
- ✅ A record (for root domain)
- ✅ CNAME record (for www subdomain)
- ✅ Any Wix-specific DNS records

---

## Step-by-Step Migration Process

### Step 1: Deploy to Vercel First

1. **Ensure your site is deployed on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your project if not already done
   - Deploy to production
   - Your site will be live at: `https://osamamoussa.vercel.app` (or similar)

### Step 2: Add Domain in Vercel

1. **In Vercel Dashboard:**
   - Go to your project → **Settings** → **Domains**
   - Click **"Add Domain"**
   - Enter your domain: `osamamoussa.co.uk` (or whatever the actual domain is)
   - Also add: `www.osamamoussa.co.uk` (if using www)

2. **Vercel will show you DNS records to add:**
   - Note down the IP addresses or CNAME targets Vercel provides
   - Example:
     - `A` record: `76.76.21.21` (for root domain)
     - `CNAME` record: `cname.vercel-dns.com` (for www)

### Step 3: Access one.com DNS Settings

1. **Log into one.com control panel:**
   - Go to [one.com](https://www.one.com)
   - Log in with your client's credentials
   - Navigate to **Domain Settings** or **DNS Management**

2. **Find DNS Records:**
   - Look for "DNS Settings", "DNS Management", or "Advanced DNS"
   - You should see a list of current DNS records

### Step 4: Document Current DNS Records (IMPORTANT!)

**Before making any changes, take a screenshot or write down ALL current records:**

```
Example of what you might see:

Type    Name    Value                          TTL
A       @       185.230.63.107                 3600
CNAME   www     wixdns.net                     3600
MX      @       mail.one.com                   3600
MX      @       mail2.one.com                  3600
TXT     @       v=spf1 include:one.com ~all    3600
TXT     @       (DKIM record)                  3600
TXT     @       (DMARC record)                  3600
```

**CRITICAL:** Keep a backup of all records, especially MX and TXT records!

### Step 5: Update Only Web DNS Records

**ONLY modify these records:**

#### For Root Domain (osamamoussa.co.uk):
- **Find the A record** pointing to Wix (e.g., `185.230.63.107`)
- **Change it** to Vercel's A record IP (from Step 2)
- **OR** if Vercel provides a CNAME for root, use that instead

#### For WWW Subdomain (www.osamamoussa.co.uk):
- **Find the CNAME record** pointing to Wix (e.g., `wixdns.net`)
- **Change it** to Vercel's CNAME target (from Step 2, e.g., `cname.vercel-dns.com`)

#### Remove Wix-Specific Records:
- Remove any other Wix DNS records (but NOT email records!)

### Step 6: Verify Email Records Are Intact

**Double-check these records are still present and unchanged:**

✅ **MX Records** (should look like):
```
Type: MX
Name: @
Value: mail.one.com (priority 10)
Value: mail2.one.com (priority 20)
```

✅ **TXT Records for Email** (should look like):
```
Type: TXT
Name: @
Value: v=spf1 include:one.com ~all
Value: (DKIM record from one.com)
Value: (DMARC record if present)
```

**If any email records are missing, restore them immediately!**

### Step 7: Wait for DNS Propagation

1. **DNS changes can take 24-48 hours to fully propagate**
2. **Check propagation status:**
   - Use [whatsmydns.net](https://www.whatsmydns.net)
   - Enter your domain and check A/CNAME records
   - Wait until they show Vercel's IPs

3. **Test your site:**
   - Visit `http://osamamoussa.co.uk` (should redirect to HTTPS)
   - Visit `https://www.osamamoussa.co.uk`
   - Both should show your Vercel-deployed site

### Step 8: Verify Email Still Works

**CRITICAL TEST:**
1. Send a test email TO your client's domain email address
2. Send a test email FROM your client's domain email address
3. If email doesn't work, check MX records immediately

---

## Common DNS Record Configurations

### Option A: Root Domain with A Record
```
Type    Name    Value              TTL
A       @       76.76.21.21        3600
CNAME   www     cname.vercel-dns.com 3600
MX      @       mail.one.com        3600
MX      @       mail2.one.com       3600
TXT     @       v=spf1 include:one.com ~all 3600
```

### Option B: Root Domain with CNAME (if supported)
```
Type    Name    Value              TTL
CNAME   @       cname.vercel-dns.com 3600
CNAME   www     cname.vercel-dns.com 3600
MX      @       mail.one.com        3600
MX      @       mail2.one.com       3600
TXT     @       v=spf1 include:one.com ~all 3600
```

**Note:** Some DNS providers don't allow CNAME on root domain. Use A record if needed.

---

## Troubleshooting

### Issue: Site not loading after DNS change
- **Wait 24-48 hours** for DNS propagation
- Clear your browser cache
- Try incognito/private browsing
- Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net)

### Issue: Email stopped working
- **IMMEDIATELY check MX records** in one.com DNS settings
- Restore MX records if they were accidentally deleted
- Contact one.com support if needed

### Issue: SSL Certificate errors
- Vercel automatically provisions SSL certificates
- Wait 24-48 hours after DNS propagation
- If still issues, check Vercel dashboard → Domains → SSL status

### Issue: www redirect not working
- Ensure both root and www are added in Vercel
- Vercel automatically handles www redirects

---

## Pre-Migration Checklist

- [ ] Site is deployed and working on Vercel
- [ ] Domain added in Vercel dashboard
- [ ] Vercel DNS records noted down
- [ ] Current DNS records documented (screenshot/backup)
- [ ] MX records identified and will NOT be touched
- [ ] TXT records for email identified and will NOT be touched
- [ ] Client informed of potential 24-48 hour downtime during migration
- [ ] Backup plan ready (can revert DNS if needed)

## Post-Migration Checklist

- [ ] DNS records updated (only A/CNAME for web)
- [ ] MX records verified intact
- [ ] TXT records for email verified intact
- [ ] Site loads on root domain
- [ ] Site loads on www subdomain
- [ ] HTTPS working (SSL certificate active)
- [ ] Email sending works
- [ ] Email receiving works
- [ ] All pages load correctly
- [ ] No broken links

---

## Quick Reference: What to Change

| Record Type | Action | Purpose |
|------------|--------|---------|
| A (@) | **CHANGE** to Vercel IP | Web traffic |
| CNAME (www) | **CHANGE** to Vercel CNAME | Web traffic |
| MX | **KEEP UNCHANGED** | Email |
| TXT (SPF) | **KEEP UNCHANGED** | Email authentication |
| TXT (DKIM) | **KEEP UNCHANGED** | Email authentication |
| TXT (DMARC) | **KEEP UNCHANGED** | Email authentication |
| Any Wix records | **DELETE** | No longer needed |

---

## Support Contacts

- **Vercel Support:** [vercel.com/support](https://vercel.com/support)
- **one.com Support:** [one.com/support](https://www.one.com/en/support)
- **DNS Propagation Check:** [whatsmydns.net](https://www.whatsmydns.net)

---

## Important Notes

1. **DNS propagation takes time** - Be patient (24-48 hours)
2. **Email is critical** - Never delete MX or email TXT records
3. **Test thoroughly** - Verify both web and email after migration
4. **Keep backups** - Document all DNS records before changes
5. **Vercel handles SSL** - No need to configure certificates manually

---

**Last Updated:** 2025-01-27
**Domain:** osamamoussa.co.uk (update if different)
