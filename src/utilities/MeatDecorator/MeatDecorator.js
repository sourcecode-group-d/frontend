import React, { Component, Fragment } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default class MeatDecorator extends Component {
  render() {
    return (
      <Fragment>
        <HelmetProvider>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{this.props.title}</title>
            <meta name="description" content={this.props.description} />
          </Helmet>
        </HelmetProvider>
      </Fragment>
    );
  }
}