import { useState } from 'react';
import { Plus, RotateCcw, Trash2 } from 'lucide-react';
import { CalculatorResultCard } from '../ui/CalculatorResultCard';

interface CourseRow {
  id: string;
  name: string;
  credits: string;
  grade: string;
}

const GRADE_POINTS: Record<string, number> = {
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

const INITIAL_COURSES: CourseRow[] = [
  { id: 'c1', name: 'Calculus II', credits: '4', grade: 'A' },
  { id: 'c2', name: 'Data Structures', credits: '4', grade: 'A-' },
  { id: 'c3', name: 'Physics Lab', credits: '3', grade: 'B+' },
  { id: 'c4', name: 'Technical Writing', credits: '3', grade: 'A' },
];

export function GpaCalculator() {
  const [courses, setCourses] = useState<CourseRow[]>(INITIAL_COURSES);
  const [priorGpa, setPriorGpa] = useState('');
  const [priorCredits, setPriorCredits] = useState('');

  const addCourse = () => {
    setCourses((prev) => [
      ...prev,
      { id: `c-${Date.now()}`, name: `Course ${prev.length + 1}`, credits: '3', grade: 'B+' },
    ]);
  };

  const removeCourse = (id: string) => {
    setCourses((prev) => (prev.length > 1 ? prev.filter((c) => c.id !== id) : prev));
  };

  const updateCourse = (id: string, patch: Partial<CourseRow>) => {
    setCourses((prev) => prev.map((c) => (c.id === id ? { ...c, ...patch } : c)));
  };

  const handleReset = () => {
    setCourses(INITIAL_COURSES);
    setPriorGpa('');
    setPriorCredits('');
  };

  let semesterCredits = 0;
  let semesterPoints = 0;

  courses.forEach((c) => {
    const cr = parseFloat(c.credits);
    const gp = GRADE_POINTS[c.grade] ?? 0;
    if (Number.isFinite(cr) && cr > 0) {
      semesterCredits += cr;
      semesterPoints += cr * gp;
    }
  });

  const semesterGpa = semesterCredits > 0 ? semesterPoints / semesterCredits : 0;

  const pGpa = parseFloat(priorGpa);
  const pCreds = parseFloat(priorCredits);
  const hasPrior =
    Number.isFinite(pGpa) &&
    pGpa >= 0 &&
    pGpa <= 4 &&
    Number.isFinite(pCreds) &&
    pCreds > 0;

  const totalCredits = semesterCredits + (hasPrior ? pCreds : 0);
  const totalPoints = semesterPoints + (hasPrior ? pGpa * pCreds : 0);
  const cumulativeGpa = totalCredits > 0 ? totalPoints / totalCredits : 0;

  const isValid = semesterCredits > 0;
  const standing =
    !isValid
      ? 'Add at least 1 credit hour'
      : semesterGpa >= 3.7
      ? 'Dean’s List / Summa Standing'
      : semesterGpa >= 3.0
      ? 'Good Academic Standing'
      : semesterGpa >= 2.0
      ? 'Satisfactory Standing'
      : 'Academic Probation Warning';

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-stretch">
      <div className="rounded-xl border border-[#1E2D36] bg-[#10171D] p-6 lg:col-span-7 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-base font-bold text-white">Semester Courses</h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={addCourse}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#39FF14] px-3 py-1.5 text-xs font-semibold text-[#070B0E] hover:bg-[#39FF14]/90 transition-colors"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Course</span>
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#1E2D36] px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          <div className="mt-4 space-y-2.5">
            <div className="hidden sm:grid sm:grid-cols-12 gap-2 px-1 text-xs font-medium text-slate-400">
              <span className="col-span-6">Course Name</span>
              <span className="col-span-2">Credits</span>
              <span className="col-span-3">Grade</span>
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
                  className="col-span-12 sm:col-span-6 rounded-lg border border-[#1E2D36] bg-[#070B0E] px-3 py-2 text-sm text-white focus:border-[#39FF14] focus:outline-none"
                />
                <input
                  type="number"
                  aria-label={`Course ${idx + 1} credits`}
                  min="0.5"
                  max="12"
                  step="0.5"
                  value={course.credits}
                  onChange={(e) => updateCourse(course.id, { credits: e.target.value })}
                  className="col-span-5 sm:col-span-2 rounded-lg border border-[#1E2D36] bg-[#070B0E] px-3 py-2 font-mono text-sm text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
                />
                <select
                  aria-label={`Course ${idx + 1} grade`}
                  value={course.grade}
                  onChange={(e) => updateCourse(course.id, { grade: e.target.value })}
                  className="col-span-5 sm:col-span-3 rounded-lg border border-[#1E2D36] bg-[#070B0E] px-3 py-2 font-mono text-sm text-white focus:border-[#39FF14] focus:outline-none"
                >
                  {Object.entries(GRADE_POINTS).map(([letter, pts]) => (
                    <option key={letter} value={letter}>
                      {letter} ({pts.toFixed(1)})
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => removeCourse(course.id)}
                  disabled={courses.length <= 1}
                  aria-label={`Remove ${course.name || `course ${idx + 1}`}`}
                  className="col-span-2 sm:col-span-1 inline-flex h-9 items-center justify-center rounded-lg border border-[#1E2D36] text-slate-400 hover:border-rose-500/60 hover:text-rose-400 disabled:opacity-30"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Optional Prior Standing */}
        <div className="mt-6 border-t border-[#1E2D36] pt-5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Optional Prior Standing (Cumulative Projection)
          </h3>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="prior-gpa" className="block text-xs text-slate-300">
                Prior Cumulative GPA (0.0 – 4.0)
              </label>
              <input
                id="prior-gpa"
                type="number"
                min="0"
                max="4"
                step="0.01"
                placeholder="e.g. 3.55"
                value={priorGpa}
                onChange={(e) => setPriorGpa(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-3 py-2 font-mono text-sm text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="prior-credits" className="block text-xs text-slate-300">
                Prior Completed Credits
              </label>
              <input
                id="prior-credits"
                type="number"
                min="0"
                step="0.5"
                placeholder="e.g. 45"
                value={priorCredits}
                onChange={(e) => setPriorCredits(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] px-3 py-2 font-mono text-sm text-white tabular-nums focus:border-[#39FF14] focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5">
        <CalculatorResultCard
          eyebrow="Semester GPA (4.0 Scale)"
          primaryValue={isValid ? semesterGpa.toFixed(2) : '—'}
          primaryUnit={isValid ? '/ 4.00' : undefined}
          statusLabel={standing}
          statusTone={!isValid ? 'amber' : semesterGpa >= 2.0 ? 'green' : 'rose'}
          copyText={
            isValid
              ? `Semester GPA: ${semesterGpa.toFixed(2)} (${semesterCredits} credits)${
                  hasPrior ? ` | Cumulative GPA: ${cumulativeGpa.toFixed(2)} (${totalCredits} total credits)` : ''
                }`
              : ''
          }
          metrics={[
            { label: 'Semester Credits', value: semesterCredits.toFixed(1) },
            { label: 'Semester Quality Points', value: semesterPoints.toFixed(2) },
            ...(hasPrior
              ? [
                  {
                    label: 'Projected Cumulative GPA',
                    value: `${cumulativeGpa.toFixed(2)} (${totalCredits.toFixed(1)} cr)`,
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
