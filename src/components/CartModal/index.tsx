import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import Image from 'next/future/image'
import { X } from 'phosphor-react'
import { ReactNode, useState } from 'react'

import { useCartContext } from '../../contexts/CartContext'
import { formatMonetary } from '../../utils'
import * as S from './styles'

type CartModalProps = {
  children: ReactNode
}

export function CartModal(props: CartModalProps) {
  const { children } = props

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const { cart, total, removeProduct } = useCartContext()

  function handleRemoveProduct(id: string) {
    removeProduct(id)
  }

  async function handleBuyProducts() {
    try {
      setIsCreatingCheckoutSession(true)

      const products = cart.map((product) => ({
        priceId: product.defaultPriceId,
      }))

      const { data } = await axios.post<{ checkoutUrl: string }>(
        '/api/checkout/create',
        {
          products,
        },
      )

      const { checkoutUrl } = data

      window.location.href = checkoutUrl
    } catch (err) {
      alert('Falha ao redirecionar para checkout')
    } finally {
      setIsCreatingCheckoutSession(false)
    }
  }

  const isDisabledCheckoutButton = isCreatingCheckoutSession || cart.length <= 0

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />

        <S.Content>
          <Dialog.Title>Sacola de compras</Dialog.Title>

          <S.CartContent>
            <S.ProductList>
              {cart.map((product) => (
                <S.Product key={product.id}>
                  <S.ImageContainer>
                    <Image
                      width={100}
                      height={94}
                      src={product.imageUrl}
                      alt=""
                    />
                  </S.ImageContainer>

                  <S.ProductContent>
                    <p>{product.name}</p>
                    <span>{formatMonetary(product.price / 100)}</span>
                    <button onClick={() => handleRemoveProduct(product.id)}>
                      Remover
                    </button>
                  </S.ProductContent>
                </S.Product>
              ))}
            </S.ProductList>

            <S.CartFooter>
              <div>
                <p>Quantidade</p>
                <p>{cart.length} itens</p>
              </div>

              <div>
                <span>Valor total</span>
                <span>{formatMonetary(total / 100)}</span>
              </div>
              <button
                disabled={isDisabledCheckoutButton}
                onClick={handleBuyProducts}
              >
                Finalizar compra
              </button>
            </S.CartFooter>
          </S.CartContent>

          <S.CloseButton>
            <X weight="bold" size={16} />
          </S.CloseButton>
        </S.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
