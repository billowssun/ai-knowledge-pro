import { useState, memo } from 'react';

interface TooltipProps {
  text: string;
  explanation: string;
}

interface TooltipContentProps {
  show: boolean;
  explanation: string;
}

const TooltipContent = memo(function TooltipContent({ show, explanation }: TooltipContentProps) {
  if (!show) return null;
  return (
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-slate-900/95 backdrop-blur-md text-slate-100 text-xs font-bold p-4 rounded-2xl shadow-2xl border border-white/10 z-[100] pointer-events-none animate-fade-in leading-relaxed text-center">
      {explanation}
      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900/95"></div>
    </div>
  );
});

export const Tooltip = memo(function Tooltip({ text, explanation }: TooltipProps) {
  const [show, setShow] = useState(false);

  return (
    <span
      className="relative inline-block cursor-help group mx-0.5"
      tabIndex={0}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      <span className="border-b-2 border-dashed border-indigo-400/60 text-indigo-200 font-bold group-hover:text-indigo-300 dark:group-hover:text-indigo-200 transition-colors">
        {text}
      </span>
      <TooltipContent show={show} explanation={explanation} />
    </span>
  );
});

export default Tooltip;
