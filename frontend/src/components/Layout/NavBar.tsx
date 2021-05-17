import {
  Button,
  Link,
  makeStyles,
  Typography,
  Toolbar,
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
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
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar
        position='static'
        color='default'
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar variant='dense' className={classes.toolbar}>
          <Typography
            variant='h6'
            color='inherit'
            noWrap
            className={classes.toolbarTitle}
          >
            H-Resume{' '}
          </Typography>
          <nav>
            <Link
              variant='button'
              color='textPrimary'
              href='#'
              className={classes.link}
            >
              Why H-Resume?
            </Link>
            <Link
              variant='button'
              color='textPrimary'
              href='#'
              className={classes.link}
            >
              Features
            </Link>
            <Link
              variant='button'
              color='textPrimary'
              href='#'
              className={classes.link}
            >
              Pricing
            </Link>
          </nav>
          <Button
            href='#'
            size="small"
            color='primary'
            variant='contained'
            className={classes.link}
          >
            Get Started
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
