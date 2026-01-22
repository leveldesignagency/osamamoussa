"use client";

import { useEffect } from "react";

export function GlobalErrorHandler() {
  useEffect(() => {
    // Suppress browser extension errors from console and error reporting
    const originalError = window.console.error;
    const originalWarn = window.console.warn;

    window.console.error = (...args: any[]) => {
      const errorString = args.join(" ");
      // Filter out MetaMask and extension errors
      if (
        errorString.includes("MetaMask") ||
        errorString.includes("chrome-extension://") ||
        errorString.includes("moz-extension://") ||
        errorString.includes("Failed to connect to MetaMask")
      ) {
        return; // Silently ignore
      }
      originalError.apply(console, args);
    };

    window.console.warn = (...args: any[]) => {
      const warnString = args.join(" ");
      // Filter out extension warnings
      if (
        warnString.includes("chrome-extension://") ||
        warnString.includes("moz-extension://")
      ) {
        return; // Silently ignore
      }
      originalWarn.apply(console, args);
    };

    // Global error handler
    const handleError = (event: ErrorEvent) => {
      const errorMessage = event.message || "";
      const errorSource = event.filename || "";
      
      // Ignore MetaMask and extension errors
      if (
        errorMessage.includes("MetaMask") ||
        errorMessage.includes("Failed to connect to MetaMask") ||
        errorSource.includes("chrome-extension://") ||
        errorSource.includes("moz-extension://")
      ) {
        event.preventDefault();
        return false;
      }
    };

    window.addEventListener("error", handleError);

    return () => {
      window.console.error = originalError;
      window.console.warn = originalWarn;
      window.removeEventListener("error", handleError);
    };
  }, []);

  return null;
}
