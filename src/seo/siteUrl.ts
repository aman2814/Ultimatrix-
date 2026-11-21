export const DEFAULT_SITE_URL = 'https://ultimatrixcalculator.com';

// Deterministic ISO timestamp updated with releases (never randomized per request)
export const SITE_LAST_MODIFIED = '2026-11-20T00:00:00.000Z';

export function normalizeBaseUrl(raw?: string | null): string {
  if (!raw) return '';
  const trimmed = raw.trim().replace(/\/+$/, '');
  if (!trimmed || trimmed === 'MY_APP_URL') return '';
  if (!/^https?:\/\//i.test(trimmed)) return '';
  return trimmed;
}

export function getSiteBaseUrl(): string {
  const procEnv =
    typeof process !== 'undefined' && process.env
      ? process.env.NEXT_PUBLIC_SITE_URL || process.env.VITE_SITE_URL
      : undefined;

  const metaEnv =
    typeof import.meta !== 'undefined' && (import.meta as { env?: Record<string, string | undefined> }).env
      ? (import.meta as { env?: Record<string, string | undefined> }).env?.NEXT_PUBLIC_SITE_URL ||
        (import.meta as { env?: Record<string, string | undefined> }).env?.VITE_SITE_URL
      : undefined;

  return normalizeBaseUrl(procEnv) || normalizeBaseUrl(metaEnv) || DEFAULT_SITE_URL;
}

export function normalizeCanonicalPath(path: string): string {
  if (!path || path === '/') return '/';
  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`;
  return withLeadingSlash.replace(/\/+$/, '') || '/';
}

export function getCanonicalUrl(path: string, baseUrl = getSiteBaseUrl()): string {
  const cleanBase = normalizeBaseUrl(baseUrl) || DEFAULT_SITE_URL;
  const cleanPath = normalizeCanonicalPath(path);
  return cleanPath === '/' ? `${cleanBase}/` : `${cleanBase}${cleanPath}`;
}
