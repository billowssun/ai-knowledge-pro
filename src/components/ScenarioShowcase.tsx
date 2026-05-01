import React, { memo } from 'react';
import { Lightbulb, ArrowRight } from 'lucide-react';
import { getIconComponent } from '../utils/icons';
import type { Domain, Scenario } from '../types';

interface ScenarioShowcaseProps {
  activeDomain: Domain;
}

interface ScenarioCardProps {
  scenario: Scenario;
}

function ScenarioCard({ scenario }: ScenarioCardProps) {
  const iconComponent = getIconComponent(scenario.icon);
  return (
    <div className="bg-slate-800/40 border border-slate-700/50 p-5 sm:p-6 rounded-2xl hover:border-indigo-500/40 hover:bg-slate-800/70 transition-all duration-300 group flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-indigo-500/20 border border-indigo-400/30 p-2 rounded-xl text-indigo-300 shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
          {React.createElement(iconComponent, {
            className: 'w-4 h-4 sm:w-5 sm:h-5',
            'aria-hidden': true,
          })}
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[11px] sm:text-[10px] font-black text-indigo-300 uppercase tracking-widest mb-0.5">
            {scenario.audience}
          </div>
          <h4 className="text-sm sm:text-base font-black text-white leading-tight truncate">
            {scenario.task}
          </h4>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium mb-4 flex-1">
        {scenario.desc}
      </p>

      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-700/50">
        <span className="text-[11px] sm:text-[10px] font-black text-slate-500 uppercase tracking-widest mr-1 self-center">
          常用工具
        </span>
        {scenario.tools.map((tool) => (
          <span
            key={tool}
            className="text-[10px] sm:text-[11px] font-bold bg-slate-900/60 text-slate-300 px-2 py-0.5 rounded-md border border-slate-700"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

const ScenarioShowcase = memo(function ScenarioShowcase({ activeDomain }: ScenarioShowcaseProps) {
  const scenarios = activeDomain?.scenarios;
  if (!scenarios || scenarios.length === 0) return null;

  return (
    <section className="bg-slate-900 text-slate-100 rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6 sm:mb-8 gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="bg-amber-400 p-2 rounded-xl shrink-0">
              <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg lg:text-xl font-black tracking-tight">
                AI 在身边能做什么
              </h3>
              <p className="text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-widest mt-0.5">
                Real-World Scenarios
              </p>
            </div>
          </div>
          <div className="text-[10px] sm:text-xs font-black text-slate-500 hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/60 rounded-full border border-slate-700">
            <ArrowRight className="w-3 h-3 text-amber-400" aria-hidden="true" />
            从你身边的真实需求出发
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {scenarios.map((s) => (
            <ScenarioCard key={`${s.audience}-${s.task}`} scenario={s} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default ScenarioShowcase;
