import { useForm } from "react-hook-form"
import { SearchFormContainer } from "./styles"
import { MagnifyingGlass } from "phosphor-react"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContextSelector } from "use-context-selector"
import { TransactionsContext } from "../../../../Contexts/TransactionsContext"


const SearchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof SearchFormSchema>;

function SearchForm() {
  const fetchTransactions = useContextSelector(TransactionsContext, (context) => {
    return context.fetchTransactions
  })

  const { 
    register,
    handleSubmit,
    formState: {
      isSubmitting,
    }
   } = useForm<SearchFormInput>({
    resolver: zodResolver(SearchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInput) {
    await fetchTransactions(data.query)
  }

  return(
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input 
      type="text" 
      placeholder="Busque transações"
      autoComplete="off"
      {...register('query')}
       />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} /> Buscar
      </button>
    </SearchFormContainer>
  )
}

export default SearchForm
