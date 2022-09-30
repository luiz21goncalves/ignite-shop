import type { AppProps } from 'next/app'

import { Header } from '../components/Header'
import { CartContextProvider } from '../contexts/CartContext'
import { globalStyles } from '../styles/global'
import * as S from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <S.Container>
        <Header />
        <Component {...pageProps} />
      </S.Container>
    </CartContextProvider>
  )
}
