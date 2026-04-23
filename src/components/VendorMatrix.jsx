import React, { useState } from 'react';
import { Building2, Star, Box } from 'lucide-react';
import * as Icons from 'lucide-react';
import VendorDetailPanel from './VendorDetailPanel';

export default function VendorMatrix({ activeDomain, activeVendor, setActiveVendor }) {
  const [filter, setFilter] = useState('all');

  const filteredVendors = activeDomain?.vendors?.filter(v => {
    if (filter === 'all') return true;
    if (filter === 'open') return v.models?.some(m => m.status === '开源');
    if (filter === 'closed') return v.models?.some(m => m.status !== '开源');
    return true;
  });

  return (
    <section className="space-y-6 sm:space-y-8">
      {/* Header with filter tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-3">
          <Building2 className="w-5 h-5 text-slate-400 shrink-0" />
          <h3 className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-widest">AI 厂商图谱与生态库</h3>
        </div>
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl shadow-inner">
          {[
            { key: 'all', label: '全部', activeColor: 'text-indigo-600' },
            { key: 'open', label: '开源生态', activeColor: 'text-emerald-600' },
            { key: 'closed', label: '闭源商业', activeColor: 'text-rose-600' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => { setFilter(tab.key); setActiveVendor(null); }}
              className={`whitespace-nowrap px-3 sm:px-4 py-1.5 rounded-lg text-[11px] sm:text-xs font-black transition-all ${filter === tab.key ? `bg-white ${tab.activeColor} shadow-sm` : 'text-slate-500 hover:text-slate-900'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Vendor Grid or Detail Panel */}
      {activeVendor ? (
        <VendorDetailPanel activeVendor={activeVendor} onClose={() => setActiveVendor(null)} />
      ) : filteredVendors?.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3" role="tablist">
          {filteredVendors?.map(v => {
            const LogoIcon = Icons[v.logo === 'VideoIcon' ? 'Video' : v.logo] || Box;
            const modelCount = v.models?.length || 0;
            return (
            <button 
              key={v.id} 
              role="tab"
              aria-selected={activeVendor?.id === v.id}
              onClick={() => setActiveVendor(v)} 
              className={`flex flex-col items-center justify-center p-3 sm:p-5 rounded-xl sm:rounded-[1.5rem] border transition-all duration-300 text-center group relative overflow-hidden
                ${activeVendor?.id === v.id 
                  ? 'bg-white border-indigo-500 shadow-xl shadow-indigo-100/50 scale-[1.03] z-10 ring-2 sm:ring-4 ring-indigo-50' 
                  : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-lg'}`}
            >
              <div className={`mb-2 sm:mb-3 transition-transform group-hover:scale-110 ${v.logoColor || 'text-slate-800'}`}>
                 <LogoIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="text-xs sm:text-sm font-black text-slate-900 leading-tight mb-1 line-clamp-1">{v.name}</div>
              <span className="text-[9px] sm:text-[10px] font-black bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-md uppercase">{v.origin}</span>
              {/* Model count badge */}
              {modelCount > 0 && (
                <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 text-[8px] sm:text-[9px] font-black bg-indigo-50 text-indigo-500 px-1 sm:px-1.5 py-0.5 rounded-md border border-indigo-100">
                  {modelCount} 模型
                </span>
              )}
              {activeVendor?.id === v.id && <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2"><Star className="w-3 h-3 text-indigo-500 fill-indigo-500" /></div>}
            </button>
          )})}
          {/* Placeholder card */}
          <div className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-xl sm:rounded-[1.5rem] border border-dashed border-slate-200 opacity-40">
              <div className="text-[9px] sm:text-[10px] font-black text-slate-400 mb-1 uppercase tracking-widest">More...</div>
              <div className="text-[10px] sm:text-xs font-black text-slate-300 italic">更多厂商录入中</div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 sm:py-20 px-4 bg-white rounded-2xl sm:rounded-[2.5rem] border border-dashed border-slate-200 text-center shadow-sm">
          <Icons.Ghost className="w-10 h-10 sm:w-12 sm:h-12 text-slate-200 mb-4 sm:mb-5 animate-pulse" />
          <h4 className="text-sm sm:text-base font-black text-slate-500 mb-2">该阵营下暂无收录模型</h4>
          <p className="text-[11px] sm:text-xs font-bold text-slate-400">期待 AI 领域的下一次颠覆式突破 🚀</p>
        </div>
      )}
    </section>
  );
}
