import React, { Component, Fragment } from 'react'

export class UserData extends Component {
  render() {
    return (
      <Fragment>
        {this.props.userData.map((result, idx) =>
          <Fragment>
            (
            <Fragment>
              <div key={idx}>
                <div>
                  <h1>{result.username}</h1>
                  <p>{result.password}</p>
                  <p>{result.firstName}</p>
                  <p>{result.lastName}</p>
                  <p>{result.dateOfBirth}</p>
                  <p>{result.bio}</p>
                </div>
              </div>
            </Fragment>
            ) : (
            <Fragment>
            </Fragment>
            )
          </Fragment>
        )}
      </Fragment>
    )
  }
}

export default UserData
