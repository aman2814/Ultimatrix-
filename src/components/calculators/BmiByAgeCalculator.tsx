import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { CalculatorResultCard } from '../ui/CalculatorResultCard';
import { evaluatePediatricBmi } from '../../utils/pediatricBmi';

function getDecadeBenchmark(age: number, gender: 'male' | 'female') {
  if (age < 20) {
    return {
      bracket: 'Ages 2–19 (Pediatric)',
      bmiBand: '5th – 84th Percentile',
      bodyFatBand: gender === 'male' ? '12% – 20%' : '16% – 25%',
    };
  }
  if (age < 40) {
    return {
      bracket: 'Ages 20–39',
      bmiBand: '18.5 – 24.9 kg/m²',
      bodyFatBand: gender === 'male' ? '8% – 19%' : '21% – 32%',
    };
  }
  if (age < 60) {
    return {
      bracket: 'Ages 40–59',
      bmiBand: '18.5 – 24.9 kg/m² (up to 25.5)',
      bodyFatBand: gender === 'male' ? '11% – 21%' : '23% – 33%',
    };
  }
  return {
    bracket: 'Ages 60+',
    bmiBand: '21.0 – 26.5 kg/m² (muscle-preserving)',
    bodyFatBand: gender === 'male' ? '13% – 24%' : '24% – 35%',
  };
}

