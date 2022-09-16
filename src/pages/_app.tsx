import type { AppProps } from 'next/app'
import Image from 'next/future/image'

import logoImg from '../assets/logo.svg'
import { globalStyles } from '../styles/global'
import * as S from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <S.Container>
      <S.Header>
        <Image src={logoImg} alt="" />
      </S.Header>
      <Component {...pageProps} />
    </S.Container>
  )
}
