import { Link, makeStyles, Toolbar, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { green, indigo, purple } from '@material-ui/core/colors';
import React, { useEffect } from 'react';
import MenuAppBar from './Menu';

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
    backgroundColor: '#fafafa',
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
  const [mobileView, setMobileView] = React.useState(false);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 700
        ? setMobileView(true)
        : setMobileView(false);
    };
    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const classes = useStyles();
  return (
    <div>
      <AppBar
        position='sticky'
        color='primary'
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar variant='dense' className={classes.toolbar}>
          <Link underline='none' className={classes.toolbarTitle} href='/'>
            <Typography
              variant='h6'
              noWrap
              style={{
                fontSize: '1.6rem',
                fontFamily: 'Nunito',
                color: 'black',
                fontWeight: 900,
              }}
            >
              my<span style={{ color: purple[500] }}>Resume.</span>{' '}
            </Typography>
          </Link>
          {mobileView ? (
            <MenuAppBar />
          ) : (
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
                TEMPLATES
              </Link>
            </nav>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
