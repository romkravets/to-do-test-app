import * as React from 'react';

export class TaskListFooter extends React.Component {

   render() {
      return (
         <div className="footer">
            <div className="footer__counter">
               {this.props.counter}
            </div>
         </div>
      )
   }
}