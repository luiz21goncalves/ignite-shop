import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/future/image'
import Stripe from 'stripe'

import { stripe } from '../../lib/stripe'
import * as S from '../../styles/pages/product'
import { formatMonetary } from '../../utils'

type Product = {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
}

type ProductDetailsProps = {
  product: Product
}

const ProductDetails: NextPage<ProductDetailsProps> = ({ product }) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <Image src={product.imageUrl} alt="" width={520} height={480} />
      </S.ImageContainer>

      <S.ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button>Comprar agora</button>
      </S.ProductDetails>
    </S.Container>
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
    price: formattedPrice,
    description,
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}

export default ProductDetails
