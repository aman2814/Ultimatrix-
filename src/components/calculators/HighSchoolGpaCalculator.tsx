import { useState } from 'react';
import { Plus, RotateCcw, Trash2 } from 'lucide-react';
import { CalculatorResultCard } from '../ui/CalculatorResultCard';

type CourseLevel = 'regular' | 'honors' | 'ap';

interface HsCourse {
  id: string;
  name: string;
  credits: string;
  grade: string;
  level: CourseLevel;
}

const BASE_GRADE_POINTS: Record<string, number> = {
  'A+': 4.0,
  A: 4.0,
  'A-': 3.7,
  'B+': 3.3,
  B: 3.0,
  'B-': 2.7,
  'C+': 2.3,
  C: 2.0,
  'C-': 1.7,
  'D+': 1.3,
  D: 1.0,
  F: 0.0,
};

const LEVEL_BONUS: Record<CourseLevel, { label: string; bonus: number }> = {
  regular: { label: 'Regular', bonus: 0.0 },
  honors: { label: 'Honors (+0.5)', bonus: 0.5 },
  ap: { label: 'AP / IB (+1.0)', bonus: 1.0 },
};

const INITIAL_COURSES: HsCourse[] = [
  { id: 'hs1', name: 'AP Calculus AB', credits: '1.0', grade: 'A', level: 'ap' },
  { id: 'hs2', name: 'Honors Chemistry', credits: '1.0', grade: 'A-', level: 'honors' },
  { id: 'hs3', name: 'English 11', credits: '1.0', grade: 'B+', level: 'regular' },
  { id: 'hs4', name: 'AP US History', credits: '1.0', grade: 'A', level: 'ap' },
];

