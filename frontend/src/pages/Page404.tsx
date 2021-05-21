import { Container, Typography } from '@material-ui/core';
import React from 'react';

const Page404 = () => {
  return (
    <Container style={{ minHeight: '100vh' }}>
      {' '}
      <Typography
        color='primary'
        style={{ textAlign: 'center', marginTop: '100px' }}
        variant='h3'
      >
        404 error: page not found
      </Typography>
    </Container>
  );
};

export default Page404;
