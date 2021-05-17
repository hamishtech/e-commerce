import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import ImageCard from '../components/ImageCard/ImageCard';
import SecondaryPic1 from '../components/svg/SecondaryPic1';
import SecondaryPic2 from '../components/svg/SecondaryPic2';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      marginTop: '-50px',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '250px',
    },
  },
}));

const HomePageSecondary = () => {
  const classes = useStyles();

  return (
    <div id='secondary' className={classes.root}>
      <Grid container justify='center' spacing={5}>
        <Grid item alignContent='center' alignItems='center'>
          <ImageCard
            picture={<SecondaryPic2 />}
            title='State of the art resume'
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ut at. Quisquam excepturi aliquam blanditiis voluptatum sint, est quidem ratione, itaque labore neque facilis ipsa numquam id sit fugit officiis!'
          />
        </Grid>
        <Grid item>
          <ImageCard
            picture={<SecondaryPic1 />}
            title='Tailored for Investment Banking '
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ut at. Quisquam excepturi aliquam blanditiis voluptatum sint, est quidem ratione, itaque labore neque facilis ipsa numquam id sit fugit officiis!'
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePageSecondary;
