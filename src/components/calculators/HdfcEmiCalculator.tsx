import { useState } from 'react';
import { ChevronDown, RotateCcw } from 'lucide-react';
import { CalculatorResultCard } from '../ui/CalculatorResultCard';

type LoanType = 'home' | 'car' | 'personal';

const LOAN_PRESETS: Record<LoanType, { label: string; amount: string; rate: string; years: string }> = {
  home: { label: 'Home Loan', amount: '5000000', rate: '8.75', years: '20' },
  car: { label: 'Car Loan', amount: '900000', rate: '9.4', years: '5' },
  personal: { label: 'Personal Loan', amount: '500000', rate: '10.75', years: '4' },
};

interface YearlyScheduleRow {
  year: number;
  openingBalance: number;
  principalPaid: number;
  interestPaid: number;
  closingBalance: number;
}

function fmtInr(n: number): string {
  return `₹${Math.round(n).toLocaleString('en-IN')}`;
}

function fmtInrPrecise(n: number): string {
  return `₹${n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function HdfcEmiCalculator() {
  const [loanType, setLoanType] = useState<LoanType>('home');
  const [amount, setAmount] = useState(LOAN_PRESETS.home.amount);
  const [rate, setRate] = useState(LOAN_PRESETS.home.rate);
  const [tenure, setTenure] = useState(LOAN_PRESETS.home.years);
  const [tenureUnit, setTenureUnit] = useState<'years' | 'months'>('years');
  const [showSchedule, setShowSchedule] = useState(false);

  const selectLoanType = (type: LoanType) => {
    setLoanType(type);
    const preset = LOAN_PRESETS[type];
    setAmount(preset.amount);
    setRate(preset.rate);
    setTenure(preset.years);
    setTenureUnit('years');
  };

  const handleReset = () => selectLoanType('home');

  const p = parseFloat(amount);
  const annual = parseFloat(rate);
  const t = parseFloat(tenure);
  const months = tenureUnit === 'years' ? Math.round(t * 12) : Math.round(t);

  const isValid =
    Number.isFinite(p) &&
    p > 0 &&
    Number.isFinite(annual) &&
    annual >= 0 &&
    Number.isFinite(t) &&
    months >= 1 &&
    months <= 600;

  let emi = 0;
  let totalPayment = 0;
  let totalInterest = 0;
  const schedule: YearlyScheduleRow[] = [];

  if (isValid) {
    const r = annual / 12 / 100;
    if (r === 0) {
      emi = p / months;
    } else {
      const factor = Math.pow(1 + r, months);
      emi = (p * r * factor) / (factor - 1);
    }
    totalPayment = emi * months;
    totalInterest = Math.max(0, totalPayment - p);

    // Build year-by-year amortization schedule
    let balance = p;
    let yearIdx = 1;
    let yrPrincipal = 0;
    let yrInterest = 0;
    let yrOpening = p;

    for (let m = 1; m <= months; m++) {
      const mInterest = balance * r;
      const mPrincipal = Math.min(balance, emi - mInterest);
      balance = Math.max(0, balance - mPrincipal);
      yrInterest += mInterest;
      yrPrincipal += mPrincipal;

      if (m % 12 === 0 || m === months) {
        schedule.push({
          year: yearIdx,
          openingBalance: yrOpening,
          principalPaid: yrPrincipal,
          interestPaid: yrInterest,
          closingBalance: balance,
        });
        yearIdx += 1;
        yrOpening = balance;
        yrPrincipal = 0;
        yrInterest = 0;
      }
    }
  }

  const principalPct = isValid && totalPayment > 0 ? (p / totalPayment) * 100 : 100;
  const interestPct = isValid && totalPayment > 0 ? 100 - principalPct : 0;

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-12 items-stretch">
        <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xs lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex max-w-full flex-wrap rounded-lg border border-slate-200 bg-slate-100/80 p-1 gap-1">
                {(Object.keys(LOAN_PRESETS) as LoanType[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => selectLoanType(key)}
                    className={`min-h-[44px] md:min-h-0 rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                      loanType === key
                        ? 'bg-[#16a34a] text-white font-semibold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {LOAN_PRESETS[key].label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex min-h-[44px] md:min-h-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-slate-300 hover:text-slate-900 transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset</span>
              </button>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="hdfc-amount" className="text-sm font-medium text-slate-700">
                    Loan Amount (₹)
                  </label>
                  <span className="font-mono text-xs text-slate-500 tabular-nums">
                    {Number.isFinite(p) && p > 0 ? fmtInr(p) : '—'}
                  </span>
                </div>
                <input
                  id="hdfc-amount"
                  type="number" inputMode="decimal"
                  min="1000"
                  step="10000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="hdfc-rate" className="block text-sm font-medium text-slate-700">
                    Interest Rate (% p.a.)
                  </label>
                  <input
                    id="hdfc-rate"
                    type="number" inputMode="decimal"
                    min="0"
                    max="45"
                    step="0.05"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2">
                    <label htmlFor="hdfc-tenure" className="text-sm font-medium text-slate-700">
                      Tenure
                    </label>
                    <div className="inline-flex rounded-md border border-slate-200 bg-slate-100/80 p-0.5 text-xs">
                      <button
                        type="button"
                        onClick={() => {
                          if (tenureUnit === 'months') {
                            setTenure(String(Number(((parseFloat(tenure) || 12) / 12).toFixed(1))));
                            setTenureUnit('years');
                          }
                        }}
                        className={`rounded px-2 py-0.5 font-medium transition-colors ${
                          tenureUnit === 'years'
                            ? 'bg-[#16a34a] text-white font-semibold shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Yr
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (tenureUnit === 'years') {
                            setTenure(String(Math.round((parseFloat(tenure) || 1) * 12)));
                            setTenureUnit('months');
                          }
                        }}
                        className={`rounded px-2 py-0.5 font-medium transition-colors ${
                          tenureUnit === 'months'
                            ? 'bg-[#16a34a] text-white font-semibold shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Mo
                      </button>
                    </div>
                  </div>
                  <input
                    id="hdfc-tenure"
                    type="number" inputMode="decimal"
                    min="1"
                    step="1"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-500">
            Independent Estimation Tool: Calculations use standard reducing-balance EMI math for planning and are not affiliated with or endorsed by HDFC Bank Ltd.
          </p>
        </div>

        <div className="lg:col-span-5">
          <CalculatorResultCard
            eyebrow={`${LOAN_PRESETS[loanType].label} Monthly EMI`}
            primaryValue={isValid ? fmtInrPrecise(emi) : '—'}
            primaryUnit={isValid ? '/ mo' : undefined}
            statusLabel={
              isValid ? `${months} installments (${(months / 12).toFixed(1)} years)` : 'Enter valid loan inputs'
            }
            statusTone={isValid ? 'green' : 'amber'}
            copyText={
              isValid
                ? `${LOAN_PRESETS[loanType].label} EMI: ${fmtInrPrecise(emi)}/mo | Total Interest: ${fmtInr(totalInterest)} | Total Payable: ${fmtInr(totalPayment)}`
                : ''
            }
            visualBar={
              isValid ? (
                <div>
                  <div className="flex justify-between text-xs text-slate-600 mb-1.5">
                    <span>Principal ({principalPct.toFixed(1)}%)</span>
                    <span className="font-medium text-amber-700">Interest ({interestPct.toFixed(1)}%)</span>
                  </div>
                  <div className="flex h-2.5 w-full overflow-hidden rounded-full border border-slate-200 bg-slate-100">
                    <div className="h-full bg-[#16a34a]" style={{ width: `${principalPct}%` }} />
                    <div className="h-full bg-amber-500" style={{ width: `${interestPct}%` }} />
                  </div>
                </div>
              ) : null
            }
            metrics={[
              { label: 'Principal Loan Amount', value: isValid ? fmtInr(p) : '—' },
              { label: 'Total Interest Payable', value: isValid ? fmtInr(totalInterest) : '—' },
              { label: 'Total Amount Payable', value: isValid ? fmtInr(totalPayment) : '—', highlight: true },
            ]}
          />
        </div>
      </div>

      {/* Expandable Year-by-Year Amortization Schedule */}
      {isValid && schedule.length > 0 && (
        <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
          <button
            type="button"
            aria-expanded={showSchedule}
            onClick={() => setShowSchedule((s) => !s)}
            className="flex w-full items-center justify-between gap-4 text-left"
          >
            <div>
              <h2 className="font-display text-base font-bold text-slate-900">
                Year-by-Year Amortization Schedule
              </h2>
              <p className="mt-0.5 text-xs text-slate-500">
                {schedule.length}-year breakdown of opening balance, principal, interest, and closing balance
              </p>
            </div>
            <ChevronDown
              className={`h-5 w-5 text-slate-500 transition-transform duration-150 ${
                showSchedule ? 'rotate-180 text-[#15803d]' : ''
              }`}
            />
          </button>

          {showSchedule && (
            <div className="mt-4 overflow-x-auto no-scrollbar border-t border-slate-200 pt-4">
              <table className="w-full border-collapse text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider text-slate-600">
                    <th className="px-3 py-2">Year</th>
                    <th className="px-3 py-2 text-right">Opening Balance</th>
                    <th className="px-3 py-2 text-right">Principal Paid</th>
                    <th className="px-3 py-2 text-right">Interest Paid</th>
                    <th className="px-3 py-2 text-right">Closing Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {schedule.map((row) => (
                    <tr key={row.year} className="hover:bg-slate-50">
                      <td className="px-3 py-2 font-mono font-semibold text-slate-900 tabular-nums">
                        Year {row.year}
                      </td>
                      <td className="px-3 py-2 text-right font-mono text-slate-600 tabular-nums">
                        {fmtInr(row.openingBalance)}
                      </td>
                      <td className="px-3 py-2 text-right font-mono font-medium text-[#15803d] tabular-nums">
                        {fmtInr(row.principalPaid)}
                      </td>
                      <td className="px-3 py-2 text-right font-mono font-medium text-amber-700 tabular-nums">
                        {fmtInr(row.interestPaid)}
                      </td>
                      <td className="px-3 py-2 text-right font-mono text-slate-900 tabular-nums">
                        {fmtInr(row.closingBalance)}
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
