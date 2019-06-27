import * as React from 'react';
import Auth from '../../Auth';

export class Callback extends React.Component {
   componentDidMount() {
      const auth = new Auth();
      auth.hendleAuthentication();
   }
   render() {
      return (
         <div>Loading...</div>
      )
   }
}
