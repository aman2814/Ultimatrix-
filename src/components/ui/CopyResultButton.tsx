import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { useTranslations } from '../../i18n/utils';
import { useRoute } from './Router';

interface CopyResultButtonProps {
  value: string;
  label?: string;
}

export function CopyResultButton({ value, label }: CopyResultButtonProps) {
  const [copied, setCopied] = useState(false);
  const { lang } = useRoute();
  const t = useTranslations(lang);
  const displayLabel = label ?? t('shell.copyResult');

  const handleCopy = async () => {
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = value;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      disabled={!value}
      className="inline-flex min-h-[44px] md:min-h-0 items-center justify-center gap-2 rounded-lg border border-[#39FF14]/40 bg-[#39FF14]/10 px-4 py-2 text-sm font-semibold text-[#39FF14] transition-colors duration-150 hover:bg-[#39FF14] hover:text-[#070B0E] disabled:cursor-not-allowed disabled:opacity-40 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39FF14]"
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      <span>{copied ? t('shell.copied') : displayLabel}</span>
    </button>
  );
}
