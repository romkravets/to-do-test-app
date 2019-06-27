import * as React from 'react';

import './ListItem.scss';

export class ListItem extends React.Component {
   deleteItem = () => {
      this.props.onDeleteItem(this.props.id);
   }

   onChange = () => {
      const task = Object.assign({}, this.props);
      task.completed = !task.completed;
      this.props.onChange(task);
   }

   render() {
      return (
         <li className="list-item" id={this.props.id}>
               <input className="list-item__native-input"
               type="checkbox" id={'input'+this.props.id}
               onChange={this.onChange}
               checked={this.props.completed}/>
            <span className="list-item__title">
               {this.props.title}
            </span>
            <button className="list-item__del" onClick={this.deleteItem}>⌦</button>
         </li>
      )
   }
}