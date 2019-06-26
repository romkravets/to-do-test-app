import * as React from 'react';

import { HTTPService } from '../../http-service/http-service';
import { ListItem } from './ListItem';

import './TaskList.scss';

const URL = 'https://evening-dawn-11092.herokuapp.com/list';

export class TaskList extends React.Component {
   constructor() {
      super();
      this.httpService = new HTTPService();
      this.state = {
         tasks: [],
         newTaskTitle: '',
      }
   }

   componentDidMount() {
      this.fetchData();
   }

   fetchData() {
      this.httpService.get(URL, (tasks) => {
         this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.tasks = tasks;
            console.log(newState);
            return newState;
         })
      })
   }

   onSubmit = (e) => {
      e.preventDefault();
      console.log(e);
      const title = this.state.newTaskTitle;

      this.httpService.post(URL, {title}, (task) => {
         this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.newTaskTitle = '';
            newState.tasks.push(task);
            console.log(newState);
            return newState;
         })
      })
   }

   valueChange = (e) => {
      const value = e.target.value;
      this.setState((oldState) => {
         const newState = Object.assign({}, oldState);
         newState.newTaskTitle = value;
         console.log(newState);
         return newState;
      })
   }

   deleteItem = (id) => {
      this.httpService.delete(`${URL}/${id}`, (resp) => {
         this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.tasks = newState.tasks.filter((item) => item.id !== id);
            return newState;
         })
      })
   }

   updateItem =(updateTask) => {
      this.httpService.put(`${URL}/${updateTask.id}`,updateTask,(resp) =>{
         this.setState(oldState => {
            const newState = Object.assign({}, oldState);
            let updateIndex = oldState.tasks.reduce((index, item, i) => {
               if(item.id === updateTask.id) {
                  index = i;
               }
               return index;
            }, 0);

            newState.tasks[updateIndex] = resp;
            return newState;
         });
      });
   }

   render() {
      const listItems = this.state.tasks.map((task, i) => {
         return <ListItem 
         key={i} 
         id={task.id} 
         title={task.title} 
         completed={task.completed}
         onDeleteItem={this.deleteItem}
         onChange={this.updateItem}
         />
      })
      return (
         <div className="task-list">
            <form className="task-list__head" onSubmit={this.onSubmit}>
            <input
            type="text"
            className="task-list__input"
            placeholder="To do"
            onChange={this.valueChange}
            value={this.state.newTaskTitle}
            />
            <button className="task-list__btn">Add</button>
         </form>
         <div className="list">
            <ul className="task-list__content">
               {listItems}
                  {/* <span className="list-item__checkbox">
                  <input className="list-item__native-input"
                        type="checkbox"
                        id=""/>
                  <label className="list-item__label"></label>
                  </span>
                  <span className="list-item__title">
                  </span>
                  <input className="list-item__input"
                  value=''/>
                  <button className="list-item__del">X</button> */}
            </ul>
         </div>
         <div className="footer">
            <div className="footer__counter">
               1
            </div>
            <div className="footer__filters">
               2
            </div>
            <div className="footer__control"></div>
         </div>
         </div>
      )
   }
}