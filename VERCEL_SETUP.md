# Vercel Deployment Setup Guide

## Quick Start - Deploy to Vercel

Your code is now on GitHub at: `https://github.com/leveldesignagency/osamamoussa.git`

### Step 1: Sign in to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account (recommended for automatic deployments)

### Step 2: Import Your Project

1. Click **"Add New..."** → **"Project"**
2. Click **"Import Git Repository"**
3. Search for `leveldesignagency/osamamoussa` or paste the GitHub URL
4. Click **"Import"**

### Step 3: Configure Project Settings

Vercel will auto-detect Next.js, but verify these settings:

- **Framework Preset:** Next.js (auto-detected)
- **Root Directory:** `Website 2026` (if needed, or leave as root)
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install` (auto-detected)

**Important:** If your project is in a subdirectory (`Website 2026`), set:
- **Root Directory:** `Website 2026`

### Step 4: Environment Variables (if needed)

Add any environment variables in the Vercel dashboard:
- Go to **Settings** → **Environment Variables**
- Add variables like:
  - `NEXT_PUBLIC_SITE_URL` = `https://www.osamamoussa.co.uk`

### Step 5: Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (usually 1-2 minutes)
3. Your site will be live at: `https://osamamoussa.vercel.app` (or your custom domain)

### Step 6: Custom Domain (Optional)

1. Go to **Settings** → **Domains**
2. Add your domain: `www.osamamoussa.co.uk`
3. Follow Vercel's DNS configuration instructions
4. Vercel will automatically provision SSL certificates

## Automatic Deployments

Once connected:
- **Every push to `main` branch** → Automatic production deployment
- **Pull requests** → Preview deployments (for testing)
- **All deployments** → Automatic HTTPS and CDN

## Project Configuration

Your `vercel.json` is already configured:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

## Troubleshooting

### If build fails:
1. Check the build logs in Vercel dashboard
2. Ensure `package.json` has all dependencies
3. Verify Node.js version (Vercel uses Node 18+ by default)

### If Root Directory is needed:
- In Vercel project settings, set **Root Directory** to `Website 2026`

### To update deployment:
- Just push to GitHub: `git push origin main`
- Vercel will automatically redeploy

## Vercel CLI (Alternative Method)

If you prefer CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (from project root)
cd "Website 2026"
vercel

# Deploy to production
vercel --prod
```

## Next Steps

1. ✅ Code is on GitHub
2. ⏭️ Import to Vercel (follow steps above)
3. ⏭️ Configure custom domain (optional)
4. ⏭️ Set up environment variables (if needed)

Your site will be live and automatically update on every GitHub push!
