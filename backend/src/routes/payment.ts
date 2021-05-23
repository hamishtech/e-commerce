const stripe = require('stripe')(
  'sk_test_51Ist3IFae7EgjcoUylQslyebXukzXaOWK6e9dKNWbPTonKfZBxN2EVg0xylcGnpA9FOKuNejfMudfK7aN1pzc8zR009VFJFHhO'
);
const express = require('express');
export const router = express.Router();
const bodyParser = require('body-parser');
import { itemData } from '../productData/paymentData';
var nodemailer = require('nodemailer');

router.post('/', async (req: any, res: any) => {
  const item = itemData.find((item) => {
    return item.id === req.body.id;
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item?.title,
            images: [item?.img],
          },
          unit_amount: item?.price,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `https://hb-resumeshop.herokuapp.com/success`,
    cancel_url: `https://hb-resumeshop.herokuapp.com/cancel`,
    metadata: item ? { ITEM_ID: item.id } : null,
  });
  res.json({ id: session.id });
});

// Webhook that recieves request when order has been completed
const endpointSecret = 'whsec_w0sBDDQbe2XL5PQ0cCFuXALQcRKp0tTn';

const fulfillOrder = (session: any) => {
  console.log('Fulfilling order', session);

  var mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hamishcoding@gmail.com',
      pass: 'Firefox12!',
    },
  });

  var message = {
    from: 'hamishcoding@gmail.com',
    to: session.customer_details.email,
    subject: 'Message title',
    text: 'Thank you for your purchase',
    html: '<p>Please find your purchased template attached</p>',
    attachment: [
      {
        filename: 'text1.txt',
        content: 'hello world!',
      },
    ],
  };

  mail.sendMail(message, function (error: any, _info: any) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent:');
    }
  });
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
      console.log(err);
      return response.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      // Fulfill the purchase...
      fulfillOrder(session);
    }

    response.status(200);
  }
);
