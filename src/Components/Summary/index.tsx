import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react"
import { SummaryContainer } from "./styles"

function Summary() {
  return(
    <SummaryContainer>
      <div>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>R$ 17.400,00</strong>
      </div>

      <div>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>R$ 17.400,00</strong>
      </div>

      <div>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#00b37e" />
        </header>

        <strong>R$ 17.400,00</strong>
      </div>
    </SummaryContainer>
  )
}

export default Summary