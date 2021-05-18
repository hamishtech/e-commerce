import { Link, Typography } from '@material-ui/core';
import React from 'react';

export function Copyright() {
  return (
    <Typography
      variant='body2'
      color='textSecondary'
      align='center'
      style={{ fontFamily: 'Nunito' }}
    >
      {'Copyright © '}
      <Link
        color='inherit'
        href='https://material-ui.com/'
        style={{ fontFamily: 'Nunito' }}
      >
        HB-Technology{' '}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
