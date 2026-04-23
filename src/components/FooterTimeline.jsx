import React from 'react';
import { Clock, MousePointer2, Infinity as InfinityIcon, ShieldCheck, Globe } from 'lucide-react';

const FOOTER_FEATURES = [
  { icon: <ShieldCheck className="text-indigo-500 w-5 h-5" />, title: "权威数据同步", desc: "TRACKING GLOBAL LAB DATA" },
  { icon: <Globe className="text-emerald-500 w-5 h-5" />, title: "全球视野同步", desc: "SYNCED WITH SILICON VALLEY & SHENZHEN" },
  { icon: <InfinityIcon className="text-amber-500 w-5 h-5" />, title: "开源未来共建", desc: "向所有 AI 开源贡献者致敬" }
];

export default function FooterTimeline({ generalTimeline }) {
  return (
    <footer className="bg-white border-t border-slate-200 pt-10 sm:pt-16 pb-12 sm:pb-20 mt-6 sm:mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="bg-slate-900 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl shadow-slate-200 shrink-0"><Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" /></div>
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900 tracking-tight italic">AI 行业宏大编年录</h3>
              <p className="text-[9px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mt-0.5 sm:mt-1">Universal AI Chronicle • Global Milestones</p>
            </div>
          </div>
          <div className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 sm:gap-3 bg-slate-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-slate-100 shadow-inner"><MousePointer2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-500" /> 向右滑动追溯历史</div>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          <div className="absolute top-[28px] sm:top-[32px] left-0 w-full h-[3px] bg-slate-100 z-0"></div>
          <div className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto pb-6 sm:pb-10 pt-4 snap-x relative z-10 px-2 sm:px-4 custom-scrollbar">
            {generalTimeline?.map((item) => (
              <div key={item.title} className="flex-shrink-0 w-[240px] sm:w-[280px] lg:w-[300px] snap-center group">
                <div className="flex flex-col items-center h-full">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-[3px] sm:border-[4px] border-slate-900 group-hover:border-indigo-600 transition-all shadow-xl mb-4 sm:mb-8 relative shrink-0">
                     <div className="absolute -top-7 sm:-top-10 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs font-black text-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">{item.year}</div>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-7 shadow-sm hover:shadow-2xl hover:border-indigo-100 transition-all group-hover:-translate-y-2 sm:group-hover:-translate-y-3 w-full flex-1">
                     <div className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 bg-indigo-50 text-indigo-600 text-[10px] sm:text-xs font-black rounded-lg mb-2 sm:mb-3 shadow-sm">{item.year}</div>
                     <h4 className="text-base sm:text-lg font-black text-slate-900 mb-2 sm:mb-3 leading-tight group-hover:text-indigo-700 transition-colors">{item.title}</h4>
                     <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-bold italic text-justify line-clamp-3">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex-shrink-0 w-[60px] sm:w-[100px] flex justify-center pt-[-2px] sm:pt-0"><InfinityIcon className="w-8 h-8 sm:w-10 sm:h-10 text-slate-200 bg-white relative z-10" /></div>
          </div>
        </div>
        
        {/* Footer features */}
        <div className="mt-12 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 opacity-90">
           {FOOTER_FEATURES.map((item) => (
             <div key={item.title} className="flex items-center gap-4 sm:gap-5 p-5 sm:p-7 bg-slate-50 border border-slate-200 rounded-2xl sm:rounded-[2.5rem] shadow-inner hover:shadow-md transition-all">
                <div className="bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-md border border-slate-100 shrink-0">{item.icon}</div>
                <div className="min-w-0">
                  <div className="text-sm sm:text-base font-black text-slate-900">{item.title}</div>
                  <div className="text-[9px] sm:text-[10px] lg:text-xs font-black text-slate-500 mt-0.5 tracking-widest uppercase truncate">{item.desc}</div>
                </div>
             </div>
           ))}
        </div>
        
        {/* Data source notice */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
            数据截止日期: 2026 年 4 月 · 内容仅供参考 · 版本号为基于行业趋势的合理推测
          </p>
        </div>
      </div>
    </footer>
  );
}
