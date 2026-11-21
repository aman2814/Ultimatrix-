import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { CalculatorResultCard } from '../ui/CalculatorResultCard';

type ScaleMode = 'cbse-10' | 'custom-10' | 'gpa-4';

export function CgpaToPercentageCalculator() {
  const [scale, setScale] = useState<ScaleMode>('cbse-10');
  const [cgpa, setCgpa] = useState('8.6');
  const [multiplier, setMultiplier] = useState('10');

  const handleReset = () => {
    setScale('cbse-10');
    setCgpa('8.6');
    setMultiplier('10');
  };

  const val = parseFloat(cgpa);
  const mult = parseFloat(multiplier);
  const maxScale = scale === 'gpa-4' ? 4 : 10;

  const isValid =
    Number.isFinite(val) &&
    val >= 0 &&
    val <= maxScale &&
    (scale !== 'custom-10' || (Number.isFinite(mult) && mult > 0));

  let percentage = 0;
  let formulaStr = '';

  if (isValid) {
    if (scale === 'cbse-10') {
      percentage = val * 9.5;
      formulaStr = `${val} × 9.5 = ${percentage.toFixed(2)}%`;
    } else if (scale === 'custom-10') {
      percentage = Math.min(100, val * mult);
      formulaStr = `${val} × ${mult} = ${percentage.toFixed(2)}%`;
    } else {
      percentage = (val / 4.0) * 100;
      formulaStr = `(${val} ÷ 4.0) × 100 = ${percentage.toFixed(2)}%`;
    }
  }

  let division = '—';
  if (isValid) {
    if (percentage >= 75) division = 'First Class with Distinction';
    else if (percentage >= 60) division = 'First Division';
    else if (percentage >= 50) division = 'Second Division';
    else if (percentage >= 40) division = 'Pass / Third Division';
    else division = 'Below Passing Threshold';
  }

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-stretch">
      <div className="rounded-xl border border-[#1E2D36] bg-[#10171D] p-6 lg:col-span-7 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex flex-wrap rounded-lg border border-[#1E2D36] bg-[#070B0E] p-1 gap-1">
              {[
                { id: 'cbse-10', label: '10-Pt CBSE (×9.5)' },
                { id: 'custom-10', label: 'Custom 10-Pt' },
                { id: 'gpa-4', label: '4-Pt GPA Scale' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setScale(tab.id as ScaleMode);
                    if (tab.id === 'gpa-4' && parseFloat(cgpa) > 4) setCgpa('3.6');
                    if (tab.id !== 'gpa-4' && parseFloat(cgpa) <= 4) setCgpa('8.6');
                  }}
                  className={`rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                    scale === tab.id
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

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="cgpa-input" className="block text-sm font-medium text-slate-200">
                {scale === 'gpa-4' ? 'GPA (0.0 – 4.0)' : 'CGPA (0.0 – 10.0)'}
              </label>
              <input
                id="cgpa-input"
                type="number"
                min="0"
                max={maxScale}
                step="0.01"
                value={cgpa}
                onChange={(e) => setCgpa(e.target.value)}
                className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
              />
            </div>

            {scale === 'custom-10' && (
              <div>
                <label htmlFor="cgpa-mult" className="block text-sm font-medium text-slate-200">
                  University Multiplier
                </label>
                <input
                  id="cgpa-mult"
                  type="number"
                  min="1"
                  max="25"
                  step="0.1"
                  value={multiplier}
                  onChange={(e) => setMultiplier(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                />
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {[
                    { label: '9.5× CBSE', val: '9.5' },
                    { label: '10× Direct', val: '10' },
                    { label: '8.9× Delhi Univ', val: '8.9' },
                  ].map((preset) => (
                    <button
                      key={preset.val}
                      type="button"
                      onClick={() => setMultiplier(preset.val)}
                      className="rounded border border-[#1E2D36] bg-[#070B0E] px-2 py-1 text-xs text-slate-300 hover:border-[#39FF14]/60 hover:text-[#39FF14]"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-3 font-mono text-xs sm:text-sm text-slate-300 tabular-nums">
          {isValid
            ? formulaStr
            : `Enter a valid value between 0.0 and ${maxScale}.0.`}
        </div>
      </div>

      <div className="lg:col-span-5">
        <CalculatorResultCard
          eyebrow="Equivalent Percentage"
          primaryValue={isValid ? `${percentage.toFixed(2)}%` : '—'}
          statusLabel={isValid ? division : 'Invalid grade input'}
          statusTone={isValid ? 'green' : 'rose'}
          copyText={isValid ? `CGPA ${val}/${maxScale} = ${percentage.toFixed(2)}% (${division})` : ''}
          metrics={[
            { label: 'Scale Used', value: scale === 'cbse-10' ? 'CBSE 10-Point (9.5×)' : scale === 'custom-10' ? `10-Point (${multiplier}×)` : '4.0 GPA Scale' },
            { label: 'Out of 1,000 Marks', value: isValid ? `${Math.round(percentage * 10)} / 1000` : '—', highlight: true },
          ]}
        />
      </div>
    </div>
  );
}
