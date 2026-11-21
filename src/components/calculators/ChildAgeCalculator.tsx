import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { CalculatorResultCard } from '../ui/CalculatorResultCard';

function getTodayIso(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(
    now.getDate()
  ).padStart(2, '0')}`;
}

function getDefaultChildDobIso(): string {
  const now = new Date();
  now.setMonth(now.getMonth() - 18);
  now.setDate(now.getDate() - 12);
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(
    now.getDate()
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

function daysInUtcMonth(year: number, monthIndex: number): number {
  return new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
}

export function ChildAgeCalculator() {
  const [dob, setDob] = useState(getDefaultChildDobIso);
  const [targetDate, setTargetDate] = useState(getTodayIso);

  const handleReset = () => {
    setDob(getDefaultChildDobIso());
    setTargetDate(getTodayIso());
  };

  const birth = parseUtc(dob);
  const target = parseUtc(targetDate);
  const isValid = Boolean(birth && target && target.getTime() >= birth.getTime());

  let years = 0;
  let months = 0;
  let days = 0;
  let totalMonths = 0;
  let totalDays = 0;
  let totalWeeks = 0;
  let remWeekDays = 0;
  let nextBdayDays = 0;
  let bornDay = '—';

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
    totalMonths = years * 12 + months;
    totalDays = Math.round((target.getTime() - birth.getTime()) / 86400000);
    totalWeeks = Math.floor(totalDays / 7);
    remWeekDays = totalDays % 7;
    bornDay = birth.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'UTC' });

    const bMonth = birth.getUTCMonth();
    const bDay = birth.getUTCDate();
    let nextYear = target.getUTCFullYear();
    const makeBday = (yr: number) =>
      new Date(Date.UTC(yr, bMonth, Math.min(bDay, daysInUtcMonth(yr, bMonth))));
    let nextBday = makeBday(nextYear);
    if (nextBday.getTime() <= target.getTime()) {
      nextYear += 1;
      nextBday = makeBday(nextYear);
    }
    nextBdayDays = Math.round((nextBday.getTime() - target.getTime()) / 86400000);
  }

  const pediatricMonthsStr = isValid ? `${totalMonths} months, ${days} days` : '—';
  const ymdStr = isValid ? `${years}y ${months}m ${days}d` : '—';

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-stretch">
      <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xs lg:col-span-7 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-base font-bold text-slate-900">Child Birth Details</h2>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex min-h-[44px] md:min-h-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset</span>
            </button>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="cage-dob" className="block text-sm font-medium text-slate-700">
                Child&apos;s Date of Birth
              </label>
              <input
                id="cage-dob"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="cage-target" className="block text-sm font-medium text-slate-700">
                Target Date
              </label>
              <input
                id="cage-target"
                type="date"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          {birth && target && !isValid && (
            <p className="mt-4 text-sm font-medium text-rose-700">
              Target date must be on or after the child&apos;s date of birth.
            </p>
          )}
        </div>

        <p className="mt-6 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-600">
          Pediatric checkups, infant feeding schedules, and school admissions commonly track exact months + days (up to 36 months) and total weeks.
        </p>
      </div>

      <div className="lg:col-span-5">
        <CalculatorResultCard
          eyebrow="Pediatric Age (Months & Days)"
          primaryValue={pediatricMonthsStr}
          statusLabel={
            isValid
              ? `${years} years, ${months} months, ${days} days`
              : 'Select valid dates'
          }
          statusTone={isValid ? 'green' : 'amber'}
          copyText={
            isValid
              ? `Child Age: ${pediatricMonthsStr} (${ymdStr}) | ${totalWeeks} weeks, ${remWeekDays} days | Total: ${totalDays} days`
              : ''
          }
          metrics={[
            { label: 'Years / Months / Days', value: ymdStr },
            {
              label: 'Total Weeks + Days',
              value: isValid ? `${totalWeeks.toLocaleString()} wk, ${remWeekDays} d` : '—',
              highlight: true,
            },
            { label: 'Total Days Lived', value: isValid ? `${totalDays.toLocaleString()} days` : '—' },
            {
              label: 'Next Birthday Countdown',
              value: isValid ? `${nextBdayDays} ${nextBdayDays === 1 ? 'day' : 'days'}` : '—',
            },
            { label: 'Birth Day of Week', value: bornDay },
          ]}
        />
      </div>
    </div>
  );
}
