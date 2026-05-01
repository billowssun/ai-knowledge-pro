interface EmptyStateProps {
  title: string;
  description: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 sm:py-20 px-4 bg-white rounded-2xl sm:rounded-[2.5rem] border border-dashed border-slate-200 text-center shadow-sm">
      <h4 className="text-sm sm:text-base font-black text-slate-500 mb-2">{title}</h4>
      <p className="text-[11px] sm:text-xs font-bold text-slate-400">{description}</p>
    </div>
  );
}
