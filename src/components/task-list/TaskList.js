import * as React from 'react';
import { HTTPService } from '../../http-service/http-service';

import './TaskList';

const URL = 'https://evening-dawn-11092.herokuapp.com/list';

export class TaskList extends React.Component {
   constructor() {
      super();
      this.httpService = new HTTPService();
      this.state = {
         tasks: [],
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
         <div className="list">
            <ul className="task-list__content">
            <li>
                  <span className="list-item__checkbox">
                  <input className="list-item__native-input"
                        type="checkbox"
                        id=""/>
                  <label className="list-item__label"></label>
                  </span>
                  <span className="list-item__title">
                  </span>
                  <input className="list-item__input"
                  value=''/>
                  <button className="list-item__del">X</button>
            </li>
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