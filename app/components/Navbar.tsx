export default function Navbar() {
  return (
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
  );
}
