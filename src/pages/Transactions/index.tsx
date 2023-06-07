import { useContext } from "react"
import Header from "../../Components/Header"
import Summary from "../../Components/Summary"
import SearchForm from "./components/SearchFrom"
import { PriceHighlight, TransactionsConatiner, TransactionsTable } from "./styles"
import { TransactionsContext } from "../../Contexts/TransactionsContext"

function Transactions() {
  const { transactions } = useContext(TransactionsContext);
  
  return(
    <div>
      <Header />
      <Summary />

      <TransactionsConatiner>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(transactions => {
              return (
                <tr key={transactions.id}>
                  <td width='50%'>{transactions.description}</td>
                  <td>
                    <PriceHighlight variant={transactions.type }>
                        {transactions.price}
                      </PriceHighlight>
                    </td>
                    <td>{transactions.category}</td>
                    <td>{transactions.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsConatiner>
      
    </div>
  )
}

export default Transactions