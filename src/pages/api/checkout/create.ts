import { NextApiRequest, NextApiResponse } from 'next'

import { stripe } from '../../../lib/stripe'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { priceId } = req.body

    if (!priceId) {
      return res.status(400).json({
        error: 'Price not found.',
      })
    }

    const successUrl = `${process.env.NEXT_URL}/success`
    const cancelUrl = `${process.env.NEXT_URL}/`

    const sessionCheckout = await stripe.checkout.sessions.create({
      success_url: successUrl,
      cancel_url: cancelUrl,
      mode: 'payment',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
    })

    return res.status(201).json({
      checkoutUrl: sessionCheckout.url,
    })
  }

  return res.status(405).end()
}
