import * as React from 'react';
import {TaskList} from '../task-list/TaskList';

export class Secret extends React.Component {
   render() {
      return (
         <div>
            <div>Super sicret area</div>
            <div>Hello, {this.props.name}</div>
            <button onClick={this.props.auth.logout}>Logout</button>
            <TaskList/>
         </div>
      )
   }
}
