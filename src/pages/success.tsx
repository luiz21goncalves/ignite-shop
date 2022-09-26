import { GetServerSideProps, NextPage } from 'next'
import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import { Stripe } from 'stripe'

import { stripe } from '../lib/stripe'
import * as S from '../styles/pages/success'

type SuccessProps = {
  customerName: string
  product: {
    name: string
    imageUrl: string
  }
}

const Success: NextPage<SuccessProps> = ({ customerName, product }) => {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <S.Container>
        <h1>Compra efetuada!</h1>

        <S.ImageContainer>
          <Image alt="" src={product.imageUrl} width={120} height={110} />
        </S.ImageContainer>

        <p>
          Uhuul <strong>{customerName}</strong>, sua{' '}
          <strong>{product.name}</strong> já está a caminho da sua casa.
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

  const product = session.line_items?.data[0].price?.product as Stripe.Product
  const customerName = session.customer_details?.name

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  }
}

export default Success
