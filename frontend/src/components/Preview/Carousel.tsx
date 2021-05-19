import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.css'; // requires a loader
import { Button, Typography } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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

export interface Tiles {
  title: string;
  img: string;
}

const resumeData: Array<Tiles> = [
  {
    title: 'Modern Template',
    img: 'https://s3.resume.io/uploads/local_template_image/image/383/persistent-resource/santiago-resume-templates.jpg',
  },
  {
    title: 'Minimalist Template',
    img: 'https://s3.resume.io/uploads/local_template_image/image/511/persistent-resource/barcelona-resume-templates.jpg',
  },
  {
    title: 'Stylish Template',
    img: 'https://s3.resume.io/uploads/local_template_image/image/441/persistent-resource/sydney-resume-templates.jpg',
  },
];

export default function TemplateCarousel() {
  const classes = useStyles();

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
                <Button
                  style={{ marginTop: '10px' }}
                  variant='contained'
                  color='primary'
                  startIcon={<ShoppingCartIcon></ShoppingCartIcon>}
                >
                  Purchase
                </Button>
              </div>
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
// put a bunch of 2 CV templates: Checkout button
