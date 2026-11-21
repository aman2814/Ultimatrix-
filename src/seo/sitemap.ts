import { CALCULATORS } from '../data/calculators';

export interface SitemapEntry {
  url: string;
  changeFrequency: 'weekly' | 'monthly';
  priority: number;
}

export function buildSitemapEntries(baseUrl = 'https://ultimatrixcalculator.com'): SitemapEntry[] {
  const root: SitemapEntry = {
    url: `${baseUrl}/`,
    changeFrequency: 'weekly',
    priority: 1.0,
  };

  const tools: SitemapEntry[] = CALCULATORS.map((calc) => ({
    url: `${baseUrl}${calc.slug}`,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [root, ...tools];
}
