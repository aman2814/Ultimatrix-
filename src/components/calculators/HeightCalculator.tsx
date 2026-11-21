import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { CalculatorResultCard } from '../ui/CalculatorResultCard';

type HeightMode = 'converter' | 'predictor';

export function HeightCalculator() {
  const [mode, setMode] = useState<HeightMode>('converter');

  // Converter state
  const [convDir, setConvDir] = useState<'ft-to-cm' | 'cm-to-ft'>('ft-to-cm');
  const [feet, setFeet] = useState('5');
  const [inches, setInches] = useState('8');
  const [cmInput, setCmInput] = useState('172.7');

  // Mid-parental predictor state
  const [childSex, setChildSex] = useState<'boy' | 'girl'>('boy');
  const [fatherCm, setFatherCm] = useState('178');
  const [motherCm, setMotherCm] = useState('164');

  const handleReset = () => {
    setFeet('5');
    setInches('8');
    setCmInput('172.7');
    setChildSex('boy');
    setFatherCm('178');
    setMotherCm('164');
  };

  if (mode === 'converter') {
    let totalCm = 0;
    let totalInches = 0;
    let outFeet = 0;
    let outInches = 0;
    let isValid = false;

    if (convDir === 'ft-to-cm') {
      const f = parseFloat(feet) || 0;
      const inc = parseFloat(inches) || 0;
      totalInches = f * 12 + inc;
      if (totalInches > 0 && f >= 0 && inc >= 0) {
        totalCm = totalInches * 2.54;
        outFeet = Math.floor(totalInches / 12);
        outInches = totalInches % 12;
        isValid = true;
      }
    } else {
      const cm = parseFloat(cmInput);
      if (Number.isFinite(cm) && cm > 0) {
        totalCm = cm;
        totalInches = cm / 2.54;
        outFeet = Math.floor(totalInches / 12);
        outInches = totalInches % 12;
        if (Math.round(outInches * 10) / 10 >= 12) {
          outFeet += 1;
          outInches = 0;
        }
        isValid = true;
      }
    }

    const meters = totalCm / 100;
    const ftInFormatted = isValid ? `${outFeet}' ${outInches.toFixed(1)}"` : '—';
    const primaryVal = isValid
      ? convDir === 'ft-to-cm'
        ? `${totalCm.toFixed(2)} cm`
        : ftInFormatted
      : '—';

    return (
      <div className="grid gap-6 lg:grid-cols-12 items-stretch">
        <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xs lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex max-w-full flex-wrap rounded-lg border border-slate-200 bg-slate-100/80 p-1">
                <button
                  type="button"
                  onClick={() => setMode('converter')}
                  className="min-h-[44px] md:min-h-0 rounded-md bg-[#16a34a] px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white shadow-xs whitespace-nowrap"
                >
                  Height Converter
                </button>
                <button
                  type="button"
                  onClick={() => setMode('predictor')}
                  className="min-h-[44px] md:min-h-0 rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 whitespace-nowrap"
                >
                  Child Height Predictor
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

            <div className="mt-5">
              <span className="block text-xs font-medium text-slate-500">Conversion Direction</span>
              <div className="mt-2 inline-flex max-w-full flex-wrap rounded-lg border border-slate-200 bg-slate-100/80 p-1">
                <button
                  type="button"
                  onClick={() => setConvDir('ft-to-cm')}
                  className={`min-h-[44px] md:min-h-0 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    convDir === 'ft-to-cm'
                      ? 'bg-emerald-50 text-[#15803d] font-semibold ring-1 ring-[#16a34a]/30'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Feet &amp; Inches → cm / m
                </button>
                <button
                  type="button"
                  onClick={() => setConvDir('cm-to-ft')}
                  className={`min-h-[44px] md:min-h-0 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    convDir === 'cm-to-ft'
                      ? 'bg-emerald-50 text-[#15803d] font-semibold ring-1 ring-[#16a34a]/30'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Centimeters → Feet &amp; Inches
                </button>
              </div>
            </div>

            {convDir === 'ft-to-cm' ? (
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="ht-ft" className="block text-sm font-medium text-slate-700">
                    Feet (ft)
                  </label>
                  <input
                    id="ht-ft"
                    type="number" inputMode="decimal"
                    min="0"
                    max="9"
                    value={feet}
                    onChange={(e) => setFeet(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="ht-in" className="block text-sm font-medium text-slate-700">
                    Inches (in)
                  </label>
                  <input
                    id="ht-in"
                    type="number" inputMode="decimal"
                    min="0"
                    max="11.9"
                    step="0.5"
                    value={inches}
                    onChange={(e) => setInches(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>
            ) : (
              <div className="mt-5 max-w-xs">
                <label htmlFor="ht-cm" className="block text-sm font-medium text-slate-700">
                  Height (cm)
                </label>
                <input
                  id="ht-cm"
                  type="number" inputMode="decimal"
                  min="1"
                  step="0.5"
                  value={cmInput}
                  onChange={(e) => setCmInput(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
                />
              </div>
            )}
          </div>

          <p className="mt-6 border-t border-slate-200 pt-4 text-xs text-slate-500">
            Exact international conversion: 1 foot = 30.48 cm and 1 inch = 2.54 cm.
          </p>
        </div>

        <div className="lg:col-span-5">
          <CalculatorResultCard
            eyebrow={convDir === 'ft-to-cm' ? 'Height in Centimeters' : 'Height in Feet & Inches'}
            primaryValue={primaryVal}
            statusLabel={isValid ? `${meters.toFixed(3)} meters (${totalInches.toFixed(2)} in)` : 'Enter positive height'}
            statusTone={isValid ? 'green' : 'amber'}
            copyText={
              isValid
                ? `${ftInFormatted} = ${totalCm.toFixed(2)} cm (${meters.toFixed(3)} m | ${totalInches.toFixed(2)} in)`
                : ''
            }
            metrics={[
              { label: 'Feet & Inches', value: ftInFormatted, highlight: convDir === 'cm-to-ft' },
              { label: 'Centimeters (cm)', value: isValid ? `${totalCm.toFixed(2)} cm` : '—', highlight: convDir === 'ft-to-cm' },
              { label: 'Meters (m)', value: isValid ? `${meters.toFixed(3)} m` : '—' },
              { label: 'Total Inches (in)', value: isValid ? `${totalInches.toFixed(2)} in` : '—' },
            ]}
          />
        </div>
      </div>
    );
  }

  // Mid-parental height predictor
  const fCm = parseFloat(fatherCm);
  const mCm = parseFloat(motherCm);
  const isValidPred = Number.isFinite(fCm) && fCm > 100 && Number.isFinite(mCm) && mCm > 100;

  const predictedCm = isValidPred
    ? (fCm + mCm + (childSex === 'boy' ? 13 : -13)) / 2
    : 0;
  const lowCm = predictedCm - 8.5;
  const highCm = predictedCm + 8.5;

  const cmToFtIn = (cm: number) => {
    const totIn = cm / 2.54;
    const ft = Math.floor(totIn / 12);
    const inc = Math.round(totIn % 12);
    return inc === 12 ? `${ft + 1}' 0"` : `${ft}' ${inc}"`;
  };

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-stretch">
      <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xs lg:col-span-7 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex max-w-full flex-wrap rounded-lg border border-slate-200 bg-slate-100/80 p-1">
              <button
                type="button"
                onClick={() => setMode('converter')}
                className="min-h-[44px] md:min-h-0 rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 whitespace-nowrap"
              >
                Height Converter
              </button>
              <button
                type="button"
                onClick={() => setMode('predictor')}
                className="min-h-[44px] md:min-h-0 rounded-md bg-[#16a34a] px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white shadow-xs whitespace-nowrap"
              >
                Child Height Predictor
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

          <div className="mt-5">
            <span className="block text-sm font-medium text-slate-700">Child&apos;s Sex</span>
            <div className="mt-2 inline-flex rounded-lg border border-slate-200 bg-slate-100/80 p-1">
              {(['boy', 'girl'] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setChildSex(s)}
                  className={`min-h-[44px] md:min-h-0 rounded-md px-4 py-1.5 text-xs sm:text-sm font-medium transition-colors ${
                    childSex === s
                      ? 'bg-[#16a34a] text-white font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {s === 'boy' ? 'Boy (+13 cm)' : 'Girl (−13 cm)'}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="ht-father" className="block text-sm font-medium text-slate-700">
                Father&apos;s Height (cm)
              </label>
              <input
                id="ht-father"
                type="number" inputMode="decimal"
                min="100"
                max="240"
                step="0.5"
                value={fatherCm}
                onChange={(e) => setFatherCm(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
              />
              <span className="mt-1 block font-mono text-xs text-slate-500">
                {Number.isFinite(fCm) && fCm > 100 ? cmToFtIn(fCm) : ''}
              </span>
            </div>

            <div>
              <label htmlFor="ht-mother" className="block text-sm font-medium text-slate-700">
                Mother&apos;s Height (cm)
              </label>
              <input
                id="ht-mother"
                type="number" inputMode="decimal"
                min="100"
                max="240"
                step="0.5"
                value={motherCm}
                onChange={(e) => setMotherCm(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
              />
              <span className="mt-1 block font-mono text-xs text-slate-500">
                {Number.isFinite(mCm) && mCm > 100 ? cmToFtIn(mCm) : ''}
              </span>
            </div>
          </div>
        </div>

        <p className="mt-6 border-t border-slate-200 pt-4 text-xs text-slate-500">
          Mid-parental target height estimates genetic adult height within ±8.5 cm (±3.3 in) for 95% of healthy children.
        </p>
      </div>

      <div className="lg:col-span-5">
        <CalculatorResultCard
          eyebrow="Predicted Adult Height"
          primaryValue={isValidPred ? `${predictedCm.toFixed(1)} cm` : '—'}
          statusLabel={isValidPred ? `Approx. ${cmToFtIn(predictedCm)}` : 'Enter valid parent heights'}
          statusTone={isValidPred ? 'green' : 'amber'}
          copyText={
            isValidPred
              ? `Predicted Adult Height: ${predictedCm.toFixed(1)} cm (${cmToFtIn(predictedCm)}) | Genetic Range: ${lowCm.toFixed(1)}–${highCm.toFixed(1)} cm`
              : ''
          }
          metrics={[
            {
              label: 'Feet & Inches Estimate',
              value: isValidPred ? cmToFtIn(predictedCm) : '—',
              highlight: true,
            },
            {
              label: 'Expected Range (±8.5 cm)',
              value: isValidPred ? `${lowCm.toFixed(1)} – ${highCm.toFixed(1)} cm` : '—',
            },
          ]}
        />
      </div>
    </div>
  );
}
