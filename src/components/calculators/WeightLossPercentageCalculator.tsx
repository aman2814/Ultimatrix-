import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { CalculatorResultCard } from '../ui/CalculatorResultCard';

export function WeightLossPercentageCalculator() {
  const [unit, setUnit] = useState<'kg' | 'lbs'>('lbs');
  const [startWeight, setStartWeight] = useState('200');
  const [currentWeight, setCurrentWeight] = useState('180');
  const [goalWeight, setGoalWeight] = useState('165');

  const handleReset = () => {
    setStartWeight(unit === 'kg' ? '90' : '200');
    setCurrentWeight(unit === 'kg' ? '81' : '180');
    setGoalWeight(unit === 'kg' ? '75' : '165');
  };

  const switchUnit = (nextUnit: 'kg' | 'lbs') => {
    if (nextUnit === unit) return;
    const factor = nextUnit === 'kg' ? 0.453592 : 2.20462;
    const s = parseFloat(startWeight);
    const c = parseFloat(currentWeight);
    const g = parseFloat(goalWeight);
    if (Number.isFinite(s)) setStartWeight((s * factor).toFixed(1));
    if (Number.isFinite(c)) setCurrentWeight((c * factor).toFixed(1));
    if (Number.isFinite(g) && goalWeight.trim() !== '') setGoalWeight((g * factor).toFixed(1));
    setUnit(nextUnit);
  };

  const s = parseFloat(startWeight);
  const c = parseFloat(currentWeight);
  const g = parseFloat(goalWeight);

  const isValid = Number.isFinite(s) && s > 0 && Number.isFinite(c) && c > 0;
  const lost = isValid ? s - c : 0;
  const pctLost = isValid ? (lost / s) * 100 : 0;

  const hasGoal = isValid && Number.isFinite(g) && g > 0 && g < s;
  const totalGoalDelta = hasGoal ? s - g : 0;
  const remainingToGoal = hasGoal ? Math.max(0, c - g) : 0;
  const goalCompletionPct = hasGoal
    ? Math.min(100, Math.max(0, ((s - c) / totalGoalDelta) * 100))
    : 0;

  const isGain = isValid && lost < 0;
  const statusLabel = !isValid
    ? 'Enter valid starting and current weight'
    : isGain
    ? `Weight gained: ${Math.abs(lost).toFixed(1)} ${unit} (+${Math.abs(pctLost).toFixed(2)}%)`
    : lost === 0
    ? 'No net weight change yet (0%)'
    : `Lost ${lost.toFixed(1)} ${unit} from starting weight`;

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-stretch">
      <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xs lg:col-span-7 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100/80 p-1">
              {(['lbs', 'kg'] as const).map((u) => (
                <button
                  key={u}
                  type="button"
                  onClick={() => switchUnit(u)}
                  className={`min-h-[44px] md:min-h-0 rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                    unit === u
                      ? 'bg-[#16a34a] text-white font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {u === 'lbs' ? 'Pounds (lbs)' : 'Kilograms (kg)'}
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

          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            <div>
              <label htmlFor="wl-start" className="block text-sm font-medium text-slate-700">
                Starting Weight ({unit})
              </label>
              <input
                id="wl-start"
                type="number" inputMode="decimal"
                min="1"
                step="0.1"
                value={startWeight}
                onChange={(e) => setStartWeight(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="wl-current" className="block text-sm font-medium text-slate-700">
                Current Weight ({unit})
              </label>
              <input
                id="wl-current"
                type="number" inputMode="decimal"
                min="1"
                step="0.1"
                value={currentWeight}
                onChange={(e) => setCurrentWeight(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="wl-goal" className="block text-sm font-medium text-slate-700">
                Goal Weight (opt.)
              </label>
              <input
                id="wl-goal"
                type="number" inputMode="decimal"
                min="1"
                step="0.1"
                placeholder="Optional"
                value={goalWeight}
                onChange={(e) => setGoalWeight(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
              />
            </div>
          </div>
        </div>

        <p className="mt-6 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-500">
          Clinical benchmarks commonly highlight 5% to 10% total body weight reduction for measurable improvements in blood pressure and metabolic markers.
        </p>
      </div>

      <div className="lg:col-span-5">
        <CalculatorResultCard
          eyebrow="Weight Loss Percentage"
          primaryValue={isValid ? `${pctLost.toFixed(2)}%` : '—'}
          statusLabel={statusLabel}
          statusTone={!isValid ? 'amber' : isGain ? 'rose' : 'green'}
          copyText={
            isValid
              ? `Weight Loss: ${pctLost.toFixed(2)}% (${lost.toFixed(1)} ${unit} lost from ${s} ${unit})${
                  hasGoal ? ` | Goal Progress: ${goalCompletionPct.toFixed(1)}%` : ''
                }`
              : ''
          }
          visualBar={
            hasGoal ? (
              <div>
                <div className="flex justify-between text-xs text-slate-600 mb-1.5">
                  <span>Goal Progress ({s} → {g} {unit})</span>
                  <span className="font-mono font-semibold text-[#15803d] tabular-nums">
                    {goalCompletionPct.toFixed(1)}%
                  </span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full border border-slate-200 bg-slate-100">
                  <div
                    className="h-full bg-[#16a34a] transition-all duration-200"
                    style={{ width: `${goalCompletionPct}%` }}
                  />
                </div>
              </div>
            ) : null
          }
          metrics={[
            {
              label: isGain ? 'Net Weight Change' : 'Total Weight Lost',
              value: isValid ? `${lost >= 0 ? '' : '+'}${Math.abs(lost).toFixed(1)} ${unit}` : '—',
              highlight: true,
            },
            ...(hasGoal
              ? [
                  {
                    label: 'Remaining to Goal',
                    value: remainingToGoal === 0 ? 'Goal Reached' : `${remainingToGoal.toFixed(1)} ${unit}`,
                  },
                  {
                    label: 'Target Loss %',
                    value: `${((totalGoalDelta / s) * 100).toFixed(2)}%`,
                  },
                ]
              : []),
          ]}
        />
      </div>
    </div>
  );
}
