import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.css'; // requires a loader
import TemplateCarousel from '../components/HomePage/Carousel';

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
  id: string;
  price: string;
}

export const resumeData: Array<Tiles> = [
  {
    title: 'Modern Template',
    img: 'https://s3.resume.io/uploads/local_template_image/image/383/persistent-resource/santiago-resume-templates.jpg',
    id: '1',
    price: '$10.00',
  },
  {
    title: 'Minimalist Template',
    img: 'https://s3.resume.io/uploads/local_template_image/image/511/persistent-resource/barcelona-resume-templates.jpg',
    id: '2',
    price: '$12.00',
  },
  {
    title: 'Stylish Template',
    img: 'https://s3.resume.io/uploads/local_template_image/image/441/persistent-resource/sydney-resume-templates.jpg',
    id: '3',
    price: '$13.00',
  },
  {
    title: 'Clean Template',
    img: 'https://s3.resume.io/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg',
    id: '4',
    price: '$13.00',
  },
];

export default function Preview() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <div className={classes.root}>
        <TemplateCarousel resumeData={resumeData} />
      </div>
    </div>
  );
}
// put a bunch of 2 CV templates: Checkout button
