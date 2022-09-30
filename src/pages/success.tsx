import { GetServerSideProps, NextPage } from 'next'
import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import { Stripe } from 'stripe'

import { stripe } from '../lib/stripe'
import * as S from '../styles/pages/success'

type Product = {
  id: string
  imageUrl: string
}

type SuccessProps = {
  customerName: string
  products: Product[]
}

const Success: NextPage<SuccessProps> = (props) => {
  const { customerName, products } = props

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <S.Container>
        <div>
          {products.map((product) => (
            <S.ImageContainer key={product.id}>
              <Image alt="" src={product.imageUrl} width={140} height={140} />
            </S.ImageContainer>
          ))}
        </div>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{' '}
          <strong>{products.length}</strong> camisetas já está a caminho da sua
          casa.
        </p>

        <Link href="/">
          <a>Voltar ao catálogo</a>
        </Link>
      </S.Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = query.session_id as string

  if (!sessionId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const products = session.line_items?.data.map((item) => {
    const product = item.price?.product as Stripe.Product

    return {
      id: product?.id,
      imageUrl: product?.images[0],
    }
  })
  const customerName = session.customer_details?.name
    ?.toLowerCase()
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())

  return {
    props: {
      customerName,
      products,
    },
  }
}

export default Success
