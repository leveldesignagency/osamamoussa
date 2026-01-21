# Video Upload Guide - Free Video Hosting Options

## Option 1: Vercel Blob Storage (Easiest - Already Set Up)

**Free Tier**: 1GB storage, 100GB bandwidth/month
- ✅ **No compression**: Full quality videos with audio
- ✅ **Fast CDN**: Global content delivery  
- ✅ **Easy integration**: Works seamlessly with Vercel
- ✅ **Total video size**: ~609MB (fits in free tier!)

## Option 2: Cloudflare R2 (More Storage)

**Free Tier**: 10GB storage, 1M operations/month
- ✅ **More storage**: 10GB vs 1GB
- ✅ **No egress fees**: Unlimited bandwidth
- ✅ **S3-compatible**: Easy to use

---

## Quick Start: Vercel Blob Storage

## Step 1: Get Your Vercel Blob Token

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: `osamamoussa`
3. Go to **Settings** → **Storage** → **Create Database/Storage**
4. Select **Blob Storage**
5. Create a new blob store (or use existing)
6. Go to **Settings** → **Environment Variables**
7. Add a new variable:
   - **Name**: `BLOB_READ_WRITE_TOKEN`
   - **Value**: Copy from Blob Storage settings (or generate new token)

## Step 2: Upload Videos Using Script

### Option A: Using the Upload Script (Recommended)

1. **Set the token locally** (for one-time use):
   ```bash
   export BLOB_READ_WRITE_TOKEN="your-token-here"
   ```

2. **Run the upload script**:
   ```bash
   cd "Website 2026"
   node scripts/upload-videos.js
   ```

3. **Copy the URLs** from the output and update `components/ValuesSection.tsx`

### Option B: Using Vercel Dashboard

1. Go to your Vercel project dashboard
2. Navigate to **Storage** → **Blob**
3. Click **Upload** and select your video files
4. Copy the public URLs
5. Update `components/ValuesSection.tsx` with the new URLs

### Option C: Using Vercel CLI

```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Login to Vercel
vercel login

# Upload videos (you'll need to use the blob API)
# Or use the script provided above
```

## Step 3: Update Component

After uploading, update `components/ValuesSection.tsx`:

```typescript
const values = [
  {
    video: "https://your-blob-url.vercel-storage.com/Value%201.mp4",
    title: "Exceptional Expertise in Upper GI Surgery",
    // ...
  },
  // ... other videos
];
```

## Step 4: Test Locally

1. Make sure videos are accessible via the URLs
2. Test playback in your browser
3. Verify audio is working

## Troubleshooting

### Videos not uploading?
- Check file paths in `scripts/upload-videos.js`
- Verify `BLOB_READ_WRITE_TOKEN` is set correctly
- Check file sizes (free tier has 1GB limit)

### Videos not playing?
- Ensure URLs are publicly accessible (`access: 'public'`)
- Check CORS settings if needed
- Verify video format is supported (MP4/H.264 recommended)

### Need more storage?
- Vercel Blob paid plans start at $0.15/GB/month
- Or consider Cloudflare R2 (free tier: 10GB storage, 1M operations/month)

## Alternative: Cloudflare R2 (Free Option)

If you need more storage, Cloudflare R2 offers:
- 10GB free storage
- 1M operations/month free
- No egress fees

Would you like me to set up Cloudflare R2 instead?
