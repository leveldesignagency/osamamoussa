/**
 * Vercel Blob auth helper.
 * On Vercel: prefer OIDC (BLOB_STORE_ID + VERCEL_OIDC_TOKEN) — do not pass a long-lived token.
 * Local / CI outside Vercel: fall back to BLOB_READ_WRITE_TOKEN when present.
 */

export type BlobAuthOptions = {
  token?: string;
};

/** True when Blob can authenticate via OIDC or a legacy read-write token. */
export function isBlobConfigured(): boolean {
  return Boolean(
    process.env.BLOB_STORE_ID ||
      process.env.VERCEL_OIDC_TOKEN ||
      process.env.BLOB_READ_WRITE_TOKEN
  );
}

/**
 * Options to spread into @vercel/blob put/list/del.
 * Omits `token` when OIDC can be used so the SDK picks short-lived credentials.
 */
export function blobAuthOptions(): BlobAuthOptions {
  if (process.env.BLOB_STORE_ID || process.env.VERCEL_OIDC_TOKEN) {
    return {};
  }
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  return token ? { token } : {};
}
