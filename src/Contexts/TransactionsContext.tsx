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
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([])

  async function loadTransactions() {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()

    setTransactions(data) 
  }

  useEffect(() => {
    loadTransactions();
  }, [])

  return(
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export default TransactionsProvider