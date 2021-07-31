import React, { Component, Fragment } from 'react';
import HomePage from './views/HomePage/HomePage';
import LogIn from "./views/LogIn";
import SignUp from "./views/SignUp"
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'
import LandingPage from "./views/Landing";
// import LandingPage from "./views/Landing";


export class App extends Component {
  render() {
    return (
      <Fragment>
          <Router>
              <Switch>
              <Route exact path={"/login"} component={LogIn}/>
                  <Route exact path={"/"} component={LandingPage}/>
                  <Route exact path={"/signup"} component={SignUp}/>
                  {/*<Route path={"/profile"} component={Profile}/>*/}
                  {/*<Route path={"/*"} component={PageNotFound}/>*/}
              </Switch>
        </Router>
      </Fragment>
      // <LogIn/>
    )
  }
}

export default App

