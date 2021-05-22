import { makeStyles } from '@material-ui/core';
import React from 'react';
import PrimaryHomePage from '../components/HomePage/PrimaryHomePage';
import WhyUs from '../components/HomePage/WhyUs';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '400px',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '500px',
    },
  },
}));
const Homepage = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <PrimaryHomePage />{' '}
      </div>
      <WhyUs />
    </React.Fragment>
  );
};

export default Homepage;
