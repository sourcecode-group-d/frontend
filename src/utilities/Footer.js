import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Facebook';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root1: {
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    padding: '2rem',
  },
  footer: {
    backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6lSQWsYJpLFp91qP0Onuz44AJLgwz8oD9HA&usqp=CAU)',
    paddingTop: '2rem',
    // boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 100%',

  },
  socialMedia: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'center',
  },

  copyRight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

});

const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Fragment>

      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root1}
      // style={{ backgroundColor: "white" }}
      >
        <div className={classes.socialMedia}>

          <BottomNavigationAction style={{ color: "white" }} label="Follow us" icon={<RestoreIcon />} />
          <BottomNavigationAction style={{ color: "white" }} label=" check projects" icon={<GitHub />} />
          <BottomNavigationAction style={{ color: "white" }} label="LinkedIn" icon={<LinkedIn />} />
          <BottomNavigationAction style={{ color: "white" }} label="h " icon={<LocationOnIcon />} />
        </div>
        <div className={classes.copyRight}>
          &copy; CopyRight by SourceCode | 2021
        </div>
      </BottomNavigation>

    </Fragment>

  );
}

export default Footer;