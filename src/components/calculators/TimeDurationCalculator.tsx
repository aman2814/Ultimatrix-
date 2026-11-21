import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { CalculatorResultCard } from '../ui/CalculatorResultCard';

function parseTimeToSeconds(timeStr: string): number | null {
  const parts = timeStr.split(':').map(Number);
  if (parts.length < 2 || parts.length > 3 || parts.some((n) => !Number.isFinite(n))) {
    return null;
  }
  const [h, m, s = 0] = parts;
  if (h < 0 || h > 23 || m < 0 || m > 59 || s < 0 || s > 59) return null;
  return h * 3600 + m * 60 + s;
}

function pad2(n: number): string {
  return String(n).padStart(2, '0');
}

function format12Hour(h24: number, m: number, s: number): string {
  const period = h24 >= 12 ? 'PM' : 'AM';
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${pad2(h12)}:${pad2(m)}:${pad2(s)} ${period}`;
}

export function TimeDurationCalculator() {
  const [mode, setMode] = useState<'elapsed' | 'offset'>('elapsed');
  const [startTime, setStartTime] = useState('08:45:00');
  const [endTime, setEndTime] = useState('17:15:30');
  const [overnightWrap, setOvernightWrap] = useState(true);

  const [baseTime, setBaseTime] = useState('09:30:00');
  const [op, setOp] = useState<'add' | 'sub'>('add');
  const [durHours, setDurHours] = useState('4');
  const [durMins, setDurMins] = useState('45');
  const [durSecs, setDurSecs] = useState('0');

  const handleReset = () => {
    setStartTime('08:45:00');
    setEndTime('17:15:30');
    setOvernightWrap(true);
    setBaseTime('09:30:00');
    setOp('add');
    setDurHours('4');
    setDurMins('45');
    setDurSecs('0');
  };

  if (mode === 'elapsed') {
    const startSec = parseTimeToSeconds(startTime);
    const endSec = parseTimeToSeconds(endTime);
    const isValid = startSec !== null && endSec !== null;

    let diffSec = 0;
    let wrapped = false;
    if (startSec !== null && endSec !== null) {
      diffSec = endSec - startSec;
      if (diffSec < 0) {
        if (overnightWrap) {
          diffSec += 86400;
          wrapped = true;
        } else {
          diffSec = Math.abs(diffSec);
        }
      }
    }

    const hrs = Math.floor(diffSec / 3600);
    const mins = Math.floor((diffSec % 3600) / 60);
    const secs = diffSec % 60;
    const decimalHours = diffSec / 3600;
    const totalMinutes = diffSec / 60;

    const primaryStr = isValid ? `${hrs}h ${pad2(mins)}m ${pad2(secs)}s` : '—';
    const copyStr = isValid
      ? `Elapsed Time: ${hrs}h ${pad2(mins)}m ${pad2(secs)}s (${decimalHours.toFixed(2)} decimal hours)`
      : '';

    return (
      <div className="grid gap-6 lg:grid-cols-12 items-stretch">
        <div className="rounded-xl border border-[#1E2D36] bg-[#10171D] p-4 sm:p-6 lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex max-w-full flex-wrap rounded-lg border border-[#1E2D36] bg-[#070B0E] p-1">
                <button
                  type="button"
                  onClick={() => setMode('elapsed')}
                  className="min-h-[44px] md:min-h-0 rounded-md bg-[#39FF14] px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[#070B0E] whitespace-nowrap"
                >
                  Elapsed Time
                </button>
                <button
                  type="button"
                  onClick={() => setMode('offset')}
                  className="min-h-[44px] md:min-h-0 rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white whitespace-nowrap"
                >
                  Add / Subtract Time
                </button>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex min-h-[44px] md:min-h-0 items-center gap-1.5 rounded-lg border border-[#1E2D36] px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset</span>
              </button>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="time-start" className="block text-sm font-medium text-slate-200">
                  Start Time (HH:MM:SS)
                </label>
                <input
                  id="time-start"
                  type="time"
                  step="1"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="time-end" className="block text-sm font-medium text-slate-200">
                  End Time (HH:MM:SS)
                </label>
                <input
                  id="time-end"
                  type="time"
                  step="1"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                />
              </div>
            </div>

            <label className="mt-5 inline-flex cursor-pointer items-center gap-2.5 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={overnightWrap}
                onChange={(e) => setOvernightWrap(e.target.checked)}
                className="h-4 w-4 rounded border-[#1E2D36] bg-[#070B0E] accent-[#39FF14]"
              />
              <span>Overnight shift wrap (add 24h when end time is earlier)</span>
            </label>
          </div>

          <p className="mt-6 border-t border-[#1E2D36] pt-4 text-xs text-slate-400">
            {wrapped
              ? 'Overnight shift detected: Wrapped across midnight to compute elapsed duration.'
              : 'Outputs exact HMS duration alongside decimal hours for timesheets and payroll.'}
          </p>
        </div>

        <div className="lg:col-span-5">
          <CalculatorResultCard
            eyebrow="Elapsed Duration"
            primaryValue={primaryStr}
            statusLabel={
              isValid ? `${decimalHours.toFixed(4)} decimal hours` : 'Enter valid times'
            }
            statusTone={isValid ? 'green' : 'amber'}
            copyText={copyStr}
            metrics={[
              {
                label: 'Decimal Hours',
                value: isValid ? `${decimalHours.toFixed(2)} hrs` : '—',
                highlight: true,
              },
              { label: 'Total Minutes', value: isValid ? `${totalMinutes.toFixed(2)} min` : '—' },
              { label: 'Total Seconds', value: isValid ? `${diffSec.toLocaleString()} sec` : '—' },
            ]}
          />
        </div>
      </div>
    );
  }

  // Offset mode
  const baseSec = parseTimeToSeconds(baseTime);
  const deltaSec =
    (Math.max(0, parseInt(durHours, 10) || 0) * 3600 +
      Math.max(0, parseInt(durMins, 10) || 0) * 60 +
      Math.max(0, parseInt(durSecs, 10) || 0)) *
    (op === 'add' ? 1 : -1);

  const isValid = baseSec !== null;
  let final24 = '—';
  let final12 = '—';
  let dayShift = 0;

  if (baseSec !== null) {
    const rawTotal = baseSec + deltaSec;
    dayShift = Math.floor(rawTotal / 86400);
    const modSec = ((rawTotal % 86400) + 86400) % 86400;
    const h = Math.floor(modSec / 3600);
    const m = Math.floor((modSec % 3600) / 60);
    const s = modSec % 60;
    final24 = `${pad2(h)}:${pad2(m)}:${pad2(s)}`;
    final12 = format12Hour(h, m, s);
  }

  const dayShiftLabel =
    dayShift === 0
      ? 'Same calendar day'
      : dayShift > 0
      ? `+${dayShift} ${dayShift === 1 ? 'day' : 'days'} ahead`
      : `${dayShift} ${dayShift === -1 ? 'day' : 'days'} earlier`;

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-stretch">
      <div className="rounded-xl border border-[#1E2D36] bg-[#10171D] p-4 sm:p-6 lg:col-span-7 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex max-w-full flex-wrap rounded-lg border border-[#1E2D36] bg-[#070B0E] p-1">
              <button
                type="button"
                onClick={() => setMode('elapsed')}
                className="min-h-[44px] md:min-h-0 rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white whitespace-nowrap"
              >
                Elapsed Time
              </button>
              <button
                type="button"
                onClick={() => setMode('offset')}
                className="min-h-[44px] md:min-h-0 rounded-md bg-[#39FF14] px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[#070B0E] whitespace-nowrap"
              >
                Add / Subtract Time
              </button>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex min-h-[44px] md:min-h-0 items-center gap-1.5 rounded-lg border border-[#1E2D36] px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset</span>
            </button>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="time-base" className="block text-sm font-medium text-slate-200">
                Base Time
              </label>
              <input
                id="time-base"
                type="time"
                step="1"
                value={baseTime}
                onChange={(e) => setBaseTime(e.target.value)}
                className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
              />
            </div>
            <div>
              <span className="block text-sm font-medium text-slate-200">Operation</span>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setOp('add')}
                  className={`min-h-[44px] md:min-h-0 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                    op === 'add'
                      ? 'border-[#39FF14] bg-[#39FF14]/15 text-[#39FF14]'
                      : 'border-[#1E2D36] bg-[#070B0E] text-slate-300 hover:text-white'
                  }`}
                >
                  + Add
                </button>
                <button
                  type="button"
                  onClick={() => setOp('sub')}
                  className={`min-h-[44px] md:min-h-0 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                    op === 'sub'
                      ? 'border-[#39FF14] bg-[#39FF14]/15 text-[#39FF14]'
                      : 'border-[#1E2D36] bg-[#070B0E] text-slate-300 hover:text-white'
                  }`}
                >
                  − Subtract
                </button>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { id: 'dur-h', label: 'Hours', val: durHours, set: setDurHours },
              { id: 'dur-m', label: 'Minutes', val: durMins, set: setDurMins },
              { id: 'dur-s', label: 'Seconds', val: durSecs, set: setDurSecs },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="block text-xs font-medium text-slate-300">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type="number"
                  inputMode="numeric"
                  min="0"
                  value={f.val}
                  onChange={(e) => f.set(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-3 py-2 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 border-t border-[#1E2D36] pt-4 text-xs text-slate-400">
          Supports multi-day shifts above 24 hours and reports the resulting 24-hour and 12-hour clock times.
        </p>
      </div>

      <div className="lg:col-span-5">
        <CalculatorResultCard
          eyebrow="Resulting Clock Time"
          primaryValue={final12}
          statusLabel={isValid ? dayShiftLabel : 'Enter valid base time'}
          statusTone={isValid ? 'green' : 'amber'}
          copyText={isValid ? `${final12} (${final24}, ${dayShiftLabel})` : ''}
          metrics={[
            { label: '24-Hour Format', value: final24, highlight: true },
            { label: 'Day Offset', value: isValid ? dayShiftLabel : '—' },
          ]}
        />
      </div>
    </div>
  );
}
