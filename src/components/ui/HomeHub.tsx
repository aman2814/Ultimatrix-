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
    <div className="min-h-screen bg-white text-slate-900">
      <SeoSchema canonicalPath={pathname} />

      {/* Top Navigation Bar — Clean 3-Zone Contract */}
      <header className="sticky top-0 z-40 h-14 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-2 sm:gap-4 px-4 sm:px-6 lg:gap-8">
          <Link
            href="/"
            className="font-display text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap min-w-0 truncate sm:overflow-visible"
          >
            Ultimatrix <span className="text-[#16a34a]">Calculator</span>
          </Link>

          <nav
            aria-label="Calculator categories"
            className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-600"
          >
            {CALCULATOR_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleQuickJump(cat)}
                className="hover:text-[#15803d] transition-colors whitespace-nowrap shrink-0"
              >
                {t(`cat.${cat}`)}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <LanguageSwitcher />
            <Link
              href="/scientific-calculator"
              className="inline-flex min-h-[44px] sm:min-h-0 items-center rounded-lg bg-[#16a34a] px-3 sm:px-3.5 py-2 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-[#15803d] whitespace-nowrap shrink-0 max-[400px]:max-w-[112px] max-[400px]:truncate focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16a34a]"
            >
              {t('nav.scientific')}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Hero Hub with Interactive Omnitrix Core Selector Dial */}
        <section aria-label="Omnitrix Core Selector" className="text-center">
          <p className="text-xs font-medium tracking-wide text-slate-600">
            {localizedCalculators.length} · {t('hub.kicker')}
          </p>
          <h1 className="mx-auto mt-2 max-w-2xl font-display text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 text-balance">
            {t('hub.title')}
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-slate-600">
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
              <Search className="pointer-events-none absolute left-4 h-4 w-4 text-slate-500" />
              <input
                id="hub-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('hub.searchPlaceholder')}
                className="w-full rounded-xl border border-slate-300 bg-slate-50/70 py-3 pl-11 pr-10 text-base md:text-sm text-slate-900 shadow-xs placeholder:text-slate-500 focus:border-[#16a34a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#16a34a]/15"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label={t('hub.clearSearch')}
                  className="absolute right-3 rounded-md p-1 text-slate-500 hover:text-slate-900"
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
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-10 text-center">
              <p className="text-base font-medium text-slate-900">
                {t('hub.noResults')} (&ldquo;{query}&rdquo;)
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-4 rounded-lg bg-[#16a34a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#15803d]"
              >
                {t('hub.showAll')} ({localizedCalculators.length})
              </button>
            </div>
          ) : (
            groupedCategories.map(({ category, items }) => {
              const sectionId = category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              return (
                <div key={category} id={sectionId} className="scroll-mt-20">
                  <div className="flex items-baseline justify-between border-b border-slate-200 pb-3">
                    <h2 className="font-display text-xl font-bold text-slate-900">
                      {t(`cat.${category}`)}
                    </h2>
                    <span className="font-mono text-xs text-slate-500 tabular-nums">
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
                          className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition-all duration-150 hover:border-[#16a34a] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16a34a]"
                        >
                          <div>
                            <div className="text-xs text-slate-500">
                              <span>{t(`cat.${calc.category}`)}</span>
                              <span aria-hidden="true"> · </span>
                              <span>{t('hub.cardMeta')}</span>
                            </div>
                            <h3 className="mt-2 font-display text-lg font-bold text-slate-900 group-hover:text-[#15803d] transition-colors">
                              {calc.name}
                            </h3>
                            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                              {calc.tagline}
                            </p>
                          </div>

                          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-medium text-slate-500 group-hover:text-[#15803d] transition-colors">
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

      <footer className="mt-16 border-t border-slate-200 bg-slate-50/70 py-8">
        <div className="mx-auto max-w-6xl space-y-6 px-4 text-xs text-slate-600 sm:px-6">
          {/* Prominent Company & Legal Quick-Access Info Bar */}
          <div className="rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-xs sm:px-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#15803d]">
                {t('footer.companyLegal')}
              </span>
              <nav
                aria-label={t('footer.companyLegal')}
                className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm font-medium"
              >
                <Link
                  href="/about"
                  className="inline-flex min-h-[44px] md:min-h-0 items-center text-slate-800 hover:text-[#15803d] transition-colors whitespace-nowrap"
                >
                  {t('nav.about')}
                </Link>
                <Link
                  href="/privacy-policy"
                  className="inline-flex min-h-[44px] md:min-h-0 items-center text-slate-800 hover:text-[#15803d] transition-colors whitespace-nowrap"
                >
                  {t('nav.privacy')}
                </Link>
                <Link
                  href="/terms-and-conditions"
                  className="inline-flex min-h-[44px] md:min-h-0 items-center text-slate-800 hover:text-[#15803d] transition-colors whitespace-nowrap"
                >
                  {t('nav.terms')}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-[44px] md:min-h-0 items-center text-slate-800 hover:text-[#15803d] transition-colors whitespace-nowrap"
                >
                  {t('nav.contact')}
                </Link>
              </nav>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-slate-600">
              © {new Date().getFullYear()} {t('hub.footerNote')}
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              <Link
                href="/bmi-calculator"
                className="inline-flex min-h-[44px] md:min-h-0 items-center hover:text-slate-900 transition-colors"
              >
                BMI
              </Link>
              <Link
                href="/emi-calculator"
                className="inline-flex min-h-[44px] md:min-h-0 items-center hover:text-slate-900 transition-colors"
              >
                EMI
              </Link>
              <Link
                href="/sip-calculator"
                className="inline-flex min-h-[44px] md:min-h-0 items-center hover:text-slate-900 transition-colors"
              >
                SIP
              </Link>
              <Link
                href="/gst-calculator"
                className="inline-flex min-h-[44px] md:min-h-0 items-center hover:text-slate-900 transition-colors"
              >
                GST
              </Link>
              <Link
                href="/scientific-calculator"
                className="inline-flex min-h-[44px] md:min-h-0 items-center hover:text-slate-900 transition-colors"
              >
                {t('nav.scientific')}
              </Link>
              <a
                href="/sitemap.xml"
                className="inline-flex min-h-[44px] md:min-h-0 items-center hover:text-slate-900 transition-colors"
              >
                {t('nav.sitemap')}
              </a>
            </div>
          </div>

          <nav
            aria-label={t('nav.language')}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-200 pt-4"
          >
            {SUPPORTED_LANGS.map((code) => (
              <Link
                key={code}
                href={translatePath('/', code)}
                preserveLocale={false}
                hrefLang={code}
                className={`inline-flex min-h-[44px] md:min-h-0 items-center transition-colors whitespace-nowrap ${
                  code === lang ? 'font-semibold text-[#15803d]' : 'text-slate-600 hover:text-slate-900'
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
