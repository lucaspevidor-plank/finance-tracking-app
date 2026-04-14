import type { Category } from "@/app/types/finance";

type Props = {
  categories: Category[];
  monthlyIncome: number;
  monthlyGoal: number;
  goalPct: number;
};

export default function SpendingBreakdown({ categories, monthlyIncome, monthlyGoal, goalPct }: Props) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800">
        <h2 className="text-base font-semibold">Spending Breakdown</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">April 2026</p>
      </div>
      <div className="px-6 py-5 space-y-5">
        {categories.map((cat) => {
          const pct = monthlyIncome > 0
            ? Math.min(Math.round((cat.amount / monthlyIncome) * 100), 100)
            : 0;
          return (
            <div key={cat.name}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-medium">{cat.name}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  ${cat.amount.toLocaleString()}
                </span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className={`h-full rounded-full ${cat.color}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="text-xs text-slate-400 mt-1">{pct}% of income</p>
            </div>
          );
        })}
      </div>

      <div className="px-6 pb-6">
        <div className="rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 p-4 text-white">
          <p className="text-xs font-medium opacity-80">Monthly goal</p>
          <p className="text-2xl font-bold mt-0.5">${monthlyGoal.toLocaleString()}</p>
          <p className="text-xs opacity-70 mt-1">
            {goalPct >= 100
              ? "Goal reached — amazing!"
              : goalPct >= 50
              ? "You're on track — great job!"
              : "Keep going — you can do it!"}
          </p>
          <div className="mt-3 h-1.5 rounded-full bg-white/20 overflow-hidden">
            <div className="h-full rounded-full bg-white" style={{ width: `${goalPct}%` }} />
          </div>
          <p className="text-xs opacity-70 mt-1">{goalPct}% saved</p>
        </div>
      </div>
    </div>
  );
}
