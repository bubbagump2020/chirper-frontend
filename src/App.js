import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import {Login} from './components/Login'
import {UserShow} from './components/UserShow'


const headerStyle ={
  textAlign: "center",
  backgroundColor: "black"
}

class App extends React.Component{

  render(){
    return (
      <div style={headerStyle}>
        <BrowserRouter>
          <Route exact path="/" component={Login} />
          <Route exact path="/users/:id" component={UserShow} />
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
