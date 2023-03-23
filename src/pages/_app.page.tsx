import type { AppProps } from 'next/app'
import { Layout } from '../components/layout'
import { globalStyles } from '../styles/global'

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
