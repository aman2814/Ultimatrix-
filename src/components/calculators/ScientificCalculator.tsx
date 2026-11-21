import { useEffect, useState } from 'react';
import { Delete, History } from 'lucide-react';
import { CopyResultButton } from '../ui/CopyResultButton';

type AngleMode = 'DEG' | 'RAD';

interface HistoryEntry {
  expr: string;
  result: string;
  mode: AngleMode;
}

type Token =
  | { type: 'num'; value: number }
  | { type: 'op'; value: string }
  | { type: 'ident'; value: string }
  | { type: 'lparen' }
  | { type: 'rparen' };

function factorial(n: number): number {
  if (!Number.isInteger(n) || n < 0) throw new Error('Invalid factorial');
  if (n > 170) throw new Error('Overflow');
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

function tokenize(raw: string): Token[] {
  const s = raw.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-').replace(/π/g, 'pi');
  const tokens: Token[] = [];
  let i = 0;
  while (i < s.length) {
    const ch = s[i];
    if (/\s/.test(ch)) {
      i++;
      continue;
    }
    if (/[0-9.]/.test(ch)) {
      let numStr = '';
      while (i < s.length && /[0-9.]/.test(s[i])) {
        numStr += s[i++];
      }
      if ((numStr.match(/\./g) || []).length > 1) throw new Error('Invalid number');
      const num = parseFloat(numStr);
      if (!Number.isFinite(num)) throw new Error('Invalid number');
      tokens.push({ type: 'num', value: num });
      continue;
    }
    if (/[a-zA-Z]/.test(ch)) {
      let ident = '';
      while (i < s.length && /[a-zA-Z0-9]/.test(s[i])) {
        ident += s[i++];
      }
      tokens.push({ type: 'ident', value: ident.toLowerCase() });
      continue;
    }
    if (ch === '(') {
      tokens.push({ type: 'lparen' });
      i++;
      continue;
    }
    if (ch === ')') {
      tokens.push({ type: 'rparen' });
      i++;
      continue;
    }
    if ('+-*/^!%'.includes(ch)) {
      tokens.push({ type: 'op', value: ch });
      i++;
      continue;
    }
    throw new Error(`Unexpected token: ${ch}`);
  }
  return tokens;
}

function evaluateExpression(expr: string, mode: AngleMode): number {
  const tokens = tokenize(expr);
  if (tokens.length === 0) throw new Error('Empty');
  let pos = 0;

  const peek = () => tokens[pos];
  const consume = () => tokens[pos++];

  const toRad = (v: number) => (mode === 'DEG' ? (v * Math.PI) / 180 : v);
  const fromRad = (v: number) => (mode === 'DEG' ? (v * 180) / Math.PI : v);

  const parseExpr = (): number => {
    let left = parseTerm();
    while (peek()?.type === 'op' && (peek() as { type: 'op'; value: string }).value.match(/^[+-]$/)) {
      const op = (consume() as { type: 'op'; value: string }).value;
      const right = parseTerm();
      left = op === '+' ? left + right : left - right;
    }
    return left;
  };

  const parseTerm = (): number => {
    let left = parsePower();
    while (
      peek()?.type === 'op' &&
      ((peek() as { type: 'op'; value: string }).value === '*' ||
        (peek() as { type: 'op'; value: string }).value === '/')
    ) {
      const op = (consume() as { type: 'op'; value: string }).value;
      const right = parsePower();
      if (op === '/') {
        if (right === 0) throw new Error('Division by zero');
        left = left / right;
      } else {
        left = left * right;
      }
    }
    return left;
  };

  const parsePower = (): number => {
    const base = parseUnary();
    if (peek()?.type === 'op' && (peek() as { type: 'op'; value: string }).value === '^') {
      consume();
      const exp = parsePower(); // right-associative
      return Math.pow(base, exp);
    }
    return base;
  };

  const parseUnary = (): number => {
    if (peek()?.type === 'op') {
      const op = (peek() as { type: 'op'; value: string }).value;
      if (op === '+' || op === '-') {
        consume();
        const val = parseUnary();
        return op === '-' ? -val : val;
      }
    }
    return parsePostfix();
  };

  const parsePostfix = (): number => {
    let val = parsePrimary();
    while (peek()?.type === 'op') {
      const op = (peek() as { type: 'op'; value: string }).value;
      if (op === '!') {
        consume();
        val = factorial(val);
      } else if (op === '%') {
        consume();
        val = val / 100;
      } else {
        break;
      }
    }
    return val;
  };

  const parsePrimary = (): number => {
    const tok = peek();
    if (!tok) throw new Error('Unexpected end');

    if (tok.type === 'num') {
      consume();
      return tok.value;
    }

    if (tok.type === 'lparen') {
      consume();
      const val = parseExpr();
      if (peek()?.type !== 'rparen') throw new Error('Missing )');
      consume();
      return val;
    }

    if (tok.type === 'ident') {
      consume();
      if (tok.value === 'pi') return Math.PI;
      if (tok.value === 'e') return Math.E;

      if (peek()?.type !== 'lparen') throw new Error(`Expected ( after ${tok.value}`);
      consume();
      const arg = parseExpr();
      if (peek()?.type !== 'rparen') throw new Error('Missing )');
      consume();

      switch (tok.value) {
        case 'sin':
          return Math.sin(toRad(arg));
        case 'cos':
          return Math.cos(toRad(arg));
        case 'tan':
          return Math.tan(toRad(arg));
        case 'asin':
          return fromRad(Math.asin(arg));
        case 'acos':
          return fromRad(Math.acos(arg));
        case 'atan':
          return fromRad(Math.atan(arg));
        case 'log':
          if (arg <= 0) throw new Error('Domain error');
          return Math.log10(arg);
        case 'ln':
          if (arg <= 0) throw new Error('Domain error');
          return Math.log(arg);
        case 'sqrt':
          if (arg < 0) throw new Error('Domain error');
          return Math.sqrt(arg);
        case 'abs':
          return Math.abs(arg);
        default:
          throw new Error(`Unknown function: ${tok.value}`);
      }
    }

    throw new Error('Syntax error');
  };

  const result = parseExpr();
  if (pos < tokens.length) throw new Error('Syntax error');
  if (!Number.isFinite(result)) throw new Error('Math error');
  // Clean floating point noise like sin(30°) = 0.49999999999999994
  return Math.abs(result) < 1e-12 ? 0 : Number(result.toPrecision(12));
}

export function ScientificCalculator() {
  const [expr, setExpr] = useState('sin(30) + log(100) * 2^3');
  const [angleMode, setAngleMode] = useState<AngleMode>('DEG');
  const [displayResult, setDisplayResult] = useState('16.5');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>([
    { expr: 'sin(30) + log(100) * 2^3', result: '16.5', mode: 'DEG' },
  ]);

  const appendText = (chunk: string) => {
    setErrorMsg(null);
    setExpr((prev) => (prev === '0' && /^[0-9]$/.test(chunk) ? chunk : prev + chunk));
  };

  const evaluateNow = () => {
    if (!expr.trim()) return;
    try {
      const value = evaluateExpression(expr, angleMode);
      const formatted = String(value);
      setDisplayResult(formatted);
      setErrorMsg(null);
      setHistory((prev) => [{ expr, result: formatted, mode: angleMode }, ...prev.slice(0, 11)]);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Syntax error');
    }
  };

  const handleClear = () => {
    setExpr('');
    setDisplayResult('0');
    setErrorMsg(null);
  };

  const handleBackspace = () => {
    setErrorMsg(null);
    setExpr((prev) => prev.slice(0, -1));
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement &&
        ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName) &&
        document.activeElement.id !== 'sci-expr-input'
      ) {
        return;
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        evaluateNow();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        handleClear();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  const sciButtons: { label: string; insert: string; title?: string }[] = [
    { label: 'sin', insert: 'sin(' },
    { label: 'cos', insert: 'cos(' },
    { label: 'tan', insert: 'tan(' },
    { label: 'log', insert: 'log(' },
    { label: 'ln', insert: 'ln(' },
    { label: 'asin', insert: 'asin(' },
    { label: 'acos', insert: 'acos(' },
    { label: 'atan', insert: 'atan(' },
    { label: '√', insert: 'sqrt(' },
    { label: 'x²', insert: '^2' },
    { label: 'xʸ', insert: '^' },
    { label: 'n!', insert: '!' },
    { label: '(', insert: '(' },
    { label: ')', insert: ')' },
    { label: 'π', insert: 'π' },
  ];

  const mainButtons: { label: string; action: () => void; variant?: 'accent' | 'op' | 'danger' }[] = [
    { label: 'AC', action: handleClear, variant: 'danger' },
    { label: 'e', action: () => appendText('e'), variant: 'op' },
    { label: '%', action: () => appendText('%'), variant: 'op' },
    { label: '÷', action: () => appendText('/'), variant: 'op' },
    { label: '7', action: () => appendText('7') },
    { label: '8', action: () => appendText('8') },
    { label: '9', action: () => appendText('9') },
    { label: '×', action: () => appendText('*'), variant: 'op' },
    { label: '4', action: () => appendText('4') },
    { label: '5', action: () => appendText('5') },
    { label: '6', action: () => appendText('6') },
    { label: '−', action: () => appendText('-'), variant: 'op' },
    { label: '1', action: () => appendText('1') },
    { label: '2', action: () => appendText('2') },
    { label: '3', action: () => appendText('3') },
    { label: '+', action: () => appendText('+'), variant: 'op' },
    { label: '0', action: () => appendText('0') },
    { label: '.', action: () => appendText('.') },
    { label: 'ANS', action: () => appendText(displayResult), variant: 'op' },
    { label: '=', action: evaluateNow, variant: 'accent' },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-stretch">
      {/* Main Scientific Keypad */}
      <div className="rounded-xl border border-[#1E2D36] bg-[#10171D] p-5 sm:p-6 lg:col-span-8">
        {/* Top Controls + Readout */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="inline-flex rounded-lg border border-[#1E2D36] bg-[#070B0E] p-1">
            {(['DEG', 'RAD'] as AngleMode[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setAngleMode(m)}
                className={`rounded-md px-3.5 py-1 text-xs font-mono font-semibold transition-colors ${
                  angleMode === m
                    ? 'bg-[#39FF14] text-[#070B0E]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleBackspace}
              aria-label="Delete last character"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#1E2D36] bg-[#070B0E] px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-slate-500 hover:text-white"
            >
              <Delete className="h-3.5 w-3.5" />
              <span>DEL</span>
            </button>
            <CopyResultButton value={errorMsg ? '' : displayResult} label="Copy" />
          </div>
        </div>

        {/* Expression + Result Screen */}
        <div className="rounded-xl border border-[#1E2D36] bg-[#070B0E] p-4">
          <input
            id="sci-expr-input"
            type="text"
            aria-label="Mathematical expression"
            value={expr}
            onChange={(e) => {
              setErrorMsg(null);
              setExpr(e.target.value);
            }}
            placeholder="Type expression e.g. sin(30) + sqrt(144)"
            className="w-full bg-transparent text-right font-mono text-sm sm:text-base text-slate-300 placeholder:text-slate-600 focus:outline-none tabular-nums"
          />
          <div
            aria-live="polite"
            className={`mt-2 text-right font-mono text-3xl sm:text-4xl font-bold tracking-tight tabular-nums break-all ${
              errorMsg ? 'text-rose-400 text-xl sm:text-2xl' : 'text-[#39FF14]'
            }`}
          >
            {errorMsg || displayResult}
          </div>
        </div>

        {/* Scientific Function Row */}
        <div className="mt-4 grid grid-cols-5 gap-2">
          {sciButtons.map((btn) => (
            <button
              key={btn.label}
              type="button"
              onClick={() => appendText(btn.insert)}
              className="h-10 rounded-lg border border-[#1E2D36] bg-[#070B0E] font-mono text-xs sm:text-sm font-medium text-slate-200 transition-colors hover:border-[#39FF14]/60 hover:text-[#39FF14] focus-visible:outline-2 focus-visible:outline-[#39FF14]"
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Main Numeric & Operator Grid */}
        <div className="mt-3 grid grid-cols-4 gap-2">
          {mainButtons.map((btn) => {
            const cls =
              btn.variant === 'accent'
                ? 'bg-[#39FF14] text-[#070B0E] font-bold hover:bg-[#39FF14]/90 border-[#39FF14]'
                : btn.variant === 'op'
                ? 'bg-[#141D25] text-[#39FF14] border-[#1E2D36] hover:border-[#39FF14]/50'
                : btn.variant === 'danger'
                ? 'bg-[#141D25] text-rose-400 border-[#1E2D36] hover:border-rose-400/50'
                : 'bg-[#070B0E] text-white border-[#1E2D36] hover:border-slate-500';
            return (
              <button
                key={btn.label}
                type="button"
                onClick={btn.action}
                className={`h-12 rounded-lg border font-mono text-base font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-[#39FF14] ${cls}`}
              >
                {btn.label}
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
            <h2 className="font-display text-base font-bold text-white">Calculation History</h2>
          </div>
          {history.length > 0 && (
            <button
              type="button"
              onClick={() => setHistory([])}
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              Clear
            </button>
          )}
        </div>

        <div className="mt-4 flex-1 space-y-2.5 overflow-y-auto max-h-[380px]">
          {history.length === 0 ? (
            <p className="text-sm text-slate-400">
              Evaluated expressions will appear here. Click any entry to reload it.
            </p>
          ) : (
            history.map((item, idx) => (
              <button
                key={`${item.expr}-${idx}`}
                type="button"
                onClick={() => {
                  setExpr(item.expr);
                  setDisplayResult(item.result);
                  setAngleMode(item.mode);
                  setErrorMsg(null);
                }}
                className="w-full rounded-lg border border-[#1E2D36] bg-[#070B0E] p-3 text-left transition-colors hover:border-[#39FF14]/50"
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{item.mode}</span>
                  <span>Load</span>
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
