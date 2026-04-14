import { transactions, categories, totalBalance, monthlyGoal } from "@/app/lib/mock-data";
import Navbar from "@/app/components/Navbar";
import SummaryCard from "@/app/components/SummaryCard";
import TransactionList from "@/app/components/TransactionList";
import SpendingBreakdown from "@/app/components/SpendingBreakdown";

export default function DashboardPage() {
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
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10 space-y-10">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Good morning, Lucas 👋</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight">Financial Overview</h1>
        </div>

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
          <TransactionList transactions={transactions} />
          <SpendingBreakdown
            categories={categories}
            monthlyIncome={monthlyIncome}
            monthlyGoal={monthlyGoal}
            goalPct={goalPct}
          />
        </div>
      </main>
    </div>
  );
}
