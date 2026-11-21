// CDC 2000 BMI-for-Age (2 to 19 years) reference L, M, S parameters at exact whole years (24 to 228 months)
// L = Box-Cox power, M = median BMI (50th percentile), S = generalized coefficient of variation
interface LmsPoint {
  months: number;
  L: number;
  M: number;
  S: number;
}

const BOYS_LMS: LmsPoint[] = [
  { months: 24, L: -2.011, M: 16.575, S: 0.0806 },
  { months: 36, L: -1.787, M: 15.968, S: 0.0802 },
  { months: 48, L: -1.737, M: 15.588, S: 0.0819 },
  { months: 60, L: -1.897, M: 15.394, S: 0.0856 },
  { months: 72, L: -2.142, M: 15.391, S: 0.0919 },
  { months: 84, L: -2.309, M: 15.545, S: 0.1003 },
  { months: 96, L: -2.313, M: 15.839, S: 0.1095 },
  { months: 108, L: -2.196, M: 16.256, S: 0.1180 },
  { months: 120, L: -2.043, M: 16.774, S: 0.1251 },
  { months: 132, L: -1.919, M: 17.376, S: 0.1303 },
  { months: 144, L: -1.849, M: 18.046, S: 0.1337 },
  { months: 156, L: -1.833, M: 18.770, S: 0.1355 },
  { months: 168, L: -1.863, M: 19.532, S: 0.1361 },
  { months: 180, L: -1.925, M: 20.312, S: 0.1359 },
  { months: 192, L: -2.001, M: 21.083, S: 0.1354 },
  { months: 204, L: -2.067, M: 21.815, S: 0.1351 },
  { months: 216, L: -2.094, M: 22.479, S: 0.1353 },
  { months: 228, L: -2.054, M: 23.048, S: 0.1364 },
];

const GIRLS_LMS: LmsPoint[] = [
  { months: 24, L: -1.617, M: 16.416, S: 0.0827 },
  { months: 36, L: -1.531, M: 15.696, S: 0.0842 },
  { months: 48, L: -1.622, M: 15.320, S: 0.0885 },
  { months: 60, L: -1.825, M: 15.207, S: 0.0956 },
  { months: 72, L: -2.008, M: 15.291, S: 0.1046 },
  { months: 84, L: -2.095, M: 15.534, S: 0.1145 },
  { months: 96, L: -2.083, M: 15.908, S: 0.1243 },
  { months: 108, L: -2.009, M: 16.385, S: 0.1332 },
  { months: 120, L: -1.919, M: 16.939, S: 0.1407 },
  { months: 132, L: -1.842, M: 17.547, S: 0.1465 },
  { months: 144, L: -1.797, M: 18.187, S: 0.1506 },
  { months: 156, L: -1.790, M: 18.836, S: 0.1531 },
  { months: 168, L: -1.817, M: 19.470, S: 0.1544 },
  { months: 180, L: -1.868, M: 20.068, S: 0.1548 },
  { months: 192, L: -1.925, M: 20.610, S: 0.1548 },
  { months: 204, L: -1.964, M: 21.080, S: 0.1551 },
  { months: 216, L: -1.958, M: 21.464, S: 0.1563 },
  { months: 228, L: -1.884, M: 21.751, S: 0.1589 },
];

function interpolateLms(ageMonths: number, sex: 'boy' | 'girl'): LmsPoint {
  const table = sex === 'boy' ? BOYS_LMS : GIRLS_LMS;
  const clamped = Math.min(228, Math.max(24, ageMonths));
  for (let i = 0; i < table.length - 1; i++) {
    const a = table[i];
    const b = table[i + 1];
    if (clamped >= a.months && clamped <= b.months) {
      const t = (clamped - a.months) / (b.months - a.months);
      return {
        months: clamped,
        L: a.L + t * (b.L - a.L),
        M: a.M + t * (b.M - a.M),
        S: a.S + t * (b.S - a.S),
      };
    }
  }
  return table[table.length - 1];
}

// Standard normal CDF approximation (Abramowitz & Stegun)
function normalCdf(z: number): number {
  const sign = z < 0 ? -1 : 1;
  const x = Math.abs(z) / Math.SQRT2;
  const t = 1 / (1 + 0.3275911 * x);
  const erf =
    1 -
    (((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) *
      t) *
      Math.exp(-x * x);
  return 0.5 * (1 + sign * erf);
}

export function bmiFromZScore(z: number, L: number, M: number, S: number): number {
  return M * Math.pow(1 + L * S * z, 1 / L);
}

export interface PediatricBmiEvaluation {
  percentile: number;
  percentileLabel: string;
  category: string;
  tone: 'green' | 'amber' | 'rose';
  healthyBmiMin: number; // 5th percentile (z = -1.64485)
  healthyBmiMax: number; // 85th percentile (z = 1.03643)
  medianBmi: number;
}

export function formatOrdinal(n: number): string {
  const rounded = Math.round(n);
  const mod100 = rounded % 100;
  if (mod100 >= 11 && mod100 <= 13) return `${rounded}th`;
  switch (rounded % 10) {
    case 1:
      return `${rounded}st`;
    case 2:
      return `${rounded}nd`;
    case 3:
      return `${rounded}rd`;
    default:
      return `${rounded}th`;
  }
}

export function evaluatePediatricBmi(
  bmi: number,
  ageMonths: number,
  sex: 'boy' | 'girl'
): PediatricBmiEvaluation {
  const { L, M, S } = interpolateLms(ageMonths, sex);
  const z = (Math.pow(bmi / M, L) - 1) / (L * S);
  const pct = Math.min(99.9, Math.max(0.1, normalCdf(z) * 100));

  const healthyBmiMin = bmiFromZScore(-1.64485, L, M, S);
  const healthyBmiMax = bmiFromZScore(1.03643, L, M, S);

  let category = 'Healthy Weight (5th – 84th percentile)';
  let tone: 'green' | 'amber' | 'rose' = 'green';
  if (pct < 5) {
    category = 'Underweight (< 5th percentile)';
    tone = 'amber';
  } else if (pct < 85) {
    category = 'Healthy Weight (5th – 84th percentile)';
    tone = 'green';
  } else if (pct < 95) {
    category = 'Overweight (85th – 94th percentile)';
    tone = 'amber';
  } else {
    category = 'Obesity (≥ 95th percentile)';
    tone = 'rose';
  }

  return {
    percentile: pct,
    percentileLabel:
      pct < 1 ? '< 1st percentile' : pct > 99 ? '> 99th percentile' : `${formatOrdinal(pct)} percentile`,
    category,
    tone,
    healthyBmiMin,
    healthyBmiMax,
    medianBmi: M,
  };
}
