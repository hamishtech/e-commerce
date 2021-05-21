import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import React from 'react';
import SuccessSVG from '../components/svg/success/Success';

const useStyles = makeStyles({
  root: { minHeight: '90vh', marginTop: '50px' },
});

const Success = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <SuccessSVG />
          <Typography variant='h5'>
            We have sent your template to your email address.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {' '}
          <Typography align='center' variant='h3' color='primary'>
            Thank you for trusting us. <br />
            We wish you all the best in your career.
            <br />
            <Typography align='center' variant='h5' color='secondary'>
              From the myResume team.
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Success;
