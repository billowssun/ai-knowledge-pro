import { useState, useEffect, useRef, useCallback, memo, useMemo } from 'react';
import { Search, Compass, Ghost, X, CornerDownLeft, ArrowRight, ArrowUp, ArrowDown } from 'lucide-react';
import { getIconComponent } from '../utils/icons';
import { domainsData } from '../data/data';
import type { Domain, Vendor, Model, SearchResult } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (domain: Domain, vendor: Vendor) => void;
}

function searchVendors(query: string): SearchResult[] {
  const lowerQuery = query.toLowerCase();
  const results: SearchResult[] = [];
  domainsData.forEach((domain) => {
    domain.vendors.forEach((vendor: Vendor) => {
      const matchesVendor = vendor.name.toLowerCase().includes(lowerQuery) ||
        vendor.origin.toLowerCase().includes(lowerQuery);
      const matchedModels = vendor.models.filter(
        (m: Model) =>
          m.name.toLowerCase().includes(lowerQuery) ||
          m.features.some((f) => f.toLowerCase().includes(lowerQuery)) ||
          m.type.toLowerCase().includes(lowerQuery) ||
          m.status.toLowerCase().includes(lowerQuery),
      );

      if (matchesVendor || matchedModels.length > 0) {
        results.push({
          domain,
          vendor,
          matchedModels,
        });
      }
    });
  });
  return results;
}

const SearchModal = memo(function SearchModal({ isOpen, onClose, onSelect }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const prevFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      prevFocusRef.current = document.activeElement as HTMLElement;
      inputRef.current?.focus();
    } else if (prevFocusRef.current) {
      prevFocusRef.current.focus();
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setQuery('');
    setSelectedIndex(0);
    onClose();
  }, [onClose]);

  const results = useMemo(
    () => (query.trim() ? searchVendors(query) : []),
    [query],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter' && results.length > 0) {
        e.preventDefault();
        const selected = results[selectedIndex];
        if (selected) {
          onSelect(selected.domain, selected.vendor);
        }
      }
    },
    [handleClose, results, selectedIndex, onSelect],
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[8vh] sm:pt-[10vh] px-3 sm:px-4" role="dialog" aria-modal="true" aria-label="全局搜索">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={handleClose}></div>
      <div className="relative bg-white w-full max-w-2xl rounded-2xl sm:rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[85vh] sm:max-h-[80vh] animate-slide-up">
        
        <div className="flex items-center px-4 sm:px-6 py-3.5 sm:py-5 border-b border-slate-100 gap-3 sm:gap-4 bg-slate-50/50">
          <Search className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500 shrink-0" aria-hidden="true" />
          <label htmlFor="global-search-input" className="sr-only">搜索厂商、模型、特性</label>
          <input 
            ref={inputRef}
            id="global-search-input"
            type="text" 
            placeholder="搜索厂商、模型、特性..." 
            className="flex-1 bg-transparent text-slate-800 text-base sm:text-lg outline-none font-bold placeholder:text-slate-300 placeholder:font-medium min-w-0"
            value={query}
            onChange={e => { setQuery(e.target.value); setSelectedIndex(0); }}
            onKeyDown={handleKeyDown}
            autoComplete="off"
          />
          <button onClick={handleClose} className="bg-white border border-slate-200 hover:bg-slate-100 p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-slate-400 transition-colors shadow-sm shrink-0" aria-label="关闭搜索">
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="overflow-y-auto p-3 sm:p-4 flex-1 bg-slate-50/50 custom-scrollbar" role="listbox">
          {!query.trim() && (
            <div className="py-10 sm:py-16 text-center text-slate-400">
               <Compass className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 opacity-20" aria-hidden="true" />
               <p className="text-sm sm:text-base font-black text-slate-600">全局探索引擎</p>
               <p className="text-[11px] sm:text-xs mt-2 opacity-60 font-bold max-w-sm mx-auto leading-relaxed px-4">支持搜索模型名称 (如 Sora), 厂商 (如 深度求索), 开闭源状态，甚至核心特性。</p>
            </div>
          )}

          {query.trim() && results.length === 0 && (
            <div className="py-16 text-center text-slate-400">
               <Ghost className="w-16 h-16 mx-auto mb-6 opacity-20 animate-pulse" aria-hidden="true" />
               <p className="text-base font-black text-slate-600">暂无搜索结果</p>
               <p className="text-xs mt-2 opacity-60 font-bold">换个关键词试试？</p>
            </div>
          )}

          {results.map((res, idx) => {
            const LogoIcon = getIconComponent(res.vendor.logo);
            const isSelected = idx === selectedIndex;
            return (
              <div 
                key={`${res.domain.id}-${res.vendor.id}`} 
                role="option"
                aria-selected={isSelected}
                className={`bg-white p-3 sm:p-5 rounded-xl sm:rounded-[1.5rem] border mb-2 sm:mb-3 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-100 transition-all cursor-pointer group flex items-center gap-3 sm:gap-5 ${isSelected ? 'border-indigo-400 shadow-lg shadow-indigo-100 ring-2 ring-indigo-100' : 'border-slate-200'}`}
                onClick={() => onSelect(res.domain, res.vendor)}
                onMouseEnter={() => setSelectedIndex(idx)}
              >
                <div className={`p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 group-hover:bg-indigo-50 transition-colors shrink-0 ${res.vendor.logoColor}`}>
                  <LogoIcon className="w-5 h-5 sm:w-7 sm:h-7" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <h4 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{res.vendor.name}</h4>
                    <span className="text-[9px] sm:text-[10px] font-black bg-indigo-50 text-indigo-500 px-1.5 sm:px-2 py-0.5 rounded-lg border border-indigo-100 uppercase">{res.domain.name}</span>
                  </div>
                  
                  <div className="mt-1.5 sm:mt-2.5 flex flex-wrap gap-1.5 sm:gap-2">
                    {res.vendor.models.map((m) => {
                      const isMatch = m.name.toLowerCase().includes(query.toLowerCase());
                      return (
                        <div key={m.name} className={`flex items-center gap-1 text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg border ${isMatch ? 'bg-indigo-50 border-indigo-100 text-indigo-700' : 'bg-slate-50 border-slate-100 text-slate-500'}`}>
                           {m.name} <span className="opacity-50 font-normal hidden sm:inline">| {m.status}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="bg-slate-50 p-1.5 sm:p-2 rounded-full group-hover:bg-indigo-50 transition-colors shrink-0 hidden sm:block">
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-500 transition-colors" aria-hidden="true" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-100 px-4 sm:px-6 py-3 sm:py-4 border-t border-slate-200 flex justify-between items-center text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest">
           <div className="hidden sm:flex items-center gap-4 opacity-60">
             <div className="flex items-center gap-1.5">
               <ArrowUp className="w-3 h-3" /><ArrowDown className="w-3 h-3" />
               <span>导航</span>
             </div>
             <div className="flex items-center gap-1.5">
               <CornerDownLeft className="w-3 h-3" />
               <span>选择</span>
             </div>
           </div>
           <div className="flex items-center gap-2 opacity-60 mx-auto sm:mx-0">
             <span>Press</span>
             <kbd className="bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-500 shadow-sm font-sans">Esc</kbd>
             <span>to close</span>
           </div>
        </div>

      </div>
    </div>
  );
});

export default SearchModal;
