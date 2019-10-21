import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
      	<Route exact path="/" component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
