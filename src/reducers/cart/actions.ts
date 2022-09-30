import { Product } from './reducers'

export const CartActionTypes = {
  ADD_PRODUCT_TO_CART: 'ADD_PRODUCT_TO_CART',
  REMOVE_PRODUCT_TO_CART: 'REMOVE_PRODUCT_TO_CART',
}

export function addProductToCartAction(product: Product) {
  return {
    type: CartActionTypes.ADD_PRODUCT_TO_CART,
    payload: { product },
  }
}

export function removeProductToCartAction(id: string) {
  return {
    type: CartActionTypes.REMOVE_PRODUCT_TO_CART,
    payload: { product: { id } },
  }
}
