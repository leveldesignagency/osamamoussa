"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Filter out browser extension errors (MetaMask, etc.)
    const errorMessage = error?.message || "";
    const errorStack = error?.stack || "";
    
    // Ignore MetaMask and other browser extension errors
    if (
      errorMessage.includes("MetaMask") ||
      errorMessage.includes("chrome-extension://") ||
      errorMessage.includes("moz-extension://") ||
      errorStack.includes("chrome-extension://") ||
      errorStack.includes("moz-extension://") ||
      errorStack.includes("MetaMask")
    ) {
      // Silently ignore extension errors
      return;
    }

    // Log real errors to console for debugging
    console.error("Application error:", error);
  }, [error]);

  // Check if this is a browser extension error
  const isExtensionError =
    error?.message?.includes("MetaMask") ||
    error?.message?.includes("chrome-extension://") ||
    error?.stack?.includes("chrome-extension://") ||
    error?.stack?.includes("MetaMask");

  // Don't render error UI for extension errors
  if (isExtensionError) {
    return null;
  }

  // Render error UI for real application errors
  return (
    <div className="min-h-screen bg-[#6E6E6E] flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Something went wrong!</h2>
        <button
          onClick={reset}
          className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
