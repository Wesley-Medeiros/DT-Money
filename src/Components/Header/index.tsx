import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"
import Logo from "../../assets/Logo.svg"

function Header() {
  return(
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} />
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header