export function BmiByAgeCalculator() {
  const [age, setAge] = useState('35');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [heightCm, setHeightCm] = useState('176');
  const [weightKg, setWeightKg] = useState('74');
  const [heightFt, setHeightFt] = useState('5');
  const [heightIn, setHeightIn] = useState('9');
  const [weightLb, setWeightLb] = useState('163');

  const handleReset = () => {
    setAge('35');
    setGender('male');
    setHeightCm('176');
    setWeightKg('74');
    setHeightFt('5');
    setHeightIn('9');
    setWeightLb('163');
  };

  const parsedAge = parseFloat(age);
  const validAge = Number.isFinite(parsedAge) && parsedAge >= 2 && parsedAge <= 115;

  let bmi = 0;
  let heightMeters = 0;
  let validMeasure = false;

  if (unit === 'metric') {
    const h = parseFloat(heightCm);
    const w = parseFloat(weightKg);
    if (Number.isFinite(h) && Number.isFinite(w) && h > 40 && w > 5) {
      heightMeters = h / 100;
      bmi = w / (heightMeters * heightMeters);
      validMeasure = true;
    }
  } else {
    const ft = parseFloat(heightFt) || 0;
    const inc = parseFloat(heightIn) || 0;
    const totalIn = ft * 12 + inc;
    const wLb = parseFloat(weightLb);
    if (Number.isFinite(wLb) && wLb > 10 && totalIn > 20) {
      heightMeters = totalIn * 0.0254;
      bmi = (703 * wLb) / (totalIn * totalIn);
      validMeasure = true;
    }
  }

  const isValid = validAge && validMeasure;
  const isPediatric = validAge && parsedAge < 20;

  let statusLabel = 'Enter age (2+) and valid measurements';
  let statusTone: 'green' | 'amber' | 'rose' | 'neutral' = 'neutral';
  let healthyRangeStr = '—';
  let estBodyFatStr = '—';
  let modeLabel = 'WHO Adult Cutoffs (Age 20+)';

  if (isValid) {
    const sexVal = gender === 'male' ? 1 : 0;
    if (isPediatric) {
      modeLabel = 'CDC Pediatric Percentile (Age 2–19)';
      const ped = evaluatePediatricBmi(bmi, parsedAge * 12, gender === 'male' ? 'boy' : 'girl');
      statusLabel = `${ped.category} · ${ped.percentileLabel}`;
      statusTone = ped.tone;
      const minKg = ped.healthyBmiMin * heightMeters * heightMeters;
      const maxKg = ped.healthyBmiMax * heightMeters * heightMeters;
      healthyRangeStr =
        unit === 'metric'
          ? `${minKg.toFixed(1)} – ${maxKg.toFixed(1)} kg`
          : `${(minKg * 2.20462).toFixed(1)} – ${(maxKg * 2.20462).toFixed(1)} lbs`;
      const childBf = 1.51 * bmi - 0.7 * parsedAge - 3.6 * sexVal + 1.4;
      estBodyFatStr = `${Math.max(4, childBf).toFixed(1)}% (pediatric est.)`;
    } else {
      if (bmi < 18.5) {
        statusLabel = 'Underweight (< 18.5)';
        statusTone = 'amber';
      } else if (bmi < 25) {
        statusLabel = 'Normal Weight (18.5 – 24.9)';
        statusTone = 'green';
      } else if (bmi < 30) {
        statusLabel = 'Overweight (25.0 – 29.9)';
        statusTone = 'amber';
      } else {
        statusLabel = 'Obesity (30.0+)';
        statusTone = 'rose';
      }
      const minKg = 18.5 * heightMeters * heightMeters;
      const maxKg = 24.9 * heightMeters * heightMeters;
      healthyRangeStr =
        unit === 'metric'
          ? `${minKg.toFixed(1)} – ${maxKg.toFixed(1)} kg`
          : `${(minKg * 2.20462).toFixed(1)} – ${(maxKg * 2.20462).toFixed(1)} lbs`;
      const adultBf = 1.2 * bmi + 0.23 * parsedAge - 10.8 * sexVal - 5.4;
      estBodyFatStr = `${Math.max(3, adultBf).toFixed(1)}%`;
    }
  }

  const decadeInfo = getDecadeBenchmark(validAge ? parsedAge : 30, gender);

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-stretch">
      <div className="rounded-xl border border-[#1E2D36] bg-[#10171D] p-6 lg:col-span-7 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex rounded-lg border border-[#1E2D36] bg-[#070B0E] p-1">
                {(['male', 'female'] as const).map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGender(g)}
                    className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                      gender === g
                        ? 'bg-[#39FF14] text-[#070B0E] font-semibold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {g === 'male' ? 'Male' : 'Female'}
                  </button>
                ))}
              </div>

              <div className="inline-flex rounded-lg border border-[#1E2D36] bg-[#070B0E] p-1">
                <button
                  type="button"
                  onClick={() => setUnit('metric')}
                  className={`rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                    unit === 'metric'
                      ? 'bg-[#39FF14] text-[#070B0E] font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Metric
                </button>
                <button
                  type="button"
                  onClick={() => setUnit('imperial')}
                  className={`rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                    unit === 'imperial'
                      ? 'bg-[#39FF14] text-[#070B0E] font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Imperial
                </button>
              </div>
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

          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            <div>
              <label htmlFor="bmia-age" className="block text-sm font-medium text-slate-200">
                Age (2 – 110)
              </label>
              <input
                id="bmia-age"
                type="number" inputMode="decimal"
                min="2"
                max="115"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
              />
            </div>

            {unit === 'metric' ? (
              <>
                <div>
                  <label htmlFor="bmia-hcm" className="block text-sm font-medium text-slate-200">
                    Height (cm)
                  </label>
                  <input
                    id="bmia-hcm"
                    type="number" inputMode="decimal"
                    min="40"
                    step="0.5"
                    value={heightCm}
                    onChange={(e) => setHeightCm(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="bmia-wkg" className="block text-sm font-medium text-slate-200">
                    Weight (kg)
                  </label>
                  <input
                    id="bmia-wkg"
                    type="number" inputMode="decimal"
                    min="5"
                    step="0.1"
                    value={weightKg}
                    onChange={(e) => setWeightKg(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="bmia-hft" className="block text-sm font-medium text-slate-200">
                      Ft
                    </label>
                    <input
                      id="bmia-hft"
                      type="number" inputMode="decimal"
                      min="1"
                      max="8"
                      value={heightFt}
                      onChange={(e) => setHeightFt(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-3 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="bmia-hin" className="block text-sm font-medium text-slate-200">
                      In
                    </label>
                    <input
                      id="bmia-hin"
                      type="number" inputMode="decimal"
                      min="0"
                      max="11.9"
                      step="0.5"
                      value={heightIn}
                      onChange={(e) => setHeightIn(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-3 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="bmia-wlb" className="block text-sm font-medium text-slate-200">
                    Weight (lbs)
                  </label>
                  <input
                    id="bmia-wlb"
                    type="number" inputMode="decimal"
                    min="10"
                    step="0.5"
                    value={weightLb}
                    onChange={(e) => setWeightLb(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                  />
                </div>
              </>
            )}
          </div>
        </div>

        <div className="mt-6 border-t border-[#1E2D36] pt-4 text-xs leading-relaxed text-slate-400">
          Active Model: <span className="text-slate-200 font-medium">{modeLabel}</span>. Ages 2–19 evaluate against sex-specific CDC growth percentiles; ages 20+ apply WHO adult tiers with age-adjusted body fat context.
        </div>
      </div>

      <div className="lg:col-span-5">
        <CalculatorResultCard
          eyebrow={isPediatric ? 'Pediatric BMI (Age 2–19)' : 'Adult BMI by Age'}
          primaryValue={isValid ? bmi.toFixed(1) : '—'}
          primaryUnit={isValid ? 'kg/m²' : undefined}
          statusLabel={statusLabel}
          statusTone={statusTone}
          copyText={
            isValid
              ? `Age ${parsedAge} (${gender}) BMI: ${bmi.toFixed(1)} kg/m² (${statusLabel}) | Healthy Weight: ${healthyRangeStr} | Est. Body Fat: ${estBodyFatStr}`
              : ''
          }
          metrics={[
            { label: 'Healthy Weight Range', value: healthyRangeStr, highlight: true },
            { label: 'Est. Body Fat %', value: estBodyFatStr },
            { label: `${decadeInfo.bracket} BMI Ref`, value: decadeInfo.bmiBand },
            { label: `${decadeInfo.bracket} Body Fat Ref`, value: decadeInfo.bodyFatBand },
          ]}
        />
      </div>
    </div>
  );
}
