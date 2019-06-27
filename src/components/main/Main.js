import * as React from 'react';

export class Main extends React.Component {
   render() {
      return (
         <div class="page-login">
            <div className="login-container">
             <h2 className="login-container__caption">Hello! {this.props.name}<br></br>We are glad to see you.</h2>
               <div>
                  <span>Your todo list </span>
                  <a href="/secret">here</a>
               </div>
            </div>
            {!this.props.auth.isAutenticated() &&
            <div className="btn-container">
               <p>Please login first</p>
               <button className="btn" onClick={this.props.auth.login}>Login</button>
            </div>
             }
         </div>
      )
   }
}

