import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { CalculatorResultCard } from '../ui/CalculatorResultCard';

export function DiscountCalculator() {
  const [price, setPrice] = useState('200');
  const [discount1, setDiscount1] = useState('25');
  const [discount2, setDiscount2] = useState('10');
  const [taxRate, setTaxRate] = useState('8');

  const handleReset = () => {
    setPrice('200');
    setDiscount1('25');
    setDiscount2('10');
    setTaxRate('8');
  };

  const p = parseFloat(price);
  const d1 = Math.min(100, Math.max(0, parseFloat(discount1) || 0));
  const d2 = Math.min(100, Math.max(0, parseFloat(discount2) || 0));
  const tax = Math.max(0, parseFloat(taxRate) || 0);

  const isValid = Number.isFinite(p) && p > 0;

  const afterD1 = isValid ? p * (1 - d1 / 100) : 0;
  const afterD2 = isValid ? afterD1 * (1 - d2 / 100) : 0;
  const totalSaved = isValid ? p - afterD2 : 0;
  const effectivePct = isValid ? (totalSaved / p) * 100 : 0;
  const taxAmount = isValid ? afterD2 * (tax / 100) : 0;
  const finalPrice = isValid ? afterD2 + taxAmount : 0;

  const payRatio = isValid ? Math.max(0, Math.min(100, (afterD2 / p) * 100)) : 100;
  const savedRatio = isValid ? 100 - payRatio : 0;

  return (
    <div className="grid gap-6 lg:grid-cols-12 items-stretch">
      <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xs lg:col-span-7 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-base font-bold text-slate-900">Pricing & Discounts</h2>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex min-h-[44px] md:min-h-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-slate-300 hover:text-slate-900 transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset</span>
            </button>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="disc-price" className="block text-sm font-medium text-slate-700">
                Original Price
              </label>
              <input
                id="disc-price"
                type="number" inputMode="decimal"
                min="0"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50/70 px-4 py-2.5 font-mono text-base text-slate-900 tabular-nums focus:border-[#16a34a] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="disc-1" className="block text-sm font-medium text-slate-700">
                Primary Discount (%)
              </label>
              <input
                id="disc-1"
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
              <label htmlFor="disc-2" className="block text-sm font-medium text-slate-700">
                Extra Coupon Discount (%)
              </label>
              <input
                id="disc-2"
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
              <label htmlFor="disc-tax" className="block text-sm font-medium text-slate-700">
                Optional Tax / GST (%)
              </label>
              <input
                id="disc-tax"
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

        <p className="mt-6 border-t border-slate-200 pt-4 text-xs text-slate-500">
          Additional coupon discounts apply sequentially to the already discounted price, and tax is computed on the discounted subtotal.
        </p>
      </div>

      <div className="lg:col-span-5">
        <CalculatorResultCard
          eyebrow="Final Price"
          primaryValue={isValid ? finalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '—'}
          statusLabel={
            isValid
              ? `You save ${totalSaved.toFixed(2)} (${effectivePct.toFixed(1)}% effective off)`
              : 'Enter valid original price'
          }
          statusTone={isValid ? 'green' : 'amber'}
          copyText={
            isValid
              ? `Final Price: ${finalPrice.toFixed(2)} | Saved: ${totalSaved.toFixed(2)} (${effectivePct.toFixed(1)}% off)`
              : ''
          }
          visualBar={
            isValid ? (
              <div>
                <div className="flex justify-between text-xs text-slate-600 mb-1.5">
                  <span>Payable ({payRatio.toFixed(0)}%)</span>
                  <span className="font-medium text-[#15803d]">Saved ({savedRatio.toFixed(0)}%)</span>
                </div>
                <div className="flex h-2.5 w-full overflow-hidden rounded-full border border-slate-200 bg-slate-100">
                  <div className="h-full bg-slate-400" style={{ width: `${payRatio}%` }} />
                  <div className="h-full bg-[#16a34a]" style={{ width: `${savedRatio}%` }} />
                </div>
              </div>
            ) : null
          }
          metrics={[
            { label: 'Pre-Tax Discounted Price', value: isValid ? afterD2.toFixed(2) : '—' },
            { label: 'Total Discount Savings', value: isValid ? totalSaved.toFixed(2) : '—', highlight: true },
            { label: `Tax / GST (${tax}%)`, value: isValid ? taxAmount.toFixed(2) : '—' },
          ]}
        />
      </div>
    </div>
  );
}
