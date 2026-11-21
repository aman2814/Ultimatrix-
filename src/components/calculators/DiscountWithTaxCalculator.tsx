import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { CalculatorResultCard } from '../ui/CalculatorResultCard';

export function DiscountWithTaxCalculator() {
  const [price, setPrice] = useState('150');
  const [discount1, setDiscount1] = useState('20');
  const [discount2, setDiscount2] = useState('10');
  const [taxRate, setTaxRate] = useState('8.25');
  const [taxMode, setTaxMode] = useState<'after' | 'before'>('after');

  const handleReset = () => {
    setPrice('150');
    setDiscount1('20');
    setDiscount2('10');
    setTaxRate('8.25');
    setTaxMode('after');
  };

  const p = parseFloat(price);
  const d1 = Math.min(100, Math.max(0, parseFloat(discount1) || 0));
  const d2 = Math.min(100, Math.max(0, parseFloat(discount2) || 0));
  const tax = Math.max(0, parseFloat(taxRate) || 0);

  const isValid = Number.isFinite(p) && p > 0;

  const afterD1 = isValid ? p * (1 - d1 / 100) : 0;
  const subtotalAfterDiscount = isValid ? afterD1 * (1 - d2 / 100) : 0;
  const totalDiscountSaved = isValid ? p - subtotalAfterDiscount : 0;
  const effectiveDiscountPct = isValid ? (totalDiscountSaved / p) * 100 : 0;

  const taxAmount = isValid
    ? taxMode === 'after'
      ? subtotalAfterDiscount * (tax / 100)
      : p * (tax / 100)
    : 0;

  const finalPayable = isValid ? subtotalAfterDiscount + taxAmount : 0;
  const fullPriceWithTax = isValid ? p * (1 + tax / 100) : 0;

  const payPct =
    isValid && fullPriceWithTax > 0
      ? Math.min(100, Math.max(0, (finalPayable / fullPriceWithTax) * 100))
      : 100;
  const savedPctBar = 100 - payPct;

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-stretch">
      <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xs lg:col-span-7 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex max-w-full flex-wrap rounded-lg border border-slate-200 bg-slate-100/80 p-1">
              <button
                type="button"
                onClick={() => setTaxMode('after')}
                className={`min-h-[44px] md:min-h-0 rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  taxMode === 'after'
                    ? 'bg-[#16a34a] text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Tax After Discount
              </button>
              <button
                type="button"
                onClick={() => setTaxMode('before')}
                className={`min-h-[44px] md:min-h-0 rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  taxMode === 'before'
                    ? 'bg-[#16a34a] text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Tax Before Discount
              </button>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex min-h-[44px] md:min-h-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-slate-300 hover:text-slate-900 transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset</span>
            </button>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="dtax-price" className="block text-sm font-medium text-slate-700">
                Original Price
              </label>
              <input
                id="dtax-price"
                type="number" inputMode="decimal"
                min="0"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="dtax-d1" className="block text-sm font-medium text-slate-700">
                First Discount (%)
              </label>
              <input
                id="dtax-d1"
                type="number" inputMode="decimal"
                min="0"
                max="100"
                step="0.5"
                value={discount1}
                onChange={(e) => setDiscount1(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="dtax-d2" className="block text-sm font-medium text-slate-700">
                Stacked Extra Discount (%)
              </label>
              <input
                id="dtax-d2"
                type="number" inputMode="decimal"
                min="0"
                max="100"
                step="0.5"
                value={discount2}
                onChange={(e) => setDiscount2(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="dtax-rate" className="block text-sm font-medium text-slate-700">
                Sales Tax / GST (%)
              </label>
              <input
                id="dtax-rate"
                type="number" inputMode="decimal"
                min="0"
                max="100"
                step="0.25"
                value={taxRate}
                onChange={(e) => setTaxRate(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
              />
            </div>
          </div>
        </div>

        <p className="mt-6 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-500">
          {taxMode === 'after'
            ? 'Standard Retail Rule: Sales tax / GST is assessed on the discounted subtotal.'
            : 'Pre-Discount Tax Rule: Sales tax / GST is calculated on the original tag price (used in select coupon/rebate jurisdictions).'}
        </p>
      </div>

      <div className="lg:col-span-5">
        <CalculatorResultCard
          eyebrow="Final Payable Price"
          primaryValue={isValid ? finalPayable.toFixed(2) : '—'}
          statusLabel={
            isValid
              ? `Saved ${totalDiscountSaved.toFixed(2)} (${effectiveDiscountPct.toFixed(1)}% effective markdown)`
              : 'Enter valid original price'
          }
          statusTone={isValid ? 'green' : 'amber'}
          copyText={
            isValid
              ? `Final Payable: ${finalPayable.toFixed(2)} | Subtotal: ${subtotalAfterDiscount.toFixed(2)} | Tax: ${taxAmount.toFixed(2)} | Saved: ${totalDiscountSaved.toFixed(2)}`
              : ''
          }
          visualBar={
            isValid ? (
              <div>
                <div className="flex justify-between text-xs text-slate-600 mb-1.5">
                  <span>Final Bill vs Full Taxed Price</span>
                  <span className="font-mono font-semibold text-[#15803d] tabular-nums">
                    {effectiveDiscountPct.toFixed(1)}% off
                  </span>
                </div>
                <div className="flex h-2.5 w-full overflow-hidden rounded-full border border-slate-200 bg-slate-100">
                  <div className="h-full bg-slate-400" style={{ width: `${payPct}%` }} />
                  <div className="h-full bg-[#16a34a]" style={{ width: `${savedPctBar}%` }} />
                </div>
              </div>
            ) : null
          }
          metrics={[
            { label: 'Original Price', value: isValid ? p.toFixed(2) : '—' },
            { label: 'Total Discount Saved', value: isValid ? totalDiscountSaved.toFixed(2) : '—', highlight: true },
            { label: 'Subtotal After Discount', value: isValid ? subtotalAfterDiscount.toFixed(2) : '—' },
            { label: `Tax Amount (${tax}%)`, value: isValid ? taxAmount.toFixed(2) : '—' },
          ]}
        />
      </div>
    </div>
  );
}
