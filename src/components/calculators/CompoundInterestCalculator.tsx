import { useMemo, useState } from 'react';
import { ChevronDown, ChevronUp, RotateCcw } from 'lucide-react';
import { CalculatorResultCard } from '../ui/CalculatorResultCard';

type CompoundFrequency = 'daily' | 'monthly' | 'quarterly' | 'annually';
type TaxMode = 'none' | 'standard' | 'favored';

interface YearlyScheduleRow {
  year: number;
  investedTotal: number;
  yearlyInterest: number;
  cumulativeInterest: number;
  endBalanceGross: number;
  endBalanceNet: number;
  returnPct: number;
}

const FREQUENCY_OPTIONS: { value: CompoundFrequency; label: string; periodsPerYear: number }[] = [
  { value: 'daily', label: '일복리 (연 365회)', periodsPerYear: 365 },
  { value: 'monthly', label: '월복리 (연 12회)', periodsPerYear: 12 },
  { value: 'quarterly', label: '분기복리 (연 4회)', periodsPerYear: 4 },
  { value: 'annually', label: '연복리 (연 1회)', periodsPerYear: 1 },
];

const TAX_OPTIONS: { value: TaxMode; label: string; rate: number }[] = [
  { value: 'none', label: '세전 (0%)', rate: 0 },
  { value: 'standard', label: '일반과세 (15.4%)', rate: 0.154 },
  { value: 'favored', label: '세금우대 (9.5%)', rate: 0.095 },
];

function formatKoreanUnit(amount: number): string {
  const rounded = Math.round(amount);
  if (!Number.isFinite(rounded) || rounded <= 0) return '0원';
  const eok = Math.floor(rounded / 100_000_000);
  const man = Math.floor((rounded % 100_000_000) / 10_000);
  const rest = rounded % 10_000;

  if (eok > 0 && man > 0) {
    return `${eok.toLocaleString('ko-KR')}억 ${man.toLocaleString('ko-KR')}만원`;
  }
  if (eok > 0) {
    return `${eok.toLocaleString('ko-KR')}억원`;
  }
  if (man > 0 && rest >= 1000) {
    return `${man.toLocaleString('ko-KR')}만 ${rest.toLocaleString('ko-KR')}원`;
  }
  if (man > 0) {
    return `${man.toLocaleString('ko-KR')}만원`;
  }
  return `${rounded.toLocaleString('ko-KR')}원`;
}

