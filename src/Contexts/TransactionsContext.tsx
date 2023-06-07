import { ReactNode, createContext, useEffect, useState } from "react";

interface Transactions {
  id: number,
  price: number,
  type: 'income' | 'outcome',
  description: string,
  category: string,
  createdAt: string,
}

interface TrasactionContextType {
  transactions: Transactions[];
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TrasactionsContext = createContext({} as TrasactionContextType);

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
    <TrasactionsContext.Provider value={{ transactions }}>
      {children}
    </TrasactionsContext.Provider>
  )
}

export default TransactionsProvider