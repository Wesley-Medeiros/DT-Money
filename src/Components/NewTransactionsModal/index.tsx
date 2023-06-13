import * as Dialog from "@radix-ui/react-dialog"
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles"
import { ArrowCircleUp, ArrowCircleDown, X } from "phosphor-react"
import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { useContextSelector } from "use-context-selector"
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { TransactionsContext } from "../../Contexts/TransactionsContext";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
});

type NewTransactionsFormInputs = z.infer<typeof newTransactionFormSchema>


function NewTransactionsModal() {
  const  createTransaction  = useContextSelector(TransactionsContext, (context) => {
    return  context.createTransaction
  })

  const { 
    control,
    register,
    handleSubmit,
    reset,
    formState: {
      isSubmitting
     }

    } = useForm<NewTransactionsFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  });

   async function handleCreateNewTransaction(data: NewTransactionsFormInputs) {
    const { description, category, price, type } = data

    await createTransaction({
      description,
      category,
      price,
      type,
    })

    

    reset()
  }
  
  return(
    <Dialog.Portal>
            <Overlay />

            <Content>
              <Dialog.Title>Nova transação</Dialog.Title>

              <CloseButton>
                <X size={24} />
              </CloseButton>

              <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                <input 
                type="text" 
                placeholder="Descrição"
                autoComplete="off" 
                required 
                {...register('description')}
                />
                <input 
                type="number" 
                placeholder="Preço" 
                autoComplete="off"
                required 
                {...register('price', {valueAsNumber: true})}
                />
                <input 
                type="text" 
                placeholder="Categoria"
                autoComplete="off" 
                required 
                {...register('category')}
                />

                <Controller
                  control={control}
                  name="type"
                  render={({ field }) => {
                    return(
                      <TransactionType onValueChange={field.onChange} value={field.value}>
                        <TransactionTypeButton variant="income" value="income">
                          <ArrowCircleUp size={24} />
                            Entrada
                          </TransactionTypeButton>

                        <TransactionTypeButton variant="outcome" value="outcome">
                          <ArrowCircleDown size={24} />
                            saída
                        </TransactionTypeButton>
                      </TransactionType> 
                    )
                  }}
                 />

                <button type="submit" disabled={isSubmitting}>
                  Cadastrar
                </button>
              </form>
              
            </Content>
          </Dialog.Portal>
  )
}

export default NewTransactionsModal