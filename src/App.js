import React, { Component, Fragment } from 'react';
import HomePage from './views/HomePage/HomePage';
import LogIn from "./views/LogIn";
import SignUp from "./views/SignUp"
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Footer from './utilities/Footer';


export class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route exact path={"/"} component={HomePage} />
            <Route exact path={"/login"} component={LogIn} />
            <Route exact path={"/signup"} component={SignUp} />
            {/*<Route path={"/profile"} component={Profile}/>*/}
            {/*<Route path={"/*"} component={PageNotFound}/>*/}
          </Switch>

        </Router>
        <Footer />
      </Fragment>
      // <LogIn/>
    )
  }
}

export default App

