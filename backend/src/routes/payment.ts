const stripe = require('stripe')(
  'sk_test_51Ist3IFae7EgjcoUylQslyebXukzXaOWK6e9dKNWbPTonKfZBxN2EVg0xylcGnpA9FOKuNejfMudfK7aN1pzc8zR009VFJFHhO'
);
const express = require('express');
export const router = express.Router();
const bodyParser = require('body-parser');

const YOUR_DOMAIN = 'http://localhost:8080';

router.post('/', async (_req: any, res: any) => {
  console.log('req recieved');
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Stubborn Attachments',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:3000/pricing`,
    cancel_url: `${YOUR_DOMAIN}/cancel`,
  });
  res.json({ id: session.id });
});

// Webhook that recieves request when order has been completed

// Find your endpoint's secret in your Dashboard's webhook settings
const endpointSecret = 'whsec_w0sBDDQbe2XL5PQ0cCFuXALQcRKp0tTn';

const fulfillOrder = (session: any) => {
  // TODO: fill me in
  console.log('Fulfilling order', session);
};

router.post(
  '/webhook',
  bodyParser.raw({ type: 'application/json' }),
  (
    request: { body: any; headers: { [x: string]: any } },
    response: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        send: { (arg0: string): any; new (): any };
      };
    }
  ) => {
    const payload = request.body;
    const sig = request.headers['stripe-signature'];

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      return response.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      console.log('hello');
      // Fulfill the purchase...
      fulfillOrder(session);
    }

    response.status(200);
  }
);
