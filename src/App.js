import React , { Component } from 'react';

import DeleteForm from "./page01.js";
import Calendar from "./components/calender/index.js";
import './App.css';
import Habit from "./pages/habit/index.js"

const App = props => {

  return (
    <div className="App">
  
    <Habit/>
    </div>
  );

}

export default App;
