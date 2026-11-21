import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { CalculatorResultCard } from '../ui/CalculatorResultCard';

type DogSize = 'small' | 'medium' | 'large';

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

function fmtDate(dt: Date): string {
  return dt.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

const CANINE_TIMELINE = [
  { week: 'Weeks 1–2', days: 'Days 1–14', milestone: 'Fertilization & uterine migration; maintain normal balanced diet.' },
  { week: 'Week 3', days: 'Days 15–21', milestone: 'Embryo implantation (~Day 16–20); mild morning appetite dip possible.' },
  { week: 'Week 4', days: 'Days 22–28', milestone: 'Vet abdominal ultrasound window (Day 25–28) confirms pregnancy.' },
  { week: 'Weeks 5–6', days: 'Days 29–42', milestone: 'Organogenesis completes; transition gradually to high-protein puppy diet.' },
  { week: 'Weeks 7–8', days: 'Days 43–56', milestone: 'Fetal skeletons calcify; vet X-ray after Day 55 gives accurate litter count.' },
  { week: 'Week 9', days: 'Days 57–63+', milestone: 'Prepare whelping box; rectal temp drop below 37.2°C (99°F) signals labor within 24h.' },
];

export function DogPregnancyCalculator() {
  const [matingDate, setMatingDate] = useState(() => getOffsetIso(24));
  const [dogSize, setDogSize] = useState<DogSize>('medium');

  const handleReset = () => {
    setMatingDate(getOffsetIso(24));
    setDogSize('medium');
  };

  const mating = parseUtc(matingDate);
  const today = parseUtc(getOffsetIso(0))!;

  const dueDate = mating ? addDays(mating, 63) : null;
  const windowStart = mating ? addDays(mating, 58) : null;
  const windowEnd = mating ? addDays(mating, 68) : null;

  const isValid = Boolean(mating && dueDate);
  const elapsedDays = mating ? Math.round((today.getTime() - mating.getTime()) / 86400000) : 0;
  const daysRemaining = dueDate ? Math.round((dueDate.getTime() - today.getTime()) / 86400000) : 0;

  const currentWeek =
    elapsedDays < 0 ? 0 : Math.min(9, Math.floor(elapsedDays / 7) + 1);
  const progressPct = elapsedDays < 0 ? 0 : Math.min(100, Math.max(0, (elapsedDays / 63) * 100));

  const sizeNote =
    dogSize === 'small'
      ? 'Toy & Small breeds (<10 kg) commonly whelp slightly early around Day 60–63.'
      : dogSize === 'large'
      ? 'Large & Giant breeds (>25 kg) often carry full 63–65 days; large litters may arrive slightly earlier.'
      : 'Medium breeds (10–25 kg) typically whelp tightly around Day 62–64 from LH surge/ovulation.';

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-12 items-stretch">
        <div className="rounded-xl border border-[#1E2D36] bg-[#10171D] p-6 lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-base font-bold text-white">Breeding &amp; Breed Size</h2>
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
                <label htmlFor="dog-mating" className="block text-sm font-medium text-slate-200">
                  Mating / Breeding Date
                </label>
                <input
                  id="dog-mating"
                  type="date"
                  value={matingDate}
                  onChange={(e) => setMatingDate(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-4 py-2.5 font-mono text-base text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                />
              </div>

              <div>
                <span className="block text-sm font-medium text-slate-200">Breed Size Category</span>
                <div className="mt-2 grid grid-cols-3 gap-1.5">
                  {[
                    { id: 'small', label: 'Small' },
                    { id: 'medium', label: 'Medium' },
                    { id: 'large', label: 'Large' },
                  ].map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setDogSize(b.id as DogSize)}
                      className={`rounded-lg border px-2.5 py-2.5 text-xs sm:text-sm font-medium transition-colors ${
                        dogSize === b.id
                          ? 'border-[#39FF14] bg-[#39FF14]/15 text-[#39FF14]'
                          : 'border-[#1E2D36] bg-[#070B0E] text-slate-300 hover:text-white'
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[#1E2D36] pt-5 text-xs">
              <div>
                <span className="text-slate-400">Vet Ultrasound Window (Day 25–28)</span>
                <p className="mt-1 font-mono font-semibold text-white tabular-nums">
                  {mating ? `${fmtDate(addDays(mating, 25))} – ${fmtDate(addDays(mating, 28))}` : '—'}
                </p>
              </div>
              <div>
                <span className="text-slate-400">Puppy Count X-Ray (Day 55+)</span>
                <p className="mt-1 font-mono font-semibold text-white tabular-nums">
                  {mating ? fmtDate(addDays(mating, 55)) : '—'}
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 border-t border-[#1E2D36] pt-4 text-xs leading-relaxed text-slate-400">
            {sizeNote}
          </p>
        </div>

        <div className="lg:col-span-5">
          <CalculatorResultCard
            eyebrow="Expected Whelping Date (Day 63)"
            primaryValue={dueDate ? fmtDate(dueDate) : '—'}
            statusLabel={
              !isValid
                ? 'Select valid mating date'
                : elapsedDays < 0
                ? `Mating date is ${Math.abs(elapsedDays)} days in the future`
                : `Week ${currentWeek} of 9 · Day ${Math.min(elapsedDays, 70)}`
            }
            statusTone={isValid && elapsedDays >= 0 ? 'green' : 'amber'}
            copyText={
              dueDate && windowStart && windowEnd
                ? `Dog Due Date: ${fmtDate(dueDate)} | Whelping Window: ${fmtDate(windowStart)} – ${fmtDate(windowEnd)} | Week ${currentWeek}/9`
                : ''
            }
            visualBar={
              isValid && elapsedDays >= 0 ? (
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                    <span>Canine Gestation (63 Days)</span>
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
              {
                label: 'Probable Window (Days 58–68)',
                value: windowStart && windowEnd ? `${fmtDate(windowStart)} – ${fmtDate(windowEnd)}` : '—',
                highlight: true,
              },
              {
                label: 'Countdown',
                value: isValid
                  ? daysRemaining >= 0
                    ? `${daysRemaining} days remaining`
                    : `${Math.abs(daysRemaining)} days past Day 63`
                  : '—',
              },
            ]}
          />
        </div>
      </div>

      {/* Week-by-Week Fetal Development & Vet Checkup Timeline */}
      <div className="rounded-xl border border-[#1E2D36] bg-[#10171D] p-6">
        <h2 className="font-display text-base font-bold text-white">
          Week-by-Week Canine Gestation &amp; Vet Checkup Timeline
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CANINE_TIMELINE.map((item) => (
            <div
              key={item.week}
              className="rounded-lg border border-[#1E2D36] bg-[#070B0E] p-4"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-semibold text-[#39FF14]">{item.week}</span>
                <span className="text-slate-400">{item.days}</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">{item.milestone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
