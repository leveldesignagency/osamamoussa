import { put } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Check for token in environment
    const token = process.env.BLOB_READ_WRITE_TOKEN;

    if (!token) {
      return NextResponse.json(
        { error: 'BLOB_READ_WRITE_TOKEN not configured. Add it in Vercel Environment Variables.' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Check file size (Vercel Blob free tier is 1GB total)
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > 1000) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 1GB.' },
        { status: 400 }
      );
    }

    const blob = await put(file.name, file, {
      access: 'public',
      addRandomSuffix: false,
      token: token,
    });

    return NextResponse.json({ url: blob.url });
  } catch (error) {
    console.error('Error uploading video:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to upload video' },
      { status: 500 }
    );
  }
}
