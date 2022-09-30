import Image from 'next/future/image'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'

import logoImg from '../../assets/logo.svg'
import { useCartContext } from '../../contexts/CartContext'
import { CartModal } from '../CartModal'
import * as S from './styles'

export function Header() {
  const { cart } = useCartContext()

  return (
    <S.Header>
      <div>
        <Link href="/" prefetch={false} passHref>
          <a>
            <Image src={logoImg} alt="" />
          </a>
        </Link>

        <CartModal>
          <S.CartButton data-amount={cart.length}>
            {cart.length > 0 && <S.Label>{cart.length}</S.Label>}

            <Handbag weight="bold" size={24} />
          </S.CartButton>
        </CartModal>
      </div>
    </S.Header>
  )
}
