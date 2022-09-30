import produce from 'immer'

import { CartActionTypes } from './actions'

export type Product = {
  id: string
  name: string
  imageUrl: string
  price: number
  defaultPriceId: string
}

type CartState = {
  cart: Product[]
  total: number
}

type ActionType = {
  type: string
  payload: any
}

export function cartReduce(state: CartState, action: ActionType) {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT_TO_CART:
      return produce(state, (draft) => {
        const productIndex = draft.cart.findIndex(
          (findProduct) => findProduct.id === action.payload.product.id,
        )

        const hasProduct = productIndex >= 0

        if (!hasProduct) {
          draft.cart.push(action.payload.product)
          draft.total = draft.cart.reduce((acc, product) => {
            const total = acc + product.price

            return total
          }, 0)
        }
      })

    case CartActionTypes.REMOVE_PRODUCT_TO_CART:
      return produce(state, (draft) => {
        const productIndex = draft.cart.findIndex(
          (findProduct) => findProduct.id === action.payload.product.id,
        )

        const hasProduct = productIndex >= 0

        if (hasProduct) {
          draft.cart = draft.cart.filter(
            (findProduct) => findProduct.id !== action.payload.product.id,
          )
          draft.total = draft.cart.reduce((acc, product) => {
            const total = acc + product.price

            return total
          }, 0)
        }
      })

    default:
      return state
  }
}
