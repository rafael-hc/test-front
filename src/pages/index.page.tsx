import Head from 'next/head'
import { Button } from '../@designSystem/Button'
import { Card } from '../components/card'
import { Footer } from '../components/footer'
import { BagContainer } from './styles'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Sacola - Beleza na Web</title>
      </Head>
      <BagContainer>
        <Card />
        <Card />
        <Card />
        <Card />
      </BagContainer>
      <Footer>
        <Button w-full type="button">
          Seguir para o pagamento
        </Button>
      </Footer>
    </>
  )
}
