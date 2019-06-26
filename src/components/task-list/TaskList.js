import * as React from 'react';


import './TaskList';

export class TaskList extends React.Component {
   constructor() {
      super();
   }
   render() {
      return (
         <div className="task-list">
            <form className="task-list__head">
            <input
            type="text"
            className="task-list__input"
            placeholder="To do"
            />
            <button className="task-list__btn">Add</button>
         </form>
         </div>
      )
   }
}