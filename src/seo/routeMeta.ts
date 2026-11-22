import { CalculatorDefinition, getCalculatorBySlug } from '../data/calculators';
import { getInfoPageContent, InfoPageSlug, isInfoPageSlug } from '../data/infoPages';
import { getLocalizedCalculator } from '../i18n/calculators';
import {
  defaultLang,
  Lang,
  ogLocaleMap,
  showDefaultLang,
  SUPPORTED_LANGS,
  UiKey,
} from '../i18n/ui';
import {
  getHreflang,
  getLangFromPathname,
  isRtlLang,
  stripLangPrefix,
  useTranslations,
} from '../i18n/utils';
import { getCanonicalUrl, getSiteBaseUrl } from './siteUrl';

export interface SeoPageMeta {
  title: string;
  description: string;
  name: string;
  type?: 'AboutPage' | 'ContactPage' | 'WebPage';
}

export interface HreflangTarget {
  hreflang: string;
  href: string;
}

export interface ResolvedRouteMeta {
  lang: Lang;
  hreflangCode: string;
  dir: 'ltr' | 'rtl';
  basePath: string;
  canonicalPath: string;
  fullUrl: string;
  ogLocale: string;
  title: string;
  description: string;
  keywords: string;
  alternates: HreflangTarget[];
  jsonLdGraph: Record<string, unknown>[];
}

const INFO_LABEL_KEYS: Record<InfoPageSlug, UiKey> = {
  '/about': 'nav.about',
  '/privacy-policy': 'nav.privacy',
  '/terms-and-conditions': 'nav.terms',
  '/contact': 'nav.contact',
};

export function localizePathForHreflang(basePath: string, lang: Lang): string {
  if (!showDefaultLang && lang === defaultLang) {
    return basePath;
  }
  return basePath === '/' ? `/${lang}` : `/${lang}${basePath}`;
}

export function buildRouteAlternates(
  basePath: string,
  origin: string = getSiteBaseUrl()
): HreflangTarget[] {
  const targets: HreflangTarget[] = SUPPORTED_LANGS.map((code) => ({
    hreflang: getHreflang(code),
    href: getCanonicalUrl(localizePathForHreflang(basePath, code), origin),
  }));
  targets.push({
    hreflang: 'x-default',
    href: getCanonicalUrl(localizePathForHreflang(basePath, defaultLang), origin),
  });
  return targets;
}

export function resolveRouteMetadata({
  canonicalPath,
  calculator,
  pageMeta,
  origin = getSiteBaseUrl(),
}: {
  canonicalPath: string;
  calculator?: CalculatorDefinition;
  pageMeta?: SeoPageMeta;
  origin?: string;
}): ResolvedRouteMeta {
  const lang = getLangFromPathname(canonicalPath);
  const basePath = stripLangPrefix(canonicalPath);
  const fullUrl = getCanonicalUrl(localizePathForHreflang(basePath, lang), origin);
  const t = useTranslations(lang);
  const hreflangCode = getHreflang(lang);
  const dir: 'ltr' | 'rtl' = isRtlLang(lang) ? 'rtl' : 'ltr';

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

  const alternates = buildRouteAlternates(basePath, origin);

  const jsonLdGraph: Record<string, unknown>[] = calculator
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

  return {
    lang,
    hreflangCode,
    dir,
    basePath,
    canonicalPath,
    fullUrl,
    ogLocale: ogLocaleMap[lang],
    title,
    description,
    keywords,
    alternates,
    jsonLdGraph,
  };
}

export function resolveMetadataForPath(
  pathname: string,
  origin: string = getSiteBaseUrl()
): ResolvedRouteMeta {
  const lang = getLangFromPathname(pathname);
  const basePath = stripLangPrefix(pathname);
  const t = useTranslations(lang);

  if (isInfoPageSlug(basePath)) {
    const page = getInfoPageContent(basePath, lang);
    const navLabel = t(INFO_LABEL_KEYS[basePath]);
    return resolveRouteMetadata({
      canonicalPath: pathname,
      pageMeta: {
        title: page.metaTitle,
        description: page.metaDescription,
        name: navLabel,
        type: page.schemaType,
      },
      origin,
    });
  }

  const calculator = getCalculatorBySlug(basePath);
  if (calculator) {
    const localizedCalculator = getLocalizedCalculator(calculator, lang);
    return resolveRouteMetadata({
      canonicalPath: pathname,
      calculator: localizedCalculator,
      origin,
    });
  }

  return resolveRouteMetadata({
    canonicalPath: pathname,
    origin,
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function renderRouteHeadTags(meta: ResolvedRouteMeta): string {
  const hreflangLinks = meta.alternates
    .map(
      (alt) =>
        `    <link rel="alternate" hreflang="${escapeAttr(alt.hreflang)}" href="${escapeAttr(alt.href)}" />`
    )
    .join('\n');

  const keywordsTag = meta.keywords
    ? `\n    <meta name="keywords" content="${escapeAttr(meta.keywords)}" />`
    : '';

  const safeJsonLd = JSON.stringify(meta.jsonLdGraph).replace(/</g, '\\u003c');

  return [
    `    <title>${escapeHtml(meta.title)}</title>`,
    `    <meta name="robots" content="index, follow" />`,
    `    <link rel="canonical" href="${escapeAttr(meta.fullUrl)}" />`,
    hreflangLinks,
    `    <meta name="description" content="${escapeAttr(meta.description)}" />${keywordsTag}`,
    `    <meta property="og:locale" content="${escapeAttr(meta.ogLocale)}" />`,
    `    <meta property="og:title" content="${escapeAttr(meta.title)}" />`,
    `    <meta property="og:description" content="${escapeAttr(meta.description)}" />`,
    `    <meta property="og:url" content="${escapeAttr(meta.fullUrl)}" />`,
    `    <meta property="og:site_name" content="Ultimatrix Calculator" />`,
    `    <meta property="og:type" content="website" />`,
    `    <meta name="twitter:card" content="summary_large_image" />`,
    `    <meta name="twitter:title" content="${escapeAttr(meta.title)}" />`,
    `    <meta name="twitter:description" content="${escapeAttr(meta.description)}" />`,
    `    <script id="ultimatrix-jsonld" type="application/ld+json">${safeJsonLd}</script>`,
  ].join('\n');
}
