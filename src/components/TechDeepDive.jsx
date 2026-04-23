import React from 'react';
import { Binary, Share2, Rocket, Lock } from 'lucide-react';

export default function TechDeepDive({ activeDomain }) {
  return (
    <section className="bg-slate-900 text-slate-100 rounded-[3rem] p-12 shadow-2xl relative overflow-hidden">
       <div className="relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-indigo-500 p-2 rounded-xl"><Binary className="w-6 h-6 text-white" /></div>
            <h3 className="text-2xl font-black tracking-tight">技术演进：全链路深度解析</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {activeDomain?.deepDive?.steps?.map((step, i) => (
                <div key={step.title} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/50 flex items-center justify-center text-sm font-black text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-lg">
                      {i + 1}
                    </div>
                    {i !== (activeDomain?.deepDive?.steps?.length || 0) - 1 && <div className="w-0.5 flex-1 bg-slate-800 my-2"></div>}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white mb-2 group-hover:text-indigo-400 transition-colors">{step.title}</h4>
                    <p className="text-sm text-slate-300 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white/[0.03] rounded-3xl p-8 border border-white/10 flex flex-col backdrop-blur-sm">
              <h4 className="text-xl font-black text-white mb-8 flex items-center gap-3"><Share2 className="w-6 h-6 text-indigo-400" /> 生态格局与选型参考</h4>
              <div className="space-y-8 flex-1">
                {[
                  { type: 'open', title: '开源生态优势', Icon: Rocket, containerClass: 'bg-emerald-500/10 border-emerald-500/20 hover:bg-emerald-500/20', textClass: 'text-emerald-400', pClass: 'text-emerald-50', content: activeDomain?.deepDive?.comparison?.open },
                  { type: 'closed', title: '闭源云端优势', Icon: Lock, containerClass: 'bg-rose-500/10 border-rose-500/20 hover:bg-rose-500/20', textClass: 'text-rose-400', pClass: 'text-rose-50', content: activeDomain?.deepDive?.comparison?.closed }
                ].map(({ type, title, Icon, containerClass, textClass, pClass, content }) => (
                  <div key={type} className={`p-6 rounded-2xl border transition-colors group ${containerClass}`}>
                     <div className={`text-sm font-black uppercase mb-3 flex items-center gap-2 ${textClass}`}><Icon className="w-5 h-5"/> {title}</div>
                     <p className={`text-sm leading-relaxed font-medium ${pClass}`}>{content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
       </div>
    </section>
  );
}
