export type AngleUnit = 'DEG' | 'RAD' | 'GRAD';

type Token =
  | { type: 'num'; value: number }
  | { type: 'op'; value: string }
  | { type: 'ident'; value: string }
  | { type: 'lparen' }
  | { type: 'rparen' }
  | { type: 'comma' };

export function factorial(n: number): number {
  if (!Number.isInteger(n) || n < 0) throw new Error('Domain error');
  if (n > 170) throw new Error('Math overflow');
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

export function nPr(n: number, r: number): number {
  if (!Number.isInteger(n) || !Number.isInteger(r) || n < 0 || r < 0 || r > n) {
    throw new Error('Domain error');
  }
  let res = 1;
  for (let i = 0; i < r; i++) res *= n - i;
  return res;
}

export function nCr(n: number, r: number): number {
  if (!Number.isInteger(n) || !Number.isInteger(r) || n < 0 || r < 0 || r > n) {
    throw new Error('Domain error');
  }
  const k = Math.min(r, n - r);
  let res = 1;
  for (let i = 1; i <= k; i++) {
    res = (res * (n - k + i)) / i;
  }
  return Math.round(res);
}

function tokenize(raw: string): Token[] {
  const s = raw
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/−/g, '-')
    .replace(/π/g, 'pi')
    .replace(/√/g, 'sqrt')
    .replace(/∛/g, 'cbrt');

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
      while (i < s.length && /[0-9.]/.test(s[i])) numStr += s[i++];
      if ((numStr.match(/\./g) || []).length > 1) throw new Error('Syntax error');
      const num = parseFloat(numStr);
      if (!Number.isFinite(num)) throw new Error('Syntax error');
      tokens.push({ type: 'num', value: num });
      continue;
    }
    if (/[a-zA-Z_]/.test(ch)) {
      let ident = '';
      while (i < s.length && /[a-zA-Z0-9_]/.test(s[i])) ident += s[i++];
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
    if (ch === ',') {
      tokens.push({ type: 'comma' });
      i++;
      continue;
    }
    if ('+-*/^!%'.includes(ch)) {
      tokens.push({ type: 'op', value: ch });
      i++;
      continue;
    }
    throw new Error('Syntax error');
  }
  return tokens;
}

