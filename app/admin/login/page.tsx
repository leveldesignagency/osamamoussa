"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }
      const next = searchParams.get("next") || "/admin/availability";
      router.replace(next.startsWith("/admin") ? next : "/admin/availability");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#6E6E6E] px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg"
      >
        <h1 className="mb-2 text-2xl font-bold text-neutral-900">Admin login</h1>
        <p className="mb-6 text-sm text-neutral-600">
          Password-gated access for Mr Moussa&apos;s booking availability dashboard.
        </p>
        <label className="mb-4 block">
          <span className="mb-1 block text-sm font-medium text-neutral-700">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoFocus
            className="w-full rounded border border-neutral-300 px-3 py-2 text-neutral-900 outline-none focus:border-neutral-800"
          />
        </label>
        {error ? <p className="mb-4 text-sm text-red-600">{error}</p> : null}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-black disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </main>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#6E6E6E] text-white">
          Loading…
        </main>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
