import { ReactNode } from 'react'
import { formatCurrencyToBrl } from '../../utils/formaterCurrency'
import {
  Discount,
  FooterContainer,
  ItemSpecification,
  OrderSpecification,
} from './styles'

interface FooterProps {
  children: ReactNode
}

export function Footer({ children }: FooterProps) {
  return (
    <FooterContainer>
      <OrderSpecification>
        <ItemSpecification>
          <span>Produtos: (3 itens)</span>
          <span>{formatCurrencyToBrl(624.8)}</span>
        </ItemSpecification>
        <ItemSpecification>
          <span>Frete:</span>
          <span>{formatCurrencyToBrl(5.3)}</span>
        </ItemSpecification>
        <ItemSpecification>
          <span>Desconto:</span>
          <Discount>{formatCurrencyToBrl(30)}</Discount>
        </ItemSpecification>
        <ItemSpecification isSubtotal>
          <span>Subtotal</span>
          <span>{formatCurrencyToBrl(600.1)}</span>
        </ItemSpecification>
      </OrderSpecification>
      {children}
    </FooterContainer>
  )
}
