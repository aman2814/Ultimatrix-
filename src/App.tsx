import { getCalculatorBySlug } from './data/calculators';
import { getLocalizedCalculator } from './i18n/calculators';
import { useTranslations } from './i18n/utils';
import { RouterProvider, useRoute, Link } from './components/ui/Router';
import { HomeHub } from './components/ui/HomeHub';
import { CalculatorShell } from './components/ui/CalculatorShell';
import { BmiCalculator } from './components/calculators/BmiCalculator';
import { AgeCalculator } from './components/calculators/AgeCalculator';
import { DateCalculator } from './components/calculators/DateCalculator';
import { TimeDurationCalculator } from './components/calculators/TimeDurationCalculator';
import { PregnancyDueDateCalculator } from './components/calculators/PregnancyDueDateCalculator';
import { PercentageCalculator } from './components/calculators/PercentageCalculator';
import { CgpaToPercentageCalculator } from './components/calculators/CgpaToPercentageCalculator';
import { GpaCalculator } from './components/calculators/GpaCalculator';
import { DiscountCalculator } from './components/calculators/DiscountCalculator';
import { ScientificCalculator } from './components/calculators/ScientificCalculator';
import { EmiCalculator } from './components/calculators/EmiCalculator';
import { SipCalculator } from './components/calculators/SipCalculator';
import { GstCalculator } from './components/calculators/GstCalculator';
import { ChildBmiCalculator } from './components/calculators/ChildBmiCalculator';
import { BmiByAgeCalculator } from './components/calculators/BmiByAgeCalculator';
import { DogPregnancyCalculator } from './components/calculators/DogPregnancyCalculator';
import { HdfcEmiCalculator } from './components/calculators/HdfcEmiCalculator';
import { ChildAgeCalculator } from './components/calculators/ChildAgeCalculator';
import { CasioFx115esCalculator } from './components/calculators/CasioFx115esCalculator';
import { Sharp12DigitCalculator } from './components/calculators/Sharp12DigitCalculator';
import { WeightLossPercentageCalculator } from './components/calculators/WeightLossPercentageCalculator';
import { HighSchoolGpaCalculator } from './components/calculators/HighSchoolGpaCalculator';
import { DiscountWithTaxCalculator } from './components/calculators/DiscountWithTaxCalculator';
import { HeightCalculator } from './components/calculators/HeightCalculator';

function renderCalculatorWidget(slug: string) {
  switch (slug) {
    case '/bmi-calculator':
      return <BmiCalculator variant="general" />;
    case '/bmi-calculator/men':
      return <BmiCalculator variant="men" />;
    case '/bmi-calculator/women':
      return <BmiCalculator variant="women" />;
    case '/child-bmi-calculator':
      return <ChildBmiCalculator />;
    case '/bmi-calculator-by-age':
      return <BmiByAgeCalculator />;
    case '/height-calculator':
      return <HeightCalculator />;
    case '/dog-pregnancy-due-date-calculator':
      return <DogPregnancyCalculator />;
    case '/age-calculator':
      return <AgeCalculator />;
    case '/child-age-calculator':
      return <ChildAgeCalculator />;
    case '/date-calculator':
      return <DateCalculator />;
    case '/time-duration-calculator':
      return <TimeDurationCalculator />;
    case '/pregnancy-due-date-calculator':
      return <PregnancyDueDateCalculator />;
    case '/percentage-calculator':
      return <PercentageCalculator />;
    case '/cgpa-to-percentage-calculator':
      return <CgpaToPercentageCalculator />;
    case '/gpa-calculator':
      return <GpaCalculator />;
    case '/high-school-gpa-calculator':
      return <HighSchoolGpaCalculator />;
    case '/weight-loss-percentage-calculator':
      return <WeightLossPercentageCalculator />;
    case '/discount-calculator':
      return <DiscountCalculator />;
    case '/discount-calculator-with-tax':
      return <DiscountWithTaxCalculator />;
    case '/scientific-calculator':
      return <ScientificCalculator />;
    case '/casio-fx-115es-scientific-calculator':
      return <CasioFx115esCalculator />;
    case '/sharp-12-digit-scientific-calculator':
      return <Sharp12DigitCalculator />;
    case '/emi-calculator':
      return <EmiCalculator />;
    case '/hdfc-emi-calculator':
      return <HdfcEmiCalculator />;
    case '/sip-calculator':
      return <SipCalculator />;
    case '/gst-calculator':
      return <GstCalculator />;
    default:
      return null;
  }
}

function ActiveView() {
  const { basePath, lang } = useRoute();
  const t = useTranslations(lang);

  if (basePath === '/') {
    return <HomeHub />;
  }

  const calculator = getCalculatorBySlug(basePath);
  if (calculator) {
    const localizedCalculator = getLocalizedCalculator(calculator, lang);
    return (
      <CalculatorShell calculator={localizedCalculator}>
        {renderCalculatorWidget(calculator.slug)}
      </CalculatorShell>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#070B0E] px-4 text-center text-slate-100">
      <h1 className="font-display text-3xl font-bold text-white">{t('shell.notFoundTitle')}</h1>
      <p className="mt-2 max-w-md text-sm text-slate-300">{t('shell.notFoundDesc')}</p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-[#39FF14] px-5 py-2.5 text-sm font-semibold text-[#070B0E] hover:bg-[#39FF14]/90"
      >
        {t('shell.notFoundCta')}
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <ActiveView />
    </RouterProvider>
  );
}
