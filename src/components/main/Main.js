import * as React from 'react';

export class Main extends React.Component {
   render() {
      return (
         <div>
            <div>
            <p>Seee secret area <a href="/secret">Click here</a></p>
            </div>
            {!this.props.auth.isAutenticated() &&
            <div>
               Please login first
               <button onClick={this.props.auth.login}>Login</button>
            </div>
             }
         </div>
      )
   }
}

