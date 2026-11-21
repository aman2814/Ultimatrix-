import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { CalculatorResultCard } from '../ui/CalculatorResultCard';

export type BmiVariant = 'general' | 'men' | 'women';

interface BmiCalculatorProps {
  variant?: BmiVariant;
}

export function BmiCalculator({ variant = 'general' }: BmiCalculatorProps) {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [weightKg, setWeightKg] = useState(variant === 'men' ? '78' : variant === 'women' ? '62' : '70');
  const [heightCm, setHeightCm] = useState(variant === 'men' ? '178' : variant === 'women' ? '165' : '175');
  const [weightLb, setWeightLb] = useState(variant === 'men' ? '172' : variant === 'women' ? '137' : '154');
  const [heightFt, setHeightFt] = useState(variant === 'men' ? '5' : variant === 'women' ? '5' : '5');
  const [heightIn, setHeightIn] = useState(variant === 'men' ? '10' : variant === 'women' ? '5' : '9');
  const [age, setAge] = useState('28');

  const handleReset = () => {
    setWeightKg(variant === 'men' ? '78' : variant === 'women' ? '62' : '70');
    setHeightCm(variant === 'men' ? '178' : variant === 'women' ? '165' : '175');
    setWeightLb(variant === 'men' ? '172' : variant === 'women' ? '137' : '154');
    setHeightFt(variant === 'men' ? '5' : variant === 'women' ? '5' : '5');
    setHeightIn(variant === 'men' ? '10' : variant === 'women' ? '5' : '9');
    setAge('28');
  };

  let bmi = 0;
  let heightMeters = 0;
  let isValid = false;

  if (unit === 'metric') {
    const w = parseFloat(weightKg);
    const h = parseFloat(heightCm);
    if (Number.isFinite(w) && Number.isFinite(h) && w > 0 && h > 0) {
      heightMeters = h / 100;
      bmi = w / (heightMeters * heightMeters);
      isValid = true;
    }
  } else {
    const wLb = parseFloat(weightLb);
    const ft = parseFloat(heightFt) || 0;
    const inches = parseFloat(heightIn) || 0;
    const totalInches = ft * 12 + inches;
    if (Number.isFinite(wLb) && wLb > 0 && totalInches > 0) {
      heightMeters = totalInches * 0.0254;
      bmi = (703 * wLb) / (totalInches * totalInches);
      isValid = true;
    }
  }

  let category = 'Enter valid height and weight';
  let statusTone: 'green' | 'amber' | 'rose' | 'neutral' = 'neutral';

  if (isValid) {
    if (bmi < 18.5) {
      category = 'Underweight (< 18.5)';
      statusTone = 'amber';
    } else if (bmi < 25) {
      category = 'Normal Weight (18.5 – 24.9)';
      statusTone = 'green';
    } else if (bmi < 30) {
      category = 'Overweight (25.0 – 29.9)';
      statusTone = 'amber';
    } else {
      category = 'Obesity (30.0+)';
      statusTone = 'rose';
    }
  }

  const minHealthyKg = isValid ? 18.5 * heightMeters * heightMeters : 0;
  const maxHealthyKg = isValid ? 24.9 * heightMeters * heightMeters : 0;
  const minHealthyLb = minHealthyKg * 2.20462;
  const maxHealthyLb = maxHealthyKg * 2.20462;

  const parsedAge = parseFloat(age);
  const hasAge = Number.isFinite(parsedAge) && parsedAge >= 18 && parsedAge <= 120;
  const estBodyFat =
    isValid && hasAge && variant !== 'general'
      ? 1.2 * bmi + 0.23 * parsedAge - (variant === 'men' ? 16.2 : 5.4)
      : null;

  const markerPercent = isValid ? Math.min(100, Math.max(0, ((bmi - 14) / (40 - 14)) * 100)) : 0;

  const healthyRangeStr = isValid
    ? unit === 'metric'
      ? `${minHealthyKg.toFixed(1)} – ${maxHealthyKg.toFixed(1)} kg`
      : `${minHealthyLb.toFixed(1)} – ${maxHealthyLb.toFixed(1)} lbs`
    : '—';

  const metrics = [
    { label: 'Healthy Weight Range', value: healthyRangeStr, highlight: true },
    {
      label: 'BMI Prime (vs 25.0 upper limit)',
      value: isValid ? (bmi / 25).toFixed(2) : '—',
    },
    ...(variant !== 'general'
      ? [
          {
            label: `Est. Body Fat (${variant === 'men' ? 'Male' : 'Female'} Deurenberg)`,
            value: estBodyFat !== null ? `${Math.max(2, estBodyFat).toFixed(1)}%` : 'Enter age ≥ 18',
          },
        ]
      : []),
  ];

  const copySummary = isValid
    ? `BMI: ${bmi.toFixed(1)} kg/m² (${category}) | Healthy weight: ${healthyRangeStr}${
        estBodyFat !== null ? ` | Est. Body Fat: ${Math.max(2, estBodyFat).toFixed(1)}%` : ''
      }`
    : '';

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-stretch">
      {/* Left Input Column */}
      <div className="rounded-xl border border-[#1E2D36] bg-[#10171D] p-6 lg:col-span-7 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div
              className="inline-flex rounded-lg border border-[#1E2D36] bg-[#070B0E] p-1"
              role="group"
              aria-label="Unit system"
            >
              <button
                type="button"
                onClick={() => setUnit('metric')}
                className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  unit === 'metric'
                    ? 'bg-[#39FF14] text-[#070B0E] font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Metric (kg / cm)
              </button>
              <button
                type="button"
                onClick={() => setUnit('imperial')}
                className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  unit === 'imperial'
                    ? 'bg-[#39FF14] text-[#070B0E] font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Imperial (lbs / ft-in)
              </button>
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
            {unit === 'metric' ? (
              <>
                <div>
                  <label htmlFor="bmi-weight-kg" className="block text-sm font-medium text-slate-200">
                    Weight (kg)
                  </label>
                  <input
                    id="bmi-weight-kg"
                    type="number"
                    min="1"
                    step="0.1"
                    value={weightKg}
                    onChange={(e) => setWeightKg(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="bmi-height-cm" className="block text-sm font-medium text-slate-200">
                    Height (cm)
                  </label>
                  <input
                    id="bmi-height-cm"
                    type="number"
                    min="30"
                    step="0.5"
                    value={heightCm}
                    onChange={(e) => setHeightCm(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="bmi-weight-lb" className="block text-sm font-medium text-slate-200">
                    Weight (lbs)
                  </label>
                  <input
                    id="bmi-weight-lb"
                    type="number"
                    min="1"
                    step="0.5"
                    value={weightLb}
                    onChange={(e) => setWeightLb(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="bmi-height-ft" className="block text-sm font-medium text-slate-200">
                      Height (ft)
                    </label>
                    <input
                      id="bmi-height-ft"
                      type="number"
                      min="1"
                      max="8"
                      value={heightFt}
                      onChange={(e) => setHeightFt(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="bmi-height-in" className="block text-sm font-medium text-slate-200">
                      Height (in)
                    </label>
                    <input
                      id="bmi-height-in"
                      type="number"
                      min="0"
                      max="11.9"
                      step="0.5"
                      value={heightIn}
                      onChange={(e) => setHeightIn(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                    />
                  </div>
                </div>
              </>
            )}

            {variant !== 'general' && (
              <div className="sm:col-span-2">
                <label htmlFor="bmi-age" className="block text-sm font-medium text-slate-200">
                  Age (years, for {variant === 'men' ? 'male' : 'female'} body fat estimate)
                </label>
                <input
                  id="bmi-age"
                  type="number"
                  min="18"
                  max="120"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="mt-2 w-full sm:max-w-[200px] rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                />
              </div>
            )}
          </div>
        </div>

        {/* Context Note */}
        <div className="mt-6 border-t border-[#1E2D36] pt-4 text-xs leading-relaxed text-slate-400">
          {variant === 'men' &&
            'Male Context: Men typically carry higher lean skeletal muscle mass and lower essential fat (2–5%). Pair BMI with waist circumference (< 94 cm / 37 in) for muscular builds.'}
          {variant === 'women' &&
            'Female Context: Women carry higher physiological essential fat (10–13%). This adult BMI calculation is intended for non-pregnant women.'}
          {variant === 'general' &&
            'Standard WHO Adult Scale: Evaluates body mass relative to height squared. Use alongside waist-to-height ratio for complete metabolic context.'}
        </div>
      </div>

      {/* Right Result Card */}
      <div className="lg:col-span-5">
        <CalculatorResultCard
          eyebrow={
            variant === 'men'
              ? 'Male BMI Readout'
              : variant === 'women'
              ? 'Female BMI Readout'
              : 'BMI Readout'
          }
          primaryValue={isValid ? bmi.toFixed(1) : '—'}
          primaryUnit={isValid ? 'kg/m²' : undefined}
          statusLabel={category}
          statusTone={statusTone}
          copyText={copySummary}
          metrics={metrics}
          visualBar={
            isValid ? (
              <div>
                <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-[#070B0E] border border-[#1E2D36] flex">
                  <div className="h-full bg-amber-400/70" style={{ width: '17.3%' }} />
                  <div className="h-full bg-[#39FF14]/80" style={{ width: '25%' }} />
                  <div className="h-full bg-amber-400/80" style={{ width: '19.2%' }} />
                  <div className="h-full bg-rose-500/80" style={{ width: '38.5%' }} />
                </div>
                <div className="relative mt-1.5 h-3 w-full">
                  <div
                    className="absolute -translate-x-1/2 top-0 h-2.5 w-1 rounded-full bg-white"
                    style={{ left: `${markerPercent}%` }}
                  />
                </div>
                <div className="flex justify-between font-mono text-[11px] text-slate-400 tabular-nums">
                  <span>14</span>
                  <span>18.5</span>
                  <span>25</span>
                  <span>30</span>
                  <span>40+</span>
                </div>
              </div>
            ) : null
          }
        />
      </div>
    </div>
  );
}
