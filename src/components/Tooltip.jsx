import React, { useState } from 'react';

export function Tooltip({ text, explanation }) {
  const [show, setShow] = useState(false);
  
  return (
    <span 
      className="relative inline-block cursor-help group mx-0.5"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span className="border-b-2 border-dashed border-indigo-400/60 text-indigo-200 font-bold group-hover:text-indigo-300 transition-colors">{text}</span>
      {show && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-slate-900/95 backdrop-blur-md text-slate-100 text-xs font-bold p-4 rounded-2xl shadow-2xl border border-white/10 z-[100] pointer-events-none animate-in fade-in zoom-in-95 duration-200 leading-relaxed text-center">
          {explanation}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900/95"></div>
        </div>
      )}
    </span>
  );
}

export default Tooltip;
