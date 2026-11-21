import { useMemo, useState } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import {
  CALCULATORS,
  CALCULATOR_CATEGORIES,
  CalculatorCategory,
  CalculatorDefinition,
} from '../../data/calculators';
import { getLocalizedCalculator } from '../../i18n/calculators';
import { languages, SUPPORTED_LANGS } from '../../i18n/ui';
import { useTranslations } from '../../i18n/utils';
import { SeoSchema } from '../seo/SeoSchema';
import { LanguageSwitcher } from './LanguageSwitcher';
import { DialCategory, OmnitrixDial } from './OmnitrixDial';
import { Link, useRoute } from './Router';

export function HomeHub() {
  const { lang, pathname, translatePath } = useRoute();
  const t = useTranslations(lang);
  const [selectedCategory, setSelectedCategory] = useState<DialCategory>('All');
  const [query, setQuery] = useState('');

  const localizedCalculators = useMemo(
    () => CALCULATORS.map((calc) => getLocalizedCalculator(calc, lang)),
    [lang]
  );

  const categoryCounts = useMemo(() => {
    const map: Record<DialCategory, number> = {
      All: localizedCalculators.length,
      Health: 0,
      Finance: 0,
      'Date & Time': 0,
      'Math & Grades': 0,
      Everyday: 0,
    };
    localizedCalculators.forEach((c) => {
      map[c.category] += 1;
    });
    return map;
  }, [localizedCalculators]);

  const filteredCalculators = useMemo(() => {
    const q = query.trim().toLowerCase();
    return localizedCalculators.filter((calc) => {
      const matchesCat = selectedCategory === 'All' || calc.category === selectedCategory;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        calc.name.toLowerCase().includes(q) ||
        calc.tagline.toLowerCase().includes(q) ||
        t(`cat.${calc.category}`).toLowerCase().includes(q) ||
        calc.category.toLowerCase().includes(q) ||
        calc.keywords.some((kw) => kw.toLowerCase().includes(q))
      );
    });
  }, [localizedCalculators, selectedCategory, query, t]);

  const groupedCategories = useMemo(() => {
    const categoriesToShow: CalculatorCategory[] =
      selectedCategory === 'All' ? CALCULATOR_CATEGORIES : [selectedCategory];

    return categoriesToShow
      .map((category) => ({
        category,
        items: filteredCalculators.filter((c) => c.category === category),
      }))
      .filter((group) => group.items.length > 0);
  }, [filteredCalculators, selectedCategory]);

  const handleQuickJump = (category: CalculatorCategory) => {
    setSelectedCategory(category);
    const id = category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <div className="min-h-screen bg-[#070B0E] text-slate-100">
      <SeoSchema canonicalPath={pathname} />

      {/* Top Navigation Bar — Clean 3-Zone Contract */}
      <header className="sticky top-0 z-40 h-14 border-b border-[#1E2D36] bg-[#070B0E]/95 backdrop-blur-sm">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:gap-8">
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0"
          >
            Ultimatrix <span className="text-[#39FF14]">Calculator</span>
          </Link>

          <nav
            aria-label="Calculator categories"
            className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-300"
          >
            {CALCULATOR_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleQuickJump(cat)}
                className="hover:text-[#39FF14] transition-colors whitespace-nowrap shrink-0"
              >
                {t(`cat.${cat}`)}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2.5 shrink-0">
            <LanguageSwitcher />
            <Link
              href="/scientific-calculator"
              className="rounded-lg bg-[#39FF14] px-3.5 py-2 text-xs sm:text-sm font-semibold text-[#070B0E] transition-colors hover:bg-[#39FF14]/90 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39FF14]"
            >
              {t('nav.scientific')}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Hero Hub with Interactive Omnitrix Core Selector Dial */}
        <section aria-label="Omnitrix Core Selector" className="text-center">
          <p className="text-xs font-medium tracking-wide text-slate-400">
            {localizedCalculators.length} · {t('hub.kicker')}
          </p>
          <h1 className="mx-auto mt-2 max-w-2xl font-display text-3xl sm:text-5xl font-bold tracking-tight text-white text-balance">
            {t('hub.title')}
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-slate-300">
            {t('hub.subtitle')}
          </p>

          <div className="mt-8">
            <OmnitrixDial
              selected={selectedCategory}
              onSelect={setSelectedCategory}
              counts={categoryCounts}
            />
          </div>

          {/* Live Instant Search Filter Bar */}
          <div className="mx-auto mt-7 max-w-xl">
            <label htmlFor="hub-search" className="sr-only">
              {t('hub.searchPlaceholder')}
            </label>
            <div className="relative flex items-center">
              <Search className="pointer-events-none absolute left-4 h-4 w-4 text-slate-400" />
              <input
                id="hub-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('hub.searchPlaceholder')}
                className="w-full rounded-xl border border-[#1E2D36] bg-[#10171D] py-3 pl-11 pr-10 text-sm text-white placeholder:text-slate-400 focus:border-[#39FF14] focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label={t('hub.clearSearch')}
                  className="absolute right-3 rounded-md p-1 text-slate-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Categorized Semantic Link Grid */}
        <section aria-label={t('nav.allCalculators')} className="mt-12 space-y-10">
          {groupedCategories.length === 0 ? (
            <div className="rounded-xl border border-[#1E2D36] bg-[#10171D] p-10 text-center">
              <p className="text-base font-medium text-white">
                {t('hub.noResults')} (&ldquo;{query}&rdquo;)
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-4 rounded-lg bg-[#39FF14] px-4 py-2 text-sm font-semibold text-[#070B0E] hover:bg-[#39FF14]/90"
              >
                {t('hub.showAll')} ({localizedCalculators.length})
              </button>
            </div>
          ) : (
            groupedCategories.map(({ category, items }) => {
              const sectionId = category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return (
                <div key={category} id={sectionId} className="scroll-mt-20">
                  <div className="flex items-baseline justify-between border-b border-[#1E2D36] pb-3">
                    <h2 className="font-display text-xl font-bold text-white">
                      {t(`cat.${category}`)}
                    </h2>
                    <span className="font-mono text-xs text-slate-400 tabular-nums">
                      {items.length} {items.length === 1 ? t('hub.toolSingular') : t('hub.toolPlural')}
                    </span>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((calc: CalculatorDefinition) => {
                      const localizedHref = translatePath(calc.slug, lang);
                      return (
                        <Link
                          key={calc.slug}
                          href={calc.slug}
                          className="group flex flex-col justify-between rounded-xl border border-[#1E2D36] bg-[#10171D] p-5 transition-colors duration-150 hover:border-[#39FF14]/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39FF14]"
                        >
                          <div>
                            <div className="text-xs text-slate-400">
                              <span>{t(`cat.${calc.category}`)}</span>
                              <span aria-hidden="true"> · </span>
                              <span>{t('hub.cardMeta')}</span>
                            </div>
                            <h3 className="mt-2 font-display text-lg font-bold text-white group-hover:text-[#39FF14] transition-colors">
                              {calc.name}
                            </h3>
                            <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                              {calc.tagline}
                            </p>
                          </div>

                          <div className="mt-4 flex items-center justify-between border-t border-[#1E2D36]/80 pt-3 text-xs font-medium text-slate-400 group-hover:text-[#39FF14] transition-colors">
                            <span className="font-mono truncate">{localizedHref}</span>
                            <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </section>
      </main>

      <footer className="mt-16 border-t border-[#1E2D36] bg-[#070B0E] py-8">
        <div className="mx-auto max-w-6xl space-y-5 px-4 text-xs text-slate-400 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {t('hub.footerNote')}
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/bmi-calculator" className="hover:text-white transition-colors">
                BMI
              </Link>
              <Link href="/emi-calculator" className="hover:text-white transition-colors">
                EMI
              </Link>
              <Link href="/sip-calculator" className="hover:text-white transition-colors">
                SIP
              </Link>
              <Link href="/gst-calculator" className="hover:text-white transition-colors">
                GST
              </Link>
              <Link href="/scientific-calculator" className="hover:text-white transition-colors">
                {t('nav.scientific')}
              </Link>
              <a href="/sitemap.xml" className="hover:text-white transition-colors">
                {t('nav.sitemap')}
              </a>
            </div>
          </div>

          <nav
            aria-label={t('nav.language')}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#1E2D36]/70 pt-4"
          >
            {SUPPORTED_LANGS.map((code) => (
              <Link
                key={code}
                href={translatePath('/', code)}
                preserveLocale={false}
                hrefLang={code}
                className={`transition-colors whitespace-nowrap ${
                  code === lang ? 'font-semibold text-[#39FF14]' : 'hover:text-white'
                }`}
              >
                {languages[code]}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
