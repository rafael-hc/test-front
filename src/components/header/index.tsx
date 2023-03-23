import { useRouter } from 'next/router'
import { HeaderContainer, TabContainer, TabItem } from './styles'

export function Header() {
  const a = useRouter()

  return (
    <HeaderContainer>
      <TabContainer>
        <TabItem href="/bag" selected={a.asPath === '/bag'}>
          Sacola
        </TabItem>
        <TabItem href="/payment" selected={a.asPath === '/payment'}>
          Pagamento
        </TabItem>
        <TabItem as="div" selected={a.asPath === '/success'}>
          Confirmação
        </TabItem>
      </TabContainer>
    </HeaderContainer>
  )
}
