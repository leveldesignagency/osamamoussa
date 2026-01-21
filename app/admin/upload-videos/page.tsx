"use client";

import { useState } from "react";

export default function UploadVideosPage() {
  const [uploading, setUploading] = useState(false);
  const [results, setResults] = useState<Array<{ name: string; url: string }>>([]);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setError(null);
    const uploadResults: Array<{ name: string; url: string }> = [];

    for (const file of Array.from(files)) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("/api/upload-video", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`Failed to upload ${file.name}`);
        }

        const data = await response.json();
        uploadResults.push({ name: file.name, url: data.url });
      } catch (err) {
        setError(`Error uploading ${file.name}: ${err instanceof Error ? err.message : "Unknown error"}`);
      }
    }

    setResults(uploadResults);
    setUploading(false);
  };

  return (
    <div className="min-h-screen bg-[#6E6E6E] p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Upload Videos to Vercel Blob</h1>
        
        <div className="bg-white p-6 rounded-lg mb-6">
          <label className="block mb-4">
            <span className="text-gray-700 font-medium">Select video files:</span>
            <input
              type="file"
              multiple
              accept="video/mp4,video/webm"
              onChange={handleUpload}
              disabled={uploading}
              className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#6E6E6E] file:text-white hover:file:bg-[#5a5a5a]"
            />
          </label>

          {uploading && (
            <div className="text-blue-600">Uploading videos... Please wait.</div>
          )}

          {error && (
            <div className="text-red-600 mb-4">{error}</div>
          )}

          {results.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-bold mb-4">Uploaded Videos:</h2>
              <div className="space-y-2">
                {results.map((result, index) => (
                  <div key={index} className="p-3 bg-gray-100 rounded">
                    <div className="font-medium">{result.name}</div>
                    <div className="text-sm text-gray-600 break-all">{result.url}</div>
                    <button
                      onClick={() => navigator.clipboard.writeText(result.url)}
                      className="mt-2 text-sm text-blue-600 hover:text-blue-800"
                    >
                      Copy URL
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-sm font-medium text-yellow-800">
                  ⚠️ Remember to update <code className="bg-yellow-100 px-1 rounded">components/ValuesSection.tsx</code> with these URLs!
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Instructions:</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Go to Vercel Dashboard → Your Project → Storage → Create Blob Storage</li>
            <li>Get your <code className="bg-gray-100 px-1 rounded">BLOB_READ_WRITE_TOKEN</code> from Environment Variables</li>
            <li>Add it to your Vercel project environment variables</li>
            <li>Upload your videos using the file input above</li>
            <li>Copy the URLs and update <code className="bg-gray-100 px-1 rounded">components/ValuesSection.tsx</code></li>
          </ol>
        </div>
      </div>
    </div>
  );
}
