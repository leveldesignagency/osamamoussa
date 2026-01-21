#!/usr/bin/env node

/**
 * Script to upload videos to Vercel Blob Storage
 * 
 * Usage: node scripts/upload-videos.js
 * 
 * Make sure to set BLOB_READ_WRITE_TOKEN in your environment variables
 * You can get this from: Vercel Dashboard > Your Project > Settings > Environment Variables
 */

const { put } = require('@vercel/blob');
const fs = require('fs');
const path = require('path');

const BLOB_READ_WRITE_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;

if (!BLOB_READ_WRITE_TOKEN) {
  console.error('❌ BLOB_READ_WRITE_TOKEN environment variable is not set');
  console.log('\nTo get your token:');
  console.log('1. Go to Vercel Dashboard > Your Project > Settings > Environment Variables');
  console.log('2. Add BLOB_READ_WRITE_TOKEN with your Vercel Blob token');
  console.log('3. Or run: export BLOB_READ_WRITE_TOKEN="your-token-here"');
  process.exit(1);
}

const videos = [
  { localPath: '../Videos/Value 1.mp4', blobName: 'Value 1.mp4' },
  { localPath: '../Videos/Values 2.mp4', blobName: 'Values 2.mp4' },
  { localPath: '../Videos/Values 3.mp4', blobName: 'Values 3.mp4' },
  { localPath: '../Videos/Values 4.mp4', blobName: 'Values 4.mp4' },
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
    const blob = await put(blobName, file, {
      access: 'public',
      addRandomSuffix: false,
      token: BLOB_READ_WRITE_TOKEN,
    });
    
    console.log(`✅ Uploaded: ${blob.url}`);
    return blob.url;
  } catch (error) {
    console.error(`❌ Error uploading ${blobName}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🚀 Starting video uploads to Vercel Blob Storage...\n');
  
  const results = [];
  
  for (const video of videos) {
    const url = await uploadVideo(video.localPath, video.blobName);
    if (url) {
      results.push({ name: video.blobName, url });
    }
    console.log(''); // Empty line for readability
  }
  
  console.log('\n📋 Upload Summary:');
  console.log('Copy these URLs to your ValuesSection.tsx component:\n');
  results.forEach(({ name, url }) => {
    console.log(`  ${name}: ${url}`);
  });
  
  console.log('\n✨ Done!');
}

main().catch(console.error);
