import React from 'react';
import { Building2, ChevronUp, Star, Layers } from 'lucide-react';
import * as Icons from 'lucide-react';

function VendorDetailPanel({ activeVendor, onClose }) {
  if (!activeVendor) return null;
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 md:p-10 animate-in fade-in duration-300" onClick={onClose}>
      <div className="bg-slate-50 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} aria-label="关闭详情面板" className="absolute top-6 right-6 p-2 bg-white rounded-full text-slate-400 hover:text-slate-900 shadow-sm border border-slate-100 hover:bg-slate-100 transition-colors z-20">
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-6">
            <h2 className="text-3xl font-black text-slate-900">{activeVendor.name}</h2>
            <span className="text-xs font-black bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full uppercase">{activeVendor.origin}</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activeVendor?.models?.map((m) => (
              <div key={m.name} className="bg-white border-2 border-indigo-50 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all flex flex-col group relative overflow-hidden">
                 <div className="flex justify-between items-start mb-8 relative z-10">
                    <div>
                      <div className="text-xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{m.name}</div>
                      <div className="text-xs font-black text-slate-400 uppercase mt-1.5 flex items-center gap-1.5 tracking-widest"><Layers className="w-4 h-4"/>{m.type}</div>
                    </div>
                    <div className={`text-xs px-3 py-1.5 rounded-xl font-black border shadow-sm ${m.status === '开源' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-rose-50 text-rose-700 border-rose-100'}`}>{m.status}</div>
                 </div>
                 <div className="grid grid-cols-3 gap-3 mb-8">
                    {m.specs && Object.entries(m.specs).map(([k, v]) => (
                      <div key={k} className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center shadow-inner">
                        <div className="text-[10px] font-black text-slate-400 uppercase mb-1 tracking-tighter">{k}</div>
                        <div className="text-xs font-black text-slate-700">{v}</div>
                      </div>
                    ))}
                 </div>
                 <div className="flex flex-wrap gap-2 mb-8">
                    {m.features?.map((f) => (
                      <span key={f} className="bg-indigo-50 text-indigo-600 text-xs px-3 py-1 rounded-full font-bold border border-indigo-100 shadow-sm"># {f}</span>
                    ))}
                 </div>
                 <p className="mt-auto text-sm text-slate-500 italic leading-relaxed pt-6 border-t border-slate-100 font-medium">{m.suitability}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VendorMatrix({ activeDomain, activeVendor, setActiveVendor }) {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Building2 className="w-5 h-5 text-slate-400" />
          <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest">AI 厂商图谱与生态库</h3>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3" role="tablist">
        {activeDomain?.vendors?.map(v => {
          const LogoIcon = Icons[v.logo === 'VideoIcon' ? 'Video' : v.logo] || Icons.Box;
          return (
          <button 
            key={v.id} 
            role="tab"
            aria-selected={activeVendor?.id === v.id}
            onClick={() => setActiveVendor(v)} 
            className={`flex flex-col items-center justify-center p-5 rounded-[1.5rem] border transition-all duration-300 text-center group relative overflow-hidden h-full ${activeVendor?.id === v.id ? 'bg-white border-indigo-500 shadow-xl shadow-indigo-100/50 scale-105 z-10 ring-4 ring-indigo-50' : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-lg'}`}
          >
            <div className={`mb-3 transition-transform group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0 ${v.logoColor || 'text-slate-800'}`}>
               <LogoIcon className="w-6 h-6" />
            </div>
            <div className="text-sm font-black text-slate-900 leading-tight mb-1">{v.name}</div>
            <span className="text-[10px] font-black bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-md uppercase">{v.origin}</span>
            {activeVendor?.id === v.id && <div className="absolute top-2 right-2"><Star className="w-3 h-3 text-indigo-500 fill-indigo-500" /></div>}
          </button>
        )})}
        <div className="flex flex-col items-center justify-center p-5 rounded-[1.5rem] border border-dashed border-slate-200 opacity-40 grayscale h-full">
            <div className="text-[10px] font-black text-slate-400 mb-1 uppercase tracking-widest">More...</div>
            <div className="text-xs font-black text-slate-300 italic">更多厂商录入中</div>
        </div>
      </div>
      <VendorDetailPanel activeVendor={activeVendor} onClose={() => setActiveVendor(null)} />
    </section>
  );
}
