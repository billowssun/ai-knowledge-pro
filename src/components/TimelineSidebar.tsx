import { memo } from 'react';
import { Milestone } from 'lucide-react';
import type { Domain } from '../types';

interface TimelineSidebarProps {
  activeDomain: Domain;
}

const TimelineSidebar = memo(function TimelineSidebar({ activeDomain }: TimelineSidebarProps) {
  return (
    <aside className="h-full" aria-label="领域演进时间线">
      <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-[3rem] border border-slate-200 dark:border-slate-700 p-6 sm:p-8 lg:p-10 shadow-sm sticky top-20 sm:top-28 flex flex-col max-h-[60vh] lg:max-h-[calc(100vh-140px)] relative">
        <div className="flex items-center gap-3 mb-6 sm:mb-8 lg:mb-10 shrink-0">
          <div className="bg-indigo-50 dark:bg-indigo-500/10 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20 shadow-sm shrink-0"><Milestone className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" /></div>
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg lg:text-xl font-black text-slate-900 dark:text-white tracking-tight truncate">{activeDomain?.name} 演进史</h3>
            <p className="text-[10px] sm:text-xs font-black text-slate-400 dark:text-slate-500 uppercase mt-0.5">Vertical Chronicle</p>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto pr-2 sm:pr-4 custom-scrollbar">
          <div className="relative border-l-[3px] border-slate-100 dark:border-slate-700 ml-4 sm:ml-6 space-y-8 sm:space-y-10 lg:space-y-12 pb-4">
            {activeDomain?.history?.map((item) => (
              <div key={item.title} className="relative pl-7 sm:pl-10 group">
                <div className="absolute -left-[9px] sm:-left-[11px] top-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-white dark:bg-slate-900 border-[3px] border-slate-200 dark:border-slate-600 group-hover:border-indigo-600 dark:group-hover:border-indigo-400 group-hover:scale-125 transition-all shadow-sm"></div>
                <div className="text-[10px] sm:text-xs font-black text-indigo-600 dark:text-indigo-400 mb-1 sm:mb-1.5 tracking-widest">{item.year}</div>
                <h4 className="text-sm sm:text-base font-black text-slate-900 dark:text-white mb-1.5 sm:mb-2 group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors leading-snug">{item.title}</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-bold text-justify group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-white dark:from-slate-900 to-transparent pointer-events-none rounded-b-2xl sm:rounded-b-[3rem]"></div>
      </div>
    </aside>
  );
});

export default TimelineSidebar;
