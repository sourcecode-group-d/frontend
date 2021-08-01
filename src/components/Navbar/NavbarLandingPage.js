import React, { Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import Logo from '../../assets/img/logo.png'

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: '#222222',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  logo: {
    flexGrow: '1',
  },
  headerLogo: {
    width: '12rem',
  },
  dropdownContent: {
    display: 'none',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: '1',
    top: '50px',
    '&& a': {
      color: 'black',
      padding: '12px 16px',
      textDecoration: 'none',
      display: 'block',
    },
    '&& a:hover': {
      backgroundColor: '#f1f1f1',
    }
  },
  dropdown: {
    position: 'relative',
    display: 'inline-block',

    '&& :hover $dropdownContent': {
      display: 'block',
    }
  },
}));

const NavbarLandingPage = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <div className={classes.logo}>
            <img className={classes.headerLogo} src={Logo} alt={"logo"} />
          </div>
          <div className={classes.dropdown}>
            <IconButton>
              <SortIcon className={classes.icon} />
              <div class={classes.dropdownContent}>
                <a href="/">Home</a>
                <a href="/login">Log In</a>
                <a href="/signup">Sign Up</a>
              </div>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Fragment>
  )
}

export default NavbarLandingPage;
