import { CALCULATORS } from '../data/calculators';
import { defaultLang, Lang, showDefaultLang, SUPPORTED_LANGS } from '../i18n/ui';
import { getCanonicalUrl, getSiteBaseUrl, SITE_LAST_MODIFIED } from './siteUrl';

export interface SitemapAlternate {
  hreflang: string;
  href: string;
}

export interface SitemapEntry {
  url: string;
  lastModified: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  alternates: SitemapAlternate[];
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function localizedSlug(baseSlug: string, lang: Lang): string {
  if (!showDefaultLang && lang === defaultLang) {
    return baseSlug;
  }
  return baseSlug === '/' ? `/${lang}` : `/${lang}${baseSlug}`;
}

function buildAlternates(baseSlug: string, baseUrl: string): SitemapAlternate[] {
  const alts: SitemapAlternate[] = SUPPORTED_LANGS.map((lang) => ({
    hreflang: lang,
    href: getCanonicalUrl(localizedSlug(baseSlug, lang), baseUrl),
  }));
  alts.push({
    hreflang: 'x-default',
    href: getCanonicalUrl(localizedSlug(baseSlug, defaultLang), baseUrl),
  });
  return alts;
}

export function buildSitemapEntries(baseUrl = getSiteBaseUrl()): SitemapEntry[] {
  const seen = new Set<string>();
  const entries: SitemapEntry[] = [];

  const homeAlts = buildAlternates('/', baseUrl);
  for (const lang of SUPPORTED_LANGS) {
    const url = getCanonicalUrl(localizedSlug('/', lang), baseUrl);
    if (seen.has(url)) continue;
    seen.add(url);
    entries.push({
      url,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: lang === defaultLang ? 1.0 : 0.9,
      alternates: homeAlts,
    });
  }

  for (const calc of CALCULATORS) {
    const toolAlts = buildAlternates(calc.slug, baseUrl);
    for (const lang of SUPPORTED_LANGS) {
      const url = getCanonicalUrl(localizedSlug(calc.slug, lang), baseUrl);
      if (seen.has(url)) continue;
      seen.add(url);
      entries.push({
        url,
        lastModified: SITE_LAST_MODIFIED,
        changeFrequency: 'monthly',
        priority: 0.9,
        alternates: toolAlts,
      });
    }
  }

  const infoSlugs = ['/about', '/privacy-policy', '/terms-and-conditions', '/contact'];
  for (const slug of infoSlugs) {
    const infoAlts = buildAlternates(slug, baseUrl);
    for (const lang of SUPPORTED_LANGS) {
      const url = getCanonicalUrl(localizedSlug(slug, lang), baseUrl);
      if (seen.has(url)) continue;
      seen.add(url);
      entries.push({
        url,
        lastModified: SITE_LAST_MODIFIED,
        changeFrequency: 'yearly',
        priority: 0.6,
        alternates: infoAlts,
      });
    }
  }

  return entries;
}

export function renderSitemapXml(baseUrl = getSiteBaseUrl()): string {
  const entries = buildSitemapEntries(baseUrl);
  const urlsXml = entries
    .map((entry) => {
      const altLinks = entry.alternates
        .map(
          (alt) =>
            `    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(
              alt.href
            )}" />`
        )
        .join('\n');
      return `  <url>
    <loc>${escapeXml(entry.url)}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
${altLinks}
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlsXml}
</urlset>
`;
}
