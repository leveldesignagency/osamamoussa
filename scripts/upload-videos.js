#!/usr/bin/env node

/**
 * Script to upload videos to Vercel Blob Storage
 *
 * Usage: node scripts/upload-videos.js
 *
 * Preferred (local):
 *   vercel link && vercel env pull
 *   (uses OIDC via BLOB_STORE_ID + VERCEL_OIDC_TOKEN)
 *
 * Fallback outside Vercel OIDC:
 *   export BLOB_READ_WRITE_TOKEN="…"
 */

const { put } = require("@vercel/blob");
const fs = require("fs");
const path = require("path");

const hasOidc = Boolean(process.env.BLOB_STORE_ID || process.env.VERCEL_OIDC_TOKEN);
const token = process.env.BLOB_READ_WRITE_TOKEN;

if (!hasOidc && !token) {
  console.error("❌ Blob auth not configured");
  console.log("\nPreferred:");
  console.log("1. vercel link");
  console.log("2. vercel env pull");
  console.log("3. npm run … / node scripts/upload-videos.js");
  console.log("\nFallback:");
  console.log('export BLOB_READ_WRITE_TOKEN="your-token-here"');
  process.exit(1);
}

const videos = [
  { localPath: "../Videos/Value 1.mp4", blobName: "Value 1.mp4" },
  { localPath: "../Videos/Values 2.mp4", blobName: "Values 2.mp4" },
  { localPath: "../Videos/Values 3.mp4", blobName: "Values 3.mp4" },
  { localPath: "../Videos/Values 4.mp4", blobName: "Values 4.mp4" },
];

async function uploadVideo(localPath, blobName) {
  const fullPath = path.join(__dirname, localPath);

  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  File not found: ${fullPath}`);
    return null;
  }

  try {
    console.log(`📤 Uploading ${blobName}...`);
    const file = fs.readFileSync(fullPath);
    const options = {
      access: "public",
      addRandomSuffix: false,
    };
    // Only pass token when OIDC is unavailable — explicit token overrides OIDC.
    if (!hasOidc && token) {
      options.token = token;
    }
    const blob = await put(blobName, file, options);

    console.log(`✅ Uploaded: ${blob.url}`);
    return blob.url;
  } catch (error) {
    console.error(`❌ Error uploading ${blobName}:`, error.message);
    return null;
  }
}

async function main() {
  console.log("🚀 Starting video uploads to Vercel Blob Storage...\n");
  if (hasOidc) {
    console.log("Auth: OIDC (BLOB_STORE_ID / VERCEL_OIDC_TOKEN)\n");
  } else {
    console.log("Auth: BLOB_READ_WRITE_TOKEN (legacy fallback)\n");
  }

  const results = [];
  for (const video of videos) {
    const url = await uploadVideo(video.localPath, video.blobName);
    if (url) results.push({ name: video.blobName, url });
  }

  console.log("\n📋 Upload summary:");
  results.forEach((r) => console.log(`- ${r.name}: ${r.url}`));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
