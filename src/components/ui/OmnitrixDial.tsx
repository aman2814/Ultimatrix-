import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CalculatorCategory, CALCULATOR_CATEGORIES } from '../../data/calculators';
import { useTranslations } from '../../i18n/utils';
import { useRoute } from './Router';

export type DialCategory = 'All' | CalculatorCategory;

export const DIAL_OPTIONS: { value: DialCategory; label: string; shortLabel: string }[] = [
  { value: 'All', label: 'All Calculators', shortLabel: 'All' },
  ...CALCULATOR_CATEGORIES.map((cat) => ({
    value: cat as DialCategory,
    label: cat,
    shortLabel: cat === 'Math & Grades' ? 'Math' : cat === 'Date & Time' ? 'Dates' : cat,
  })),
];

interface OmnitrixDialProps {
  selected: DialCategory;
  onSelect: (category: DialCategory) => void;
  counts: Record<DialCategory, number>;
}

export function OmnitrixDial({ selected, onSelect, counts }: OmnitrixDialProps) {
  const { lang } = useRoute();
  const t = useTranslations(lang);
  const getOptionLabel = (val: DialCategory) =>
    val === 'All' ? t('cat.all') : t(`cat.${val}`);
  const activeIndex = Math.max(
    0,
    DIAL_OPTIONS.findIndex((opt) => opt.value === selected)
  );
  const rotationDeg = activeIndex * 60;

  const rotateBy = (delta: number) => {
    const nextIdx = (activeIndex + delta + DIAL_OPTIONS.length) % DIAL_OPTIONS.length;
    onSelect(DIAL_OPTIONS[nextIdx].value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      rotateBy(1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      rotateBy(-1);
    }
  };

  return (
    <div
      className="flex flex-col items-center gap-6"
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="Category selector dial"
    >
      {/* Dial & Orbit Controls */}
      <div className="relative flex items-center justify-center gap-4 sm:gap-8">
        <button
          type="button"
          onClick={() => rotateBy(-1)}
          aria-label="Rotate dial left to previous category"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#1E2D36] bg-[#10171D] text-slate-300 transition-colors duration-150 hover:border-[#39FF14]/60 hover:text-[#39FF14] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39FF14]"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Precision Omnitrix Core Dial */}
        <div className="group relative h-56 w-56 sm:h-64 sm:w-64 select-none">
          <svg
            viewBox="0 0 260 260"
            className="h-full w-full overflow-visible"
            aria-hidden="true"
          >
            {/* Outer chassis ring */}
            <circle
              cx="130"
              cy="130"
              r="122"
              fill="#10171D"
              stroke="#1E2D36"
              strokeWidth="2"
            />
            <circle
              cx="130"
              cy="130"
              r="106"
              fill="#070B0E"
              stroke="#1E2D36"
              strokeWidth="1.5"
            />

            {/* 6 calibrated tick segments around perimeter */}
            {DIAL_OPTIONS.map((opt, idx) => {
              const angleRad = ((idx * 60 - 90) * Math.PI) / 180;
              const x1 = 130 + Math.cos(angleRad) * 108;
              const y1 = 130 + Math.sin(angleRad) * 108;
              const x2 = 130 + Math.cos(angleRad) * 120;
              const y2 = 130 + Math.sin(angleRad) * 120;
              const isSelected = idx === activeIndex;
              return (
                <line
                  key={opt.value}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={isSelected ? '#39FF14' : '#334155'}
                  strokeWidth={isSelected ? '3.5' : '2'}
                  strokeLinecap="round"
                />
              );
            })}

            {/* Rotating Dial Bezel Lugs & Inner Ring */}
            <g
              style={{
                transform: `rotate(${rotationDeg}deg)`,
                transformOrigin: '130px 130px',
                transition: 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {[0, 90, 180, 270].map((deg) => (
                <g key={deg} transform={`rotate(${deg} 130 130)`}>
                  <rect
                    x="124"
                    y="22"
                    width="12"
                    height="14"
                    rx="2"
                    fill={deg === 0 ? '#39FF14' : '#1E2D36'}
                  />
                </g>
              ))}

              <circle
                cx="130"
                cy="130"
                r="86"
                fill="#070B0E"
                stroke="#1E2D36"
                strokeWidth="2"
              />
            </g>
          </svg>

          {/* Subtle Radial Green Ambient Glow Behind Center Emblem */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-[18%] rounded-full bg-[#39FF14]/15 blur-xl transition-opacity duration-200 ${
              selected !== 'All'
                ? 'opacity-90 group-hover:opacity-100'
                : 'opacity-55 group-hover:opacity-90'
            }`}
          />

          {/* Circular Center Emblem Frame */}
          <div
            style={{
              transform: `rotate(${rotationDeg}deg)`,
              transition:
                'transform 200ms cubic-bezier(0.16, 1, 0.3, 1), filter 200ms ease, box-shadow 200ms ease',
            }}
            className={`pointer-events-none absolute inset-[19.5%] overflow-hidden rounded-full bg-[#070B0E] ring-1 transition-all duration-200 ${
              selected !== 'All'
                ? 'ring-[#39FF14]/55 drop-shadow-[0_0_18px_rgba(57,255,20,0.45)] group-hover:drop-shadow-[0_0_24px_rgba(57,255,20,0.6)]'
                : 'ring-[#39FF14]/35 drop-shadow-[0_0_12px_rgba(57,255,20,0.28)] group-hover:ring-[#39FF14]/60 group-hover:drop-shadow-[0_0_22px_rgba(57,255,20,0.5)]'
            }`}
          >
            <img
              src="/images/ultimatrix-core-logo.jpg"
              alt="Ultimatrix Calculator Core Emblem"
              draggable={false}
              className="h-full w-full scale-[1.35] object-cover object-center mix-blend-lighten"
            />
            {/* Soft perimeter feather so outer rim blends cleanly into #070B0E */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, transparent 62%, rgba(7, 11, 14, 0.55) 86%, #070B0E 100%)',
              }}
            />
          </div>

          {/* Interactive Dial Cycle Hit Area */}
          <button
            type="button"
            onClick={() => rotateBy(1)}
            aria-label={`Active category: ${getOptionLabel(DIAL_OPTIONS[activeIndex].value)}`}
            className="absolute inset-8 z-10 rounded-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#39FF14]"
          />
        </div>

        <button
          type="button"
          onClick={() => rotateBy(1)}
          aria-label="Rotate dial right to next category"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#1E2D36] bg-[#10171D] text-slate-300 transition-colors duration-150 hover:border-[#39FF14]/60 hover:text-[#39FF14] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39FF14]"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Category Segmented Selector Buttons */}
      <div
        className="flex flex-wrap items-center justify-center gap-2 rounded-xl border border-[#1E2D36] bg-[#10171D] p-1.5"
        role="tablist"
        aria-label="Calculator categories"
      >
        {DIAL_OPTIONS.map((opt) => {
          const isActive = opt.value === selected;
          return (
            <button
              key={opt.value}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelect(opt.value)}
              className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs sm:text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39FF14] ${
                isActive
                  ? 'bg-[#39FF14] text-[#070B0E] font-semibold'
                  : 'text-slate-300 hover:bg-[#1E2D36]/60 hover:text-white'
              }`}
            >
              <span>{getOptionLabel(opt.value)}</span>
              <span
                className={`font-mono text-xs tabular-nums ${
                  isActive ? 'text-[#070B0E]/80' : 'text-slate-400'
                }`}
              >
                {counts[opt.value]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
