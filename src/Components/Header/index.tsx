import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"
import Logo from "../../assets/Logo.svg"
import * as Dialog from "@radix-ui/react-dialog"
import NewTransactionsModal from "../NewTransactionsModal"

function Header() {
  return(
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionsModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header