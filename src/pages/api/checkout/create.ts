import { NextApiRequest, NextApiResponse } from 'next'

import { stripe } from '../../../lib/stripe'

type Product = {
  priceId: string
}

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const products = req.body.products as Product[]

    if (products.length === 0) {
      return res.status(400).json({
        error: 'Products not found.',
      })
    }

    const items = products.map((product) => ({
      quantity: 1,
      price: product.priceId,
    }))

    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${process.env.NEXT_URL}/`

    const sessionCheckout = await stripe.checkout.sessions.create({
      success_url: successUrl,
      cancel_url: cancelUrl,
      mode: 'payment',
      line_items: items,
    })

    return res.status(201).json({
      checkoutUrl: sessionCheckout.url,
    })
  }

  return res.status(405).end()
}
