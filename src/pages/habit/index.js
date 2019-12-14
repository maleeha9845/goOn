import React , { Component } from 'react';

import './habit.css';
import HabitNav from "../../components/habitnavbar/index.js";
import HabitualHeader from "../../components/habitualheader/index.js";
import HabitualBody from "../../components/habitualbody/index.js";

class Habit extends React.Component {
  constructor(props) {
  super(props)
  this.state={
    width: 0,
    height: 0
  }
  this.updateDimensions= this.updateDimensions.bind(this);
}

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
   return (
      <div class ="sub-container">
        <HabitNav />
        <div>
        <HabitualHeader/>
        <HabitualBody/>
        </div>
      </div>
  );
 }
}

export default Habit;
