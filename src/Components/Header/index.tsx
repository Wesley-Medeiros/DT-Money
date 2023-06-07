import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"
import Logo from "../../assets/Logo.svg"
import * as Dialog from "@radix-ui/react-dialog"

function Header() {
  return(
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay />

            <Dialog.Content>
              <Dialog.Title>Nova transação</Dialog.Title>
              
              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header