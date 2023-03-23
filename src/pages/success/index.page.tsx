import Head from 'next/head'
import { Button } from '../../@designSystem/Button'
import { Footer } from '../../components/footer'

export default function Success() {
  return (
    <>
      <Head>
        <title>Compra concluída - Beleza na Web</title>
      </Head>
      <div>
        <h2>Success</h2>
      </div>
      <Footer>
        <Button w-full type="button">
          Seguir para o pagamento
        </Button>
      </Footer>
    </>
  )
}
