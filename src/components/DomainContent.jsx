import React from 'react';
import { colorClasses } from '../utils/styles';
import * as Icons from 'lucide-react';

export default function DomainContent({ activeDomain }) {
  const styles = colorClasses[activeDomain?.color || 'indigo'];
  const IconComponent = Icons[activeDomain?.icon === 'ImageIcon' ? 'Image' : activeDomain?.icon] || Icons.Box;

  return (
    <section className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm relative overflow-hidden">
      <div className={`absolute top-0 right-0 w-80 h-80 ${styles.bgBlur} blur-[100px] -mr-32 -mt-32`}></div>
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-5">
            <div className={`p-4 rounded-2xl ${styles.bgLight} ${styles.textMain} shadow-sm`}>
              <IconComponent className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">{activeDomain?.principles?.title}</h2>
              <div className="flex gap-2 mt-2">
                {activeDomain?.techSpecs?.map((spec) => (
                  <span key={spec.label} className="text-[11px] md:text-xs font-black bg-slate-50 text-slate-500 px-2.5 py-1 rounded-lg border border-slate-100 uppercase">{spec.value}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-slate-600 leading-relaxed text-lg font-medium text-justify mb-10">{activeDomain?.principles?.content}</p>
        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100">
          {activeDomain?.stats?.map((stat) => (
            <div key={stat.id} className="space-y-3">
              <div className="flex justify-between items-center text-xs font-black text-slate-500 uppercase tracking-widest">
                <span>{stat.label}</span>
                <span className="text-slate-900">{stat.value}%</span>
              </div>
              <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full ${styles.bgMain} rounded-full transition-all duration-1000 ease-out`} style={{width: `${stat.value}%`}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
