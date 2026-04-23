import React from 'react';
import { Clock, MousePointer2, Infinity as InfinityIcon, ShieldCheck, Globe } from 'lucide-react';

const FOOTER_FEATURES = [
  { icon: <ShieldCheck className="text-indigo-500" />, title: "权威数据同步", desc: "TRACKING GLOBAL LAB DATA" },
  { icon: <Globe className="text-emerald-500" />, title: "全球视野同步", desc: "SYNCED WITH SILICON VALLEY & SHENZHEN" },
  { icon: <InfinityIcon className="text-amber-500" />, title: "开源未来共建", desc: "向所有 AI 开源贡献者致敬" }
];

export default function FooterTimeline({ generalTimeline }) {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-20 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="bg-slate-900 p-3 rounded-2xl shadow-xl shadow-slate-200"><Clock className="w-6 h-6 text-white" /></div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight italic">AI 行业宏大编年录</h3>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Universal AI Chronicle • Global Milestones</p>
            </div>
          </div>
          <div className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shadow-inner"><MousePointer2 className="w-4 h-4 text-indigo-500" /> 向右滑动追溯历史</div>
        </div>
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-[3px] bg-slate-100 -translate-y-1/2 z-0"></div>
          <div className="flex gap-8 overflow-x-auto pb-10 pt-4 snap-x relative z-10 px-4">
            {generalTimeline?.map((item) => (
              <div key={item.title} className="flex-shrink-0 w-[300px] snap-center group">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-white border-[4px] border-slate-900 group-hover:border-indigo-600 transition-all shadow-xl mb-8 relative">
                     <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs font-black text-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-300">{item.year}</div>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-[2.5rem] p-7 shadow-sm hover:shadow-2xl hover:border-indigo-100 transition-all group-hover:-translate-y-3 w-full">
                     <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-black rounded-lg mb-3 shadow-sm">{item.year}</div>
                     <h4 className="text-lg font-black text-slate-900 mb-3 leading-tight group-hover:text-indigo-700 transition-colors">{item.title}</h4>
                     <p className="text-xs text-slate-500 leading-relaxed font-bold italic text-justify line-clamp-3">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex-shrink-0 w-[100px] flex items-center justify-center"><InfinityIcon className="w-10 h-10 text-slate-100" /></div>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
           {FOOTER_FEATURES.map((item) => (
             <div key={item.title} className="flex items-center gap-5 p-7 bg-slate-50 border border-slate-200 rounded-[2.5rem] shadow-inner">
                <div className="bg-white p-4 rounded-2xl shadow-md border border-slate-100">{item.icon}</div>
                <div><div className="text-base font-black text-slate-900">{item.title}</div><div className="text-[10px] md:text-xs font-black text-slate-500 mt-0.5 tracking-widest uppercase">{item.desc}</div></div>
             </div>
           ))}
        </div>
      </div>
    </footer>
  );
}
