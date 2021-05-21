import {
    Link,
    makeStyles,
    Toolbar,
    Typography
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
    width: '100%',
    height: '10px',
  },
  toolbarTitle: {
    flexGrow: 1,
    fontSize: '35px',
    fontWeight: 900,
    textAlign: 'left',
  },
  link: {
    margin: theme.spacing(1, 1.5),
    fontWeight: 600,
    fontSize: '13px',
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
          <Link underline='none' className={classes.toolbarTitle} href='/'>
            <Typography
              variant='h6'
              color='inherit'
              noWrap
              style={{
                fontSize: '1.6rem',
                fontFamily: 'Nunito',
                fontWeight: 900,
              }}
            >
              my<span className={classes.colorTitle}>Resume.</span>{' '}
            </Typography>
          </Link>
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
              href='/pricing'
              className={classes.link}
            >
              Pricing
            </Link>
            <Link
              variant='button'
              color='textPrimary'
              href='/preview'
              className={classes.link}
            >
              TEMPLATES
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
