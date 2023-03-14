import React from 'react';
import logo from './logo.svg';
import './App.css';
import {SignIn} from "./components/SignIn/SignIn";

const App = () => {


  return (
      <div>
        {SignIn()}
      </div>
  )
}

export default App;