export function CompoundInterestCalculator() {
  const [principalInput, setPrincipalInput] = useState('10000000');
  const [monthlyInput, setMonthlyInput] = useState('500000');
  const [rateInput, setRateInput] = useState('8');
  const [yearsInput, setYearsInput] = useState('10');
  const [frequency, setFrequency] = useState<CompoundFrequency>('monthly');
  const [taxMode, setTaxMode] = useState<TaxMode>('none');
  const [showSchedule, setShowSchedule] = useState(true);

  const handleReset = () => {
    setPrincipalInput('10000000');
    setMonthlyInput('500000');
    setRateInput('8');
    setYearsInput('10');
    setFrequency('monthly');
    setTaxMode('none');
  };

  const addPrincipal = (delta: number) => {
    const current = Math.max(0, parseFloat(principalInput) || 0);
    setPrincipalInput(String(current + delta));
  };

  const principal = parseFloat(principalInput);
  const monthly = monthlyInput.trim() === '' ? 0 : parseFloat(monthlyInput);
  const annualRate = parseFloat(rateInput);
  const years = parseInt(yearsInput, 10);

  const taxRate = TAX_OPTIONS.find((t) => t.value === taxMode)?.rate ?? 0;
  const periodsPerYear =
    FREQUENCY_OPTIONS.find((f) => f.value === frequency)?.periodsPerYear ?? 12;

  const isValid =
    Number.isFinite(principal) &&
    principal >= 0 &&
    Number.isFinite(monthly) &&
    monthly >= 0 &&
    (principal > 0 || monthly > 0) &&
    Number.isFinite(annualRate) &&
    annualRate >= 0 &&
    annualRate <= 100 &&
    Number.isFinite(years) &&
    years >= 1 &&
    years <= 50;

  const simulation = useMemo(() => {
    if (!isValid) {
      return {
        schedule: [] as YearlyScheduleRow[],
        totalInvested: 0,
        grossFinal: 0,
        grossInterest: 0,
        taxAmount: 0,
        netFinal: 0,
        netInterest: 0,
        effectiveAnnualRate: 0,
      };
    }

    const r = annualRate / 100;
    const monthlyGrowthFactor =
      r === 0 ? 1 : Math.pow(1 + r / periodsPerYear, periodsPerYear / 12);

    const schedule: YearlyScheduleRow[] = [];
    let balance = principal;
    let totalInvested = principal;
    let prevCumulativeInterest = 0;

    for (let yr = 1; yr <= years; yr++) {
      for (let m = 0; m < 12; m++) {
        balance = (balance + monthly) * monthlyGrowthFactor;
        totalInvested += monthly;
      }
      const cumulativeInterest = Math.max(0, balance - totalInvested);
      const yearlyInterest = Math.max(0, cumulativeInterest - prevCumulativeInterest);
      prevCumulativeInterest = cumulativeInterest;

      const netInterestAtYear = cumulativeInterest * (1 - taxRate);
      const endBalanceNet = totalInvested + netInterestAtYear;
      const returnPct = totalInvested > 0 ? (netInterestAtYear / totalInvested) * 100 : 0;

      schedule.push({
        year: yr,
        investedTotal: totalInvested,
        yearlyInterest,
        cumulativeInterest,
        endBalanceGross: balance,
        endBalanceNet,
        returnPct,
      });
    }

    const grossFinal = balance;
    const grossInterest = Math.max(0, grossFinal - totalInvested);
    const taxAmount = grossInterest * taxRate;
    const netInterest = grossInterest - taxAmount;
    const netFinal = totalInvested + netInterest;
    const effectiveAnnualRate =
      r === 0 ? 0 : (Math.pow(1 + r / periodsPerYear, periodsPerYear) - 1) * 100;

    return {
      schedule,
      totalInvested,
      grossFinal,
      grossInterest,
      taxAmount,
      netFinal,
      netInterest,
      effectiveAnnualRate,
    };
  }, [isValid, principal, monthly, annualRate, years, periodsPerYear, taxRate]);

  const fmtWon = (n: number) => `${Math.round(n).toLocaleString('ko-KR')}원`;
  const principalPct =
    isValid && simulation.netFinal > 0
      ? (simulation.totalInvested / simulation.netFinal) * 100
      : 100;
  const interestPct = isValid && simulation.netFinal > 0 ? 100 - principalPct : 0;
  const totalGainPct =
    isValid && simulation.totalInvested > 0
      ? (simulation.netInterest / simulation.totalInvested) * 100
      : 0;
  const ruleOf72Years = annualRate > 0 ? 72 / annualRate : null;

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-12 items-stretch">
        <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xs lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-base font-bold text-slate-900">
                복리계산기 조건 입력
              </h2>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex min-h-[44px] md:min-h-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-slate-300 hover:text-slate-900 transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>초기화</span>
              </button>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <div className="flex items-baseline justify-between gap-2">
                  <label
                    htmlFor="ci-principal"
                    className="block text-sm font-medium text-slate-700"
                  >
                    초기 투자 원금 (원)
                  </label>
                  <span className="font-mono text-xs font-medium text-[#15803d]">
                    {Number.isFinite(principal) && principal >= 0
                      ? formatKoreanUnit(principal)
                      : '—'}
                  </span>
                </div>
                <input
                  id="ci-principal"
                  type="number"
                  inputMode="numeric"
                  min="0"
                  step="100000"
                  value={principalInput}
                  onChange={(e) => setPrincipalInput(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
                />
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {[
                    { label: '+100만', value: 1_000_000 },
                    { label: '+500만', value: 5_000_000 },
                    { label: '+1,000만', value: 10_000_000 },
                    { label: '+1억', value: 100_000_000 },
                  ].map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => addPrincipal(preset.value)}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700 hover:border-[#16a34a] hover:text-[#15803d] transition-colors"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between gap-2">
                  <label htmlFor="ci-monthly" className="block text-sm font-medium text-slate-700">
                    매월 추가 적립금 (원)
                  </label>
                  <span className="font-mono text-xs font-medium text-[#15803d]">
                    {Number.isFinite(monthly) && monthly >= 0 ? formatKoreanUnit(monthly) : '—'}
                  </span>
                </div>
                <input
                  id="ci-monthly"
                  type="number"
                  inputMode="numeric"
                  min="0"
                  step="50000"
                  value={monthlyInput}
                  onChange={(e) => setMonthlyInput(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
                />
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {[
                    { label: '거치식(0원)', value: '0' },
                    { label: '30만원', value: '300000' },
                    { label: '50만원', value: '500000' },
                    { label: '100만원', value: '1000000' },
                  ].map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => setMonthlyInput(preset.value)}
                      className={`rounded-md border px-2 py-1 text-xs font-medium transition-colors ${
                        monthlyInput === preset.value
                          ? 'border-[#16a34a] bg-emerald-50 text-[#15803d]'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-[#16a34a] hover:text-[#15803d]'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="ci-rate" className="block text-sm font-medium text-slate-700">
                  연 수익률 / 이자율 (%)
                </label>
                <input
                  id="ci-rate"
                  type="number"
                  inputMode="decimal"
                  min="0"
                  max="100"
                  step="0.1"
                  value={rateInput}
                  onChange={(e) => setRateInput(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
                />
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {['3.5', '5', '8', '10', '12'].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setRateInput(preset)}
                      className={`rounded-md border px-2.5 py-1 text-xs font-mono font-medium transition-colors ${
                        rateInput === preset
                          ? 'border-[#16a34a] bg-emerald-50 text-[#15803d]'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-[#16a34a] hover:text-[#15803d]'
                      }`}
                    >
                      {preset}%
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="ci-years" className="block text-sm font-medium text-slate-700">
                  투자 기간 (년)
                </label>
                <input
                  id="ci-years"
                  type="number"
                  inputMode="numeric"
                  min="1"
                  max="50"
                  step="1"
                  value={yearsInput}
                  onChange={(e) => setYearsInput(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
                />
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {['3', '5', '10', '20', '30'].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setYearsInput(preset)}
                      className={`rounded-md border px-2.5 py-1 text-xs font-medium transition-colors ${
                        yearsInput === preset
                          ? 'border-[#16a34a] bg-emerald-50 text-[#15803d]'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-[#16a34a] hover:text-[#15803d]'
                      }`}
                    >
                      {preset}년
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="ci-frequency"
                  className="block text-sm font-medium text-slate-700"
                >
                  복리 계산 주기
                </label>
                <select
                  id="ci-frequency"
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value as CompoundFrequency)}
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:border-[#16a34a] focus:bg-white focus:outline-none"
                >
                  {FREQUENCY_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <span className="block text-sm font-medium text-slate-700">이자소득세 적용</span>
                <div className="mt-2 grid grid-cols-3 gap-1.5 rounded-lg border border-slate-200 bg-slate-100/80 p-1">
                  {TAX_OPTIONS.map((opt) => {
                    const active = taxMode === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setTaxMode(opt.value)}
                        className={`min-h-[40px] md:min-h-[34px] rounded-md px-2 py-1 text-xs font-medium transition-colors ${
                          active
                            ? 'bg-[#16a34a] text-white font-semibold shadow-xs'
                            : 'text-slate-700 hover:bg-white hover:text-slate-900'
                        }`}
                      >
                        {opt.label.split(' ')[0]}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 border-t border-slate-200 pt-4 text-xs text-slate-500">
            매월 추가 적립금은 매월 초 납입 기준이며, 일복리(365회)·월복리(12회)·분기복리(4회)·연복리(1회)의 실효 연이율(EAR{' '}
            {isValid ? `${simulation.effectiveAnnualRate.toFixed(2)}%` : '—'})을 정확히 반영합니다.
          </p>
        </div>

        <div className="lg:col-span-5">
          <CalculatorResultCard
            eyebrow={taxRate > 0 ? '세후 예상 만기 수령액' : '세전 예상 최종 금액'}
            primaryValue={isValid ? fmtWon(simulation.netFinal) : '—'}
            statusLabel={
              isValid
                ? `총 수익률 +${totalGainPct.toFixed(1)}% · ${formatKoreanUnit(simulation.netFinal)}`
                : '올바른 투자 금액과 기간을 입력하세요'
            }
            statusTone={isValid ? 'green' : 'amber'}
            copyText={
              isValid
                ? `복리계산기 결과 | 최종 금액: ${fmtWon(simulation.netFinal)} (${formatKoreanUnit(
                    simulation.netFinal
                  )}) | 총 투자원금: ${fmtWon(simulation.totalInvested)} | 복리 수익: ${fmtWon(
                    simulation.netInterest
                  )}`
                : ''
            }
            visualBar={
              isValid ? (
                <div>
                  <div className="flex justify-between text-xs text-slate-600 mb-1.5">
                    <span>원금 비중 ({principalPct.toFixed(1)}%)</span>
                    <span className="font-medium text-[#15803d]">
                      복리 수익 ({interestPct.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="flex h-2.5 w-full overflow-hidden rounded-full border border-slate-200 bg-slate-100">
                    <div className="h-full bg-slate-400" style={{ width: `${principalPct}%` }} />
                    <div className="h-full bg-[#16a34a]" style={{ width: `${interestPct}%` }} />
                  </div>
                </div>
              ) : null
            }
            metrics={[
              {
                label: '총 투자 원금',
                value: isValid ? fmtWon(simulation.totalInvested) : '—',
              },
              {
                label: taxRate > 0 ? '세후 순수익' : '총 복리 이자 수익',
                value: isValid ? fmtWon(simulation.netInterest) : '—',
                highlight: true,
              },
              ...(taxRate > 0
                ? [
                    {
                      label: `예상 세금 (${(taxRate * 100).toFixed(1)}%)`,
                      value: isValid ? `-${fmtWon(simulation.taxAmount)}` : '—',
                    },
                  ]
                : []),
              {
                label: '72의 법칙 (원금 2배 기간)',
                value:
                  isValid && ruleOf72Years !== null
                    ? `약 ${ruleOf72Years.toFixed(1)}년`
                    : '—',
              },
            ]}
          />
        </div>
      </div>

      {/* 연도별 복리 성장 테이블 */}
      {isValid && simulation.schedule.length > 0 && (
        <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xs">
          <button
            type="button"
            onClick={() => setShowSchedule((prev) => !prev)}
            className="flex min-h-[44px] md:min-h-0 w-full items-center justify-between text-left"
          >
            <div>
              <h3 className="font-display text-base font-bold text-slate-900">
                연도별 복리 수익 시뮬레이션 표 ({years}년)
              </h3>
              <p className="mt-0.5 text-xs text-slate-500">
                매년 누적 원금과 복리 이자가 눈덩이처럼 불어나는 과정을 확인하세요.
              </p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700">
              {showSchedule ? (
                <>
                  <span>접기</span>
                  <ChevronUp className="h-3.5 w-3.5" />
                </>
              ) : (
                <>
                  <span>표 보기</span>
                  <ChevronDown className="h-3.5 w-3.5" />
                </>
              )}
            </span>
          </button>

          {showSchedule && (
            <div className="mt-4 max-h-96 overflow-auto no-scrollbar rounded-lg border border-slate-200">
              <table className="w-full min-w-[600px] border-collapse text-left text-xs sm:text-sm">
                <thead className="sticky top-0 bg-slate-50 text-xs uppercase tracking-wider text-slate-600">
                  <tr className="border-b border-slate-200">
                    <th className="px-3 py-2.5 font-semibold">연차</th>
                    <th className="px-3 py-2.5 font-semibold">누적 원금</th>
                    <th className="px-3 py-2.5 font-semibold">해당 연도 이자</th>
                    <th className="px-3 py-2.5 font-semibold">누적 복리 이자</th>
                    <th className="px-3 py-2.5 font-semibold">
                      {taxRate > 0 ? '세후 잔액' : '최종 평가액'}
                    </th>
                    <th className="px-3 py-2.5 font-semibold">수익률</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {simulation.schedule.map((row) => (
                    <tr key={row.year} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-3 py-2.5 font-medium text-slate-900 tabular-nums">
                        {row.year}년차
                      </td>
                      <td className="px-3 py-2.5 font-mono text-slate-700 tabular-nums">
                        {fmtWon(row.investedTotal)}
                      </td>
                      <td className="px-3 py-2.5 font-mono text-slate-700 tabular-nums">
                        +{fmtWon(row.yearlyInterest)}
                      </td>
                      <td className="px-3 py-2.5 font-mono font-medium text-[#15803d] tabular-nums">
                        +{fmtWon(row.cumulativeInterest)}
                      </td>
                      <td className="px-3 py-2.5 font-mono font-semibold text-slate-900 tabular-nums">
                        {fmtWon(row.endBalanceNet)}
                      </td>
                      <td className="px-3 py-2.5 font-mono text-[#15803d] tabular-nums">
                        +{row.returnPct.toFixed(1)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
