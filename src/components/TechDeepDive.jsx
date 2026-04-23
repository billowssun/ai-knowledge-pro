import React from 'react';
import { Binary } from 'lucide-react';
import { renderWithTooltips } from '../utils/renderWithTooltips';

export default function TechDeepDive({ activeDomain }) {
  return (
    <section className="bg-slate-900 text-slate-100 rounded-2xl sm:rounded-[3rem] p-6 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden">
       <div className="relative z-10">
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <div className="bg-indigo-500 p-2 rounded-xl shrink-0"><Binary className="w-5 h-5 sm:w-6 sm:h-6 text-white" /></div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight">技术演进：全链路深度解析</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {activeDomain?.deepDive?.steps?.map((step, i) => (
              <div key={step.title} className="bg-slate-800/40 border border-slate-700/50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl hover:border-indigo-500/30 hover:bg-slate-800/60 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute -right-2 -bottom-6 text-[100px] leading-none font-black text-slate-800/40 group-hover:text-indigo-500/10 transition-colors pointer-events-none z-0 select-none">
                  0{i + 1}
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-900 border-2 border-slate-700 flex items-center justify-center text-sm font-black text-indigo-400 mb-5 group-hover:bg-indigo-500 group-hover:border-indigo-400 group-hover:text-white transition-all shadow-lg">
                    {i + 1}
                  </div>
                  <h4 className="text-base sm:text-lg lg:text-xl font-black text-white mb-3 group-hover:text-indigo-300 transition-colors tracking-tight leading-snug">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">{renderWithTooltips(step.desc)}</p>
                </div>
              </div>
            ))}
          </div>
       </div>
    </section>
  );
}
