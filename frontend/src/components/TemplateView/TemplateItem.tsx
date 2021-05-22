import { Button, Divider } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';

const stripePromise = loadStripe(
  'pk_test_51Ist3IFae7EgjcoUEx3n71QOXTzd8bureSwSdLqZcNehw6fauNz1SsD3yA7Yni53qnFto2pRsa4couX7arU8hGkn00HbCoyOfJ'
);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
      height: '100%',
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      height: '700px',
      maxWidth: 650,
      textAlign: 'center',
    },
    image: {
      width: 400,
      height: 300,
    },
    img: {
      marginTop: '10px',
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '91%',
    },
  })
);

export default function TemplateGrid({
  image,
  price,
  title,
  id,
}: {
  image: string;
  price: string;
  title: string;
  id: string;
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
    <div>
      <div className={classes.root}>
        <Paper elevation={5} className={classes.paper}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <Typography
                gutterBottom
                variant='h6'
                color='primary'
                style={{ fontWeight: 600, marginBottom: '20px' }}
              >
                {title} - {price}
              </Typography>{' '}
            </div>
            <div style={{ alignSelf: 'center' }}>
              <Typography>
                <Button
                  color='primary'
                  variant='outlined'
                  startIcon={<ShoppingCartIcon></ShoppingCartIcon>}
                  onClick={() => {
                    handleClick(id);
                  }}
                  size='small'
                  style={{
                    cursor: 'pointer',
                    textAlign: 'center',
                    marginTop: '-20px',
                  }}
                >
                  Purchase Now
                </Button>
              </Typography>
            </div>
          </div>
          <Divider />
          <img className={classes.img} alt='complex' src={image} />
        </Paper>
      </div>
    </div>
  );
}
