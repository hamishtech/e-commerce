import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, Menu, MenuItem } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function MenuAppBar() {
  const [open, setOpen] = React.useState(null);
  const history = useHistory();

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='primary'
          aria-label='menu'
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id='simple-menu'
          anchorEl={open}
          keepMounted
          open={Boolean(open)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              history.push('/whyus');
              setOpen(null);
            }}
          >
            Features
          </MenuItem>
          <MenuItem
            onClick={() => {
              history.push('/preview');
              setOpen(null);
            }}
          >
            Templates
          </MenuItem>
        </Menu>
      </Toolbar>
    </div>
  );
}
