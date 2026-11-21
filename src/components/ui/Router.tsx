import React, { createContext, useContext, useEffect, useState } from 'react';

interface RouterContextValue {
  pathname: string;
  hash: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextValue>({
  pathname: '/',
  hash: '',
  navigate: () => {},
});

function normalizePathname(raw: string): string {
  if (!raw || raw === '/') return '/';
  const [pathOnly] = raw.split('#');
  const cleaned = pathOnly.replace(/\/+$/, '');
  return cleaned || '/';
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [pathname, setPathname] = useState<string>(() =>
    typeof window !== 'undefined' ? normalizePathname(window.location.pathname) : '/'
  );
  const [hash, setHash] = useState<string>(() =>
    typeof window !== 'undefined' ? window.location.hash : ''
  );

  useEffect(() => {
    const handlePop = () => {
      setPathname(normalizePathname(window.location.pathname));
      setHash(window.location.hash);
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  const navigate = (to: string) => {
    const [targetPathRaw, targetHashRaw] = to.split('#');
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
    <RouterContext.Provider value={{ pathname, hash, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRoute() {
  return useContext(RouterContext);
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, onClick, children, ...rest }: LinkProps) {
  const { navigate } = useRoute();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (
      e.defaultPrevented ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0 ||
      href.startsWith('http') ||
      href.startsWith('mailto:')
    ) {
      return;
    }
    e.preventDefault();
    navigate(href);
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
