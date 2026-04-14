import type { Transaction, Category } from "@/app/types/finance";

export const transactions: Transaction[] = [
  { id: 1, description: "Spotify Premium", category: "Entertainment", amount: -9.99, date: "Apr 14", icon: "🎵" },
  { id: 2, description: "Salary Deposit", category: "Income", amount: 4200.0, date: "Apr 13", icon: "💼" },
  { id: 3, description: "Whole Foods", category: "Groceries", amount: -87.42, date: "Apr 12", icon: "🛒" },
  { id: 4, description: "Netflix", category: "Entertainment", amount: -15.49, date: "Apr 11", icon: "🎬" },
  { id: 5, description: "Electric Bill", category: "Utilities", amount: -134.0, date: "Apr 10", icon: "⚡" },
  { id: 6, description: "Freelance Payment", category: "Income", amount: 850.0, date: "Apr 9", icon: "💻" },
  { id: 7, description: "Amazon", category: "Shopping", amount: -62.18, date: "Apr 8", icon: "📦" },
];

export const categories: Category[] = [
  { name: "Housing", amount: 1400, color: "bg-violet-500" },
  { name: "Food", amount: 620, color: "bg-indigo-500" },
  { name: "Transport", amount: 280, color: "bg-blue-500" },
  { name: "Entertainment", amount: 145, color: "bg-sky-500" },
  { name: "Utilities", amount: 210, color: "bg-cyan-500" },
];

export const totalBalance = 24_381.52;
export const monthlyGoal = 5_000;
