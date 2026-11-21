import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { CalculatorResultCard } from '../ui/CalculatorResultCard';

function getTodayIso(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(
    now.getDate()
  ).padStart(2, '0')}`;
}

function parseUtcDate(iso: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return null;
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== m - 1 || dt.getUTCDate() !== d) {
    return null;
  }
  return dt;
}

function daysInUtcMonth(year: number, monthIndex: number): number {
  return new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
}

function addCalendarOffset(
  base: Date,
  sign: 1 | -1,
  years: number,
  months: number,
  weeks: number,
  days: number
): Date {
  const targetMonthTotal = base.getUTCFullYear() * 12 + base.getUTCMonth() + sign * (years * 12 + months);
  const newYear = Math.floor(targetMonthTotal / 12);
  const newMonth = ((targetMonthTotal % 12) + 12) % 12;
  const clampedDay = Math.min(base.getUTCDate(), daysInUtcMonth(newYear, newMonth));
  const shifted = new Date(Date.UTC(newYear, newMonth, clampedDay));
  shifted.setUTCDate(shifted.getUTCDate() + sign * (weeks * 7 + days));
  return shifted;
}

export function DateCalculator() {
  const [mode, setMode] = useState<'between' | 'offset'>('between');

  // Mode A: Between two dates
  const [startDate, setStartDate] = useState(getTodayIso);
  const [endDate, setEndDate] = useState('2027-01-01');
  const [includeEnd, setIncludeEnd] = useState(false);

  // Mode B: Add / subtract
  const [baseDate, setBaseDate] = useState(getTodayIso);
  const [operation, setOperation] = useState<'add' | 'sub'>('add');
  const [offYears, setOffYears] = useState('0');
  const [offMonths, setOffMonths] = useState('1');
  const [offWeeks, setOffWeeks] = useState('0');
  const [offDays, setOffDays] = useState('15');

  const handleReset = () => {
    setStartDate(getTodayIso());
    setEndDate('2027-01-01');
    setIncludeEnd(false);
    setBaseDate(getTodayIso());
    setOperation('add');
    setOffYears('0');
    setOffMonths('1');
    setOffWeeks('0');
    setOffDays('15');
  };

  if (mode === 'between') {
    const start = parseUtcDate(startDate);
    const end = parseUtcDate(endDate);
    const isValid = Boolean(start && end);

    let totalDays = 0;
    let weekdays = 0;
    let weekendDays = 0;
    let isReversed = false;

    if (start && end) {
      let lo = start;
      let hi = end;
      if (hi.getTime() < lo.getTime()) {
        isReversed = true;
        lo = end;
        hi = start;
      }

      const diffDays = Math.round((hi.getTime() - lo.getTime()) / 86400000);
      totalDays = diffDays + (includeEnd ? 1 : 0);

      // Count weekdays cleanly
      const totalCheckDays = includeEnd ? diffDays + 1 : diffDays;
      const fullWeeks = Math.floor(totalCheckDays / 7);
      const rem = totalCheckDays % 7;
      weekdays = fullWeeks * 5;
      weekendDays = fullWeeks * 2;
      const startDow = lo.getUTCDay();
      for (let i = 0; i < rem; i++) {
        const dow = (startDow + i) % 7;
        if (dow === 0 || dow === 6) weekendDays += 1;
        else weekdays += 1;
      }
    }

    const weeks = Math.floor(totalDays / 7);
    const remDays = totalDays % 7;
    const copyStr = isValid
      ? `Duration: ${totalDays.toLocaleString()} days (${weeks} weeks, ${remDays} days) | Weekdays: ${weekdays.toLocaleString()}`
      : '';

    return (
      <div className="grid gap-6 lg:grid-cols-12 items-stretch">
        <div className="rounded-xl border border-[#1E2D36] bg-[#10171D] p-6 lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex rounded-lg border border-[#1E2D36] bg-[#070B0E] p-1">
                <button
                  type="button"
                  onClick={() => setMode('between')}
                  className="rounded-md bg-[#39FF14] px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[#070B0E] whitespace-nowrap"
                >
                  Days Between Dates
                </button>
                <button
                  type="button"
                  onClick={() => setMode('offset')}
                  className="rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white whitespace-nowrap"
                >
                  Add / Subtract Duration
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
              <div>
                <label htmlFor="date-start" className="block text-sm font-medium text-slate-200">
                  Start Date
                </label>
                <input
                  id="date-start"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="date-end" className="block text-sm font-medium text-slate-200">
                  End Date
                </label>
                <input
                  id="date-end"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                />
              </div>
            </div>

            <label className="mt-5 inline-flex cursor-pointer items-center gap-2.5 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={includeEnd}
                onChange={(e) => setIncludeEnd(e.target.checked)}
                className="h-4 w-4 rounded border-[#1E2D36] bg-[#070B0E] accent-[#39FF14]"
              />
              <span>Include end date in count (+1 day)</span>
            </label>
          </div>

          <p className="mt-6 border-t border-[#1E2D36] pt-4 text-xs text-slate-400">
            {isReversed
              ? 'Note: End date is earlier than Start date; displaying absolute calendar span.'
              : 'Computes exact UTC calendar days and Monday–Friday business days.'}
          </p>
        </div>

        <div className="lg:col-span-5">
          <CalculatorResultCard
            eyebrow="Calendar Span"
            primaryValue={isValid ? totalDays.toLocaleString() : '—'}
            primaryUnit={isValid ? (totalDays === 1 ? 'day' : 'days') : undefined}
            statusLabel={
              isValid ? `${weeks.toLocaleString()} weeks and ${remDays} days` : 'Select valid dates'
            }
            statusTone={isValid ? 'green' : 'amber'}
            copyText={copyStr}
            metrics={[
              {
                label: 'Business Days (Mon–Fri)',
                value: isValid ? `${weekdays.toLocaleString()} days` : '—',
                highlight: true,
              },
              { label: 'Weekend Days (Sat–Sun)', value: isValid ? `${weekendDays.toLocaleString()} days` : '—' },
              { label: 'Total Hours', value: isValid ? `${(totalDays * 24).toLocaleString()} hrs` : '—' },
            ]}
          />
        </div>
      </div>
    );
  }

  // Offset mode
  const base = parseUtcDate(baseDate);
  const y = Math.max(0, parseInt(offYears, 10) || 0);
  const m = Math.max(0, parseInt(offMonths, 10) || 0);
  const w = Math.max(0, parseInt(offWeeks, 10) || 0);
  const d = Math.max(0, parseInt(offDays, 10) || 0);

  const resultDate = base ? addCalendarOffset(base, operation === 'add' ? 1 : -1, y, m, w, d) : null;
  const formattedResult = resultDate
    ? resultDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC',
      })
    : '—';
  const resultWeekday = resultDate
    ? resultDate.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'UTC' })
    : '—';
  const resultIso = resultDate ? resultDate.toISOString().slice(0, 10) : '';
  const diffFromBase =
    base && resultDate ? Math.round((resultDate.getTime() - base.getTime()) / 86400000) : 0;

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-stretch">
      <div className="rounded-xl border border-[#1E2D36] bg-[#10171D] p-6 lg:col-span-7 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex rounded-lg border border-[#1E2D36] bg-[#070B0E] p-1">
              <button
                type="button"
                onClick={() => setMode('between')}
                className="rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white whitespace-nowrap"
              >
                Days Between Dates
              </button>
              <button
                type="button"
                onClick={() => setMode('offset')}
                className="rounded-md bg-[#39FF14] px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[#070B0E] whitespace-nowrap"
              >
                Add / Subtract Duration
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
            <div>
              <label htmlFor="date-base" className="block text-sm font-medium text-slate-200">
                Starting Date
              </label>
              <input
                id="date-base"
                type="date"
                value={baseDate}
                onChange={(e) => setBaseDate(e.target.value)}
                className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
              />
            </div>

            <div>
              <span className="block text-sm font-medium text-slate-200">Operation</span>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setOperation('add')}
                  className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                    operation === 'add'
                      ? 'border-[#39FF14] bg-[#39FF14]/15 text-[#39FF14]'
                      : 'border-[#1E2D36] bg-[#070B0E] text-slate-300 hover:text-white'
                  }`}
                >
                  + Add
                </button>
                <button
                  type="button"
                  onClick={() => setOperation('sub')}
                  className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                    operation === 'sub'
                      ? 'border-[#39FF14] bg-[#39FF14]/15 text-[#39FF14]'
                      : 'border-[#1E2D36] bg-[#070B0E] text-slate-300 hover:text-white'
                  }`}
                >
                  − Subtract
                </button>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { id: 'off-y', label: 'Years', val: offYears, set: setOffYears },
              { id: 'off-m', label: 'Months', val: offMonths, set: setOffMonths },
              { id: 'off-w', label: 'Weeks', val: offWeeks, set: setOffWeeks },
              { id: 'off-d', label: 'Days', val: offDays, set: setOffDays },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-xs font-medium text-slate-300">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type="number"
                  min="0"
                  value={field.val}
                  onChange={(e) => field.set(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-3 py-2 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 border-t border-[#1E2D36] pt-4 text-xs text-slate-400">
          Month additions automatically clamp end-of-month dates (e.g., Jan 31 + 1 month resolves to Feb 28 or Feb 29).
        </p>
      </div>

      <div className="lg:col-span-5">
        <CalculatorResultCard
          eyebrow="Resulting Date"
          primaryValue={formattedResult}
          statusLabel={resultDate ? resultWeekday : 'Select valid starting date'}
          statusTone={resultDate ? 'green' : 'amber'}
          copyText={resultDate ? `${formattedResult} (${resultWeekday}, ${resultIso})` : ''}
          metrics={[
            { label: 'ISO Date', value: resultIso || '—', highlight: true },
            {
              label: 'Net Calendar Shift',
              value: resultDate ? `${diffFromBase >= 0 ? '+' : ''}${diffFromBase.toLocaleString()} days` : '—',
            },
          ]}
        />
      </div>
    </div>
  );
}
