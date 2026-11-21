import { useState } from 'react';
import { ArrowLeft, Check, ChevronRight, Copy, Mail, ShieldCheck, User } from 'lucide-react';
import { getInfoPageContent, InfoPageSlug } from '../../data/infoPages';
import { languages, SUPPORTED_LANGS } from '../../i18n/ui';
import { useTranslations } from '../../i18n/utils';
import { SeoSchema } from '../seo/SeoSchema';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Link, useRoute } from './Router';

interface InfoPageViewProps {
  slug: InfoPageSlug;
}

const INFO_NAV_ITEMS: { slug: InfoPageSlug; key: 'nav.about' | 'nav.privacy' | 'nav.terms' | 'nav.contact' }[] = [
  { slug: '/about', key: 'nav.about' },
  { slug: '/privacy-policy', key: 'nav.privacy' },
  { slug: '/terms-and-conditions', key: 'nav.terms' },
  { slug: '/contact', key: 'nav.contact' },
];

export function InfoPageView({ slug }: InfoPageViewProps) {
  const { lang, pathname, basePath, translatePath } = useRoute();
  const t = useTranslations(lang);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const page = getInfoPageContent(slug, lang);
  const labelKey = INFO_NAV_ITEMS.find((item) => item.slug === slug)?.key ?? 'nav.about';
  const navLabel = t(labelKey);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('amangu2814@gmail.com');
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <SeoSchema
        canonicalPath={pathname}
        pageMeta={{
          title: page.metaTitle,
          description: page.metaDescription,
          name: navLabel,
          type: page.schemaType,
        }}
      />

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

            <nav
              aria-label="Breadcrumb"
              className="hidden lg:flex min-w-0 items-center gap-1.5 text-xs text-slate-500"
            >
              <Link href="/" className="hover:text-slate-900 transition-colors whitespace-nowrap">
                {t('nav.home')}
              </Link>
              <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-400" />
              <span className="truncate font-medium text-slate-800">{navLabel}</span>
            </nav>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
        {/* Quick Cross-Navigation Between Company & Legal Pages */}
        <nav
          aria-label={t('footer.companyLegal')}
          className="mb-6 flex flex-wrap items-center gap-2 rounded-xl border border-slate-200 bg-slate-100/80 p-1.5"
        >
          {INFO_NAV_ITEMS.map((item) => {
            const isActive = item.slug === slug;
            return (
              <Link
                key={item.slug}
                href={item.slug}
                className={`inline-flex min-h-[44px] md:min-h-0 items-center rounded-lg px-3 py-2 md:py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-[#16a34a] text-white font-semibold shadow-xs'
                    : 'text-slate-700 hover:bg-white hover:text-slate-900'
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span>{t('footer.companyLegal')}</span>
            <span aria-hidden="true">·</span>
            <span>{t('info.lastUpdated')}</span>
          </div>
          <h1 className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            {page.h1}
          </h1>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600">
            {page.subtitle}
          </p>
        </div>

        {/* Creator / Contact Card when applicable */}
        {page.showCreatorCard && (
          <section
            aria-label="Creator and Contact Information"
            className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 sm:p-6 shadow-xs"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3.5 min-w-0">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-200 bg-white text-[#15803d] shadow-xs">
                  <User className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#15803d]">
                    Creator &amp; Maintainer
                  </p>
                  <h2 className="mt-0.5 font-display text-lg font-bold text-slate-900">
                    Aman Gutpta
                  </h2>
                  <p className="text-sm text-slate-700">
                    Known as <span className="font-semibold text-slate-900">&ldquo;Call me azmath&rdquo;</span>
                  </p>
                  <a
                    href="mailto:amangu2814@gmail.com"
                    className="mt-1.5 inline-flex items-center gap-1.5 font-mono text-sm font-medium text-[#15803d] hover:underline break-all"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    <span>amangu2814@gmail.com</span>
                  </a>
                </div>
              </div>

              {page.showContactActions && (
                <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                  <a
                    href="mailto:amangu2814@gmail.com?subject=Ultimatrix%20Calculator%20Inquiry"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#16a34a] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#15803d]"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Email Us</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-xs transition-colors hover:border-[#16a34a] hover:text-[#15803d]"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-4 w-4 text-[#15803d]" />
                        <span className="text-[#15803d]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Content Sections */}
        <div className="space-y-5">
          {page.sections.map((section) => (
            <section
              key={section.heading}
              className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xs"
            >
              <h2 className="flex items-center gap-2 font-display text-lg font-bold text-slate-900">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#16a34a]" />
                <span>{section.heading}</span>
              </h2>
              <div className="mt-3 space-y-3 text-sm sm:text-base leading-relaxed text-slate-700">
                {section.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-4 space-y-2 border-t border-slate-200 pt-4 text-sm text-slate-700">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#16a34a]"
                      />
                      <span className="break-words">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </main>

      <footer className="mt-12 border-t border-slate-200 bg-slate-50/70 py-8">
        <div className="mx-auto max-w-6xl space-y-5 px-4 text-xs text-slate-600 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-slate-600">
              © {new Date().getFullYear()} {t('shell.footerNote')}
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
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
