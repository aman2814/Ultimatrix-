import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { CalculatorResultCard } from '../ui/CalculatorResultCard';

type DueDateMethod = 'ivf' | 'conception' | 'lmp';
type EmbryoAge = 'day3' | 'day5' | 'day6';

function getOffsetIso(daysAgo: number): string {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
    d.getDate()
  ).padStart(2, '0')}`;
}

function parseUtc(iso: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return null;
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== m - 1 || dt.getUTCDate() !== d) {
    return null;
  }
  return dt;
}

function addDays(base: Date, days: number): Date {
  const copy = new Date(base.getTime());
  copy.setUTCDate(copy.getUTCDate() + days);
  return copy;
}

function formatDate(dt: Date): string {
  return dt.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function PregnancyDueDateCalculator() {
  const [method, setMethod] = useState<DueDateMethod>('ivf');
  const [inputDate, setInputDate] = useState(() => getOffsetIso(56));
  const [embryoAge, setEmbryoAge] = useState<EmbryoAge>('day5');
  const [cycleLength, setCycleLength] = useState('28');

  const handleReset = () => {
    setMethod('ivf');
    setInputDate(getOffsetIso(56));
    setEmbryoAge('day5');
    setCycleLength('28');
  };

  const parsedInput = parseUtc(inputDate);
  const cycle = Math.min(45, Math.max(20, parseInt(cycleLength, 10) || 28));
  const todayUtc = parseUtc(getOffsetIso(0))!;

  let edd: Date | null = null;
  let lmpAnchor: Date | null = null;

  if (parsedInput) {
    if (method === 'ivf') {
      const embryoDays = embryoAge === 'day3' ? 3 : embryoAge === 'day6' ? 6 : 5;
      // Conception equivalent is (transferDate - embryoDays); EDD = conception + 266 = transfer + (266 - embryoDays)
      edd = addDays(parsedInput, 266 - embryoDays);
      lmpAnchor = addDays(parsedInput, -(14 + embryoDays));
    } else if (method === 'conception') {
      edd = addDays(parsedInput, 266);
      lmpAnchor = addDays(parsedInput, -14);
    } else {
      const cycleOffset = cycle - 28;
      edd = addDays(parsedInput, 280 + cycleOffset);
      lmpAnchor = addDays(parsedInput, cycleOffset);
    }
  }

  const isValid = Boolean(edd && lmpAnchor);

  let gestDays = 0;
  let gestWeeks = 0;
  let gestRemDays = 0;
  let daysRemaining = 0;
  let trimester = '—';
  let progressPct = 0;

  if (edd && lmpAnchor) {
    gestDays = Math.round((todayUtc.getTime() - lmpAnchor.getTime()) / 86400000);
    daysRemaining = Math.round((edd.getTime() - todayUtc.getTime()) / 86400000);
    if (gestDays < 0) {
      trimester = 'Pre-pregnancy date';
    } else {
      gestWeeks = Math.floor(gestDays / 7);
      gestRemDays = gestDays % 7;
      progressPct = Math.min(100, Math.max(0, (gestDays / 280) * 100));
      if (gestWeeks < 14) trimester = 'First Trimester (Weeks 1–13)';
      else if (gestWeeks < 28) trimester = 'Second Trimester (Weeks 14–27)';
      else if (gestWeeks <= 42) trimester = 'Third Trimester (Weeks 28–40+)';
      else trimester = 'Post-term window (42+ weeks)';
    }
  }

  const endTri1 = lmpAnchor ? formatDate(addDays(lmpAnchor, 13 * 7 + 6)) : '—';
  const anatomyWindow = lmpAnchor ? formatDate(addDays(lmpAnchor, 20 * 7)) : '—';
  const startTri3 = lmpAnchor ? formatDate(addDays(lmpAnchor, 28 * 7)) : '—';

  const eddStr = edd ? formatDate(edd) : '—';
  const gestStr =
    isValid && gestDays >= 0
      ? `Week ${gestWeeks}, Day ${gestRemDays}`
      : isValid
      ? 'Date is in the future'
      : '—';

  const copyStr = edd
    ? `Estimated Due Date: ${eddStr} | Current Progress: ${gestStr} (${trimester})`
    : '';

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-stretch">
      <div className="rounded-xl border border-[#1E2D36] bg-[#10171D] p-6 lg:col-span-7 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex flex-wrap rounded-lg border border-[#1E2D36] bg-[#070B0E] p-1 gap-1">
              {[
                { id: 'ivf', label: 'IVF Transfer' },
                { id: 'conception', label: 'Conception' },
                { id: 'lmp', label: 'Last Period (LMP)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setMethod(tab.id as DueDateMethod)}
                  className={`rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                    method === tab.id
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
              <label htmlFor="preg-date" className="block text-sm font-medium text-slate-200">
                {method === 'ivf'
                  ? 'Embryo Transfer Date'
                  : method === 'conception'
                  ? 'Conception / Ovulation Date'
                  : 'First Day of Last Period'}
              </label>
              <input
                id="preg-date"
                type="date"
                value={inputDate}
                onChange={(e) => setInputDate(e.target.value)}
                className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
              />
            </div>

            {method === 'ivf' && (
              <div>
                <span className="block text-sm font-medium text-slate-200">
                  Embryo Age at Transfer (Fresh or FET)
                </span>
                <div className="mt-2 grid grid-cols-3 gap-1.5">
                  {[
                    { id: 'day3', label: 'Day 3' },
                    { id: 'day5', label: 'Day 5' },
                    { id: 'day6', label: 'Day 6' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setEmbryoAge(opt.id as EmbryoAge)}
                      className={`rounded-lg border px-3 py-2.5 font-mono text-xs sm:text-sm font-semibold transition-colors ${
                        embryoAge === opt.id
                          ? 'border-[#39FF14] bg-[#39FF14]/15 text-[#39FF14]'
                          : 'border-[#1E2D36] bg-[#070B0E] text-slate-300 hover:text-white'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {method === 'lmp' && (
              <div>
                <label htmlFor="preg-cycle" className="block text-sm font-medium text-slate-200">
                  Average Cycle Length (days)
                </label>
                <input
                  id="preg-cycle"
                  type="number"
                  min="20"
                  max="45"
                  value={cycleLength}
                  onChange={(e) => setCycleLength(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                />
              </div>
            )}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[#1E2D36] pt-5 text-xs">
            <div>
              <span className="text-slate-400">End of 1st Trimester</span>
              <p className="mt-1 font-mono font-semibold text-white tabular-nums">{endTri1}</p>
            </div>
            <div>
              <span className="text-slate-400">20-Week Scan</span>
              <p className="mt-1 font-mono font-semibold text-white tabular-nums">{anatomyWindow}</p>
            </div>
            <div>
              <span className="text-slate-400">3rd Trimester Starts</span>
              <p className="mt-1 font-mono font-semibold text-white tabular-nums">{startTri3}</p>
            </div>
          </div>
        </div>

        <p className="mt-6 border-t border-[#1E2D36] pt-4 text-xs leading-relaxed text-amber-300/90">
          Informational Estimate Only: Fresh and frozen IVF transfers (FET) use transfer date + (266 − embryo age). Always confirm dating with your OB/GYN or fertility clinic.
        </p>
      </div>

      <div className="lg:col-span-5">
        <CalculatorResultCard
          eyebrow="Estimated Due Date"
          primaryValue={eddStr}
          statusLabel={trimester}
          statusTone={isValid && gestDays >= 0 ? 'green' : 'amber'}
          copyText={copyStr}
          visualBar={
            isValid && gestDays >= 0 ? (
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                  <span>Gestation Progress</span>
                  <span className="font-mono text-[#39FF14] tabular-nums">
                    {progressPct.toFixed(0)}%
                  </span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full border border-[#1E2D36] bg-[#070B0E]">
                  <div
                    className="h-full bg-[#39FF14] transition-all duration-200"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>
            ) : null
          }
          metrics={[
            { label: 'Current Gestational Age', value: gestStr, highlight: true },
            {
              label: 'Days Until Due Date',
              value: isValid
                ? daysRemaining >= 0
                  ? `${daysRemaining} days remaining`
                  : `${Math.abs(daysRemaining)} days past EDD`
                : '—',
            },
          ]}
        />
      </div>
    </div>
  );
}
