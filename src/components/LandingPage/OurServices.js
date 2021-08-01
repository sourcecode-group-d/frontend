import React, { Fragment } from 'react';
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
    flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  serviceTitle: {
    fontSize: '2.75rem',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#00000047',
    width: '50vw',
    margin: '0 auto',
    padding: '1rem',
    borderRadius: '10px',
  },
}
));

const OurServices = () => {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <Fragment>

      <h1 className={classes.serviceTitle}>Our Services</h1>
      <div className={classes.root} id="our-services">
        <ImageCard service={service[0]} checked={checked} />
        <ImageCard service={service[1]} checked={checked} />
        <ImageCard service={service[2]} checked={checked} />
        <ImageCard service={service[3]} checked={checked} />
        <ImageCard service={service[4]} checked={checked} />
        <ImageCard service={service[5]} checked={checked} />
      </div>
    </Fragment>
  );
}

export default OurServices;
