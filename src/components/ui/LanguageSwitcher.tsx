import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { Lang, languageCodes, languages, SUPPORTED_LANGS } from '../../i18n/ui';
import { useTranslations } from '../../i18n/utils';
import { Link, useRoute } from './Router';

export function LanguageSwitcher() {
  const { lang, basePath, translatePath } = useRoute();
  const t = useTranslations(lang);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={`${t('nav.language')}: ${languages[lang]}`}
        className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#1E2D36] bg-[#10171D] px-2.5 text-xs font-medium text-slate-200 transition-colors duration-150 hover:border-[#39FF14]/60 hover:text-[#39FF14] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39FF14]"
      >
        <Globe className="h-3.5 w-3.5 text-[#39FF14]" />
        <span className="font-mono font-semibold">{languageCodes[lang]}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-150 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={t('nav.language')}
          className="absolute right-0 mt-2 w-44 rounded-xl border border-[#1E2D36] bg-[#10171D] p-1.5 shadow-2xl z-50"
        >
          {SUPPORTED_LANGS.map((code: Lang) => {
            const isActive = code === lang;
            const targetHref = translatePath(basePath, code);
            return (
              <Link
                key={code}
                href={targetHref}
                preserveLocale={false}
                hrefLang={code}
                role="menuitem"
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-lg px-2.5 py-2 text-xs transition-colors duration-150 ${
                  isActive
                    ? 'bg-[#39FF14]/15 font-semibold text-[#39FF14]'
                    : 'text-slate-200 hover:bg-[#1E2D36]/70 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="w-5 font-mono text-[11px] text-slate-400">
                    {languageCodes[code]}
                  </span>
                  <span>{languages[code]}</span>
                </span>
                {isActive && <Check className="h-3.5 w-3.5 text-[#39FF14]" />}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
