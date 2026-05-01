import { memo, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { colorClasses } from '../utils/styles';
import { getIconComponent } from '../utils/icons';
import { renderNarrative } from '../utils/renderNarrative';
import type { Domain } from '../types';

interface DomainContentProps {
  activeDomain: Domain;
}

const DomainContent = memo(function DomainContent({ activeDomain }: DomainContentProps) {
  const [showTechnical, setShowTechnical] = useState(false);
  const styles = colorClasses[activeDomain?.color || 'indigo'];
  const IconComponent = getIconComponent(activeDomain?.icon);
  const hasSimple = !!activeDomain?.principles?.simple;

  return (
    <section className="bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
      <div className={`absolute top-0 right-0 w-80 h-80 ${styles.bgBlur} blur-[100px] -mr-32 -mt-32`}></div>
      <div className="relative z-10">
        <div className="flex flex-col gap-4 mb-6 sm:mb-8">
          <div className="flex items-start gap-4">
            <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl ${styles.bgLight} ${styles.textMain} shadow-sm shrink-0`}>
              <IconComponent className="w-5 h-5" aria-hidden="true" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight pt-1">{activeDomain?.principles?.title}</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {activeDomain?.techSpecs?.map((spec) => (
              <span key={spec.label} className="text-[10px] sm:text-[11px] font-black bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 sm:px-2.5 py-1 rounded-lg border border-slate-100 dark:border-slate-700 uppercase whitespace-nowrap">{spec.value}</span>
            ))}
          </div>
        </div>

        {hasSimple && (
          <div className={`relative mb-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl ${styles.bgLight} border ${styles.bgLight} border-opacity-50`}>
            <div className="flex items-start gap-2.5">
              <Sparkles className={`w-4 h-4 sm:w-5 sm:h-5 ${styles.textMain} shrink-0 mt-0.5`} aria-hidden="true" />
              <div className="flex-1 min-w-0">
                <div className={`text-[10px] sm:text-xs font-black ${styles.textMain} uppercase tracking-widest mb-1.5`}>
                  人话版
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base font-medium">
                  {activeDomain.principles.simple}
                </p>
              </div>
            </div>
          </div>
        )}

        {hasSimple ? (
          <details
            open={showTechnical}
            onToggle={(e) => setShowTechnical((e.target as HTMLDetailsElement).open)}
            className="mb-8 sm:mb-10"
          >
            <summary className="flex items-center gap-2 text-xs sm:text-sm font-black text-slate-500 hover:text-slate-900 transition-colors cursor-pointer list-none uppercase tracking-widest py-2">
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showTechnical ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
              {showTechnical ? '收起技术演进' : '展开技术演进 (从起源到今天)'}
            </summary>
            <div className="mt-4">{renderNarrative(activeDomain.principles.content)}</div>
          </details>
        ) : (
          <div className="mb-8 sm:mb-10">{renderNarrative(activeDomain?.principles?.content)}</div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-slate-100 dark:border-slate-700">
          {activeDomain?.stats?.map((stat) => {
            const displayValue = stat.display ? stat.display : stat.unit ? `${stat.value}${stat.unit}` : `${stat.value}%`;
            const barWidth = Math.min(stat.value, 100);
            return (
            <div key={stat.id} className="space-y-2 sm:space-y-3">
              <div className="flex justify-between items-center text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-wider sm:tracking-widest">
                <span className="truncate mr-2">{stat.label}</span>
                <span className="text-slate-900 shrink-0">{displayValue}</span>
              </div>
              <div className="h-2 sm:h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full ${styles.bgMain} rounded-full transition-all duration-1000 ease-out`} style={{width: `${barWidth}%`}}></div>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
});

export default DomainContent;
