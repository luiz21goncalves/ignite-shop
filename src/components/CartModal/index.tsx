import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/future/image'
import { X } from 'phosphor-react'
import { ReactNode } from 'react'

import * as S from './styles'

type CartModalProps = {
  children: ReactNode
}

export function CartModal(props: CartModalProps) {
  const { children } = props

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />

        <S.Content>
          <Dialog.Title>Sacola de compras</Dialog.Title>

          <S.CartContent>
            <S.ProductList>
              <S.Product>
                <S.ImageContainer>
                  <Image
                    width={100}
                    height={94}
                    src="https://files.stripe.com/links/MDB8YWNjdF8xTGpzOHRJUERIMWlKQkNkfGZsX3Rlc3RfYm9aN0Q1bFlLdVROMFhydFhVS3ZpYUIy00igOhuA68"
                    alt=""
                  />
                </S.ImageContainer>

                <S.ProductContent>
                  <p>Camiseta Beyond the Limits</p>
                  <span>R$ 79,90</span>
                  <button>Remover</button>
                </S.ProductContent>
              </S.Product>

              <S.Product>
                <S.ImageContainer>
                  <Image
                    width={100}
                    height={94}
                    src="https://files.stripe.com/links/MDB8YWNjdF8xTGpzOHRJUERIMWlKQkNkfGZsX3Rlc3RfYm9aN0Q1bFlLdVROMFhydFhVS3ZpYUIy00igOhuA68"
                    alt=""
                  />
                </S.ImageContainer>

                <S.ProductContent>
                  <p>Camiseta Beyond the Limits</p>
                  <span>R$ 79,90</span>
                  <button>Remover</button>
                </S.ProductContent>
              </S.Product>
            </S.ProductList>

            <S.CartFooter>
              <div>
                <p>Quantidade</p>
                <p>2 itens</p>
              </div>

              <div>
                <span>Valor total</span>
                <span>R$ 270,00</span>
              </div>
              <button>Finalizar compra</button>
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
