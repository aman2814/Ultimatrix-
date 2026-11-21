import { useEffect, useState } from 'react';
import { Delete, History } from 'lucide-react';
import {
  AngleUnit,
  evaluateMathExpression,
  formatMixedFraction,
} from '../../utils/mathEngine';
import { CopyResultButton } from '../ui/CopyResultButton';

interface HistoryItem {
  expr: string;
  result: string;
  angle: AngleUnit;
}

const ANGLE_ORDER: AngleUnit[] = ['DEG', 'RAD', 'GRAD'];

export function CasioFx115esCalculator() {
  const [expr, setExpr] = useState('logBase(2, 64) + sin(30)');
  const [angleUnit, setAngleUnit] = useState<AngleUnit>('DEG');
  const [ans, setAns] = useState(6.5);
  const [resultStr, setResultStr] = useState('6.5');
  const [fractionMode, setFractionMode] = useState(false);
  const [shiftActive, setShiftActive] = useState(false);
  const [alphaActive, setAlphaActive] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([
    { expr: 'logBase(2, 64) + sin(30)', result: '6.5', angle: 'DEG' },
  ]);

  const append = (chunk: string) => {
    setErrorMsg(null);
    setExpr((prev) => (prev === '0' && /^[0-9]$/.test(chunk) ? chunk : prev + chunk));
    if (shiftActive) setShiftActive(false);
    if (alphaActive) setAlphaActive(false);
  };

  const evaluate = () => {
    if (!expr.trim()) return;
    try {
      const val = evaluateMathExpression(expr, angleUnit, ans);
      const formatted = String(val);
      setAns(val);
      setResultStr(formatted);
      setFractionMode(false);
      setErrorMsg(null);
      setHistory((prev) => [{ expr, result: formatted, angle: angleUnit }, ...prev.slice(0, 11)]);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Syntax Error');
    }
  };

  const clearAll = () => {
    setExpr('');
    setResultStr('0');
    setErrorMsg(null);
    setShiftActive(false);
    setAlphaActive(false);
  };

  const backspace = () => {
    setErrorMsg(null);
    setExpr((prev) => prev.slice(0, -1));
  };

  const cycleAngle = () => {
    const next = ANGLE_ORDER[(ANGLE_ORDER.indexOf(angleUnit) + 1) % ANGLE_ORDER.length];
    setAngleUnit(next);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        document.activeElement &&
        ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName) &&
        document.activeElement.id !== 'casio-expr-input'
      ) {
        return;
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        evaluate();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        clearAll();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const numericResult = parseFloat(resultStr);
  const fractionDisplay =
    fractionMode && Number.isFinite(numericResult) ? formatMixedFraction(numericResult) : null;
  const shownResult = errorMsg ? errorMsg : fractionDisplay || resultStr;

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-stretch">
      {/* Casio fx-115ES Plus Chassis */}
      <div className="rounded-2xl border border-[#1E2D36] bg-[#10171D] p-5 sm:p-6 lg:col-span-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="font-semibold text-white">fx-115ES PLUS</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-400">Natural-V.P.A.M. Simulator</span>
          </div>
          <CopyResultButton value={errorMsg ? '' : shownResult} label="Copy Result" />
        </div>

        {/* Natural Textbook Two-Line LCD Screen */}
        <div className="rounded-xl border border-[#24382A] bg-[#0B140E] p-4 shadow-inner">
          <div className="flex items-center justify-between border-b border-[#1E2D36]/70 pb-2 text-[11px] font-mono">
            <div className="flex items-center gap-2">
              <span
                className={`rounded px-1.5 py-0.5 font-bold ${
                  shiftActive ? 'bg-amber-400 text-[#070B0E]' : 'text-slate-600'
                }`}
              >
                SHIFT
              </span>
              <span
                className={`rounded px-1.5 py-0.5 font-bold ${
                  alphaActive ? 'bg-rose-400 text-[#070B0E]' : 'text-slate-600'
                }`}
              >
                ALPHA
              </span>
              <span className="text-slate-400">Math</span>
            </div>

            <button
              type="button"
              onClick={cycleAngle}
              className="rounded border border-[#1E2D36] bg-[#070B0E] px-2 py-0.5 font-semibold text-[#39FF14] hover:border-[#39FF14]"
              title="Cycle DEG / RAD / GRAD"
            >
              {angleUnit}
            </button>
          </div>

          <input
            id="casio-expr-input"
            type="text"
            aria-label="Casio Natural Textbook Expression"
            value={expr}
            onChange={(e) => {
              setErrorMsg(null);
              setExpr(e.target.value);
            }}
            placeholder="e.g. (3/4) + logBase(2, 8) + nCr(5, 2)"
            className="mt-3 w-full bg-transparent font-mono text-sm sm:text-base text-slate-200 placeholder:text-slate-600 focus:outline-none tabular-nums"
          />

          <div
            aria-live="polite"
            className={`mt-3 text-right font-mono text-2xl sm:text-3xl font-bold tabular-nums break-all ${
              errorMsg ? 'text-rose-400' : 'text-[#39FF14]'
            }`}
          >
            {shownResult}
          </div>
        </div>

        {/* Top Modifier & Mode Row */}
        <div className="mt-4 grid grid-cols-6 gap-2">
          <button
            type="button"
            onClick={() => {
              setShiftActive((s) => !s);
              setAlphaActive(false);
            }}
            className={`h-10 rounded-lg border font-mono text-xs font-bold transition-colors ${
              shiftActive
                ? 'border-amber-400 bg-amber-400 text-[#070B0E]'
                : 'border-[#1E2D36] bg-[#070B0E] text-amber-300 hover:border-amber-400/60'
            }`}
          >
            SHIFT
          </button>
          <button
            type="button"
            onClick={() => {
              setAlphaActive((a) => !a);
              setShiftActive(false);
            }}
            className={`h-10 rounded-lg border font-mono text-xs font-bold transition-colors ${
              alphaActive
                ? 'border-rose-400 bg-rose-400 text-[#070B0E]'
                : 'border-[#1E2D36] bg-[#070B0E] text-rose-300 hover:border-rose-400/60'
            }`}
          >
            ALPHA
          </button>
          <button
            type="button"
            onClick={cycleAngle}
            className="h-10 rounded-lg border border-[#1E2D36] bg-[#070B0E] font-mono text-xs font-semibold text-slate-200 hover:border-[#39FF14]/60"
          >
            DRG
          </button>
          <button
            type="button"
            onClick={() => append(shiftActive ? 'abs(' : '/')}
            title="Fraction bar or abs() with SHIFT"
            className="h-10 rounded-lg border border-[#1E2D36] bg-[#070B0E] font-mono text-xs font-semibold text-slate-200 hover:border-[#39FF14]/60"
          >
            {shiftActive ? 'abs()' : 'a b/c'}
          </button>
          <button
            type="button"
            onClick={() => setFractionMode((f) => !f)}
            title="Toggle Standard Fraction / Decimal display"
            className={`h-10 rounded-lg border font-mono text-xs font-semibold transition-colors ${
              fractionMode
                ? 'border-[#39FF14] bg-[#39FF14]/20 text-[#39FF14]'
                : 'border-[#1E2D36] bg-[#070B0E] text-slate-200 hover:border-[#39FF14]/60'
            }`}
          >
            S⇔D
          </button>
          <button
            type="button"
            onClick={() => append(', ')}
            className="h-10 rounded-lg border border-[#1E2D36] bg-[#070B0E] font-mono text-xs font-semibold text-slate-200 hover:border-[#39FF14]/60"
          >
            , (sep)
          </button>
        </div>

        {/* Scientific Function Keys */}
        <div className="mt-2.5 grid grid-cols-6 gap-2">
          {[
            {
              primary: 'logₐ(b)',
              shift: '10^x',
              action: () => append(shiftActive ? '10^(' : 'logBase('),
            },
            {
              primary: '√x',
              shift: '∛x',
              action: () => append(shiftActive ? 'cbrt(' : 'sqrt('),
            },
            {
              primary: 'x²',
              shift: 'x³',
              action: () => append(shiftActive ? '^3' : '^2'),
            },
            {
              primary: 'xʸ',
              shift: 'x⁻¹',
              action: () => append(shiftActive ? '^(-1)' : '^'),
            },
            {
              primary: 'log',
              shift: '10^x',
              action: () => append(shiftActive ? '10^(' : 'log('),
            },
            {
              primary: 'ln',
              shift: 'e^x',
              action: () => append(shiftActive ? 'e^(' : 'ln('),
            },
            {
              primary: 'sin',
              shift: 'sin⁻¹',
              action: () => append(shiftActive ? 'asin(' : 'sin('),
            },
            {
              primary: 'cos',
              shift: 'cos⁻¹',
              action: () => append(shiftActive ? 'acos(' : 'cos('),
            },
            {
              primary: 'tan',
              shift: 'tan⁻¹',
              action: () => append(shiftActive ? 'atan(' : 'tan('),
            },
            {
              primary: 'nCr',
              shift: 'nPr',
              action: () => append(shiftActive ? 'nPr(' : 'nCr('),
            },
            {
              primary: '(',
              shift: 'π',
              action: () => append(shiftActive ? 'π' : '('),
            },
            {
              primary: ')',
              shift: 'e',
              action: () => append(shiftActive || alphaActive ? 'e' : ')'),
            },
          ].map((btn, idx) => (
            <button
              key={`${btn.primary}-${idx}`}
              type="button"
              onClick={btn.action}
              className="flex h-12 flex-col items-center justify-center rounded-lg border border-[#1E2D36] bg-[#070B0E] px-1 transition-colors hover:border-[#39FF14]/60"
            >
              <span className="text-[10px] font-mono text-amber-300/85 leading-none">
                {btn.shift}
              </span>
              <span className="mt-1 font-mono text-xs sm:text-sm font-semibold text-white leading-none">
                {btn.primary}
              </span>
            </button>
          ))}
        </div>

        {/* Numeric Keypad */}
        <div className="mt-3 grid grid-cols-5 gap-2">
          {[
            { label: '7', act: () => append('7') },
            { label: '8', act: () => append('8') },
            { label: '9', act: () => append('9') },
            { label: 'DEL', act: backspace, tone: 'warn' },
            { label: 'AC', act: clearAll, tone: 'danger' },
            { label: '4', act: () => append('4') },
            { label: '5', act: () => append('5') },
            { label: '6', act: () => append('6') },
            { label: '×', act: () => append('*'), tone: 'op' },
            { label: '÷', act: () => append('/'), tone: 'op' },
            { label: '1', act: () => append('1') },
            { label: '2', act: () => append('2') },
            { label: '3', act: () => append('3') },
            { label: '+', act: () => append('+'), tone: 'op' },
            { label: '−', act: () => append('-'), tone: 'op' },
            { label: '0', act: () => append('0') },
            { label: '.', act: () => append('.') },
            { label: shiftActive ? 'π' : 'n!', act: () => append(shiftActive ? 'π' : '!') },
            { label: 'Ans', act: () => append('Ans'), tone: 'op' },
            { label: '=', act: evaluate, tone: 'accent' },
          ].map((k) => {
            const cls =
              k.tone === 'accent'
                ? 'bg-[#39FF14] text-[#070B0E] border-[#39FF14] font-bold hover:bg-[#39FF14]/90'
                : k.tone === 'danger'
                ? 'bg-[#141D25] text-rose-400 border-[#1E2D36] hover:border-rose-400/50'
                : k.tone === 'warn'
                ? 'bg-[#141D25] text-amber-300 border-[#1E2D36] hover:border-amber-300/50'
                : k.tone === 'op'
                ? 'bg-[#141D25] text-[#39FF14] border-[#1E2D36] hover:border-[#39FF14]/50'
                : 'bg-[#070B0E] text-white border-[#1E2D36] hover:border-slate-500';
            return (
              <button
                key={k.label}
                type="button"
                onClick={k.act}
                className={`h-11 rounded-lg border font-mono text-sm sm:text-base font-semibold transition-colors ${cls}`}
              >
                {k.label === 'DEL' ? (
                  <span className="inline-flex items-center gap-1">
                    <Delete className="h-3.5 w-3.5" />
                    DEL
                  </span>
                ) : (
                  k.label
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* History Tape */}
      <div className="rounded-xl border border-[#1E2D36] bg-[#10171D] p-5 sm:p-6 lg:col-span-4 flex flex-col">
        <div className="flex items-center justify-between gap-2 border-b border-[#1E2D36] pb-3">
          <div className="flex items-center gap-2">
            <History className="h-4 w-4 text-[#39FF14]" />
            <h2 className="font-display text-base font-bold text-white">Calculation Tape</h2>
          </div>
          {history.length > 0 && (
            <button
              type="button"
              onClick={() => setHistory([])}
              className="text-xs text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        <div className="mt-4 flex-1 space-y-2.5 overflow-y-auto max-h-[420px]">
          {history.length === 0 ? (
            <p className="text-sm text-slate-400">
              Evaluated Casio expressions appear here. Click any item to reload it.
            </p>
          ) : (
            history.map((item, idx) => (
              <button
                key={`${item.expr}-${idx}`}
                type="button"
                onClick={() => {
                  setExpr(item.expr);
                  setResultStr(item.result);
                  setAngleUnit(item.angle);
                  setErrorMsg(null);
                }}
                className="w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] p-3 text-left transition-colors hover:border-[#39FF14]/50"
              >
                <div className="flex items-center justify-between font-mono text-[11px] text-slate-400">
                  <span>{item.angle}</span>
                  <span>Reload</span>
                </div>
                <div className="mt-1 truncate font-mono text-xs text-slate-300 tabular-nums">
                  {item.expr}
                </div>
                <div className="mt-1 font-mono text-base font-bold text-[#39FF14] tabular-nums">
                  = {item.result}
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
