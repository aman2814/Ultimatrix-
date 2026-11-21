import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { CalculatorResultCard } from '../ui/CalculatorResultCard';
import { evaluatePediatricBmi } from '../../utils/pediatricBmi';

export function ChildBmiCalculator() {
  const [sex, setSex] = useState<'boy' | 'girl'>('boy');
  const [ageYears, setAgeYears] = useState('10');
  const [ageMonths, setAgeMonths] = useState('6');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [heightCm, setHeightCm] = useState('141');
  const [weightKg, setWeightKg] = useState('34');
  const [heightFt, setHeightFt] = useState('4');
  const [heightIn, setHeightIn] = useState('7.5');
  const [weightLb, setWeightLb] = useState('75');

  const handleReset = () => {
    setSex('boy');
    setAgeYears('10');
    setAgeMonths('6');
    setHeightCm('141');
    setWeightKg('34');
    setHeightFt('4');
    setHeightIn('7.5');
    setWeightLb('75');
  };

  const yrs = parseInt(ageYears, 10);
  const mos = parseInt(ageMonths, 10) || 0;
  const totalAgeMonths = (Number.isFinite(yrs) ? yrs : 0) * 12 + mos;
  const validAge = Number.isFinite(yrs) && yrs >= 2 && yrs <= 19 && mos >= 0 && mos <= 11 && totalAgeMonths <= 239;

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
  const evalData = isValid ? evaluatePediatricBmi(bmi, totalAgeMonths, sex) : null;

  const healthyMinKg = evalData ? evalData.healthyBmiMin * heightMeters * heightMeters : 0;
  const healthyMaxKg = evalData ? evalData.healthyBmiMax * heightMeters * heightMeters : 0;
  const healthyRangeStr = evalData
    ? unit === 'metric'
      ? `${healthyMinKg.toFixed(1)} – ${healthyMaxKg.toFixed(1)} kg`
      : `${(healthyMinKg * 2.20462).toFixed(1)} – ${(healthyMaxKg * 2.20462).toFixed(1)} lbs`
    : '—';

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-stretch">
      <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xs lg:col-span-7 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100/80 p-1">
                {(['boy', 'girl'] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSex(s)}
                    className={`min-h-[44px] md:min-h-0 rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                      sex === s
                        ? 'bg-[#16a34a] text-white font-semibold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {s === 'boy' ? 'Boy' : 'Girl'}
                  </button>
                ))}
              </div>

              <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100/80 p-1">
                <button
                  type="button"
                  onClick={() => setUnit('metric')}
                  className={`min-h-[44px] md:min-h-0 rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                    unit === 'metric'
                      ? 'bg-[#16a34a] text-white font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Metric
                </button>
                <button
                  type="button"
                  onClick={() => setUnit('imperial')}
                  className={`min-h-[44px] md:min-h-0 rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                    unit === 'imperial'
                      ? 'bg-[#16a34a] text-white font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Imperial
                </button>
              </div>
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
              <label htmlFor="cbmi-yr" className="block text-sm font-medium text-slate-700">
                Age Years (2 – 19)
              </label>
              <input
                id="cbmi-yr"
                type="number" inputMode="decimal"
                min="2"
                max="19"
                value={ageYears}
                onChange={(e) => setAgeYears(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="cbmi-mo" className="block text-sm font-medium text-slate-700">
                Additional Months (0 – 11)
              </label>
              <input
                id="cbmi-mo"
                type="number" inputMode="decimal"
                min="0"
                max="11"
                value={ageMonths}
                onChange={(e) => setAgeMonths(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
              />
            </div>

            {unit === 'metric' ? (
              <>
                <div>
                  <label htmlFor="cbmi-hcm" className="block text-sm font-medium text-slate-700">
                    Height (cm)
                  </label>
                  <input
                    id="cbmi-hcm"
                    type="number" inputMode="decimal"
                    min="50"
                    step="0.5"
                    value={heightCm}
                    onChange={(e) => setHeightCm(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="cbmi-wkg" className="block text-sm font-medium text-slate-700">
                    Weight (kg)
                  </label>
                  <input
                    id="cbmi-wkg"
                    type="number" inputMode="decimal"
                    min="5"
                    step="0.1"
                    value={weightKg}
                    onChange={(e) => setWeightKg(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="cbmi-hft" className="block text-sm font-medium text-slate-700">
                      Height (ft)
                    </label>
                    <input
                      id="cbmi-hft"
                      type="number" inputMode="decimal"
                      min="1"
                      max="7"
                      value={heightFt}
                      onChange={(e) => setHeightFt(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="cbmi-hin" className="block text-sm font-medium text-slate-700">
                      Height (in)
                    </label>
                    <input
                      id="cbmi-hin"
                      type="number" inputMode="decimal"
                      min="0"
                      max="11.9"
                      step="0.5"
                      value={heightIn}
                      onChange={(e) => setHeightIn(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="cbmi-wlb" className="block text-sm font-medium text-slate-700">
                    Weight (lbs)
                  </label>
                  <input
                    id="cbmi-wlb"
                    type="number" inputMode="decimal"
                    min="10"
                    step="0.5"
                    value={weightLb}
                    onChange={(e) => setWeightLb(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
                  />
                </div>
              </>
            )}
          </div>
        </div>

        <p className="mt-6 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-500">
          Informational Screening Only: Child and teen BMI is plotted against CDC age- and sex-specific growth percentiles. Consult a pediatrician for individual growth assessment.
        </p>
      </div>

      <div className="lg:col-span-5">
        <CalculatorResultCard
          eyebrow="Pediatric BMI-for-Age"
          primaryValue={isValid ? bmi.toFixed(1) : '—'}
          primaryUnit={isValid ? 'kg/m²' : undefined}
          statusLabel={evalData ? evalData.category : 'Enter age (2–19) and measurements'}
          statusTone={evalData ? evalData.tone : 'amber'}
          copyText={
            evalData
              ? `Child BMI: ${bmi.toFixed(1)} kg/m² (${evalData.percentileLabel}, ${evalData.category}) | Healthy Range: ${healthyRangeStr}`
              : ''
          }
          visualBar={
            evalData ? (
              <div>
                <div className="flex justify-between text-xs text-slate-600 mb-1.5">
                  <span>CDC Percentile Position</span>
                  <span className="font-mono font-semibold text-[#15803d] tabular-nums">
                    {evalData.percentileLabel}
                  </span>
                </div>
                <div className="relative h-2.5 w-full overflow-hidden rounded-full border border-slate-200 bg-slate-100 flex">
                  <div className="h-full bg-amber-400" style={{ width: '5%' }} />
                  <div className="h-full bg-[#16a34a]" style={{ width: '80%' }} />
                  <div className="h-full bg-amber-500" style={{ width: '10%' }} />
                  <div className="h-full bg-rose-500" style={{ width: '5%' }} />
                </div>
                <div className="relative mt-1.5 h-3 w-full">
                  <div
                    className="absolute -translate-x-1/2 top-0 h-2.5 w-1.5 rounded-full bg-slate-900 ring-1 ring-white"
                    style={{ left: `${evalData.percentile}%` }}
                  />
                </div>
                <div className="flex justify-between font-mono text-[11px] text-slate-500 tabular-nums">
                  <span>0th</span>
                  <span>5th</span>
                  <span>50th</span>
                  <span>85th</span>
                  <span>95th</span>
                </div>
              </div>
            ) : null
          }
          metrics={[
            {
              label: 'Estimated Percentile',
              value: evalData ? evalData.percentileLabel : '—',
              highlight: true,
            },
            {
              label: 'Healthy BMI Range (5th–84th)',
              value: evalData
                ? `${evalData.healthyBmiMin.toFixed(1)} – ${evalData.healthyBmiMax.toFixed(1)}`
                : '—',
            },
            { label: 'Healthy Weight for Height', value: healthyRangeStr },
          ]}
        />
      </div>
    </div>
  );
}
