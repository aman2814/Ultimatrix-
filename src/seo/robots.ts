export interface RobotsConfig {
  userAgent: string;
  allow: string[];
  sitemap: string;
}

export function buildRobotsConfig(baseUrl = 'https://ultimatrixcalculator.com'): RobotsConfig {
  return {
    userAgent: '*',
    allow: ['/'],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
