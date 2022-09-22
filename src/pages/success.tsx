import { NextPage } from 'next'
import Image from 'next/future/image'
import Link from 'next/link'

import * as S from '../styles/pages/success'

const Success: NextPage = () => {
  return (
    <S.Container>
      <h1>Compra efetuada!</h1>

      <S.ImageContainer>
        <Image />
      </S.ImageContainer>

      <p>
        Uhuul <strong>Diego Fernandes</strong>, sua{' '}
        <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua
        casa.
      </p>

      <Link href="/">
        <a>Voltar ao catálogo</a>
      </Link>
    </S.Container>
  )
}

export default Success
