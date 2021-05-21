import { Grid, makeStyles, Typography } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import React from 'react';
import Footer from '../../components/Layout/Footer';
import ImageCard from '../ImageCard/ImageCard';
import SecondaryPic1 from '../svg/SecondaryPic1';
import SecondaryPic2 from '../svg/SecondaryPic2';

const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: '50px',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
      marginTop: '50px',
      marginBottom: '0px',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '50px',
      marginBottom: '200px',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '350px',
      marginBottom: '20px',
    },
  },
}));

const HomePageSecondary = () => {
  const classes = useStyles();

  return (
    <div id='secondary' className={classes.root}>
      <Grid container justify='center' spacing={5}>
        <Grid item xs={12}>
          {' '}
          <Typography
            variant='h2'
            style={{
              fontFamily: 'Nunito',
              color: purple[500],
              fontWeight: 900,
              textAlign: 'center',
            }}
          >
            Key Features
          </Typography>
        </Grid>
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
