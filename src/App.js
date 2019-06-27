import React from 'react';
import { Main } from './components/main/Main';
import { Secret } from './components/secret/Secret';
import './App.scss';
import { NotFound } from './components/main/NotFound';
import { Callback } from './components/main/Callback';

class App extends React.Component {
  render() {
    let mainComponent = "";
  switch(this.props.location) {
    case "":
      mainComponent = <Main {...this.props}/>;
      break;
    case "callback":
      mainComponent = <Callback/>;
      break;
    case "secret":
      mainComponent = this.props.auth.isAutenticated() ? <Secret {...this.props}/> : <NotFound />;
      break;
    default:
    mainComponent = <NotFound/>;
  }
    return (
      <div className="App">
       {mainComponent}
      </div>
    );
  }
}

export default App;