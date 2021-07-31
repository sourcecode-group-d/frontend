import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import service from '../../assets/Service';
import useWindowPosition from './useWindowPosition';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));

const OurServices = () => {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="place-to-visit">
      <ImageCard place={service[1]} checked={checked} />
      <ImageCard place={service[0]} checked={checked} />
    </div>
  );
}

export default  OurServices;
