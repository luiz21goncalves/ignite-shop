import type { AppProps } from 'next/app'
import Image from 'next/future/image'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'

import logoImg from '../assets/logo.svg'
import { CartModal } from '../components/CartModal'
import { globalStyles } from '../styles/global'
import * as S from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <S.Container>
      <S.Header>
        <div>
          <Link href="/" prefetch={false} passHref>
            <a>
              <Image src={logoImg} alt="" />
            </a>
          </Link>

          <CartModal>
            <S.CartButton>
              <Handbag weight="bold" size={24} />
            </S.CartButton>
          </CartModal>
        </div>
      </S.Header>
      <Component {...pageProps} />
    </S.Container>
  )
}
