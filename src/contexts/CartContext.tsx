import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useReducer,
} from 'react'

import {
  addProductToCartAction,
  removeProductToCartAction,
} from '../reducers/cart/actions'
import { cartReduce, Product } from '../reducers/cart/reducers'

type CartContextProviderProps = {
  children: ReactNode
}

type CartContextData = {
  cart: Product[]
  total: number
  addProduct: (data: Product) => void
  removeProduct: (id: string) => void
}

const CartContext = createContext({} as CartContextData)

export function CartContextProvider(props: CartContextProviderProps) {
  const { children } = props

  const [cartState, dispatch] = useReducer(cartReduce, {
    cart: [],
    total: 0,
  })

  const { cart, total } = cartState

  const addProduct = useCallback((product: Product) => {
    dispatch(addProductToCartAction(product))
  }, [])

  const removeProduct = useCallback((id: string) => {
    dispatch(removeProductToCartAction(id))
  }, [])

  return (
    <CartContext.Provider value={{ cart, total, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
