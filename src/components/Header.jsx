import React from 'react';
import { Zap } from 'lucide-react';

export default function Header({ domainsData, activeDomain, onDomainChange }) {
  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-100">
            <Zap className="w-5 h-5 text-white fill-white" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter text-slate-900 uppercase">AI NAVIGATOR <span className="text-indigo-600">百科</span></h1>
            <p className="text-xs font-black text-slate-400 tracking-widest uppercase">Global AI Ecosystem • v2026.04</p>
          </div>
        </div>
        <nav className="flex bg-slate-100 p-1 rounded-full border border-slate-200 shadow-inner overflow-x-auto no-scrollbar max-w-full">
          {domainsData.map(d => (
            <button 
              key={d.id}
              onClick={() => onDomainChange(d)}
              role="tab"
              aria-selected={activeDomain?.id === d.id}
              className={`px-6 py-2 rounded-full text-xs font-black transition-all whitespace-nowrap ${activeDomain?.id === d.id ? 'bg-white text-indigo-700 shadow-md scale-105' : 'text-slate-500 hover:text-slate-900'}`}
            >
              {d.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
