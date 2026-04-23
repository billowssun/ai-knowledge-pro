import React from 'react';
import { Compass } from 'lucide-react';
import * as Icons from 'lucide-react';

export default function Header({ domainsData, activeDomain, onDomainChange }) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 h-14 sm:h-20 lg:h-24 flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
        
        {/* Logo Area */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="bg-slate-900 p-1.5 sm:p-2 lg:p-2.5 rounded-lg sm:rounded-xl text-white shadow-lg"><Compass className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" /></div>
          <div className="hidden sm:block">
            <h1 className="text-base lg:text-xl font-black text-slate-900 tracking-tighter leading-none">AI NAVIGATOR</h1>
            <p className="text-[8px] lg:text-[9px] font-black text-slate-400 uppercase tracking-widest mt-0.5 sm:mt-1">2026 Edition</p>
          </div>
        </div>

        {/* Scrollable Tabs */}
        <div className="flex gap-1.5 sm:gap-2 lg:gap-3 overflow-x-auto no-scrollbar py-2 sm:py-3 lg:py-4 px-1 sm:px-2 flex-1 scroll-smooth min-w-0">
          {domainsData.map((domain) => {
            const Icon = Icons[domain.icon === 'ImageIcon' ? 'Image' : domain.icon] || Icons.Box;
            return (
              <button
                key={domain.id}
                onClick={() => onDomainChange(domain)}
                className={`flex-shrink-0 flex items-center gap-1 sm:gap-1.5 lg:gap-2 px-2.5 sm:px-3 lg:px-5 py-1.5 sm:py-2 lg:py-3 rounded-full text-[9px] sm:text-[10px] lg:text-xs font-black transition-all duration-300 border shadow-sm
                  ${activeDomain?.id === domain.id 
                    ? 'bg-slate-900 text-white border-slate-800 scale-105' 
                    : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-800 hover:bg-slate-50'
                  }`}
              >
                <Icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 shrink-0 ${activeDomain?.id === domain.id ? 'text-indigo-400' : 'text-slate-400'}`} />
                <span className="whitespace-nowrap hidden xl:inline">{domain.name}</span>
                <span className="whitespace-nowrap xl:hidden">{domain.shortName || domain.name}</span>
              </button>
            );
          })}
        </div>


      </div>
    </header>
  );
}
