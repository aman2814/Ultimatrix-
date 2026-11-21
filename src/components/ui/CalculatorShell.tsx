import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronRight } from 'lucide-react';
import { CalculatorDefinition, getCalculatorBySlug } from '../../data/calculators';
import { getLocalizedCalculator } from '../../i18n/calculators';
import { languages, SUPPORTED_LANGS } from '../../i18n/ui';
import { useTranslations } from '../../i18n/utils';
import { SeoSchema } from '../seo/SeoSchema';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Link, useRoute } from './Router';

interface CalculatorShellProps {
  calculator: CalculatorDefinition;
  children: React.ReactNode;
}

export function CalculatorShell({ calculator, children }: CalculatorShellProps) {
  const { lang, pathname, basePath, translatePath } = useRoute();
  const t = useTranslations(lang);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const relatedCalculators = calculator.relatedSlugs
    .map((slug) => getCalculatorBySlug(slug))
    .filter((item): item is CalculatorDefinition => Boolean(item))
    .map((item) => getLocalizedCalculator(item, lang));

  const categoryAnchor = `/#${calculator.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SeoSchema calculator={calculator} canonicalPath={pathname} />

      {/* Slim 56px Sticky Focus Header */}
      <header className="sticky top-0 z-40 h-14 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-2 sm:gap-3 px-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-2 sm:gap-4">
            <Link
              href="/"
              className="inline-flex min-h-[44px] sm:min-h-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 shadow-xs transition-colors duration-150 hover:border-[#16a34a] hover:text-[#15803d] whitespace-nowrap min-w-0 max-w-[calc(100vw-7.5rem)] sm:max-w-none sm:shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16a34a]"
            >
              <ArrowLeft className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{t('nav.allCalculators')}</span>
            </Link>

            {/* Clickable SEO Breadcrumbs */}
            <nav
              aria-label="Breadcrumb"
              className="hidden lg:flex min-w-0 items-center gap-1.5 text-xs text-slate-500"
            >
              <Link href="/" className="hover:text-slate-900 transition-colors whitespace-nowrap">
                {t('nav.home')}
              </Link>
              <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-400" />
              <Link
                href={categoryAnchor}
                className="hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                {t(`cat.${calculator.category}`)}
              </Link>
              <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-400" />
              <span className="truncate font-medium text-slate-800">{calculator.name}</span>
            </nav>
          </div>

          {/* Right Controls: Optional Quick-Switch Variants + Language Switcher */}
          <div className="flex items-center gap-2 shrink-0">
            {calculator.variants && calculator.variants.length > 0 && (
              <nav
                aria-label="Related calculator variants"
                className="hidden sm:flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-100/80 p-1 shrink-0"
              >
                {calculator.variants.map((variant) => {
                  const isActive = variant.slug === calculator.slug;
                  return (
                    <Link
                      key={variant.slug}
                      href={variant.slug}
                      className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 ${
                        isActive
                          ? 'bg-[#16a34a] text-white font-semibold shadow-xs'
                          : 'text-slate-700 hover:bg-white hover:text-slate-900'
                      }`}
                    >
                      {variant.label}
                    </Link>
                  );
                })}
              </nav>
            )}
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Main Focus Content — Immediate Above-the-Fold Tool */}
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>{t(`cat.${calculator.category}`)}</span>
            <span aria-hidden="true">·</span>
            <span>{t('shell.realTime')}</span>
          </div>
          <h1 className="mt-1.5 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
            {calculator.h1}
          </h1>
          <p className="mt-1.5 max-w-2xl text-sm sm:text-base text-slate-600">
            {calculator.tagline}
          </p>
          {calculator.variants && calculator.variants.length > 0 && (
            <nav
              aria-label="Related calculator variants"
              className="mt-4 flex sm:hidden flex-wrap items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-100/80 p-1"
            >
              {calculator.variants.map((variant) => {
                const isActive = variant.slug === calculator.slug;
                return (
                  <Link
                    key={variant.slug}
                    href={variant.slug}
                    className={`inline-flex min-h-[40px] items-center rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap ${
                      isActive
                        ? 'bg-[#16a34a] text-white font-semibold shadow-xs'
                        : 'text-slate-700 hover:bg-white hover:text-slate-900'
                    }`}
                  >
                    {variant.label}
                  </Link>
                );
              })}
            </nav>
          )}
        </div>

        {/* Interactive Calculator Workspace */}
        <section aria-label={`${calculator.name} workspace`}>{children}</section>

        {/* Knowledge Core SEO Section */}
        <section
          aria-label="Knowledge Core"
          className="mt-12 space-y-8 border-t border-slate-200 pt-10"
        >
          <div className="grid gap-6 lg:grid-cols-12">
            {/* 1. Direct Answer Summary Box */}
            <div className="min-w-0 rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-6 lg:col-span-5">
              <h2 className="font-display text-lg font-bold text-slate-900">
                {t('shell.directAnswer')}
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
                {calculator.directAnswer}
              </p>
            </div>

            {/* 2. Formula & Worked Example Card */}
            <div className="min-w-0 rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xs lg:col-span-7">
              <h2 className="font-display text-lg font-bold text-slate-900">
                {calculator.formulaTitle}
              </h2>
              <div className="mt-3 overflow-x-auto no-scrollbar rounded-lg border border-emerald-200 bg-emerald-50/70 px-4 py-3 font-mono text-xs sm:text-sm font-medium text-[#15803d] tabular-nums">
                {calculator.formulaExpression}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {calculator.formulaNotes}
              </p>
              <div className="mt-4 border-t border-slate-200 pt-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {t('shell.workedExample')}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-800 tabular-nums">
                  {calculator.workedExample}
                </p>
              </div>
            </div>
          </div>

          {/* 3. Clean HTML Reference Table */}
          <div className="min-w-0 rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xs">
            <h2 className="font-display text-lg font-bold text-slate-900">{calculator.tableTitle}</h2>
            <div className="mt-4 overflow-x-auto no-scrollbar">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider text-slate-600">
                    {calculator.tableHeaders.map((header) => (
                      <th key={header} className="px-3 py-2.5 font-semibold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {calculator.tableRows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className="transition-colors hover:bg-slate-50/80"
                    >
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className={`px-3 py-2.5 tabular-nums ${
                            cIdx === 0
                              ? 'font-medium text-slate-900'
                              : 'font-mono text-xs sm:text-sm text-slate-700'
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 4. Accessible FAQ Accordion */}
          <div className="min-w-0 rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xs">
            <h2 className="font-display text-lg font-bold text-slate-900">
              {t('shell.faqTitle')}
            </h2>
            <div className="mt-4 divide-y divide-slate-200">
              {calculator.faqs.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div key={faq.question} className="py-3 first:pt-0 last:pb-0">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      className="flex min-h-[44px] md:min-h-0 w-full items-center justify-between gap-4 py-2.5 md:py-2 text-left text-sm sm:text-base font-semibold text-slate-900 transition-colors hover:text-[#15803d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16a34a]"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-150 ${
                          isOpen ? 'rotate-180 text-[#15803d]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <p className="pb-2 pr-6 text-sm leading-relaxed text-slate-600">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5. Related Calculators */}
          {relatedCalculators.length > 0 && (
            <div>
              <h2 className="font-display text-lg font-bold text-slate-900">
                {t('shell.relatedTitle')}
              </h2>
              <div
                className={`mt-4 grid gap-4 ${
                  relatedCalculators.length === 4
                    ? 'sm:grid-cols-2 lg:grid-cols-4'
                    : relatedCalculators.length === 2
                    ? 'sm:grid-cols-2'
                    : 'sm:grid-cols-3'
                }`}
              >
                {relatedCalculators.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={rel.slug}
                    className="group rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition-all duration-150 hover:border-[#16a34a] hover:shadow-md"
                  >
                    <div className="text-xs text-slate-500">
                      <span>{t(`cat.${rel.category}`)}</span>
                      <span aria-hidden="true"> · </span>
                      <span>{t('shell.calculatorWord')}</span>
                    </div>
                    <h3 className="mt-1.5 font-display text-base font-bold text-slate-900 group-hover:text-[#15803d] transition-colors">
                      {rel.name}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">{rel.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>

      <footer className="mt-12 border-t border-slate-200 bg-slate-50/70 py-8">
        <div className="mx-auto max-w-6xl space-y-5 px-4 text-xs text-slate-600 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-slate-600">
              © {new Date().getFullYear()} {t('shell.footerNote')}
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              <Link
                href="/about"
                className="inline-flex min-h-[44px] md:min-h-0 items-center font-medium text-slate-800 hover:text-[#15803d] transition-colors"
              >
                {t('nav.about')}
              </Link>
              <Link
                href="/privacy-policy"
                className="inline-flex min-h-[44px] md:min-h-0 items-center font-medium text-slate-800 hover:text-[#15803d] transition-colors"
              >
                {t('nav.privacy')}
              </Link>
              <Link
                href="/terms-and-conditions"
                className="inline-flex min-h-[44px] md:min-h-0 items-center font-medium text-slate-800 hover:text-[#15803d] transition-colors"
              >
                {t('nav.terms')}
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] md:min-h-0 items-center font-medium text-slate-800 hover:text-[#15803d] transition-colors"
              >
                {t('nav.contact')}
              </Link>
              <Link
                href="/"
                className="inline-flex min-h-[44px] md:min-h-0 items-center hover:text-slate-900 transition-colors"
              >
                {t('nav.allCalculators')}
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
                href={translatePath(basePath, code)}
                preserveLocale={false}
                hrefLang={code}
                className={`transition-colors whitespace-nowrap ${
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
