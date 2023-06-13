import { ReactNode, createContext, useEffect, useState } from "react";

interface Transactions {
  id: number,
  price: number,
  type: 'income' | 'outcome',
  description: string,
  category: string,
  createdAt: string,
}

interface TransactionContextType {
  transactions: Transactions[];
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([])

  async function fetchTransactions(query?: string) {
    const url = new URL('http://localhost:3000/transactions');

    if (query) {
      url.searchParams.append('q', query);
    }

    const response = await fetch(url)
    const data = await response.json()

    setTransactions(data) 
  }

  useEffect(() => {
    fetchTransactions();
  }, [])

  return(
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export default TransactionsProvider