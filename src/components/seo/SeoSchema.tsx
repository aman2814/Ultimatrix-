import { useEffect } from 'react';
import { CalculatorDefinition } from '../../data/calculators';
import {
  HreflangTarget,
  resolveRouteMetadata,
  SeoPageMeta,
} from '../../seo/routeMeta';
import { getSiteBaseUrl } from '../../seo/siteUrl';

export type { SeoPageMeta };

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

function removeMetaTag(attr: 'name' | 'property', key: string) {
  const el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (el) {
    el.remove();
  }
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

function syncHreflangTags(targets: HreflangTarget[]) {
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

function upsertJsonLd(graph: Record<string, unknown>[]) {
  let scriptEl = document.head.querySelector('#ultimatrix-jsonld') as HTMLScriptElement | null;
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = 'ultimatrix-jsonld';
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }
  scriptEl.textContent = JSON.stringify(graph);
}

export function SeoSchema({ calculator, pageMeta, canonicalPath }: SeoSchemaProps) {
  const origin = getSiteBaseUrl();
  const meta = resolveRouteMetadata({
    canonicalPath,
    calculator,
    pageMeta,
    origin,
  });

  useEffect(() => {
    document.documentElement.lang = meta.hreflangCode;
    document.documentElement.dir = meta.dir;
    document.title = meta.title;
    upsertMetaTag('name', 'robots', 'index, follow');
    upsertMetaTag('name', 'description', meta.description);
    if (meta.keywords) {
      upsertMetaTag('name', 'keywords', meta.keywords);
    } else {
      removeMetaTag('name', 'keywords');
    }
    upsertMetaTag('property', 'og:locale', meta.ogLocale);
    upsertMetaTag('property', 'og:title', meta.title);
    upsertMetaTag('property', 'og:description', meta.description);
    upsertMetaTag('property', 'og:url', meta.fullUrl);
    upsertMetaTag('name', 'twitter:title', meta.title);
    upsertMetaTag('name', 'twitter:description', meta.description);
    upsertCanonical(meta.fullUrl);
    syncHreflangTags(meta.alternates);
    upsertJsonLd(meta.jsonLdGraph);
  }, [meta]);

  return null;
}
