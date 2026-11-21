import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { CalculatorResultCard } from '../ui/CalculatorResultCard';

const GST_SLABS = [5, 12, 18, 28];

export function GstCalculator() {
  const [mode, setMode] = useState<'add' | 'remove'>('add');
  const [amount, setAmount] = useState('10000');
  const [rate, setRate] = useState('18');

  const handleReset = () => {
    setMode('add');
    setAmount('10000');
    setRate('18');
  };

  const amt = parseFloat(amount);
  const r = parseFloat(rate);

  const isValid = Number.isFinite(amt) && amt >= 0 && Number.isFinite(r) && r >= 0;

  let netAmount = 0;
  let totalGst = 0;
  let grossAmount = 0;

  if (isValid) {
    if (mode === 'add') {
      netAmount = amt;
      totalGst = amt * (r / 100);
      grossAmount = amt + totalGst;
    } else {
      grossAmount = amt;
      netAmount = amt / (1 + r / 100);
      totalGst = grossAmount - netAmount;
    }
  }

  const cgst = totalGst / 2;
  const sgst = totalGst / 2;

  const fmt = (n: number) =>
    n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const primaryVal = isValid ? fmt(mode === 'add' ? grossAmount : netAmount) : '—';

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-stretch">
      <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xs lg:col-span-7 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex max-w-full flex-wrap rounded-lg border border-slate-200 bg-slate-100/80 p-1">
              <button
                type="button"
                onClick={() => setMode('add')}
                className={`min-h-[44px] md:min-h-0 rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  mode === 'add'
                    ? 'bg-[#16a34a] text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Add GST (Exclusive)
              </button>
              <button
                type="button"
                onClick={() => setMode('remove')}
                className={`min-h-[44px] md:min-h-0 rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  mode === 'remove'
                    ? 'bg-[#16a34a] text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Remove GST (Inclusive)
              </button>
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

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="gst-amount" className="block text-sm font-medium text-slate-700">
                {mode === 'add' ? 'Net Base Amount (Excl. GST)' : 'Gross Total Amount (Incl. GST)'}
              </label>
              <input
                id="gst-amount"
                type="number" inputMode="decimal"
                min="0"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="gst-rate" className="block text-sm font-medium text-slate-700">
                GST Slab Rate (%)
              </label>
              <input
                id="gst-rate"
                type="number" inputMode="decimal"
                min="0"
                max="100"
                step="0.5"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-4">
            <span className="block text-xs font-medium text-slate-500">Standard Tax Slabs</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {GST_SLABS.map((slab) => {
                const active = parseFloat(rate) === slab;
                return (
                  <button
                    key={slab}
                    type="button"
                    onClick={() => setRate(String(slab))}
                    className={`min-h-[44px] md:min-h-0 rounded-lg border px-4 py-2 font-mono text-sm font-semibold transition-colors ${
                      active
                        ? 'border-[#16a34a] bg-emerald-50 text-[#15803d]'
                        : 'border-slate-200 bg-slate-50/70 text-slate-700 hover:border-slate-300 hover:bg-white hover:text-slate-900'
                    }`}
                  >
                    {slab}%
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <p className="mt-6 border-t border-slate-200 pt-4 text-xs text-slate-500">
          Intra-state GST splits evenly: {isValid ? `${(r / 2).toFixed(2)}% CGST + ${(r / 2).toFixed(2)}% SGST` : '50% CGST + 50% SGST'}.
        </p>
      </div>

      <div className="lg:col-span-5">
        <CalculatorResultCard
          eyebrow={mode === 'add' ? 'Gross Invoice Total' : 'Pre-Tax Base Amount'}
          primaryValue={primaryVal}
          statusLabel={
            isValid
              ? `Total GST (${r}%): ${fmt(totalGst)}`
              : 'Enter valid amount and GST rate'
          }
          statusTone={isValid ? 'green' : 'amber'}
          copyText={
            isValid
              ? `Net: ${fmt(netAmount)} | GST (${r}%): ${fmt(totalGst)} (CGST: ${fmt(cgst)}, SGST: ${fmt(sgst)}) | Gross: ${fmt(grossAmount)}`
              : ''
          }
          metrics={[
            { label: 'Net Base Amount', value: isValid ? fmt(netAmount) : '—' },
            { label: `CGST (${isValid ? (r / 2).toFixed(2) : '0'}%)`, value: isValid ? fmt(cgst) : '—' },
            { label: `SGST (${isValid ? (r / 2).toFixed(2) : '0'}%)`, value: isValid ? fmt(sgst) : '—' },
            { label: 'Gross Total (Incl. GST)', value: isValid ? fmt(grossAmount) : '—', highlight: true },
          ]}
        />
      </div>
    </div>
  );
}
