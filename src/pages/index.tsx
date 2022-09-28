import { useKeenSlider } from 'keen-slider/react'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'
import Stripe from 'stripe'

import { stripe } from '../lib/stripe'
import * as S from '../styles/pages/home'
import { formatMonetary } from '../utils'

import 'keen-slider/keen-slider.min.css'

type Product = {
  id: string
  name: string
  imageUrl: string
  price: string
}

type HomeProps = {
  products: Product[]
}

const Home: NextPage<HomeProps> = ({ products }) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <S.Container ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <S.Product key={product.id} className="keen-slider__slide">
            <Image src={product.imageUrl} width={520} height={480} alt="" />

            <S.ProductFooter>
              <div>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </div>

              <Link href={`/product/${product.id}`} passHref prefetch={false}>
                <a>
                  <Handbag size={32} weight="bold" />
                </a>
              </Link>
            </S.ProductFooter>
          </S.Product>
        ))}
      </S.Container>
    </>
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
      price: formatMonetary(Number(price.unit_amount) / 100),
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
