import React, { Fragment, useState, useEffect } from 'react';
import MeatDecorator from '../utilities/MeatDecorator/MeatDecorator';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Logo from '../assets/logo.png'
import {
  Home as HomeIcon,
  AccountCircle as AccountCircleIcon,
  QuestionAnswer as QuestionAnswerIcon,
  ExitToApp as ExitToAppIcon,
  Delete as DeleteIcon,
  Comment as CommentIcon,
  ThumbsUpDown as ThumbsUpDownIcon
} from '@material-ui/icons';
import axios from "axios";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#383b47',
    width: '100%',
    minHeight: '100vh',
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
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  rightSide: {
    Width: '20%',
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
  },
  navlinkLogout: {
    display: 'flex',
    color: '#f0f1f8',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none',

    '&&:hover': {
      color: '#f44336',
    }
  },
  feedTite: {
    color: '#fff',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  postForm: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#31343e',
    boxShadow: 'rgb(14 30 37 / 12%) 0px 2px 4px 0px, rgb(14 30 37 / 32%) 0px 2px 16px 0px;',
    padding: '1rem',
    width: '80%',
    color: '#fff',
    fontSize: '1.4rem',
    borderRadius: '12px',
  },
  postType: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '1rem',
    fontSize: '1rem',
    alignItems: 'center',
  },
  chooseType: {
    backgroundColor: '#31343e',
    border: 'none',
    color: '#fff',
    boxShadow: 'rgb(14 30 37 / 12%) 0px 2px 4px 0px, rgb(14 30 37 / 32%) 0px 2px 16px 0px;',
    padding: '0.5rem',
    borderRadius: '12px',

    '&&:focus': {
      outline: 'none',
    }
  },
  post: {
    width: '100%',
    height: '14rem',
    resize: 'none',
    padding: '1rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    backgroundColor: '#31343e',
    border: 'none',
    color: '#fff',
    fontSize: '1.2rem',
    borderRadius: '12px',

    '&&:focus': {
      outline: 'none',
      boxShadow: 'rgb(14 30 37 / 12%) 0px 2px 4px 0px, rgb(14 30 37 / 32%) 0px 2px 16px 0px;',
    }
  },
  btnbox: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: '1rem',
    alignItems: 'center',
  },
  btnPost: {
    padding: '0.5rem 2rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: '0',
    color: 'white',
    backgroundColor: '#a27dfa',
    borderRadius: '9px',
    cursor: 'pointer',
  },
  posts: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    padding: '1rem',
  },
  postCard: {
    width: '70%',
    minHeight: '15rem',
    backgroundColor: '#31343e',
    boxShadow: 'rgb(0 0 0 / 19%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px',
    borderRadius: '12px',
    padding: '1rem',
  },
  PostProfile: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',

    '&& img': {
      borderRadius: '50%',
      width: '4rem',
      height: '4rem',
    },

    '&& p': {
      fontSize: '1.3rem',
      color: 'white',
    }
  },
  postBodyDate: {
    fontSize: '0.85rem',
    textAlign: 'end',
  },
  postInfo: {
    marginTop: '0.5rem',
    color: '#fff',
  },
  postBodyInfo: {
    fontSize: '1.1rem',
    margin: '0.5rem 0',
  },
  postBodyType: {
    fontSize: '0.9rem',
    textAlign: 'end',
  },
  postBodyBtnGroup: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
  },
  postBodyBtn: {
    backgroundColor: '#d35',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.2rem 0.4rem;',
    textDecoration: 'none',
    color: 'white',
    borderRadius: '3px',
  }
}));



const Profile = () => {

  useEffect(() => {
    // getUser();
  }, []);

  const [user, setUser] = useState([{}]);

  const getUser = async () => {
    const data = await axios.get(
      "http://localhost:8080/profile"
    );
    console.log(data);
    // const user = await data.json();
    // setUser(user);
  };


  const classes = useStyles();
  return (
    <Fragment>
      {/* {console.log(user)} */}
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

              <a className={classes.navlinkLogout} href="/feed">
                <ExitToAppIcon />
                <p>Logout</p>
              </a>
            </div>
          </div>
        </div>
        <div className={classes.feed}>
          <p className={classes.feedTite}>Activity</p>
          <form action={''} method={'POST'} className={classes.postForm}>
            <label>New Post</label>
            <div className={classes.postType}>
              <label for="type">Post Type:</label>
              <input
                className={classes.chooseType}
                list="types"
                name="type"
                id="type"
                placeholder={'Post Type'} />
              <datalist id="types">
                <option value="type 1" />
                <option value="type 2" />
                <option value="type 3" />
                <option value="type 4" />
              </datalist>
            </div>
            <textarea
              className={classes.post} name="post"
              placeholder={'What\'s on your mind?'}></textarea>
            <div className={classes.btnbox}>
              <input
                type="submit"
                value="Post"
                className={classes.btnPost} />
            </div>
          </form>
          <div className={classes.posts}>
            <div className={classes.postCard}>
              <div class={classes.PostProfile}>
                <img src="https://lh3.googleusercontent.com/a-/AOh14GgFHvApPY0ARg25y8rsMJdqdP7KCRj1c3MpNn91fw=s96-c"
                  alt="Mohammad ِAbu Mattar" title="Mohammad ِAbu Mattar" />
                <p>Mohammad ِAbu Mattar</p>
              </div>
              <div className={classes.postInfo}>
                <div className={classes.postBodyDate}>
                  20/12/2021
                </div>
                <div className={classes.postBodyInfo}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolores beatae maxime debitis assumenda quaerat et delectus aspernatur magnam, fuga deserunt? Architecto magni a odio, quaerat saepe consequatur mollitia quia.
                </div>
                <div className={classes.postBodyType}>
                  Type: Lorem ipsum dolor si
                </div>
              </div>
              <div className={classes.postBodyBtnGroup}>
                <a href="" className={classes.postBodyBtn}>
                  <ThumbsUpDownIcon />
                  vote
                </a>
                <a href="" className={classes.postBodyBtn}>
                  <CommentIcon />
                  Comment
                </a>
                <a href="" className={classes.postBodyBtn}>
                  <DeleteIcon />
                  Delete
                </a>
              </div>
            </div>
            <div className={classes.postCard}>
              <div class={classes.PostProfile}>
                <img src="https://lh3.googleusercontent.com/a-/AOh14GgFHvApPY0ARg25y8rsMJdqdP7KCRj1c3MpNn91fw=s96-c"
                  alt="Mohammad ِAbu Mattar" title="Mohammad ِAbu Mattar" />
                <p>Mohammad ِAbu Mattar</p>
              </div>
              <div className={classes.postInfo}>
                <div className={classes.postBodyDate}>
                  20/12/2021
                </div>
                <div className={classes.postBodyInfo}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolores beatae maxime debitis assumenda quaerat et delectus aspernatur magnam, fuga deserunt? Architecto magni a odio, quaerat saepe consequatur mollitia quia.
                </div>
                <div className={classes.postBodyType}>
                  Type: Lorem ipsum dolor si
                </div>
              </div>
              <div className={classes.postBodyBtnGroup}>
                <a href="" className={classes.postBodyBtn}>
                  <ThumbsUpDownIcon />
                  vote
                </a>
                <a href="" className={classes.postBodyBtn}>
                  <CommentIcon />
                  Comment
                </a>
                <a href="" className={classes.postBodyBtn}>
                  <DeleteIcon />
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.rightSide}></div>
      </div>

    </Fragment>
  )
}

export default Profile
