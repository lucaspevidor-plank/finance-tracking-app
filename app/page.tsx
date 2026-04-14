const transactions = [
  { id: 1, description: "Spotify Premium", category: "Entertainment", amount: -9.99, date: "Apr 14", icon: "🎵" },
  { id: 2, description: "Salary Deposit", category: "Income", amount: 4200.0, date: "Apr 13", icon: "💼" },
  { id: 3, description: "Whole Foods", category: "Groceries", amount: -87.42, date: "Apr 12", icon: "🛒" },
  { id: 4, description: "Netflix", category: "Entertainment", amount: -15.49, date: "Apr 11", icon: "🎬" },
  { id: 5, description: "Electric Bill", category: "Utilities", amount: -134.0, date: "Apr 10", icon: "⚡" },
  { id: 6, description: "Freelance Payment", category: "Income", amount: 850.0, date: "Apr 9", icon: "💻" },
  { id: 7, description: "Amazon", category: "Shopping", amount: -62.18, date: "Apr 8", icon: "📦" },
];

const categories = [
  { name: "Housing", amount: 1400, color: "bg-violet-500" },
  { name: "Food", amount: 620, color: "bg-indigo-500" },
  { name: "Transport", amount: 280, color: "bg-blue-500" },
  { name: "Entertainment", amount: 145, color: "bg-sky-500" },
  { name: "Utilities", amount: 210, color: "bg-cyan-500" },
];

const totalBalance = 24_381.52;
const monthlyGoal = 5_000;

export default function Home() {
  const monthlyIncome = transactions
    .filter((tx) => tx.amount > 0)
    .reduce((sum, tx) => sum + tx.amount, 0);

  const monthlyExpenses = transactions
    .filter((tx) => tx.amount < 0)
    .reduce((sum, tx) => sum + Math.abs(tx.amount), 0);

  const savings = monthlyIncome - monthlyExpenses;
  const savingsRate = monthlyIncome > 0 ? Math.round((savings / monthlyIncome) * 100) : 0;
  const goalPct = Math.max(0, Math.min(Math.round((savings / monthlyGoal) * 100), 100));

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Navbar */}
      <header className="sticky top-0 z-10 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">💰</span>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              MoneyTracker
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
            <a href="#" className="text-violet-600 dark:text-violet-400">Dashboard</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Transactions</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Budget</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Reports</a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-sm font-semibold">
              L
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 space-y-10">
        {/* Greeting */}
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Good morning, Lucas 👋</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight">Financial Overview</h1>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          <SummaryCard
            label="Total Balance"
            value={`$${totalBalance.toLocaleString("en-US", { minimumFractionDigits: 2 })}`}
            change="+2.4% this month"
            positive
            icon="🏦"
            accent="from-violet-500 to-indigo-600"
            dark
          />
          <SummaryCard
            label="Monthly Income"
            value={`$${monthlyIncome.toLocaleString("en-US", { minimumFractionDigits: 2 })}`}
            change="+$850 freelance"
            positive
            icon="📈"
            accent="from-emerald-400 to-teal-500"
          />
          <SummaryCard
            label="Monthly Expenses"
            value={`$${monthlyExpenses.toLocaleString("en-US", { minimumFractionDigits: 2 })}`}
            change="-8.1% vs last month"
            positive
            icon="📉"
            accent="from-rose-400 to-pink-500"
          />
          <SummaryCard
            label="Net Savings"
            value={`$${savings.toLocaleString("en-US", { minimumFractionDigits: 2 })}`}
            change={`${savingsRate}% savings rate`}
            positive={savings >= 0}
            icon="🎯"
            accent="from-amber-400 to-orange-500"
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Recent Transactions */}
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

          {/* Spending Breakdown */}
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

            {/* Quick CTA */}
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
        </div>
      </main>
    </div>
  );
}

type SummaryCardProps = {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: string;
  accent: string;
  dark?: boolean;
};

function SummaryCard({ label, value, change, positive, icon, accent, dark }: SummaryCardProps) {
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
