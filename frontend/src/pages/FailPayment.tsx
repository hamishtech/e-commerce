import classes from '*.module.css';
import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '100px',
    display: 'flex',
    minHeight: '75vh',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
}));

const FailPayment = () => {
  const classes = useStyles();
  return (
    <Container>
      {' '}
      <div className={classes.root}>
        <Typography variant='h4'>
          {' '}
          Checkout process canceled. Can we help you?
          <Typography variant='h6'>
            Please contact us at support@myresume.com if you have further
            questions.
          </Typography>
        </Typography>
      </div>
    </Container>
  );
};

export default FailPayment;
