import * as React from 'react';
import {TaskList} from '../task-list/TaskList';

export class Secret extends React.Component {
   render() {
      return (
         <div className="page-login">
            <header className="logout-container">
                  <p className="logout-container__usere">Hello,{this.props.name}</p>
                  <button className="btn logout-container__btn" onClick={this.props.auth.logout}>Logout</button>
            </header>
            <TaskList/>
         </div>
      )
   }
}
