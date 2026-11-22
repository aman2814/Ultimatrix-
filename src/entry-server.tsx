import { renderToString } from 'react-dom/server';
import App from './App';
import { renderRouteHeadTags, resolveMetadataForPath } from './seo/routeMeta';
import { getSiteBaseUrl } from './seo/siteUrl';
import { buildSitemapEntries } from './seo/sitemap';

export interface PrerenderRouteTarget {
  routePath: string;
  outputRelativePath: string;
}

export interface RenderedRouteOutput {
  appHtml: string;
  headHtml: string;
  langAttr: string;
  dirAttr: 'ltr' | 'rtl';
  canonicalUrl: string;
}

export function getPrerenderRoutes(baseUrl = getSiteBaseUrl()): PrerenderRouteTarget[] {
  const entries = buildSitemapEntries(baseUrl);
  return entries.map((entry) => {
    const parsed = new URL(entry.url);
    const cleanPath = parsed.pathname === '/' ? '/' : parsed.pathname.replace(/\/+$/, '');
    const outputRelativePath =
      cleanPath === '/' ? 'index.html' : `${cleanPath.replace(/^\/+/, '')}/index.html`;

    return {
      routePath: cleanPath,
      outputRelativePath,
    };
  });
}

export function renderRoute(
  routePath: string,
  baseUrl = getSiteBaseUrl()
): RenderedRouteOutput {
  const meta = resolveMetadataForPath(routePath, baseUrl);
  const headHtml = renderRouteHeadTags(meta);
  const appHtml = renderToString(<App initialPathname={routePath} />);

  return {
    appHtml,
    headHtml,
    langAttr: meta.hreflangCode,
    dirAttr: meta.dir,
    canonicalUrl: meta.fullUrl,
  };
}
