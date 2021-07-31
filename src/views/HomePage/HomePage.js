import React, { Component, Fragment } from 'react';
import MeatDecorator from '../../utilities/MeatDecorator/MeatDecorator';
import axios from 'axios';
import LandingPage from '../../components/LandingPage/Index'

export class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      userData: [],
      error: "",
    };

    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    axios.get("http://localhost:8080/api/v1/").then(
      (request) => {
        console.log(request);

        this.setState({
          userData: request.data,
          error: '',
        });
      }
    )
  }

  render() {
    return (
      <Fragment>
        {console.log(this.state.userData)}
        <MeatDecorator
          title={`sourcecode`}
          description={`sourcecode description Home Page`}
        />
        <LandingPage/>
      </Fragment>
    )
  }
}

export default HomePage;
