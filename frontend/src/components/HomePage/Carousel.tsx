import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Button, Typography } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
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

  return (
    <div className={classes.carouselRoot}>
      <Carousel
        showArrows={true}
        thumbWidth={200}
        showThumbs={false}
        swipeable={true}
        showStatus={false}
        showIndicators={false}
        autoPlay={true}
      >
        {resumeData.map((tile) => (
          <div key={tile.img}>
            <img
              src={tile.img}
              alt={tile.title}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
            <p>
              <div></div>
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
