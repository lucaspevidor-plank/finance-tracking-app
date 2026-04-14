import type { Transaction } from "@/app/types/finance";

type Props = {
  transactions: Transaction[];
};

export default function TransactionList({ transactions }: Props) {
  return (
    <div className="xl:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <h2 className="text-base font-semibold">Recent Transactions</h2>
        <button className="text-xs font-medium text-violet-600 dark:text-violet-400 hover:underline">
          View all
        </button>
      </div>
      <ul>
        {transactions.map((tx, i) => (
          <li
            key={tx.id}
            className={`flex items-center justify-between px-6 py-4 ${
              i < transactions.length - 1
                ? "border-b border-slate-100 dark:border-slate-800"
                : ""
            } hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors`}
          >
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-lg">
                {tx.icon}
              </div>
              <div>
                <p className="text-sm font-medium">{tx.description}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{tx.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={`text-sm font-semibold ${
                  tx.amount > 0
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-slate-900 dark:text-slate-100"
                }`}
              >
                {tx.amount > 0 ? "+" : ""}
                {tx.amount.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p className="text-xs text-slate-400">{tx.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
