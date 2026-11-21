import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { CalculatorResultCard } from '../ui/CalculatorResultCard';

export function EmiCalculator() {
  const [principal, setPrincipal] = useState('1000000');
  const [annualRate, setAnnualRate] = useState('8.5');
  const [tenure, setTenure] = useState('10');
  const [tenureUnit, setTenureUnit] = useState<'years' | 'months'>('years');

  const handleReset = () => {
    setPrincipal('1000000');
    setAnnualRate('8.5');
    setTenure('10');
    setTenureUnit('years');
  };

  const p = parseFloat(principal);
  const annual = parseFloat(annualRate);
  const t = parseFloat(tenure);
  const months = tenureUnit === 'years' ? Math.round(t * 12) : Math.round(t);

  const isValid =
    Number.isFinite(p) &&
    p > 0 &&
    Number.isFinite(annual) &&
    annual >= 0 &&
    Number.isFinite(t) &&
    months >= 1;

  let emi = 0;
  let totalPayment = 0;
  let totalInterest = 0;

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
  }

  const principalPct = isValid && totalPayment > 0 ? (p / totalPayment) * 100 : 100;
  const interestPct = isValid && totalPayment > 0 ? 100 - principalPct : 0;

  const fmtMoney = (n: number) =>
    n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-stretch">
      <div className="rounded-xl border border-[#1E2D36] bg-[#10171D] p-6 lg:col-span-7 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-base font-bold text-white">Loan Parameters</h2>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex min-h-[44px] md:min-h-0 items-center gap-1.5 rounded-lg border border-[#1E2D36] px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset</span>
            </button>
          </div>

          <div className="mt-5 space-y-5">
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="emi-principal" className="text-sm font-medium text-slate-200">
                  Loan Principal Amount
                </label>
                <span className="font-mono text-xs text-slate-400 tabular-nums">
                  {Number.isFinite(p) && p > 0 ? p.toLocaleString() : '—'}
                </span>
              </div>
              <input
                id="emi-principal"
                type="number"
                inputMode="decimal"
                min="1"
                step="1000"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="emi-rate" className="block text-sm font-medium text-slate-200">
                  Annual Interest Rate (% p.a.)
                </label>
                <input
                  id="emi-rate"
                  type="number"
                  inputMode="decimal"
                  min="0"
                  max="60"
                  step="0.1"
                  value={annualRate}
                  onChange={(e) => setAnnualRate(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                />
              </div>

              <div>
                <div className="flex items-center justify-between gap-2">
                  <label htmlFor="emi-tenure" className="text-sm font-medium text-slate-200">
                    Loan Tenure
                  </label>
                  <div className="inline-flex rounded-md border border-[#1E2D36] bg-[#070B0E] p-0.5 text-xs">
                    <button
                      type="button"
                      onClick={() => {
                        if (tenureUnit === 'months') {
                          const yrs = (parseFloat(tenure) || 12) / 12;
                          setTenure(String(Number(yrs.toFixed(1))));
                          setTenureUnit('years');
                        }
                      }}
                      className={`rounded px-2 py-0.5 font-medium ${
                        tenureUnit === 'years'
                          ? 'bg-[#39FF14] text-[#070B0E] font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Yr
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (tenureUnit === 'years') {
                          const mo = Math.round((parseFloat(tenure) || 1) * 12);
                          setTenure(String(mo));
                          setTenureUnit('months');
                        }
                      }}
                      className={`rounded px-2 py-0.5 font-medium ${
                        tenureUnit === 'months'
                          ? 'bg-[#39FF14] text-[#070B0E] font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Mo
                    </button>
                  </div>
                </div>
                <input
                  id="emi-tenure"
                  type="number"
                  inputMode="decimal"
                  min="1"
                  step="1"
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 border-t border-[#1E2D36] pt-4 text-xs text-slate-400">
          {isValid
            ? `Schedule spans ${months.toLocaleString()} monthly installments at ${(annual / 12).toFixed(3)}% monthly reducing rate.`
            : 'Enter positive principal and at least 1 month of tenure.'}
        </p>
      </div>

      <div className="lg:col-span-5">
        <CalculatorResultCard
          eyebrow="Monthly EMI"
          primaryValue={isValid ? fmtMoney(emi) : '—'}
          primaryUnit={isValid ? '/ month' : undefined}
          statusLabel={isValid ? `${months} installments (${(months / 12).toFixed(1)} yrs)` : 'Invalid loan parameters'}
          statusTone={isValid ? 'green' : 'amber'}
          copyText={
            isValid
              ? `Monthly EMI: ${fmtMoney(emi)} | Total Interest: ${fmtMoney(totalInterest)} | Total Payment: ${fmtMoney(totalPayment)}`
              : ''
          }
          visualBar={
            isValid ? (
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                  <span>Principal ({principalPct.toFixed(1)}%)</span>
                  <span className="text-amber-400">Interest ({interestPct.toFixed(1)}%)</span>
                </div>
                <div className="flex h-2.5 w-full overflow-hidden rounded-full border border-[#1E2D36] bg-[#070B0E]">
                  <div className="h-full bg-[#39FF14]" style={{ width: `${principalPct}%` }} />
                  <div className="h-full bg-amber-400" style={{ width: `${interestPct}%` }} />
                </div>
              </div>
            ) : null
          }
          metrics={[
            { label: 'Principal Amount', value: isValid ? fmtMoney(p) : '—' },
            { label: 'Total Interest Payable', value: isValid ? fmtMoney(totalInterest) : '—' },
            { label: 'Total Amount Payable', value: isValid ? fmtMoney(totalPayment) : '—', highlight: true },
          ]}
        />
      </div>
    </div>
  );
}
