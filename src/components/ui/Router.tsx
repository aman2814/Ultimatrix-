import React, { createContext, useContext, useEffect, useState } from 'react';
import { defaultLang, Lang } from '../../i18n/ui';
import {
  getHreflang,
  getLangFromPathname,
  isRtlLang,
  isSupportedLang,
  stripLangPrefix,
  useTranslatedPath,
} from '../../i18n/utils';

interface RouterContextValue {
  pathname: string;
  basePath: string;
  lang: Lang;
  hash: string;
  navigate: (to: string, options?: { preserveLocale?: boolean }) => void;
  translatePath: (path: string, targetLang?: Lang) => string;
}

const RouterContext = createContext<RouterContextValue>({
  pathname: '/',
  basePath: '/',
  lang: defaultLang,
  hash: '',
  navigate: () => {},
  translatePath: (p) => p,
});

function normalizePathname(raw: string): string {
  if (!raw || raw === '/') return '/';
  const [pathOnly] = raw.split('#');
  const cleaned = pathOnly.replace(/\/+$/, '');
  return cleaned || '/';
}

function hasExplicitLangPrefix(path: string): boolean {
  const clean = path.split('#')[0].split('?')[0];
  const [, firstSegment] = clean.split('/');
  return Boolean(firstSegment && isSupportedLang(firstSegment));
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [pathname, setPathname] = useState<string>(() =>
    typeof window !== 'undefined' ? normalizePathname(window.location.pathname) : '/'
  );
  const [hash, setHash] = useState<string>(() =>
    typeof window !== 'undefined' ? window.location.hash : ''
  );

  const lang = getLangFromPathname(pathname);
  const basePath = stripLangPrefix(pathname);
  const translatePath = useTranslatedPath(lang);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = getHreflang(lang);
      document.documentElement.dir = isRtlLang(lang) ? 'rtl' : 'ltr';
    }
  }, [lang]);

  useEffect(() => {
    const handlePop = () => {
      setPathname(normalizePathname(window.location.pathname));
      setHash(window.location.hash);
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  const navigate = (to: string, options?: { preserveLocale?: boolean }) => {
    const preserveLocale = options?.preserveLocale ?? true;
    const resolvedTarget =
      preserveLocale && !hasExplicitLangPrefix(to) ? translatePath(to, lang) : to;

    const [targetPathRaw, targetHashRaw] = resolvedTarget.split('#');
    const nextPath = normalizePathname(targetPathRaw || '/');
    const nextHash = targetHashRaw ? `#${targetHashRaw}` : '';

    if (nextPath !== pathname || nextHash !== hash) {
      window.history.pushState({}, '', `${nextPath}${nextHash}`);
      setPathname(nextPath);
      setHash(nextHash);
    }

    if (nextHash) {
      requestAnimationFrame(() => {
        const target = document.getElementById(nextHash.slice(1));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  return (
    <RouterContext.Provider value={{ pathname, basePath, lang, hash, navigate, translatePath }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRoute() {
  return useContext(RouterContext);
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  preserveLocale?: boolean;
  children: React.ReactNode;
}

export function Link({ href, preserveLocale = true, onClick, children, ...rest }: LinkProps) {
  const { lang, navigate, translatePath } = useRoute();

  const isExternal = href.startsWith('http') || href.startsWith('mailto:');
  const resolvedHref =
    !isExternal && preserveLocale && !hasExplicitLangPrefix(href)
      ? translatePath(href, lang)
      : href;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (
      e.defaultPrevented ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0 ||
      isExternal
    ) {
      return;
    }
    e.preventDefault();
    navigate(resolvedHref, { preserveLocale: false });
  };

  return (
    <a href={resolvedHref} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
