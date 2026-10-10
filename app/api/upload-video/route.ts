import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import { blobAuthOptions, isBlobConfigured } from "@/lib/blob";

export async function POST(request: NextRequest) {
  try {
    if (!isBlobConfigured()) {
      return NextResponse.json(
        {
          error:
            "Vercel Blob is not configured. Connect the Blob store (OIDC) or set BLOB_READ_WRITE_TOKEN for local use.",
        },
        { status: 503 }
      );
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > 1000) {
      return NextResponse.json(
        { error: "File too large. Maximum size is 1GB." },
        { status: 400 }
      );
    }

    const blob = await put(file.name, file, {
      access: "public",
      addRandomSuffix: false,
      ...blobAuthOptions(),
    });

    return NextResponse.json({ url: blob.url });
  } catch (error) {
    console.error("Error uploading video:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to upload video" },
      { status: 500 }
    );
  }
}
