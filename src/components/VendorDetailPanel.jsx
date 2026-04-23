import React, { useEffect } from 'react';
import { Layers, ExternalLink, Laptop, Unlock, Cloud, CreditCard, Code, X } from 'lucide-react';

export default function VendorDetailPanel({ activeVendor, onClose }) {
  // Escape key to close
  useEffect(() => {
    if (!activeVendor) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeVendor, onClose]);

  if (!activeVendor) return null;
  
  return (
    <div className="bg-slate-50 w-full rounded-2xl sm:rounded-3xl border border-slate-200 shadow-inner relative animate-fade-in mt-6 sm:mt-8">
      {/* Close button */}
      <button onClick={onClose} aria-label="返回图谱" className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 bg-white rounded-full text-slate-400 hover:text-slate-900 shadow-sm border border-slate-100 hover:bg-slate-100 transition-colors z-20 flex items-center gap-1.5 px-3">
         <X className="w-4 h-4 sm:w-5 sm:h-5" /> <span className="text-[10px] sm:text-xs font-black">返回</span>
      </button>
      
      <div className="p-5 sm:p-8 md:p-10">
          {/* Vendor Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 border-b border-slate-200 pb-5 sm:pb-6 pr-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{activeVendor.name}</h2>
            <span className="text-[10px] sm:text-xs font-black bg-indigo-100 text-indigo-700 px-2.5 sm:px-3 py-1 rounded-full uppercase self-start">{activeVendor.origin}</span>
          </div>
          
          {/* Models Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {activeVendor?.models?.map((m) => (
              <div key={m.name} className="bg-white border-2 border-indigo-50 rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all flex flex-col group relative overflow-hidden">
                 {/* Model Title + Status */}
                 <div className="flex justify-between items-start mb-5 sm:mb-8 relative z-10 gap-3">
                    <div className="min-w-0">
                      <div className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors truncate">{m.name}</div>
                      <div className="text-[10px] sm:text-xs font-black text-slate-400 uppercase mt-1 sm:mt-1.5 flex items-center gap-1.5 tracking-widest"><Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"/><span className="truncate">{m.type}</span></div>
                    </div>
                    <div className={`text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl font-black border shadow-sm shrink-0 ${m.status === '开源' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-rose-50 text-rose-700 border-rose-100'}`}>{m.status}</div>
                 </div>
                 
                 {/* Deploy Type Tags */}
                 <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {m.status === '开源' ? (
                    <>
                      <span className="text-[9px] sm:text-[10px] font-black bg-emerald-100/50 text-emerald-600 px-2 py-0.5 sm:py-1 rounded-md flex items-center gap-1"><Laptop className="w-3 h-3"/> 可本地部署</span>
                      <span className="text-[9px] sm:text-[10px] font-black bg-cyan-100/50 text-cyan-600 px-2 py-0.5 sm:py-1 rounded-md flex items-center gap-1"><Unlock className="w-3 h-3"/> 权重开放</span>
                    </>
                  ) : (
                    <>
                      <span className="text-[9px] sm:text-[10px] font-black bg-purple-100/50 text-purple-600 px-2 py-0.5 sm:py-1 rounded-md flex items-center gap-1"><Cloud className="w-3 h-3"/> 纯云端 API</span>
                      <span className="text-[9px] sm:text-[10px] font-black bg-amber-100/50 text-amber-600 px-2 py-0.5 sm:py-1 rounded-md flex items-center gap-1"><CreditCard className="w-3 h-3"/> 商业授权</span>
                    </>
                  )}
                 </div>

                 {/* Specs Grid */}
                 <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                    {m.specs && Object.entries(m.specs).map(([k, v]) => (
                      <div key={k} className="bg-slate-50 p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-slate-100 text-center shadow-inner overflow-hidden">
                        <div className="text-[8px] sm:text-[10px] font-black text-slate-400 uppercase mb-0.5 sm:mb-1 tracking-tighter truncate">{k}</div>
                        <div className="text-[10px] sm:text-xs font-black text-slate-700 truncate">{v}</div>
                      </div>
                    ))}
                 </div>
                 
                 {/* Feature Tags */}
                 <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {m.features?.map((f) => (
                      <span key={f} className="bg-indigo-50 text-indigo-600 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-bold border border-indigo-100 shadow-sm"># {f}</span>
                    ))}
                 </div>
                 
                 {/* Suitability */}
                 <p className="text-xs sm:text-sm text-slate-500 italic leading-relaxed font-medium">{m.suitability}</p>
                 
                 {/* Action Buttons */}
                 <div className="mt-auto flex items-center gap-2 sm:gap-3 pt-4 sm:pt-6 border-t border-slate-100">
                    <a href={m.url || '#'} target="_blank" rel="noopener noreferrer" className="flex-1 bg-slate-900 hover:bg-indigo-600 text-white text-[11px] sm:text-xs font-black py-2.5 sm:py-3 rounded-xl flex items-center justify-center gap-1.5 sm:gap-2 transition-colors shadow-md">
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> 访问官网
                    </a>
                    {m.status === '开源' && (
                      <a href={m.github || m.url || '#'} target="_blank" rel="noopener noreferrer" className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] sm:text-xs font-black py-2.5 sm:py-3 rounded-xl flex items-center justify-center gap-1.5 sm:gap-2 transition-colors border border-slate-200">
                        <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> 获取模型
                      </a>
                    )}
                 </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}
