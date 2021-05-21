import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Button, Typography } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { loadStripe } from '@stripe/stripe-js';
import { Tiles } from '../../pages/Preview';

const stripePromise = loadStripe(
  'pk_test_51Ist3IFae7EgjcoUEx3n71QOXTzd8bureSwSdLqZcNehw6fauNz1SsD3yA7Yni53qnFto2pRsa4couX7arU8hGkn00HbCoyOfJ'
);

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselRoot: {
    maxWidth: '50vh',
  },
}));

export default function TemplateCarousel({
  resumeData,
}: {
  resumeData: Array<Tiles>;
}) {
  const classes = useStyles();
  const handleClick = async (id: string) => {
    const stripe = await stripePromise;
    const response = await fetch('/payment', {
      // Adding method type
      method: 'POST',
      // Adding body or contents to send
      body: JSON.stringify({ id: id }),
      // Adding headers to the request
      headers: {
        'Content-type': 'application/json',
      },
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

  return (
    <div className={classes.carouselRoot}>
      <Carousel
        showArrows={true}
        thumbWidth={200}
        showThumbs={false}
        swipeable={true}
        showIndicators={false}
        autoPlay={true}
      >
        {resumeData.map((tile) => (
          <div key={tile.img}>
            <Typography
              variant='h5'
              style={{
                marginBottom: '20px',
                fontWeight: 800,
                color: purple[500],
              }}
            >
              {tile.title}
            </Typography>
            <img
              src={tile.img}
              alt={tile.title}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
            <p>
              <div>
                <div>
                  {' '}
                  <Typography
                    variant='subtitle1'
                    color='secondary'
                    style={{ fontWeight: 600 }}
                  >
                    {' '}
                    {tile.price}
                  </Typography>
                </div>
                <Button
                  style={{ marginTop: '10px' }}
                  variant='contained'
                  color='primary'
                  startIcon={<ShoppingCartIcon></ShoppingCartIcon>}
                  //   href='/payment'
                  onClick={() => {
                    handleClick(tile.id);
                  }}
                >
                  Purchase now
                </Button>
              </div>
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

function body(arg0: string, arg1: { method: string }, body: any, arg3: string) {
  throw new Error('Function not implemented.');
}
// put a bunch of 2 CV templates: Checkout button
