import { useKeenSlider } from 'keen-slider/react'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/future/image'
import Link from 'next/link'
import Stripe from 'stripe'

import { stripe } from '../lib/stripe'
import * as S from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'

type Product = {
  id: string
  name: string
  imageUrl: string
  price: number
}

type HomeProps = {
  products: Product[]
}

const Home: NextPage<HomeProps> = ({ products }) => {
  const [sliderRef] = useKeenSlider({
    slides: { perView: 3, spacing: 48 },
  })

  return (
    <S.Container ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`} passHref>
          <S.Product className="keen-slider__slide">
            <Image src={product.imageUrl} width={520} height={480} alt="" />

            <footer>
              <strong>{product.name}</strong>
              <span>R$ {product.price}</span>
            </footer>
          </S.Product>
        </Link>
      ))}
    </S.Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}

export default Home
