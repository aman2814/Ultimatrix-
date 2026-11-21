import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { CalculatorResultCard } from '../ui/CalculatorResultCard';

type PctMode = 'percent-of' | 'what-percent' | 'pct-change';

function fmt(n: number): string {
  if (!Number.isFinite(n)) return '—';
  return Number.isInteger(n) ? n.toLocaleString() : n.toLocaleString(undefined, { maximumFractionDigits: 4 });
}

export function PercentageCalculator() {
  const [mode, setMode] = useState<PctMode>('percent-of');
  const [x1, setX1] = useState('15');
  const [y1, setY1] = useState('240');

  const [x2, setX2] = useState('45');
  const [y2, setY2] = useState('60');

  const [oldVal, setOldVal] = useState('80');
  const [newVal, setNewVal] = useState('100');

  const handleReset = () => {
    setX1('15');
    setY1('240');
    setX2('45');
    setY2('60');
    setOldVal('80');
    setNewVal('100');
  };

  let primaryValue = '—';
  let primaryUnit: string | undefined;
  let statusLabel = '';
  let statusTone: 'green' | 'amber' | 'rose' | 'neutral' = 'green';
  let stepFormula = '';
  let copyStr = '';
  let metrics: { label: string; value: string; highlight?: boolean }[] = [];

  if (mode === 'percent-of') {
    const p = parseFloat(x1);
    const total = parseFloat(y1);
    const valid = Number.isFinite(p) && Number.isFinite(total);
    if (valid) {
      const res = (p / 100) * total;
      primaryValue = fmt(res);
      statusLabel = `${p}% of ${fmt(total)}`;
      stepFormula = `(${p} ÷ 100) × ${total} = ${fmt(res)}`;
      copyStr = `${p}% of ${total} = ${fmt(res)}`;
      metrics = [
        { label: 'Remaining Portion', value: fmt(total - res) },
        { label: 'Total Plus Portion', value: fmt(total + res) },
        { label: 'Step-by-Step Formula', value: stepFormula, highlight: true },
      ];
    } else {
      statusLabel = 'Enter valid numbers';
      statusTone = 'amber';
    }
  } else if (mode === 'what-percent') {
    const part = parseFloat(x2);
    const total = parseFloat(y2);
    const valid = Number.isFinite(part) && Number.isFinite(total) && total !== 0;
    if (valid) {
      const pct = (part / total) * 100;
      primaryValue = `${pct.toFixed(2)}%`;
      statusLabel = `${fmt(part)} out of ${fmt(total)}`;
      stepFormula = `(${part} ÷ ${total}) × 100 = ${pct.toFixed(2)}%`;
      copyStr = `${part} is ${pct.toFixed(2)}% of ${total}`;
      metrics = [
        { label: 'Decimal Ratio', value: (part / total).toFixed(4) },
        { label: 'Complement to 100%', value: `${(100 - pct).toFixed(2)}%` },
        { label: 'Step-by-Step Formula', value: stepFormula, highlight: true },
      ];
    } else {
      statusLabel = total === 0 ? 'Denominator cannot be zero' : 'Enter valid numbers';
      statusTone = 'rose';
    }
  } else {
    const a = parseFloat(oldVal);
    const b = parseFloat(newVal);
    const valid = Number.isFinite(a) && Number.isFinite(b) && a !== 0;
    if (valid) {
      const diff = b - a;
      const pctChange = (diff / Math.abs(a)) * 100;
      const isInc = diff > 0;
      const isFlat = diff === 0;
      primaryValue = `${pctChange > 0 ? '+' : ''}${pctChange.toFixed(2)}%`;
      statusLabel = isFlat
        ? 'No change (0%)'
        : isInc
        ? `Increase of ${fmt(diff)}`
        : `Decrease of ${fmt(Math.abs(diff))}`;
      statusTone = isFlat ? 'neutral' : isInc ? 'green' : 'rose';
      stepFormula = `((${b} − ${a}) ÷ |${a}|) × 100 = ${pctChange.toFixed(2)}%`;
      copyStr = `Percentage Change from ${a} to ${b}: ${pctChange > 0 ? '+' : ''}${pctChange.toFixed(2)}%`;
      metrics = [
        { label: 'Absolute Difference', value: `${diff > 0 ? '+' : ''}${fmt(diff)}` },
        { label: 'Multiplier Factor', value: `${(b / a).toFixed(4)}×` },
        { label: 'Step-by-Step Formula', value: stepFormula, highlight: true },
      ];
    } else {
      statusLabel = a === 0 ? 'Initial value cannot be zero' : 'Enter valid numbers';
      statusTone = 'rose';
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-stretch">
      <div className="rounded-xl border border-[#1E2D36] bg-[#10171D] p-6 lg:col-span-7 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex flex-wrap rounded-lg border border-[#1E2D36] bg-[#070B0E] p-1 gap-1">
              {[
                { id: 'percent-of', label: 'X% of Y' },
                { id: 'what-percent', label: 'X is what % of Y' },
                { id: 'pct-change', label: '% Increase / Decrease' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setMode(tab.id as PctMode)}
                  className={`rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                    mode === tab.id
                      ? 'bg-[#39FF14] text-[#070B0E] font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#1E2D36] px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset</span>
            </button>
          </div>

          {mode === 'percent-of' && (
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="pct-x1" className="block text-sm font-medium text-slate-200">
                  Percentage (X %)
                </label>
                <input
                  id="pct-x1"
                  type="number" inputMode="decimal"
                  step="any"
                  value={x1}
                  onChange={(e) => setX1(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="pct-y1" className="block text-sm font-medium text-slate-200">
                  Total Value (Y)
                </label>
                <input
                  id="pct-y1"
                  type="number" inputMode="decimal"
                  step="any"
                  value={y1}
                  onChange={(e) => setY1(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                />
              </div>
            </div>
          )}

          {mode === 'what-percent' && (
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="pct-x2" className="block text-sm font-medium text-slate-200">
                  Part Value (X)
                </label>
                <input
                  id="pct-x2"
                  type="number" inputMode="decimal"
                  step="any"
                  value={x2}
                  onChange={(e) => setX2(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="pct-y2" className="block text-sm font-medium text-slate-200">
                  Whole Value (Y)
                </label>
                <input
                  id="pct-y2"
                  type="number" inputMode="decimal"
                  step="any"
                  value={y2}
                  onChange={(e) => setY2(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                />
              </div>
            </div>
          )}

          {mode === 'pct-change' && (
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="pct-old" className="block text-sm font-medium text-slate-200">
                  Initial Value (Old)
                </label>
                <input
                  id="pct-old"
                  type="number" inputMode="decimal"
                  step="any"
                  value={oldVal}
                  onChange={(e) => setOldVal(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="pct-new" className="block text-sm font-medium text-slate-200">
                  Final Value (New)
                </label>
                <input
                  id="pct-new"
                  type="number" inputMode="decimal"
                  step="any"
                  value={newVal}
                  onChange={(e) => setNewVal(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-3 font-mono text-xs sm:text-sm text-slate-300 tabular-nums">
          {stepFormula || 'Formula preview updates automatically as you enter values.'}
        </div>
      </div>

      <div className="lg:col-span-5">
        <CalculatorResultCard
          eyebrow="Percentage Output"
          primaryValue={primaryValue}
          primaryUnit={primaryUnit}
          statusLabel={statusLabel}
          statusTone={statusTone}
          copyText={copyStr}
          metrics={metrics}
        />
      </div>
    </div>
  );
}
