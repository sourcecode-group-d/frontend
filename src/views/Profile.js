import React, { Fragment,useState, useEffect } from 'react';
import MeatDecorator from '../utilities/MeatDecorator/MeatDecorator';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Logo from '../assets/logo.png'
import {
  Home as HomeIcon,
  AccountCircle as AccountCircleIcon,
  QuestionAnswer as QuestionAnswerIcon
} from '@material-ui/icons';
import axios from "axios";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#383b47',
    width: '100%',
    height: '100vh',
    display: 'flex',
  },
  leftSide: {
    width: '20%',
    backgroundColor: '#323542',
    padding: '4rem 2rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '0 25px',
  },
  feed: {
    width: '60%',
    backgroundColor: '#383b47',
  },
  rightSide: {
    width: '20%',
    backgroundColor: '#383b47',
    borderRadius: '25px 0',
  },
  logoBox: {
    width: '100%',
  },
  logo: {
    width: '100%',
  },
  navSide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  navlink: {
    display: 'flex',
    color: '#f0f1f8',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none',

    '&&:hover': {
      color: '#a27efa',
    }
  }
}));



const Profile = () => {

  const [user, setUser] = useState([{}]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/profile`).then(
        async (request) => {
          console.log(request);
          const user = await request.data;
          setUser(user);
          {console.log(user)}
        })
  });


  const classes = useStyles();
  return (
    <Fragment>
      {/*{console.log(user)}*/}
      <MeatDecorator
        title={`SourceCode | Feed`}
        description={`sourcecode description Home Page`}
      />
      <CssBaseline />

      <div className={classes.root}>
        <div className={classes.leftSide}>
          <div className={classes.logoBox}>
            <img
              className={classes.logo}
              src={Logo}
              alt="..."
            />
            <div className={classes.navSide}>
              <a className={classes.navlink} href="/">
                <HomeIcon />
                <p>Home</p>
              </a>

              <a className={classes.navlink} href="/profile">
                <AccountCircleIcon />
                <p>Profile</p>
              </a>

              <a className={classes.navlink} href="/feed">
                <QuestionAnswerIcon />
                <p>Question & Answer</p>
              </a>
            </div>
          </div>
        </div>
        <div className={classes.feed}></div>
        <div className={classes.rightSide}></div>
      </div>

    </Fragment>
  )
}

export default Profile
