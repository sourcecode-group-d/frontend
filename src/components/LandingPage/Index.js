import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './Header';
import OurServices from './OurServices';
import Banner from '../../assets/img/banner.jpg';
import HTest from './HTest';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${Banner})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <HTest /> */}
      <CssBaseline />
      <Header />

      <OurServices />
    </div>
  );
}
