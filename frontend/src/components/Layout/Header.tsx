import {
  IconButton,
  Link,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { purple } from '@material-ui/core/colors';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: '#fff',
    position: 'fixed',
  },
  toolbar: {
    width: '75%',
  },
  toolbarTitle: {
    flexGrow: 1,
    fontSize: '35px',
    fontWeight: 900,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    fontWeight: 600,
    fontSize: '17px',
  },
  icon: { fontSize: '70px' },
  colorTitle: { color: purple[600] },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar
        position='sticky'
        color='default'
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar variant='dense' className={classes.toolbar}>
          <IconButton className={classes.toolbarTitle} href='/'>
            {' '}
            <Typography
              variant='h6'
              color='inherit'
              noWrap
              style={{
                fontSize: '2rem',
                fontFamily: 'Nunito',
                fontWeight: 900,
              }}
            >
              my<span className={classes.colorTitle}>Resume.</span>{' '}
            </Typography>
          </IconButton>
          <nav>
            <Link
              variant='button'
              color='textPrimary'
              href='/whyus'
              className={classes.link}
            >
              FEATURES{' '}
            </Link>
            <Link
              variant='button'
              color='textPrimary'
              href='/preview'
              className={classes.link}
            >
              Preview
            </Link>
            <Link
              variant='button'
              color='textPrimary'
              href='/pricing'
              className={classes.link}
            >
              Pricing
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
