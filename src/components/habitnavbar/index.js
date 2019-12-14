import React , { Component } from 'react';

import './habitnavbar.css';
import NavButton from '../navbarbutton/index.js';


class HabitNav extends Component {
  constructor(props) {
     super(props)
     this.state={
      active: '1',
     }
     this.timerBtn= this.timerBtn.bind(this);
     this.projectBtn= this.projectBtn.bind(this);
     this.documentBtn= this.documentBtn.bind(this);
     this.filesBtn= this.filesBtn.bind(this);
   }
   timerBtn(){
     this.setState({
       active:'2',
     })
   }
   projectBtn(){
     this.setState({
       active:'3',
     })
   }
   documentBtn(){
     this.setState({
       active:'4',
     })
   }
   filesBtn(){
     this.setState({
       active:'5',
     })
   }

 render() {
  return (
    <div class='nav-container'>
     <div class= 'tittle-container'>
      <tittle class='nav-tittle'>Time</tittle>
      <tittle class='nav-tittle2'>wise.</tittle>
    </div>
    <NavButton  lable ="Timer"  onClick = {this.timerBtn} active = {this.state.active} myNum = "2"/>
    <NavButton  lable ="Projects" onClick = {this.projectBtn} active = {this.state.active} myNum = '3'/>
    <NavButton  lable ="documents"  onClick = {this.documentBtn} active = {this.state.active} myNum = "4"/>
    <NavButton  lable ="files" onClick = {this.filesBtn} active = {this.state.active} myNum = '5'/>

    </div>
  );
 }
}

export default HabitNav;
