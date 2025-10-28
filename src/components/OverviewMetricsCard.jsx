import { memo } from "react";

function OverviewMetricsCardBase({ title, value, subtext, icon: Icon, accent = "from-cyan-500 to-teal-500" }) {
  return (
    <div className="group relative rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/70 backdrop-blur p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className={`absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${accent} blur-lg`} aria-hidden />
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <div className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">{title}</div>
          <div className="mt-2 text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-neutral-100">{value}</div>
          {subtext ? (
            <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{subtext}</div>
          ) : null}
        </div>
        {Icon ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200">
            <Icon size={18} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

const OverviewMetricsCard = memo(OverviewMetricsCardBase);
export default OverviewMetricsCard;
