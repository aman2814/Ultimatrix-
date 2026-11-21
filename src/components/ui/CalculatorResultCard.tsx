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
  green: 'text-[#15803d]',
  amber: 'text-amber-700',
  rose: 'text-rose-700',
  neutral: 'text-slate-600',
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
    <div className="flex h-full min-w-0 flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/80 p-4 sm:p-6 shadow-xs">
      <div className="min-w-0">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <span className="min-w-0 text-xs font-semibold uppercase tracking-wider text-slate-500">
            {eyebrow}
          </span>
          <CopyResultButton value={copyText} />
        </div>

        <div className="mt-4 flex flex-wrap items-baseline gap-2">
          <div className="break-words font-mono text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 tabular-nums">
            {primaryValue}
          </div>
          {primaryUnit && (
            <span className="font-mono text-sm font-medium text-slate-600">{primaryUnit}</span>
          )}
        </div>

        {statusLabel && (
          <p className={`mt-2 text-sm font-semibold ${TONE_CLASSES[statusTone]}`}>
            {statusLabel}
          </p>
        )}

        {visualBar && <div className="mt-5">{visualBar}</div>}

        {metrics.length > 0 && (
          <div className="mt-6 divide-y divide-slate-200 border-t border-slate-200">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-3 text-sm"
              >
                <span className="min-w-0 text-slate-600">{metric.label}</span>
                <span
                  className={`min-w-0 break-words font-mono font-semibold tabular-nums text-right ${
                    metric.highlight ? 'text-[#15803d]' : 'text-slate-900'
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
        <p className="mt-5 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-600">
          {footerNote}
        </p>
      )}
    </div>
  );
}
