import { useState, useMemo, useCallback, memo } from 'react';
import { Building2, Star } from 'lucide-react';
import * as Icons from 'lucide-react';
import VendorDetailPanel from './VendorDetailPanel';
import { getIconComponent } from '../utils/icons';
import type { Domain, Vendor, FilterTab, Model } from '../types';
import { MODEL_STATUS_OPEN } from '../types';

interface VendorMatrixProps {
  activeDomain: Domain;
  activeVendor: Vendor | null;
  setActiveVendor: (v: Vendor | null) => void;
}

const FILTER_TABS: { key: FilterTab; label: string; activeColor: string }[] = [
  { key: 'all', label: '全部', activeColor: 'text-indigo-600 dark:text-indigo-400' },
  { key: 'open', label: '开源生态', activeColor: 'text-emerald-600 dark:text-emerald-400' },
  { key: 'closed', label: '闭源商业', activeColor: 'text-rose-600 dark:text-rose-400' },
];

const VendorMatrix = memo(function VendorMatrix({ activeDomain, activeVendor, setActiveVendor }: VendorMatrixProps) {
  const [filter, setFilter] = useState<FilterTab>('all');

  const filteredVendors: Vendor[] | undefined = useMemo(() => {
    return activeDomain?.vendors?.filter((v: Vendor) => {
      if (filter === 'all') return true;
      if (filter === 'open') return v.models?.some((m: Model) => m.status === MODEL_STATUS_OPEN);
      if (filter === 'closed') return v.models?.some((m: Model) => m.status !== MODEL_STATUS_OPEN);
      return true;
    });
  }, [activeDomain?.vendors, filter]);

  const handleFilter = useCallback((key: FilterTab) => {
    setFilter(key);
    setActiveVendor(null);
  }, [setActiveVendor]);

  const handleSelectVendor = useCallback((v: Vendor) => {
    setActiveVendor(v);
  }, [setActiveVendor]);

  const handleClose = useCallback(() => {
    setActiveVendor(null);
  }, [setActiveVendor]);

  const renderVendorGrid = useCallback((vendors: Vendor[]) => {
    const handleTabKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
      const grid = (e.target as HTMLElement).closest('[role="tablist"]');
      if (!grid) return;
      const tabs = grid.querySelectorAll<HTMLElement>('[role="tab"]');
      let nextIndex: number | null = null;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextIndex = (currentIndex + 1) % tabs.length;
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      }
      if (nextIndex !== null) {
        tabs[nextIndex]?.focus();
      }
    };

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3" role="tablist">
        {vendors.map((v, idx: number) => {
          const LogoIcon = getIconComponent(v.logo);
          const modelCount = v.models?.length || 0;
          return (
          <button 
            key={v.id} 
            role="tab"
            aria-selected={activeVendor?.id === v.id}
            tabIndex={activeVendor?.id === v.id ? 0 : -1}
            onClick={() => handleSelectVendor(v)}
            onKeyDown={(e) => handleTabKeyDown(e, idx)} 
            className={`flex flex-col items-center justify-center p-3 sm:p-5 rounded-xl sm:rounded-[1.5rem] border transition-all duration-300 text-center group relative overflow-hidden
              ${activeVendor?.id === v.id 
                ? 'bg-white dark:bg-slate-800 border-indigo-500 dark:border-indigo-400 shadow-xl shadow-indigo-100/50 dark:shadow-indigo-900/20 scale-[1.03] z-10 ring-2 sm:ring-4 ring-indigo-50 dark:ring-indigo-900/30' 
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500 hover:shadow-lg'}`}
          >
            <div className={`mb-2 sm:mb-3 transition-transform group-hover:scale-110 ${v.logoColor || 'text-slate-800 dark:text-slate-200'}`}>
               <LogoIcon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
            </div>
            <div className="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-tight mb-1 line-clamp-1">{v.name}</div>
            <span className="text-[10px] sm:text-[11px] font-black bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded-md uppercase">{v.origin}</span>
            {modelCount > 0 && (
              <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 text-[10px] sm:text-[11px] font-black bg-indigo-50 dark:bg-indigo-500/20 text-indigo-500 dark:text-indigo-300 px-1 sm:px-1.5 py-0.5 rounded-md border border-indigo-100 dark:border-indigo-500/30">
                {modelCount} 模型
              </span>
            )}
            {activeVendor?.id === v.id && <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2"><Star className="w-3 h-3 text-indigo-500 dark:text-indigo-400 fill-indigo-500 dark:fill-indigo-400" aria-hidden="true" /></div>}
          </button>
        )})}
        <div className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-xl sm:rounded-[1.5rem] border border-dashed border-slate-200 dark:border-slate-700 opacity-40" aria-hidden="true">
            <div className="text-[10px] sm:text-[11px] font-black text-slate-400 dark:text-slate-500 mb-1 uppercase tracking-widest">More...</div>
            <div className="text-[11px] sm:text-xs font-black text-slate-300 dark:text-slate-600 italic">更多厂商录入中</div>
        </div>
      </div>
    );
  }, [activeVendor?.id, handleSelectVendor]);

  const content = useMemo(() => {
    if (activeVendor) {
      return <VendorDetailPanel activeVendor={activeVendor} onClose={handleClose} />;
    }
    if (filteredVendors && filteredVendors.length > 0) {
      return renderVendorGrid(filteredVendors);
    }
    return (
      <div className="flex flex-col items-center justify-center py-16 sm:py-20 px-4 bg-white dark:bg-slate-800 rounded-2xl sm:rounded-[2.5rem] border border-dashed border-slate-200 dark:border-slate-700 text-center shadow-sm">
        <Icons.Ghost className="w-10 h-10 sm:w-12 sm:h-12 text-slate-200 dark:text-slate-600 mb-4 sm:mb-5 animate-pulse" aria-hidden="true" />
        <h4 className="text-sm sm:text-base font-black text-slate-500 dark:text-slate-400 mb-2">该阵营下暂无收录模型</h4>
        <p className="text-[11px] sm:text-xs font-bold text-slate-400 dark:text-slate-500">期待 AI 领域的下一次颠覆式突破 🚀</p>
      </div>
    );
  }, [activeVendor, filteredVendors, handleClose, renderVendorGrid]);

  return (
    <section className="space-y-6 sm:space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-3">
          <Building2 className="w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0" aria-hidden="true" />
          <h3 className="text-xs sm:text-sm font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">AI 厂商图谱与生态库</h3>
        </div>
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl shadow-inner" role="group" aria-label="厂商筛选">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleFilter(tab.key)}
              aria-pressed={filter === tab.key}
              className={`whitespace-nowrap px-3 sm:px-4 py-1.5 rounded-lg text-[11px] sm:text-xs font-black transition-all ${filter === tab.key ? `bg-white dark:bg-slate-700 ${tab.activeColor} shadow-sm` : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      {content}
    </section>
  );
});

export default VendorMatrix;
