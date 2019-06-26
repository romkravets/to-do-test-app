import * as React from 'react';

export class List extends React.Component {
   render() {
      return  <ul className="task-list__content">
      {this.props.children}
   </ul>
   }
}