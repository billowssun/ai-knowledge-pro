import React from 'react';
import { Milestone } from 'lucide-react';

export default function TimelineSidebar({ activeDomain }) {
  return (
    <aside className="h-full">
      <div className="bg-white rounded-2xl sm:rounded-[3rem] border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm sticky top-20 sm:top-28 flex flex-col max-h-[60vh] lg:max-h-[calc(100vh-140px)] relative">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8 lg:mb-10 shrink-0">
          <div className="bg-indigo-50 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl text-indigo-600 border border-indigo-100 shadow-sm shrink-0"><Milestone className="w-4 h-4 sm:w-5 sm:h-5" /></div>
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg lg:text-xl font-black text-slate-900 tracking-tight truncate">{activeDomain?.name} 演进史</h3>
            <p className="text-[10px] sm:text-xs font-black text-slate-400 uppercase mt-0.5">Vertical Chronicle</p>
          </div>
        </div>
        
        {/* Timeline items */}
        <div className="flex-1 overflow-y-auto pr-2 sm:pr-4 custom-scrollbar">
          <div className="relative border-l-[3px] border-slate-100 ml-4 sm:ml-6 space-y-8 sm:space-y-10 lg:space-y-12 pb-4">
            {activeDomain?.history?.map((item) => (
              <div key={item.title} className="relative pl-7 sm:pl-10 group">
                <div className="absolute -left-[9px] sm:-left-[11px] top-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-white border-[3px] border-slate-200 group-hover:border-indigo-600 group-hover:scale-125 transition-all shadow-sm"></div>
                <div className="text-[10px] sm:text-xs font-black text-indigo-600 mb-1 sm:mb-1.5 tracking-widest">{item.year}</div>
                <h4 className="text-sm sm:text-base font-black text-slate-900 mb-1.5 sm:mb-2 group-hover:text-indigo-700 transition-colors leading-snug">{item.title}</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-bold text-justify group-hover:text-slate-700 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom fade gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-white to-transparent pointer-events-none rounded-b-2xl sm:rounded-b-[3rem]"></div>
      </div>
    </aside>
  );
}
