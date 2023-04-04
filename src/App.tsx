import React from 'react';
import './App.css';
import {SignIn} from "./components/SignIn/SignIn";
import { SignUp } from './components/SignUp/SignUp';
import {Navbar} from "./components/layout/Navbar";
import {Header} from "./components/layout/Header";


const App = () => {


  return (
      <div>
          <Header/>
          {Navbar()}
      </div>
  )
}

export default App;
