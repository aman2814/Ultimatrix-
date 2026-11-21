import { getSiteBaseUrl, normalizeBaseUrl, DEFAULT_SITE_URL } from './siteUrl';

export interface RobotsRule {
  userAgent: string;
  allow: string | string[];
  disallow: string | string[];
}

export interface RobotsConfig {
  rules: RobotsRule[];
  sitemap: string;
  host: string;
}

export function buildRobotsConfig(baseUrl = getSiteBaseUrl()): RobotsConfig {
  const cleanBase = normalizeBaseUrl(baseUrl) || DEFAULT_SITE_URL;
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${cleanBase}/sitemap.xml`,
    host: cleanBase,
  };
}

export function renderRobotsTxt(baseUrl = getSiteBaseUrl()): string {
  const config = buildRobotsConfig(baseUrl);
  const lines: string[] = [];

  for (const rule of config.rules) {
    lines.push(`User-agent: ${rule.userAgent}`);
    const allows = Array.isArray(rule.allow) ? rule.allow : [rule.allow];
    const disallows = Array.isArray(rule.disallow) ? rule.disallow : [rule.disallow];
    for (const a of allows) {
      lines.push(`Allow: ${a}`);
    }
    for (const d of disallows) {
      lines.push(`Disallow: ${d}`);
    }
  }

  lines.push('');
  lines.push(`Sitemap: ${config.sitemap}`);
  lines.push('');

  return lines.join('\n');
}
