import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
const stripePromise = loadStripe(
  'pk_test_51Ist3IFae7EgjcoUEx3n71QOXTzd8bureSwSdLqZcNehw6fauNz1SsD3yA7Yni53qnFto2pRsa4couX7arU8hGkn00HbCoyOfJ'
);

const ProductDisplay = ({ handleClick }: { handleClick: any }) => (
  <section>
    <div className='product'>
      <img
        src='https://i.imgur.com/EHyR2nP.png'
        alt='The cover of Stubborn Attachments'
      />
      <div className='description'>
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
      </div>
    </div>
    <button
      type='button'
      id='checkout-button'
      role='link'
      onClick={handleClick}
    >
      Checkout
    </button>
  </section>
);

const Message = ({ message }: { message: string }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Payment() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setMessage('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const handleClick = async (_event: any) => {
    const stripe = await stripePromise;

    const response = await fetch('/payment', {
      method: 'POST',
    });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    if (stripe) {
      const result: any = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      }
    }
  };

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay handleClick={handleClick} />
  );
}
