import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ResumeGridList from '../components/Preview/ResumeGridList';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css'; // requires a loader
import { Button, Typography } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TemplateCarousel from '../components/Preview/Carousel';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '100px',
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

export default function Preview() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <div className={classes.root}>
        <TemplateCarousel />
      </div>
    </div>
  );
}
// put a bunch of 2 CV templates: Checkout button