export function HighSchoolGpaCalculator() {
  const [courses, setCourses] = useState<HsCourse[]>(INITIAL_COURSES);
  const [priorUnweighted, setPriorUnweighted] = useState('');
  const [priorWeighted, setPriorWeighted] = useState('');
  const [priorCredits, setPriorCredits] = useState('');

  const addCourse = () => {
    setCourses((prev) => [
      ...prev,
      {
        id: `hs-${Date.now()}`,
        name: `Course ${prev.length + 1}`,
        credits: '1.0',
        grade: 'A',
        level: 'regular',
      },
    ]);
  };

  const removeCourse = (id: string) => {
    setCourses((prev) => (prev.length > 1 ? prev.filter((c) => c.id !== id) : prev));
  };

  const updateCourse = (id: string, patch: Partial<HsCourse>) => {
    setCourses((prev) => prev.map((c) => (c.id === id ? { ...c, ...patch } : c)));
  };

  const handleReset = () => {
    setCourses(INITIAL_COURSES);
    setPriorUnweighted('');
    setPriorWeighted('');
    setPriorCredits('');
  };

  let semCredits = 0;
  let semUnweightedPts = 0;
  let semWeightedPts = 0;

  courses.forEach((c) => {
    const cr = parseFloat(c.credits);
    const baseGp = BASE_GRADE_POINTS[c.grade] ?? 0;
    const bonus = baseGp > 0 ? LEVEL_BONUS[c.level].bonus : 0; // Failing F earns 0 weighted points
    if (Number.isFinite(cr) && cr > 0) {
      semCredits += cr;
      semUnweightedPts += cr * baseGp;
      semWeightedPts += cr * (baseGp + bonus);
    }
  });

  const semUnweightedGpa = semCredits > 0 ? semUnweightedPts / semCredits : 0;
  const semWeightedGpa = semCredits > 0 ? semWeightedPts / semCredits : 0;

  const pCr = parseFloat(priorCredits);
  const pUw = parseFloat(priorUnweighted);
  const pW = parseFloat(priorWeighted);
  const hasPriorUw =
    Number.isFinite(pCr) && pCr > 0 && Number.isFinite(pUw) && pUw >= 0 && pUw <= 4.0;
  const hasPriorW =
    Number.isFinite(pCr) && pCr > 0 && Number.isFinite(pW) && pW >= 0 && pW <= 5.5;

  const cumCredits = semCredits + (hasPriorUw || hasPriorW ? pCr : 0);
  const cumUnweightedGpa = hasPriorUw
    ? (semUnweightedPts + pUw * pCr) / cumCredits
    : semUnweightedGpa;
  const cumWeightedGpa = hasPriorW ? (semWeightedPts + pW * pCr) / cumCredits : semWeightedGpa;

  const isValid = semCredits > 0;

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-stretch">
      <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xs lg:col-span-7 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-base font-bold text-slate-900">High School Courses</h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={addCourse}
                className="inline-flex min-h-[44px] md:min-h-0 items-center gap-1.5 rounded-lg bg-[#16a34a] px-3 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-[#15803d] transition-colors"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Course</span>
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex min-h-[44px] md:min-h-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-slate-300 hover:text-slate-900 transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          <div className="mt-4 space-y-2.5">
            <div className="hidden sm:grid sm:grid-cols-12 gap-2 px-1 text-xs font-medium text-slate-500">
              <span className="col-span-4">Course</span>
              <span className="col-span-2">Credits</span>
              <span className="col-span-2">Grade</span>
              <span className="col-span-3">Level</span>
              <span className="col-span-1 text-right">Del</span>
            </div>
            {courses.map((course, idx) => (
              <div key={course.id} className="grid grid-cols-12 gap-2 items-center">
                <input
                  type="text"
                  aria-label={`Course ${idx + 1} name`}
                  value={course.name}
                  placeholder={`Course ${idx + 1}`}
                  onChange={(e) => updateCourse(course.id, { name: e.target.value })}
                  className="col-span-12 sm:col-span-4 rounded-lg border border-slate-300 bg-slate-50/70 px-3 py-2 text-base md:text-sm text-slate-900 focus:border-[#16a34a] focus:bg-white focus:outline-none"
                />
                <input
                  type="number"
                  inputMode="decimal"
                  aria-label={`Course ${idx + 1} credits`}
                  min="0.25"
                  max="5"
                  step="0.5"
                  value={course.credits}
                  onChange={(e) => updateCourse(course.id, { credits: e.target.value })}
                  className="col-span-6 sm:col-span-2 rounded-lg border border-slate-300 bg-slate-50/70 px-2.5 py-2 font-mono text-base md:text-sm text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
                />
                <select
                  aria-label={`Course ${idx + 1} letter grade`}
                  value={course.grade}
                  onChange={(e) => updateCourse(course.id, { grade: e.target.value })}
                  className="col-span-6 sm:col-span-2 rounded-lg border border-slate-300 bg-slate-50/70 px-2 py-2 font-mono text-base md:text-sm text-slate-900 focus:border-[#16a34a] focus:bg-white focus:outline-none"
                >
                  {Object.keys(BASE_GRADE_POINTS).map((letter) => (
                    <option key={letter} value={letter}>
                      {letter}
                    </option>
                  ))}
                </select>
                <select
                  aria-label={`Course ${idx + 1} level`}
                  value={course.level}
                  onChange={(e) => updateCourse(course.id, { level: e.target.value as CourseLevel })}
                  className="col-span-10 sm:col-span-3 rounded-lg border border-slate-300 bg-slate-50/70 px-2 py-2 text-base md:text-sm text-slate-900 focus:border-[#16a34a] focus:bg-white focus:outline-none"
                >
                  {(Object.keys(LEVEL_BONUS) as CourseLevel[]).map((lvl) => (
                    <option key={lvl} value={lvl}>
                      {LEVEL_BONUS[lvl].label}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => removeCourse(course.id)}
                  disabled={courses.length <= 1}
                  aria-label={`Remove ${course.name || `course ${idx + 1}`}`}
                  className="col-span-2 sm:col-span-1 inline-flex min-h-[44px] md:min-h-0 md:h-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:border-rose-300 hover:text-rose-700 disabled:opacity-30 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Optional Prior Standing */}
        <div className="mt-6 border-t border-slate-200 pt-5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Optional Prior High School Standing
          </h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <div>
              <label htmlFor="hs-prior-cr" className="block text-xs font-medium text-slate-700">
                Prior Credits
              </label>
              <input
                id="hs-prior-cr"
                type="number"
                inputMode="decimal"
                min="0"
                step="0.5"
                placeholder="e.g. 12.0"
                value={priorCredits}
                onChange={(e) => setPriorCredits(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-3 py-2 font-mono text-base md:text-sm text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="hs-prior-uw" className="block text-xs font-medium text-slate-700">
                Prior Unweighted (4.0)
              </label>
              <input
                id="hs-prior-uw"
                type="number"
                inputMode="decimal"
                min="0"
                max="4"
                step="0.01"
                placeholder="e.g. 3.75"
                value={priorUnweighted}
                onChange={(e) => setPriorUnweighted(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-3 py-2 font-mono text-base md:text-sm text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="hs-prior-w" className="block text-xs font-medium text-slate-700">
                Prior Weighted (5.0)
              </label>
              <input
                id="hs-prior-w"
                type="number"
                inputMode="decimal"
                min="0"
                max="5.5"
                step="0.01"
                placeholder="e.g. 4.25"
                value={priorWeighted}
                onChange={(e) => setPriorWeighted(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-3 py-2 font-mono text-base md:text-sm text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5">
        <CalculatorResultCard
          eyebrow="Weighted GPA (5.0 Scale)"
          primaryValue={isValid ? semWeightedGpa.toFixed(2) : '—'}
          primaryUnit={isValid ? '/ 5.00' : undefined}
          statusLabel={
            isValid
              ? `Unweighted GPA: ${semUnweightedGpa.toFixed(2)} / 4.00`
              : 'Add at least 1 credit hour'
          }
          statusTone={isValid ? 'green' : 'amber'}
          copyText={
            isValid
              ? `Weighted GPA: ${semWeightedGpa.toFixed(2)} | Unweighted GPA: ${semUnweightedGpa.toFixed(2)} (${semCredits.toFixed(1)} credits)`
              : ''
          }
          metrics={[
            {
              label: 'Unweighted GPA (4.0 Scale)',
              value: isValid ? semUnweightedGpa.toFixed(2) : '—',
              highlight: true,
            },
            { label: 'Current Credits Earned', value: semCredits.toFixed(1) },
            ...(hasPriorUw
              ? [
                  {
                    label: 'Cumulative Unweighted GPA',
                    value: `${cumUnweightedGpa.toFixed(2)} (${cumCredits.toFixed(1)} cr)`,
                  },
                ]
              : []),
            ...(hasPriorW
              ? [
                  {
                    label: 'Cumulative Weighted GPA',
                    value: `${cumWeightedGpa.toFixed(2)} (${cumCredits.toFixed(1)} cr)`,
                    highlight: true,
                  },
                ]
              : []),
          ]}
        />
      </div>
    </div>
  );
}
