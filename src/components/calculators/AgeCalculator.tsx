import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { CalculatorResultCard } from '../ui/CalculatorResultCard';

function getTodayIso(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function parseIsoDate(iso: string): Date | null {
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

export function AgeCalculator() {
  const [dob, setDob] = useState('1998-03-15');
  const [targetDate, setTargetDate] = useState(getTodayIso);

  const handleReset = () => {
    setDob('1998-03-15');
    setTargetDate(getTodayIso());
  };

  const birth = parseIsoDate(dob);
  const target = parseIsoDate(targetDate);

  const isValid = Boolean(birth && target && target.getTime() >= birth.getTime());

  let years = 0;
  let months = 0;
  let days = 0;
  let totalDays = 0;
  let totalWeeks = 0;
  let remDays = 0;
  let totalMonths = 0;
  let totalHours = 0;
  let daysUntilNextBday = 0;
  let bornWeekday = '—';

  if (birth && target && isValid) {
    let y = target.getUTCFullYear() - birth.getUTCFullYear();
    let m = target.getUTCMonth() - birth.getUTCMonth();
    let d = target.getUTCDate() - birth.getUTCDate();

    if (d < 0) {
      const prevMonthIdx = (target.getUTCMonth() - 1 + 12) % 12;
      const prevMonthYear =
        target.getUTCMonth() === 0 ? target.getUTCFullYear() - 1 : target.getUTCFullYear();
      d += daysInUtcMonth(prevMonthYear, prevMonthIdx);
      m -= 1;
    }

    if (m < 0) {
      m += 12;
      y -= 1;
    }

    years = y;
    months = m;
    days = d;

    totalDays = Math.round((target.getTime() - birth.getTime()) / 86400000);
    totalWeeks = Math.floor(totalDays / 7);
    remDays = totalDays % 7;
    totalMonths = years * 12 + months;
    totalHours = totalDays * 24;

    bornWeekday = birth.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'UTC' });

    // Next birthday relative to target date
    const bMonth = birth.getUTCMonth();
    const bDay = birth.getUTCDate();
    let nextYear = target.getUTCFullYear();
    const makeBirthday = (yr: number) => {
      const maxDay = daysInUtcMonth(yr, bMonth);
      return new Date(Date.UTC(yr, bMonth, Math.min(bDay, maxDay)));
    };
    let nextBday = makeBirthday(nextYear);
    if (nextBday.getTime() <= target.getTime()) {
      nextYear += 1;
      nextBday = makeBirthday(nextYear);
    }
    daysUntilNextBday = Math.round((nextBday.getTime() - target.getTime()) / 86400000);
  }

  const primaryStr = isValid ? `${years}y ${months}m ${days}d` : '—';
  const copyStr = isValid
    ? `Exact Age: ${years} years, ${months} months, ${days} days | Total Days: ${totalDays.toLocaleString()} | Next Birthday in ${daysUntilNextBday} days`
    : '';

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-stretch">
      <div className="rounded-xl border border-[#1E2D36] bg-[#10171D] p-6 lg:col-span-7 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-base font-bold text-white">Date Inputs</h2>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#1E2D36] px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset</span>
            </button>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="age-dob" className="block text-sm font-medium text-slate-200">
                Date of Birth
              </label>
              <input
                id="age-dob"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="age-target" className="block text-sm font-medium text-slate-200">
                Age at Date
              </label>
              <input
                id="age-target"
                type="date"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
              />
            </div>
          </div>

          {birth && target && !isValid && (
            <p className="mt-4 text-sm font-medium text-rose-400">
              Target date must be on or after the Date of Birth.
            </p>
          )}
        </div>

        <p className="mt-6 border-t border-[#1E2D36] pt-4 text-xs leading-relaxed text-slate-400">
          Leap-year precision: Counts every 29th of February between your birth date and target date using exact UTC calendar intervals.
        </p>
      </div>

      <div className="lg:col-span-5">
        <CalculatorResultCard
          eyebrow="Chronological Age"
          primaryValue={primaryStr}
          statusLabel={
            isValid
              ? `Next birthday in ${daysUntilNextBday} ${daysUntilNextBday === 1 ? 'day' : 'days'}`
              : 'Select valid dates'
          }
          statusTone={isValid ? 'green' : 'amber'}
          copyText={copyStr}
          metrics={[
            { label: 'Total Months', value: isValid ? `${totalMonths.toLocaleString()} mo` : '—' },
            {
              label: 'Total Weeks',
              value: isValid ? `${totalWeeks.toLocaleString()} wk ${remDays} d` : '—',
            },
            {
              label: 'Total Days',
              value: isValid ? `${totalDays.toLocaleString()} days` : '—',
              highlight: true,
            },
            { label: 'Total Hours', value: isValid ? `${totalHours.toLocaleString()} hrs` : '—' },
            { label: 'Day of Week Born', value: bornWeekday },
          ]}
        />
      </div>
    </div>
  );
}
