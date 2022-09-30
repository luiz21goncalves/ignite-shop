import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/future/image'
import Head from 'next/head'
import Stripe from 'stripe'

import { useCartContext } from '../../contexts/CartContext'
import { stripe } from '../../lib/stripe'
import * as S from '../../styles/pages/product'
import { formatMonetary } from '../../utils'

type Product = {
  id: string
  name: string
  imageUrl: string
  price: number
  formattedPrice: string
  description: string
  defaultPriceId: string
}

type ProductDetailsProps = {
  product: Product
}

const ProductDetails: NextPage<ProductDetailsProps> = (props) => {
  const { product } = props

  const { addProduct } = useCartContext()

  async function handleAddProductToCart() {
    addProduct(product)
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <S.Container>
        <S.ImageContainer>
          <Image src={product.imageUrl} alt="" width={520} height={480} />
        </S.ImageContainer>

        <S.ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.formattedPrice}</span>
          <p>{product.description}</p>
          <button onClick={handleAddProductToCart}>Colocar na sacola</button>
        </S.ProductDetails>
      </S.Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = String(params?.id)

  const {
    id,
    name,
    images,
    default_price: defaultPrice,
    description,
  } = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = defaultPrice as Stripe.Price

  const formattedPrice = formatMonetary(Number(price.unit_amount) / 100)

  const product = {
    id,
    name,
    imageUrl: images[0],
    price: price.unit_amount,
    formattedPrice,
    description,
    defaultPriceId: price.id,
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}

export default ProductDetails
