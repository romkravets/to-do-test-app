import React, { Component } from 'react';
import App from './App';

class Home extends Component {

  login = () => {
    this.props.auth.login();
  }

  logout = () => {
    this.props.auth.logout();
  }
  render() {
 
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="page-login">
        {
          isAuthenticated() &&
          <div className="logout-container">
          <div className="logout-container__caption">
          <h5>
              You are logged in!{' '}
              <a className="login-container__btn"
                style={{ cursor: 'pointer' }}
                onClick={this.logout}
              >
                Log Out
              </a>.
            </h5>
          </div>
            <App />
          </div>
        }
        {
          !isAuthenticated() && (
            <div className="login-container">
              <h2 className="login-container__caption">Welcome friends</h2>
              <h5>
                Please Log In to continue.
              </h5>
              <button className="login-container__btn"
                  onClick={this.login}>
                  Log In
              </button>
           
            </div>
          )
        }
      </div>
      );
    }
  }

  export default Home;