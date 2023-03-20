import React from 'react';
import './App.css';
import {SignIn} from "./components/SignIn/SignIn";
import { SignUp } from './components/SignUp/SignUp';

const App = () => {


  return (
      <div>
        {SignIn()}
          {SignUp()}
      </div>
  )
}

export default App;
