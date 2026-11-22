import { useEffect } from 'react';
import { CalculatorDefinition } from '../../data/calculators';
import { defaultLang, Lang, ogLocaleMap, showDefaultLang, SUPPORTED_LANGS } from '../../i18n/ui';
import {
  getHreflang,
  getLangFromPathname,
  isRtlLang,
  stripLangPrefix,
  useTranslations,
} from '../../i18n/utils';
import { getCanonicalUrl, getSiteBaseUrl } from '../../seo/siteUrl';

export interface SeoPageMeta {
  title: string;
  description: string;
  name: string;
  type?: 'AboutPage' | 'ContactPage' | 'WebPage';
}

interface SeoSchemaProps {
  calculator?: CalculatorDefinition;
  pageMeta?: SeoPageMeta;
  canonicalPath: string;
}

function upsertMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function localizePathForHreflang(basePath: string, lang: Lang): string {
  if (!showDefaultLang && lang === defaultLang) {
    return basePath;
  }
  return basePath === '/' ? `/${lang}` : `/${lang}${basePath}`;
}

function syncHreflangTags(basePath: string, origin: string) {
  const targets: { hreflang: string; href: string }[] = SUPPORTED_LANGS.map((code) => ({
    hreflang: getHreflang(code),
    href: getCanonicalUrl(localizePathForHreflang(basePath, code), origin),
  }));
  targets.push({
    hreflang: 'x-default',
    href: getCanonicalUrl(localizePathForHreflang(basePath, defaultLang), origin),
  });

  // Remove any stale alternate hreflang links not in target set
  const existing = document.head.querySelectorAll('link[rel="alternate"][hreflang]');
  const expectedCodes = new Set(targets.map((t) => t.hreflang));
  existing.forEach((node) => {
    const code = node.getAttribute('hreflang');
    if (!code || !expectedCodes.has(code)) {
      node.remove();
    }
  });

  for (const target of targets) {
    let linkEl = document.head.querySelector(
      `link[rel="alternate"][hreflang="${target.hreflang}"]`
    ) as HTMLLinkElement | null;
    if (!linkEl) {
      linkEl = document.createElement('link');
      linkEl.setAttribute('rel', 'alternate');
      linkEl.setAttribute('hreflang', target.hreflang);
      document.head.appendChild(linkEl);
    }
    linkEl.setAttribute('href', target.href);
  }
}

export function SeoSchema({ calculator, pageMeta, canonicalPath }: SeoSchemaProps) {
  const origin = getSiteBaseUrl();
  const lang = getLangFromPathname(canonicalPath);
  const basePath = stripLangPrefix(canonicalPath);
  const fullUrl = getCanonicalUrl(localizePathForHreflang(basePath, lang), origin);
  const t = useTranslations(lang);

  const title = calculator
    ? calculator.metaTitle
    : pageMeta
    ? pageMeta.title
    : t('hub.metaTitle');
  const description = calculator
    ? calculator.metaDescription
    : pageMeta
    ? pageMeta.description
    : t('hub.metaDescription');
  const keywords = calculator ? calculator.keywords.join(', ') : '';

  const hreflangCode = getHreflang(lang);

  useEffect(() => {
    document.documentElement.lang = hreflangCode;
    document.documentElement.dir = isRtlLang(lang) ? 'rtl' : 'ltr';
    document.title = title;
    upsertMetaTag('name', 'robots', 'index, follow');
    upsertMetaTag('name', 'description', description);
    if (keywords) {
      upsertMetaTag('name', 'keywords', keywords);
    }
    upsertMetaTag('property', 'og:locale', ogLocaleMap[lang]);
    upsertMetaTag('property', 'og:title', title);
    upsertMetaTag('property', 'og:description', description);
    upsertMetaTag('property', 'og:url', fullUrl);
    upsertMetaTag('name', 'twitter:title', title);
    upsertMetaTag('name', 'twitter:description', description);
    upsertCanonical(fullUrl);
    syncHreflangTags(basePath, origin);
  }, [lang, title, description, keywords, fullUrl, basePath, origin]);

  const jsonLdGraph = calculator
    ? [
        {
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: calculator.name,
          url: fullUrl,
          inLanguage: hreflangCode,
          applicationCategory: 'UtilitiesApplication',
          operatingSystem: 'All',
          description: calculator.metaDescription,
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Ultimatrix Calculator',
            url: origin,
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: t('nav.home'),
              item: getCanonicalUrl(localizePathForHreflang('/', lang), origin),
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: t(`cat.${calculator.category}`),
              item: `${getCanonicalUrl(
                localizePathForHreflang('/', lang),
                origin
              )}#${calculator.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: calculator.name,
              item: fullUrl,
            },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          inLanguage: hreflangCode,
          mainEntity: calculator.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
      ]
    : pageMeta
    ? [
        {
          '@context': 'https://schema.org',
          '@type': pageMeta.type ?? 'WebPage',
          name: pageMeta.name,
          url: fullUrl,
          inLanguage: hreflangCode,
          description,
          isPartOf: {
            '@type': 'WebSite',
            name: 'Ultimatrix Calculator',
            url: getCanonicalUrl(localizePathForHreflang('/', lang), origin),
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: t('nav.home'),
              item: getCanonicalUrl(localizePathForHreflang('/', lang), origin),
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: pageMeta.name,
              item: fullUrl,
            },
          ],
        },
      ]
    : [
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Ultimatrix Calculator',
          url: fullUrl,
          inLanguage: hreflangCode,
          description,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Ultimatrix Calculator',
          url: fullUrl,
          inLanguage: hreflangCode,
          applicationCategory: 'UtilitiesApplication',
          operatingSystem: 'All',
          description,
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
        },
      ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
    />
  );
}
