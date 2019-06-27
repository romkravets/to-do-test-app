import * as React from 'react';

export class TaskListCounter extends React.Component {

   render() {
      return (
         <div className="task-list__counter">
            <div className="task-list__top">
               <span>{this.props.counter} to do</span>
            </div>
         </div>
      )
   }
}