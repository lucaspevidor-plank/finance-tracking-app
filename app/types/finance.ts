export interface Transaction {
  id: number;
  description: string;
  category: string;
  amount: number;
  date: string;
  icon: string;
}

export interface Category {
  name: string;
  amount: number;
  color: string;
}
