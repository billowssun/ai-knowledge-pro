import { memo } from 'react';
import { Compass, Moon, Sun } from 'lucide-react';
import { getIconComponent } from '../utils/icons';
import { useTheme } from '../ThemeContext';
import type { Domain } from '../types';

interface HeaderProps {
  domainsData: Domain[];
  activeDomain: Domain;
  onDomainChange: (domain: Domain) => void;
}

const Header = memo(function Header({ domainsData, activeDomain, onDomainChange }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm" role="banner">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 h-14 sm:h-20 lg:h-24 flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
        
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="bg-slate-900 dark:bg-indigo-500 p-1.5 sm:p-2 lg:p-2.5 rounded-lg sm:rounded-xl text-white shadow-lg" aria-hidden="true">
            <Compass className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-base lg:text-xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">AI NAVIGATOR</h1>
            <p className="text-[10px] lg:text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5 sm:mt-1">2026 Edition</p>
          </div>
        </div>

        <div className="flex-1 min-w-0 relative">
          <div className="absolute top-0 bottom-0 left-0 w-4 bg-gradient-to-r from-white/90 dark:from-slate-900/90 to-transparent pointer-events-none z-10 sm:hidden"></div>
          <nav className="flex gap-1.5 sm:gap-2 lg:gap-3 overflow-x-auto no-scrollbar py-2 sm:py-3 lg:py-4 px-1 sm:px-2 flex-1 scroll-smooth min-w-0 relative" aria-label="领域导航">
            {domainsData.map((domain) => {
              const Icon = getIconComponent(domain.icon);
              const isActive = activeDomain?.id === domain.id;
              return (
                <button
                  key={domain.id}
                  onClick={() => onDomainChange(domain)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex-shrink-0 flex items-center gap-1 sm:gap-1.5 lg:gap-2 px-2.5 sm:px-3 lg:px-5 py-1.5 sm:py-2 lg:py-3 rounded-full text-[11px] sm:text-[10px] lg:text-xs font-black transition-all duration-300 border shadow-sm
                    ${isActive
                      ? 'bg-slate-900 dark:bg-indigo-500 text-white border-slate-800 dark:border-indigo-400 scale-105' 
                      : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700'
                    }`}
                >
                  <Icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 shrink-0 ${isActive ? 'text-indigo-400 dark:text-indigo-200' : 'text-slate-400 dark:text-slate-500'}`} aria-hidden="true" />
                  <span className="whitespace-nowrap">{domain.shortName || domain.name}</span>
                </button>
              );
            })}
          </nav>
          <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-white/90 dark:from-slate-900/90 to-transparent pointer-events-none z-10 sm:hidden"></div>
        </div>

        <button
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? '切换到浅色模式' : '切换到暗黑模式'}
          className="p-2 sm:p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0 ml-2"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
        </button>

      </div>
    </header>
  );
});

export default Header;
