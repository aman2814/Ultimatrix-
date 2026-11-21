import React from 'react';
import { CopyResultButton } from './CopyResultButton';

export interface ResultMetric {
  label: string;
  value: string;
  highlight?: boolean;
}

interface CalculatorResultCardProps {
  eyebrow: string;
  primaryValue: string;
  primaryUnit?: string;
  statusLabel?: string;
  statusTone?: 'green' | 'amber' | 'rose' | 'neutral';
  copyText: string;
  metrics?: ResultMetric[];
  footerNote?: string;
  visualBar?: React.ReactNode;
}

const TONE_CLASSES: Record<NonNullable<CalculatorResultCardProps['statusTone']>, string> = {
  green: 'text-[#39FF14]',
  amber: 'text-amber-400',
  rose: 'text-rose-400',
  neutral: 'text-slate-300',
};

export function CalculatorResultCard({
  eyebrow,
  primaryValue,
  primaryUnit,
  statusLabel,
  statusTone = 'green',
  copyText,
  metrics = [],
  footerNote,
  visualBar,
}: CalculatorResultCardProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-xl border border-[#1E2D36] bg-[#10171D] p-6">
      <div>
        <div className="flex items-start justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            {eyebrow}
          </span>
          <CopyResultButton value={copyText} />
        </div>

        <div className="mt-4 flex flex-wrap items-baseline gap-2">
          <div className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-white tabular-nums">
            {primaryValue}
          </div>
          {primaryUnit && (
            <span className="font-mono text-sm font-medium text-slate-400">{primaryUnit}</span>
          )}
        </div>

        {statusLabel && (
          <p className={`mt-2 text-sm font-semibold ${TONE_CLASSES[statusTone]}`}>
            {statusLabel}
          </p>
        )}

        {visualBar && <div className="mt-5">{visualBar}</div>}

        {metrics.length > 0 && (
          <div className="mt-6 divide-y divide-[#1E2D36] border-t border-[#1E2D36]">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex items-center justify-between gap-4 py-3 text-sm"
              >
                <span className="text-slate-400">{metric.label}</span>
                <span
                  className={`font-mono font-semibold tabular-nums text-right ${
                    metric.highlight ? 'text-[#39FF14]' : 'text-slate-100'
                  }`}
                >
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {footerNote && (
        <p className="mt-5 border-t border-[#1E2D36] pt-4 text-xs leading-relaxed text-slate-400">
          {footerNote}
        </p>
      )}
    </div>
  );
}
