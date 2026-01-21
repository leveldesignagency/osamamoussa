# Osama Moussa Website 2026

Next.js website for Osama Moussa - Consultant General Surgeon.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import the project in Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "Add New..." → "Project"
   - Import your Git repository
   - Vercel will automatically detect Next.js and configure the build settings

3. **Configure environment variables** (if needed)
   - Add any required environment variables in the Vercel dashboard

4. **Deploy!**
   - Click "Deploy" and Vercel will build and deploy your site
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **For production deployment**
   ```bash
   vercel --prod
   ```

The site is configured for Vercel deployment with `vercel.json`. Vercel will automatically:
- Detect Next.js framework
- Run `npm install` and `npm run build`
- Optimize images and assets
- Provide HTTPS and CDN
- Enable automatic deployments on git push

## Project Structure

- `/app` - Next.js App Router pages and layouts
- `/components` - React components (Header, Hero, etc.)
- `/public` - Static assets (images, logos)
- `package.json` - Dependencies and scripts

## Features

- Transparent header with logo, phone number, social icons, and hamburger menu
- Full-screen hero image
- Responsive design
- TypeScript support
- Tailwind CSS for styling


