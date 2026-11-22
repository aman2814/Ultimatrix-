import {
  defaultLang,
  hreflangMap,
  Lang,
  showDefaultLang,
  SUPPORTED_LANGS,
  ui,
  UiKey,
} from './ui';

export function isSupportedLang(segment: string): segment is Lang {
  return (SUPPORTED_LANGS as readonly string[]).includes(segment.toLowerCase());
}

export function normalizeLangSegment(segment: string): Lang | null {
  const lower = segment.toLowerCase();
  return isSupportedLang(lower) ? lower : null;
}

export function getHreflang(lang: Lang): string {
  return hreflangMap[lang] ?? lang;
}

export function isRtlLang(lang: Lang): boolean {
  return lang === 'ar';
}

export function getLangFromPathname(pathname: string): Lang {
  const clean = pathname.split('?')[0].split('#')[0];
  const [, firstSegment] = clean.split('/');
  if (firstSegment) {
    const matched = normalizeLangSegment(firstSegment);
    if (matched) return matched;
  }
  return defaultLang;
}

export function getLangFromUrl(url: URL): Lang {
  return getLangFromPathname(url.pathname);
}

export function stripLangPrefix(pathname: string): string {
  const [rawPath] = pathname.split('#');
  const [pathOnly] = rawPath.split('?');
  const segments = pathOnly.split('/').filter(Boolean);
  if (segments.length > 0 && isSupportedLang(segments[0])) {
    const rest = segments.slice(1).join('/');
    return rest ? `/${rest}` : '/';
  }
  if (!pathOnly || pathOnly === '/') return '/';
  const cleaned = pathOnly.replace(/\/+$/, '');
  return cleaned.startsWith('/') ? cleaned : `/${cleaned}`;
}

export function useTranslations(lang: Lang) {
  const localized: Partial<Record<UiKey, string>> = ui[lang];
  return function t(key: UiKey): string {
    return localized[key] ?? ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, targetLang: Lang = lang): string {
    const [rawPathPart, rawHashPart] = path.split('#');
    const basePath = stripLangPrefix(rawPathPart || '/');
    const hashSuffix = rawHashPart ? `#${rawHashPart}` : '';

    if (!showDefaultLang && targetLang === defaultLang) {
      return `${basePath}${hashSuffix}`;
    }

    const localizedPath = basePath === '/' ? `/${targetLang}` : `/${targetLang}${basePath}`;
    return `${localizedPath}${hashSuffix}`;
  };
}
