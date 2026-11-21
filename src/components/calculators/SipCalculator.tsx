import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { CalculatorResultCard } from '../ui/CalculatorResultCard';

export function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState('10000');
  const [expectedReturn, setExpectedReturn] = useState('12');
  const [years, setYears] = useState('15');
  const [stepUpPct, setStepUpPct] = useState('0');

  const handleReset = () => {
    setMonthlyInvestment('10000');
    setExpectedReturn('12');
    setYears('15');
    setStepUpPct('0');
  };

  const p = parseFloat(monthlyInvestment);
  const rAnnual = parseFloat(expectedReturn);
  const y = parseInt(years, 10);
  const stepUp = Math.max(0, Math.min(50, parseFloat(stepUpPct) || 0));

  const isValid =
    Number.isFinite(p) &&
    p > 0 &&
    Number.isFinite(rAnnual) &&
    rAnnual >= 0 &&
    Number.isFinite(y) &&
    y >= 1 &&
    y <= 60;

  let totalInvested = 0;
  let futureValue = 0;

  if (isValid) {
    const monthlyRate = rAnnual / 12 / 100;
    if (stepUp === 0) {
      const n = y * 12;
      totalInvested = p * n;
      if (monthlyRate === 0) {
        futureValue = totalInvested;
      } else {
        futureValue = p * ((Math.pow(1 + monthlyRate, n) - 1) / monthlyRate) * (1 + monthlyRate);
      }
    } else {
      let currentMonthly = p;
      for (let yr = 0; yr < y; yr++) {
        for (let m = 0; m < 12; m++) {
          totalInvested += currentMonthly;
          futureValue = (futureValue + currentMonthly) * (1 + monthlyRate);
        }
        currentMonthly = currentMonthly * (1 + stepUp / 100);
      }
    }
  }

  const estReturns = Math.max(0, futureValue - totalInvested);
  const investedPct = isValid && futureValue > 0 ? (totalInvested / futureValue) * 100 : 100;
  const returnsPct = isValid && futureValue > 0 ? 100 - investedPct : 0;

  const fmtMoney = (n: number) =>
    Math.round(n).toLocaleString();

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-stretch">
      <div className="rounded-xl border border-[#1E2D36] bg-[#10171D] p-6 lg:col-span-7 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-base font-bold text-white">SIP Plan Inputs</h2>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#1E2D36] px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset</span>
            </button>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="sip-monthly" className="block text-sm font-medium text-slate-200">
                Monthly Investment
              </label>
              <input
                id="sip-monthly"
                type="number"
                min="1"
                step="500"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(e.target.value)}
                className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="sip-return" className="block text-sm font-medium text-slate-200">
                Expected Annual Return (%)
              </label>
              <input
                id="sip-return"
                type="number"
                min="0"
                max="50"
                step="0.5"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(e.target.value)}
                className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="sip-years" className="block text-sm font-medium text-slate-200">
                Investment Duration (Years)
              </label>
              <input
                id="sip-years"
                type="number"
                min="1"
                max="60"
                step="1"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="sip-stepup" className="block text-sm font-medium text-slate-200">
                Annual Step-Up (% optional)
              </label>
              <input
                id="sip-stepup"
                type="number"
                min="0"
                max="50"
                step="1"
                value={stepUpPct}
                onChange={(e) => setStepUpPct(e.target.value)}
                className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
              />
            </div>
          </div>
        </div>

        <p className="mt-6 border-t border-[#1E2D36] pt-4 text-xs text-slate-400">
          Compounded monthly assuming contributions at the start of each month (annuity-due convention).
        </p>
      </div>

      <div className="lg:col-span-5">
        <CalculatorResultCard
          eyebrow="Total Maturity Value"
          primaryValue={isValid ? fmtMoney(futureValue) : '—'}
          statusLabel={
            isValid
              ? `${(futureValue / totalInvested).toFixed(2)}× total wealth multiplier`
              : 'Enter valid SIP inputs'
          }
          statusTone={isValid ? 'green' : 'amber'}
          copyText={
            isValid
              ? `SIP Future Value: ${fmtMoney(futureValue)} | Invested: ${fmtMoney(totalInvested)} | Est. Returns: ${fmtMoney(estReturns)}`
              : ''
          }
          visualBar={
            isValid ? (
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                  <span>Invested ({investedPct.toFixed(1)}%)</span>
                  <span className="text-[#39FF14]">Returns ({returnsPct.toFixed(1)}%)</span>
                </div>
                <div className="flex h-2.5 w-full overflow-hidden rounded-full border border-[#1E2D36] bg-[#070B0E]">
                  <div className="h-full bg-slate-400" style={{ width: `${investedPct}%` }} />
                  <div className="h-full bg-[#39FF14]" style={{ width: `${returnsPct}%` }} />
                </div>
              </div>
            ) : null
          }
          metrics={[
            { label: 'Total Invested Amount', value: isValid ? fmtMoney(totalInvested) : '—' },
            { label: 'Estimated Returns', value: isValid ? fmtMoney(estReturns) : '—', highlight: true },
            { label: 'Total Monthly Installments', value: isValid ? `${y * 12} months` : '—' },
          ]}
        />
      </div>
    </div>
  );
}
