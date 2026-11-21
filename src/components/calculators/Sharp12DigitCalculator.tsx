import { useEffect, useState } from 'react';
import { Delete, History } from 'lucide-react';
import {
  AngleUnit,
  evaluateMathExpression,
  formatSharp12Digit,
} from '../../utils/mathEngine';
import { CopyResultButton } from '../ui/CopyResultButton';

interface SharpHistoryItem {
  expr: string;
  rawValue: number;
  formatted: string;
  angle: AngleUnit;
}

const DRG_ORDER: AngleUnit[] = ['DEG', 'RAD', 'GRAD'];

export function Sharp12DigitCalculator() {
  const [expr, setExpr] = useState('12500 * 1.18 + sqrt(144)');
  const [angleUnit, setAngleUnit] = useState<AngleUnit>('DEG');
  const [secondF, setSecondF] = useState(false);
  const [memoryVal, setMemoryVal] = useState(0);
  const [lastValue, setLastValue] = useState(14762);
  const [displayFormatted, setDisplayFormatted] = useState('14,762');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [history, setHistory] = useState<SharpHistoryItem[]>([
    { expr: '12500 * 1.18 + sqrt(144)', rawValue: 14762, formatted: '14,762', angle: 'DEG' },
  ]);

  const append = (chunk: string) => {
    setErrorMsg(null);
    setExpr((prev) => (prev === '0' && /^[0-9]$/.test(chunk) ? chunk : prev + chunk));
    if (secondF) setSecondF(false);
  };

  const evaluate = (): number | null => {
    if (!expr.trim()) return null;
    try {
      const val = evaluateMathExpression(expr, angleUnit, lastValue);
      const formatted = formatSharp12Digit(val);
      setLastValue(val);
      setDisplayFormatted(formatted);
      setErrorMsg(null);
      setHistory((prev) => [
        { expr, rawValue: val, formatted, angle: angleUnit },
        ...prev.slice(0, 11),
      ]);
      return val;
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Error');
      return null;
    }
  };

  const clearAll = () => {
    setExpr('');
    setDisplayFormatted('0');
    setErrorMsg(null);
    setSecondF(false);
  };

  const backspace = () => {
    setErrorMsg(null);
    setExpr((prev) => prev.slice(0, -1));
  };

  const cycleDrg = () => {
    setAngleUnit((prev) => DRG_ORDER[(DRG_ORDER.indexOf(prev) + 1) % DRG_ORDER.length]);
  };

  const handleMemory = (action: 'M+' | 'M-' | 'RCL' | 'STO' | 'MC') => {
    if (action === 'MC') {
      setMemoryVal(0);
      return;
    }
    if (action === 'RCL') {
      append(String(memoryVal));
      return;
    }
    const evaluated = expr.trim() ? evaluate() : lastValue;
    if (evaluated === null) return;
    if (action === 'STO') setMemoryVal(evaluated);
    if (action === 'M+') setMemoryVal((m) => m + evaluated);
    if (action === 'M-') setMemoryVal((m) => m - evaluated);
  };

  const toggleSign = () => {
    setErrorMsg(null);
    setExpr((prev) => (prev.startsWith('-(') && prev.endsWith(')') ? prev.slice(2, -1) : `-(${prev || '0'})`));
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        document.activeElement &&
        ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName) &&
        document.activeElement.id !== 'sharp-expr-input'
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

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-stretch">
      {/* Sharp EL-Series 12-Digit Chassis */}
      <div className="rounded-2xl border border-[#1E2D36] bg-[#10171D] p-3.5 sm:p-6 lg:col-span-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="font-semibold text-white">EL-W516 · 12-DIGIT</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-400">Direct Algebraic Logic (D.A.L.)</span>
          </div>
          <CopyResultButton
            value={errorMsg ? '' : String(lastValue)}
            label="Copy Result"
          />
        </div>

        {/* High-Contrast 12-Digit Display */}
        <div className="rounded-xl border border-[#1E2D36] bg-[#070B0E] p-4">
          <div className="flex items-center justify-between border-b border-[#1E2D36] pb-2 text-[11px] font-mono">
            <div className="flex items-center gap-2">
              <span
                className={`rounded px-1.5 py-0.5 font-bold ${
                  secondF ? 'bg-amber-400 text-[#070B0E]' : 'text-slate-600'
                }`}
              >
                2ndF
              </span>
              <span
                className={`rounded px-1.5 py-0.5 font-bold ${
                  memoryVal !== 0 ? 'bg-[#39FF14]/20 text-[#39FF14]' : 'text-slate-600'
                }`}
              >
                M = {formatSharp12Digit(memoryVal)}
              </span>
            </div>

            <button
              type="button"
              onClick={cycleDrg}
              className="rounded border border-[#1E2D36] bg-[#10171D] px-2 py-0.5 font-semibold text-[#39FF14] hover:border-[#39FF14]"
            >
              {angleUnit}
            </button>
          </div>

          <input
            id="sharp-expr-input"
            type="text"
            aria-label="Sharp Direct Algebraic Logic input"
            value={expr}
            onChange={(e) => {
              setErrorMsg(null);
              setExpr(e.target.value);
            }}
            placeholder="Enter D.A.L. expression..."
            className="mt-3 w-full bg-transparent text-right font-mono text-base md:text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none tabular-nums"
          />

          <div
            aria-live="polite"
            className={`mt-2 text-right font-mono text-3xl sm:text-4xl font-bold tracking-tight tabular-nums break-all ${
              errorMsg ? 'text-rose-400 text-xl sm:text-2xl' : 'text-[#39FF14]'
            }`}
          >
            {errorMsg || displayFormatted}
          </div>
        </div>

        {/* Memory & Mode Row */}
        <div className="mt-4 grid grid-cols-6 gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => setSecondF((s) => !s)}
            className={`min-h-[44px] md:min-h-0 md:h-10 min-w-0 rounded-lg border px-0.5 sm:px-1 font-mono text-[11px] sm:text-xs font-bold transition-colors ${
              secondF
                ? 'border-amber-400 bg-amber-400 text-[#070B0E]'
                : 'border-[#1E2D36] bg-[#070B0E] text-amber-300 hover:border-amber-400/60'
            }`}
          >
            2ndF
          </button>
          <button
            type="button"
            onClick={cycleDrg}
            className="min-h-[44px] md:min-h-0 md:h-10 min-w-0 rounded-lg border border-[#1E2D36] bg-[#070B0E] px-0.5 sm:px-1 font-mono text-[11px] sm:text-xs font-semibold text-slate-200 hover:border-[#39FF14]/60"
          >
            DRG
          </button>
          <button
            type="button"
            onClick={() => handleMemory('STO')}
            className="min-h-[44px] md:min-h-0 md:h-10 min-w-0 rounded-lg border border-[#1E2D36] bg-[#070B0E] px-0.5 sm:px-1 font-mono text-[11px] sm:text-xs font-semibold text-slate-200 hover:border-[#39FF14]/60"
          >
            STO
          </button>
          <button
            type="button"
            onClick={() => handleMemory(secondF ? 'MC' : 'RCL')}
            className="min-h-[44px] md:min-h-0 md:h-10 min-w-0 rounded-lg border border-[#1E2D36] bg-[#070B0E] px-0.5 sm:px-1 font-mono text-[11px] sm:text-xs font-semibold text-slate-200 hover:border-[#39FF14]/60"
          >
            {secondF ? 'MC' : 'RCL'}
          </button>
          <button
            type="button"
            onClick={() => handleMemory('M+')}
            className="min-h-[44px] md:min-h-0 md:h-10 min-w-0 rounded-lg border border-[#1E2D36] bg-[#070B0E] px-0.5 sm:px-1 font-mono text-[11px] sm:text-xs font-semibold text-[#39FF14] hover:border-[#39FF14]"
          >
            M+
          </button>
          <button
            type="button"
            onClick={() => handleMemory('M-')}
            className="min-h-[44px] md:min-h-0 md:h-10 min-w-0 rounded-lg border border-[#1E2D36] bg-[#070B0E] px-0.5 sm:px-1 font-mono text-[11px] sm:text-xs font-semibold text-slate-200 hover:border-[#39FF14]/60"
          >
            M−
          </button>
        </div>

        {/* Scientific Row */}
        <div className="mt-2.5 grid grid-cols-5 gap-1.5 sm:gap-2">
          {[
            { p: 'sin', s: 'sin⁻¹', act: () => append(secondF ? 'asin(' : 'sin(') },
            { p: 'cos', s: 'cos⁻¹', act: () => append(secondF ? 'acos(' : 'cos(') },
            { p: 'tan', s: 'tan⁻¹', act: () => append(secondF ? 'atan(' : 'tan(') },
            { p: 'log', s: '10^x', act: () => append(secondF ? '10^(' : 'log(') },
            { p: 'ln', s: 'e^x', act: () => append(secondF ? 'e^(' : 'ln(') },
            { p: '√x', s: '∛x', act: () => append(secondF ? 'cbrt(' : 'sqrt(') },
            { p: 'x²', s: 'x³', act: () => append(secondF ? '^3' : '^2') },
            { p: 'yˣ', s: '1/x', act: () => append(secondF ? '^(-1)' : '^') },
            { p: 'n!', s: 'π', act: () => append(secondF ? 'π' : '!') },
            { p: '( )', s: 'e', act: () => append(secondF ? 'e' : '(') },
          ].map((btn) => (
            <button
              key={btn.p}
              type="button"
              onClick={btn.act}
              className="flex h-12 flex-col items-center justify-center rounded-lg border border-[#1E2D36] bg-[#070B0E] px-1 transition-colors hover:border-[#39FF14]/60"
            >
              <span className="text-[10px] font-mono text-amber-300/85 leading-none">
                {btn.s}
              </span>
              <span className="mt-1 font-mono text-xs sm:text-sm font-semibold text-white leading-none">
                {btn.p}
              </span>
            </button>
          ))}
        </div>

        {/* Numeric + Business Keypad */}
        <div className="mt-3 grid grid-cols-5 gap-1.5 sm:gap-2">
          {[
            { label: '7', act: () => append('7') },
            { label: '8', act: () => append('8') },
            { label: '9', act: () => append('9') },
            { label: 'DEL', act: backspace, tone: 'warn' },
            { label: 'C·CE', act: clearAll, tone: 'danger' },
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
            { label: '+/−', act: toggleSign },
            { label: '%', act: () => append('%'), tone: 'op' },
            { label: '=', act: () => evaluate(), tone: 'accent' },
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

      {/* History & Memory Panel */}
      <div className="rounded-xl border border-[#1E2D36] bg-[#10171D] p-5 sm:p-6 lg:col-span-4 flex flex-col">
        <div className="flex items-center justify-between gap-2 border-b border-[#1E2D36] pb-3">
          <div className="flex items-center gap-2">
            <History className="h-4 w-4 text-[#39FF14]" />
            <h2 className="font-display text-base font-bold text-white">12-Digit Audit Tape</h2>
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

        <div className="mt-4 flex-1 space-y-2.5 overflow-y-auto no-scrollbar max-h-[420px]">
          {history.length === 0 ? (
            <p className="text-sm text-slate-400">
              Evaluated 12-digit expressions will appear here. Click any entry to reload.
            </p>
          ) : (
            history.map((item, idx) => (
              <button
                key={`${item.expr}-${idx}`}
                type="button"
                onClick={() => {
                  setExpr(item.expr);
                  setLastValue(item.rawValue);
                  setDisplayFormatted(item.formatted);
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
                  = {item.formatted}
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
