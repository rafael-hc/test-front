import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../styles/theme'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta
          name="description"
          content="Author: Beleza na Web,
          Illustrator: Rafael Henrique, Category: Beauty, Price: $17.99,
    Length: 3 pages"
        />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
