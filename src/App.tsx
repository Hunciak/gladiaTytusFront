import React from 'react';
import logo from './logo.svg';
import './App.css';
import {SignIn} from "./components/SignIn/SignIn";
import { SignUp } from './components/SignUp/SignUp';

const App = () => {


  return (
      <div>
        {SignUp()}
      </div>
  )
}

export default App;