export function evaluateMathExpression(
  expr: string,
  angleUnit: AngleUnit = 'DEG',
  ansValue = 0
): number {
  const tokens = tokenize(expr);
  if (tokens.length === 0) throw new Error('Empty');
  let pos = 0;

  const peek = () => tokens[pos];
  const consume = () => tokens[pos++];

  const toRad = (v: number) => {
    if (angleUnit === 'DEG') return (v * Math.PI) / 180;
    if (angleUnit === 'GRAD') return (v * Math.PI) / 200;
    return v;
  };

  const fromRad = (v: number) => {
    if (angleUnit === 'DEG') return (v * 180) / Math.PI;
    if (angleUnit === 'GRAD') return (v * 200) / Math.PI;
    return v;
  };

  const parseExpr = (): number => {
    let left = parseTerm();
    while (peek()?.type === 'op' && ((peek() as { type: 'op'; value: string }).value === '+' || (peek() as { type: 'op'; value: string }).value === '-')) {
      const op = (consume() as { type: 'op'; value: string }).value;
      const right = parseTerm();
      left = op === '+' ? left + right : left - right;
    }
    return left;
  };

  const parseTerm = (): number => {
    let left = parseCombinatoric();
    while (
      peek()?.type === 'op' &&
      ((peek() as { type: 'op'; value: string }).value === '*' ||
        (peek() as { type: 'op'; value: string }).value === '/')
    ) {
      const op = (consume() as { type: 'op'; value: string }).value;
      const right = parseCombinatoric();
      if (op === '/') {
        if (right === 0) throw new Error('Division by zero');
        left = left / right;
      } else {
        left = left * right;
      }
    }
    return left;
  };

  const parseCombinatoric = (): number => {
    let left = parsePower();
    while (
      peek()?.type === 'ident' &&
      ((peek() as { type: 'ident'; value: string }).value === 'npr' ||
        (peek() as { type: 'ident'; value: string }).value === 'ncr' ||
        (peek() as { type: 'ident'; value: string }).value === 'p' ||
        (peek() as { type: 'ident'; value: string }).value === 'c')
    ) {
      const fn = (consume() as { type: 'ident'; value: string }).value;
      const right = parsePower();
      left = fn === 'npr' || fn === 'p' ? nPr(left, right) : nCr(left, right);
    }
    return left;
  };

  const parsePower = (): number => {
    const base = parseUnary();
    if (peek()?.type === 'op' && (peek() as { type: 'op'; value: string }).value === '^') {
      consume();
      const exp = parsePower();
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
    if (!tok) throw new Error('Syntax error');

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
      if (tok.value === 'ans') return ansValue;

      if (peek()?.type !== 'lparen') throw new Error(`Expected (`);
      consume();
      const args: number[] = [parseExpr()];
      while (peek()?.type === 'comma') {
        consume();
        args.push(parseExpr());
      }
      if (peek()?.type !== 'rparen') throw new Error('Missing )');
      consume();

      const a = args[0];
      const b = args[1];

      switch (tok.value) {
        case 'sin':
          return Math.sin(toRad(a));
        case 'cos':
          return Math.cos(toRad(a));
        case 'tan':
          return Math.tan(toRad(a));
        case 'asin':
          if (a < -1 || a > 1) throw new Error('Domain error');
          return fromRad(Math.asin(a));
        case 'acos':
          if (a < -1 || a > 1) throw new Error('Domain error');
          return fromRad(Math.acos(a));
        case 'atan':
          return fromRad(Math.atan(a));
        case 'sinh':
          return Math.sinh(a);
        case 'cosh':
          return Math.cosh(a);
        case 'tanh':
          return Math.tanh(a);
        case 'log':
          if (args.length === 2) {
            if (a <= 0 || a === 1 || b <= 0) throw new Error('Domain error');
            return Math.log(b) / Math.log(a);
          }
          if (a <= 0) throw new Error('Domain error');
          return Math.log10(a);
        case 'logbase':
          if (args.length < 2 || a <= 0 || a === 1 || b <= 0) throw new Error('Domain error');
          return Math.log(b) / Math.log(a);
        case 'ln':
          if (a <= 0) throw new Error('Domain error');
          return Math.log(a);
        case 'sqrt':
          if (a < 0) throw new Error('Domain error');
          return Math.sqrt(a);
        case 'cbrt':
          return Math.cbrt(a);
        case 'abs':
          return Math.abs(a);
        case 'npr':
          if (args.length < 2) throw new Error('Need 2 args');
          return nPr(a, b);
        case 'ncr':
          if (args.length < 2) throw new Error('Need 2 args');
          return nCr(a, b);
        default:
          throw new Error(`Unknown function`);
      }
    }

    throw new Error('Syntax error');
  };

  const result = parseExpr();
  if (pos < tokens.length) throw new Error('Syntax error');
  if (!Number.isFinite(result)) throw new Error('Math error');
  return Math.abs(result) < 1e-12 ? 0 : Number(result.toPrecision(12));
}

export function formatMixedFraction(value: number): string | null {
  if (!Number.isFinite(value) || Math.abs(value) > 1e6) return null;
  if (Number.isInteger(value)) return String(value);
  const sign = value < 0 ? '-' : '';
  const absVal = Math.abs(value);
  const whole = Math.floor(absVal);
  const frac = absVal - whole;

  let bestNum = 1;
  let bestDen = 1;
  let bestErr = Math.abs(frac - 1);

  for (let den = 1; den <= 1000; den++) {
    const num = Math.round(frac * den);
    const err = Math.abs(frac - num / den);
    if (err < bestErr) {
      bestErr = err;
      bestNum = num;
      bestDen = den;
      if (err < 1e-9) break;
    }
  }

  if (bestErr > 1e-5 || bestNum === 0) return null;
  if (bestNum === bestDen) return `${sign}${whole + 1}`;
  if (whole === 0) return `${sign}${bestNum}/${bestDen}`;
  return `${sign}${whole} ⌟ ${bestNum}/${bestDen}`;
}

export function formatSharp12Digit(value: number): string {
  if (!Number.isFinite(value)) return 'Error';
  if (Math.abs(value) >= 1e12 || (value !== 0 && Math.abs(value) < 1e-9)) {
    return value.toExponential(6);
  }
  const rounded = Number(value.toPrecision(12));
  const [intPart, decPart] = String(rounded).split('.');
  const formattedInt = Number(intPart).toLocaleString('en-US');
  return decPart !== undefined ? `${formattedInt}.${decPart}` : formattedInt;
}
