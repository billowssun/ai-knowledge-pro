import React from 'react';
import { Milestone } from 'lucide-react';

export default function TimelineSidebar({ activeDomain }) {
  return (
    <aside className="h-full">
      <div className="bg-white rounded-[3rem] border border-slate-200 p-10 shadow-sm sticky top-28 flex flex-col h-[calc(100vh-140px)] relative">
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-indigo-50 p-2.5 rounded-2xl text-indigo-600 border border-indigo-100 shadow-sm"><Milestone className="w-5 h-5" /></div>
          <div>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">{activeDomain?.name} 演进史</h3>
            <p className="text-xs font-black text-slate-400 uppercase mt-0.5">Vertical Chronicle</p>
          </div>
        </div>
        <div className="relative border-l-[3px] border-slate-100 ml-4 flex-1 space-y-12 overflow-y-auto pr-4 scrollbar-hide">
          {activeDomain?.history?.map((item) => (
            <div key={item.title} className="relative pl-10 group">
              <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-white border-[3px] border-slate-200 group-hover:border-indigo-600 group-hover:scale-125 transition-all shadow-sm"></div>
              <div className="text-xs font-black text-indigo-600 mb-1.5 tracking-widest">{item.year}</div>
              <h4 className="text-base font-black text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">{item.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-bold text-justify group-hover:text-slate-700 transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none rounded-b-[3rem]"></div>
      </div>
    </aside>
  );
}
