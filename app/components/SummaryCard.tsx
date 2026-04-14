export type SummaryCardProps = {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: string;
  accent: string;
  dark?: boolean;
};

export default function SummaryCard({ label, value, change, positive, icon, accent, dark }: SummaryCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-5 overflow-hidden shadow-sm ${
        dark
          ? `bg-gradient-to-br ${accent} text-white`
          : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className={`text-xs font-medium ${dark ? "text-white/70" : "text-slate-500 dark:text-slate-400"}`}>
            {label}
          </p>
          <p className={`mt-2 text-2xl font-bold tracking-tight ${dark ? "text-white" : ""}`}>
            {value}
          </p>
        </div>
        <div
          className={`h-10 w-10 rounded-xl flex items-center justify-center text-xl ${
            dark ? "bg-white/15" : "bg-slate-100 dark:bg-slate-800"
          }`}
        >
          {icon}
        </div>
      </div>
      <p
        className={`mt-3 text-xs font-medium ${
          dark
            ? "text-white/70"
            : positive
            ? "text-emerald-600 dark:text-emerald-400"
            : "text-rose-600 dark:text-rose-400"
        }`}
      >
        {change}
      </p>
    </div>
  );
}
