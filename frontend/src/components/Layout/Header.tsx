import {
  Button,
  Link,
  makeStyles,
  Typography,
  Toolbar,
  IconButton,
} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import { indigo, purple } from '@material-ui/core/colors';

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
    background: 'none',
  },
  toolbar: {
    width: '75%',
    margin: '0 auto',
  },
  toolbarTitle: {
    flexGrow: 1,
    fontFamily: 'Nunito',
    fontSize: '35px',
    fontWeight: 900,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    fontFamily: 'Nunito',
    fontWeight: 500,
    fontSize: '14px',
  },
  icon: { fontSize: '70px' },
  colorTitle: { color: purple[600] },
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
            my<span className={classes.colorTitle}>Resume.</span>{' '}
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
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
